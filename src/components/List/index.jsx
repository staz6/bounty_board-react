import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import {
    Draggable, Droppable
} from "react-beautiful-dnd";

const useStyle = makeStyles((theme) => ({

    root:{
        width:"25%"
    },
    headingContainer:{
        textIndent:"15px",
        backgroundColor:`${theme.primary.bg}`,
        padding: ".75rem 0",
        borderTopLeftRadius:"0.5rem",
        borderTopRightRadius:"0.5rem",
        "&.grey":{
            borderBottom:`4px solid ${theme.primary.grey}`,
        },
        "&.blue":{
            borderBottom:`4px solid ${theme.primary.blue}`,
        },
        "&.purple":{
            borderBottom:`4px solid ${theme.primary.purple}`,
        },
        "&.green":{
            borderBottom:`4px solid ${theme.primary.green}`,
        }
        
    },

    heading:{
    fontSize: '1.25rem',
    lineHeight: '1.75rem',
    fontWeight:700,
    textTransform:'uppercase',
    color:theme.primary.text
    },
    listContainer:{
        marginTop:'2rem',
        borderLeft:`${theme.border.main}`,
        borderRight:`${theme.border.main}`,
        padding:"0 0.75rem"

    },
    dragableContainer:{
        paddingBottom:"15px"
    }
}))


const List = ({ ind, el,title,type }) => {
    const classes = useStyle()
    console.log(classes)
  return (
    <Droppable key={ind} droppableId={`${ind}`}>
      {(provided, snapshot) => (
        <>
        <Grid item xs={3} sm={3} md={3} lg={3} >
        <div className={`${classes.headingContainer} ${type}`} >
            <span className={classes.heading}>{title}</span>
        </div>
        <div
          ref={provided.innerRef}
          className={classes.listContainer}
        >
            
          {el.map((item, index) => (
            <Draggable key={item.id} draggableId={item.id} index={index}>
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  className={classes.dragableContainer}
                  
                >
                 
                    
                  
                </div>
              )}
            </Draggable>
          ))}
         
        </div>
        </Grid>
        </>
      )}
    </Droppable>
  );
};

export default List;
