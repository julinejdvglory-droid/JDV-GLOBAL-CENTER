# JDV GLOBAL CENTER - Architecture Documentation

## 🏗️ Flux Hiérarchique

```
1. AUTH SERVICE
   ↓
2. COMPTE UNIQUE
   ↓
3. KYC SERVICE
   ↓
4. HOME GLOBAL
   ↓
5. SERVICES TRANSVERSAUX (SEARCH, MAP, MESSAGE, NOTIFICATION)
   ↓
6. JDV PAY / WALLET
   ↓
7. JDV AI
   ↓
8. 17 PÔLES MÉTIERS
   ↓
9. BRANCHES MÉTIERS
   ↓
10. ADMIN & SUPER ADMIN
```

## 📦 Packages Organization

### Layer 1: Authentication & Core
- **01-auth**: JWT, OTP, Biometric, Security
- **02-account**: User profiles, preferences
- **03-kyc**: Document verification, KYC flow

### Layer 2: Central Hub
- **04-home**: Dashboard, widgets, recommendations
- **05-core-services**: Search, Map, Message, Notification

### Layer 3: Payment & AI
- **06-pay**: Wallet, transactions, payment gateway
- **07-ai**: NLP, recommendations, context awareness

### Layer 4: Business Domains (17 Poles)
- **08-poles**: All business modules

### Layer 5: UI & Infrastructure
- **09-frontend**: React Web Application
- **10-mobile**: React Native Mobile
- **11-design-system**: Shared components
- **12-backend**: Central NestJS API
- **13-shared**: Common types & utilities

## 🔌 Communication Pattern

```
Frontend/Mobile
    ↓
Backend API (NestJS)
    ↓
Service Layer (Auth, Pay, AI, etc.)
    ↓
Event Bus (RabbitMQ/Kafka)
    ↓
Database (PostgreSQL)
```

## 🗂️ Pole Structure

Each pole contains:
- Controllers
- Services
- DTOs
- Entities
- Repositories

Example: `08-poles/01-finance/jdv-pay/`

## 🔐 Security Layer

- JWT Authentication
- Role-Based Access Control (RBAC)
- KYC Verification
- OTP & Biometric
- API Rate Limiting
- Request Validation

## 💾 Database

- PostgreSQL for relational data
- Redis for caching
- Elasticsearch for search indexing

## 🚀 Deployment

- Docker containers
- Kubernetes orchestration
- GitHub Actions CI/CD
- Environment-based configuration

