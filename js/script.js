/* ==========================================================
   ملف التحكم والحراسة الأمنية لبوابة الطالب - جامعة الجزيرة (دفعة 43)
   ========================================================== */

document.addEventListener("DOMContentLoaded", function () {
    
    // 1. التحقق من حالة تسجيل الدخول لكل الصفحات ما عدا صفحة تسجيل الدخول نفسها
    var currentPage = window.location.pathname;
    var isLoggedIn = localStorage.getItem("isLoggedIn");

    // إذا لم يكن المستخدم مسجل دخول، ولم يكن حالياً في صفحة تسجيل الدخول
    if (isLoggedIn !== "true") {
        if (!currentPage.includes("login.html")) {
            // توجيه إجباري وفوري إلى صفحة تسجيل الدخول
            window.location.href = "login.html";
            return;
        }
    }

    // 2. تفعيل كود تسجيل الدخول (لو المستخدم في صفحة login.html)
    var loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.onsubmit = function (event) {
            event.preventDefault(); // منع إعادة تحميل الصفحة التقليدي

            var regNumber = document.getElementById("reg_number").value;
            var password = document.getElementById("password").value;

            if (regNumber.trim() === "" || password.trim() === "") {
                alert("الرجاء إدخال رقم التسجيل وكلمة المرور!");
                return false;
            }

            // حفظ حالة تسجيل الدخول بنجاح في متصفح الطالب
            localStorage.setItem("isLoggedIn", "true");

            alert("تم تسجيل الدخول بنجاح! جاري الانتقال للبوابة...");
            
            // الانتقال للصفحة الرئيسية للبوابة
            window.location.href = "index.html"; 
            return false;
        };
    }

    // 3. تفعيل زر تسجيل الخروج (إن وجد في أي صفحة)
    var logoutBtn = document.querySelector(".logout-btn, .logout-quick-btn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", function (e) {
            e.preventDefault();
            // حذف حالة الدخول
            localStorage.removeItem("isLoggedIn");
            // العودة لصفحة تسجيل الدخول
            window.location.href = "login.html";
        });
    }
});
