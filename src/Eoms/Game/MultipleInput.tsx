import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import GameState from "../../store/GameState";
import { FormControl, Input, InputAdornment, Typography } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { MultipleInput as MultipleInputTask } from "../../types/gameTypes";

interface MultipleInputProps {
  item: MultipleInputTask;
}

const MultipleInput = observer(({ item }: MultipleInputProps) => {

  const [store] = useState(GameState);

  const changeInput = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, uid: string, inputIndex: number) => {
    const newValue = e.target.value;
    const value = store.answers.find(el => { return el.slideId === store.getCurrentSlide && el.uid === item.uid })?.multipleInputValue;
    const copy = [...value];
    console.log(inputIndex);
    console.log(copy);
    
    copy[inputIndex] = newValue.trim();
    store.setSelectedAnswer(uid, copy);
  }

  return (
    <Typography variant="body1">
      {item.pattern.split('{}').map((part, index) => (
        <React.Fragment key={index}>
          {part}
          {index < item.value.length && (
            <FormControl variant="standard">
              <Input
                sx={{
                  width: 150,
                  "& .Mui-disabled": {
            WebkitTextFillColor: 'black !important'
          }
                }}
                size="small"
                disabled={store.getScored[store.getCurrentSlide].answered}
                onChange={(e) => changeInput(e, item.uid, index)}
                value={store.answers.find(el => { return el.slideId === store.getCurrentSlide && el.uid === item.uid })?.multipleInputValue[index]}
                endAdornment={
                  <InputAdornment position="end">
                    {store.getScored[store.getCurrentSlide].answered ? (
                      <>
                        {
                          item.value[index] === store.answers.find(el => { return el.slideId === store.getCurrentSlide && el.uid === item.uid })?.multipleInputValue[index]
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
          )}
        </React.Fragment>
      ))}
    </Typography>
  )
});

export default MultipleInput;