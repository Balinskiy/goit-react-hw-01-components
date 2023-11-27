import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;

  margin: 0 auto;
`;

export const StatisticTitle = styled.h2`
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 20px;
`;

export const StatisticsList = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;

  padding: 0;
  margin: 0;
  list-style: none;
  justify-content: space-around;
  background-color: #6ae7bd;
`;
