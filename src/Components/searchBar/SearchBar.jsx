import { Autocomplete, TextField ,InputAdornment } from "@mui/material";
import { borderRadius } from "@mui/system";
import { BiSearch } from "react-icons/bi";
const textFieldCss = {
  border: "0.01px solid #00acee",
  backgroundColor: "white",
  borderRadius: 50,
  "& label": {
    color: "black",
  },
  "@media (max-width: 400px)": {
    width: "150px",
    marginLeft: "20px",
  },
};
const options = [
  "Apple",
  "Banana",
  "Cherry",
  "Date",
  "Elderberry",
  "Fig",
  "Grape",
  "Honeydew",
];

const style = {
  width: "20rem",
  borderRadiua: "20rem",
  backgroundColor: "white",
  marginTop: "1rem",
  "@media (max-width: 1075px)": {
    width: "17rem",
  },
};

export default function SearchBar() {
  return (
    <div>
      <Autocomplete
        sx={{ ...style , }}
        options={options}
        renderInput={(params) => (
          <TextField  {...params} sx={{ ...textFieldCss }} InputProps={{
            disableUnderline: true,
            endAdornment: (
              <InputAdornment position="start">
                <BiSearch
                  style={{
                    color: "#798791",
                    width: "60px",
                    
                    height: "30px",
                    marginBottom:'35px',
                    
                  }}
                />
              </InputAdornment>
            ),
          }} label="Search Twitter" variant="filled" />
        )}
      />
    </div>
  );
}
