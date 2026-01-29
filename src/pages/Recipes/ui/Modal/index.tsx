import * as S from '@/pages/Recipes/ui/RecipesItem/RecipesItem.styled';
import { CloseSVG } from '@/shared/assets/SVGicons';
import type { RecipeItem } from '@/shared/types';

type ModalType = { data: Partial<RecipeItem>; onClose: () => void };

const Modal = (pr: ModalType) => {
  return (
    <S.Modal>
      <S.Icon onClick={() => pr.onClose()}>{CloseSVG({ size: '50px', color: '#000' })}</S.Icon>

      <S.FlexBox>
        <S.ModalImg src={pr?.data.image} alt="image" />
        <S.ColFlexBox>
          <S.MText style={{ fontSize: '35px' }}>요리 순서</S.MText>
          {pr.data.instructions?.map((el, i) => (
            <S.MText key={Number(new Date()) + el}>{`${i + 1}. ${el}`}</S.MText>
          ))}
        </S.ColFlexBox>
      </S.FlexBox>

      <S.MText style={{ fontSize: '35px' }}>재료 리스트</S.MText>
      <S.ListBox>
        {pr.data.ingredients?.map((el) => (
          <ul key={Number(new Date()) + el}>
            <li style={{ color: '#fff' }}>{el}</li>
          </ul>
        ))}
      </S.ListBox>
    </S.Modal>
  );
};

export default Modal;
