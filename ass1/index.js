// Arrow function to create greeting message
const greetUser = (name, city) => {
    return `Your name is ${name} and your city is ${city}.`;
};

// Function triggered when button is clicked
const submitForm = () => {
    const name = document.getElementById("name").value.trim();
    const city = document.getElementById("city").value.trim();

    // Validation
    if (name === "" || city === "") {
        document.getElementById("output").innerHTML = "Please enter both name and city!";
        document.getElementById("output").style.color = "red";
        return;
    }

    // Show message
    const message = greetUser(name, city);
    document.getElementById("output").innerHTML = message;
    document.getElementById("output").style.color = "black";
};