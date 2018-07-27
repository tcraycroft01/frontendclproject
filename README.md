# frontendclproject

## Description

My project is a web page for a travel agency known as Travel with Us. Provides trip options & a form that can be completed should the user decide to book a trip.

## Custom CSS Classes

The class(es) I created are:

1. .pricing ( adds border, padding, and text properties to the element )

2. #contact ( adds text-align & padding to the element )

3. #about ( adds padding to the about us header element )

4. #content ( adds padding to the p-element of the about us section )

5. #form ( adds border around form )

## Custom JavaScript Functions

The javascript functions I created are:

1.  $("#form").hide();
    $("#bookNow").click(function() {
      $("#form").show();
      $("#bookNow").hide();
});

Used to hide & show form on page

2. $("#formSubmit").click(function() {
    alert("Thank you for Traveling with us");
    
Used to alert user that page submitted successfully  
