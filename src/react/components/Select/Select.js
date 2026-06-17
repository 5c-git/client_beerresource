import "./Select.scss";
import FormControl from "@mui/material/FormControl";
import { default as MuiSelect } from "@mui/material/Select";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { getPaddingFromBody, getPaddingOnBody } from 'utils/utils';

const Select = ({
  children,
  isModal,
  value,
  name,
  onChange,
  label,
  isRequired,
  isDisabled,
  className,
  placeholder,
}) => {
  return (
    <div className={`Select${className ? ` ${className}` : ""}`}>
      {label ? (
        <label
          className={
            isRequired
              ? "Select__label Select__label--required"
              : "Select__label"
          }
        >
          {label}
        </label>
      ) : null}
      <FormControl fullWidth>
        <MuiSelect
          value={value}
          name={name}
          disabled={isDisabled}
          onChange={onChange}
          onOpen={() => {
            if (!isModal) {
              getPaddingOnBody();
            }
          }}
          onClose={() => {
            if (!isModal) {
              getPaddingFromBody();
            }
          }}
          IconComponent={KeyboardArrowDownIcon}
          displayEmpty
          renderValue={(value) => {
            if (value === "") {
              return placeholder;
            }

            return value;
          }}
          sx={{
            fontFamily: "Inter",
            fontSize: "16px",
            fontWeight: "400",
            lineHeight: "25px",
            backgroundColor: "transparent",

            "@media (max-width: 767px)": {
              fontSize: "14px",
              lineHeight: "20px",
            },

            "&:hover": {
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#d1d5db",
              },
            },

            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "transparent",
              borderWidth: "0",
            },

            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "transparent",
              borderWidth: "0",
            },
            "& .MuiOutlinedInput-input": {
              paddingTop: "13px",
              paddingRight: "12px",
              paddingBottom: "14px",
              paddingLeft: "15px",

              "&.MuiSelect-select": {
                position: "relative",
                whiteSpace: "break-spaces",
                backgroundColor: "#ffffff",
                borderRadius: "8px",

                "&.Mui-disabled": {
                  color: "#7F8899",
                  backgroundColor: "#EEEFF0",
                },

                "&:before": {
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "calc(100% - 2px)",
                  height: "calc(100% - 2px)",
                  border: "1px solid #d1d5db",
                  borderRadius: "8px",
                  content: '""',
                },

                '&[aria-expanded="true"]': {
                  borderRadius: "8px 8px 0 0",

                  "&:before": {
                    borderRadius: "8px 8px 0 0",
                  },
                },
              },
            },
            "& .MuiSelect-icon": {
              top: "24%",
              width: "25px",
              height: "25px",
              fill: "#212F4E",

              "&.Mui-disabled": {
                fill: "#7F8899",
              },
            },
          }}
          MenuProps={{
            disableScrollLock: true,
            PaperProps: {
              sx: {
                borderRadius: "0 0 8px 8px",
                borderRight: "1px solid #D6DFE4",
                borderBottom: "1px solid #D6DFE4",
                borderLeft: "1px solid #D6DFE4",
                backgroundColor: "#ffffff",
                boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.1)",

                "& .MuiMenu-list": {
                  paddingTop: "4px",
                  paddingRight: "5px",
                  paddingBottom: "5px",
                  paddingLeft: "5px",

                  "& .MuiButtonBase-root": {
                    paddingTop: "12px",
                    paddingRight: "10px",
                    paddingBottom: "12px",
                    paddingLeft: "10px",
                    fontFamily: "Inter",
                    fontSize: "16px",
                    fontWeight: "400",
                    lineHeight: "25px",
                    color: "#212F4E",
                    borderRadius: "8px",

                    "&:hover": {
                      backgroundColor: "#EEEFF0",
                      color: "#1F617F",
                    },

                    "&.Mui-selected": {
                      backgroundColor: "#ffffff",
                      color: "#212F4E",
                    },
                  },
                },
              },
            },
          }}
        >
          {children}
        </MuiSelect>
      </FormControl>
    </div>
  );
};

export default Select;
