function search() {
    var logger = [];
    logger = JSON.parse(localStorage.Processed);
    var tb = document.getElementById("tby");
    tb.innerHTML = '';
    var trow;
    var option = document.getElementById("searchBy").options;

    for (var i = 0; i < logger.length; i++) {
      if (option[0].selected) {  
        if (document.getElementById("studId").value == logger[i].idnum) {
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
                cell4.innerHTML = logger[i].noId;
            } else if (logger[i].imporperHair) {
                cell4.innerHTML = logger[i].imporperHair;
            } else if (logger[i].imporperShoes) {
                cell4.innerHTML = logger[i].imporperShoes;
            } else if (logger[i].Truancy) {
                cell4.innerHTML = logger[i].Truancy;
            } else if (logger[i].improperUniform) {
                cell4.innerHTML = logger[i].improperUniform;
            } else if (logger[i].Bullying) {
                cell4.innerHTML = logger[i].Bullying;
            } else if (logger[i].verbalAbuse) {
                cell4.innerHTML = logger[i].verbalAbuse;
            } else if (logger[i].PublicDA) {
                cell4.innerHTML = logger[i].PublicDA;
            } else if (logger[i].Dishonesty) {
                cell4.innerHTML = logger[i].Dishonesty;
            } else if (logger[i].Cheating) {
                cell4.innerHTML = logger[i].Cheating;
            } else if (logger[i].Smoking) {
                cell4.innerHTML = logger[i].Smoking;
            } else if (logger[i].Intoxication) {
                cell4.innerHTML = logger[i].Intoxication;
            } else if (logger[i].Innapropriate) {
                cell4.innerHTML = logger[i].Innapropriate;
            } else if (logger[i].Disrespect) {
                cell4.innerHTML = logger[i].Disrespect;
            } else if (logger[i].gadget) {
                cell4.innerHTML = logger[i].gadget;
            } else if (logger[i].Vandalism) {
                cell4.innerHTML = logger[i].Vandalism;
            } else if (logger[i].Damage) {
                cell4.innerHTML = logger[i].Damage;
            } else if (logger[i].Stealing) {
                cell4.innerHTML = logger[i].Stealing;
            } else if (logger[i].Tampering) {
                cell4.innerHTML = logger[i].Tampering;
            } else if (logger[i].Littering) {
                cell4.innerHTML = logger[i].Littering;
            }
        } 
      } else if (option[1].selected) {
        if (document.getElementById("studId").value == logger[i].name) {
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
                cell4.innerHTML = logger[i].noId;
            } else if (logger[i].imporperHair) {
                cell4.innerHTML = logger[i].improperHair;
            } else if (logger[i].imporperShoes) {
                cell4.innerHTML = logger[i].imporperShoes;
            } else if (logger[i].Truancy) {
                cell4.innerHTML = logger[i].Truancy;
            } else if (logger[i].improperUniform) {
                cell4.innerHTML = logger[i].improperUniform;
            } else if (logger[i].Bullying) {
                cell4.innerHTML = logger[i].Bullying;
            } else if (logger[i].verbalAbuse) {
                cell4.innerHTML = logger[i].verbalAbuse;
            } else if (logger[i].PublicDA) {
                cell4.innerHTML = logger[i].PublicDA;
            } else if (logger[i].Dishonesty) {
                cell4.innerHTML = logger[i].Dishonesty;
            } else if (logger[i].Cheating) {
                cell4.innerHTML = logger[i].Cheating;
            } else if (logger[i].Smoking) {
                cell4.innerHTML = logger[i].Smoking;
            } else if (logger[i].Intoxication) {
                cell4.innerHTML = logger[i].Intoxication;
            } else if (logger[i].Innapropriate) {
                cell4.innerHTML = logger[i].Innapropriate;
            } else if (logger[i].Disrespect) {
                cell4.innerHTML = logger[i].Disrespect;
            } else if (logger[i].gadget) {
                cell4.innerHTML = logger[i].gadget;
            } else if (logger[i].Vandalism) {
                cell4.innerHTML = logger[i].Vandalism;
            } else if (logger[i].Damage) {
                cell4.innerHTML = logger[i].Damage;
            } else if (logger[i].Stealing) {
                cell4.innerHTML = logger[i].Stealing;
            } else if (logger[i].Tampering) {
                cell4.innerHTML = logger[i].Tampering;
            } else if (logger[i].Littering) {
                cell4.innerHTML = logger[i].Littering;
            }
         }  
      } 
   }
}
