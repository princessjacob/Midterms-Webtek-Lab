function getTrans(){
    var req = new XMLHttpRequest();
    var url = "http://localhost/html/trans.txt";
    req.open("GET", url);
    req.onreadystatechange = function() {
        var ul = document.getElementById("pendingreq");
        if (this.readyState == this.DONE && this.status == 200) {
            if (this.responseText != null) {
                var par = JSON.parse(this.responseText);
               // saveToLocalStorage(par);
                showTransactions(this.responseText);
            }
            else {
                ul.innerHTML = "no data found";
            }
        }    
    };