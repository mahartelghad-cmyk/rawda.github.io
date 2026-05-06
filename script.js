(function(){
emailjs.init("J1kiJoSg6Xo5P6NqO");
})();

document.getElementById("form").addEventListener("submit", function(e){
    e.preventDefault();

    let status = document.getElementById("status");
    status.innerHTML = "⏳ جاري الإرسال...";

    let data = {
        childName: document.getElementById("childName").value,
        birthDate: document.getElementById("birthDate").value,
        age: document.getElementById("age").value,
        gender: document.getElementById("gender").value,
        parentName: document.getElementById("parentName").value,
        phone: document.getElementById("phone").value,
        notes: document.getElementById("notes").value
    };

    emailjs.send(
        "service_5fqriuv",
        "template_prspd7b",
        data
    )
    .then(function(){
        status.innerHTML = "✅ تم التسجيل بنجاح وتم الإرسال للإيميل";
        document.getElementById("form").reset();
    })
    .catch(function(error){
        console.log("EmailJS Error:", error);
        status.innerHTML = "❌ خطأ: " + (error.text || error.message || "حدث خطأ في الإرسال");
    });
});