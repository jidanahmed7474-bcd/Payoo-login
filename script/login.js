console.log("Login Successfully");

document.getElementById("login-btn").addEventListener("click", function(){
    // get the mobile number input
    const numberInput = document.getElementById("input-number");
    const contactNumber = numberInput.value;
    console.log(contactNumber);

    // get the pin input
    const inputPin = document.getElementById("input-pin");
    const pin = inputPin.value;
    console.log(pin);

    // match pin & mobile number
    if(contactNumber == "0154846887" && pin == "12345"){
        // 3-1 true::>> alert>homepage
        alert("login Successfully");

        window.location.assign("/home.html");
    }else{
        // 3-2 false::>> alert>return
        alert("login Failed");
        return;
    }
})