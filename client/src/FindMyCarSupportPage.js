import { TextField, Button, Alert } from "@mui/material";
import axios from "axios";

import { useState } from "react";

export default function FindMyCar() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false)
  const [failed, setFailed] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {email, message}
    axios.post('https://us-central1-new-organization-351600.cloudfunctions.net/nodemailer-10', data)
    .then(res => setSuccess(true))
    .then(()=> {setEmail(""); setMessage("")})
    .catch(error => setFailed(true))
  };

  return (
    <div className="findmycar" style={{ textAlign: "center", width: "100vw" }}>
      {success && <Alert severity="success">Email sented!</Alert>}
      {failed && <Alert severity="error">Failed to sent email, please refresh the page and try again</Alert>}

      <h1>Find Your Car App Support Page</h1>
      <p>Please submit your feedback below</p>
      <form
        className="inputform"
        style={{
          textAlign: "left",
          display: "flex",
          flexDirection: "column",
          marginLeft: "5vw",
          marginRight: "5vw",
        }}
        onSubmit={onSubmit}
      >
        <label style={{ marginBottom: "50px" }}>
          Your email:
          <TextField
            type="email"
            style={{ textAlign: "left", width: "90vw" }}
            placeholder="please enter your email"
            value={email}
            onInput={(e) => setEmail(e.target.value)}
          />
        </label>
        <label style={{ marginBottom: "50px" }}>
          Your feedback:
          <TextField
            style={{ textAlign: "left", width: "90vw" }}
            hintText="Message Field"
            floatingLabelText="MultiLine and FloatingLabel"
            multiline
            rows={3}
            placeholder="Please type in your feedback"
            value={message}
            onInput={(e) => setMessage(e.target.value)}
          />
        </label>

        <Button style={{ width: "90vw" }} variant="contained" type="submit">
          submit
        </Button>
      </form>
    </div>
  );
}
