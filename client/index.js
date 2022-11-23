document.addEventListener('DOMContentLoaded', ()=> {
  loadHTMLTable([])
})


function loadHTMLTable(data) {
  const table = document.querySelector('table tbody')
  
  if(data.length === 0) {
    table.innerHTML = "<tr><td class='no-data' style='text-align:center' colspan='5'>No Data</td></tr>"
  }
}

