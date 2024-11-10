import { observer } from "mobx-react-lite";
import { useState } from "react";
import GameState from "../../store/GameState";
import { FormControl, InputAdornment, Input as InputField } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

const Input = observer(() => {

  const [store] = useState(GameState);

  const changeInput = (e) => {
    const value = e.target.value;
    if (value.length > 0) {

    } else {
      
    }
    
  }

  return (
    <FormControl variant="standard">
        <InputField
        onChange={changeInput}
          endAdornment={
            <InputAdornment position="end">
              <CheckCircleIcon />
            </InputAdornment>
          }
        />
      </FormControl>
  )
});

export default Input;