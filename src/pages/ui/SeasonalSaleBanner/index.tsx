import styled from '@emotion/styled';

import { BREAKPOINTS } from '@/shared/assets/styled/breakPoints';
import { FlexCenter } from '@/shared/assets/styled/CommonStyled';

const Wrapper = styled(FlexCenter)`
  width: 100%;
`;
const Background = styled(FlexCenter)`
  width: 90%;
  height: 447px;

  background-size: cover;
  background-repeat: no-repeat;
  background-image: url('img/HeroBanner/SeasonalSaleBanner.webp');

  @media (max-width: ${BREAKPOINTS.mobile}) {
    padding: 90px 0;
    height: auto;
    background: url('img/mobile/Banner.webp');
    background-size: cover;
    background-position: center center;
  }
`;
const Banner2TextBox = styled.div`
  text-align: center;
  cursor: default;

  @media (max-width: ${BREAKPOINTS.mobile}) {
    width: 70%;
  }
`;

const TitleText = styled.div`
  font-size: 72px;
  font-weight: 500;
  letter-spacing: -1px;
  color: #fff;

  @media (max-width: ${BREAKPOINTS.mobile}) {
    font-size: 50px;
    margin: 10px 0;
  }
`;
const SubText = styled.div`
  font-size: 16px;
  color: rgba(100, 100, 100, 0.4);

  @media (max-width: ${BREAKPOINTS.mobile}) {
    margin: 20px 0;
  }
`;
const Button = styled.button`
  margin: 20px 0 0 0;
  width: 191px;
  height: 56px;

  border: 1px solid #fff;
  background: none;
  font-size: 16px;
  color: #fff;
  border-radius: 6px;
  &:hover {
    background: rgba(100, 100, 100, 0.4);
    cursor: pointer;
  }
`;

const SeasonalSaleBanner = () => {
  return (
    <Wrapper>
      <Background>
        <Banner2TextBox>
          <TitleText>
            <span style={{ fontWeight: '100' }}>Big Summer </span> Sale
          </TitleText>
          <SubText>
            Comfort and hunger live together in the life of Leo. He lives in harmony. A life of
            consequence.
          </SubText>
          <Button>Shop Now</Button>
        </Banner2TextBox>
      </Background>
    </Wrapper>
  );
};

export default SeasonalSaleBanner;
