/**
 * سلوك الواجهة المشترك.
 * ملاحظة: الدخول والحراسة والرفع كلها تتم الآن في PHP على الخادم،
 * لذلك أُزيل الاعتماد على localStorage القديم.
 */
document.addEventListener("DOMContentLoaded", function () {

    // 1) تأكيد تسجيل الخروج (الرابط الفعلي logout.php يحمل رمز الحماية)
    document.querySelectorAll("[data-logout]").forEach(function (link) {
        link.addEventListener("click", function (event) {
            if (!confirm("هل أنت متأكد من رغبتك في تسجيل الخروج من البوابة؟")) {
                event.preventDefault();
            }
        });
    });

    // 2) فتح قسم المادة تلقائياً عند الوصول برابط مثل lectures.php#web-sec
    function openFromHash() {
        if (!location.hash || location.hash.length < 2) { return; }
        var target = null;
        try { target = document.getElementById(decodeURIComponent(location.hash.slice(1))); } catch (e) { return; }
        if (!target) { return; }
        var details = target.querySelector("details");
        if (details) { details.open = true; }
        setTimeout(function () { target.scrollIntoView({ behavior: "smooth", block: "start" }); }, 80);
    }
    openFromHash();
    window.addEventListener("hashchange", openFromHash);

    // 3) البحث السريع في المواد (صفحتا المحاضرات والامتحانات)
    var filter = document.getElementById("subjectFilter");
    if (filter) {
        filter.addEventListener("input", function () {
            var q = filter.value.trim().toLowerCase();
            document.querySelectorAll(".lecture-section, .exam-section").forEach(function (box) {
                var title = box.querySelector("summary");
                var text = (title ? title.textContent : "").toLowerCase();
                box.style.display = (q === "" || text.indexOf(q) !== -1) ? "" : "none";
            });
        });
    }

    // 4) فحص الملف قبل الرفع (الحجم والنوع) + منع الضغط المزدوج
    document.querySelectorAll("form.upload-form").forEach(function (form) {
        var fileInput = form.querySelector('input[type="file"]');
        if (!fileInput) { return; }

        fileInput.addEventListener("change", function () {
            var file = fileInput.files[0];
            if (!file) { return; }
            var maxMb = parseFloat(fileInput.getAttribute("data-max-mb") || "20");
            var allowed = (fileInput.getAttribute("accept") || "").toLowerCase().split(",")
                .map(function (x) { return x.trim().replace(".", ""); }).filter(Boolean);
            var ext = file.name.split(".").pop().toLowerCase();

            if (file.size > maxMb * 1024 * 1024) {
                alert("حجم الملف أكبر من " + maxMb + " MB.");
                fileInput.value = "";
            } else if (allowed.length && allowed.indexOf(ext) === -1) {
                alert("نوع الملف غير مسموح. المسموح: " + allowed.join(", "));
                fileInput.value = "";
            }
        });

        form.addEventListener("submit", function () {
            var btn = form.querySelector('button[type="submit"]');
            if (btn) {
                btn.disabled = true;
                btn.textContent = "جارٍ الرفع... ⏳";
            }
        });
    });

    // 5) زر إظهار/إخفاء كلمة المرور
    document.querySelectorAll('input[type="password"]').forEach(function (input) {
        var wrap = document.createElement("div");
        wrap.className = "pw-wrap";
        input.parentNode.insertBefore(wrap, input);
        wrap.appendChild(input);

        var btn = document.createElement("button");
        btn.type = "button";
        btn.className = "pw-toggle";
        btn.setAttribute("aria-label", "إظهار كلمة المرور");
        btn.textContent = "👁";
        btn.addEventListener("click", function () {
            var show = input.type === "password";
            input.type = show ? "text" : "password";
            btn.textContent = show ? "🙈" : "👁";
        });
        wrap.appendChild(btn);
    });

    // 6) مؤشر قوة كلمة المرور عند إنشاء الحساب
    var pass = document.getElementById("pass_new");
    var hint = document.getElementById("pwHint");
    if (pass && hint) {
        pass.addEventListener("input", function () {
            var v = pass.value, score = 0;
            if (v.length >= 8) { score++; }
            if (/[A-Za-z]/.test(v) && /\d/.test(v)) { score++; }
            if (/[^A-Za-z0-9]/.test(v) || v.length >= 12) { score++; }
            var labels = ["", "ضعيفة", "جيدة", "قوية"];
            var colors = ["", "#ef4444", "#d97706", "#16a34a"];
            hint.textContent = v ? "قوة كلمة المرور: " + labels[score] : "";
            hint.style.color = colors[score];
        });
    }

    // 7) إخفاء رسائل النجاح تلقائياً
    document.querySelectorAll(".flash-success").forEach(function (box) {
        setTimeout(function () {
            box.style.transition = "opacity .6s";
            box.style.opacity = "0";
            setTimeout(function () { box.style.display = "none"; }, 650);
        }, 7000);
    });
});
            
