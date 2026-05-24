import "./App.css";
import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    formData.append("access_key", "ddeef563-5068-463d-b0e2-1dc16e42d181");
    formData.append("subject", "New Student Registration - Gennex Technology");
    formData.append("from_name", "Gennex Technology");
    formData.append("replyto", formData.get("email"));

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (result.success) {
      setMessage("✅ Registration sent successfully!");
      e.target.reset();
    } else {
      setMessage("❌ Failed. Please try again.");
    }
  }

  return (
    <div className="hero">
      <div className="card">
        <h1>Gennex Technology</h1>

        <h2>Student Registration</h2>

        <p>
          Register for Front-End and Back-End classes.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="student_name"
            placeholder="Student Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Student Email"
            required
          />

          <textarea
            name="student_message"
            placeholder="Why do you want to join?"
            required
          ></textarea>

          <button type="submit">Register Now</button>
        </form>

        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
}

export default App;