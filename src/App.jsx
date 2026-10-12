import { useEffect, useRef, useState } from "react";
import { Mail, Link2, MapPin, Phone, ArrowUpRight } from "lucide-react";

const NAV_ITEMS = [
  { id: "hero", label: "hero.tsx" },
  { id: "about", label: "about.md" },
  { id: "experience", label: "experience.spec.ts" },
  { id: "projects", label: "projects.spec.ts" },
  { id: "skills", label: "skills.json" },
  { id: "contact", label: "contact.ts" },
];

const EXPERIENCE = [
  {
    org: "PT Ariftama Tekindo",
    role: "Backend Developer Intern",
    place: "Bandar Lampung · Hybrid",
    dates: "Jun 2025 – Jan 2026",
    items: [
      "Membangun sistem autentikasi REST (Express.js, MySQL) lengkap dengan verifikasi email dan login Google OAuth.",
      "Mengembangkan backend e-commerce penuh: manajemen produk, alur pemesanan, dan integrasi pembayaran Midtrans.",
      "Menerapkan real-time chat via Socket.IO serta manajemen sesi JWT dengan token blacklisting.",
      "Mencapai 100% pass rate pada 283 skenario pengujian Jest (21 suite, cakupan fungsi 82.79%) lewat whitebox testing dan defensive programming.",
    ],
  },
  {
    org: "Bandung Techno Park",
    role: "Quality Assurance & Backend Developer Intern",
    place: "Bandung · On-site",
    dates: "Jun – Jul 2024",
    items: [
      "Melakukan pengujian fungsional dan manual pada platform pembelajaran berbasis web.",
      "Menulis dokumentasi pengujian lengkap: test case, skenario, dan laporan temuan.",
      "Membuat skrip regresi otomatis dengan Katalon Studio dan berkoordinasi dengan tim dev sebelum rilis.",
      "Membangun backend Laravel/PostgreSQL dengan autentikasi dan unit testing.",
    ],
  },
  {
    org: "Bangkit Academy led by Google, Tokopedia, Gojek & Traveloka",
    role: "Cloud Computing Cohort",
    place: "Remote",
    dates: "Feb – Jul 2024",
    items: [
      "Menuntaskan jalur Google IT Support, Cloud Computing Foundations, dan persiapan sertifikasi ACE.",
    ],
  },
  {
    org: "PT PLN (Persero)",
    role: "IT Administration Intern",
    place: "Bandar Jaya, Lampung Tengah",
    dates: "Mar – Jul 2019",
    items: [
      "Mendukung instalasi perangkat, administrasi jaringan, serta pengelolaan dan pengarsipan data departemen.",
    ],
  },
];

const PROJECTS = [
  {
    name: "E-Commerce & Real-Time Chat Platform",
    tag: "PT Ariftama Tekindo — production project",
    team: "Proyek kolaboratif tim · Peran: Backend Developer",
    images: ["ariftama-mobile.jpg", "ariftama-dashboard.jpg"],
    items: [
      "Backend penuh: autentikasi JWT, manajemen produk, alur pemesanan, dan integrasi pembayaran Midtrans.",
      "Real-time chat pelanggan-admin via Socket.IO, dengan 283 skenario pengujian Jest pada 100% pass rate.",
    ],
    links: [
      { label: "Backend repo", href: "https://github.com/IT131313/be-ecommerce-crm.git" },
      { label: "Frontend repo", href: "https://github.com/faturarkansy/Ariftama-Tekindo.git" },
    ],
  },
  {
    name: "Ternak Klip",
    tag: "QA test case & bug report study",
    images: [],
    items: [
      "Menyusun test plan lengkap dan 24 test case terstruktur untuk alur login, listing produk, keranjang, dan checkout.",
      "Melakukan exploratory testing pada demo e-commerce langsung (SauceDemo), menghasilkan 8 laporan bug terformat.",
    ],
    links: [
      { label: "Lihat test plan", href: "https://github.com/IT131313/Test_Plan_QA.git" },
    ],
  },
  {
    name: "POS (Point of Sale) API",
    tag: "Capstone — Bangkit Academy",
    team: "Proyek kolaboratif tim · Peran: Backend Developer",
    images: ["pos-api.jpg"],
    items: [
      "Merancang dan membangun backend API POS untuk sistem penjualan restoran, menerapkan REST API dan fundamental cloud dari program.",
    ],
    links: [
      { label: "Backend repo", href: "https://github.com/IT131313/POS-Restaurant-api.git" },
      { label: "Frontend repo", href: "https://github.com/BangKumish/RestaurantPOS.git" },
    ],
  },
];

const SKILLS = [
  {
    key: "quality_assurance",
    values: [
      "Manual & Functional Testing",
      "Test Case Design",
      "Katalon Studio",
      "Whitebox Testing (Jest)",
      "Bug Reporting",
      "Test Documentation",
    ],
  },
  {
    key: "programming",
    values: ["JavaScript", "PHP", "Express.js", "Node.js", "Laravel"],
  },
  {
    key: "databases",
    values: ["MySQL", "PostgreSQL"],
  },
  {
    key: "tools_platforms",
    values: [
      "REST API",
      "JWT",
      "Socket.IO",
      "OAuth",
      "Postman",
      "Git",
      "Google Cloud Platform",
    ],
  },
  {
    key: "other",
    values: [
      "Analytical & Critical Thinking",
      "Documentation & Reporting",
      "Cross-functional Teamwork",
    ],
  },
];

export default function App() {
  const [active, setActive] = useState("hero");
  const [navOpen, setNavOpen] = useState(false);
  const sectionRefs = useRef({});
  const [activeProjectImages, setActiveProjectImages] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      {
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0,
      }
    );

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const goTo = (id) => {
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setNavOpen(false);
  };

  return (
    <div className="ihs-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Petrona:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Public+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap');

            html,
             body,
             #root {
             width: 100%;
             min-width: 100%;
             min-height: 100%;
             margin: 0;
             padding: 0;
        }

           body {
             background: #EAEEEB;
        }

.ihs-root {
  width: 100%;
  min-height: 100vh;

  --paper: #EAEEEB;
  --paper-alt: #E0E6E1;
  --ink: #15191A;
  --ink-soft: #4C574F;
  --line: #C9D1CA;
  --panel: #FFFFFF;
  --pine: #1F5D45;
  --pine-soft: #DEEAE3;
  --brick: #8A4130;
  --brick-soft: #F1E1DB;
  --mono-bg: #14181A;
  --mono-text: #E7ECE8;
  --mono-pass: #7FC9A0;
  --mono-dim: #808D85;

  --font-display: 'Petrona', Georgia, serif;
  --font-body: 'Public Sans', system-ui, -apple-system, sans-serif;
  --font-mono: 'IBM Plex Mono', ui-monospace, 'SFMono-Regular', monospace;

  font-family: var(--font-body);
  color: var(--ink);
  background: var(--paper);
  line-height: 1.6;
}

        .ihs-root * {
          box-sizing: border-box;
        }

        .ihs-root a {
          color: inherit;
          text-decoration: none;
        }

        .ihs-root ::selection {
          background: var(--pine);
          color: var(--paper);
        }

        .ihs-shell {
          display: flex;
          min-height: 100vh;
        }

        /* ---- Sidebar ---- */

        .ihs-sidebar {
          width: 236px;
          flex-shrink: 0;
          border-right: 1px solid var(--line);
          padding: 2rem 1.25rem;
          position: sticky;
          top: 0;
          height: 100vh;
          overflow-y: auto;
        }

        .ihs-sidebar-brand {
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--ink-soft);
          letter-spacing: 0.03em;
          margin-bottom: 1.25rem;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .ihs-sidebar-brand .dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--pine);
          flex-shrink: 0;
        }

        .ihs-tree {
          font-family: var(--font-mono);
          font-size: 13px;
        }

        .ihs-tree-root {
          color: var(--ink-soft);
          margin-bottom: 4px;
          padding-left: 8px;
          text-align: left;
        }

        .ihs-tree-item {
          display: block;
          width: 100%;
          text-align: left;
          padding: 6px 8px 6px 20px;
          border-radius: 4px;
          border: none;
          background: transparent;
          color: var(--ink-soft);
          cursor: pointer;
          font-family: var(--font-mono);
          font-size: 13px;
          margin-bottom: 1px;
          transition:
            background 0.15s ease,
            color 0.15s ease;
        }

        .ihs-tree-item:hover {
          background: var(--paper-alt);
          color: var(--ink);
        }

        .ihs-tree-item.is-active {
          background: var(--pine-soft);
          color: var(--pine);
          font-weight: 600;
        }

        .ihs-tree-item.is-active::before {
          content: "▸ ";
        }

        .ihs-sidebar-foot {
          margin-top: 2rem;
          padding-top: 1rem;
          border-top: 1px solid var(--line);
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--ink-soft);
          text-align: left;
        }

        /* ---- Mobile top tab bar ---- */

        .ihs-topbar {
          display: none;
          position: sticky;
          top: 0;
          z-index: 20;
          background: var(--paper);
          border-bottom: 1px solid var(--line);
          overflow-x: auto;
          white-space: nowrap;
          padding: 0.75rem 1rem;
        }

        .ihs-topbar-item {
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--ink-soft);
          background: transparent;
          border: 1px solid var(--line);
          border-radius: 999px;
          padding: 5px 12px;
          margin-right: 8px;
          cursor: pointer;
        }

        .ihs-topbar-item.is-active {
          background: var(--pine);
          color: var(--paper);
          border-color: var(--pine);
        }

        .ihs-main {
          flex: 1;
          min-width: 0;
        }

        /* ---- Hero ---- */

        .ihs-hero {
            width: 100%;
            max-width: 900px;
            padding: 5rem 1.25rem 4rem;
            box-sizing: border-box;
            text-align: left;
        }

          .ihs-hero .ihs-kicker,
          .ihs-hero .ihs-name,
          .ihs-hero .ihs-role,
          .ihs-hero .ihs-tagline,
          .ihs-hero .ihs-subtext {
            text-align: left;
            margin-left: 0;
            margin-right: 0;
          }


        .ihs-kicker {
          font-family: var(--font-mono);
          font-size: 13px;
          color: var(--pine);
          margin-bottom: 1.25rem;
        }

        .ihs-name {
          font-family: var(--font-display);
          font-weight: 500;
          font-size: clamp(2.6rem, 5vw, 4rem);
          line-height: 1.05;
          margin: 0 0 0.5rem;
          letter-spacing: -0.01em;
          color: #15191A;
        }

        .ihs-role {
          font-family: var(--font-mono);
          font-size: 13px;
          letter-spacing: 0.08em;
          color: var(--brick);
          margin-bottom: 1.75rem;
          text-transform: uppercase;
        }

        .ihs-tagline {
          font-family: var(--font-display);
          font-style: italic;
          font-size: 1.35rem;
          color: var(--ink);
          max-width: 34rem;
          margin: 0 0 1rem;
        }

        .ihs-subtext {
          font-size: 1rem;
          color: var(--ink-soft);
          max-width: 34rem;
          margin: 0 0 2.25rem;
        }

        .ihs-cta-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-bottom: 2.75rem;
        }

        .ihs-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 13px;
          padding: 10px 18px;
          border-radius: 6px;
          border: 1px solid var(--ink);
          cursor: pointer;
        }

        .ihs-btn-primary {
          background: var(--ink);
          color: var(--paper);
        }

        .ihs-btn-ghost {
          background: transparent;
          color: var(--ink);
          border-color: var(--line);
        }

        .ihs-btn:hover {
          opacity: 0.85;
        }

        .ihs-terminal {
          background: var(--mono-bg);
          border-radius: 10px;
          padding: 1.5rem 1.75rem;
          font-family: var(--font-mono);
          font-size: 13px;
          color: var(--mono-text);
          overflow-x: auto;
          max-width: 640px;
        }

        .ihs-terminal-head {
          display: flex;
          gap: 6px;
          margin-bottom: 1rem;
        }

        .ihs-terminal-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #3A423D;
        }

        .ihs-terminal-line {
          white-space: pre;
          margin: 0 0 2px;
        }

        .ihs-terminal-pass {
          color: var(--mono-pass);
        }

        .ihs-terminal-dim {
          color: var(--mono-dim);
        }

        .ihs-cursor {
          display: inline-block;
          width: 7px;
          height: 14px;
          background: var(--mono-pass);
          margin-left: 2px;
          vertical-align: -2px;
          animation: ihs-blink 1s step-end infinite;
        }

        @keyframes ihs-blink {
          50% {
            opacity: 0;
          }
        }

        /* ---- Sections ---- */

        .ihs-section {
          padding: 3.5rem 3.5rem;
          max-width: 1200px;
          border-top: 1px solid var(--line);
          text-align: left;
        }

        #projects.ihs-section {
          max-width: none;
        }

        .ihs-section-label {
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--ink-soft);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 1.25rem;
        }

        .ihs-section-title {
          font-family: var(--font-display);
          font-size: 1.9rem;
          font-weight: 500;
          margin: 0 0 1.25rem;
          color: #15191A;
          text-align: left;
        }

        /* ---- About ---- */

        .ihs-about-card {
          background: var(--panel);
          border: 1px solid var(--line);
          border-radius: 10px;
          padding: 1.75rem 2rem;
          max-width: 820px;
          width: 100%;
          box-sizing: border-box;
        }

        .ihs-about-comment {
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--pine);
          margin-bottom: 0.75rem;
        }

        .ihs-about-text {
          font-size: 1.02rem;
          color: #15191A;
          max-width: 40rem;
          margin: 0;
          text-align: left;
        }

        .ihs-fact-row {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          margin-top: 1.5rem;
          padding-top: 1.25rem;
          border-top: 1px dashed var(--line);
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--ink-soft);
        }

        .ihs-fact-row strong {
          color: var(--ink);
          font-weight: 600;
        }

        /* ---- Experience ---- */

        .ihs-job {
          margin-bottom: 2.25rem;
          text-align: left;
        }

        .ihs-job:last-child {
          margin-bottom: 0;
        }

        .ihs-job-head {
          font-family: var(--font-mono);
          font-size: 13px;
          color: var(--brick);
          margin-bottom: 0.35rem;
        }

        .ihs-job-role {
          font-size: 1.1rem;
          font-weight: 600;
          margin: 0 0 2px;
          color: #15191A;
          text-align: left;
        }

        .ihs-job-meta {
          font-size: 0.85rem;
          color: var(--ink-soft);
          margin-bottom: 0.85rem;
        }

        .ihs-job-list {
          list-style: none;
           margin: 0;
           padding: 0;
            text-align: left;
        }

        .ihs-job-list li {
          position: relative;
          padding-left: 1.4rem;
          margin-bottom: 0.55rem;
          font-size: 0.96rem;
          color: var(--ink);
        }

        .ihs-job-list li::before {
          content: "✓";
          position: absolute;
          left: 0;
          color: var(--pine);
          font-family: var(--font-mono);
          font-size: 0.85rem;
        }

        .ihs-project-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          width: 100%;
        }

        .ihs-project-card {
          background: transparent;
          border: 0;
          border-top: 1px solid var(--line);
          border-radius: 0;
          overflow: visible;
          width: 100%;
        }

        .ihs-project-image {
          width: 100%;
          height: auto;
          aspect-ratio: 16 / 9;
          object-fit: contain;
          object-position: center;
          display: block;
          border: 1px solid var(--line);
          background: var(--paper-alt);
        }
          .ihs-project-slider {
          position: relative;
          width: 100%;
        }

        .ihs-slider-prev,
        .ihs-slider-next {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);

          width: 42px;
          height: 42px;

          border: 1px solid var(--line);
          border-radius: 50%;

          background: rgba(255, 255, 255, 0.9);
          color: var(--ink);

          display: flex;
          align-items: center;
          justify-content: center;

          cursor: pointer;
          z-index: 2;
        }

        .ihs-slider-prev {
          left: 16px;
        }

        .ihs-slider-next {
          right: 16px;
        }

        .ihs-slider-prev:hover,
        .ihs-slider-next:hover {
          background: var(--ink);
          color: var(--paper);
        }

        .ihs-slider-dots {
          position: absolute;
          bottom: 14px;
          left: 50%;
          transform: translateX(-50%);

          display: flex;
          gap: 6px;

          z-index: 2;
        }

        .ihs-slider-dots button {
          width: 7px;
          height: 7px;

          padding: 0;
          border: 0;
          border-radius: 50%;

          background: #aaa;
          cursor: pointer;
        }

        .ihs-slider-dots button.is-active {
          background: #111;
        }

        .ihs-project-body {
          padding: 1.5rem 0 0;
            max-width: 100%;
            text-align: left;

        }

        .ihs-project-meta-row {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 0.85rem;
        }

        .ihs-project-team {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--ink-soft);
        }

        .ihs-project-team::before {
          content: "· ";
          color: var(--line);
        }

        .ihs-project-badge {
          display: inline-block;
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--pine);
          background: var(--pine-soft);
          padding: 3px 9px;
          border-radius: 999px;
        }

        .ihs-project-name {
          font-size: clamp(1.25rem, 2vw, 1.55rem);
          font-weight: 600;
          margin: 0 0 0.85rem;
          font-family: var(--font-display);
        }

        .ihs-project-card ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .ihs-project-card li {
          position: relative;
          padding-left: 1.3rem;
          margin-bottom: 0.5rem;
          font-size: 0.94rem;
          color: var(--ink-soft);
        }

        .ihs-project-card li::before {
          content: "–";
          position: absolute;
          left: 0;
          color: var(--brick);
        }

        .ihs-project-links {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 1rem;
          padding-top: 0.9rem;
          border-top: 1px dashed var(--line);
        }

        .ihs-project-links a {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--pine);
        }

        .ihs-project-links a:hover {
          text-decoration: underline;
        }

        /* ---- Skills ---- */

        .ihs-skills-block {
          margin-bottom: 1.4rem;
           text-align: left;
        }

        .ihs-skills-key {
          font-family: var(--font-mono);
          font-size: 13px;
          color: var(--brick);
          margin-bottom: 0.6rem;
          text-transform: capitalize;
        }

        .ihs-tag-row {
          display: flex;
          flex-wrap: wrap;
           justify-content: flex-start;
          gap: 8px;

        }

        .ihs-tag {
          font-family: var(--font-mono);
          font-size: 12px;
          background: var(--panel);
          border: 1px solid var(--line);
          padding: 5px 11px;
          border-radius: 6px;
          color: var(--ink);
        }

        /* ---- Contact ---- */

        .ihs-contact {
          border-bottom: 1px solid var(--line);
        }

        .ihs-contact-line {
          font-family: var(--font-mono);
          font-size: 1rem;
          margin-bottom: 1.75rem;
          color: #15191A;
          text-align: left;
        }

        .ihs-contact-line .k {
          color: var(--pine);
        }

        .ihs-contact-line .s {
          color: var(--ink-soft);
        }

        .ihs-contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 0.9rem;
          margin-bottom: 2rem;
        }

        .ihs-contact-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 0.85rem 1rem;
          background: var(--panel);
          border: 1px solid var(--line);
          border-radius: 8px;
          font-size: 0.92rem;
        }

        .ihs-contact-item svg {
          flex-shrink: 0;
          color: var(--pine);
        }

        /* ---- Footer ---- */

        .ihs-footer {
          padding: 2rem 3.5rem;
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--ink-soft);
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 8px;
        }

        @media (max-width: 1024px) {
          .ihs-sidebar {
            width: 210px;
          }

          .ihs-hero,
          .ihs-section {
              padding: 3.5rem 3.5rem;
               max-width: 1200px;
              border-top: 1px solid var(--line);
               text-align: left;
          }

          .ihs-project-body {
            max-width: 760px;
          }
        }

        @media (max-width: 860px) {
          .ihs-sidebar {
            display: none;
          }

          .ihs-topbar {
            display: block;
          }

          .ihs-hero,
          .ihs-section,
          .ihs-footer {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }

          .ihs-hero {
              padding: 5rem 3.5rem 4rem;
              max-width: 900px;
              text-align: left;
          }

          #projects.ihs-section {
            padding-top: 3rem;
          }

          .ihs-project-grid {
            gap: 2rem;
          }

          .ihs-project-image {
            aspect-ratio: 16 / 10;
          }
        }

        @media (max-width: 600px) {
          .ihs-hero,
          .ihs-section,
          .ihs-footer {
            padding-left: 1rem;
            padding-right: 1rem;
          }

          .ihs-section {
            padding-top: 2.75rem;
            padding-bottom: 2.75rem;
          }

          .ihs-section-title {
            font-size: 1.65rem;
          }

          .ihs-project-grid {
            gap: 1.75rem;
          }

          .ihs-project-image {
            aspect-ratio: 4 / 3;
          }

          .ihs-project-body {
            padding-top: 1.25rem;
          }

          .ihs-project-card li {
            font-size: 0.9rem;
          }

          .ihs-project-links {
            gap: 8px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ihs-cursor {
            animation: none;
          }

          html {
            scroll-behavior: auto !important;
          }
        }

        .ihs-root :focus-visible {
          outline: 2px solid var(--pine);
          outline-offset: 2px;
        }
      `}</style>

      {/* ---- Mobile Navigation ---- */}

      <div className="ihs-topbar">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            className={`ihs-topbar-item${
              active === item.id ? " is-active" : ""
            }`}
            onClick={() => goTo(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="ihs-shell">
        {/* ---- Sidebar ---- */}

        <nav className="ihs-sidebar" aria-label="Navigasi bagian">
          <div className="ihs-sidebar-brand">
            <span className="dot" aria-hidden="true" />
            ihsan-triyadi
          </div>

          <div className="ihs-tree">
            <div className="ihs-tree-root">📁 portofolio/</div>

            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                className={`ihs-tree-item${
                  active === item.id ? " is-active" : ""
                }`}
                onClick={() => goTo(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="ihs-sidebar-foot">
            Bandung, Jawa Barat, Indonesia
            <br />
            Terbuka untuk peluang baru
          </div>
        </nav>

        <main className="ihs-main">
          {/* ---- Hero ---- */}

          <section id="hero" className="ihs-hero">
            <div className="ihs-kicker">$ whoami</div>

            <h1 className="ihs-name">Ihsan Triyadi</h1>

            <div className="ihs-role">
              QA Engineer · Backend Developer
            </div>

            <p className="ihs-tagline">
              Menguji sistem seolah kegagalannya adalah masalah pribadi.
            </p>

            <p className="ihs-subtext">
              Lulusan Informatics Engineering ITERA. Terbiasa membangun REST
              API yang andal, lalu membongkarnya lewat pengujian ketat sebelum
              orang lain sempat menemukan celahnya.
            </p>

            <div className="ihs-cta-row">
              <a
                className="ihs-btn ihs-btn-primary"
                href="mailto:Ihsantriyadi13@gmail.com"
              >
                Email saya <ArrowUpRight size={14} />
              </a>

              <a
                className="ihs-btn ihs-btn-ghost"
                href="https://linkedin.com/in/ihsan-triyadi"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <ArrowUpRight size={14} />
              </a>
            </div>

            <div className="ihs-terminal">
              <div className="ihs-terminal-head">
                <span className="ihs-terminal-dot" />
                <span className="ihs-terminal-dot" />
                <span className="ihs-terminal-dot" />
              </div>

              <p className="ihs-terminal-line ihs-terminal-dim">
                $ node verify-engineer.js --target=ihsan-triyadi
              </p>

              <p className="ihs-terminal-line">&nbsp;</p>

              <p className="ihs-terminal-line">
                <span className="ihs-terminal-pass">✓</span>{" "}
                backend/auth-system.test&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PASS
              </p>

              <p className="ihs-terminal-line">
                <span className="ihs-terminal-pass">✓</span>{" "}
                backend/ecommerce-api.test&nbsp;&nbsp;&nbsp;&nbsp;PASS
              </p>

              <p className="ihs-terminal-line">
                <span className="ihs-terminal-pass">✓</span>{" "}
                backend/realtime-chat.test&nbsp;&nbsp;&nbsp;&nbsp;PASS
              </p>

              <p className="ihs-terminal-line">
                <span className="ihs-terminal-pass">✓</span>{" "}
                qa/regression-suite.test&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;283
                skenario · 100% pass
              </p>

              <p className="ihs-terminal-line">
                <span className="ihs-terminal-pass">✓</span>{" "}
                qa/test-case-design.test&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;24 kasus
                terdokumentasi
              </p>

              <p className="ihs-terminal-line">
                <span className="ihs-terminal-pass">✓</span>{" "}
                qa/bug-reports.test&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8
                laporan diajukan
              </p>

              <p className="ihs-terminal-line">&nbsp;</p>

              <p className="ihs-terminal-line ihs-terminal-pass">
                Suite selesai — 6 passed, 0 failed
              </p>

              <p className="ihs-terminal-line ihs-terminal-dim">
                Coverage: 82.79% fn · Rentang: 2021–2026
                <span className="ihs-cursor" />
              </p>
            </div>
          </section>

          {/* ---- About ---- */}

          <section id="about" className="ihs-section">
            <div className="ihs-section-label">about.md</div>

            <h2 className="ihs-section-title">Tentang saya</h2>

            <div className="ihs-about-card">
              <div className="ihs-about-comment">
                {"/*"}
              </div>

              <p className="ihs-about-text">
                Saya lulusan Teknik Informatika ITERA dengan pengalaman
                langsung di Quality Assurance, backend development, dan
                administrasi IT. Bagi saya kualitas bukan tahap terakhir, tapi
                kebiasaan — mulai dari cara saya merancang test case sampai
                cara saya mendokumentasikan hasilnya. Saya nyaman merancang
                serta menguji REST API end-to-end, dan merasa puas saat sebuah
                bug ditemukan sebelum pengguna sempat melihatnya.
              </p>

              <div
                className="ihs-about-comment"
                style={{ marginTop: "0.75rem" }}
              >
                {"*/"}
              </div>

              <div className="ihs-fact-row">
                <span>
                  <strong>Pendidikan</strong> — ITERA, 2021–2026
                </span>

                <span>
                  <strong>IPK</strong> — 3.6 / 4.0
                </span>

                <span>
                  <strong>Lokasi</strong> — Bandung, Jawa Barat, Indonesia
                </span>
              </div>
            </div>
          </section>

          {/* ---- Experience ---- */}

          <section id="experience" className="ihs-section">
            <div className="ihs-section-label">
              experience.spec.ts
            </div>

            <h2 className="ihs-section-title">Pengalaman</h2>

            {EXPERIENCE.map((job) => (
              <div className="ihs-job" key={job.org}>
                <div className="ihs-job-head">
                  {job.org} — {job.role}
                </div>

                <p className="ihs-job-role">{job.role}</p>

                <p className="ihs-job-meta">
                  {job.place} · {job.dates}
                </p>

                <ul className="ihs-job-list">
                  {job.items.map((it, i) => (
                    <li key={i}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* =====================================================
              PROJECTS — FULL WIDTH
              ===================================================== */}

          <section id="projects" className="ihs-section">
            <div className="ihs-section-label">
              projects.spec.ts
            </div>

            <h2 className="ihs-section-title">
              Proyek
            </h2>

            <div className="ihs-project-grid">
              {PROJECTS.map((p) => (
                <div className="ihs-project-card" key={p.name}>
                  {/* Gambar besar full-width */}

{p.images && p.images.length > 0 && (
  <div className="ihs-project-slider">

    <img
      className="ihs-project-image"
      src={`/assets/${
        p.images[activeProjectImages[p.name] || 0]
      }`}
      alt={`Tampilan antarmuka ${p.name}`}
    />

    {p.images.length > 1 && (
      <>
        <button
          className="ihs-slider-prev"
          onClick={() =>
            setActiveProjectImages((prev) => ({
              ...prev,
              [p.name]:
                ((prev[p.name] || 0) - 1 + p.images.length) %
                p.images.length,
            }))
          }
          aria-label="Gambar sebelumnya"
        >
          ←
        </button>

        <button
          className="ihs-slider-next"
          onClick={() =>
            setActiveProjectImages((prev) => ({
              ...prev,
              [p.name]:
                ((prev[p.name] || 0) + 1) %
                p.images.length,
            }))
          }
          aria-label="Gambar berikutnya"
        >
          →
        </button>

        <div className="ihs-slider-dots">
          {p.images.map((_, index) => (
            <button
              key={index}
              className={
                index === (activeProjectImages[p.name] || 0)
                  ? "is-active"
                  : ""
              }
              onClick={() =>
                setActiveProjectImages((prev) => ({
                  ...prev,
                  [p.name]: index,
                }))
              }
              aria-label={`Tampilkan gambar ${index + 1}`}
            />
          ))}
        </div>
      </>
    )}

  </div>
)}

                  {/* Teks di bawah gambar */}

                  <div className="ihs-project-body">
                    <div className="ihs-project-meta-row">
                      <span className="ihs-project-badge">
                        {p.tag}
                      </span>

                      {p.team && (
                        <span className="ihs-project-team">
                          {p.team}
                        </span>
                      )}
                    </div>

                    <h3 className="ihs-project-name">
                      {p.name}
                    </h3>

                    <ul>
                      {p.items.map((it, i) => (
                        <li key={i}>{it}</li>
                      ))}
                    </ul>

                    {p.links && p.links.length > 0 && (
                      <div className="ihs-project-links">
                        {p.links.map((l) => (
                          <a
                            key={l.label}
                            href={l.href}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {l.label}
                            <ArrowUpRight size={12} />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ---- Skills ---- */}

          <section id="skills" className="ihs-section">
            <div className="ihs-section-label">
              skills.json
            </div>

            <h2 className="ihs-section-title">
              Keahlian
            </h2>

            {SKILLS.map((s) => (
              <div className="ihs-skills-block" key={s.key}>
                <div className="ihs-skills-key">
                  {s.key.replace(/_/g, " ")}
                </div>

                <div className="ihs-tag-row">
                  {s.values.map((v) => (
                    <span className="ihs-tag" key={v}>
                      {v}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </section>

          {/* ---- Contact ---- */}

          <section
            id="contact"
            className="ihs-section ihs-contact"
          >
            <div className="ihs-section-label">
              contact.ts
            </div>

            <h2 className="ihs-section-title">
              Mari terhubung
            </h2>

            <p className="ihs-contact-line">
              <span className="k">expect</span>
              (peluang baru)
              <span className="s">.toBeDefined()</span>
            </p>

            <div className="ihs-contact-grid">
              <a
                className="ihs-contact-item"
                href="mailto:Ihsantriyadi13@gmail.com"
              >
                <Mail size={17} />
                Ihsantriyadi13@gmail.com
              </a>

              <a
                className="ihs-contact-item"
                href="tel:+6282294488043"
              >
                <Phone size={17} />
                +62 822 9448 8043
              </a>

              <a
                className="ihs-contact-item"
                href="https://linkedin.com/in/ihsan-triyadi"
                target="_blank"
                rel="noreferrer"
              >
                <Link2 size={17} />
                linkedin.com/in/ihsan-triyadi
              </a>

              <span className="ihs-contact-item">
                <MapPin size={17} />
                Bandung, Jawa Barat, Indonesia
              </span>
            </div>
          </section>

          {/* ---- Footer ---- */}

          <footer className="ihs-footer">
            <span>© 2026 Ihsan Triyadi</span>

            <span>
              Dirancang dengan ketelitian yang sama seperti menulis test case.
            </span>
          </footer>
        </main>
      </div>
    </div>
  );
}