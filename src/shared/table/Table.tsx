import React from 'react';
import { TableProps, TableHeader } from './TableProps';

const Table = (props: TableProps) => {
  return (
    <table>
      <tr>
        {
          props.headers.map((header: TableHeader) => (
            <th>{header.displayText}</th>
          ))
        }
      </tr>
      {
        props.data.map(row => {
          let cells = props.headers.map(header => (
            <td>{row[header.columnKey]}</td>
          ))
          return (
            <tr>{cells}</tr>
          )
        })
      }
    </table>
  );
};

export default Table;