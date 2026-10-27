document.addEventListener("DOMContentLoaded", function () {
    
    // أ) كود تسجيل الدخول (يعمل في صفحة index.html)
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault(); // منع إعادة تحميل الصفحة

            const regNumber = document.getElementById("reg_number").value.trim();
            const password = document.getElementById("password").value.trim();

            if (regNumber === "" || password === "") {
                alert("الرجاء إدخال رقم التسجيل وكلمة المرور!");
                return;
            }

            // تخزين حالة الدخول
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("studentReg", regNumber);

            // الانتقال إلى الصفحة الرئيسية (home.html)
            window.location.href = "home.html"; 
        });
    }

    // ب) حراسة الصفحات (تأمين صفحة home.html)
    const currentPage = window.location.pathname;
    
    // إذا كنا في صفحة home.html والمستخدم غير مسجل دخول، ارجِع بيه لصفحة index.html
    if (currentPage.includes("home.html")) {
        if (localStorage.getItem("isLoggedIn") !== "true") {
            window.location.href = "index.html";
        }
    }
});
