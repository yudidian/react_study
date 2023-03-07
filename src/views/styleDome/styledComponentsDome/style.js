import styled from "styled-components";


export const VoteBox = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ec4848;

  .parent {
    width: 300px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1df593;

    .son {
      width: 200px;
      height: 200px;
      background-color: aquamarine;
    }
  }
`
export const SonColor = styled.span`
  color: ${props => {
    return props.num % 2 === 0 ? "#e79595": "#1df593"
  }};
  font-size: 20px;
  font-weight: 900;
`
