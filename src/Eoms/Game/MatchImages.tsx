import { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { DragDropContext, Draggable } from "react-beautiful-dnd";
import { Box, Grid, Paper } from "@mui/material";
import { StrictModeDroppable } from "../../components/StrictModeDroppable";
import { MatchImagesItem, MatchImages as MatchImagesTask } from "../../types/gameTypes";
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { shuffleArray } from "../../helpers/shuffleArray";
import GameState from "../../store/GameState";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

interface MatchImagesProps {
  item: MatchImagesTask;
}

// Утилита для перестановки элементов
const reorder = (list: MatchImagesItem[], startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const MatchImages = observer(({ item }: MatchImagesProps) => {

  const [store] = useState(GameState);
  const [, updateState] = useState({});
  const forceUpdate = useCallback(() => updateState({}), []);
  const [leftItems, setLeftItems] = useState(shuffleArray(item.items));

  // Обработчик завершения перетаскивания
  const onDragEnd = (result: any, uid: string) => {
    const { source, destination } = result;

    // Если элемент сброшен вне списка
    if (!destination) return;

    // Перетаскивание только внутри левого столбца
    if (source.droppableId === "left" && destination.droppableId === "left") {
      const reordered = reorder(leftItems, source.index, destination.index);
      store.setSelectedAnswer(uid, reordered);
      setLeftItems(reordered);      
    }
  };

  const checkEqual = (index: number) => {
    const answer = store.getAnswers.find(el => { return el.slideId === store.getCurrentSlide && el.uid === item.uid });    
    const arr1 = answer.items[index];
    const arr2 = answer.selectedItems[index];

    const areEqual = JSON.stringify(arr1) === JSON.stringify(arr2);
    return areEqual;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      forceUpdate();
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <DragDropContext onDragEnd={(res) => onDragEnd(res, item.uid)}>
      <Grid container spacing={4}>
        {/* Левый столбец */}
        <Grid item xs={6}>
          <StrictModeDroppable droppableId="left">
            {(provided) => (
              <Box
                ref={provided.innerRef}
                {...provided.droppableProps}
                sx={{
                  backgroundColor: "#f9f9f9",
                  padding: 2,
                  minHeight: 300,
                  borderRadius: 1,
                  border: "1px solid #ddd"
                }}
              >
                {leftItems.map((el, index) => (
                  <Draggable key={el.value} draggableId={el.value} index={index} isDragDisabled={store.getScored[store.getCurrentSlide].answered}>
                    {(provided, snapshot) => (
                      <Paper
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        sx={{
                          padding: 2,
                          marginBottom: index === leftItems.length - 1 ? 0 : 2,
                          backgroundColor: snapshot.isDragging ? "rgba(0, 0, 0, 0.05)" : "#fff",
                          cursor: "pointer",
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          maxWidth: "100%",
                          height: "auto",
                          minHeight: '100px',
                          position: 'relative'
                        }}
                      >
                        {el.value}
                        <DragIndicatorIcon sx={{
                          position: 'absolute',
                          top: 'calc(50% - 10px)',
                          left: '10px'
                        }} />
                            {checkEqual(index) ? (
                              <CheckCircleIcon color="success" sx={{
                                position: 'absolute',
                                top: 'calc(50% - 10px)',
                                right: '10px',
                                display: store.getScored[store.getCurrentSlide].answered ? 'inline-block' : 'none'
                              }} />
                            ) : (
                              <CancelIcon color="error" sx={{
                                position: 'absolute',
                                top: 'calc(50% - 10px)',
                                right: '10px',
                                display: store.getScored[store.getCurrentSlide].answered ? 'inline-block' : 'none'
                              }} />
                            )}
                      </Paper>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </Box>
            )}
          </StrictModeDroppable>
        </Grid>

        {/* Правый столбец */}
        <Grid item xs={6}>
          <Box
            sx={{
              backgroundColor: "#f9f9f9",
              padding: 2,
              minHeight: 300,
              borderRadius: 1,
              border: "1px solid #ddd"
            }}
          >
            {item.items.map((el, i) => (
              <Paper
                key={el.image}
                sx={{
                  py: 0,
                  px: 2,
                  marginBottom: i === item.items.length - 1 ? 0 : 2,
                  textAlign: "center",
                  width: "100%",
                  height: "100px",
                  overflow: 'hidden'
                }}
              >
                <img
                  src={el.image}
                  alt={el.value}
                  style={{ width: "auto", height: "100px", verticalAlign: 'middle', objectFit: 'contain' }}
                />
              </Paper>
            ))}
          </Box>
        </Grid>
      </Grid>
    </DragDropContext>
  );
});

export default MatchImages;