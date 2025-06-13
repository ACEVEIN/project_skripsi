// Call the dataTables jQuery plugin
$(document).ready(function() {
  $('#dataTable').DataTable();
});

$(document).ready(function() {
  $('#dataTable2').DataTable({
    scrollX: true,
  });
});

$(document).ready(function() {
  $('#dataTable3').DataTable({
    scrollX: true,
    layout: {
      topStart: {
          buttons: ['copy', 'excel', 'pdf', 'colvis'],
          pageLength: {
                menu: [5, 10, 25, 50]
            }
      }
    }
    
    
  });
});
