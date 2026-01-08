import styled from '@emotion/styled';

import { BREAKPOINTS } from '@/shared/assets/styled/breakPoints';
import { FlexCenter } from '@/shared/assets/styled/CommonStyled';

export const Wrapper = styled(FlexCenter)`
  position: relative;

  margin: 10px 0;
  width: 831px;
  height: 300px;

  background: #f6f6f6;
  border-radius: 10px;
  text-align: center;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    background: #aeaeae;
  }
`;

export const MainBox = styled.div`
  width: 800px;
  height: 300px;
  display: flex;
  align-items: center;
`;

export const Img = styled.img`
  height: 260px;
  transition: 0.2s;
  border-radius: 10px;
  &:hover {
    scale: 1.2;
  }
`;
export const RBox = styled.div`
  padding: 0 0 0 10px;
  height: 260px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: start;
`;

export const Name = styled.div`
  font-size: 30px;
  font-weight: 600;
  cursor: default;

  @media (max-width: ${BREAKPOINTS.mobile}) {
    font-size: 12px;
  }
`;
export const Text = styled.div``;

export const Modal = styled.div`
  position: fixed;
  width: 1200px;
  height: 60vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.8);
  z-index: 999;
`;
export const Icon = styled.div`
  position: absolute;
  right: 0;
  background: #fff;
  transition: 0.1s;
  &:hover {
    cursor: pointer;
    scale: 1.1;
    transform: rotate(90deg);
  }
`;
export const ModalImg = styled.img`
  height: 400px;
  border-radius: 10px;
`;
export const FlexBox = styled.div`
  display: flex;
  align-items: center;
`;
export const ColFlexBox = styled.div`
  margin: 0 0 0 20px;
  width: 730px;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const MText = styled.div`
  color: #fff;
  padding: 10px;
  font-size: 20px;
`;

export const ListBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
