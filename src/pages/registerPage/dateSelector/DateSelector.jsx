import React, { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
// import dob  from "../../../localStorage/LocalStorage";
import { useRecoilState } from "recoil";
function DateSelector() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
 
  

  // handle change event for date selection
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  // handle change event for month selection
  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
    setDob(selectedDate,selectedMonth)
  };

  // handle change event for year selection
  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
 
  };

  const textFieldCss = {
    border: "1px solid #d4d4d4",
    borderRadius: 1,
    backgroundColor: "#ffffff",
    "@media (max-width: 400px)": {
      width: "150px",
      marginLeft: "20px",
    },
  };

  return (
    <div
      style={{ marginTop: "2rem", display: "flex", gap: "1rem", width: "100%" }}
    >
      <FormControl
        variant="filled"
        sx={{ backgroundColor: "transparent", ...textFieldCss, width: "50%" }}
      >
        <InputLabel>Month</InputLabel>
        <Select value={selectedMonth} onChange={handleMonthChange}>
          <MenuItem value="">
            <em>--Select Month--</em>
          </MenuItem>
          <MenuItem value="01">January</MenuItem>
          <MenuItem value="02">February</MenuItem>
          <MenuItem value="03">March</MenuItem>
          <MenuItem value="04">April</MenuItem>
          <MenuItem value="05">May</MenuItem>
          <MenuItem value="06">June</MenuItem>
          <MenuItem value="07">July</MenuItem>
          <MenuItem value="08">August</MenuItem>
          <MenuItem value="09">September</MenuItem>
          <MenuItem value="10">October</MenuItem>
          <MenuItem value="11">November</MenuItem>
          <MenuItem value="12">December</MenuItem>
        </Select>
      </FormControl>

      <FormControl
        variant="filled"
        sx={{ backgroundColor: "transparent", ...textFieldCss, width: "20%" }}
      >
        <InputLabel>Day</InputLabel>
        <Select value={selectedDate} onChange={handleDateChange}>
          <MenuItem value="">
            <em>--Select Date--</em>
          </MenuItem>
          {Array.from({ length: 31 }, (_, i) => i + 1).map((date) => (
            <MenuItem key={date} value={date}>
              {date}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl
        variant="filled"
        sx={{ backgroundColor: "transparent", ...textFieldCss, width: "30%" }}
      >
        <InputLabel>Year</InputLabel>
        <Select value={selectedYear} onChange={handleYearChange}>
          <MenuItem value="">
            <em>--Select Year--</em>
          </MenuItem>
          {Array.from(
            { length: 100 },
            (_, i) => new Date().getFullYear() - i
          ).map((year) => (
            <MenuItem key={year} value={year}>
              {year}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default DateSelector;
