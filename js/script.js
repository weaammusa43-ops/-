document.addEventListener("DOMContentLoaded", function () {
    
    const currentPage = window.location.pathname;
    console.log("الصفحة الحالية هي:", currentPage);

    // أ) كود تسجيل الدخول (يعمل فقط في صفحة login.html)
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const regNumber = document.getElementById("reg_number").value.trim();
            const password = document.getElementById("password").value.trim();

            if (regNumber === "" || password === "") {
                alert("الرجاء إدخال رقم التسجيل وكلمة المرور!");
                return;
            }

            // حفظ حالة الدخول
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("studentReg", regNumber);

            alert("تم تسجيل الدخول بنجاح! جاري الانتقال للبوابة...");
            
            // استخدام مسار واضح للانتقال للرئيسية
            window.location.href = "index.html"; 
        });
    }

    // ب) حراسة الصفحات الأخرى (إذا لم يكن في صفحة تسجيل الدخول ولم يسجل دخول)
    // بنتاكد إننا ما في صفحة login.html ولا index.html (لو الـ index هي صفحة الدخول، لكن لو الـ index هي الرئيسية، نخلي الفحص لـ login.html بس)
    const isLoginPge = currentPage.includes("login.html") || currentPage.endsWith("/"); 

    if (!isLoginPge) {
        if (localStorage.getItem("isLoggedIn") !== "true") {
            console.log("المستخدم غير مسجل دخول، جاري تحويله لصفحة تسجيل الدخول...");
            window.location.href = "login.html";
        }
    }
});
