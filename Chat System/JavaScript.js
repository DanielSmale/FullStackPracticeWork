(window).on("load", function () {
    document.getElementById("#messageBox").addEventListener("change", function () {
  //      let string = document.getElementById("#messageBox").textContent;
  //      let button = document.getElementById("#submitButton");
  let string = document.getElementsByClassName("#messageBox");

        if (string.valueOf == "") {
            document.getElementById("#submitButton");

        }
    });

});