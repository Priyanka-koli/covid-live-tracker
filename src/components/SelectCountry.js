import React, { useState } from "react";
import { Box, InputLabel, FormControl, NativeSelect } from "@mui/material/";

const SelectCountry = (props) => {
  const [country, setCountry] = useState("india");
  const countrySelectHandler = (e) => {
    setCountry(e.target.value);
    props.countrySelectHandler(e.target.value);
  };
  return (
    <div>
      <Box sx={{ minWidth: 130 }}>
        <FormControl sx={{ minWidth: 130 }}>
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            Select Country
          </InputLabel>
          <NativeSelect
            defaultValue={"india"}
            value={country}
            onChange={countrySelectHandler}
          >
            <option value={"india"}>INDIA</option>
            <option value={"spain"}>SPAIN</option>
            <option value={"USA"}>USA</option>
            <option value={"UK"}>UK</option>
            <option value={"china"}>CHINA</option>
            <option value={"japan"}>JAPAN</option>
          </NativeSelect>
        </FormControl>
      </Box>
    </div>
  );
};

export default SelectCountry;
