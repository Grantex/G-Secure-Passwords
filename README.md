# 🔐 G Secure Passwords

**G Secure Passwords** 
A browser-based password generator built with simplicity, security, and user empowerment in mind. Designed to run entirely on the client side, leverages cryptographically secure randomness to help users generate strong passwords, without ever transmitting data over the network.


## 🎯 Purpose

In an age of increasing credential leaks and phishing attacks, password hygiene is more critical than ever. This project demonstrates how secure password generation can be implemented responsibly in the browser, using modern cryptographic APIs and clear UX meant to serve both developers and users. 


## 🛡️ Security Highlights

- **Client-side only**: No passwords are stored, logged, or transmitted. Everything happens in the user's browser.
- **Cryptographically secure randomness**: Uses `window.crypto.getRandomValues()` — not `Math.random()` — to ensure high-entropy password generation.
- **Custom composition control**: Users can tailor password structure to meet policy requirements or personal preferences.
- **No dependencies on external APIs or libraries**: Reduces attack surface and ensures full transparency.


## 🧪 Features

### 🔹 Quick Generate
- One-click generation of a secure 8-character password.
- Includes a mix of uppercase, lowercase, numbers, and symbols.
- Ideal for fast, secure password creation.

### 🔹 Custom Generate
- Choose how many uppercase and lowercase letters to include.
- Select specific symbols and digits to use.
- Dynamically adjusts total password length.
- Can generate PINs, symbol-only passwords, or letter-only passwords.


## 🧰 Tech Stack

- **HTML**: Semantic structure and layout.
- **Bootstrap 5**: Responsive styling and clean UI.
- **JavaScript**: Handles logic, interactivity, and secure password generation.
- **window.crypto API**: Provides cryptographically strong random values.

---

## 📂 Project Structure

/static └── logic.js 
/templates └── index.html 


## 📖 Why `window.crypto` Matters

G-Secure-Passwords uses `window.crypto.getRandomValues()` to ensure that every character in the password is selected with high entropy, making it resistant to prediction and brute-force attacks.



## 🚀 Future Enhancements 

- Copy-to-clipboard button
- Password strength meter
- Breach-check integration (e.g., HaveIBeenPwned API)
- Export to password manager formats
- Dark mode toggle

---

## 🧾 License

use freely, contribute thoughtfully.

## ✍️ Author

**Designed & Developed by Grant Ombongi Nyamweya**  


[LinkedIn](https://www.linkedin.com/in/grant-ombongi-21912b273/) | [GitHub](https://github.com/Grantex)

