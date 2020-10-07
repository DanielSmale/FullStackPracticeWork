$(window).on("load", function () {
    document.getElementById("#messageBox").addEventListener("keypress", function () {
        let string = document.getElementById("#messageBox").innerHTML;
        let button = document.getElementById("#submitButton");

        if(string != null){
            button.disabled = false;
        }
    });


});