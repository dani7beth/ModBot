import styled from 'styled-components';
import Script from '../script.js';

export const Home = () =>{
  const script = new Script ();
  script.handler();

  const renderLog = () =>{
    return script.msgLog.map((item) =>{
      return(
        <p>{item}</p>
      )
    })
  }
  return(
    <>
    <h1>AutoMod Bot</h1>
    <Container>
      <div>
        <h3>Control Panel</h3>
        <button onClick={() => script.connection()}>Start</button>
        <button onClick={()=> script.disconnect()}>Stop</button>
      </div>
      <div>
        <h3>Log</h3>
        {renderLog()}
      </div>
    </Container>
    </>
  )
}
export const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 50px;
`;