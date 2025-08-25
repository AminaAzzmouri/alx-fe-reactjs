import { useState } from "react";
import RegistrationForm from "./components/RegistrationForm.jsx";
import FormikForm from "./components/formikForm.jsx";


export default function App() {
  const [mode, setMode] = useState("controlled");

  return (
    <div className="app">
      <h1>React Form Handling — Controlled vs Formik</h1>

      <div className="tabs">
        <button
          className={mode === "controlled" ? "active" : ""}
          onClick={() => setMode("controlled")}
        >
          Controlled
        </button>
        <button
          className={mode === "formik" ? "active" : ""}
          onClick={() => setMode("formik")}
        >
          Formik + Yup
        </button>
      </div>

      {mode === "controlled" ? <RegistrationForm /> : <FormikForm />}

      <footer className="note">
        <p>
          Both forms submit to the same in‑app mock API and show identical
          behavior. Toggle tabs to compare approaches.
        </p>
      </footer>
    </div>
  );
}