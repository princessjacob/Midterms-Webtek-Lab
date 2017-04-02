function search() {
    var logger = [];
    logger = JSON.parse(localStorage.Processed);
    var tb = document.getElementById("tby");
    tb.innerHTML = '';
    var trow; 

    for(var i = 0; i < logger.length; i++) {
        if(document.getElementById("search").value == logger[i].idnum) {
            trow = document.createElement("tr");
            tb.appendChild(trow);
	       var cell1 = trow.insertCell(0);
	       var cell2 = trow.insertCell(1);
	       var cell3 = trow.insertCell(2);
	       var cell4 = trow.insertCell(3);
	       cell1.innerHTML = logger[i].date;
	       cell2.innerHTML = logger[i].idnum;
	       cell3.innerHTML = logger[i].name;
	       if (logger[i].late) {
                cell4.innerHTML = logger[i].late;
           } else if (logger[i].absent) {
                cell4.innerHTML = logger[i].absent;
           }
        }
    }  
}
