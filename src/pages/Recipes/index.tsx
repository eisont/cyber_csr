import { useState } from 'react';

import * as S from '@/pages/Recipes/Recipes.styled';
import Modal from '@/pages/Recipes/ui/Modal';
import RecipesItem from '@/pages/Recipes/ui/RecipesItem';
import { useFetch } from '@/shared/hooks';
import { RecipeType } from '@/types/response/recipe.types';

const Recipes = () => {
  const [selectId, setSelectId] = useState<number | null>();

  const [RecipesData] = useFetch<RecipeType[]>({
    resource: 'recipes',
    query: { limit: 50 },
    enabled: true,
  });

  const selectedRecipe = selectId ? (RecipesData?.find((el) => el.id === selectId) ?? null) : null;

  return (
    <S.Wrapper>
      <S.ProductsBox>
        {RecipesData?.map((el) => (
          <RecipesItem key={el.id} {...el} setSelectId={setSelectId} />
        ))}
        {selectedRecipe && <Modal data={selectedRecipe} onClose={() => setSelectId(null)} />}
      </S.ProductsBox>
    </S.Wrapper>
  );
};

export default Recipes;
