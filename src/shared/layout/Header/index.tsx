import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import { searchSlice } from '@/app/store';
import { BagSVG, CloseSVG, LogoSVG, MenuSVG, SearchSVG } from '@/shared/assets/SVGicons';
import { useMeQuery } from '@/shared/hooks';
import * as S from '@/shared/layout/Header/Header.styled';

const Header = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const pathname = location.pathname;
  const { data: userInfo } = useMeQuery();

  return (
    <S.Wrapper>
      <S.TotalBox>
        <S.FlexBox>
          <S.Icon to="/">{LogoSVG({ width: '96', height: '32', color: '#000' })}</S.Icon>
          <S.MobileIcon to="/">
            {LogoSVG({ width: '54', height: '18', color: '#000' })}
          </S.MobileIcon>

          {pathname === '/search' && (
            <S.InputBox>
              <S.SearchIcon>
                <S.NoLinkIcon>{SearchSVG({ size: '24', color: '#989898' })}</S.NoLinkIcon>
              </S.SearchIcon>
              <S.Input
                placeholder="Search"
                onChange={(e) => dispatch(searchSlice.actions.setSearchData(e.target.value))}
              />
            </S.InputBox>
          )}
        </S.FlexBox>

        <S.IconBox>
          {pathname === '/search' ? (
            <S.Icon to={'/'}>{CloseSVG({ size: '34', color: '#191919' })}</S.Icon>
          ) : (
            <S.Icon to={'/search'}>{SearchSVG({ size: '32', color: '#191919' })}</S.Icon>
          )}

          {!userInfo ? (
            <S.Bt to={'/selectUser'}>유저 선택</S.Bt>
          ) : (
            <>
              <Link to={'/selectUser'}>
                <S.Img src={userInfo.image} alt={userInfo.username} />
              </Link>

              <S.Icon to={`/${userInfo.username}`}>
                {BagSVG({ size: '32', color: '#191919' })}
              </S.Icon>
            </>
          )}
          <S.NoLinkMobileIcon>{MenuSVG({ size: '20', color: '#191919' })}</S.NoLinkMobileIcon>
        </S.IconBox>
      </S.TotalBox>
    </S.Wrapper>
  );
};

export default Header;
