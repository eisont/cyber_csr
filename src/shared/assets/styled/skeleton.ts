import styled from '@emotion/styled';

import { BREAKPOINTS } from '@/shared/assets/styled/breakPoints';

export const DumBox = styled.div`
  width: 100%;
  height: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 2.5em;

  background: rgb(0, 0, 0, 0.2);
  border-radius: 10px;
  animation: pulse 1.5s infinite ease-in-out;
`;

type Props = { width: string; height: string };

export const DumImg = styled.div`
  width: ${(pr: Props) => pr.width};
  height: ${(pr: Props) => pr.height};
  background: rgb(0, 0, 0, 0.3);
  border-radius: 10px;
  animation: pulse 1.5s infinite ease-in-out;

  @media (max-width: ${BREAKPOINTS.mobile}) {
    width: 104px;
    height: 104px;
  }
`;
export const DumText = styled.div`
  width: ${(pr: Props) => pr.width};
  height: ${(pr: Props) => pr.height};
  background: rgb(0, 0, 0, 0.3);
  border-radius: 10px;
  animation: pulse 1.5s infinite ease-in-out;

  @media (max-width: ${BREAKPOINTS.mobile}) {
    width: 104px;
    height: 10px;
  }
`;
