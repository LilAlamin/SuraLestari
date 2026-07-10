import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const apiKey = process.env.GEMINI_API_KEY;

export async function POST(req: Request) {
  try {
    if (!apiKey) {
      return NextResponse.json(
        { error: "GEMINI_API_KEY is not configured in .env" },
        { status: 500 }
      );
    }

    const { messages } = await req.json();
    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Invalid messages format" },
        { status: 400 }
      );
    }

    // Initialize Gemini API
    const ai = new GoogleGenerativeAI(apiKey);
    // Use the fast and capable gemini-2.5-flash model
    const model = ai.getGenerativeModel({
      model: "gemini-2.5-flash",
      tools: [{ googleSearch: {} } as any], // Enable Google Search Grounding to find up-to-date local info
      systemInstruction: `Anda adalah "Ki Petruk", asisten wisata Solo yang ramah dan gaul. Tugas membantu wisatawan cari tahu tentang Solo (ekowisata, budaya, kuliner) dengan prinsip pariwisata berkelanjutan.

WAJIB — ATURAN SINGKAT:
1. Jawab PENDAPAT—maksimal 4-5 baris. Titik. Tidak perlu pembukaan panjang.
2. Format: 1-2 kalimat utama langsung menjawab, lalu maks 3 poin (nama tempat + lokasi/lokasinya).
3. Contoh jawaban benar:
   "Coba jajanan Nasi Liwet khas Bu Sani di kawasan Pasar Gede, dekat Keraton. Juga ada:
    • Selat Solo — kafe tradisional di Jl. Hasanudin (belakang Gladag)
    • Serabi Notosuman — Jl. MT Haryono, nyaris tiap turis beli.
   Bu Sani dan para UMKM ini mengajak kita mencintai produk lokal, makin ramai makin ekonomi rakyat tumbuh (SDG 8)."
4. CONTOH JAWABAN SALAH:
   "Halo! Sugeng rawuh... Senang sekali Anda bertanya..." — STOP. Tidak usah.
5. Tidak usah basa-basi. Langsung ke inti. Tapi tetap ramah.
6. Sisipkan 1 baris tips sustainable (peduli lingkungan/ekonomi lokal) di akhir tanpa memaksakan.`,

      generationConfig: {
        maxOutputTokens: 200,
        temperature: 0.7,
      },
    });

    // Format chat history for Gemini
    // Gemini API history expects roles: 'user' or 'model'
    // Also, the history MUST start with a 'user' message. 
    // We skip any initial 'model' (assistant) messages (like the static greeting).
    let history = messages.slice(0, -1).map((msg: any) => ({
      role: msg.role === "assistant" ? "model" : "user",
      parts: [{ text: msg.content }],
    }));

    const firstUserIndex = history.findIndex((msg: any) => msg.role === "user");
    if (firstUserIndex !== -1) {
      history = history.slice(firstUserIndex);
    } else {
      history = [];
    }

    const latestMessage = messages[messages.length - 1].content;

    const chat = model.startChat({
      history: history,
      generationConfig: {
        maxOutputTokens: 200,
        temperature: 0.7,
      },
    });

    const result = await chat.sendMessage(latestMessage);
    const reply = result.response.text();

    return NextResponse.json({ reply });
  } catch (error: any) {
    console.error("Chat API Error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to process chat" },
      { status: 500 }
    );
  }
}
