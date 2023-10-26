var myModal = document.getElementById("vic_regiser_modal");
var myInput = document.getElementById("myInput");

myModal.addEventListener("shown.bs.modal", function () {
    myInput.focus();
});
