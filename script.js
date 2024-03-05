

//Initialize Toastr;
toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": false,
    "progressBar": false,
    "positionClass": "toast-top-full-width",
    "preventDuplicates": true,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "3000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}

let inputPass = document.querySelector("#inputPass");
let length = 12;

let uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";

let allChars = uppercaseLetters + lowercaseLetters + numbers;
const createPassword = () => {
    let password = "";
    password += uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];
    password += lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    
    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    inputPass.value = password;
}
const btn = document.querySelector("#button");
btn && btn.addEventListener('click', createPassword);



function copyText(e) {
    let inputPass = document.querySelector("#inputPass");
    if (!inputPass.value.trim()) {
        toastr.error("Please Generate the Passowrd First.");
        return;
    }
    console.log("Input Value--->", inputPass.value);
    inputPass.select();
    document.execCommand("copy");
    toastr.success("text-copied");
}


