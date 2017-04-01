function search() {
    var logger = [];
    logger = JSON.parse(localStorage.Processed);
    var table = document.getElementById("tbl");

    for(var i = 0; i < logger.length; i++) {
    	//var container = [];
        if(document.getElementById("search").value == logger[i].idnum) {
            //container[i] = JSON.stringify(logger[i]);
            //document.getElementById("displaymo").innerHTML = container[i];
            
            var row = table.insertRow(i);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            
            cell1.innerHTML = logger[i].date,
            cell2.innerHTML = logger[i].idnum,
            cell3.innerHTML = logger[i].name,
            cell4.innerHTML = logger[i].absent;
        }
    }
    
}