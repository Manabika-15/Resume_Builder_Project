import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function ResumePreview({
  resume,
  setGenerated,
}) {

  const downloadPDF = async () => {
    try {

      const input =
        document.getElementById(
          "resume-preview"
        );

      if (!input) {
        alert("Resume not found");
        return;
      }

      const canvas =
        await html2canvas(input, {
          backgroundColor: "#ffffff",
          scale: 2,
        });

      const imgData =
        canvas.toDataURL("image/png");

      const pdf =
        new jsPDF("p", "mm", "a4");

      const pdfWidth =
        pdf.internal.pageSize.getWidth();

      const pdfHeight =
        (canvas.height * pdfWidth) /
        canvas.width;

      pdf.addImage(
        imgData,
        "PNG",
        0,
        0,
        pdfWidth,
        pdfHeight
      );

      pdf.save("resume.pdf");

    } catch (error) {
      console.error(error);
      alert(
        "Error generating PDF. Check console."
      );
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6">

      <div className="flex gap-4 mb-6">

        <button
          onClick={() =>
            setGenerated(false)
          }
          className="
          bg-gray-500
          hover:bg-gray-600
          text-white
          px-4
          py-2
          rounded-lg
          "
        >
          Edit Resume
        </button>

        <button
          onClick={downloadPDF}
          className="
          bg-green-600
          hover:bg-green-700
          text-white
          px-4
          py-2
          rounded-lg
          "
        >
          Download PDF
        </button>

      </div>

      {/* Resume */}

      <div
        id="resume-preview"
        className="
        bg-white
        border
        max-w-4xl
        mx-auto
        p-10
        "
      >

        <div className="text-center border-b pb-6">

          <h1
            className="
            text-4xl
            font-bold
            uppercase
            "
          >
            {resume.personalInfo.name ||
              "Your Name"}
          </h1>

          <p className="mt-2">
            {resume.personalInfo.email}
          </p>

          <p>
            {resume.personalInfo.phone}
          </p>

          <p>
            {resume.personalInfo.linkedin}
          </p>

          <p>
            {resume.personalInfo.github}
          </p>

        </div>

        <section className="mt-6">

          <h2
            className="
            text-lg
            font-bold
            uppercase
            border-b
            pb-1
            "
          >
            Education
          </h2>

          {resume.education.map(
            (edu, index) => (
              <div
                key={index}
                className="mt-2"
              >
                <h3 className="font-semibold">
                  {edu.college}
                </h3>

                <p>{edu.degree}</p>

                <p>
                  CGPA: {edu.cgpa}
                </p>

                <p>{edu.year}</p>
              </div>
            )
          )}

        </section>

        <section className="mt-6">

          <h2
            className="
            text-lg
            font-bold
            uppercase
            border-b
            pb-1
            "
          >
            Skills
          </h2>

          <p>
            <strong>
              Languages:
            </strong>{" "}
            {resume.skills.languages}
          </p>

          <p>
            <strong>
              Frameworks:
            </strong>{" "}
            {resume.skills.frameworks}
          </p>

          <p>
            <strong>
              Tools:
            </strong>{" "}
            {resume.skills.tools}
          </p>

          <p>
            <strong>
              Databases:
            </strong>{" "}
            {resume.skills.databases}
          </p>

        </section>

        <section className="mt-6">

          <h2
            className="
            text-lg
            font-bold
            uppercase
            border-b
            pb-1
            "
          >
            Projects
          </h2>

          {resume.projects.map(
            (project, index) => (
              <div
                key={index}
                className="mt-2"
              >
                <h3 className="font-semibold">
                  {project.title}
                </h3>

                <p>
                  <strong>
                    Tech Stack:
                  </strong>{" "}
                  {project.techStack}
                </p>

                <p>
                  {project.description}
                </p>
              </div>
            )
          )}

        </section>

        <section className="mt-6">

          <h2
            className="
            text-lg
            font-bold
            uppercase
            border-b
            pb-1
            "
          >
            Experience
          </h2>

          {resume.experience.map(
            (exp, index) => (
              <div
                key={index}
                className="mt-2"
              >
                <h3 className="font-semibold">
                  {exp.company}
                </h3>

                <p>{exp.role}</p>

                <p>
                  {exp.duration}
                </p>

                <p>
                  {exp.description}
                </p>
              </div>
            )
          )}

        </section>

        <section className="mt-6">

          <h2
            className="
            text-lg
            font-bold
            uppercase
            border-b
            pb-1
            "
          >
            Achievements
          </h2>

          <ul className="list-disc pl-6">

            {resume.achievements.map(
              (
                achievement,
                index
              ) => (
                <li key={index}>
                  {achievement}
                </li>
              )
            )}

          </ul>

        </section>

      </div>

    </div>
  );
}