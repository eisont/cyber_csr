import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100vw;
  height: calc(100vh - 88px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 40px;
`;
export const Bt = styled.div`
  padding: 15px;
  border: 1px solid gray;
  transition: 0.2s;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    background: rgb(0, 0, 0, 0.5);
    color: #fff;
    font-weight: 600;
  }
`;
export const UsersBox = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
