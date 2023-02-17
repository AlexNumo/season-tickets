import styled from "styled-components";

const LogoPosition = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const LogoStudio = styled.p`
  font-family: 'Philosopher', sans-serif;
  font-weight: 700;
  font-size: 35px;
  color: #000000;
`;

const Sandra = styled.p`
  font-family: 'Philosopher', sans-serif;
  /* font-family: 'Signika Negative', sans-serif; */
  font-weight: 300;
  font-size: 18px;
  margin-top: -8px;
  color: #000000;
`;

export {
  LogoPosition,
  LogoStudio,
  Sandra
}