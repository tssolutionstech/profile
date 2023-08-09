function sendEmail() {
    var nameInput = document.querySelector('.contact-page__input[placeholder="Tên"]');
    var name = nameInput ? nameInput.value : '';
    
    var phoneInput = document.querySelector('.contact-page__input[placeholder="Số điện thoại"]');
    var phone = phoneInput ? phoneInput.value : '';
    
    var emailInput = document.querySelector('.contact-page__input[placeholder="Email"]');
    var email = emailInput ? emailInput.value : '';
    
    var businessFieldInput = document.querySelector('.contact-page__input[placeholder="Lĩnh vực kinh doanh"]');
    var businessField = businessFieldInput ? businessFieldInput.value : '';
    
    var budgetInput = document.querySelector('.contact-page__input[placeholder="kinh phí dự kiến"]');
    var budget = budgetInput ? budgetInput.value : '';
    
    var contentInput = document.querySelector('.contact-page__input[placeholder="Nội dung..."]');
    var content = contentInput ? contentInput.value : '';
    

    // quick-contact__input
    var phone_2 = document.querySelector('.quick-contact__input[placeholder="Số điện thoại"]').value;
    var email_2 = document.querySelector('.quick-contact__input[placeholder="Email"]').value;
    var businessField_2 = document.querySelector('.quick-contact__input[placeholder="Lĩnh vực kinh doanh"]').value;
    var budget_2 = document.querySelector('.quick-contact__input[placeholder="kinh phí dự kiến"]').value;
    var content_2 = document.querySelector('.quick-contact__input[placeholder="Mô tả ngắn ý tưởng của bạn..."]').value;

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

    if (phone_2) {
        templateParams.phone = phone_2;
    }
    if (email_2) {
        templateParams.email = email_2;
    }
    if (businessField_2) {
        templateParams.business_field = businessField_2;
    }
    if (budget_2) {
        templateParams.budget = budget_2;
    }
    if (content_2) {
        templateParams.content = content_2;
    }

    emailjs.send(serviceID, templateID, templateParams)
        .then(function(response) {
            console.log('Email sent successfully:', response);
            alert("Your message sent successfully!!");
        })
        .catch(function(error) {
            console.error('Email sending failed:', error);
        });
}
