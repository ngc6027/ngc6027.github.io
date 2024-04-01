function changeTextInDemo() {
    var demoDefaultText = "Change this text with the button below!"
    var demoAltText = "Hello JavaScript!"

    var demoHandle = document.getElementById("demo");
    var demoText = demoHandle.innerHTML;

    if (demoText === demoDefaultText) {
        console.log("Changing text to AltText")
        demoHandle.innerHTML = demoAltText;
    } else {
        console.log("Changing text to DefaultText")
        demoHandle.innerHTML = demoDefaultText;
    }

    // document.getElementById("demo").innerHTML = "Hello JavaScript!";
}

const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello JavaScript World!";
