import LogoSandra from "Components/LogoSandra/LogoSandra";
import { BsSuitHeartFill } from 'react-icons/bs';
import {
  Wrapper,
  NameSeason,
  NameUser,
  WrapperHeart,
  WrapperBackIMG,
  DateSeason
} from './CardUser.styled';
const CardUser = ({ item }) => {
  if (item === '') {
    return(null)
  }
  return (
    <Wrapper>
      <LogoSandra/>
      <NameSeason>Абонемент "Сімейний" на "20" тренувань</NameSeason>
      <NameUser><p>{item[0].info[0].name}</p></NameUser>
      <WrapperHeart>
        <BsSuitHeartFill size={45} color="#e6a3aa" style={{margin: '6px'}}/>
        <BsSuitHeartFill size={45} color="#e6a3aa" style={{margin: '6px'}}/>
        <BsSuitHeartFill size={45} color="#e6a3aa" style={{margin: '6px'}}/>
        <BsSuitHeartFill size={45} color="#e6a3aa" style={{margin: '6px'}}/>
        <BsSuitHeartFill size={45} color="#e6a3aa" style={{margin: '6px'}}/>
        <BsSuitHeartFill size={45} color="#e6a3aa" style={{margin: '6px'}}/>
      </WrapperHeart>
      <WrapperHeart>
        <BsSuitHeartFill size={45} color="#e6a3aa" style={{margin: '6px'}}/>
        <BsSuitHeartFill size={45} color="#e6a3aa" style={{margin: '6px'}}/>
        <BsSuitHeartFill size={45} color="#e6a3aa" style={{margin: '6px'}}/>
        <BsSuitHeartFill size={45} color="#e6a3aa" style={{margin: '6px'}}/>
        <BsSuitHeartFill size={45} color="#e6a3aa" style={{margin: '6px'}}/>
        <BsSuitHeartFill size={45} color="#e6a3aa" style={{margin: '6px'}}/>
      </WrapperHeart>
      <WrapperHeart>
        <BsSuitHeartFill size={45} color="#e6a3aa" style={{margin: '6px'}}/>
        <BsSuitHeartFill size={45} color="#e6a3aa" style={{margin: '6px'}}/>
        <BsSuitHeartFill size={45} color="#e6a3aa" style={{margin: '6px'}}/>
        <BsSuitHeartFill size={45} color="#e6a3aa" style={{margin: '6px'}}/>
        <BsSuitHeartFill size={45} color="#e6a3aa" style={{margin: '6px'}}/>
        <BsSuitHeartFill size={45} color="#e6a3aa" style={{margin: '6px'}}/>
      </WrapperHeart>
      <WrapperHeart>
        <BsSuitHeartFill size={45} color="#e6a3aa" style={{margin: '6px'}}/>
        <BsSuitHeartFill size={45} color="#e6a3aa" style={{margin: '6px'}}/>
        <BsSuitHeartFill size={45} color="#e6a3aa" style={{margin: '6px'}}/>
        <BsSuitHeartFill size={45} color="#e6a3aa" style={{margin: '6px'}}/>
        <BsSuitHeartFill size={45} color="#e6a3aa" style={{margin: '6px'}}/>
        <BsSuitHeartFill size={45} color="#e6a3aa" style={{margin: '6px'}}/>
      </WrapperHeart>
      <WrapperHeart>
        <BsSuitHeartFill size={45} color="#e6a3aa" style={{margin: '6px'}}/>
        <BsSuitHeartFill size={45} color="#e6a3aa" style={{margin: '6px'}}/>
        <BsSuitHeartFill size={45} color="#e6a3aa" style={{margin: '6px'}}/>
        <BsSuitHeartFill size={45} color="#e6a3aa" style={{margin: '6px'}}/>
        <BsSuitHeartFill size={45} color="#e6a3aa" style={{margin: '6px'}}/>
        <BsSuitHeartFill size={45} color="#e6a3aa" style={{margin: '6px'}}/>
      </WrapperHeart>
      <WrapperBackIMG>

      </WrapperBackIMG>
      <DateSeason>
        Тут термін дії
      </DateSeason>
    </Wrapper>
  )
};

export default CardUser;