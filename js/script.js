document.addEventListener("DOMContentLoaded", function () {
    
    // أ) كود تسجيل الدخول (يعمل فقط لو كنا في صفحة login.html)
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

            // تسجيل حالة الدخول
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("studentReg", regNumber);

            alert("تم تسجيل الدخول بنجاح! جاري الانتقال للبوابة...");
            
            // الحل الجذري: توجيه الطالب للصفحة الرئيسية (تأكدي أن الصفحة الرئيسية اسمها home.html أو index.html حسب ما متفقين، والأفضل تكون الرئيسية هي home.html عشان ما يحصل تداخل مع login.html)
            window.location.href = "index.html"; 
        });
    }

    // ب) حراسة الصفحات الأخرى (لو حاول زول يفتح الموقع وما مسجل دخول)
    if (!window.location.pathname.includes("login.html")) {
        if (localStorage.getItem("isLoggedIn") !== "true") {
            window.location.href = "login.html";
        }
    }
});
