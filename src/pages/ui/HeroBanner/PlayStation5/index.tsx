import styled from '@emotion/styled';

import { BREAKPOINTS } from '@/shared/assets/styled/breakPoints';
import { FlexBetween } from '@/shared/assets/styled/CommonStyled';

const Wrapper = styled(FlexBetween)`
  position: relative;
  width: 720px;
  height: 328px;
  background: #fff;
  @media (max-width: ${BREAKPOINTS.mobile}) {
    width: 100vw;
    height: 424px;
    position: static;
    width: 100%;
    flex-direction: column;
    justify-content: center;
  }
`;
const Playstation5TextBox = styled.div`
  position: absolute;
  width: 338px;
  height: 128px;
  left: 330px;
  cursor: default;
  @media (max-width: ${BREAKPOINTS.mobile}) {
    width: 90%;
    position: static;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const TitleText = styled.div`
  font-size: 49px;
  font-weight: 500;
  color: #000;
  @media (max-width: ${BREAKPOINTS.mobile}) {
    margin: 10px 0;
    font-size: 40px;
    font-weight: 500;
  }
`;
const SubText = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  color: rgba(144, 144, 144);
`;

const Playstation5Img = styled.img`
  width: 360px;
  @media (max-width: ${BREAKPOINTS.mobile}) {
    display: none;
  }
`;
const MobilePlaystation5Img = styled.img`
  display: none;
  @media (max-width: ${BREAKPOINTS.mobile}) {
    display: block;
    width: 200px;
  }
`;

const PlayStation5 = () => {
  return (
    <Wrapper>
      <Playstation5Img src="img/HeroBanner/PlayStation5.webp" alt="PlayStation5" />
      <MobilePlaystation5Img src="img/mobile/PlayStation5.webp" alt="PlayStation5" />
      <Playstation5TextBox>
        <TitleText>Playstation 5</TitleText>
        <SubText>
          Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your
          PlayStation experience.
        </SubText>
      </Playstation5TextBox>
    </Wrapper>
  );
};

export default PlayStation5;
