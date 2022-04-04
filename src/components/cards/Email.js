import { useState } from "react";
import { send } from "emailjs-com";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import email from "./images/email.png"

function Email() {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "Jimmy/John",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send("service_vt1x7ov", "template_5dtup3o", toSend, "US4icppZ2jUEmmkvP")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className="phoneEmail" style={{
        gridArea:"email"
    }}>
        <img src={email} className="img" />
        <h3>Let us reach out to you!</h3>
      <form className="eForm" onSubmit={onSubmit}>
        <TextField
          required
          label="Your Name"
          type="text"
          name="from_name"
          placeholder="Your Name"
          value={toSend.from_name}
          onChange={handleChange}
          style={{
            marginTop: "10px",
          }}
        />
        <TextField
          required
          label="Your Email"
          type="text"
          name="reply_to"
          placeholder="Your email"
          value={toSend.reply_to}
          onChange={handleChange}
          style={{
            marginTop: "10px",
          }}
        />
        <TextField
          label="Tell us about whats going on..."
          variant="standard"
          type="text"
          name="message"
          placeholder="Your message"
          value={toSend.message}
          onChange={handleChange}
          style={{
            width: "400px",
          }}
        />

        <Button
          type="submit"
          variant="outlined"
          style={{
            color: "#242424",
            borderColor: "#242424",
            whiteSpace: "nowrap",
            width: "max",
            marginTop:"10px"
          }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Email;
