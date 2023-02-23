import LogoSandra from "Components/LogoSandra/LogoSandra";
import { BsSuitHeartFill } from 'react-icons/bs';
import {
  Wrapper,
  NameSeason,
  NameUser,
  WrapperHeart,
  DateSeason
} from './CardUser.styled';
const CardUser = ({ item }) => {
  if (item === '') {
    return(null)
  };

  const HasSixTrainees = () => {
    return (
      <>
        <WrapperHeart>
          <BsSuitHeartFill size={45} color="#e6a3aa" style={{margin: '6px'}}/>
          <BsSuitHeartFill size={45} color="#e6a3aa" style={{margin: '6px'}}/>
          <BsSuitHeartFill size={45} color="#e6a3aa" style={{ margin: '6px' }} />
          </WrapperHeart>
        <WrapperHeart>
          <BsSuitHeartFill size={45} color="#e6a3aa" style={{margin: '6px'}}/>
          <BsSuitHeartFill size={45} color="#e6a3aa" style={{margin: '6px'}}/>
          <BsSuitHeartFill size={45} color="#e6a3aa" style={{margin: '6px'}}/>
        </WrapperHeart>
      </>
    )
  }

  return (
    <Wrapper>
      <LogoSandra/>
      <NameSeason>Абонемент "Сімейний" на "20" тренувань</NameSeason>
      <NameUser><p>{item[0].info[0].name}</p></NameUser>
      <HasSixTrainees/>
      <DateSeason>
        Тут термін дії
      </DateSeason>
    </Wrapper>
  )
};

export default CardUser;