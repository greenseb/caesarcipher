let originalInput = document.querySelector("#original");
let shiftInput = document.querySelector("#shift");
let encryptedInput = document.querySelector("#encrypted");

let originalMessage = originalInput.value;

originalInput.addEventListener("input", characterEntered, false);


function characterEntered(e) {
    originalMessage = e.target.value;
    originalMessage = originalMessage.toLowerCase();
    originalMessage = originalMessage.replace(/[^a-z]/, '');

    e.target.value = originalMessage;

    startEncryption();
}


function startEncryption() {
    let encryptedMessage = "";
    let shift = shiftInput.value ? Number(shiftInput.value) : 0;
    console.log(shift);

    for (letter of originalMessage) {
        encryptedMessage += shiftLetter(letter, shift);
    }
    console.log(encryptedMessage);
    encryptedInput.value = encryptedMessage;
}
startEncryption();


function shiftLetter(letter, shift) {
let newLetter = "";

let letterCode = letter.charCodeAt(0);
let newLetterCode = letterCode + (shift % 26);

if (newLetterCode < 97) {
    newLetterCode += 26;
} else if (newLetterCode > 122) {
    newLetterCode -= 26;
}

newLetter = String.fromCharCode(newLetterCode);

return newLetter;
}