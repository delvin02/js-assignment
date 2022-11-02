// Weei Waai Khor
// 23 Oct 2022
// assignment Form Validation

/* PSEUDOCODE
    1) AddEventListener - DOMContentLoaded
    
    Website hyperlink redirect
        a) get "go to other websites" element
        b) do
        c)      prompt for user input
        d) while input  < 1 or input is not > 3
        e) switch input
        f)      case 1 -> redirect to google.com and break
        g)      case 2 -> redirect to tafesa.edu.au and break
        h)      case 3 -> redirect to learn.tafeas.edu.au and break

    Validating Input

    Email
        a) get email input
        b) addEventListener - keyup event 
        c) if email not match email REGEX  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
        e)      display error message
        f) else
        g       hide error message
*/
document.addEventListener('DOMContentLoaded', function() {

    // Website hyperlink direct
    var button = document.getElementById('website');
    button.addEventListener('click', function() {
        do {
            var index = parseInt(prompt("Which website do you want\n 1. google \n 2. tafesa \n 3. learn "));
        }while (index < 1 || index > 3);
<<<<<<< HEAD
		
=======
>>>>>>> 403d5047c0e7b422b1a61f4739d75bbb1301378e
        switch (index)
        {
            case 1:
				window.open( "http://www.google.com", "myWindow", 
				"status = 1, height = 800, width = 800, resizable = 0" );
                break;
            case 2:
				window.open( "http://www.tafesa.edu.au", "myWindow", 
				"status = 1, height = 800, width = 800, resizable = 0" );
                break;
            case 3:
				window.open( "https://learn.tafesa.edu.au/", "myWindow", 
				"status = 1, height = 800, width = 800, resizable = 0" );
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

    // Credit Card Number
    var card = document.getElementById("cc");
    var cardInfo = document.getElementById("cc-number");
    var errorCard = document.getElementById("card-error");
    cardInfo.addEventListener('keyup', function (e) {

        // REGEX for different cards
        var americanExpress = /^3[47][0-9]{13}$/;
        var visa = /^4[0-9]{12}(?:[0-9]{3})?$/;
        var masterCard = /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/;

        // Check inputted value
        switch (card.value)
        {
            // Verifying American Express
            case 'ae':
                if (americanExpress.test(e.target.value))
                {
                    errorCard.style.display = 'none';
                    cardInfo.classList.remove('is-invalid');
                }
                else
                {
                    errorCard.innerHTML = "Not an American Express card.";
                    errorCard.style.display = 'block';
                    cardInfo.classList.remove('is-invalid');
                }
                break;

            // Verifying Mastercard
            case 'mc':
                if (masterCard.test(e.target.value))
                {
                    errorCard.style.display = 'none';
                    cardInfo.classList.remove('is-invalid');
                }
                else
                {
                    errorCard.innerHTML = "Not an Mastercard card.";
                    errorCard.style.display = 'block';
                    cardInfo.classList.remove('is-invalid');
                }
                break;

            //Verifying Visa
            case 'vs':

                if (visa.test(e.target.value))
                {
                    errorCard.style.display = 'none';
                    cardInfo.classList.remove('is-invalid');
                }
                else
                {
                    errorCard.innerHTML = "Not an Visa card.";
                    errorCard.style.display = 'block';
                    cardInfo.classList.remove('is-invalid');
                }
                break;
        }


    })

    // Credit Card - CVV
    var cvc = document.getElementById('cc-exp');

    cvc.addEventListener('keyup', function(e) {
        // REGEX for CVC
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


    
})
