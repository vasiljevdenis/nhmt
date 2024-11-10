import { observer } from "mobx-react-lite";
import { useState } from "react";
import GameState from "../../store/GameState";
import { Checkbox, FormControlLabel } from "@mui/material";
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

const Single = observer(({item, i}) => {

  const [store] = useState(GameState);

  const checkItem = (slideId: number, index: number) => {
    store.setCheckG(slideId, index);
  };

  return (
    <FormControlLabel sx={{"& .MuiFormControlLabel-label": {fontSize: '18px'}}} control={<Checkbox sx={{
      "&.Mui-checked": {
        "&, & + .MuiFormControlLabel-label": {
          color: item.isCorrect ? "success.main" : "error.main"
        }
      }
    }}
      color={item.isCorrect ? "success" : "error"}
      icon={<RadioButtonUncheckedIcon />}
      checkedIcon={item.isCorrect ? <CheckCircleIcon /> : <CancelIcon />} />}
      label={item.value}
      onChange={() => checkItem(store.currentSlG, i)}
      disabled={store.answG.find(el => { return el.slideId === store.currentSlG && el.checked }) ? true : false}
      checked={store.answG.find(el => { return el.slideId === store.currentSlG && el.index === i })?.checked || false} />
  )
});

export default Single;
