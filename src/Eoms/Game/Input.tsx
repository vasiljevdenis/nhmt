import { observer } from "mobx-react-lite";
import { useState } from "react";
import GameState from "../../store/GameState";
import { FormControl, InputAdornment, Input as InputField } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

const Input = observer(({ item, i }) => {

  console.log(item);


  const [store] = useState(GameState);

  const changeInput = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, slideId: number, index: number) => {
    const value = e.target.value;
    store.setInputVal(slideId, index, value);
  }

  return (
    <FormControl variant="standard">
      <InputField
        sx={{
          maxWidth: 500
        }}
        disabled={store.allCountedG.includes(store.currentSlG) ? true : false}
        onChange={(e) => changeInput(e, store.currentSlG, i)}
        value={store.answG.find(el => { return el.slideId === store.currentSlG && el.index === i })?.inputValue || ''}
        endAdornment={
          <InputAdornment position="end">
            {store.allCountedG.includes(store.currentSlG) ? (
              <>
                {
                  item.value.includes(store.answG.find(el => { return el.slideId === store.currentSlG && el.index === i })?.inputValue)
                    ? <CheckCircleIcon color="success" />
                    : <CancelIcon color="error" />
                }
              </>
            ) : (
              <></>
            )
            }
          </InputAdornment>
        }
      />
    </FormControl>
  )
});

export default Input;