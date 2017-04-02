function getDetails(){ 
        var req = new XMLHttpRequest();
        var url = "http://localhost/webtek/mp2/sample.txt";
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
    var logObj;
     
    for(var i = 0; i <get.length; i++){
        var container;      
                //   var testing = temp.vioLate;
            if(document.getElementById("idNumber").value == get[i].idnumber){
                document.getElementById("display1").innerHTML = get[i].idnumber +" "+ get[i].name;
                container =get[i].idnumber +" "+ get[i].name;
                name = get[i].name;
                temp = i;  
                break;  
            } else {
                document.getElementById("display").innerHTML = "no user found";
                document.getElementById("display1").innerHTML = "";
                document.getElementById("display2").innerHTML = "";
            }
     
    }

    if(temp >= 0 ){

             if(document.getElementById("late").checked == true){
                var late= "late";
                alert(container + "is late");
                logObj = {"date":document.getElementById("date").value, "idnum":document.getElementById("idNumber").value, "name":name, "late":late} ;
                log.push(logObj);

                localStorage.Processed = JSON.stringify(log);

                document.getElementById("late").checked = "";      
             }
             if(document.getElementById("absent").checked == true){
                document.getElementById("display3").innerHTML = (container + "is recorded as absent");
                var absent = "absent";
                logObj = {"date":document.getElementById("date").value, "idnum":document.getElementById("idNumber").value, "name":name, "absent":absent} ;
                log.push(logObj);

                localStorage.Processed = JSON.stringify(log);
                document.getElementById("absent").checked = "";   
             }
             if(document.getElementById("noId").checked == true){
                 document.getElementById("display4").innerHTML = "No Id:";
                 var noID = "NoID";
             }
             
             if(document.getElementById("ImproperHairCut").checked == true){
                 document.getElementById("display5").innerHTML = "Improper HairCut:";
                 var improperHair = "ImproperHairCut";
                 
             }
               if(document.getElementById("CutClass").checked == true){
                 document.getElementById("display6").innerHTML = "Cut class :";
                   var cutclass = "CutClass";
             }
              if(document.getElementById("ImproUniform").checked == true){
                 document.getElementById("display7").innerHTML = "Improper Uniform:";
                var improperUniform = "Improper Uniform";
             }
             if(document.getElementById("gadget").checked == true){
                 document.getElementById("display2").innerHTML = "gadget";
                 var gadget = "Gadget";
             }
        
            if(document.getElementById("violence").checked == true){
                 document.getElementById("display2").innerHTML = "Violence";
                 var violence = "violence";
             }
          
      }
     
    // logObj = {"date":document.getElementById("date").value, "idnum":document.getElementById("idNumber").value, "name":name, "violation":{ "late":late, "absent":absent]
    //              , "noID":noID, "ImproperHairCut":improperHair, "CutClass":cutclass, "improperUniform":improperUniform, "gadget":gadget, "violence":violence} ;

    // log.push(logObj);

    // localStorage.Processed = JSON.stringify(log);

    document.getElementById("idNumber").value = "";
    document.getElementById("date").value = "";
    
    temp = -1;
 }

function generateTable() {

}





