function sendEmail() {
    var name = document.querySelector('.contact-page__input[placeholder="Tên"]').value;
    var phone = document.querySelector('.contact-page__input[placeholder="Số điện thoại"]').value;
    var email = document.querySelector('.contact-page__input[placeholder="Email"]').value;
    var businessField = document.querySelector('.contact-page__input[placeholder="Lĩnh vực kinh doanh"]').value;
    var budget = document.querySelector('.contact-page__input[placeholder="kinh phí dự kiến"]').value;
    var content = document.querySelector('.contact-page__input[placeholder="Nội dung..."]').value;

    const serviceID = "service_tphutli";
    const templateID = "template_tgy5esg";

    var templateParams = {
        from_name: name,
        to_name: 'Job_ts_solution', 
        phone: phone,
        email: email,
        business_field: businessField,
        budget: budget,
        content: content,
    };

    emailjs.send(serviceID, templateID, templateParams)
        .then(function(response) {
            console.log('Email sent successfully:', response);
            alert("Your message sent successfully!!");
        })
        .catch(function(error) {
            console.error('Email sending failed:', error);
        });
}
