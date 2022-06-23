import { makeStyles } from "@material-ui/styles";
import {getItems,reorder,move} from '../../helper/misc'
import { useState } from "react";
import {
    DragDropContext
} from "react-beautiful-dnd";
import List from "../List/index";
import { Grid } from "@material-ui/core";





const useStyle = makeStyles((theme) => ({
  flex: {
    display: "flex",
    justifyContent:"space-evenly",
    flexBasis: '25%',
    columnGap:"1rem",
    flexGrow: 0,
  },
}));

const Board = () => {
  const classes = useStyle();
  const [state, setState] = useState([
    {title:"Open Bounties",type:"grey",data:getItems(5)},
    {title:"ASSIGNED/IN PROGRESS",type:"blue",data:getItems(4,5)},
    {title:"UNDER REVIEW",type:"purple",data:getItems(6,9)},
    {title:"CLOSE / REWARDED",type:"green",data:getItems(5,15)},
  ]);
  console.log(state);
  function onDragEnd(result) {
    const { source, destination } = result;
    console.log(result)

    if (!destination) {
      return;
    }
    const sInd = +source.droppableId;
    const dInd = +destination.droppableId;

    if (sInd === dInd) {
      const items = reorder(state[sInd].data, source.index, destination.index);
      const newState = [...state];
      newState[sInd].data = items;
      setState(newState);
    } else {
      const result = move(state[sInd].data, state[dInd].data, source, destination);
      console.log(result)
      const newState = [...state];
      newState[sInd].data = result[sInd];
      newState[dInd].data = result[dInd];
      console.log(newState)

    setState(newState);
    }
  }

  return (
    <>
        <Grid container spacing={2} columns={{ xs: 3, sm: 3, md: 3 }} direction={'row'}>
        <DragDropContext onDragEnd={onDragEnd}>
            {state.map((el, ind) => (
              <List el={el.data} ind={ind} title={el.title} type={el.type}/>
            ))}
          </DragDropContext>
        </Grid>

    </>
  );
};

export default Board;
