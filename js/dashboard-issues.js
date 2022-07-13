function myFunction() {
  // Declared my variables here
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // This actually to Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

// // My code to change the button order
let actionEl = document.getElementsByClassName("shutdown1");
let statusEl = document.getElementsByClassName("status");

// forEach loop to change the button order
let actionEl2 = Array.from(actionEl);
let statusEl2 = Array.from(statusEl)


for(let I =0; I < actionEl2.length; I++) {
  actionEl2[I].addEventListener('click', function(){
    if(actionEl2[I].innerText === 'shutdown') {
      actionEl2[I].innerText = "restart"
      statusEl2[I].innerText = "offline"
      statusEl2[I].style.backgroundColor = "#d8d8d8"
    
    }
    else if(actionEl2[I].innerText === 'maintenance') {
      actionEl2[I].innerText = "restart"
      statusEl2[I].innerText = "offline"
      statusEl2[I].style.backgroundColor = "#d8d8d8"
    
    }
 else {
  actionEl2[I].innerText = "shutdown"
  statusEl2[I].innerText = "online"
  statusEl2[I].style.backgroundColor = "#09a118"
}
  }
  ) // end of addEventListener
} // end of for loop



