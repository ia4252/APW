// JavaScript goes in this file, javaScript single line comments follow c/c++ standard of two frontslashes

$(document).ready(function() {                                              

    // all custom jQuery will go here



    $("#MButton1").click(function() {                                       
        $("#jQdemo").css("color","purple");                                        
        $("#jQdemo").html("Brandon Lioudis Project Journal: I have embeded a p5 game onto the website in full screen without any borders. The next steps to take are to create more games and create a new website for these games.");     
                                   
    });                                                                     

    $("#MButton1").click(function() {                                       // assign click() function to button using button id
        $("#jQdemo").css("color","purple");                                        // dynamically sets the style for the specified element
        $("#jQdemo").html("Project Update Journal: I have embeded a p5 game onto the website in full screen without any borders. The next steps to take are to create more games and create a new website for these games. Evan and I have also created a new git hub repository and currently uin the process of getting that on to the web. We have added one game to our website as a proof of concept and have it working perfectly without any bugs on our page. The next step in the process is to create more games using p5 and embed them onto or webpage. 9/1/24 Started to develop a new game using github of pong. We will finish the game add it to our websites and then create another game that involves catching a ball.");       // adds the text to the html of the element, $ at front of statement indicates jQuery,                                                                  // # at front of object indicates id, function to be called comes after . 
        alert("This is Brandon's project update Journal");                                    // call alert just for testing purposes
        $("#MButton1").html("Updates Above");                             // change the button label, or do whatever you want
    });                                                                     // note how the jQuery $ identifiers link the html object to the javaScript object


}); // end of jQuery block

// more javaScript code not using jQuery could go here

