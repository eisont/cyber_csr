import * as S from '@/pages/SelectUser/SelectUser.styled';
import UserCard from '@/pages/SelectUser/ui/UserCard';
import { SERVICE_URLS } from '@/shared/api/endpoints';
import { QUERY_KEYS } from '@/shared/query/key';
import { useFetchQuery } from '@/shared/query/useFetchQuery';
import type { UsersResponse } from '@/shared/types/response';

const SelectUser = () => {
  const { data } = useFetchQuery<UsersResponse>({
    queryKey: QUERY_KEYS.users.list,
    url: SERVICE_URLS.USERS.LIST,
  });
  const usersData = data?.users;

  return (
    <S.Wrapper>
      <S.Main>
        <S.Title>유저 선택</S.Title>
        <S.UsersBox>
          {usersData?.map((el) => (
            <UserCard key={el.id} {...el} />
          ))}
        </S.UsersBox>
      </S.Main>
    </S.Wrapper>
  );
};

export default SelectUser;
