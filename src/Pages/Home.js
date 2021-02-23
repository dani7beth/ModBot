import styled from 'styled-components';
import Script from '../script.js';

export const Home = () =>{
  const script = new Script ();

  return(
    <>
    <h1>AutoMod Bot</h1>
    <Container>
      <div>
        <h3>Control Panel</h3>
        <button>Start</button>
        <button>Stop</button>
      </div>
      <div>
        <h3>Log</h3>
        <p>card</p>
      </div>
    </Container>
    </>
  )
}
export const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`;