# 📌 To-Do Web App

A simple **To-Do List Web App** that allows users to **add, edit, delete, and mark tasks as complete**, while ensuring data is **saved locally** in the browser for persistence even after a page refresh.

## 🚀 Features
✅ Add new todos to the list
✅ Edit existing todos
✅ Mark todos as completed (with a strikethrough effect)
✅ Delete todos when no longer needed
✅ Data is stored using **localStorage**, so todos remain even after reloading the page
✅ Fully responsive design with **Tailwind CSS**

## 🛠️ Technologies Used
- **React.js** - For UI components
- **Tailwind CSS** - For styling
- **localStorage API** - For saving and persisting todos

## 📂 Folder Structure
```
📦 todo-webapp
 ┣ 📂 public
 ┃ ┗ 📜 index.html (Root HTML file)
 ┣ 📂 src
 ┃ ┣ 📂 components
 ┃ ┃ ┗ 📜 TodoList.jsx (Manages todo items)
 ┃ ┃ ┗ 📜 Navbar.jsx (Navigation bar)
 ┃ ┗ 📜 App.jsx (Main application logic)
 ┣ 📜 package.json (Project dependencies)
 ┣ 📜 tailwind.config.js (Tailwind configuration)
 ┣ 📜 README.md (You're here!)
┗ 📜 .gitignore (Ignored files)
```

## 📌 Installation & Setup
1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/todo-webapp.git
   cd todo-webapp
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Run the development server**
   ```bash
   npm run dev
   ```
4. **Open the app** in your browser at `http://localhost:5173/`

## 📸 Preview
![Todo App Preview](https://via.placeholder.com/800x400.png?text=Todo+App+Preview)

## 🚀 How It Works
1. **Add a Todo** - Type in a task and click "Add"
2. **Edit a Todo** - Click the "Edit" button to modify an existing task
3. **Mark as Complete** - Click the checkbox to mark a todo as complete
4. **Delete a Todo** - Click the "Delete" button to remove a task
5. **Persistence** - Todos are saved in `localStorage`, so they remain even after refreshing the page

## 🛠 Future Improvements
- ✅ Dark mode support
- ✅ Drag & drop todo reordering
- ✅ Sync with a backend API for cross-device access

## 🎯 Contributing
Feel free to fork this repository, create new features, and submit a pull request! 🙌

## 📝 License
This project is **open-source** and free to use under the **MIT License**.

---
💡 **Built with ❤️ using React and Tailwind CSS**


