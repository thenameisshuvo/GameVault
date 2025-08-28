import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root{
        /* updated darker, more neon-contrasted background */
        --bg-1: #030318; /* very deep navy */
        --bg-2: #08112a; /* indigo-blue */
        --card: rgba(255,255,255,0.04);
        --glass: rgba(255,255,255,0.06);
        --accent: #7C3AED; /* neon-ish purple */
        --accent-2: #06B6D4; /* cyan */
        --muted: #9ca3af;
    }

        /* light theme overrides - toggleable via data-theme attribute on <html> */
        [data-theme="light"] {
            --bg-1: #f8fafc;
            --bg-2: #ffffff;
            --accent: #4f46e5;
            --accent-2: #06b6d4;
            --muted: #4b5563;
            --card: rgba(2,6,23,0.04);
        }

    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

    html{
        background: linear-gradient(180deg, var(--bg-1) 0%, var(--bg-2) 100%);
        color: #e6eef8;
        height:100%;
        &::-webkit-scrollbar{ width:10px; }
        &::-webkit-scrollbar-thumb{ background: linear-gradient(180deg,var(--accent),var(--accent-2)); border-radius:20px; }
        &::-webkit-scrollbar-track{ background: transparent; }
    }

    body{
        font-family: 'Source Sans Pro', Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
        -webkit-font-smoothing:antialiased;
+    -moz-osx-font-smoothing:grayscale;
+    background: transparent;
        width:100%;
        line-height:1.4;
    }

    h1{ color:linear-gradient(90deg,var(--accent),var(--accent-2)); }
    h2{ font-size:2.5rem; font-weight:700; letter-spacing: -0.02em; color: #e6f2ff; }
    h3{ font-size:1.25rem; color: var(--accent-2); }
    p{ color: var(--muted); font-size:1rem; }

    a{ color:inherit; text-decoration:none; }
    img{ display:block; max-width:100%; }

    /* site layout tweaks */
    .nav-container{
                display:flex; align-items:center; justify-content:space-between; padding:8px 16px; background:linear-gradient(90deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01)); backdrop-filter: blur(6px); border-bottom: 1px solid rgba(255,255,255,0.03); position:relative; z-index:1000;
        }

        /* compact logo */
        .nav-logo{ height:28px; filter: drop-shadow(0 6px 18px rgba(124,58,237,0.18)); }

        .nav-list{ display:flex; gap:8px; align-items:center; }

        .nav-button{ padding:6px 10px; border-radius:8px; background:transparent; color:var(--muted); border:1px solid transparent; transition: all 160ms ease; font-weight:600; font-size:0.92rem; }
+
    .nav-button:hover{ color: #fff; transform:translateY(-2px); box-shadow: 0 6px 30px rgba(6,182,212,0.06); }
+
    .nav-button.active{ background: linear-gradient(90deg,var(--accent),var(--accent-2)); color: #fff; box-shadow: 0 8px 40px rgba(124,58,237,0.14); }
+

    /* home / list */
+  .game-list-bg{ background: radial-gradient(1200px 400px at 10% 10%, rgba(124,58,237,0.08), transparent 10%), radial-gradient(900px 300px at 90% 80%, rgba(6,182,212,0.06), transparent 8%); padding:48px 64px; }
+

    /* futuristic card */
+  .glass-card{ background: linear-gradient(180deg, rgba(255,255,255,0.025), rgba(255,255,255,0.02)); border: 1px solid rgba(255,255,255,0.04); border-radius:18px; padding:12px; backdrop-filter: blur(6px); }
+

    /* game card specifics */
+  .game-card{ border-radius:16px; overflow:hidden; position:relative; transition: transform 300ms ease, box-shadow 300ms ease; border: 1px solid rgba(255,255,255,0.03); }
+

        .game-card{
            border-radius:14px; overflow:hidden; position:relative; transition: transform 320ms cubic-bezier(.2,.9,.2,1), box-shadow 320ms ease, border-color 320ms ease;
            background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
            border: 1px solid rgba(255,255,255,0.03);
        }

        /* stronger hover with glowing edge and subtle scale */
        .game-card:hover{
            transform: translateY(-10px) scale(1.02);
            box-shadow: 0 28px 90px rgba(2,6,23,0.7), 0 0 28px rgba(124,58,237,0.06);
            border-image: linear-gradient(90deg,var(--accent),var(--accent-2)) 1;
        }

        .game-card .meta{ padding:16px 14px 20px 14px; }

        .game-card h3{ color: #fff; margin-bottom:6px; font-size:1.05rem; }

        .game-card p{ color:var(--muted); margin:0; }

    /* favorite button */
    .fav-btn{ position:absolute; right:12px; top:12px; padding:6px 8px; border-radius:10px; background:rgba(0,0,0,0.25); color:#fff; border:none; cursor:pointer; font-size:1rem; transition: transform 180ms ease, background 180ms ease; z-index:2; }
    .fav-btn:hover{ transform: translateY(-2px); background: linear-gradient(90deg,var(--accent),var(--accent-2)); }
    .fav-btn.is-fav{ background: linear-gradient(90deg,var(--accent),var(--accent-2)); box-shadow: 0 8px 28px rgba(124,58,237,0.12); }

        /* footer */
        .footer-container{ display:flex; justify-content:center; align-items:center; padding:18px 12px; background: linear-gradient(90deg, rgba(255,255,255,0.01), rgba(255,255,255,0.02)); border-top:1px solid rgba(255,255,255,0.03); }
        .footer-text{ color: #e6eef8; font-size:1.05rem; }
+

    /* details page */
+  .detail-bg{ padding:36px 48px; background: linear-gradient(180deg, rgba(7,10,20,0.24), transparent); }
+
    .detail-panel{ max-width:1100px; margin: 0 auto; background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01)); border-radius:18px; padding:26px; border:1px solid rgba(255,255,255,0.03); }
+
    /* limit hero/detail image height so very large images don't dominate the layout */
    .detail-image{ width:100%; max-height:480px; object-fit:cover; border-radius:12px; box-shadow: 0 24px 80px rgba(2,6,23,0.6); }
+
    .platform-icon{ width:46px; height:46px; filter: drop-shadow(0 6px 20px rgba(0,0,0,0.45)); transition: transform 180ms ease; }
+
    .platform-icon:hover{ transform: translateY(-6px) scale(1.06); }

        /* Responsive breakpoints */
        @media (max-width: 640px) {
        .nav-container{ padding:8px 12px; }
            .nav-logo{ height:24px; }
        .nav-list{ gap:6px; align-items:center; overflow-x:auto; -webkit-overflow-scrolling:touch; }
        .nav-list > button[aria-label="menu"]{ display:inline-flex; }
        /* show horizontal scroll for buttons on small devices */
        .nav-list > div{ display:flex; gap:8px; overflow-x:auto; padding-bottom:6px; }
            .nav-list::-webkit-scrollbar{ display:none; }
            .nav-button{ padding:6px 8px; font-size:0.85rem; }

            .game-list-bg{ padding:20px; }
            .game-card{ border-radius:12px; }
            .game-card:hover{ transform: none; box-shadow: none; }

            .detail-bg{ padding:12px; }
            .detail-panel{ padding:14px; }
            .detail-image{ max-height:260px; }
            .platform-icon{ width:34px; height:34px; }

            h2{ font-size:1.5rem; }
            p{ font-size:0.95rem; }
        }

        @media (min-width: 641px) and (max-width: 1024px) {
            .game-list-bg{ padding:32px; }
            .detail-panel{ padding:20px; }
            .detail-image{ max-height:380px; }
            .platform-icon{ width:40px; height:40px; }
        }

        /* reduce hover transforms on touch-capable devices */
        @media (hover: none) and (pointer: coarse) {
            .game-card:hover{ transform: none; box-shadow: none; }
            .platform-icon:hover{ transform: none; }
        }
+
`;

export default GlobalStyles;
