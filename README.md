# Transaction UX Solution 🏦

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Status](https://img.shields.io/badge/Status-Prototype-orange?style=for-the-badge)

A high-fidelity, standalone **Single File Component (SFC)** designed to prototype and preview bank transaction notifications (SMS/Push).

This tool allows UX designers and product managers to draft financial messages with real-time validation and a realistic mobile preview.

## ✨ Features

* **📱 Real-time Mobile Preview:** Simulates an iPhone 17 concept interface to visualize notifications instantly.
* **🎨 Bank-Grade UI:** Dark mode optimized with "Glassmorphism" design, built using Tailwind CSS.
* **🧩 Variable Bank:** Drag-and-drop support for transaction variables (e.g., `{amount}`, `{card_number}`).
* **⚡ Zero Configuration:** Runs directly in the browser using Babel Standalone. No build step required.
* **✅ Smart Validation:** Checks for balanced braces and template integrity.
* **📝 Rich Templates:** Pre-configured scenarios for Withdrawal, Deposit, Transfer, and more.

## 🚀 How to Run

Since this is a standalone prototype, you don't need `npm` or `node.js`.

1.  Clone the repository:
    ```bash
    git clone [https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git](https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git)
    ```
2.  Navigate to the folder.
3.  Open **`index.html`** in any modern browser (Chrome, Edge, Firefox).

## 🛠 Tech Stack

* **Core:** React 18 (UMD)
* **Styling:** Tailwind CSS (CDN)
* **Compiler:** Babel Standalone
* **Icons:** Lucide React

## 📂 Project Structure

```text
.
├── index.html       # The main application file (Logic + UI)
└── README.md        # Documentation
