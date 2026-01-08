import { FacebookSVG, InstagramSVG, TiktokSVG, TwitterSVG } from '@/shared/assets/SVGicons';
import { LogoSVG } from '@/shared/assets/SVGicons';
import * as S from '@/shared/layout/Footer/Footer.styled';

const Footer = () => {
  return (
    <S.Wrapper>
      <S.TotalBox>
        <S.TextBox>
          <S.Box1>
            <S.Logo>{LogoSVG({ width: '96', height: '32', color: '#fff' })}</S.Logo>
            <S.MobileLogo>{LogoSVG({ width: '54', height: '18', color: '#fff' })}</S.MobileLogo>
            <S.SText>
              We are a residential interior design firm located in Portland. Our boutique-studio
              offers more than
            </S.SText>
          </S.Box1>
          <S.Box2>
            <S.STitle>Services</S.STitle>
            <S.SText>Bonus program</S.SText>
            <S.SText>Gift cards</S.SText>
            <S.SText>Credit and payment</S.SText>
            <S.SText>Service contracts</S.SText>
            <S.SText>Non-cash account</S.SText>
            <S.SText>Payment</S.SText>
          </S.Box2>
          <S.Box3>
            <S.STitle>Assistance to the buyer</S.STitle>
            <S.SText>Find an order</S.SText>
            <S.SText>Terms of delivery</S.SText>
            <S.SText>Exchange and return of goods</S.SText>
            <S.SText>Guarantee</S.SText>
            <S.SText>Frequently asked questions</S.SText>
            <S.SText>Terms of use of the site</S.SText>
          </S.Box3>
        </S.TextBox>
        <S.SnsBox>
          <S.SnsLogo>{TwitterSVG({ size: '16', color: '#fff' })}</S.SnsLogo>
          <S.SnsLogo>{FacebookSVG({ size: '16', color: '#fff' })}</S.SnsLogo>
          <S.SnsLogo>{TiktokSVG({ size: '16', color: '#fff' })}</S.SnsLogo>
          <S.SnsLogo>{InstagramSVG({ size: '16', color: '#fff', color2: '#000' })}</S.SnsLogo>
        </S.SnsBox>
      </S.TotalBox>
    </S.Wrapper>
  );
};

export default Footer;
