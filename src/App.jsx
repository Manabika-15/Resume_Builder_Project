import { useState } from "react";
import { defaultResume } from "./data/defaultResume";
import Navbar from "./components/Navbar";
import ResumeForm from "./components/ResumeForm";
import ResumePreview from "./components/ResumePreview";
import Footer from "./components/Footer"

function App() {
  const [resume, setResume] = useState(defaultResume);
  const [generated, setGenerated] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-blue-100">
      
      <Navbar />

      <div className="max-w-7xl mx-auto p-6">

        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold text-indigo-700">
            Resume Builder
          </h1>
        </div>

        {!generated ? (
          <ResumeForm
            resume={resume}
            setResume={setResume}
            setGenerated={setGenerated}
          />
        ) : (
          <>
            <ResumePreview
              resume={resume}
              setGenerated={setGenerated}
            />
          </>
        )}

      </div>
      <Footer />
    </div>
  );
}

export default App;