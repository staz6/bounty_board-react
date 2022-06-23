import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyle = makeStyles((theme) => ({
  container: {
    width: "100%",
    maxWidth: "1200px",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "1.5rem",
    backgroundColor: "rgb(16 14 46)",
    minHeight: "100vh",
    borderRadius: "10px",
  },
  heading: {
    color: theme.primary.text,
    textAlign: "center",
    fontSize: "2.25rem",
    lineHeight: "2.5rem",
    paddingBottom: "0.4rem",
    borderBottom: theme.border.main,
  },
}));

function Home() {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <h1 className={classes.heading}>Bounties</h1>
    </div>
  );
}

export default Home;
