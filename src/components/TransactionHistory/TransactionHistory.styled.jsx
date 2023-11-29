import styled from 'styled-components';

export const Table = styled.table`
  width: 70%;
  box-shadow: 0.06rem 0.06rem 0.06rem #babecc;
`;

export const Thead = styled.thead`
  font-size: 2rem;
  text-transform: uppercase;

  tr {
    background-color: #b8e8b8;
  }
`;

export const Tr = styled.tr`
  :hover {
    background-color: rgb(115, 120, 175);
    box-shadow: #0e1119;
    color: #ffffff;
    text-shadow: #400075;
  }
`;

export const Th = styled.th`
  padding: 0.5rem 0;
  text-align: left;
  padding-left: 10px;
`;

export const Tb = styled.tbody`
  font-size: 1rem;

  tr:nth-child(odd) {
    background-color: #f5f5f5;
  }
`;

export const Td = styled.td`
  border-right: 0.125rem solid #e9edff;
  padding-left: 10px;

  :hover {
    color: #400075;
    text-shadow: 0.0625rem 0.0625rem 0.0625rem #fff;
    box-shadow: rgb(115, 120, 175);
  }
`;
