import React, { useState } from "react";
import "./hackathon.css";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));
const Hackathon = (props) => {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className="backgroundColor">
        <div style={{ paddingTop: "100px", color: "white" }}>
          <div className="formStyle">
            <div style={{ paddingTop: "20px" }}>
              <TextField
                id="outlined-disabled"
                label="Mobile No."
                variant="outlined"
                type="number"
                InputLabelProps={{
                  className: classes.multilineColor,
                  shrink: true,
                }}
              />
              <TextField
                id="outlined-disabled"
                label="Name"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                id="outlined-disabled"
                label="Gender"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                id="outlined-disabled"
                label="Preferred Vaccine"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
              />

              <TextField
                id="outlined-disabled"
                label="Address"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
              />

              <Button className="btn-color">Submit</Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
export default Hackathon;
