<div align="center">
  <img src="https://raw.githubusercontent.com/[YOUR-USERNAME]/[YOUR-REPO-NAME]/main/client/public/banner.png" alt="FlexMart Banner" width="800"/>
</div>

# FlexMart - AI Powered Ecommerce Platform

A modern, full-stack ecommerce platform built with Next.js, Express.js, and AI-powered features.

## 🏗️ Project Structure

This is a monorepo containing both frontend and backend applications:

```
├── client/                 # Next.js frontend application
│   ├── src/
│   │   └── app/           # Next.js App Router
│   ├── public/            # Static assets
│   ├── package.json
│   └── ...
├── server/                # Express.js backend API
│   ├── index.js           # Main server file
│   ├── Dockerfile         # Production Docker configuration
│   ├── .dockerignore
│   ├── package.json
│   └── ...
├── .github/
│   └── workflows/         # GitHub Actions CI/CD
├── package.json           # Root package.json (workspaces)
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm 9+
- Docker (optional, for containerized deployment)

### Development Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd running
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development servers**
   ```bash
   # Start both client and server concurrently
   npm run dev
   
   # Or start individually
   npm run dev:client    # Frontend on http://localhost:3000
   npm run dev:server     # Backend on http://localhost:8080
   ```

## 📦 Available Scripts

### Root Level (Monorepo)
```bash
npm run dev              # Start both client and server
npm run build            # Build both applications
npm run start            # Start both in production mode
npm run lint             # Lint both applications
npm run test             # Test both applications
npm run clean            # Clean build artifacts
```

### Client (Frontend)
```bash
cd client
npm run dev              # Start Next.js dev server
npm run build            # Build for production
npm run start            # Start production server
npm run lint             # Run ESLint
npm run type-check       # TypeScript type checking
```

### Server (Backend)
```bash
cd server
npm run dev              # Start with nodemon
npm run start            # Start production server
npm run start:prod       # Start with NODE_ENV=production
```

## 🐳 Docker Deployment

### Build and Run Backend Container
```bash
cd server
docker build -t flexmart-server .
docker run -p 8080:8080 flexmart-server
```

### Using GitHub Container Registry
The CI/CD pipeline automatically builds and pushes Docker images to GHCR:

```bash
# Pull the latest image
docker pull ghcr.io/[your-username]/flexmart-server:latest

# Run the container
docker run -p 8080:8080 ghcr.io/[your-username]/flexmart-server:latest
```

## 🔧 Technology Stack

### Frontend (Client)
- **Framework**: Next.js 15.5.4 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Linting**: ESLint with Next.js config

### Backend (Server)
- **Runtime**: Node.js 18+
- **Framework**: Express.js 5.1.0
- **Language**: JavaScript (ES Modules)
- **Middleware**: CORS, Morgan, dotenv
- **Email**: Nodemailer

### DevOps & Deployment
- **Containerization**: Docker with multi-stage builds
- **CI/CD**: GitHub Actions
- **Registry**: GitHub Container Registry (GHCR)
- **Package Management**: npm workspaces

## 🚀 CI/CD Pipeline

The project includes a comprehensive GitHub Actions workflow (`.github/workflows/ci-and-docker.yml`) that:

1. **Frontend CI**: Lints and tests the Next.js application
2. **Backend CI**: Lints, tests, and builds the Express server
3. **Docker Build**: Creates and pushes production-ready Docker images to GHCR

### Workflow Features
- ✅ Automated testing and linting
- ✅ Dependency caching for faster builds
- ✅ Multi-stage Docker builds
- ✅ Security best practices (non-root user)
- ✅ BuildKit caching for optimized Docker builds
- ✅ Automatic image tagging with commit SHA and latest

## 🌐 API Endpoints

### Base URL
- Development: `http://localhost:8080`
- Production: `https://your-domain.com`

### Available Endpoints
- `GET /` - Health check and welcome message

## 🔒 Security Features

- **Docker Security**: Non-root user in production containers
- **Environment Variables**: Secure configuration management
- **CORS**: Configured for cross-origin requests
- **Input Validation**: Express.js middleware for request validation

## 📝 Development Guidelines

### Code Style
- Use ESLint for JavaScript/TypeScript linting
- Follow Next.js best practices for frontend development
- Use Express.js middleware patterns for backend development

### Git Workflow
- Use conventional commit messages
- Create feature branches for new development
- All changes are automatically tested via GitHub Actions

### Environment Variables
Create `.env` files in respective directories:
- `client/.env.local` - Frontend environment variables
- `server/.env` - Backend environment variables

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Muhammad Kamran**
- GitHub: [@your-username](https://github.com/your-username)

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/your-username/your-repo/issues) page
2. Create a new issue with detailed information
3. Include steps to reproduce any bugs

---

**Happy Coding! 🚀**