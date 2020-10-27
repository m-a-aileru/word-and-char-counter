let textbox = document.querySelector("textarea");
let userInput = textbox.value;
let wordCountButton = document.getElementById("wordButton");
let wordCount = document.getElementById("word-count");
let charCountButton = document.getElementById("charButton");
let charCount = document.getElementById("char-count");
let otherSepCheck = document.getElementById("otherSep");
let dontCountSpaceCheck = document.getElementById("otherSpace");

function calculateWordCount() {
    if (otherSepCheck.checked) { // accounting for other possible separators if 1st checkbox checked
        let userInput2 = "";
        //userInput2 = userInput.replace(/\x2e+|-+/g, ' '); -- // [.|-|+|_|/|\|] - this is for weeding out potential and specific separators, not needed for now
        userInput2 = userInput.replace(/[^A-z|^0-9]+/g, ' '); // for now, anything that isn't a letter or number is considered a potential separator
        wordCount.textContent = userInput2.split(" ").length;
    } else {
        wordCount.textContent = textbox.value.split(" ").length;
        console.log(textbox.value.split(" ").length);
        console.log('Yeah...don\'t worry about other separators');
    }
}

function calculateCharCount() {
    if (dontCountSpaceCheck.checked) {
        let userInput2 = "";
        userInput2 = userInput.replace(/\s/g, '');
        charCount.textContent = userInput2.length;
    } else { 
        charCount.textContent = userInput.length;
    }
}

wordCountButton.addEventListener("click", calculateWordCount);
charCountButton.addEventListener("click", calculateCharCount);