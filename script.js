/* ================= ملف الجافاسكريبت الشامل لبوابة الطالب ================= */

document.addEventListener("DOMContentLoaded", function () {
    console.log("تم تحميل بوابة الطالب بنجاح - جامعة الجزيرة (الدفعة 43)");

    // 1. تفعيل رسالة ترحيب تفاعلية عند الدخول للصفحة الرئيسية
    showWelcomeMessage();

    // 2. تفعيل نظام تغيير اللغة (عربي / إنجليزي) بشكل تفاعلي
    setupLanguageSwitcher();

    // 3. تفعيل مؤشر نشاط الجدول (تلوين الصف عند تمرير الماوس عليه)
    highlightTableRows();
});


/* --- 1. دالة ترحيب تفاعلية --- */
function showWelcomeMessage() {
    // تظهر فقط في الصفحة الرئيسية إذا كانت بطاقة الترحيب موجودة
    const welcomeCard = document.querySelector('.welcome-card');
    if (welcomeCard) {
        console.log("أهلاً بك في لوحة تحكم الطالب!");
    }
}


/* --- 2. دالة تبديل اللغة (عربي / إنجليزي) في الهيدر --- */
function setupLanguageSwitcher() {
    const langSelect = document.getElementById('language');
    if (langSelect) {
        langSelect.addEventListener('change', function () {
            const selectedLang = this.value;
            if (selectedLang === 'en') {
                alert("English language interface preview (Demo mode).");
            } else {
                alert("تم التبديل إلى اللغة العربية.");
            }
        });
    }
}


/* --- 3. دالة تفاعلية لجداول المحاضرات والامتحانات --- */
function highlightTableRows() {
    const rows = document.querySelectorAll('table tbody tr');
    rows.forEach(row => {
        row.addEventListener('mouseenter', function () {
            this.style.transition = "background-color 0.3s ease";
            this.style.backgroundColor = "#e8f4ec"; // لون هادئ عند الوقوف فوق الصف
        });
        row.addEventListener('mouseleave', function () {
            this.style.backgroundColor = ""; // إرجاع اللون الأصلي
        });
    });
}


/* --- 4. دالة التحقق من صحة بيانات تسجيل الدخول (تُستخدم في صفحة login.php) --- */
function validateLoginForm() {
    var regNumber = document.getElementById('reg_number').value;
    var password = document.getElementById('password').value;

    if (regNumber.trim() === "" || password.trim() === "") {
        alert("الرجاء التأكد من إدخال رقم التسجيل وكلمة المرور!");
        return false; // يمنع إرسال النموذج إذا كانت الحقول فارغة
    }
    return true;
}const themeToggleBtn = document.getElementById('themeToggleBtn');
if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        themeToggleBtn.textContent = document.body.classList.contains('light-mode') ? '☀️' : '🌙';
    });
}
