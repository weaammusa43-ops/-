document.addEventListener("DOMContentLoaded", function () {

    // أ) كود تسجيل الدخول
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault(); // منع إعادة إنعاش الصفحة

            const regNumber = document.getElementById("reg_number").value.trim();
            const password = document.getElementById("password").value.trim();

            if (regNumber === "" || password === "") {
                alert("الرجاء إدخال رقم التسجيل وكلمة المرور!");
                return;
            }

            // تخزين حالة الدخول
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("studentReg", regNumber);

            // الانتقال الفوري للصفحة الرئيسية home.html
            window.location.assign("home.html");
        });
    }

    // ب) حراسة الصفحات (التأكد من تسجيل الدخول)
    const path = window.location.pathname.toLowerCase();

    // نحدد هل نحن في صفحة الصفحة الرئيسية (home.html) أم لا
    const isHomePage = path.endsWith("home.html");

    // لو الطالب في صفحة الرئيسية وهو ما مسجل دخول -> ارجعه لـ index.html
    if (isHomePage && localStorage.getItem("isLoggedIn") !== "true") {
        window.location.assign("index.html");
    }
});
