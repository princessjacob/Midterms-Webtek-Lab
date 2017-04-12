var temp = -1;
var name = "";
var log;
var logObj;
var container;
var get;

function getDetails(){ 
        var req = new XMLHttpRequest();
        var url = "http://localhost/mp2/sample.txt"
        req.open("GET", url);
        req.onreadystatechange = function() {
            var ul = document.getElementById("pendingreq");
            if (this.readyState == this.DONE && this.status == 200) {
                if (this.responseText != null) {
                    var par = JSON.parse(this.responseText);
                   // saveToLocalStorage(par);
                    showRequests(this.responseText);
                }
            }    
        };
        req.send();
    
}

 function showRequests(x){
    get = JSON.parse(x);
    log = [];
        if(localStorage.Processed) {
            log = JSON.parse(localStorage.Processed);
        }
    var userFound = false;
     
    for(var i = 0; i <get.length; i++){    
                //   var testing = temp.vioLate;
            if(document.getElementById("idNumber").value == get[i].idnumber){
            //    document.getElementById("display1").innerHTML = get[i].idnumber +" "+ get[i].name;
                container =get[i].idnumber +" "+ get[i].name;
                name = get[i].name;
                temp = i;  
                userFound=true;
				document.getElementById("studName").innerHTML = name;
                document.getElementById("section").innerHTML = get[i].section;
                document.getElementById("studInfo").style.display = 'block';
                document.getElementById("violations").style.display = 'block';
                break;  
            }
     
        }

        if(userFound == false){
            alert("No student found!");
			location.reload();
        }
 }
 function submitVio() {
    if(temp >= 0 ){

             if(document.getElementById("late").checked == true){
                var late= "late";
                alert("Successfully Recorded");
                logObj = {"date":document.getElementById("date").value, "idnum":document.getElementById("idNumber").value, "name":name, "late":late} ;
                log.push(logObj);

                localStorage.Processed = JSON.stringify(log);

                document.getElementById("late").checked = "";      
             }
             if(document.getElementById("absent").checked == true){
                alert("Successfully Recorded");
                logObj = {"date":document.getElementById("date").value, "idnum":document.getElementById("idNumber").value, "name":name, "absent":absent} ;
                log.push(logObj);

                localStorage.Processed = JSON.stringify(log);
                document.getElementById("absent").checked = "";   
             }
             if(document.getElementById("noId").checked == true){
                var noId= "noID";
                alert("Successfully Recorded");
                logObj = {"date":document.getElementById("date").value, "idnum":document.getElementById("idNumber").value, "name":name, "noId":noId} ;
                log.push(logObj);

                localStorage.Processed = JSON.stringify(log);

                document.getElementById("noId").checked = "";   
             }
            if(document.getElementById("ImproperHairCut").checked == true){
                 var improperHair = "ImproperHairCut";
                alert("Successfully Recorded");
                logObj = {"date":document.getElementById("date").value, "idnum":document.getElementById("idNumber").value, "name":name, "improperHair":ImproperHairCut} ;
                log.push(logObj);

                localStorage.Processed = JSON.stringify(log);

                document.getElementById("ImproperHairCut").checked = "";   
                 
             }
             
             if(document.getElementById("ImproShoes").checked == true){
                 var improperShoes = "Improper Shoes";
                alert("Successfully Recorded");
                logObj = {"date":document.getElementById("date").value, "idnum":document.getElementById("idNumber").value, "name":name, "improperShoes":improperShoes} ;
                log.push(logObj);

                localStorage.Processed = JSON.stringify(log);

                document.getElementById("ImproperHairCut").checked = "";   
                 
             }
            if(document.getElementById("Truancy").checked == true){
                var Truancy = "Truancy";
                alert("Successfully Recorded");
                logObj = {"date":document.getElementById("date").value, "idnum":document.getElementById("idNumber").value, "name":name, "Truancy":Truancy} ;
                log.push(logObj);

                localStorage.Processed = JSON.stringify(log);

                document.getElementById("Truancy").checked = "";   
             }
              if(document.getElementById("ImproUniform").checked == true){
                var improperUniform = "improperUniform";
                 alert("Successfully Recorded");
                logObj = {"date":document.getElementById("date").value, "idnum":document.getElementById("idNumber").value, "name":name, "improperUniform":improperUniform} ;
                log.push(logObj);

                localStorage.Processed = JSON.stringify(log);

                document.getElementById("ImproUniform").checked = "";
             }
                if(document.getElementById("bullying").checked == true){
                 var bullying = "Bullying";
                alert("Successfully Recorded");
                logObj = {"date":document.getElementById("date").value, "idnum":document.getElementById("idNumber").value, "name":name, "Bullying":bullying} ;
                log.push(logObj);

                localStorage.Processed = JSON.stringify(log);

                document.getElementById("bullying").checked = "";
             }
                if(document.getElementById("verbalAbuse").checked == true){
                 var vAbuse = "Verbal Abuse";
                alert("Successfully Recorded");
                logObj = {"date":document.getElementById("date").value, "idnum":document.getElementById("idNumber").value, "name":name, "verbalAbuse":vAbuse} ;
                log.push(logObj);

                localStorage.Processed = JSON.stringify(log);

                document.getElementById("verbalAbuse").checked = "";
             }
                if(document.getElementById("PDA").checked == true){
                 var PDA = "Public Display of Affection";
                alert("Successfully Recorded");
                logObj = {"date":document.getElementById("date").value, "idnum":document.getElementById("idNumber").value, "name":name, "PublicDA":PDA} ;
                log.push(logObj);

                localStorage.Processed = JSON.stringify(log);

                document.getElementById("PDA").checked = "";
             }
               if(document.getElementById("Dishonesty").checked == true){
                 var dishonesty = "Dishonesty";
                alert("Successfully Recorded");
                logObj = {"date":document.getElementById("date").value, "idnum":document.getElementById("idNumber").value, "name":name, "Dishonesty":dishonesty} ;
                log.push(logObj);

                localStorage.Processed = JSON.stringify(log);

                document.getElementById("Dishonesty").checked = "";
             }
                 if(document.getElementById("cheating").checked == true){
                 var cheating = "Cheating";
                alert("Successfully Recorded");
                logObj = {"date":document.getElementById("date").value, "idnum":document.getElementById("idNumber").value, "name":name, "Cheating":cheating} ;
                log.push(logObj);

                localStorage.Processed = JSON.stringify(log);

                document.getElementById("cheating").checked = "";
             }
                 if(document.getElementById("smoking").checked == true){
                 var smoke = "Smoking";
                alert("Successfully Recorded");
                logObj = {"date":document.getElementById("date").value, "idnum":document.getElementById("idNumber").value, "name":name, "Smoking":smoke} ;
                log.push(logObj);

                localStorage.Processed = JSON.stringify(log);

                document.getElementById("smoking").checked = "";
             }
                if(document.getElementById("Intoxication").checked == true){
                var intox = "Intoxication";
                alert("Successfully Recorded");
                logObj = {"date":document.getElementById("date").value, "idnum":document.getElementById("idNumber").value, "name":name, "Intoxication":intox} ;
                log.push(logObj);

                localStorage.Processed = JSON.stringify(log);

                document.getElementById("Intoxication").checked = "";
             }
                if(document.getElementById("InappMaterial").checked == true){
                 var inaapMat = "Inappropriate Material";
                alert("Successfully Recorded");
                logObj = {"date":document.getElementById("date").value, "idnum":document.getElementById("idNumber").value, "name":name, "Innapropriate":inaapMat} ;
                log.push(logObj);

                localStorage.Processed = JSON.stringify(log);

                document.getElementById("InnapMaterial").checked = "";
             }
                if(document.getElementById("Disrespect").checked == true){
                 var disRP = "Disrespect";
                alert("Successfully Recorded");
                logObj = {"date":document.getElementById("date").value, "idnum":document.getElementById("idNumber").value, "name":name, "Disrespect":disRP} ;
                log.push(logObj);

                localStorage.Processed = JSON.stringify(log);

                document.getElementById("cheating").checked = "";
             }

             if(document.getElementById("gadget").checked == true){
                 var gadget = "Gadget";
                alert("Successfully Recorded");
                logObj = {"date":document.getElementById("date").value, "idnum":document.getElementById("idNumber").value, "name":name, "gadget":gadget} ;
                log.push(logObj);

                localStorage.Processed = JSON.stringify(log);

                document.getElementById("gadget").checked = "";
             }

             if(document.getElementById("Vandalism").checked == true){
                 var vandal = "Vandalism";
                alert("Successfully Recorded");
                logObj = {"date":document.getElementById("date").value, "idnum":document.getElementById("idNumber").value, "name":name, "Valdalism":vandal} ;
                log.push(logObj);

                localStorage.Processed = JSON.stringify(log);

                document.getElementById("Vandalism").checked = "";
             }
             if(document.getElementById("DmgSchl").checked == true){
                 var damage = "Damage to School Property";
                alert("Successfully Recorded");
                logObj = {"date":document.getElementById("date").value, "idnum":document.getElementById("idNumber").value, "name":name, "Damage":damage} ;
                log.push(logObj);

                localStorage.Processed = JSON.stringify(log);

                document.getElementById("DmgSchl").checked = "";
             }
                if(document.getElementById("Stealing").checked == true){
                 var steal = "Stealing";
                alert("Successfully Recorded");
                logObj = {"date":document.getElementById("date").value, "idnum":document.getElementById("idNumber").value, "name":name, "Stealing":steal} ;
                log.push(logObj);

                localStorage.Processed = JSON.stringify(log);

                document.getElementById("Stealing").checked = "";
             }
                if(document.getElementById("Tampering").checked == true){
                 var tamper = "Tampering";
                alert("Successfully Recorded");
                logObj = {"date":document.getElementById("date").value, "idnum":document.getElementById("idNumber").value, "name":name, "Tampering":tamper} ;
                log.push(logObj);

                localStorage.Processed = JSON.stringify(log);

                document.getElementById("Tampering").checked = "";
             }
                if(document.getElementById("Littering").checked == true){
                 var litter = "Littering";
                alert("Successfully Recorded");
                logObj = {"date":document.getElementById("date").value, "idnum":document.getElementById("idNumber").value, "name":name, "Littering":litter} ;
                log.push(logObj);

                localStorage.Processed = JSON.stringify(log);

                document.getElementById("Littering").checked = "";
             }
          
      }
     
    // logObj = {"date":document.getElementById("date").value, "idnum":document.getElementById("idNumber").value, "name":name, "violation":{ "late":late, "absent":absent]
    //              , "noID":noID, "ImproperHairCut":improperHair, "CutClass":cutclass, "improperUniform":improperUniform, "gadget":gadget, "violence":violence} ;

    // log.push(logObj);

    // localStorage.Processed = JSON.stringify(log);

    location.reload();
    temp = -1;
 }

function generateTable() {

}





