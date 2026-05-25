# Mini CI Demo

A demo project for learning GitHub Actions.

## Features
- Simple calculator module
- Unit tests with Jest
- ESLint for code quality
- GitHub Actions CI pipeline

## Local Development
\`\`\`bash
npm install
npm run lint
npm test
\`\`\`

## CI Pipeline
The CI runs automatically on every push and pull request. It:
1. Lints the code
2. Runs tests on Node 18, 20, and 22 in parallel
3. Uploads coverage reports as artifacts