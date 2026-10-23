/* ================= ملف الجافاسكريبت الشامل لبوابة الطالب - جامعة الجزيرة (الدفعة 43) ================= */

document.addEventListener("DOMContentLoaded", function () {
    console.log("تم تحميل بوابة الطالب بنجاح - جامعة الجزيرة (الدفعة 43)");

    // 1. تفعيل النظام الشامل للغة (مع الحفظ التلقائي في كل الصفحات)
    initLanguageSwitcher();

    // 2. تفعيل الوضع الليلي والنهاري
    initThemeSwitcher();

    // 3. تفعيل مؤشر نشاط الجدول (تلوين الصف عند تمرير الماوس عليه)
    highlightTableRows();
});


/* --- 1. نظام تبديل وحفظ اللغة عبر جميع الصفحات --- */
function initLanguageSwitcher() {
    const langToggleBtn = document.getElementById('langToggleBtn');
    
    // جلب اللغة المخزنة سابقاً أو الاعتماد على العربية افتراضياً
    let currentLang = localStorage.getItem('siteLang') || 'ar';
    
    // تطبيق اللغة فور تحميل الصفحة
    applyLanguage(currentLang);

    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            // تبديل اللغة
            currentLang = currentLang === 'ar' ? 'en' : 'ar';
            // حفظها وحفظ اتجاه الصفحة لكل الصفحات
            localStorage.setItem('siteLang', currentLang);
            applyLanguage(currentLang);
        });
    }
}

// دالة تطبيق الترجمة على عناصر الصفحة الحالية
function applyLanguage(lang) {
    const titleEl = document.querySelector('header h1');
    const descEl = document.querySelector('header p');
    const welcomeHeading = document.querySelector('.welcome-card h2');
    const langToggleBtn = document.getElementById('langToggleBtn');

    if (lang === 'en') {
        // التحويل إلى الإنجليزية
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('lang', 'en');
        
        if (titleEl) titleEl.textContent = "Computer Science Portal";
        if (descEl) descEl.textContent = "Faculty of Mathematical and Computer Sciences - Batch 43";
        if (welcomeHeading) welcomeHeading.textContent = "Welcome, Student!";
        if (langToggleBtn) langToggleBtn.textContent = "عربي / En";
    } else {
        // العودة إلى العربية
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', 'ar');
        
        if (titleEl) titleEl.textContent = "بوابة علوم الحاسوب";
        if (descEl) descEl.textContent = "كلية العلوم الرياضية والحاسوب - الدفعة 43";
        if (welcomeHeading) welcomeHeading.textContent = "أهلاً بك يا مهندسة!";
        if (langToggleBtn) langToggleBtn.textContent = "En / عربي";
    }
}


/* --- 2. نظام تفعيل الوضع الليلي والنهاري --- */
function initThemeSwitcher() {
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    
    // استرجاع حالة الوضع الليلي إذا كانت مفعلة مسبقاً
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-mode');
        if (themeToggleBtn) themeToggleBtn.textContent = '☀️';
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            const isLight = document.body.classList.contains('light-mode');
            
            themeToggleBtn.textContent = isLight ? '☀️' : '🌙';
            localStorage.setItem('theme', isLight ? 'light' : 'dark');
        });
    }
}


/* --- 3. تفاعلات الجداول (تلوين الصف عند المرور) --- */
function highlightTableRows() {
    const rows = document.querySelectorAll('table tbody tr');
    rows.forEach(row => {
        row.addEventListener('mouseenter', function () {
            this.style.transition = "background-color 0.3s ease";
            this.style.backgroundColor = "#e8f4ec"; 
        });
        row.addEventListener('mouseleave', function () {
            this.style.backgroundColor = ""; 
        });
    });
}


/* --- 4. التحقق من صحة بيانات تسجيل الدخول --- */
function validateLoginForm() {
    var regNumber = document.getElementById('reg_number').value;
    var password = document.getElementById('password').value;

    if (regNumber.trim() === "" || password.trim() === "") {
        alert("الرجاء التأكد من إدخال رقم التسجيل وكلمة المرور!");
        return false;
    }
    return true;
                                           }
