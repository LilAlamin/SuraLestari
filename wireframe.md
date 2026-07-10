[[ :logo: SuraLestari | Beranda | Tentang | Pendekatan | Destinasi | Tim | Mentor | [Mulai Perjalanan]* ]]

---

## 1. HERO SECTION — HeroSection.tsx
> Sticky hero, full viewport, dark video background with cloud overlay

::: card
::: row {.right}

---

# Jelajahi Keindahan Surakarta.

> **Layer 1:** Video background `/videos/Solo_Hero.mp4` → chains to `solo2_hero.mp4`
> **Layer 2:** Black overlay 15%
> **Layer 3:** Cloud video layer (`clouds-transcode.mp4`) scrolls up on scroll — mix-blend-screen
> **Behavior:** Sticky top-0, parallax on scroll, text fades on scroll (opacity → 0 at 350px)
> **Shape:** Rounded top corners (64px desktop / 32px tablet / 16px mobile)

:::
:::

---

## 2. MISSION SECTION — MissionSection.tsx
> Centered single-column, white bg, Tugu Keris watermark at 5% opacity

::: card
### Eco Journey Surakarta
# Wisata Berkelanjutan untuk Masa Depan

---

SuraLestari mengajak Anda mengenal destinasi ekowisata di Surakarta. Nikmati keindahan alam, lestarikan budaya lokal, dan dukung UMKM melalui perjalanan wisata yang bertanggung jawab.

> **Background:** `tugu_keris.png` — absolute centered, opacity 5%, scale 110–125%
> **Divider:** 16×2px line `bg-[#3b3f2d]` opacity 20%
> **Marker:** `01 // SURALESTARI MISSION` — mono, 10px, opacity 50%

:::

---

## 3. APPROACH SECTION — ApproachSection.tsx
> Sticky header + 3 overlapping sticky cards (alternating bg)

### 3a. Approach Header (sticky)
::: card

### Jenis Pariwisata
#### di Surakarta
Alam, budaya, dan komunitas menyatu dalam setiap perjalanan wisata berkelanjutan di Surakarta.

> **Bg:** white, min-h 60vh
> **Eyebrow:** "Eksplorasi Solo" — olive, centered, flanked by lines

:::

### 3b. Card 01 — Wisata Alam (sticky, white bg)
::: layout {.sidebar-main}
::: sidebar
![Image: wisata_alam_solo.jpg]
> Aspect 4/3, rounded-2xl, hover zoom
> Caption: `01 — Solo, Jawa Tengah`

:::

::: main
### 01 // WISATA ALAM
*Eksplorasi Keindahan Alam Solo*

Surakarta dikelilingi panorama alam yang memukau. Dari hamparan hijau Taman Balekambang yang bersejarah, kesejukan Hutan Kota Kadipaten, hingga pesona Waduk Cengklik saat senja.

---

#### Destinasi Unggulan

| Taman Balekambang |{.success} | Hutan Kota Kadipaten |{.success} | Waduk Cengklik |{.success} | Gunung Lawu |{.success} | Kebun Raya Purwodadi |{.success}
:::
:::

### 3c. Card 02 — Budaya & Heritage (sticky, cream bg)
::: layout {.sidebar-main}
::: sidebar
### 02 // BUDAYA & HERITAGE
*Warisan Leluhur yang Hidup*

Solo adalah denyut nadi budaya Jawa. Keraton Kasunanan Surakarta dan Pura Mangkunegaran berdiri sebagai saksi bisanya sejarah yang masih lestari.

---

#### Destinasi Unggulan

| Keraton Kasunanan |{.success} | Pura Mangkunegaran |{.success} | Kampung Batik Laweyan |{.success} | Wayang Orang Sriwedari |{.success} | Museum Radya Pustaka |{.success}
:::

::: main
![Image: budaya_heritage_solo.jpg]
> Aspect 4/3, rounded-2xl, hover zoom
> Caption: `02 — Solo, Jawa Tengah`

:::
:::

### 3d. Card 03 — UMKM & Komunitas (sticky, white bg)
::: layout {.sidebar-main}
::: sidebar
![Image: umkm_komunitas_solo.jpg]
> Aspect 4/3, rounded-2xl, hover zoom
> Caption: `03 — Solo, Jawa Tengah`

:::

::: main
### 03 // UMKM & KOMUNITAS
*Kreativitas dan Ekonomi Lokal*

Semangat wirausaha warga Solo menghidupkan setiap sudut kota. Berburu barang antik di Pasar Triwindu, mencicipi Nasi Liwet di Pasar Gede, atau belajar membatik di Kampung Kauman.

---

#### Destinasi Unggulan

| Pasar Triwindu |{.success} | Pasar Gede |{.success} | Kampung Batik Kauman |{.success} | Solo Batik Carnival |{.success} | Kuliner Khas Solo |{.success}
:::
:::

---

## 4. PORTFOLIO SECTION — PortfolioSection.tsx
> Sidebar sticky + 2/3 grid of startup cards

::: layout {.sidebar-main}
::: sidebar
## Portfolio

From fungi to fintech, we back pre-seed and seed startups that are literally changing the world.
> Sticky, bg-zinc-50, full height

:::

::: main
> Grid: 1 col mobile / 2 col md / 3 col xl, gap-6

::: grid-3 card

### Aarden
|ENABLING TECH|{.primary}
AI-powered decision-making for land buyers.

### Amini
|ENABLING TECH|{.primary}
Environmental data for Africa.

### Array Labs
|ENABLING TECH|{.primary}
3D satellite imagery.

### BluumBio
|EXTINCTION DRIVERS|{.warning}
Enzymes to break down pollutants.

### Cambium Carbon
|EXTINCTION DRIVERS|{.warning}
Circular economy for urban timber.

### Cecil
|CLIMATE X BIODIVERSITY|{.success}
Data infrastructure for natural capital.

### Foray
|ENABLING TECH|{.primary}
Cell lines from plant species.

### Funga
|CLIMATE X BIODIVERSITY|{.success}
Rewilding the fungal microbiome for forests.

### Inversa
|EXTINCTION DRIVERS|{.warning}
Luxury leather from invasive species.

:::
:::
:::

---

## 5. TEAM SECTION — TeamSection.tsx
> White bg, About Us heading, 5-member grid

### About Us

Our mission is to find and supercharge founders taking on the planet's most important work. Together, we bring networks and over two decades of experience across conservation, venture, and startups.

::: grid-3 card

### TOM QUIGLEY
**MANAGING DIRECTOR**
A conservation technologist and startup operator, Tom has spent over a decade working on and advising teams at the overlap of tech and nature.

### KEVIN WEBB
**MANAGING DIRECTOR**
With over 15 years of venture and angel investing in marketplaces, hardware, and biodiversity, Kevin has worked with startups from idea through IPO.

### ANNIE MCCLUSKEY
**SR. ASSOCIATE**
From Barclays Power and Utilities to National Geographic's endowment, Annie's career has centered on science, conservation, and capital.

:::

::: grid-2 card

### KIT MCDONNELL
**HEAD OF ECOSYSTEM**
A leading biotech startup operator and advisor, Kit has specialized in the intersection of nature, entrepreneurship, and culture.

### EVERETT SANDERSON
**SR. ASSOCIATE**
From renewable energy banking to leading a climate VC strategy, Everett has spent his career directing capital toward nature-positive outcomes.

:::

---

## 6. MENTORS SECTION — MentorsSection.tsx
> Sidebar sticky + infinite horizontal marquee

::: layout {.sidebar-main}
::: sidebar
### Mentors
> Sticky, white bg, border-right, w-1/4

:::

::: main
> **Marquee animation:** 30s linear infinite, pauses on hover
> Cards duplicated for seamless loop

::: row
::: card
**Andre Haddad**
CEO @ Turo
:::

::: card
**Andrew Farnsworth**
Lead Scientist @ BirdCast
:::

::: card
**Ashley Zehnder**
CEO @ Fauna Bio
:::

::: card
**Bailey Richardson**
Head of Marketing @ Substack
:::

::: card
**Beth Shapiro**
Chief Science Officer @ Colossal
:::

::: card
**Christine Spang**
CTO @ Nylas
:::
:::

> 28 total mentors in infinite scroll loop

:::
:::

---

## 7. FOOTER SECTION — FooterSection.tsx
> Three stacked sections: Pledge → CTA → Footer Details

### 7a. Pledge (sticky, black bg, full screen)
::: card

## Janji untuk Bumi
Kami percaya pada masa depan yang berkelanjutan, di mana wisata dan pelestarian alam berjalan beriringan.

> Full viewport height, centered, white text, black bg

:::

### 7b. CTA (sticky, white bg, full screen)
::: card

## Siap Menjelajah?
Hubungi kami untuk merencanakan perjalanan ekowisata Anda di Surakarta.

[Hubungi Kami]*

> Full viewport height, centered, black bg on white

:::

### 7c. Footer Details (relative, black bg, full screen)
::: card

### SuraLestari
SuraLestari © 2026 — Eco Journey Surakarta

::: row {.right}

[Instagram]* | [YouTube]* | [BytesFest 2026]*

:::

> Full viewport height, white text, bottom-aligned, flex row justify-between

:::
