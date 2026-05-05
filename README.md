# Witup Academy - Frontend Application

โปรเจกต์ Frontend สำหรับ Witup Academy - แพลตฟอร์มการเรียนรู้ออนไลน์

## 🚀 Tech Stack

- **React 18** - UI Library
- **TypeScript** - Type Safety
- **Vite** - Build Tool & Dev Server
- **React Router v6** - Routing
- **ESLint** - Code Linting

## 📁 Project Structure

```
webapp-witup-academy/
├── public/                 # Static assets
│   └── vite.svg
├── src/
│   ├── assets/            # Images, fonts, etc.
│   ├── components/        # React components
│   │   ├── common/       # Reusable components (Button, Input, etc.)
│   │   └── layout/       # Layout components (Navbar, Footer, Sidebar)
│   ├── pages/            # Page components (Home, About, etc.)
│   ├── hooks/            # Custom React hooks
│   │   ├── useLocalStorage.ts
│   │   ├── useDebounce.ts
│   │   └── index.ts
│   ├── services/         # API services
│   │   └── api.ts
│   ├── utils/            # Utility functions
│   │   ├── formatters.ts  # Format currency, dates, etc.
│   │   ├── validators.ts  # Validation functions
│   │   └── index.ts
│   ├── types/            # TypeScript type definitions
│   │   └── index.ts
│   ├── constants/        # Application constants
│   │   └── index.ts
│   ├── styles/           # Global styles
│   │   └── index.css
│   ├── App.tsx           # Main App component
│   ├── main.tsx          # Entry point
│   └── vite-env.d.ts     # Vite type declarations
├── .env.example          # Environment variables example
├── .gitignore
├── eslint.config.js      # ESLint configuration
├── index.html            # HTML template
├── package.json
├── tsconfig.json         # TypeScript configuration
├── tsconfig.node.json
└── vite.config.ts        # Vite configuration

```

## 🛠️ Getting Started

### Prerequisites

- Node.js >= 20.19.0 หรือ >= 22.12.0
- npm >= 11.0.0

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd webapp-witup-academy
```

2. Install dependencies
```bash
npm install
```

3. Create environment file
```bash
cp .env.example .env
```

4. Start development server
```bash
npm run dev
```

แอปพลิเคชันจะเปิดที่ [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Features

- ✅ TypeScript สำหรับ Type Safety
- ✅ React Router สำหรับการจัดการ Routing
- ✅ Modern UI/UX ด้วย CSS
- ✅ Responsive Design
- ✅ Dark/Light Mode Support
- ✅ Path Aliases (`@/` สำหรับ `src/`)
- ✅ Custom Hooks สำหรับการใช้งานซ้ำ
- ✅ Utility Functions สำหรับ Formatting และ Validation
- ✅ API Client Service
- ✅ TypeScript Type Definitions

## 🔧 Configuration

### Path Aliases

โปรเจกต์ใช้ path alias `@/` สำหรับ `src/` directory

```typescript
import Button from '@/components/common/Button'
import { formatCurrency } from '@/utils'
import { User } from '@/types'
```

### Environment Variables

สร้างไฟล์ `.env` โดยคัดลอกจาก `.env.example`

```env
VITE_API_BASE_URL=http://localhost:3001/api
VITE_APP_NAME=Witup Academy
VITE_APP_VERSION=0.1.0
```

## 📚 Code Organization

### Components
- `components/common/` - Components ที่ใช้ซ้ำได้ทั่วทั้งแอพ
- `components/layout/` - Layout components เช่น Navbar, Footer

### Pages
แต่ละหน้าของแอพอยู่ใน `pages/` directory

### Hooks
Custom React hooks อยู่ใน `hooks/` directory:
- `useLocalStorage` - จัดการ state ใน localStorage
- `useDebounce` - Debounce values

### Utils
Utility functions อยู่ใน `utils/` directory:
- `formatters.ts` - Format currency, dates, duration, etc.
- `validators.ts` - Validate email, phone, password, etc.

### Services
API client และ services อยู่ใน `services/` directory

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License
