//Input form doesn't display on page load
$("#form").hide();
//When "Book Now" is pressed form displays
$("#bookNow").click(function() {
    $("#form").show();
    //"Book Now" button hidden so user can click submit on form
    $("#bookNow").hide();
});

//Provides user form submitted confirmation
$("#formSubmit").click(function() {
    alert("Thank you for Traveling with us");
});