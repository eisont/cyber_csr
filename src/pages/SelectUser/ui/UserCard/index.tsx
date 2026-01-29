import styled from '@emotion/styled';

import { useNavigate } from 'react-router-dom';

import { SERVICE_URLS } from '@/shared/api/endpoints';
import { useLoginMutation } from '@/shared/hooks';
import type { UserType } from '@/shared/types';

const Wrapper = styled.div`
  display: inline-block;
  position: relative;

  &:hover .hiddenBox {
    opacity: 1;
    cursor: pointer;
  }
`;
const Img = styled.img`
  width: 150px;
  height: 150px;
`;
const HiddenBox = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 10%;
  position: absolute;
  top: 0;

  background: rgb(0, 0, 0, 0.5);
  color: #fff;
  font-size: 30px;
  border-radius: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s;
  opacity: 0;
  transition: opacity 0.3s ease;
  text-decoration: none;
`;

const UserCard = ({ image, username, password }: Partial<UserType>) => {
  const loginMutation = useLoginMutation();
  const navigate = useNavigate();

  const handleSelectorUser = () => {
    if (!username || !password) return;

    loginMutation.mutate(
      {
        method: 'post',
        url: SERVICE_URLS.AUTH.LOGIN,
        data: {
          username,
          password,
          expiresInMins: 30,
        },
      },
      {
        onSuccess: () => {
          navigate(`/${username}`);
        },
      },
    );
  };

  return (
    <Wrapper>
      <Img src={image} />
      <HiddenBox onClick={() => handleSelectorUser()} className="hiddenBox">
        {username}
      </HiddenBox>
    </Wrapper>
  );
};

export default UserCard;
