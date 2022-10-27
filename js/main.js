// Weei Waai Khor
// 23 Oct 2022
// assignment Form Validation

document.addEventListener('DOMContentLoaded', function() {

    // Website hyperlink direct
    var button = document.getElementById('website');
    button.addEventListener('click', function() {
        do {
            var index = parseInt(prompt("Which website do you want\n 1. google \n 2. tafesa \n 3. learn "));
        }while (index >= 1 && index <=3);
        console.log(index);
        switch (index)
        {
            case 1:
                location.href = "http://www.google.com";
                break;
            case 2:
                location.href = "https://tafesa.edu.au";
                break;
            case 3:
                location.href = "https://learn.tafesa.edu.au/";
                break;
        }
    })

    // Validator

    // Email 

    var email = document.getElementById("email");
    email.addEventListener('keyup', function(e) {
        var email_check = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        // Error Element
        var error_message = document.getElementById("email_error");
        if (email_check.test(e.target.value))
        {
            error_message.style.display = 'none';
            email.classList.remove('is-invalid');
        }
        else
        {
            error_message.style.display = "block";
            email.classList.add('is-invalid');
        }
    })

    // Postcode
    
    var postcode = document.getElementById("postcode");
    postcode.addEventListener('keyup', function(e) {
        var postcode_check = /^[0-9]{4}$/;

        // Error Element
        var postcode_error = document.getElementById("postcode_error");
        if (postcode_check.test(e.target.value))
        {
            postcode_error.style.display = 'none';
            postcode.classList.remove('is-invalid');
        }
        else
        {
            postcode_error.style.display = "block";
            postcode.classList.add('is-invalid');
        }
    })

    // Credit Card - CVV
    var cvc = document.getElementById('cc-exp');

    cvc.addEventListener('keyup', function(e) {
        var cvc_num = /^[0-9]{3,4}$/;        
        var error_message = document.getElementById("cvv");
        var error_border = document.getElementById("cc-exp");
        if (cvc_num.test(e.target.value))
        {
            error_message.style.display = 'none';
            error_border.classList.remove('is-invalid');

        }
        else
        {
            error_message.style.display = 'block';
            error_border.classList.add("is-invalid");
        }
    })


    // Form Validation starts here
    
})