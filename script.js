/* ================= ملف الجافاسكريبت الشامل لبوابة الطالب - جامعة الجزيرة (الدفعة 43) ================= */

document.addEventListener("DOMContentLoaded", function () {
    console.log("تم تحميل بوابة الطالب بنجاح - جامعة الجزيرة (الدفعة 43)");

    // 1. تفعيل وتطبيق الوضع الليلي/النهاري
    initThemeSwitcher();

    // 2. تفعيل مؤشر نشاط الجدول (تلوين الصف عند تمرير الماوس عليه)
    highlightTableRows();
});


/* --- 1. نظام تفعيل وحفظ الوضع الليلي والنهاري عبر كل الصفحات --- */
function initThemeSwitcher() {
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    
    // استرجاع حالة الوضع الليلي المخبأة مسبقاً
    const savedTheme = localStorage.getItem('theme');

    // إذا كان المستخدم قد اختار الوضع النهاري سابقاً
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        if (themeToggleBtn) themeToggleBtn.textContent = '☀️ الوضع';
    } else {
        // افتراضياً يكون الوضع على النمط المظلم/الداكن للموقع
        if (themeToggleBtn) themeToggleBtn.textContent = '🌙 الوضع';
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            const isLight = document.body.classList.contains('light-mode');
            
            // تغيير أيقونة ونص الزر
            themeToggleBtn.textContent = isLight ? '☀️ الوضع' : '🌙 الوضع';
            
            // حفظ التفضيل في ذاكرة المتصفح
            localStorage.setItem('theme', isLight ? 'light' : 'dark');
        });
    }
}


/* --- 2. تفاعلات الجداول (تلوين الصف عند المر
