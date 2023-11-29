import { Table, Thead, Tr, Th, Tb, Td } from './TransactionHistory.styled';

function TransactionHistory({ items }) {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </Tr>
      </Thead>
      <Tb>
        {items.map(({ id, type, amount, currency }) => (
          <Tr key={id}>
            <Td>{type}</Td>
            <Td>{amount}</Td>
            <Td>{currency}</Td>
          </Tr>
        ))}
      </Tb>
    </Table>
  );
}

export default TransactionHistory;
