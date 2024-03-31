function changeTextInDemo() {
    let demoDefaultText = "Change this text with the button below!"
    let demoAltText = "Hello JavaScript!"

    let demoHandle = document.getElementById("demo");
    let demoText = demoHandle.innerHTML;

    if (demoText === demoDefaultText) {
        demoText = demoAltText;
    } else {
        demoText = demoDefaultText;
    }
}

// Looking at https://stackoverflow.com/a/1947531/6186275

// function pointer
// document.getElementById("script_button").addEventListener("click", changeTextInDemo);

// anonymous function
document.getElementById("script_button").addEventListener("click", function() {
    let demoDefaultText = "Change this text with the button below!"
    let demoAltText = "Hello JavaScript!"

    let demoHandle = document.getElementById("demo");
    let demoText = demoHandle.innerHTML;

    if (demoText === demoDefaultText) {
        demoText = demoAltText;
    } else {
        demoText = demoDefaultText;
    }
});

const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello JavaScript World!";
