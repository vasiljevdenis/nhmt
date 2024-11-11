import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import GameState from "../../store/GameState";
import { FormControl, Input, InputAdornment, Typography } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel'

const MultipleInput = observer(({ item, i }) => {

  const [store] = useState(GameState);

  const changeInput = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, slideId: number, index: number, inputIndex: number) => {
    const value = e.target.value;
    store.setInputVal(slideId, index, value, inputIndex);
  }

  let inputIndex = 0;

  const incrementIndex = () => {
    inputIndex++;
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
                  maxWidth: 500
                }}
                size="small"
                disabled={store.allCountedG.includes(store.currentSlG) ? true : false}
                onChange={(e) => changeInput(e, store.currentSlG, i, inputIndex)}
                value={store.answG.find(el => { return el.slideId === store.currentSlG && el.index === i })?.inputValue[inputIndex].value || ''}
                endAdornment={
                  <InputAdornment position="end">
                    {store.allCountedG.includes(store.currentSlG) ? (
                      <>
                        {
                          item.value.includes(store.answG.find(el => { return el.slideId === store.currentSlG && el.index === i })?.inputValue[inputIndex].value)
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
          {index < item.value.length && incrementIndex()}
        </React.Fragment>
      ))}
    </Typography>
  )
});

export default MultipleInput;