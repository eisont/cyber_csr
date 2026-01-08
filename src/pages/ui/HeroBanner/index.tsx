import styled from '@emotion/styled';

import AirPodMax from '@/pages/ui/HeroBanner/AirPodMax';
import Iphone13Pro from '@/pages/ui/HeroBanner/Iphone13Pro';
import MacBookPro14 from '@/pages/ui/HeroBanner/MacBookPro14';
import PlayStation5 from '@/pages/ui/HeroBanner/PlayStation5';
import VisionPro from '@/pages/ui/HeroBanner/VisionPro';
import { BREAKPOINTS } from '@/shared/assets/styled/breakPoints';
import { FlexBetween, FlexColBetween } from '@/shared/assets/styled/CommonStyled';

const Wrapper = styled(FlexColBetween)`
  height: 1232px;
  @media (max-width: ${BREAKPOINTS.mobile}) {
    width: 100vw;
    height: auto;
  }
`;

const BannerBox = styled.div`
  width: 100%;
  height: 632px;
  display: flex;
  justify-content: center;
  background: #211c24;
  @media (max-width: ${BREAKPOINTS.mobile}) {
    display: none;
  }
`;

const SideBannerBox = styled(FlexBetween)`
  width: 1440px;
  height: 600px;

  @media (max-width: ${BREAKPOINTS.mobile}) {
    display: none;
  }
`;
const SmallBannerBox = styled(FlexColBetween)`
  width: 720px;
  height: 600px;

  @media (max-width: ${BREAKPOINTS.mobile}) {
    display: none;
  }
`;
const ToSmallBox = styled(FlexBetween)`
  @media (max-width: ${BREAKPOINTS.mobile}) {
    display: none;
  }
`;
const MobileBox = styled(FlexColBetween)`
  display: none;
  @media (max-width: ${BREAKPOINTS.mobile}) {
    display: block;
  }
`;

const HeroBanner = () => {
  return (
    <Wrapper>
      <BannerBox>
        <Iphone13Pro />
      </BannerBox>
      <SideBannerBox>
        <SmallBannerBox>
          <PlayStation5 />
          <ToSmallBox>
            <AirPodMax />
            <VisionPro />
          </ToSmallBox>
        </SmallBannerBox>
        <MacBookPro14 />
      </SideBannerBox>

      <MobileBox>
        <Iphone13Pro />
        <AirPodMax />
        <VisionPro />
        <PlayStation5 />
        <MacBookPro14 />
      </MobileBox>
    </Wrapper>
  );
};

export default HeroBanner;
