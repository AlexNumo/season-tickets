import styled from "styled-components";
import BackImg2 from '../../icons/backIMG2.png';

const Wrapper = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  width: 336px;
  height: 475px;
  margin-left: auto;
  margin-right: auto;
  /* padding: 12px; */
  /* background-color: rgba(253, 239, 241, 1); */
  border: solid 1px  rgba(253, 239, 241, 1);
  border-radius: 22px;
  margin: 10px;
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
  background-image: url(${ BackImg2});
  background-size: contain;
  background-repeat: no-repeat;
`;

export {
  Wrapper
};