// Greeting Function
function showGreeting() {
    const hours = new Date().getHours();
    const greeting = document.getElementById("greeting");

    let greetingText = "Hello !";

    if(hours < 12) {
        greetingText = "Good Morning !";
    }
    else if(hours < 16) {
        greetingText = "Good Afternoon !";
    }
    else {
        greetingText = "Good Evening !";
    }

    greeting.innerHTML = greetingText;

}
window.onload = showGreeting;
