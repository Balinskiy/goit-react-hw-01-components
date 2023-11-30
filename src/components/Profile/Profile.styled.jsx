import styled from 'styled-components';

export const Profilediv = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  margin: 20px;
  background-color: #e5d3d3;
`;

export const Description = styled.div`
  width: 300px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: white;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  max-width: 100px;
  padding-top: 100px;
`;

export const Name = styled.p`
  font-size: 36px;
`;

export const Tag = styled.p`
  font-size: medium;
`;

export const Location = styled.p`
  font-size: medium;
`;

export const StatsList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StatsItem = styled.li`
  text-align: center;
`;

export const Label = styled.span`
  font-size: 26px;
`;

export const Quantity = styled.span`
  display: flex;
  justify-content: center;
  font-size: 24px;
  font-weight: 700;
`;
