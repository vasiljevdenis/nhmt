import { observer } from "mobx-react-lite";
import { useState } from "react";
import GameState from "../../store/GameState";
import { Avatar, Checkbox, FormControlLabel } from "@mui/material";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';

const Order = observer(({ item, i }) => {

  const [store] = useState(GameState);

  const checkItem = (slideId: number, index: number) => {
    store.setCheckG(slideId, index);
  };
  const getCheckNumber = (slideId: number, index: number) => {
    store.setCheckG(slideId, index);
    return "1";
  };

  return (
    <>
      {item.answered ? (
        <FormControlLabel sx={{ "& .MuiFormControlLabel-label": { fontSize: '18px' } }} control={<Checkbox sx={{
          "&.Mui-checked": {
            "&, & + .MuiFormControlLabel-label": {
              color: item.isCorrect ? "success.main" : "error.main"
            }
          },
          "&.Mui-disabled": {
            "&, & + .MuiFormControlLabel-label": {
              color: item.isCorrect ? "success.main" : "error.main"
            }
          },
        }}
          color={item.isCorrect ? "success" : "error"}
          icon={<CheckBoxOutlineBlankIcon />}
          checkedIcon={item.isCorrect ? <CheckBoxIcon /> : <Avatar sx={{ width: 24, height: 24, bgcolor: 'primary.main' }}>{getCheckNumber(store.currentSlideId, i)}</Avatar>} />}
          label={item.value}
          onChange={() => checkItem(store.currentSlideId, i)}
          disabled={store.allAnswers.find(el => { return el.slideId === store.currentSlideId && el.checked }) ? true : false}
          checked={store.allAnswers.find(el => { return el.slideId === store.currentSlideId && el.index === i })?.checked || false} />
      ) : (
        <FormControlLabel sx={{ "& .MuiFormControlLabel-label": { fontSize: '18px' } }} control={<Checkbox
          icon={<CheckBoxOutlineBlankIcon />}
          checkedIcon={<IndeterminateCheckBoxIcon />} />}
          label={item.value}
          onChange={() => checkItem(store.currentSlideId, i)}
          checked={store.allAnswers.find(el => { return el.slideId === store.currentSlideId && el.index === i })?.checked || false} />
      )}
    </>
  )
});

export default Order;