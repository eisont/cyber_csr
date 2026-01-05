import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { loginDataSlice } from '@/app/store';

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
const HiddenBox = styled(Link)`
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

const UserCard = (pr) => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Img src={pr.user.image} />
      <HiddenBox
        onClick={() =>
          dispatch(
            loginDataSlice.actions.setLoginData({
              username: pr.user.username,
              password: pr.user.password,
              expiresInMins: 30,
            }),
          )
        }
        className="hiddenBox"
      >
        {pr.user.username}
      </HiddenBox>
    </Wrapper>
  );
};

export default UserCard;
