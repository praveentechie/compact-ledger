const LocalStorage = require('../utils/LocalStorage');
const collection = new LocalStorage();
const columns = ['entryType', 'dateTime', 'amount'];

function addNewTransaction() {
  console.log('add');
  // TODO: set current date by default
  console.log(document.getElementById('dateTime').value = new Date().toLocaleString());

  document.getElementById('transactionDetails').classList.toggle('hide');
  document.getElementById('transactionList').classList.toggle('expanded');
}

function saveTransaction() {
  let entryType;
  document.getElementsByName('entryType').forEach(element => {
    if (element.checked) {
      entryType = element.value;
      return;
    }  
  });
  let dateTime = document.getElementById('dateTime').value;
  let amount = document.getElementById('amount').value;

  collection.insert({entryType, dateTime, amount});
  saveSuccess();
  renderTable();
}

function renderTable() {
  console.log(collection.getAll());
  let tableInString = '<table><tr><th>EntryType</th><th>Date</th><th>Amount</th></tr>';
  collection.getAll().forEach(row => {
    console.log('row', row);
    tableInString += '<tr>';
    columns.forEach(cell => {
      tableInString += `<td>${row[cell]}</td>`;
    });
    tableInString += '</tr>';
  });
  tableInString += '</table>';
  console.log(tableInString);
  document.getElementById('tableContainer').innerHTML = tableInString;
}

function saveSuccess() {
  document.getElementById('transactionDetails').classList.toggle('hide');
  document.getElementById('transactionList').classList.toggle('expanded');
}

document.getElementById('newTransaction').addEventListener('click', addNewTransaction);
document.getElementById('saveTransaction').addEventListener('click', saveTransaction);
document.getElementById('cancelSave').addEventListener('click', saveSuccess);

renderTable();