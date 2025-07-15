🏢 UrbanVilla - Building Management System
A full-stack web application to manage a single building system with Admin, Member, and User roles.

🔗 Live Links
🌐 Live Site: [urban-villlage.web.app](https://urban-villlage-c50c6.web.app)

⚙️ Server: [https://b11a12-server-side-mdp-arvezsarkar.vercel.app](https://b11a12-server-side-mdp-arvezsarkar.vercel.app)

📦 Client Repo: [Client GitHub](https://github.com/Programming-Hero-Web-Course4/b11a12-client-side-MDParvezsarkar)

🔧 Server Repo: [Server GitHub](https://github.com/Programming-Hero-Web-Course4/b11a12-server-side-MDParvezsarkar)

✨ Key Features
🏠 Public
Interactive landing page with animated banner, Google map, and key facilities

View available apartments (with filter & pagination)

Apply for apartment agreement (login required)

🔐 Authentication
Firebase (Email/Password + Google login)

Role-based access with protected routes

Secure token verification using Firebase Admin SDK

👤 User Dashboard
View profile with name, email, and role

See latest announcements

🏢 Member Dashboard
View rental agreement (floor, block, room, etc.)

Make rent payment using Stripe

Apply coupon codes for discounts

Choose rent month

View payment history

Access all public announcements

🛠️ Admin Dashboard
View detailed admin profile with building stats:

Total apartments

Members vs users

Available room percentage

Manage members (role change, demotion after 3 missed rents)

Make public announcements (auto & manual)

Handle agreement requests (accept/reject)

Manage coupons (add, edit, toggle availability)

💡 Challenge Features Implemented
✅ Admin dashboard stats

✅ Coupon availability toggle

✅ Due rent notice system

Sends monthly warnings to members who didn't pay

After 3 missed rents, role auto-downgrades to user

Announcement auto-posted with demotion reason

Deleted apartment agreement for freed-up apartment

Toast alert for demoted user on next login



🔧 Technologies Used
React.js + Vite

Firebase Auth (client) + Firebase Admin SDK (server)

Express.js + MongoDB

Stripe (payment)

Tailwind CSS + DaisyUI

TanStack React Query

Axios (with interceptors)

React Router DOM

JWT Middleware via Firebase

Environment Variables (.env)

Deployment:

Firebase (Client)

Vercel (Server)

📦 NPM Packages
bash
Copy
Edit
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
