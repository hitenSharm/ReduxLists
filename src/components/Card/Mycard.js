import { Card } from "antd";
import React from "react";
import { FallingLines } from "react-loader-spinner";
import { useSelector } from "react-redux";

const { Meta } = Card;

export const Mycard = (props) => {
  //console.log(props);
  const emailID=useSelector((state)=>state.cardUpdater.email);
  const first_name=useSelector((state)=>state.cardUpdater.first_name);
  const last_name=useSelector((state)=>state.cardUpdater.last_name);
  const avatar=useSelector((state)=>state.cardUpdater.avatar);
  const initState=useSelector((state)=>state.cardUpdater.initState);
  const loadingState=useSelector((state)=>state.cardUpdater.loadingState);
  if(initState){
    return (
      <>
       <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <img
            alt="User Info"
            src={
              avatar
            }
          />
        }
      >
        <Meta
          title={`${first_name} ${last_name}`}
          description={emailID}
        />
      </Card>
      </>
    )
  }
  return (
    <>
    {
      loadingState ? (<><FallingLines
        color="#4fa94d"
        width="100"
        visible={true}
        ariaLabel='falling-lines-loading'
      /></>) : (
        <>
         <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <img
            alt="User Info"
            src={
              avatar
            }
          />
        }
      >
        <Meta
          title={`${first_name} ${last_name}`}
          description={emailID}
        />
      </Card>
        </>
      )
    }
    </>
  );
};
