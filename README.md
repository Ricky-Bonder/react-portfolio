# Portfolio | Riccardo Ossola

A modern, high-performance personal portfolio website built to showcase projects in **Embedded Systems** and **Full-Stack Development**.

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

## 🚀 Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** React Icons / Lucide React
- **Hosting:** GitHub Pages

## ✨ Key Features

- **🎨 Modern UI/UX:** Features glassmorphism, particle backgrounds, and rotating text effects.
- **📱 Adaptive Animations:**
  - **Desktop:** Hover-based interactions and scale effects.
  - **Mobile:** Scroll-triggered (`whileInView`) animations for better touch usability.
- **🌓 Dark Mode:** Fully supported theme switching with system preference detection.
- **⚡ Static Export:** Optimized configuration for hosting on GitHub Pages.
- **📧 Working Contact Form:** Integrated with Formspree for serverless email handling.

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

1. **Clone the repository**
   ```bash
   git clone [https://github.com/ricky-bonder/react-portfolio.git](https://github.com/ricky-bonder/react-portfolio.git)
   cd react-portfolio

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup Create a .env.local file in the root directory to configure the contact form (optional)**
    ```bash
    NEXT_PUBLIC_FORMSPREE_ID=your_form_id_here
    ```

4. **Run Development Server**
    ```bash
    npm run dev
    ```

Open http://localhost:3000/react-portfolio with your browser to see the result.

---

## 📦 **Deployment**

This project is configured to deploy to **GitHub Pages** using the gh-pages package.

To deploy a new version:

    npm run dev

This command will:

- Build the project (next build).
- Export the static files to the out/ directory.
- Push the content of out/ to the gh-pages branch.

## 📄 License
This project is open source and available under the MIT License.