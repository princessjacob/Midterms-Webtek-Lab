function getDetails(){ 
        var req = new XMLHttpRequest();
        var url = "http://localhost/Midterms-Webtek-Lab/Mp2/sample.txt";
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
                alert(container + "late");
                logObj = {"date":document.getElementById("date").value, "idnum":document.getElementById("idNumber").value, "name":name, "late":late} ;
                log.push(logObj);

                localStorage.Processed = JSON.stringify(log);

                document.getElementById("late").checked = "";      
             }
             if(document.getElementById("absent").checked == true){
                document.getElementById("display3").innerHTML = (container + "is recorded as absent");
                var absent = "absent";
                alert(container + "absent");
                logObj = {"date":document.getElementById("date").value, "idnum":document.getElementById("idNumber").value, "name":name, "absent":absent} ;
                log.push(logObj);

                localStorage.Processed = JSON.stringify(log);
                document.getElementById("absent").checked = "";   
             }
             if(document.getElementById("noId").checked == true){
                var noId= "noID";
                alert(container + "has no ID");
                logObj = {"date":document.getElementById("date").value, "idnum":document.getElementById("idNumber").value, "name":name, "noId":noID} ;
                log.push(logObj);

                localStorage.Processed = JSON.stringify(log);

                document.getElementById("noId").checked = "";   
             }
             
             if(document.getElementById("ImproperHairCut").checked == true){
                 document.getElementById("display5").innerHTML = "Improper HairCut:";
                 var improperHair = "ImproperHairCut";
                alert(container + "Improper Haircut");
                logObj = {"date":document.getElementById("date").value, "idnum":document.getElementById("idNumber").value, "name":name, "improperHair":ImproperHairCut} ;
                log.push(logObj);

                localStorage.Processed = JSON.stringify(log);

                document.getElementById("ImproperHairCut").checked = "";   
                 
             }
            if(document.getElementById("CutClass").checked == true){
                document.getElementById("display6").innerHTML = "Cut class :";
                var cutclass = "CutClass";
                alert(container + "Cut Class");
                logObj = {"date":document.getElementById("date").value, "idnum":document.getElementById("idNumber").value, "name":name, "cutClass":CutClass} ;
                log.push(logObj);

                localStorage.Processed = JSON.stringify(log);

                document.getElementById("CutClass").checked = "";   
             }
              if(document.getElementById("ImproUniform").checked == true){
                 document.getElementById("display7").innerHTML = "Improper Uniform:";
                var improperUniform = "improperUniform";
                  alert(container + "Improper Uniform");
                logObj = {"date":document.getElementById("date").value, "idnum":document.getElementById("idNumber").value, "name":name, "improperUniform":improperUniform} ;
                log.push(logObj);

                localStorage.Processed = JSON.stringify(log);

                document.getElementById("ImproUniform").checked = "";
             }
             if(document.getElementById("gadget").checked == true){
                 document.getElementById("display2").innerHTML = "gadget";
                 var gadget = "Gadget";
                alert(container + "Gadget");
                logObj = {"date":document.getElementById("date").value, "idnum":document.getElementById("idNumber").value, "name":name, "gadget":Gadget} ;
                log.push(logObj);

                localStorage.Processed = JSON.stringify(log);

                document.getElementById("gadget").checked = "";
             }
        
            if(document.getElementById("violence").checked == true){
                document.getElementById("display2").innerHTML = "Violence";
                var violence = "violence";
                alert(container + "violence");
                logObj = {"date":document.getElementById("date").value, "idnum":document.getElementById("idNumber").value, "name":name, "violence":violence} ;
                log.push(logObj);

                localStorage.Processed = JSON.stringify(log);

                document.getElementById("violence").checked = "";
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





