export interface TableHeader {
  columnKey: string;
  displayText: string;
}

export interface TableProps {
  // ### typescript: array type declaration, alternate way
  headers: TableHeader[],
  data: Array<any>
}
