
## Table of Contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My Process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

---

## Overview

### The challenge

Users should be able to:

- Complete the form and see a success message upon successful submission
- Receive form validation messages if:
  - A required field has been missed
  - The email address is not formatted correctly
- Complete the form only using their keyboard
- Have inputs, error messages, and the success message announced on their screen reader
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Screenshot](./screenshot.jpg)

*(Replace this with your actual screenshot)*

### Links

- Solution URL: [https://github.com/vikashyadav22313-cell/contact-page]
- Live Site URL: [https://contact-box.netlify.app/]

---

## My Process

### Built with

- HTML5 semantic elements
- CSS3 (Flexbox, Grid, Custom Properties)
- JavaScript (Vanilla)
- Mobile-first workflow

### What I learned

This project helped me improve my understanding of:

- Form validation using JavaScript
- Handling different input types: text, checkbox, radio buttons
- Showing dynamic error and success messages
- Accessibility features like focus states and keyboard navigation

Example of validation snippet:

```js
const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
