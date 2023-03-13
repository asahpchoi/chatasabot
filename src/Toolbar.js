import { useState } from "react";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import { Button } from "@mui/material";

export function Toolbar({ addMessage }) {
  return (
    <>
      {" "}
      <div className="toolbar">
        <TextField
          id="message"
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              const msg = document.getElementById("message").value;
              document.getElementById("message").value = "";
              addMessage(msg);
            }
          }}
          style={{ width: "70%" }}
        />
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          onClick={() => {
            const msg = document.getElementById("message").value;
            document.getElementById("message").value = "";
            addMessage(msg);
          }}
        >
          Send
        </Button>
      </div>
    </>
  );
}
