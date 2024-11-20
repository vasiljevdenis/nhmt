import { observer } from "mobx-react-lite";
import { useState } from "react";
import TrainingState from "../../store/TrainingState";
import { FormControl, InputAdornment, Input as InputField } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { Input as InputTask } from "../../types/trainingTypes";

interface InputProps {
  item: InputTask;
}

const Input = observer(({ item }: InputProps) => {

  const [store] = useState(TrainingState);

  const changeInput = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, uid: string) => {
    const value = e.target.value;
    store.setSelectedAnswer(uid, value.toLowerCase());
  }

  return (
    <FormControl variant="standard">
      <InputField
      autoFocus
        sx={{
          maxWidth: 500,
          "& .Mui-disabled": {
            WebkitTextFillColor: 'black !important'
          }
        }}
        disabled={store.getScored[store.getCurrentSlide].answered}
        onChange={(e) => changeInput(e, item.uid)}
        value={store.answers.find(el => { return el.slideId === store.getCurrentSlide && el.uid === item.uid })?.inputValue}
        endAdornment={
          <InputAdornment position="end">
            {store.getScored[store.getCurrentSlide].answered ? (
              <>
                {
                  item.value.includes(store.answers.find(el => { return el.slideId === store.getCurrentSlide && el.uid === item.uid })?.inputValue)
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