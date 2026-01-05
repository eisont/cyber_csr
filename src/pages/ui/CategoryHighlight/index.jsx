import { useDispatch } from 'react-redux';

import { productIdSlice } from '@/app/store';
import * as S from '@/pages/ui/CategoryHighlight/CategoryHighlight.styled';
import {
  BaseballOutlineSVG,
  CarSportsOutlineSVG,
  FastFoodOutlineSVG,
  LaptopSVG,
  ManOutlineSVG,
  WomanOutlineSVG,
} from '@/shared/assets/SVGicons';

const CategoryHighlight = () => {
  const dispatch = useDispatch();

  return (
    <S.Wrapper>
      <S.TotalBox>
        <S.MainBox>
          <S.Top>Browse By Explore</S.Top>
          <S.Categories>
            <S.ItemBox
              to="/Explore"
              onClick={() => dispatch(productIdSlice.actions.getProductId('vehicle'))}
            >
              <S.CategoryImg>{CarSportsOutlineSVG({ size: '48', color: '#000' })}</S.CategoryImg>
              <S.Title>Vehicle</S.Title>
            </S.ItemBox>
            <S.ItemBox
              to="/Explore"
              onClick={() => dispatch(productIdSlice.actions.getProductId('sports-accessories'))}
            >
              <S.CategoryImg>{BaseballOutlineSVG({ size: '48', color: '#000' })}</S.CategoryImg>
              <S.Title>Sports Accessories</S.Title>
            </S.ItemBox>
            <S.ItemBox
              to="/Explore"
              onClick={() => dispatch(productIdSlice.actions.getProductId('laptops'))}
            >
              <S.CategoryImg>{LaptopSVG({ size: '48', color: '#000' })}</S.CategoryImg>
              <S.Title>Laptops</S.Title>
            </S.ItemBox>
            <S.ItemBox
              to="/Explore"
              onClick={() => dispatch(productIdSlice.actions.getProductId('groceries'))}
            >
              <S.CategoryImg>{FastFoodOutlineSVG({ size: '48', color: '#000' })}</S.CategoryImg>
              <S.Title>Groceries</S.Title>
            </S.ItemBox>
            <S.ItemBox
              to="/Explore"
              onClick={() => dispatch(productIdSlice.actions.getProductId('mens-shirts'))}
            >
              <S.CategoryImg>{ManOutlineSVG({ size: '48', color: '#000' })}</S.CategoryImg>
              <S.Title>Mens Shirts</S.Title>
            </S.ItemBox>
            <S.ItemBox
              to="/Explore"
              onClick={() => dispatch(productIdSlice.actions.getProductId('womans-dresses'))}
            >
              <S.CategoryImg>{WomanOutlineSVG({ size: '48', color: '#000' })}</S.CategoryImg>
              <S.Title>Womens Dresses</S.Title>
            </S.ItemBox>
          </S.Categories>
        </S.MainBox>
      </S.TotalBox>
    </S.Wrapper>
  );
};

export default CategoryHighlight;
