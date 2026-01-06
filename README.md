<div align="center">

# 🎲 Soc Ops

### **The Ultimate Social Bingo for Real-Life Connections**

*Break the ice, spark conversations, and make meaningful connections at your next event*

[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Built with React](https://img.shields.io/badge/React-19-61dafb?logo=react)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-06b6d4?logo=tailwindcss)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178c6?logo=typescript)](https://www.typescriptlang.org)

[**🎮 Play Now**](https://piradical.github.io/my-bingo-app) · [**📖 Lab Guide**](.lab/GUIDE.md) · [**🐛 Report Bug**](../../issues) · [**✨ Request Feature**](../../issues)

</div>

---

## 🌟 What is Soc Ops?

**Soc Ops** transforms awkward networking into an engaging social game. Instead of small talk, players explore a 5×5 bingo board filled with conversation starters like "has lived in another country" or "speaks more than 2 languages." 

Find people who match each square, mark them off, and race to get **five in a row**! Perfect for:

- 🏢 **Team building events** and company mixers
- 🎓 **Conferences and workshops** 
- 🎉 **Social gatherings** and parties
- 🤝 **Networking events** and meetups

## ✨ Features

- 🎯 **25 Unique Prompts** — Randomly shuffled every game for endless variety
- 💾 **Auto-Save Progress** — Pick up right where you left off
- 📱 **Mobile-First Design** — Optimized for phones at in-person events
- 🎊 **Win Celebration** — Delightful animations when you get 5 in a row
- 🎨 **Clean, Modern UI** — Built with React 19 and Tailwind CSS v4
- ⚡ **Lightning Fast** — Vite-powered development and deployment

## 🚀 Quick Start

### Prerequisites

- [Node.js 22](https://nodejs.org/) or higher

### Run Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The game will open at `http://localhost:5173` 🎮

### Build for Production

```bash
npm run build
```

Automatically deploys to GitHub Pages on push to `main` branch.

## 🎯 How It Works

1. **Start the Game** — Each player gets a unique 5×5 bingo board
2. **Find Matches** — Walk around and find people who match each prompt
3. **Mark Squares** — Tap to mark off completed squares
4. **Win!** — Be the first to get 5 in a row (horizontal, vertical, or diagonal)

The center square is always a **FREE SPACE** to get you started!

## 🛠️ Technology Stack

- **[React 19](https://react.dev)** — Modern UI with hooks and state management
- **[TypeScript](https://www.typescriptlang.org)** — Type-safe development
- **[Tailwind CSS v4](https://tailwindcss.com)** — Utility-first styling with custom theme
- **[Vite](https://vite.dev)** — Next-generation frontend tooling
- **[Vitest](https://vitest.dev)** — Fast unit testing framework

## 🎨 Customization

Want to customize the questions for your event? Edit [`src/data/questions.ts`](src/data/questions.ts) with your own prompts!

```typescript
export const questions: string[] = [
  "your custom question here",
  "another great icebreaker",
  // Add 23 more...
];
```

For detailed customization instructions, see the [**Lab Guide**](.lab/GUIDE.md).

## 🧪 Development

```bash
# Run tests
npm run test

# Lint code
npm run lint

# Type check
npm run build
```

## 🤝 Contributing

Contributions are welcome! Whether it's:

- 🐛 Bug fixes
- ✨ New features
- 📝 Documentation improvements
- 🎨 Design enhancements

Check out our [Contributing Guide](CONTRIBUTING.md) and [Code of Conduct](CODE_OF_CONDUCT.md).

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

## 💬 Support

Need help? Check out our [Support Guide](SUPPORT.md) or [open an issue](../../issues).

---

<div align="center">

**Made with ❤️ for building better connections**

[⭐ Star this repo](../../stargazers) if you found it helpful!

</div>
