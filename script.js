function showFile() {
    alert("File clicked");
}

function showEdit() {
    alert("Edit clicked");
}

function showRun() {
    alert("Run clicked");
}

function showAboutUs() {
    alert("About Us clicked");
}

function checkScientificNumber() {
    var inputNumber = document.getElementById("inputNumber").value;
    var result = document.getElementById("result");

    // Regular expression to check scientific notation
    var scientificNotationRegex = /^[+-]?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/;

    if (scientificNotationRegex.test(inputNumber)) {
        result.innerText = "Yes, it is a scientific number.";
    } else {
        result.innerText = "No, it is not a scientific number.";
    }
}
