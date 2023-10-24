// JavaScript goes in this file, javaScript single line comments follow c/c++ standard of two frontslashes

$(document).ready(function() {                                              

    // all custom jQuery will go here



    $("#MButton1").click(function() {                                       
        $("#jQdemo").css("color","purple");                                        
        $("#jQdemo").html("Brandon Lioudis Project Journal: I have embeded a p5 game onto the website in full screen without any borders. The next steps to take are to create more games and create a new website for these games.");     
                                   
    });                                                                     

    $("#MButton1").click(function() {                                       // assign click() function to button using button id
        $("#jQdemo").css("color","purple");                                        // dynamically sets the style for the specified element
        $("#jQdemo").html("Project Update Journal:");       // adds the text to the html of the element, $ at front of statement indicates jQuery,                                                                  // # at front of object indicates id, function to be called comes after . 
        alert("This is Brandon's project update Journal");                                    // call alert just for testing purposes
        $("#MButton1").html("Updates Above");                             // change the button label, or do whatever you want
    });                                                                     // note how the jQuery $ identifiers link the html object to the javaScript object


}); // end of jQuery block

// more javaScript code not using jQuery could go here

