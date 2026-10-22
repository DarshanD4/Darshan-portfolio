# Darshan MP — Portfolio V2

> **Production Cross-Platform Mobile Engineer & AI Product Developer**  
> Specialized in Flutter, React Native, applied AI/ML architectures, and resilient client-cloud backends.

---

## 📌 Overview

This repository contains the source code for the **V2 overhaul** of Darshan MP's professional developer portfolio. The redesign enhances the existing clean, employable visual identity (light background, rounded cards, blue accent, dynamic time-of-day theme system) into a case-study-driven portfolio with verified credentials, alternating feature cards, and interactive modals.

---

## 🚀 Tech Stack

- **Core Framework:** React 19 (`react`, `react-dom`)
- **Build Tool:** Vite 8
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`, `tailwindcss`)
- **Animations & Interactivity:** Framer Motion 12.x, GSAP 3.x
- **Typography:** Plus Jakarta Sans, JetBrains Mono
- **Deployment:** CI/CD linked via GitHub repository (`DarshanD4/Darshan-portfolio`)

---

## 🛠️ Complete Summary of V2 Enhancements

### 1. Hero Section (`src/components/hero.jsx`)
- **Headline:** Updated from a generic tag to:  
  *`"I build mobile experiences & intelligent products."`*
- **Role Subhead:** Added distinct specialization tag:  
  *`Flutter Developer · AI/ML · Full-Stack`*
- **Lead Narrative:**  
  *`"I turn ideas into polished mobile products, from interface to API to deployment."`*
- **Updated Profile Photo:** Replaced the older image with **`mine1.png`** (high-resolution portrait, 1102x1427) inside the 3D tilt interactive `ProfileCard`.
- **Action Buttons:** Added `[ Explore my work ]`, `[ Download Resume ]`, and `[ View Verified Letters ]`.

### 2. Professional Experience (`src/components/experience.jsx`)
- **Completed Status:** Updated both internships from ongoing to **Completed**:
  - **ByteCraft Studios:** *Flutter Developer Intern* (`Completed Internship · 2026`)
    - Built cross-platform Flutter applications.
    - Integrated REST APIs with asynchronous error caching.
    - Implemented state management (`ChangeNotifier`, `ValueNotifier`).
    - Engineered responsive interfaces across phone and tablet screens.
  - **Code Infinite:** *App Development Intern* (`Completed Internship · Aug 2024 — Sep 2024`)
    - Built cross-platform mobile apps with React Native and Android.
    - Integrated backend REST APIs and Supabase.
    - Real-time application features and rapid 2-day Figma-to-MVP delivery.
- **Proof Actions:** Added dedicated **`[ VIEW COMPLETION LETTER ]`** buttons to each experience card opening the verified letter modal with direct PDF download.

### 3. Dedicated Credentials Section (`src/components/credentials.jsx`)
- Created a standalone **Credentials & Certifications** section featuring verified badge cards:
  - **ByteCraft Studios:** Flutter Development Internship · Completed 2026 · Verified by Dhiraj Zope (Founder & CEO).
  - **Code Infinite:** Android App Development Internship · Completed Aug–Sep 2024 · Verified by Sangam Soft Solutions.
  - **B.Tech Degree in AI & Data Science:** KGISL Institute of Technology · Nov 2022 – May 2026 · CGPA: 7.9 / 10.
  - **AITM Codefest 2024:** Hackathon Runner-Up for Modular AI Assistant architecture.
  - **Amazon AWS DeepRacer 2023:** Runner-Up Award for Autonomous Reinforcement Learning Racing.
  - **Open-Source GitHub:** Verified identity (`DarshanD4`).
- **Interactive Certificate Modal (`src/components/CertificateModal.jsx`):** Allows recruiters to preview official completion letter PDFs inline, open them in a new tab, or download them directly.

### 4. Selected Projects Overhaul (`src/components/projects.jsx` & `src/components/ProjectMockups.jsx`)
- Transformed small cards into **alternating large feature cards** with substantial visual weight:
  - **Featured Project #1: Edprowise — Employee Management Platform**
    - Marked with **`PROFESSIONAL PROJECT`** and **`Built in Production`** indicators.
    - Full-scale ERP & employee management platform in Flutter.
    - Highlights: Payroll engine, dynamic salary slips, IT declarations, biometric attendance, leave workflows, LMS coursework, timetable scheduling, and adaptive portrait/landscape responsiveness.
  - **Featured Project #2: PulseFit — Full-Stack Hybrid Workout & Nutrition Engine**
    - Marked with **`FLAGSHIP APPLICATION`** and **`0ms Offline Resilience · Fold & Flip Ready`** indicators.
    - Local-first Flutter 3.x & Supabase fitness ecosystem with 0ms offline latency and background cloud sync.
    - Highlights & Differentiators:
      1. *Crash-Proof Workout Auto-Save*: 15s heartbeat state serialization via `WorkoutDraftService` restoring in-progress sessions after OS process kills.
      2. *Choice-Based Equipment Swapping*: Anti-bloat exercise library with 1-tap Barbell/Dumbbell/Smith choices, preserving progressive overload history.
      3. *Bank-Grade Private Visual Vault*: Progress photos stored in private Supabase buckets rendered strictly in-memory using HMAC signed URLs (60m TTL) with Row-Level Security.
      4. *Adaptive Multi-Form-Factor UI*: Responsive layout constraints (`ConstrainedBox`) tailored for Galaxy Z Fold tablets and Z Flip clamshells with keyboard-safe viewports.
      5. *Same-Day Metric Aggregator*: Calendar-day aggregation preventing two-a-day workouts from corrupting weekly streak counts.
      6. *0ms Local-First Hybrid Architecture*: Immediate `SharedPreferences` write with asynchronous background sync to Supabase.
      7. *Shimmer Skeleton System*: 10 custom skeleton wireframes eliminating Cumulative Layout Shift (CLS = 0).
  - **Project #3: NetGap — Mindset-based Entrepreneur Community**
    - Reverse layout with real-time founder feed, Supabase WebSockets, and Gemini AI compatibility scoring (94%).
  - **Project #4: LipSync Deepfake Detector — Computer Vision & Temporal AI**
    - Dual-stream pipeline analyzing phoneme-viseme temporal misalignments with PyTorch CNN + Bidirectional LSTM (verified 85% accuracy).
  - **Project #5: Personal Finance Tracker — Offline-First Budget Manager**
    - Flutter fintech client with 8+ screens, Figma design system execution, and SQLite local offline sync.
  - **Bonus Showcase: 3D Isometric Stack Mobile Game**
    - Flutter CustomPainter canvas mechanics with particle physics.

### 5. Project Detail Case Study Modal (`src/components/ProjectModal.jsx`)
- Clicking **`View Case Study`** on any project opens a comprehensive modal drawer presenting:
  - **Architecture Pipeline:** Visual flow diagram (e.g., `Flutter UI` $\rightarrow$ `Service Layer` $\rightarrow$ `REST API` $\rightarrow$ `Backend Server` $\rightarrow$ `Database`).
  - **Role & Technology Stack:** Detailed library breakdown.
  - **Key Contributions Checklist:** Itemized achievements with green `✓` checkmarks.
  - **Core Modules & Production Links:** Demo links and source code repositories.

### 6. Interactive Skills Section (`src/components/skills.jsx`)
- Redesigned into 5 core discipline domains that **expand smoothly on hover** (and tap on mobile) to display detailed sub-skills:
  - **Flutter & Mobile:** Dart, ChangeNotifier, ValueNotifier, responsive UI, REST caching, React Native.
  - **AI & Machine Learning:** Python, PyTorch, TensorFlow, CNNs, LSTMs, OpenCV, Gemini API.
  - **Backend & Cloud:** Firebase Auth/Firestore, Supabase, Node.js, RBAC security.
  - **Databases & Storage:** SQLite offline-first caching, PostgreSQL, Cloud Firestore.
  - **Tools & Engineering:** Git, Postman, Figma, Android Studio, VS Code, CI/CD readiness.

### 7. Beyond The Code Section (`src/components/beyondCode.jsx`)
- Added a subtle section highlighting product perspective and human dimension:
  > *"I enjoy exploring the intersection of technology, design, and real-world products. When I'm not building apps, I'm usually learning something new, experimenting with ideas, or working on my next project."*
- Features interest pillars: Product Thinking, Continuous Learning, Competitive Hackathons, and System Design.

### 8. Stronger Final CTA (`src/components/contact.jsx`)
- Replaced generic ending with a high-conversion call-to-action:
  - **`"Have a product idea? Let's build it."`**
  - Subhead: `Available for opportunities: Mobile Development · Flutter · AI / ML`
  - Direct conversion channels: One-click Email (`darshanmp4056@gmail.com`), Copy Email button, LinkedIn, GitHub, and WhatsApp.

### 9. Assets & Documents Added
- Copied official verification documents into `public/` for reliable browser access:
  - `public/Darshan_MP_ByteCraft_Internship_Letter.pdf` (ByteCraft completion letter)
  - `public/Darshan_MP_Code_Infinite_Certificate.pdf` (Code Infinite certificate)
  - `public/Darshan_MP_Resume.pdf` (Latest resume)
  - `public/mine1.png` & `src/assets/mine1.png` (High-resolution profile portrait)

### 10. Automated Time-Based Light/Dark Mode (`src/context/ThemeContext.jsx` & `src/index.css`)
- **9:00 AM to 3:00 PM:** Automatic **Light Mode** (crisp slate background `--bg-main: #f8fafc`, pure white cards `--surface-card: #ffffff`, dark slate typography).
- **3:00 PM to 9:00 AM:** Automatic **Dark Mode** (deep midnight navy `--bg-main: #091540`, dark cards `--surface-card: #0e1c4e`, Tailwind root `.dark` class activated).
- **Interactive Navbar Control:** Shows local time, active state, and allows 1-tap manual toggle or return to auto schedule.

---

## 📂 Project Directory Structure

```text
darshan-portfolio/
├── files/                                # Source certificates & documents
│   ├── Darshan M P Internship Letter.pdf # ByteCraft letter
│   ├── intern certificate.pdf            # Code Infinite certificate
│   └── MA_SD_Resume.pdf                  # Resume
├── public/                               # Static assets served directly by Vite
│   ├── Darshan_MP_ByteCraft_Internship_Letter.pdf
│   ├── Darshan_MP_Code_Infinite_Certificate.pdf
│   ├── Darshan_MP_Resume.pdf
│   ├── mine1.png
│   └── favicon.svg
├── src/
│   ├── assets/                           # Image assets (mine1.png, bytecraft_logo.png)
│   ├── components/
│   │   ├── navbar.jsx                    # Navigation bar with time theme switcher
│   │   ├── hero.jsx                      # Hero section with ProfileCard
│   │   ├── about.jsx                     # Engineering story & snapshot
│   │   ├── experience.jsx                # Completed internships timeline
│   │   ├── credentials.jsx               # Verified credentials & certifications
│   │   ├── CertificateModal.jsx          # Inline certificate previewer modal
│   │   ├── projects.jsx                  # Alternating large project feature cards
│   │   ├── ProjectMockups.jsx            # Custom UI preview mockups
│   │   ├── ProjectModal.jsx              # Case study & architecture modal
│   │   ├── skills.jsx                    # Expandable domain skill cards
│   │   ├── beyondCode.jsx                # Personal & product philosophy section
│   │   ├── contact.jsx                   # Final call to action & channels
│   │   ├── footer.jsx                    # Footer with copyright & scroll to top
│   │   ├── ProfileCard.jsx               # Interactive 3D tilt profile card
│   │   └── PixelTransition.jsx           # Canvas pixelated card hover effect
│   ├── context/
│   │   └── ThemeContext.jsx              # Time-of-day dynamic theme provider
│   ├── App.jsx                           # Application root layout
│   ├── index.css                         # Tailwind CSS v4 variables & glass styles
│   └── main.jsx                          # React application entry point
├── package.json
└── vite.config.js
```

---

## 💻 Local Development & Commands

```bash
# Install dependencies
npm install

# Run Vite development server (default: port 5173)
npx vite --port 5173

# Create production build
npm run build

# Preview production build locally
npm run preview
```

---

*Note: This documentation file is kept locally for future reference and architectural maintenance.*
