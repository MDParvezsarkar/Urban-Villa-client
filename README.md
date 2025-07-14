# 🏢 UrbanVilla - Building Management System

A full-stack web application to manage a single building system with **Admin**, **Member**, and **User** roles.

---

## 🔗 Live Links

- 🌐 **Live Site**: [https://urban-villlage-c50c6.web.app](https://urban-villlage-c50c6.web.app)
- 🔧 **Server**: [https://b11a12-server-side-mdp-arvezsarkar.vercel.app](https://b11a12-server-side-mdp-arvezsarkar.vercel.app)
- 📦 **Client Repo**: [Client GitHub](https://github.com/Programming-Hero-Web-Course4/b11a12-client-side-MDParvezsarkar)
- ⚙️ **Server Repo**: [Server GitHub](https://github.com/Programming-Hero-Web-Course4/b11a12-server-side-MDParvezsarkar)

---



## ✨ Key Features

### 🏠 Public
- Stylish home page with banner, map location & building info
- View all apartments (with rent range filter + pagination)
- Apply for agreement (user must be logged in)

### 🔐 Authentication
- Firebase Auth (Email/Password + Google)
- Role-based protected routes
- Secure `.env` for Firebase config (client) & MongoDB (server)

### 👤 User Dashboard
- Profile info (Name, Email, Role)
- View announcements

### 🏢 Member Dashboard
- View profile with apartment agreement info
- Make payment (Stripe integration)
- Apply coupon for rent discount
- Select month for rent
- View payment history
- Announcements

### 🛠️ Admin Dashboard
- View admin profile with system stats
- Manage members (change role)
- Make public announcements
- Handle agreement requests (accept/reject)
- Manage coupons (add/edit/toggle availability)

---

## 💡 Challenge Features (Implemented)
- ✅ Admin dashboard stats (total rooms, users, etc.)
- ✅ Toggle coupon availability
- ✅ Due rent notice system with warning count

---

## 🔧 Technologies Used

- React.js + Vite
- Firebase Auth
- Express.js + MongoDB
- Stripe (Payment)
- Tailwind CSS + DaisyUI
- TanStack React Query
- Axios (with interceptor)
- React Router DOM
- JWT Middleware (via Firebase Admin SDK)
- Environment variables using dotenv
- Deployment: Firebase (client) + Vercel (server)

---

## 📦 NPM Packages

```bash
react-router-dom  
@stripe/react-stripe-js  
@stripe/stripe-js  
firebase  
axios  
@tanstack/react-query  
react-hot-toast  
react-icons  
cors  
dotenv  
express  
mongoose  
