import styled from '@emotion/styled';

export const Wrapper = styled.div`
  max-width: 1080px;
  margin: 40px auto;
  padding: 24px;
`;

export const Grid = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr 2fr; /* 좌:프로필 / 우:정보 */
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.section`
  background: #fff;
  border: 1px solid #eee;
  border-radius: 12px;
  padding: 16px 18px;
`;

export const Title = styled.h3`
  font-size: 18px;
  margin: 0 0 12px;
  font-weight: 700;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 140px 1fr;
  gap: 8px;
  padding: 6px 0;
`;

export const Label = styled.span`
  color: #888;
`;

export const Value = styled.span`
  color: #222;
  word-break: break-all;
`;

export const Badge = styled.span`
  margin-left: 8px;
  padding: 2px 8px;
  font-size: 12px;
  border-radius: 999px;
  background: #e8f0ff;
  color: #1957ff;
  font-weight: 600;
`;

export const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
`;

export const Stack = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`;

export const NavButtons = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 16px;
`;

export const Button = styled.div`
  padding: 8px 16px;
  border-radius: 6px;
  background: #007bff;
  color: #fff;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  transition: background 0.2s;

  &:hover {
    background: #0056b3;
  }
`;
