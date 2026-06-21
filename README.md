# Resume Builder

A modern and user-friendly Resume Builder application that helps users create professional, ATS-friendly resumes with real-time preview and PDF download functionality.

## 🚀 Features

- 📝 Create resumes through an intuitive form interface
- ⚡ Real-time resume preview while editing
- 👤 Personal Information section
- 🎓 Education details management
- 💼 Work Experience section
- 🛠️ Skills management
- 📂 Projects section
- 📄 ATS-friendly resume layout
- 📥 Export and download resume as PDF
- 📱 Responsive design for desktop and mobile devices

---

## 🛠️ Tech Stack

### Frontend
- React.js
- JavaScript (ES6+)
- HTML5
- CSS3

### Libraries & Tools
- jsPDF – PDF generation
- html2canvas – Convert resume preview into downloadable PDF
- React Hooks (useState, useEffect)
- Vite (Build Tool)

---

## ⚙️ How It Works

### 1. User Input
Users enter their information through structured forms including:
- Personal Details
- Education
- Skills
- Projects
- Experience

### 2. Real-Time Preview
As users fill out the forms, the resume preview updates instantly using React state management.

### 3. Resume Generation
All user data is dynamically rendered into a professional resume template.

### 4. PDF Export
The application captures the resume preview using `html2canvas` and generates a downloadable PDF using `jsPDF`.

---

## 📂 Project Structure

```bash
src/
├── components/
│   ├── ResumeForm.jsx
│   ├── ResumePreview.jsx
│   └── ...
├── App.jsx
├── main.jsx
└── styles/
```

---

## 🎯 Key Learning Outcomes

- Component-based architecture using React
- State management with React Hooks
- Dynamic rendering and form handling
- PDF generation in web applications
- Responsive UI design
- Client-side data processing

---

## 🔮 Future Improvements

- Multiple resume templates
- Dark mode support
- Resume import/export functionality
- Local storage persistence
- ATS Score implementation

### Author

Developed by: Manabika Das
Email: dasmanabika.06@gmail.com
