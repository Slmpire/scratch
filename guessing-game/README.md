# 🌌 EtherGuess- MY FIRST ANTIGRAVITY PROJECT 

> **Decipher the hidden frequency.**

EtherGuess is a premium, high-fidelity number guessing experience built specifically to showcase modern web styling practices. Designed with dynamic background animations, a sleek glassmorphic card design, and intuitive user feedback, it transforms a simple guessing game into an engaging digital encounter.

---

## ✨ Features

- **Dynamic Range Selector**: Quickly pivot the difficulty between **1-10**, **1-50**, and **1-100**.
- **Interactive Attempt Counter**: Keep track of your guesses in real-time.
- **Micro-Animations & Visual Cues**: 
  - **Shake Animation**: Triggers on invalid range inputs or non-numeric guesses.
  - **Win Pulse**: Animates the game card visually upon successfully guessing the correct number.
  - **Fluid Dynamic Background**: Floating, blurring backdrop blobs that move smoothly.
- **Smart History Tracking**: 
  - View previous guesses represented as pill badges.
  - Color-coded feedback (pink/red for guessing higher than target, blue for guessing lower, green for the correct guess).
- **Responsive Layout**: Designed to look stunning on both mobile viewports and desktop resolutions.

---

## 🛠️ Technology Stack

1. **HTML5**: Structured semantically for modern browser compliance.
2. **Vanilla CSS3**: 
   - Root color-token configuration for flexible styling.
   - Glassmorphic transparency (`backdrop-filter: blur()`).
   - Complex `@keyframes` animations (`float`, `shake`, `win`).
3. **Vanilla JavaScript (ES6)**: 
   - Written using object-oriented principles (a consolidated `EtherGuess` controller class).
   - Event-driven state updates and UI bindings.

---

## 🚀 How to Run Locally

Since this is a lightweight frontend application, no compilation or local server is required.

1. **Clone the Repository** (or download the files in the directory).
2. **Open the Game**: Double-click or open `index.html` in any modern web browser.
3. Check the developer console for any troubleshooting.

Alternatively, spin up a basic static file server:
```bash
# Using Python
python3 -m http.server 8000

# Using Node.js (npx)
npx serve .
```
Then navigate to `http://localhost:8000` (or the port specified by the server).

---

## 📂 Codebase Overview

- **`index.html`**: Houses the main layout, semantic header/footer elements, and links Google Fonts (`Outfit`).
- **`style.css`**: Configures variables in the `:root`, manages glassmorphism properties, float animations, and responsive layouts.
- **`script.js`**: Contains the state machinery (`EtherGuess` class) handling game inputs, DOM manipulation, range updating, and confirmation prompts when changing modes mid-game.

---

## 🎨 Aesthetic Specifications

- **Topic Font**: [Outfit](https://fonts.google.com/specimen/Outfit) (ranging weights 300 to 800)
- **Primary Accent**: `#8b5cf6` (Vibrant Purple)
- **Secondary Accent**: `#ec4899` (Vivid Pink)
- **Base Backdrop**: `#0f172a` (Sleek Dark Slate)

---

Developed under the *Antigravity* workspace suite.
