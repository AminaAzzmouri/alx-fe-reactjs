import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { registerUser } from "../lib/api";

const schema = Yup.object({
  username: Yup.string().required("Username is required").trim().min(2, "Too short"),
  email: Yup.string().required("Email is required").email("Invalid email"),
  password: Yup.string().required("Password is required").min(8, "Min 8 characters"),
});

export default function FormikForm() {
  return (
    <div className="card">
      <h2>Formik + Yup Registration Form</h2>

      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={schema}
        onSubmit={async (values, { setSubmitting, resetForm, setStatus }) => {
          setStatus(undefined);
          try {
            const res = await registerUser(values);
            setStatus({ ok: true, message: `Registered as ${res.username}` });
            resetForm();
          } catch (err) {
            setStatus({ ok: false, message: err?.message || "Registration failed" });
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ values, isSubmitting, status, handleChange }) => {
          const { username, email, password } = values;
          return (
            <Form noValidate>
              <div className="row">
                <label htmlFor="username">Username</label>
                <Field name="username">
                  {({ field }) => (
                    <input
                      id="username"
                      type="text"
                      {...field}
                      value={username}
                      onChange={handleChange}
                      placeholder="e.g. amina"
                    />
                  )}
                </Field>
                <ErrorMessage name="username" component="span" className="error" />
              </div>

              <div className="row">
                <label htmlFor="email">Email</label>
                <Field name="email">
                  {({ field }) => (
                    <input
                      id="email"
                      type="email"
                      {...field}
                      value={email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                    />
                  )}
                </Field>
                <ErrorMessage name="email" component="span" className="error" />
              </div>

              <div className="row">
                <label htmlFor="password">Password</label>
                <Field name="password">
                  {({ field }) => (
                    <input
                      id="password"
                      type="password"
                      {...field}
                      value={password}
                      onChange={handleChange}
                      placeholder="••••••••"
                    />
                  )}
                </Field>
                <ErrorMessage name="password" component="span" className="error" />
                <span className="helper">Tip: use 8+ chars with letters & numbers</span>
              </div>

              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting…" : "Create account"}
              </button>

              {status?.message && (
                <p className={status.ok ? "success" : "error"}>{status.message}</p>
              )}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
