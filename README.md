# 📝 Notes Application

A full-stack **Notes App** built with the **MERN stack + TypeScript**.  
The frontend uses **React + TanStack Query + TanStack Router**, while the backend is powered by **Express, MongoDB, and TypeScript**.

---

## 🚀 Features
- User authentication with OTP & JWT  
- Secure cookie-based sessions  
- Create, read, update, and delete notes  
- Responsive UI with **TanStack Router** navigation  
- **TanStack Query** for server state management  

---

## 📦 Tech Stack
- **Frontend**: React, TypeScript, Vite, TanStack Router, TanStack Query  
- **Backend**: Express, TypeScript, MongoDB, Mongoose, JWT, Nodemailer  
- **Database**: MongoDB  
- **State Management**: TanStack Query  

---

## 🛠️ Prerequisites
Make sure you have installed:
- [Node.js](https://nodejs.org/) (>= 18)  
- [MongoDB](https://www.mongodb.com/) running locally or via Atlas  

---

## ⚙️ Environment Variables

### Backend (`.env`)
```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/notes-app
JWT_SECRET=your_jwt_secret
NODE_ENV=development

# Email (for OTP)

EMAIL_USER=your_email@example.com
EMAIL_PASS=your_password

```

### Frontend (`.env`)
```env
VITE_API_URL=http://localhost:3000

```
## 🔧 Installation & Setup

### 1️⃣ Clone the repo
```bash
git clone https://github.com/sahilmalik0786/Assignment.git
cd Assignment
```

### 2️⃣ Backend Setup
``` bash 
cd backend
npm install
npm run dev   # starts server in dev mode with tsx
npm run build # build TypeScript -> dist
npm start     # runs compiled server
```

### 3️⃣ Frontend Setup
``` bash
cd frontend
npm install
npm run dev      # start Vite dev server
npm run build    # build production files
npm run preview  # preview production build
```
## 🚀 Running the App

- **Backend** runs on: [http://localhost:3000](http://localhost:3000)  
- **Frontend** runs on: [http://localhost:5173](http://localhost:5173) *(default Vite port)*  

⚡ Make sure both servers are running simultaneously.

## 🚀 Deployment

You can deploy the application using platforms like **Render**, **Vercel**, or **Netlify**.

### Backend (Node/Express(TypeScript) + MongoDB)
1. Push your code to GitHub.
2. Create a new project on [Render](https://render.com) (or any Node hosting platform).
3. Set the **Build Command**:  
   ```bash
   npm install && npm run build
4. Set the Start Command:
   ```bash 
   npm start
5. Add all required environment variables under the "Environment" settings.

6. Connect your app to a MongoDB Atlas database.

### Frontend (React + Vite + TypeScript)

1. Push your code to **GitHub**.
2. Deploy on **[Vercel](https://vercel.com)** or **[Netlify](https://www.netlify.com)**.
3. During setup:
   - **Build Command**:  
     ```bash
     npm run build
     ```
   - **Output Directory**:  
     ```
     dist
     ```
4. Add required **environment variables** (e.g., `VITE_API_URL`) pointing to your backend.

---

#### ⚠️ Important Notes
- Ensure the **Frontend API base URL** points to your deployed backend (not `localhost`).  
- If using cookies for authentication, make sure:
  - Backend uses `secure: true` and proper **CORS** configuration.  
  - Frontend and backend are both served over **HTTPS** in production.  

---

## 🎯 Final Notes

- This project is built with the **MERN stack + TypeScript**, leveraging **TanStack Query** for state and server management.  
- Remember to always keep your **environment variables** secure and never commit them to version control.  
- Contributions, issues, and feature requests are welcome!  

---



## 📜 License

This project is licensed under the **MIT License** – feel free to use it for your own projects.  

---

### 🙌 Acknowledgements
- [React](https://reactjs.org/)  
- [Express](https://expressjs.com/)  
- [MongoDB](https://www.mongodb.com/)  
- [TanStack Query](https://tanstack.com/query)  
- [TypeScript](https://www.typescriptlang.org/)  

---

Made with ❤️ using MERN + TypeScript
