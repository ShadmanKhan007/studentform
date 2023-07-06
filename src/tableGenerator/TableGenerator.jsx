import { useState } from 'react';
function TableGenerator() {
  const [number, setNumber] = useState('');
  
  const generateTable = () => {
    const table = [];
    for (let i = 1; i <= number; i++) {
      const row = [];
      for (let j = 1; j <= number; j++) {
        row.push(<td key={j}>{i * j}</td>);
      }
      table.push(<tr key={i}>{row}</tr>);
    }
    return table;
  };

  return (
    <div>
      <h1>Table Generation</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Enter a number"
      />
      {number && (
        <table>
          <tbody>
            {generateTable()}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TableGenerator;

