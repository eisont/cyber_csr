import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';

import { loginDataSlice } from '@/app/store';
import { UserResponse } from '@/types/response';

const Wrapper = styled.div`
  display: inline-block;
  position: relative;

  &:hover .hiddenBox {
    opacity: 1;
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

const UserCard = ({ image, username, password }: Partial<UserResponse>) => {
  const dispatch = useDispatch();
  const handleSelectorUser = () => {
    dispatch(
      loginDataSlice.actions.setLoginData({
        username: username,
        password: password,
        expiresInMins: 30,
      }),
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
