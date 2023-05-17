const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
const SUBSTITUTION = "dowvmkgljfuhxnyitqczaspreb";

function encrypt() {
  let inputText = document.getElementById("input-text").value;
  let encryptedText = substitute(inputText, ALPHABET, SUBSTITUTION);

  document.getElementById("output-text").value = encryptedText;
}

function decrypt() {
  let inputText = document.getElementById("input-text").value;
  let decryptedText = substitute(inputText, SUBSTITUTION, ALPHABET);

  document.getElementById("output-text").value = decryptedText;
}

function substitute(inputText, from, to) {
  let outputText = "";

  for (let i = 0; i < inputText.length; i++) {
    let index = from.indexOf(inputText[i].toLowerCase());

    if (index === -1) {
      outputText += inputText[i];
    } else {
      outputText += to[index];
    }
  }

  return outputText;
}
