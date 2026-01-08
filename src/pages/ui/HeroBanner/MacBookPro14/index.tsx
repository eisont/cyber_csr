import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { productIdSlice } from '@/app/store';
import { BREAKPOINTS } from '@/shared/assets/styled/breakPoints';
import { FlexBetween } from '@/shared/assets/styled/CommonStyled';

const Wrapper = styled(FlexBetween)`
  width: 720px;
  height: 600px;
  background: #ededed;
  @media (max-width: ${BREAKPOINTS.mobile}) {
    width: 100vw;
    height: 504px;
    flex-direction: column;
    justify-content: center;
  }
`;
const MacBookPro14TextBox = styled.div`
  margin: 0 0 0 50px;
  width: 341px;
  height: 272px;
  cursor: default;
  @media (max-width: ${BREAKPOINTS.mobile}) {
    margin: 0;
    width: 90%;
    height: 200px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`;

const TitleText = styled.div`
  font-size: 64px;
  font-weight: 100;
  line-height: 64px;

  color: #000;
  @media (max-width: ${BREAKPOINTS.mobile}) {
    font-size: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const BoldTitle = styled.span`
  font-weight: 600;
  @media (max-width: ${BREAKPOINTS.mobile}) {
    margin: 0 10px;
  }
`;
const SubText = styled.div`
  font-size: 14px;
  line-height: 24px;
  color: #909090;
  @media (max-width: ${BREAKPOINTS.mobile}) {
    text-align: center;
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

  border: 1px solid #000;
  background: none;
  color: #000;
  border-radius: 6px;

  &:hover {
    background: rgba(100, 100, 100, 0.2);
    cursor: pointer;
  }

  @media (max-width: ${BREAKPOINTS.mobile}) {
    height: 50px;
  }
`;

const MacBookPro14Img = styled.img`
  width: 292px;
  @media (max-width: ${BREAKPOINTS.mobile}) {
    display: none;
  }
`;
const MobileMacBookPro14Img = styled.img`
  display: none;
  @media (max-width: ${BREAKPOINTS.mobile}) {
    width: 330px;
    display: block;
  }
`;

const MacBookPro14 = () => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <MobileMacBookPro14Img src="img/mobile/MacBookPro14.webp" alt="MacBookPro14" />
      <MacBookPro14TextBox>
        <TitleText>
          Macbook<BoldTitle> Pro</BoldTitle> 14
        </TitleText>
        <SubText>
          The new 14‑inch MacBook Air makes room for more of what you love with a spacious Liquid
          Retina display.
        </SubText>
        <LinkSt
          to="explore"
          onClick={() => dispatch(productIdSlice.actions.getProductId('laptops'))}
        >
          <Button>Shop Now</Button>
        </LinkSt>
      </MacBookPro14TextBox>
      <MacBookPro14Img src="img/HeroBanner/MacBookPro14.webp" alt="MacBookPro14" />
    </Wrapper>
  );
};

export default MacBookPro14;
