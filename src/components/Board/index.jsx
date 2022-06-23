import { Grid } from "@material-ui/core";
import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { getItems, move, reorder } from "../../helpers/misc";
import List from "../List/index";



const Board = () => {
  //State to carry our task lists

  const [state, setState] = useState([
    { title: "Open Bounties", type: "grey", data: getItems(5) },
    { title: "ASSIGNED/IN PROGRESS", type: "blue", data: getItems(4, 5) },
    { title: "UNDER REVIEW", type: "purple", data: getItems(6, 9) },
    { title: "CLOSE / REWARDED", type: "green", data: getItems(5, 15) },
  ]);
  // Main function that dnd untilize to deal with drag events
  function onDragEnd(result) {
    const { source, destination } = result;

    /// check if the task is being moved outside the div
    if (!destination) {
      return;
    }

    // get source and destination id
    const sInd = +source.droppableId;
    const dInd = +destination.droppableId;

    // if source and destination are same, meaning we are moving the item in the same list
    // then just reorder it. Else use the move function to switch the tasks from one list to another
    if (sInd === dInd) {
      const items = reorder(state[sInd].data, source.index, destination.index);
      const newState = [...state];
      newState[sInd].data = items;
      setState(newState);
    } else {
      const result = move(
        state[sInd].data,
        state[dInd].data,
        source,
        destination
      );
      console.log(result);
      const newState = [...state];
      newState[sInd].data = result[sInd];
      newState[dInd].data = result[dInd];
      console.log(newState);

      setState(newState);
    }
  }
  return (
    <>
      <Grid
        container
        spacing={2}
        columns={{ xs: 3, sm: 3, md: 3 }}
        direction={"row"}
      >
        <DragDropContext onDragEnd={onDragEnd}>
          {state.map((el, ind) => (
            <List el={el.data} ind={ind} title={el.title} type={el.type} />
          ))}
        </DragDropContext>
      </Grid>
    </>
  );
};

export default Board;
