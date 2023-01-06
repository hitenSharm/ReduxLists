import React from "react";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import { updateCard } from "../../actions";

export const Userbutton = (props) => {
  const dispatch = useDispatch();

  return (
    <>
      <Button
        type="primary"
        style={{
          margin: "10px",
        }}
        onClick={() => {
          dispatch(updateCard(props.id));
        }}
      >
        {props.id}
      </Button>
    </>
  );
};
