import styled from '@emotion/styled';

import { BREAKPOINTS } from '@/shared/assets/styled/breakPoints';

const Wrapper = styled.div`
  width: 360px;
  height: 272px;
  display: flex;
  align-items: center;
  background: #353535;
  @media (max-width: ${BREAKPOINTS.mobile}) {
    width: 100vw;
    height: 393px;
    flex-direction: column;
    justify-content: center;
  }
`;

const VisionProImg = styled.img`
  width: 139px;
  @media (max-width: ${BREAKPOINTS.mobile}) {
    display: none;
  }
`;
const MobileVisionProImg = styled.img`
  width: 139px;
  display: none;
  @media (max-width: ${BREAKPOINTS.mobile}) {
    display: block;
    width: 326px;
  }
`;

const VisionProTextBox = styled.div`
  margin: 0 0 0 20px;
  width: 160px;
  cursor: default;
  @media (max-width: ${BREAKPOINTS.mobile}) {
    margin: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const TitleText = styled.div`
  width: 140px;
  font-size: 28px;
  font-weight: 500;
  color: #fff;
  @media (max-width: ${BREAKPOINTS.mobile}) {
    display: none;
  }
`;
const ThinTitle = styled.span`
  font-weight: 200;
  @media (max-width: ${BREAKPOINTS.mobile}) {
    margin: 0 10px 0 0;
  }
`;
const Mobile = styled(TitleText)`
  display: none;

  @media (max-width: ${BREAKPOINTS.mobile}) {
    width: 90%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
  }
`;
const SubText = styled.div`
  margin: 10px 0 0 0;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  color: rgba(144, 144, 144);
  @media (max-width: ${BREAKPOINTS.mobile}) {
    width: 80%;
    text-align: center;
  }
`;

const VisionPro = () => {
  return (
    <Wrapper>
      <VisionProImg src="img/HeroBanner/VisionPro.webp" alt="VisionPro" />
      <MobileVisionProImg src="img/mobile/VisionPro.webp" alt="VisionPro" />
      <VisionProTextBox>
        <TitleText>
          <ThinTitle>
            Apple <br />
            Vision
          </ThinTitle>{' '}
          Pro
        </TitleText>
        <Mobile>
          <ThinTitle>Apple Vision</ThinTitle>Pro
        </Mobile>
        <SubText>An immersive way to experience entertainment</SubText>
      </VisionProTextBox>
    </Wrapper>
  );
};

export default VisionPro;
