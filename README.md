# MCP AI Agents

A modern, clean architecture implementation of AI agents using best practices and SOLID principles.

## Overview

This project implements a flexible and extensible AI agent system following clean architecture principles and industry best practices. It provides a foundation for building intelligent agents that can perform various tasks while maintaining code quality and maintainability.

## Features

- 🎯 Clean Architecture implementation
- 🔄 SOLID principles adherence
- 🧩 Modular and extensible design
- 🔒 Type-safe implementation
- 📝 Comprehensive documentation
- ✅ Test coverage

## Project Structure

```
src/
├── domain/           # Enterprise business rules
│   ├── entities/     # Business objects
│   ├── interfaces/   # Abstract interfaces
│   └── value-objects/# Immutable value objects
├── application/      # Application business rules
│   ├── interfaces/   # Port interfaces
│   ├── services/     # Application services
│   └── use-cases/    # Business use cases
├── infrastructure/   # External interfaces
│   ├── persistence/  # Data storage implementations
│   ├── external/     # External services integration
│   └── config/       # Configuration management
└── presentation/     # User interface layer
    ├── api/          # API endpoints
    ├── controllers/  # Request handlers
    └── middleware/   # HTTP middleware
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- TypeScript

### Installation

1. Clone the repository:
```bash
git clone https://github.com/solutionsSlayer/mcp-ai-agents.git
cd mcp-ai-agents
```

2. Install dependencies:
```bash
npm install
```

3. Build the project:
```bash
npm run build
```

## Development Guidelines

### Code Style

- Use meaningful and descriptive names
- Keep functions small and focused
- Follow the Single Responsibility Principle
- Write self-documenting code
- Use TypeScript's type system effectively

### Testing

- Write unit tests for business logic
- Integration tests for external interfaces
- End-to-end tests for critical paths
- Follow TDD where applicable

### Git Workflow

1. Create feature branches from `main`
2. Use conventional commits
3. Submit PRs for review
4. Squash merge to main

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.