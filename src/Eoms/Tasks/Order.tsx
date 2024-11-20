import { observer } from "mobx-react-lite";
import { useState } from "react";
import TasksState from "../../store/TasksState";
import { Avatar, Checkbox, FormControlLabel } from "@mui/material";
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { Order as OrderTask } from "../../types/tasksTypes";

interface OrderProps {
  item: OrderTask;
}

const Order = observer(({ item }: OrderProps) => {

  const [store] = useState(TasksState);

  const checkItem = (uid: string) => {
    store.setSelectedAnswer(uid);
  };

  return (
    <>
      {store.getScored[store.getCurrentSlide].answered ? (
        <FormControlLabel sx={{ "& .MuiFormControlLabel-label": { fontSize: '18px' } }} control={<Checkbox sx={{
          "&.Mui-checked": {
            "&, & + .MuiFormControlLabel-label": {
              color: item.order === store.getAnswers.find(answer => answer.slideId === store.getCurrentSlide && answer.uid === item.uid).selectedNumber ? "success.main" : "error.main"
            }
          },
          "&.Mui-disabled": {
            "&, & + .MuiFormControlLabel-label": {
              color: item.order === store.getAnswers.find(answer => answer.slideId === store.getCurrentSlide && answer.uid === item.uid).selectedNumber ? "success.main" : "error.main"
            }
          },
        }}
          color={item.order === store.getAnswers.find(answer => answer.slideId === store.getCurrentSlide && answer.uid === item.uid).selectedNumber ? "success" : "error"}
          icon={<RadioButtonUncheckedIcon />}
          checkedIcon={item.order === store.getAnswers.find(answer => answer.slideId === store.getCurrentSlide && answer.uid === item.uid).selectedNumber ? <CheckCircleIcon /> : <CancelIcon />} />}
          label={<><span>{item.title}</span> <Avatar sx={{ width: 24, height: 24, fontSize: 'small', display: 'inline-flex' }}>{item.order}</Avatar></>}
          onChange={() => checkItem(item.uid)}
          disabled={store.getScored[store.getCurrentSlide].answered}
          checked={store.getAnswers.find(answer => answer.slideId === store.getCurrentSlide && answer.uid === item.uid).selectedNumber !== null} />
      ) : (
        <FormControlLabel sx={{ "& .MuiFormControlLabel-label": { fontSize: '18px' } }} control={<Checkbox
          icon={<RadioButtonUncheckedIcon />}
          checkedIcon={<Avatar sx={{ bgcolor: 'primary.main', width: 24, height: 24, fontSize: 'small' }}>{store.getAnswers.find(answer => answer.slideId === store.getCurrentSlide && answer.uid === item.uid).selectedNumber}</Avatar>} />}
          label={item.title}
          onChange={() => checkItem(item.uid)}
          checked={store.getAnswers.find(answer => answer.slideId === store.getCurrentSlide && answer.uid === item.uid).selectedNumber !== null} />
      )}
    </>
  )
});

export default Order;