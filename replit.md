# Open Lovable

## Overview

Open Lovable is an AI-powered React application builder that allows users to chat with AI to generate and modify React applications instantly. The platform enables users to either scrape existing websites and reimagine them or build applications from scratch using natural language prompts. The application features real-time code generation, live preview capabilities, and intelligent file management with support for multiple AI providers and sandbox environments.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: Next.js 14 with App Router and TypeScript
- **Styling**: Tailwind CSS with custom Fire Design System inspired by Firecrawl branding
- **State Management**: Jotai for atomic state management, React hooks for local state
- **UI Components**: Custom component library built on Radix UI primitives with shadcn/ui patterns
- **Animation**: Framer Motion for smooth transitions and interactive effects
- **Real-time Updates**: Server-Sent Events for streaming AI responses and sandbox feedback

### Backend Architecture
- **API Routes**: Next.js API routes handling AI interactions, sandbox management, and file operations
- **AI Integration**: Multi-provider AI support (OpenAI, Anthropic, Google Gemini, Groq) with intelligent model selection
- **Streaming**: Real-time streaming of AI responses with XML-based package detection and command execution
- **Error Handling**: Comprehensive error boundaries and graceful fallbacks for sandbox operations

### Sandbox Architecture
- **Multi-Provider Support**: Pluggable sandbox architecture supporting both E2B and Vercel Sandbox providers
- **Factory Pattern**: SandboxFactory for creating appropriate provider instances based on configuration
- **Real-time Code Execution**: Live preview capabilities with automatic package installation and hot reloading
- **File Management**: Intelligent file tracking and synchronization between sandbox and UI

### Code Generation & Management
- **XML-Based Parsing**: Custom parser for extracting files, packages, and commands from AI responses
- **Intelligent File Updates**: Context-aware file modification that preserves existing functionality while applying targeted changes
- **Package Detection**: Automatic dependency detection from import statements and XML tags
- **Command Execution**: Support for running build commands and custom scripts in sandbox environments

### Conversation Context
- **Edit Intent Analysis**: Advanced prompt analysis to determine whether users want targeted updates or complete rebuilds
- **File Manifest Tracking**: Maintains detailed understanding of project structure and component relationships
- **Context Selection**: Smart file selection for providing relevant context to AI without overwhelming token limits

## External Dependencies

### AI Providers
- **OpenAI**: GPT models for code generation and conversation
- **Anthropic**: Claude models for advanced reasoning and code analysis
- **Google Gemini**: Google's AI models for diverse capability coverage
- **Groq**: High-speed inference for real-time interactions

### Sandbox Providers
- **E2B**: Cloud-based code execution environment for running React applications
- **Vercel Sandbox**: Vercel's sandbox API for deployment and preview generation
- **Configuration**: Environment-based provider selection with fallback mechanisms

### Web Scraping & Content
- **Firecrawl**: Web scraping service for extracting website content and converting to markdown
- **Content Processing**: Intelligent extraction of website structure and styling information for reimagination

### UI & Styling
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **Radix UI**: Accessible component primitives for complex UI elements
- **React Syntax Highlighter**: Code highlighting with Prism.js integration
- **Lucide React**: Icon library for consistent iconography

### Development Tools
- **TypeScript**: Type safety and improved developer experience
- **ESLint**: Code quality and consistency enforcement
- **Turbopack**: Fast build system for development (Next.js 14)
- **Framer Motion**: Animation library for smooth user interactions