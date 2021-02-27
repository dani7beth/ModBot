import styled from "styled-components";
import { MessageLog } from "../Component/MessageLog.js";
import Script from "../script.js";

export const Home = () => {
  const msgLog = [];
  const script = new Script(msgLog);
  script.handler();
  // const renderLog = () =>{
  //   return(
  //     msgLog.map((item)=><p>{item}</p>)
  //   )
  // }
 
  return (
    <>
      <h1>AutoMod Bot</h1>
      <Container>
        <div>
          <h3>Control Panel</h3>
          <button onClick={() => script.connection()}>Start</button>
          <button onClick={() => script.disconnect()}>Stop</button>
        </div>
        <div>
          <h3>Log</h3>
          <p>{script.handleConnect()}</p>
        </div>
      </Container>
    </>
  );
};
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 50px;
`;
