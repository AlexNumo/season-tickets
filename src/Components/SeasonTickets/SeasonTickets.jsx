import { useEffect, useState } from "react";
import { clientAPI } from 'service/axios.config';
import CardUser from '../CardUser/CardUser';
import {
  Wrapper
} from './SeasonTickets.styled';

const SeasonTickets = () => {
  const [dataTGUsers, setDataTGUsers] = useState('');
  const [inputTel, setInputTel] = useState('+380633576239');
  const [findTel, setFindTel] = useState('');

  useEffect(() => {
    if (dataTGUsers === '') {
      clientAPI.getDataALLUsers().then(result => {
        setDataTGUsers(result)
      })     
    }
  }, [dataTGUsers]);

  useEffect(() => {
    if (dataTGUsers !== '') {
      const finding = dataTGUsers.filter(arr => arr.id === inputTel);
      setFindTel(finding);
    }
  },[dataTGUsers, inputTel])
  

  return (
    <Wrapper>
      <p>Введіть свій номер телефону</p>
      <input type="text" onChange={e => {setInputTel(e.target.value)}} />
      <div>
        <CardUser item={findTel } />
      </div>
    </Wrapper>
  )
};

export default SeasonTickets;