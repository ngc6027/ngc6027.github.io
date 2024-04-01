function changeTextInDemo() {
    var demoDefaultText = "Change this text with the button below!";
    var demoAltText = "Hello JavaScript!";

    var demoHandle = document.getElementById("demo");
    var demoText = demoHandle.innerHTML.trim();

    console.log("Text is currently \"" + demoText + "\"");

    if (demoText === demoDefaultText) {
        console.log("Changing text to \"" + demoAltText + "\"");
        demoHandle.innerHTML = demoAltText;
    } else {
        console.log("Changing text to \"" + demoDefaultText + "\"");
        demoHandle.innerHTML = demoDefaultText;
    }
}

const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello JavaScript World!";
