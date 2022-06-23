import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyle = makeStyles((theme) => ({
  root: {
    width: "100%",
    minHeight: "100vh",
    padding: "4rem 0",
  },
}));

function MainLayout(props) {
  const classes = useStyle();
  return <div className={classes.root}>{props.children}</div>;
}

export default MainLayout;
