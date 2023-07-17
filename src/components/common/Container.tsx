import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1440px;
  height: 100%;
  margin: 0 auto;
  padding: 80px 20px 80px;
  @media (max-width: 997px) {
    padding: 80px 40px 80px;
  }
  @media (max-width: 768px) {
    padding: 80px 20px 80px;
  }
`;
