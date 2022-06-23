import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyle = makeStyles((theme) => ({
  container: {
    color: theme.primary.text,
    backgroundColor: `${theme.primary.bg}`,
    borderRadius: "12px",
    paddingTop: "1.25rem",
  },
  padding: {
    paddingLeft: "1.25rem",
    paddingRight: "1.25rem",
  },
  heading: {
    fontSize: "1.25rem",
    lineHeight: "1.75rem",
    fontWeight: 700,
    color: theme.primary.text,
  },
  desc: {
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
  },
  bottomContainer: {
    fontSize: "13px",
    fontWeight: 600,
    display: "flex",
    paddingTop: "0.7rem",
    paddingBottom: "0.7rem",
    borderBottomLeftRadius: "12px",
    borderBottomRightRadius: "12px",
    justifyContent: "space-between",
    alignItems: "center",
    "&.grey": {
      backgroundColor: `${theme.primary.grey}`,
      color: "#000",
    },
    "&.blue": {
      backgroundColor: `${theme.primary.blue}`,
      color: "#fff",
    },
    "&.purple": {
      backgroundColor: `${theme.primary.purple}`,
      color: "#fff",
    },
    "&.green": {
      backgroundColor: `${theme.primary.green}`,
      color: "#fff",
    },
  },
}));

const Card = ({ data, type }) => {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <h3 className={`${classes.heading} ${classes.padding}`}>{data.title}</h3>
      <p className={`${classes.padding} ${classes.desc}`}>{data.desc}</p>
      <div className={`${classes.bottomContainer} ${type} ${classes.padding}`}>
        <div>Reward: {data.reward}</div>
        <div>Time left: {data.time}</div>
      </div>
    </div>
  );
};

export default Card;
