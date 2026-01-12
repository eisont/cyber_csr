import { useState } from 'react';

import * as S from '@/pages/Recipes/Recipes.styled';
import Modal from '@/pages/Recipes/ui/Modal';
import RecipesItem from '@/pages/Recipes/ui/RecipesItem';
import { SERVICE_URLS } from '@/shared/api/endpoints';
import { QUERY_KEYS } from '@/shared/query/key';
import { useFetchQuery } from '@/shared/query/useFetchQuery';
import { RecipesType } from '@/types/response/recipe.types';

const Recipes = () => {
  const [selectId, setSelectId] = useState<number | null>();

  const { data } = useFetchQuery<RecipesType>({
    queryKey: QUERY_KEYS.recipes.list,
    url: SERVICE_URLS.RECIPES.LIST,
  });
  const RecipesData = data?.recipes ?? [];

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
