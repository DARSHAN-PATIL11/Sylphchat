
# Sylphchat

[![TypeScript](https://img.shields.io/badge/TypeScript-83%25-blue)](https://www.typescriptlang.org/)
[![CSS](https://img.shields.io/badge/CSS-16%25-blueviolet)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-1%25-yellow)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Next.js](https://img.shields.io/badge/Next.js-Latest-black)](https://nextjs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Transform PDF document interaction with Sylphchat, an innovative conversational interface that revolutionizes information extraction. This TypeScript-powered web application bridges the gap between static documents and dynamic conversations, making document knowledge instantly accessible.

## Features

- **Conversational PDF Interface**: Interact with PDF documents using natural language
- **Intelligent Query Processing**: Get precise answers to your questions about document content
- **Document Management**: Upload, organize, and access your PDF documents easily
- **Responsive Design**: Seamless experience across desktop and mobile devices
- **Context-Aware Responses**: The system understands the context of your queries relative to the document

## Technology Stack

- **Frontend Framework**: Next.js
- **Primary Language**: TypeScript (83%)
- **Styling**: Tailwind CSS (16%)
- **Configuration**: ESLint, PostCSS, TypeScript Config
- **Package Management**: npm with lock file support

## Project Structure

```
sylphchat/
├── prisma/               # Database schema and migrations
├── public/               # Static assets
├── src/                  # Source code
├── .gitignore            # Git ignore configuration
├── README.md             # Project documentation
├── components.json       # Component configurations
├── eslint.config.mjs     # ESLint configuration
├── next.config.ts        # Next.js configuration
├── package.json          # Project dependencies
├── pnpm-lock.yaml        # Package lock file
├── postcss.config.mjs    # PostCSS configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or pnpm package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/DARSHAN-PATIL11/Sylphchat.git
   cd Sylphchat
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   pnpm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Usage

1. **Upload a PDF**: Click the upload button to add your PDF document
2. **Ask Questions**: Type your questions about the document in the chat interface
3. **Get Answers**: Receive contextually relevant answers extracted directly from the document
4. **Follow-up**: Ask follow-up questions while maintaining conversation context

## Development

### Build for Production

```bash
npm run build
# or
pnpm build
```

### Run Production Build

```bash
npm start
# or
pnpm start
```

### Linting

```bash
npm run lint
# or
pnpm lint
```

## Deployment

Sylphchat can be deployed on any platform that supports Next.js applications. We recommend Vercel for the easiest deployment experience.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Next.js team for the amazing framework
- All contributors who have helped shape this project

---

*Note: This project is under active development. Features and documentation may change as the project evolves.*
