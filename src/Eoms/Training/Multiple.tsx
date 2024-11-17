import { observer } from "mobx-react-lite";
import { useState } from "react";
import TrainingState from "../../store/TrainingState";
import { Checkbox, FormControlLabel } from "@mui/material";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import { Single as MultipleTask } from "../../types/trainingTypes";

interface MultipleProps {
  item: MultipleTask;
}

const Multiple = observer(({ item }: MultipleProps) => {

  const [store] = useState(TrainingState);

  const checkItem = (uid: string) => {
    store.setSelectedAnswer(uid);
  };

  return (
    <>
      {store.getScored[store.getCurrentSlide].answered ? (
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
          checkedIcon={item.isCorrect ? <CheckBoxIcon /> : <DisabledByDefaultIcon />} />}
          label={item.value}
          onChange={() => checkItem(item.uid)}
          disabled={store.getScored.find(slide => slide.slideId === store.getCurrentSlide).answered}
          checked={store.getAnswers.find(el => { return el.slideId === store.getCurrentSlide && el.uid === item.uid })?.selected} />
      ) : (
        <FormControlLabel sx={{ "& .MuiFormControlLabel-label": { fontSize: '18px' } }} control={<Checkbox
          icon={<CheckBoxOutlineBlankIcon />}
          checkedIcon={<IndeterminateCheckBoxIcon />} />}
          label={item.value}
          onChange={() => checkItem(item.uid)}
          checked={store.getAnswers.find(el => { return el.slideId === store.getCurrentSlide && el.uid === item.uid })?.selected} />
      )}
    </>
  )
});

export default Multiple;