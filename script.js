/* ================= الألوان والتنسيقات المستوحاة من شعار الكلية ================= */
:root {
    --bg-ivory: #f7f4ed;
    --text-main: #2b2b2b;
    --primary-green: #1e382d;
    --secondary-green: #2c4a3e;
    --accent-bronze: #b8860b;
    --card-bg: #ffffff;
    --shadow-color: rgba(0,0,0,0.08);
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: var(--bg-ivory);
    margin: 0;
    padding: 0;
    color: var(--text-main);
    direction: rtl;
    text-align: right;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    transition: background-color 0.3s ease, color 0.3s ease;
}

/* ================= الهيدر (Header) ================= */
header {
    background: linear-gradient(135deg, var(--primary-green), var(--secondary-green));
    color: #f7f4ed;
    padding: 20px 15px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    border-bottom: 4px solid var(--accent-bronze);
    position: relative;
}

header h1 {
    margin: 0;
    font-size: 24px;
    font-weight: bold;
}

header p {
    margin: 6px 0 0 0;
    font-size: 13px;
    opacity: 0.9;
}

/* 🌟 ترتيب الأزرار العلوية لمنع التداخل تماماً */
.header-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
    flex-wrap: wrap;
    gap: 8px;
}

.logout-btn {
    background-color: #a0522d;
    color: white;
    padding: 6px 12px;
    border: none;
    border-radius: 4px;
    text-decoration: none;
    font-size: 12px;
    font-weight: 600;
    transition: background 0.3s;
}

.logout-btn:hover {
    background-color: #8b4513;
}

.theme-toggle-btn {
    background: rgba(255, 255, 255, 0.15);
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: white;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 12px;
    transition: background 0.3s;
}

.theme-toggle-btn:hover {
    background: rgba(255, 255, 255, 0.3);
}

/* ================= القائمة الرئيسية (Navigation) ================= */
nav {
    background-color: #2b2b2b;
    padding: 10px 0;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
}

nav ul li {
    margin: 0 5px;
}

nav ul li a {
    color: #f7f4ed;
    text-decoration: none;
    font-weight: 600;
    font-size: 13.5px;
    transition: color 0.3s;
    padding: 4px 8px;
    display: inline-block;
}

nav ul li a:hover {
    color: #d4af37;
}

/* ================= المحتوى الرئيسي (Main Content) ================= */
main {
    padding: 25px 15px;
    max-width: 950px;
    margin: auto;
    min-height: 60vh;
    width: 100%;
    box-sizing: border-box;
    flex: 1;
}

/* بطاقة الترحيب */
.welcome-card {
    background: var(--card-bg);
    padding: 30px 20px;
    border-radius: 12px;
    box-shadow: 0 6px 20px var(--shadow-color);
    margin-bottom: 25px;
    text-align: center;
    border-top: 6px solid var(--primary-green);
    border-bottom: 6px solid var(--accent-bronze);
}

.welcome-card h2 {
    color: var(--primary-green);
    font-size: 24px;
    margin-top: 15px;
}

.hero-logo-container {
    margin-bottom: 15px;
}

.college-logo-large {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    object-fit: cover;
    border: 5px solid var(--accent-bronze);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;
}

.college-logo-large:hover {
    transform: scale(1.03);
}

/* الأقسام */
section {
    background: var(--card-bg);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 12px var(--shadow-color);
    margin-bottom: 25px;
    border-right: 4px solid var(--primary-green);
}

section h2 {
    color: var(--primary-green);
    border-bottom: 2px solid #e8e3d5;
    padding-bottom: 10px;
    margin-top: 0;
    font-size: 18px;
}

/* 🌟 حل نهائي لمشكلة الجداول "الجايطة" عبر حاوية متجاوبة */
.table-responsive {
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    margin-top: 15px;
