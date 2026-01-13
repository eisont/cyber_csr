import * as S from '@/pages/Recipes/ui/RecipesItem/RecipesItem.styled';
import { useIntersectionObserver } from '@/shared/hooks';
import { RecipeItem } from '@/shared/types/response';

type RecipesItemType = Partial<RecipeItem> & {
  setSelectId: (e: number) => void;
};

const RecipesItem = (pr: RecipesItemType) => {
  const { ref } = useIntersectionObserver();

  return (
    <S.Wrapper onClick={() => pr.setSelectId(Number(pr.id))}>
      <S.MainBox>
        <S.Img ref={ref} data-src={pr?.image} src={pr?.image} alt="image" />
        <S.RBox>
          <S.Name>{pr?.name}</S.Name>
          <S.Text>⭐️{pr.rating}</S.Text>
          <S.Text>조리시간: {pr.cookTimeMinutes}분</S.Text>
          <S.Text>준비시간: {pr.prepTimeMinutes}분</S.Text>
          <S.Text>{pr.servings}인분</S.Text>
          <S.Text>나라: {pr.cuisine}</S.Text>
          <S.Text>난이도: {pr.difficulty}</S.Text>
          <S.Text>{pr.caloriesPerServing}cal</S.Text>
        </S.RBox>
      </S.MainBox>
    </S.Wrapper>
  );
};

export default RecipesItem;
