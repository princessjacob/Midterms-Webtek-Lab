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
           } else if (logger[i].noID) {
               cell4.innerHTML = logger[i].noID;
 -         } else if (logger[i].imporperHairCut) {
 -              cell4.innerHTML = logger[i].imporperHairCut;
 -         } else if (logger[i].CutClass){
 -              cell4.innerHTML = logger[i].CutClass;
 -         } else if (logger[i].improperUniform) {
 -              cell4.innerHTML = logger[i].improperUniform;
 -         } else if (logger[i].gadget) {
 -              cell4.innerHTML = logger[i].gadget;
 -         } else if (logger[i].violence) {
 -              cell4.innerHTML = logger[i].violence;
 -         }
        } else if (document.getElementById("search").value == logger[i].date){
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
           } else if (logger[i].noId) {
               cell4.innerHTML = logger[i].noID;
           } else if (logger[i].imporperHairCut) {
                cell4.innerHTML = logger[i].imporperHairCut;
           } else if (logger[i].CutClass){
                cell4.innerHTML = logger[i].CutClass;
           } else if (logger[i].improperUniform) {
                cell4.innerHTML = logger[i].improperUniform;
           } else if (logger[i].gadget) {
                cell4.innerHTML = logger[i].gadget;
           } else if (logger[i].violence) {
                cell4.innerHTML = logger[i].violence;
           }
        }
    }  
}
