// الكود الخاص بحماية الصفحات وتحويل غير المسجلين لصفحة تسجيل الدخول
document.addEventListener("DOMContentLoaded", function() {
    
    // معرفة اسم الصفحة الحالية
    let currentPage = window.location.pathname.split("/").pop();
    
    // التحقق مما إذا كان المستخدم مسجلاً للدخول
    let isLoggedIn = localStorage.getItem("isLoggedIn");
    
    // إذا لم يكن في صفحة تسجيل الدخول ولم يسجل دخول بعد، يتم توجيهه لصفحة الدخول
    if (currentPage !== "login.html" && isLoggedIn !== "true") {
        window.location.href = "login.html";
    }
});

// دالة لتسجيل الدخول (توضع عند الضغط على زر دخول في صفحة login.html)
function loginSuccess() {
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "index.html";
}

// دالة لتسجيل الخروج (توضع عند الضغط على زر تسجيل الخروج)
function logout() {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "login.html";
}
document.addEventListener("DOMContentLoaded", function () {
    
    // أ) كود تسجيل الدخول (يعمل فقط في صفحة login.html)
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

            // الانتقال الفوري للصفحة الرئيسية (تأكدي أن الصفحة الرئيسية اسمها index.html في نفس المجلد)
            window.location.href = "index.html"; 
        });
    }

    // ب) حراسة الصفحات الأخرى (إذا لم يكن الطالب في صفحة تسجيل الدخول ولم يسجل دخول، يتم إرجاعه للوجين)
    const currentPage = window.location.pathname;
    const isLoginPage = currentPage.includes("login.html") || currentPage.endsWith("/");

    if (!isLoginPage) {
        if (localStorage.getItem("isLoggedIn") !== "true") {
            window.location.href = "login.html";
        }
    }
});
