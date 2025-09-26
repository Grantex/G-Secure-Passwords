function generatePassword(length = 8) {
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
  let password = "";
  const randomValues = new Uint32Array(length);
  window.crypto.getRandomValues(randomValues);

  for (let i = 0; i < length; i++) {
    const randomIndex = randomValues[i] % charset.length;
    password += charset[randomIndex];
  }

  document.getElementById("passwordOutput").textContent = password;
}

function updateTotal() {
  const upper = parseInt(document.getElementById("uppercaseCount").value) || 0;
  const lower = parseInt(document.getElementById("lowercaseCount").value) || 0;

  const selectedSymbols = document.querySelectorAll("#symbolOptions .btn-selected").length;
  const selectedNumbers = document.querySelectorAll("#numberOptions .btn-selected").length;

  const total = upper + lower + selectedSymbols + selectedNumbers;
  document.getElementById("totalCount").textContent = total;
}

function toggleSelection(event) {
  event.target.classList.toggle("btn-selected");
  updateTotal();
}

document.addEventListener("DOMContentLoaded", () => {
  const symbols = ["@", "#", "$", "%", "&", "*", "!", "?"];
  const numbers = [...Array(10).keys()].map(String);

  const symbolContainer = document.getElementById("symbolOptions");
  const numberContainer = document.getElementById("numberOptions");

  symbols.forEach(sym => {
    const btn = document.createElement("button");
    btn.className = "btn btn-outline-secondary btn-sm btn-selectable";
    btn.textContent = sym;
    btn.onclick = toggleSelection;
    symbolContainer.appendChild(btn);
  });

  numbers.forEach(num => {
    const btn = document.createElement("button");
    btn.className = "btn btn-outline-secondary btn-sm btn-selectable";
    btn.textContent = num;
    btn.onclick = toggleSelection;
    numberContainer.appendChild(btn);
  });

  updateTotal();
});

function generateCustomPassword() {
  const upperCount = parseInt(document.getElementById("uppercaseCount").value) || 0;
  const lowerCount = parseInt(document.getElementById("lowercaseCount").value) || 0;

  const selectedSymbols = Array.from(document.querySelectorAll("#symbolOptions .btn-selected")).map(btn => btn.textContent);
  const selectedNumbers = Array.from(document.querySelectorAll("#numberOptions .btn-selected")).map(btn => btn.textContent);

  let passwordChars = [];

  passwordChars.push(...getSecureChars("ABCDEFGHIJKLMNOPQRSTUVWXYZ", upperCount));
  passwordChars.push(...getSecureChars("abcdefghijklmnopqrstuvwxyz", lowerCount));

  // Add selected symbols and numbers directly
  passwordChars.push(...selectedSymbols);
  passwordChars.push(...selectedNumbers);

  const password = shuffleArray(passwordChars).join('');
  document.getElementById("customPasswordOutput").textContent = password;
}

function getSecureChars(charset, count) {
  const result = [];
  const randomValues = new Uint32Array(count);
  window.crypto.getRandomValues(randomValues);

  for (let i = 0; i < count; i++) {
    const randomIndex = randomValues[i] % charset.length;
    result.push(charset[randomIndex]);
  }

  return result;
}

function shuffleArray(array) {
  const shuffled = array.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = window.crypto.getRandomValues(new Uint32Array(1))[0] % (i + 1);
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
