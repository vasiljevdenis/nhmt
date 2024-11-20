import { observer } from "mobx-react-lite";
import { useState } from "react";
import TasksState from "../../store/TasksState";
import { Checkbox, FormControlLabel } from "@mui/material";
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { Single as SingleTask } from "../../types/tasksTypes";

interface SingleProps {
  item: SingleTask;
}

const Single = observer(({ item }: SingleProps) => {

  const [store] = useState(TasksState);

  const checkItem = (uid: string) => {
    store.setSelectedAnswer(uid);
  };

  return (
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
      icon={<RadioButtonUncheckedIcon />}
      checkedIcon={item.isCorrect ? <CheckCircleIcon /> : <CancelIcon />} />}
      label={item.value}
      onChange={() => checkItem(item.uid)}
      disabled={store.getScored.find(slide => slide.slideId === store.getCurrentSlide).answered}
      checked={store.getAnswers.find(el => { return el.slideId === store.getCurrentSlide && el.uid === item.uid })?.selected} />
  )
});

export default Single;
