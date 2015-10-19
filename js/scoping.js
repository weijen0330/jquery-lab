/*
    script file for the scoping.html page

    If you struggled understanding variable scoping during the last challenge,
    do this simple exercise. You goal is to show the number of times the
    user clicks the "Click Me" button. Write the code necessary to accomplish
    the following:

    - Use jQuery to register a function that will be called once the DOM
    is ready for manipulation.
    https://learn.jquery.com/using-jquery-core/document-ready/

    - Remember to add the 'use strict'; directive inside that function to switch
    into strict mode.
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

    - When the DOM is ready, use jQuery to register a function that will be
    called whenever the user clicks on the "Click Me" button.
    http://api.jquery.com/click/

    - Declare a variable at the proper scope to record how many times the user
    clicked on that button.

    - When the user clicks the button, increment your variable and display
    the current count in the <span id="clicked-count"> element.
    http://api.jquery.com/text/

*/

//when the document is ready for manipulation...
$(function() {
    'use strict';

    //this variable will be visible inside this function and
    //all functions declared within this function
    var clickedCount = 0;

    //register a click event handler for the #click-me button
    $('#click-me').click(function() {
        //increment the variable in the outer scope
        clickedCount++;

        //display the current count in the #clicked-count span
        //use text() here to avoid any possible HTML interpretation
        $('#clicked-count').text(clickedCount);
    }); //on #click-me click
}); //on doc ready
