function sortTable(columnIndex) {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("myTable");
  switching = true;
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("td")[columnIndex];
      y = rows[i + 1].getElementsByTagName("td")[columnIndex];
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

window.addEventListener("DOMContentLoaded", (event) => {
  sortTable(0);
});

var animeRows = document.querySelectorAll('.anime-row');
animeRows.forEach(function(row) {
  row.addEventListener('click', function() {
    var seasonRow = row.nextElementSibling;
    seasonRow.style.display = (seasonRow.style.display === 'none') ? 'table-row' : 'none';
  });
});