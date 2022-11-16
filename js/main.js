// Weei Waai Khor
// 23 Oct 2022
// assignment Form Validation

/* PSEUDOCODE
1) AddEventListener - DOMContentLoaded
    
    Website hyperlink redirect
        get input for "go to other websites" element
        while input  < 1 or input is not > 3
            prompt for user input
		
        switch input
              case 1 -> redirect to google.com and break
              case 2 -> redirect to tafesa.edu.au and break
              case 3 -> redirect to learn.tafeas.edu.au and break

    Validating Input

    Email
        get email input
        addEventListener - keyup event 
         	if email match email REGEX  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
              	hide error message
				return true
         	else
        		display error message
				return false
		
	postcode
        get postcode input
        addEventListener - keyup event 
         	if postcode match email REGEX /^[0-9]{4}$/
              	hide error message
				return true
         	else
				display error message
				return false
		
	cvc
		get cvc input
		addEventListener - keyup event
			if cvc does not match REGEX /^[0-9]{3,4}$/
				display error message
				return false
			else
				hide error message
				return true
		
	card
        get selected card
		get card number input
		assign regex 
			var americanExpress = /^3[47][0-9]{13}$/;
			var visa = /^4[0-9]{12}(?:[0-9]{3})?$/;
			var masterCard = /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/;
        addEventListener - keyup event 
         		switch selected card value
              	case 'American Express'
					if card number does not match american express regex  /^3[47][0-9]{13}$/
						display error message
						return false
					else
						hide error message
						return true
					break
				case 'Mastercard'
					if card number does not match mastercard regex  /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/;
						display error message
						return false
					else
						hide error message
						return true
					break
				case 'visa'
					if card number does not match visa regex  /^4[0-9]{12}(?:[0-9]{3})?$/;
						display error message
						return false
					else
						hide error message
						return true
					break
*/
document.addEventListener('DOMContentLoaded', function() {

    // Website hyperlink direct
    var button = document.getElementById('website');
	
	// Whenever button is being clicked
    button.addEventListener('click', function() {
		// Always prompt for website input whenever index is less than 1, or more than 3
        do {
            var index = parseInt(prompt("Which website do you want\n 1. google \n 2. tafesa \n 3. learn "));
        }while (index < 1 || index > 3);
		
		// Process Input using Switch Statement
        switch (index)
        {
			// If 1 is received, redirect user to google.com (800x800) window size
            case 1:
				window.open( "http://www.google.com", "myWindow", 
				"status = 1, height = 800, width = 800, resizable = 0" );
				// break out of the switch statement
                break;
			// If 2 is received, redirect user to tafesa.edu.au (800x800) window size
            case 2:
				window.open( "http://www.tafesa.edu.au", "myWindow", 
				"status = 1, height = 800, width = 800, resizable = 0" );
				// break out of the switch statement
                break;
			// If 3 is received, redirect user to learn.tafesa.edu.au (800x800) window size	
            case 3:
				window.open( "https://learn.tafesa.edu.au/", "myWindow", 
				"status = 1, height = 800, width = 800, resizable = 0" );
				// break out of the switch statement
                break;
				
        }
    })

    // Validator

    // Email 
    var email = document.getElementById("email");
	
	// Whenever a key is pressed, execute this
    email.addEventListener('keyup', function(e) {
		
		// Email REGEX 
        var email_check = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        // Error Element
        var error_message = document.getElementById("email_error");
		
		// Check if  email input does not fulfill Email REGEX 
        if (email_check.test(e.target.value))
        {
			// Hide error message
            error_message.style.display = 'none';
            email.classList.remove('is-invalid');
        }
        else
        {
			// Display Error Message to warn user
            error_message.innerHTML = "Email Format Incorrect."
            error_message.style.display = "block";
            email.classList.add('is-invalid');
            return false
        }
        console.log(e.target.value.length);
        if (e.target.value.length < 8)
        {
            error_message.innerHTML = "At least 8 characters"
            error_message.style.display = "block";
            email.classList.add('is-invalid');
        }
        else
        {
            error_message.style.display = 'none';
            email.classList.remove('is-invalid');
			return false;
        }
        return true
    })

    // Postcode
    
    var postcode = document.getElementById("postcode");
    postcode.addEventListener('keyup', function(e) {
        var postcode_check = /^[0-9]{4}$/;

        // Error Element
        var postcode_error = document.getElementById("postcode_error");
        if (postcode_check.test(e.target.value))
        {
			// Hide Error Message
            postcode_error.style.display = 'none';
            postcode.classList.remove('is-invalid');
			return true;
        }
        else
        {
			// Display Error Message
            postcode_error.style.display = "block";
            postcode.classList.add('is-invalid');
			return false;
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
				// Check user input using American Express REGEX
                if (americanExpress.test(e.target.value))
                {
					// Hide Error Message
                    errorCard.style.display = 'none';
                    cardInfo.classList.remove('is-invalid');
					return true;
                }
                else
                {
					// Display Error Message
                    errorCard.innerHTML = "Not an American Express card.";
                    errorCard.style.display = 'block';
                    cardInfo.classList.remove('is-invalid');
					return false;
                }
                break;

            // Verifying Mastercard
            case 'mc':
				// Check user input using Mastercard regex
                if (masterCard.test(e.target.value))
                {
					// Hide Error Message
                    errorCard.style.display = 'none';
                    cardInfo.classList.remove('is-invalid');
					return true;
                }
                else
                {
					// Display Error Message
                    errorCard.innerHTML = "Not an Mastercard card.";
                    errorCard.style.display = 'block';
                    cardInfo.classList.remove('is-invalid');
					return false;
                }
                break;

            //Verifying Visa
            case 'vs':
				// Check user input using Visa regex
                if (visa.test(e.target.value))
                {
					// Hide Error Message
                    errorCard.style.display = 'none';
                    cardInfo.classList.remove('is-invalid');
					return true;
                }
                else
                {
					// Display Error Message
                    errorCard.innerHTML = "Not an Visa card.";
                    errorCard.style.display = 'block';
                    cardInfo.classList.remove('is-invalid');
					return false;
                }
                break;
        }


    })
    
    // Month and Year Validation

    // Get Current Date
    var currentdate = new Date();

    // Get input Month
    var month = document.getElementById("select-month");

    // Get input Year
    var year = document.getElementById("select-year");

    // Select error message element
    var error_message_card = document.getElementById("card-expirary-error")
    year.addEventListener('change', () => {
        if (year.value < currentdate.getFullYear())
        {
            error_message_card.style.display = 'block';
            error_message_card.classList.add("is-invalid");
            return false;
        }
        else
        {
            error_message_card.style.display = 'none';
            error_message_card.classList.remove("is-invalid");
            return true;
        }
    })
    month.addEventListener('change', () => {
        if (year.value == currentdate.getFullYear() && currentdate.getMonth() + 1 > month.value)
        {
            error_message_card.style.display = 'block';
            error_message_card.classList.add("is-invalid");
            return false;
        }
        else
        {
            error_message_card.style.display = 'none';
            error_message_card.classList.remove("is-invalid");
            return false;
        }
    })



    // Credit Card - CVV
    var cvc = document.getElementById('cc-exp');

    cvc.addEventListener('keyup', function(e) {
        // REGEX for CVC
        var cvc_num = /^[0-9]{3,4}$/;

		// Select error message element
        var error_message = document.getElementById("cvv");
        var error_border = document.getElementById("cc-exp");
		
		// Check user input using CVC regex
        if (cvc_num.test(e.target.value))
        {
			// Hide Error Message 
            error_message.style.display = 'none';
            error_border.classList.remove('is-invalid');
			return true;

        }
        else
        {
			// Display Error Message
            error_message.style.display = 'block';
            error_border.classList.add("is-invalid");
			return false;
        }

    })
    
})
