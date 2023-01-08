var rows = prompt('How many rows for your multiplication table?');
var cols = prompt('How many columns for your multiplication table?');

if (rows == '' || rows == null) rows = 10;
if (cols == '' || cols == null) cols = 2;

createTable(rows, cols);

/* Create table
*  @author John Doe
*/

function createTable(ROWS, cols) {
  var j = 1;
  var table = "<table border='1' width='500' cellspacing='0' cellpadding='5'>";

  for (i = 1; i <= ROWS; i++) {
    table = table + '<tr>';
    while (j <= cols) {
      table = `${table}<td>${i * j}</td>`;
      j = j + 1;
    }
    table = table + '</tr>';
    j = 1;
  }

  table = table + '</table>';
  document.write(table);
}
