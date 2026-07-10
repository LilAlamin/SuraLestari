"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Send, X, MessageSquare, Sparkles } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { cn } from "@/lib/utils";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Kulonuwun! 🧑‍🌾 Sugeng rawuh ing SuraLestari. Kulo **Ki Petruk**, asisten virtual pariwisata berkelanjutan panjenengan.\n\nTanya apa saja tentang Solo, atau ketik kepribadian/minat panjenengan biar kulo rekomendasikan wisata yang cocok dan ramah lingkungan!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom of chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const sendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    const userMsg = textToSend.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMsg }]);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, { role: "user", content: userMsg }],
        }),
      });

      const data = await response.json();
      if (data.reply) {
        setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: "Nuwun sewu, kulo nembe wonten alangan (gagal memproses chat). Coba malih nggih.",
          },
        ]);
      }
    } catch (e) {
      console.error(e);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Nuwun sewu, koneksinya sedang bermasalah. Coba ulangi beberapa saat lagi.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    sendMessage(suggestion);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[90vw] sm:w-[400px] h-[550px] bg-white rounded-2xl shadow-2xl border border-[#3b3f2d]/15 flex flex-col overflow-hidden transition-all duration-300 ease-out transform translate-y-0">
          {/* Header */}
          <div className="bg-[#3b3f2d] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full bg-white/10 overflow-hidden border border-white/20">
                <Image
                  src="/images/ai-mascot.png"
                  alt="Mascot"
                  fill
                  className="object-cover scale-110"
                />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-sm tracking-wide">Ki Petruk</h3>
                <div className="flex items-center gap-1.5 text-[10px] text-[#f2fbed]/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Lestari AI Guide
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat History */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#f9f7f2]/50">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={cn(
                  "flex items-start gap-2 max-w-[85%]",
                  msg.role === "user" ? "ml-auto flex-row-reverse" : "mr-auto"
                )}
              >
                {msg.role === "assistant" && (
                  <div className="relative w-6 h-6 rounded-full overflow-hidden bg-[#3b3f2d]/10 shrink-0 border border-[#3b3f2d]/15">
                    <Image
                      src="/images/ai-mascot.png"
                      alt="Mascot"
                      fill
                      className="object-cover scale-110"
                    />
                  </div>
                )}
                <div
                  className={cn(
                    "rounded-2xl px-4 py-3 text-sm leading-relaxed",
                    msg.role === "user"
                      ? "bg-[#3b3f2d] text-white rounded-tr-none"
                      : "bg-white border border-[#3b3f2d]/10 text-[#181610] rounded-tl-none shadow-sm"
                  )}
                >
                  <div className="text-inherit text-sm leading-relaxed [&_p]:mb-2 [&_p:last-child]:mb-0 [&_strong]:font-semibold [&_ul]:list-disc [&_ul]:pl-4 [&_ul]:space-y-1 [&_ul]:my-2 break-words">
                    <ReactMarkdown>
                      {msg.content}
                    </ReactMarkdown>
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-start gap-2 max-w-[85%] mr-auto">
                <div className="relative w-6 h-6 rounded-full overflow-hidden bg-[#3b3f2d]/10 shrink-0">
                  <Image
                    src="/images/ai-mascot.png"
                    alt="Mascot"
                    fill
                    className="object-cover scale-110"
                  />
                </div>
                <div className="bg-white border border-[#3b3f2d]/10 rounded-2xl rounded-tl-none px-4 py-3 text-sm shadow-sm flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-[#3b3f2d]/60 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-[#3b3f2d]/60 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 bg-[#3b3f2d]/60 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestions (Only show when not loading and just started/empty input) */}
          {messages.length === 1 && !isLoading && (
            <div className="px-4 py-2 bg-[#f9f7f2]/50 border-t border-[#3b3f2d]/5 flex flex-wrap gap-1.5">
              <button
                onClick={() => handleSuggestionClick("Rekomendasikan wisata alam sepi & tenang")}
                className="text-[11px] bg-white border border-[#3b3f2d]/10 hover:border-[#3b3f2d]/30 text-[#3b3f2d] px-2.5 py-1 rounded-full transition-colors font-medium"
              >
                Wisata Alam Tenang 🌿
              </button>
              <button
                onClick={() => handleSuggestionClick("Saya mau keliling wisata sejarah & budaya")}
                className="text-[11px] bg-white border border-[#3b3f2d]/10 hover:border-[#3b3f2d]/30 text-[#3b3f2d] px-2.5 py-1 rounded-full transition-colors font-medium"
              >
                Sejarah & Keraton 🏛️
              </button>
              <button
                onClick={() => handleSuggestionClick("Rekomendasikan jajanan kuliner khas Solo")}
                className="text-[11px] bg-white border border-[#3b3f2d]/10 hover:border-[#3b3f2d]/30 text-[#3b3f2d] px-2.5 py-1 rounded-full transition-colors font-medium"
              >
                Kuliner Khas 🍲
              </button>
              <button
                onClick={() => handleSuggestionClick("Tanya tips belanja batik tulis asli")}
                className="text-[11px] bg-white border border-[#3b3f2d]/10 hover:border-[#3b3f2d]/30 text-[#3b3f2d] px-2.5 py-1 rounded-full transition-colors font-medium"
              >
                Batik & UMKM 🎨
              </button>
            </div>
          )}

          {/* Footer Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage(input);
            }}
            className="p-3 border-t border-[#3b3f2d]/10 bg-white flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Tanya Ki Petruk..."
              className="flex-1 bg-[#f9f7f2] border border-[#3b3f2d]/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-[#3b3f2d] transition-colors"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="bg-[#3b3f2d] hover:bg-[#596342] text-white p-2 rounded-xl transition-colors disabled:opacity-40"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Button Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "relative group w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform active:scale-95 border hover:scale-105",
          isOpen
            ? "bg-[#3b3f2d] text-white border-[#3b3f2d]"
            : "bg-[#fff7ef] text-[#3b3f2d] border-[#3b3f2d]/20 hover:border-[#3b3f2d]"
        )}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <div className="relative w-full h-full rounded-full overflow-hidden flex items-center justify-center p-1.5">
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image
                src="/images/ai-mascot.png"
                alt="Mascot Toggle"
                fill
                className="object-cover scale-[1.25] origin-center translate-y-0.5"
              />
            </div>
            {/* Sparkle badge */}
            <span className="absolute -top-1 -right-1 bg-emerald-500 text-white rounded-full p-1 border border-white">
              <Sparkles className="w-2.5 h-2.5" />
            </span>
          </div>
        )}
      </button>
    </div>
  );
}
