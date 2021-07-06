import React, { ReactNode } from 'react';
import { groupBy, orderBy } from 'lodash';
import { TableProps, TableHeader } from './TableProps';

const groupRows = (headers: TableHeader[], data: Array<any>, groupByField: string, formatRow?: Function): ReactNode => {
  let indexedValue = groupBy(data, groupByField);

  let sortedKeys = orderBy(Object.keys(indexedValue), [], ['desc']);
  console.log(sortedKeys);
  return sortedKeys.map(key => {
    let value = indexedValue[key];
    let rows = value.map((row, index) => {
      let cells = headers.map(header => (
        <td key={header.columnKey}>{row[header.columnKey]}</td>
      ));
      return (
        <tr key={`${key}-${index}`}>{cells}</tr>
      );
    });
    return (
      <>
        <tr key={`${key}`}><td colSpan={headers.length}>{formatRow ? formatRow(key) : key}</td></tr>
        {rows}
      </>
    );
  });
};

const Table = (props: TableProps) => {
  console.log('table');
  return (
    <table className='table table-bordered'>
      <thead>
        <tr>
          {
            props.headers.map((header: TableHeader) => (
              <th key={header.displayText}>{header.displayText}</th>
            ))
          }
        </tr>
      </thead>
      <tbody>
        {
          props.aggregateBy ? 
            groupRows(props.headers, props.data, props.aggregateBy, props.formatKey)
          :
            props.data.map((row, index) => {
              let cells = props.headers.map(header => (
                <td key={header.columnKey}>{row[header.columnKey]}</td>
              ))
              return (
                <tr key={index}>{cells}</tr>
              )
            })
        }
      </tbody>
    </table>
  );
};

export default Table;