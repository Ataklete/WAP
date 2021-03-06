/**
 * app.js
 */

window.onload = function() {

    "use strict";

    let bigBtn = document.getElementById("docBig");
    // using anonmous function
    bigBtn.onclick = function() {  
        setInterval(docorateBig, 200);
    };

    function docorateBig() {
        let textArea = document.getElementById("orginalText");
        let style = window.getComputedStyle(textArea);
        let fontSize = style.getPropertyValue('font-size');
        let fontBigger = parseInt(fontSize) + 2; //update the font periodically 
        document.getElementById("orginalText").style.fontSize = fontBigger.toString() + "px";
    }


    $(document).ready(function() {
        $('input[type="checkbox"]').click(function() {
            if ($(this).prop("checked") === true) {
                document.getElementById("orginalText").className = "bold";
                document.body.style.backgroundImage = "url(http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg)";
            } else if ($(this).prop("checked") === false) {
                document.getElementById("orginalText").className = "normalText";
            }
        });
    });
};