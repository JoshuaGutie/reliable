import { useState } from "react";
import { send } from "emailjs-com";
import TextField from "@mui/material/TextField";
import email from "./images/email.png"
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { green, red } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import CheckIcon from '@mui/icons-material/Check';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import ErrorIcon from '@mui/icons-material/Error';

function Email() {
{/*Setting state for Email.js */}
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "Jimmy/John",
    message: "",
    reply_to: "",
  });
{/* Setting state for MUI progress button */}
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

{/*Countdown for error */}
  const [counter, setCounter] = useState(1000);
  const [error, setError] = useState(false)

  {/*MUI styling */}
  const buttonSx = {
    ...(success && {
      bgcolor: green[500],
      '&:hover': {
        bgcolor: green[700],
      },
    }),
  };

  if (counter > 0) {
    setTimeout(() => setCounter(counter - 1), 1000);
  } else {
    setError(true)
    setLoading(false)
    setCounter(100)
    console.log(error);
  }


{/*If the req text fields are not blank, req json from Email.js */}
  const onSubmit = (e) => {
    setError(false)
    setCounter(7)
    console.log(error)
    if (!loading) {
      setSuccess(false);
      setLoading(true);}
    e.preventDefault();
   if(toSend.from_name && toSend.reply_to != ""){
    send("service_vt1x7ov", "template_5dtup3o", toSend, "US4icppZ2jUEmmkvP")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        {/*Resetting the state  */}
        setToSend({
          from_name: "",
          to_name: "Jimmy/John",
          message: "",
          reply_to: "",
        })
        setSuccess(true);
        setLoading(false);
        setError(false)
        setCounter(1000)
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
    }
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
{/*Begin email form */}
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

<Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ m: 1, position: 'relative' }}>
        <Fab
          aria-label="save"
          color="primary"
          sx={buttonSx}
          onClick={onSubmit}
        >
          {success ? <CheckIcon /> : <AttachEmailIcon/>}
          {error && success != true ? <ErrorIcon sx={{color:red[500]}} /> : <span/>}


        </Fab>
        {loading && (
          <CircularProgress
            size={68}
            sx={{
              color: green[500],
              position: 'absolute',
              top:-30,
              left: -6,
              zIndex: 10,
            }}
          />
        )}
      </Box>
      </Box>
      </form>
    </div>
  );
}

export default Email;
