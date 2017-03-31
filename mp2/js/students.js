function getDetails(){ 
        var req = new XMLHttpRequest();
        var url = "http://localhost/sample.txt";
        req.open("GET", url);
        req.onreadystatechange = function() {
            var ul = document.getElementById("pendingreq");
            if (this.readyState == this.DONE && this.status == 200) {
                if (this.responseText != null) {
                    var par = JSON.parse(this.responseText);
                   // saveToLocalStorage(par);
                    showRequests(this.responseText);
                }
                else {
                    ul.innerHTML = "no data found";
                }
            }    
        };
        req.send();
    
}



 function showRequests(x){
      var updated;
      var get = JSON.parse(x);
      var temp = -1;
      var log = [];
      if(localStorage.Processed) {
        log = JSON.parse(localStorage.Processed);
      }
      var name = "";
     
     for(var i = 0; i <get.length; i++){
         
                //   var testing = temp.vioLate;
             if(document.getElementById("idNumber").value == get[i].idnumber){
                document.getElementById("display1").innerHTML = get[i].idnumber + get[i].name;
                name = get[i].name;
                temp = i;  
                break;  
            }
     
    }

    if(temp >= 0 ){

             if(document.getElementById("late").checked == true){
                 document.getElementById("display2").innerHTML = "Late:";     
             }
             if(document.getElementById("absent").checked == true){
                 document.getElementById("display1").innerHTML = "Cut class:";
             }
             if(document.getElementById("noId").checked == true){
                 document.getElementById("display1").innerHTML = "No Id:";
             }
             
             if(document.getElementById("ImproperHairCut").checked == true){
                 document.getElementById("display1").innerHTML = "ImproperHairCut:";
             }
               if(document.getElementById("CutClass").checked == true){
                 document.getElementById("display1").innerHTML = "Cut class :";
             }
              if(document.getElementById("ImproUniform").checked == true){
                 document.getElementById("display1").innerHTML = "ImproperHairCut:";
             }
          
      }
      else{
        document.getElementById("display").innerHTML = "no user found";
        document.getElementById("display1").innerHTML = "";
        document.getElementById("display2").innerHTML = "";
     }

    var logObj = {"date":document.getElementById("date").value, "idnum":document.getElementById("idNumber").value, "name":name};

    log.push(logObj);

    localStorage.Processed = JSON.stringify(log);

    document.getElementById("idNumber").value = "";
    document.getElementById("date").value = "";
    document.getElementById("late").checked = "";
    temp = -1;
 }




