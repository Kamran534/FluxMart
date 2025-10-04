# Contributing to FlexMart

Thank you for your interest in contributing to FlexMart! This document provides guidelines and information for contributors.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm 9+
- Git
- Docker (optional)

### Development Setup
1. Fork the repository
2. Clone your fork: `git clone https://github.com/your-username/flexmart.git`
3. Install dependencies: `npm install`
4. Start development: `npm run dev`

## 📋 Development Workflow

### Branch Naming
- `feature/feature-name` - New features
- `bugfix/bug-description` - Bug fixes
- `hotfix/critical-fix` - Critical production fixes
- `refactor/component-name` - Code refactoring
- `docs/documentation-update` - Documentation changes

### Commit Convention
We use conventional commits:
```
type(scope): description

feat(client): add user authentication
fix(server): resolve CORS issue
docs(readme): update installation instructions
refactor(api): improve error handling
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

## 🧪 Testing

### Running Tests
```bash
# Run all tests
npm test

# Run client tests only
npm run test:client

# Run server tests only
npm run test:server
```

### Test Coverage
- Aim for >80% test coverage
- Write tests for new features
- Update tests when fixing bugs

## 📝 Code Style

### Frontend (Client)
- Use TypeScript for type safety
- Follow Next.js best practices
- Use Tailwind CSS for styling
- ESLint configuration must pass

### Backend (Server)
- Use ES modules (import/export)
- Follow Express.js patterns
- Add proper error handling
- Include input validation

### General
- Use meaningful variable names
- Add comments for complex logic
- Keep functions small and focused
- Follow existing code patterns

## 🐛 Bug Reports

When reporting bugs, please include:
- Clear description of the issue
- Steps to reproduce
- Expected vs actual behavior
- Environment details (OS, Node version, etc.)
- Screenshots if applicable

## ✨ Feature Requests

For new features:
- Check existing issues first
- Provide clear use case
- Include implementation ideas if possible
- Consider backward compatibility

## 🔄 Pull Request Process

1. **Create Feature Branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

2. **Make Changes**
   - Write clean, tested code
   - Update documentation if needed
   - Ensure all tests pass

3. **Commit Changes**
   ```bash
   git add .
   git commit -m "feat: add amazing feature"
   ```

4. **Push and Create PR**
   ```bash
   git push origin feature/amazing-feature
   ```

5. **PR Requirements**
   - Clear description of changes
   - Reference related issues
   - Ensure CI passes
   - Request review from maintainers

## 🏗️ Project Structure

```
├── client/          # Next.js frontend
├── server/          # Express.js backend
├── .github/        # GitHub workflows and templates
├── docs/           # Documentation
└── scripts/        # Build and utility scripts
```

## 🐳 Docker Development

### Backend Container
```bash
cd server
docker build -t flexmart-server .
docker run -p 8080:8080 flexmart-server
```

### Using Docker Compose (if available)
```bash
docker-compose up -d
```

## 📚 Documentation

- Update README.md for significant changes
- Add JSDoc comments for complex functions
- Update API documentation for backend changes
- Include examples in code comments

## 🔒 Security

- Never commit secrets or API keys
- Use environment variables for configuration
- Validate all user inputs
- Follow security best practices

## 🎯 Areas for Contribution

### High Priority
- [ ] Authentication system
- [ ] Database integration
- [ ] API documentation
- [ ] Error handling improvements
- [ ] Performance optimizations

### Medium Priority
- [ ] Additional test coverage
- [ ] UI/UX improvements
- [ ] Mobile responsiveness
- [ ] Accessibility features
- [ ] Internationalization

### Low Priority
- [ ] Additional themes
- [ ] Advanced features
- [ ] Third-party integrations
- [ ] Analytics integration

## 📞 Getting Help

- Check existing issues and discussions
- Join our community discussions
- Contact maintainers for urgent issues

## 🏆 Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes
- Project documentation

## 📄 License

By contributing, you agree that your contributions will be licensed under the ISC License.

---

Thank you for contributing to FlexMart! 🚀
