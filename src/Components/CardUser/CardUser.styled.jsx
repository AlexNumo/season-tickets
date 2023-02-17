import styled from "styled-components";
// import BackImg from '../../icons/backIMG.jpeg';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-direction: column;
  align-items: center;
  width: 350px;
`;

const NameSeason = styled.p`
  font-family: 'Philosopher', sans-serif;
  font-weight: 300;
  font-size: 14px;
  color: #000000;
  text-align: center;
`;

const NameUser = styled.div`
  font-family: 'Philosopher', sans-serif;
  font-weight: 300;
  font-size: 18px;
  color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 35px;
  background-color: rgba(248, 212, 216, 1);
`;

const WrapperHeart = styled.div`
  display: flex;
  flex-direction: row;
`;

const WrapperBackIMG = styled.div`
  /* 
  background-size: contain;
  background-repeat: no-repeat; */
  width: 100%;
  height: 145px;
  margin-left: 1px;
  margin-right: 1px;
`;

const DateSeason = styled.div`
  font-family: 'Philosopher', sans-serif;
  font-weight: 300;
  font-size: 18px;
  color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 35px;
  background-color: rgba(248, 212, 216, 1);
`;

export {
  Wrapper,
  NameSeason,
  NameUser,
  WrapperHeart,
  WrapperBackIMG,
  DateSeason
}