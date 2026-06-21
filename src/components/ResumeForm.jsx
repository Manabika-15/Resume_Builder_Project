export default function ResumeForm({ resume, setResume, setGenerated }) {
  const handlePersonalInfo = (e) => {
    setResume({
      ...resume,
      personalInfo: {
        ...resume.personalInfo,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleSkills = (e) => {
    setResume({
      ...resume,
      skills: {
        ...resume.skills,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleEducation = (e) => {
    const updatedEducation = [...resume.education];

    updatedEducation[0][e.target.name] = e.target.value;

    setResume({
      ...resume,
      education: updatedEducation,
    });
  };

  const handleExperience = (e) => {
    const updatedExperience = [...resume.experience];

    updatedExperience[0][e.target.name] = e.target.value;

    setResume({
      ...resume,
      experience: updatedExperience,
    });
  };

  const handleProject = (e) => {
    const updatedProjects = [...resume.projects];

    updatedProjects[0][e.target.name] = e.target.value;

    setResume({
      ...resume,
      projects: updatedProjects,
    });
  };

  const handleAchievement = (e) => {
    setResume({
      ...resume,
      achievements: [e.target.value],
    });
  };

  return (
    <div
      className="
  max-w-4xl
  mx-auto
  bg-white
  rounded-3xl
  shadow-2xl
  p-8
  "
    >
      <h2
        className="text-2xl
  font-bold
  text-indigo-700
  mb-5
  mt-8"
      >
        Personal Information
      </h2>

      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={resume.personalInfo.name}
        onChange={handlePersonalInfo}
        className="
w-full
border
border-gray-300
rounded-xl
p-3
mb-4
focus:outline-none
focus:ring-2
focus:ring-indigo-500
"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={resume.personalInfo.email}
        onChange={handlePersonalInfo}
        className="
w-full
border
border-gray-300
rounded-xl
p-3
mb-4
focus:outline-none
focus:ring-2
focus:ring-indigo-500
"
      />

      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={resume.personalInfo.phone}
        onChange={handlePersonalInfo}
        className="
w-full
border
border-gray-300
rounded-xl
p-3
mb-4
focus:outline-none
focus:ring-2
focus:ring-indigo-500
"
      />

      <input
        type="text"
        name="linkedin"
        placeholder="LinkedIn"
        value={resume.personalInfo.linkedin}
        onChange={handlePersonalInfo}
        className="
w-full
border
border-gray-300
rounded-xl
p-3
mb-4
focus:outline-none
focus:ring-2
focus:ring-indigo-500
"
      />

      <input
        type="text"
        name="github"
        placeholder="GitHub"
        value={resume.personalInfo.github}
        onChange={handlePersonalInfo}
        className="
w-full
border
border-gray-300
rounded-xl
p-3
mb-6
focus:outline-none
focus:ring-2
focus:ring-indigo-500
"
      />

      <h2
        className="text-2xl
  font-bold
  text-indigo-700
  mb-5
  mt-8"
      >
        Education
      </h2>

      <input
        type="text"
        name="college"
        placeholder="College"
        value={resume.education[0].college}
        onChange={handleEducation}
        className="
w-full
border
border-gray-300
rounded-xl
p-3
mb-4
focus:outline-none
focus:ring-2
focus:ring-indigo-500
"
      />

      <input
        type="text"
        name="degree"
        placeholder="Degree"
        value={resume.education[0].degree}
        onChange={handleEducation}
        className="
w-full
border
border-gray-300
rounded-xl
p-3
mb-4
focus:outline-none
focus:ring-2
focus:ring-indigo-500
"
      />

      <input
        type="text"
        name="cgpa"
        placeholder="CGPA"
        value={resume.education[0].cgpa}
        onChange={handleEducation}
        className="
w-full
border
border-gray-300
rounded-xl
p-3
mb-4
focus:outline-none
focus:ring-2
focus:ring-indigo-500
"
      />

      <input
        type="text"
        name="year"
        placeholder="Graduation Year"
        value={resume.education[0].year}
        onChange={handleEducation}
        className="
w-full
border
border-gray-300
rounded-xl
p-3
mb-6
focus:outline-none
focus:ring-2
focus:ring-indigo-500
"
      />

      <h2
        className="text-2xl
  font-bold
  text-indigo-700
  mb-5
  mt-8"
      >
        Skills
      </h2>

      <input
        type="text"
        name="languages"
        placeholder="Languages"
        value={resume.skills.languages}
        onChange={handleSkills}
        className="
w-full
border
border-gray-300
rounded-xl
p-3
mb-4
focus:outline-none
focus:ring-2
focus:ring-indigo-500
"
      />

      <input
        type="text"
        name="frameworks"
        placeholder="Frameworks"
        value={resume.skills.frameworks}
        onChange={handleSkills}
        className="
w-full
border
border-gray-300
rounded-xl
p-3
mb-4
focus:outline-none
focus:ring-2
focus:ring-indigo-500
"
      />

      <input
        type="text"
        name="tools"
        placeholder="Tools"
        value={resume.skills.tools}
        onChange={handleSkills}
        className="
w-full
border
border-gray-300
rounded-xl
p-3
mb-4
focus:outline-none
focus:ring-2
focus:ring-indigo-500
"
      />

      <input
        type="text"
        name="databases"
        placeholder="Databases"
        value={resume.skills.databases}
        onChange={handleSkills}
        className="
w-full
border
border-gray-300
rounded-xl
p-3
mb-6
focus:outline-none
focus:ring-2
focus:ring-indigo-500
"
      />

      <h2
        className="text-2xl
  font-bold
  text-indigo-700
  mb-5
  mt-8"
      >
        Project
      </h2>

      <input
        type="text"
        name="title"
        placeholder="Project Title"
        value={resume.projects[0].title}
        onChange={handleProject}
        className="
w-full
border
border-gray-300
rounded-xl
p-3
mb-4
focus:outline-none
focus:ring-2
focus:ring-indigo-500
"
      />

      <input
        type="text"
        name="techStack"
        placeholder="Tech Stack"
        value={resume.projects[0].techStack}
        onChange={handleProject}
        className="
w-full
border
border-gray-300
rounded-xl
p-3
mb-4
focus:outline-none
focus:ring-2
focus:ring-indigo-500
"
      />

      <textarea
        name="description"
        placeholder="Project Description"
        value={resume.projects[0].description}
        onChange={handleProject}
        className="
w-full
border
border-gray-300
rounded-xl
p-3
mb-6
focus:outline-none
focus:ring-2
focus:ring-indigo-500
"
      />

      <h2
        className="text-2xl
  font-bold
  text-indigo-700
  mb-5
  mt-8"
      >
        Experience
      </h2>

      <input
        type="text"
        name="company"
        placeholder="Company"
        value={resume.experience[0].company}
        onChange={handleExperience}
        className="
w-full
border
border-gray-300
rounded-xl
p-3
mb-4
focus:outline-none
focus:ring-2
focus:ring-indigo-500
"
      />

      <input
        type="text"
        name="role"
        placeholder="Role"
        value={resume.experience[0].role}
        onChange={handleExperience}
        className="
w-full
border
border-gray-300
rounded-xl
p-3
mb-4
focus:outline-none
focus:ring-2
focus:ring-indigo-500
"
      />

      <textarea
        name="description"
        placeholder="Experience Description"
        value={resume.experience[0].description}
        onChange={handleExperience}
        className="
w-full
border
border-gray-300
rounded-xl
p-3
mb-6
focus:outline-none
focus:ring-2
focus:ring-indigo-500
"
      />

      <h2
        className="text-2xl
  font-bold
  text-indigo-700
  mb-5
  mt-8"
      >
        Achievements
      </h2>

      <textarea
        placeholder="Achievements"
        value={resume.achievements[0]}
        onChange={handleAchievement}
        className="
w-full
border
border-gray-300
rounded-xl
p-3
mb-6
focus:outline-none
focus:ring-2
focus:ring-indigo-500
"
      />

      <button
  onClick={() => setGenerated(true)}
  className="
  w-full
  bg-indigo-600
  hover:bg-indigo-700
  text-white
  font-semibold
  py-4
  rounded-xl
  shadow-lg
  transition
  mt-8
  "
>
  Generate Resume 
</button>
    </div>
  );
}
