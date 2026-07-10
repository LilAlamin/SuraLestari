# 🌿 SuraLestari — Eco Journey Surakarta

> **SDGs Creative Web Competition — BytesFest 2026**
>
> Sub-tema: **Eco Journey: Sustainable Tourism Experience**

SuraLestari adalah platform ekowisata interaktif modern untuk Kota Surakarta (Solo). Website ini dirancang khusus untuk mempromosikan destinasi wisata ramah lingkungan, melestarikan warisan budaya lokal, serta memberdayakan ekonomi UMKM kreatif di Surakarta dengan menyelaraskan tujuan pembangunan berkelanjutan PBB (SDG 8 & SDG 15).

---

## 🌟 Fitur Utama (Features)

1. **🎬 Sticky Hero Section & Cloud Overlay**
   - Video latar belakang dinamis yang menampilkan pesona Surakarta (`Solo_Hero.mp4` & `solo2_hero.mp4` terintegrasi berurutan secara otomatis).
   - Efek overlay awan 3D interaktif yang menyatu halus saat pengguna menggulir halaman.

2. **⛰️ Pariwisata Berkelanjutan Terintegrasi (Destinasi Unggulan)**
   - **Wisata Alam (SDG 15):** Menyorot pelestarian area hijau seperti Taman Balekambang, Hutan Kota, dan lereng Gunung Lawu.
   - **Budaya & Heritage:** Edukasi sejarah hidup Keraton Kasunanan, Mangkunegaran, hingga Kampung Batik Laweyan.
   - **UMKM & Komunitas (SDG 8):** Mendorong pembelian langsung di Pasar Gede, Pasar Triwindu, dan Kauman.

3. **📊 SDG Impact Tracker Dashboard**
   - Dashboard statistik dampak ekowisata yang terukur (SDG 8 & 15).
   - Fitur **Aksi Anda**: Checklist interaktif bagi wisatawan untuk melacak aksi ramah lingkungan mereka selama berkunjung ke Solo dengan progress bar dinamis.
   - Tombol **Dukung Misi** dengan notifikasi toast keberhasilan.

4. **🚗 Kalkulator Karbon Interaktif (Eco-Calculator)**
   - Simulasi pemilihan moda transportasi (jalan kaki, sepeda, becak lokal, Batik Solo Trans).
   - Menghitung persentase karbon terhemat, jumlah emisi CO₂ yang dikurangi, serta estimasi pohon yang terselamatkan secara real-time.

5. **🤖 AI Chatbot "Ki Petruk" (Integrasi Google Gemini)**
   - Asisten virtual pintar berbasis **Gemini 2.5 Flash** dengan kepribadian Ki Petruk (humoris, bijaksana, kearifan lokal Jawa).
   - Memberikan rekomendasi wisata Solo yang disesuaikan dengan kepribadian/minat wisatawan serta memberikan tips kelestarian lingkungan.

---

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router, React 19, TypeScript strict mode)
- **AI Engine:** Google Gemini API (`@google/generative-ai`)
- **Styling:** Tailwind CSS v4 (Desain minimalis, modern, palette oklch hangat & natural)
- **UI Components:** shadcn/ui (Radix Primitives) + Lucide Icons
- **Markdown:** `react-markdown` (Formatting chat AI Ki Petruk)

---

## 🚀 Panduan Instalasi & Menjalankan Program (Installation)

### Prasyarat (Prerequisites)
Pastikan Anda sudah menginstal **Node.js (versi 18.x atau lebih baru)** dan **npm** di komputer Anda.

### Langkah-Langkah (Steps)

1. **Kloning Repositori**
   ```bash
   git clone https://github.com/LilAlamin/template-web-cloner.git
   cd template-web-cloner
   ```

2. **Instalasi Dependencies**
   ```bash
   npm install
   ```

3. **Konfigurasi Environment Variables (`.env`)**
   Kloning file `.env-example` menjadi `.env`:
   ```bash
   cp .env-example .env
   ```
   Buka file `.env` dan masukkan **Google Gemini API Key** Anda:
   ```env
   GEMINI_API_KEY=AIzaSy...
   ```
   *(Anda bisa mendapatkan API key gratis di [Google AI Studio](https://aistudio.google.com/))*

4. **Menjalankan Server Pengembangan (Development)**
   ```bash
   npm run dev
   ```
   Buka [http://localhost:3000](http://localhost:3000) di browser Anda untuk melihat aplikasi berjalan.

5. **Build Produksi (Production Build)**
   Untuk memastikan performa optimal dan bebas error TypeScript/ESLint:
   ```bash
   npm run build
   # atau jalankan check kesehatan projek lengkap
   npm run check
   ```

---

## 📂 Struktur Folder Proyek

```text
src/
  app/              # Next.js routes & API handlers
    api/chat/       # Endpoint API chatbot Gemini Ki Petruk
    layout.tsx      # Root layout & inisialisasi ChatBot
    page.tsx        # Homepage / Landing page utama
  components/       # Komponen React (Hero, Impact, Footer, dll)
    ChatBot.tsx     # Komponen ChatBot asisten Ki Petruk
    ImpactSection.tsx# Dashboard SDG & checklist aksi
    FooterSection.tsx# Eco-calculator karbon & link eksternal
  lib/
    utils.ts        # Utilitas Tailwind Merge & ClassName
public/
  images/           # Aset gambar destinasi & maskot AI
  videos/           # Aset video latar belakang (MP4)
docs/
  superpowers/      # Spesifikasi desain & dokumentasi internal
```

---

## 🌿 Kontribusi SDGs (SDG Alignment)

- **SDG 8: Pekerjaan Layak dan Pertumbuhan Ekonomi**
  - Mendorong pariwisata berkelanjutan yang menciptakan lapangan kerja dan mempromosikan budaya lokal melalui pemberdayaan UMKM Pasar Tradisional dan Kampung Batik.
- **SDG 15: Ekosistem Daratan**
  - Edukasi pelestarian kawasan hijau, konservasi satwa perkotaan, dan kampanye pengurangan limbah plastik sekali pakai melalui aksi nyata wisatawan.

---

**SuraLestari — Eco Journey Surakarta**
*Dibuat untuk BytesFest 2026 — Web Creative Design Competition.*
