import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { productIdSlice } from '@/app/store';
import { BREAKPOINTS } from '@/shared/assets/styled/breakPoints';
import { FlexBetween } from '@/shared/assets/styled/CommonStyled';

const Wrapper = styled(FlexBetween)`
  width: 1120px;
  height: 632px;
  @media (max-width: ${BREAKPOINTS.mobile}) {
    background: #211c24;
    width: 100vw;
    flex-direction: column;
  }
`;
const Iphone13ProTextBox = styled.div`
  cursor: default;
  @media (max-width: ${BREAKPOINTS.mobile}) {
    margin: 30px 0;
    width: 80%;
    height: 260px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
  }
`;

const HeadText = styled.div`
  font-size: 25px;
  color: rgba(100, 100, 100, 0.6);
  @media (max-width: ${BREAKPOINTS.mobile}) {
    font-size: 18px;
    font-weight: 500;
  }
`;
const TitleText = styled.div`
  font-size: 96px;
  font-weight: 600;
  color: #fff;
  @media (max-width: ${BREAKPOINTS.mobile}) {
    font-size: 70px;
    line-height: 70px;
  }
`;
const SubText = styled.div`
  font-size: 18px;
  color: rgba(100, 100, 100, 0.6);
  @media (max-width: ${BREAKPOINTS.mobile}) {
    font-size: 14px;
  }
`;
const LinkSt = styled(Link)`
  outline: none;
  text-decoration: none;
  color: #fff;
`;
const Button = styled.button`
  margin: 20px 0 0 0;
  width: 191px;
  height: 56px;

  border: 1px solid #fff;
  background: none;
  color: #fff;
  border-radius: 6px;

  &:hover {
    cursor: pointer;
    background: rgba(100, 100, 100, 0.4);
  }
  @media (max-width: ${BREAKPOINTS.mobile}) {
    margin: 10px 0 0 0;
    width: 171px;
    height: 46px;
  }
`;

const Iphone13ProImg = styled.img`
  width: 406px;
  @media (max-width: ${BREAKPOINTS.mobile}) {
    display: none;
  }
`;
const MobileIphone13ProImg = styled.img`
  display: none;
  @media (max-width: ${BREAKPOINTS.mobile}) {
    display: block;
    width: 343px;
  }
`;

const Iphone13Pro = () => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Iphone13ProTextBox>
        <HeadText>Pro.Beyond.</HeadText>
        <TitleText>
          <span style={{ fontWeight: '100' }}>IPhone 13</span> Pro
        </TitleText>
        <SubText>Created to change everything for the better. For everyone</SubText>
        <LinkSt
          to="explore"
          onClick={() => dispatch(productIdSlice.actions.getProductId('smartphones'))}
        >
          <Button>Shop Now</Button>
        </LinkSt>
      </Iphone13ProTextBox>
      <Iphone13ProImg src="img/HeroBanner/Iphone14pro.webp" alt="Iphone14pro" />
      <MobileIphone13ProImg src="img/mobile/Iphone14pro.webp" alt="Iphone14pro" />
    </Wrapper>
  );
};

export default Iphone13Pro;
