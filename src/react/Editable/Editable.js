import "./Editable.scss";
import { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { red } from "@mui/material/colors";

const Editable = ({ value, className, onEdit, onDelete }) => {
  const [val, setVal] = useState("");

  useEffect(() => {
    setVal(value);
  }, [value]);

  return (
    <div className={`Editable${className ? ` ${className}` : ""}`}>
      <TextField
        multiline
        type="text"
        value={val}
        disabled={true}
        onChange={(evt) => {
          setVal(evt.target.value);
        }}
        sx={{
          width: "100%",

          "& .MuiOutlinedInput-root": {
            color: "red",
            fontFamily: "Inter",
            fontSize: "16px",
            fontWeight: "400",
            lineHeight: "25px",
            paddingTop: "12px",
            paddingRight: "70px",
            paddingBottom: "12px",
            paddingLeft: "20px",
            border: "1px solid #d6dfe4",
            borderRadius: "10px",
            backgroundColor: "#ffffff",

            "@media(max-Width: 767px)": {
              fontSize: "14px",
              lineHeight: "20px",
            },

            "& .MuiOutlinedInput-input": {
              "&.Mui-disabled": {
                color: "#212F4E",
                WebkitTextFillColor: "#212F4E",
              },
            },

            "& .MuiOutlinedInput-notchedOutline": {
              display: "none",
            },
          },
        }}
      />

      <div className="Editable__buttons">
        <button
          className="Editable__edit"
          type="button"
          onClick={() => {
            onEdit(val);
          }}
        >
          <svg width="20" height="20">
            <use href="#icon-pencil"></use>
          </svg>
        </button>

        <button
          className="Editable__delete"
          type="button"
          onClick={() => {
            onDelete();
          }}
        >
          <CloseIcon />
        </button>
      </div>
    </div>
  );
};

export default Editable;
