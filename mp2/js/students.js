var temp = -1;
var name = "";
var log;
var logObj;
var container;
var get;

var date = new Date();

var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();

if (month < 10) month = "0" + month;
if (day < 10) day = "0" + day;

var today; 
today = year + "-" + month + "-" + day;

document.getElementById('date').value = today;

var vioAdded = [];

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
                document.getElementById("submit").style.display = 'inline';
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
                var late= "Late";
                alert("Successfully Recorded");
                logObj = {"date":document.getElementById("date").value, "idnum":document.getElementById("idNumber").value, "name":name, "late":late, "reason":document.querySelector("#lateR textarea").value, "verdict":document.querySelector("#lateR input[type=radio]:checked").value} ;
                log.push(logObj);

                localStorage.Processed = JSON.stringify(log);

                document.getElementById("late").checked = "";    
                vioAdded.push("late");  
             }
             if(document.getElementById("absent").checked == true){
                var absent = "Absent";
                alert("Successfully Recorded");
                logObj = {"date":document.getElementById("date").value, "idnum":document.getElementById("idNumber").value, "name":name, "absent":absent, "reason":document.querySelector("#absentR textarea").value, "verdict":document.querySelector("#absentR input[type=radio]:checked").value} ;
                log.push(logObj);

                localStorage.Processed = JSON.stringify(log);
                document.getElementById("absent").checked = "";  
                vioAdded.push("absent");  
             }
             if(document.getElementById("noId").checked == true){
                var noId= "No ID";
                alert("Successfully Recorded");
                logObj = {"date":document.getElementById("date").value, "idnum":document.getElementById("idNumber").value, "name":name, "noId":noId, "reason":document.querySelector("#noIdR textarea").value, "verdict":document.querySelector("#noIdR input[type=radio]:checked").value} ;
                log.push(logObj);

                localStorage.Processed = JSON.stringify(log);

                document.getElementById("noId").checked = "";  
                vioAdded.push("noId");  
             }
            if(document.getElementById("ImproperHairCut").checked == true){
                 var improperHair = "Improper Hair Cut";
                alert("Successfully Recorded");
                logObj = {"date":document.getElementById("date").value, "idnum":document.getElementById("idNumber").value, "name":name, "improperHair":improperHair, "reason":document.querySelector("#ImproperHairCutR textarea").value, "verdict":document.querySelector("#ImproperHairCutR input[type=radio]:checked").value} ;
                log.push(logObj);

                localStorage.Processed = JSON.stringify(log);

                document.getElementById("ImproperHairCut").checked = "";   
                vioAdded.push("improperHair"); 
                 
             }
             
             if(document.getElementById("ImproShoes").checked == true){
                 var improperShoes = "Improper Shoes";
                alert("Successfully Recorded");
                logObj = {"date":document.getElementById("date").value, "idnum":document.getElementById("idNumber").value, "name":name, "improperShoes":improperShoes, "reason":document.querySelector("#ImproShoesR textarea").value, "verdict":document.querySelector("#ImproShoesR input[type=radio]:checked").value} ;
                log.push(logObj);

                localStorage.Processed = JSON.stringify(log);

                document.getElementById("ImproperHairCut").checked = "";  
                vioAdded.push("improperShoes");  
                 
             }
            if(document.getElementById("Truancy").checked == true){
                var Truancy = "Truancy";
                alert("Successfully Recorded");
                logObj = {"date":document.getElementById("date").value, "idnum":document.getElementById("idNumber").value, "name":name, "Truancy":Truancy} ;
                log.push(logObj);

                localStorage.Processed = JSON.stringify(log);

                document.getElementById("Truancy").checked = ""; 
                vioAdded.push("Truancy");   
             }
              if(document.getElementById("ImproUniform").checked == true){
                var improperUniform = "Improper Uniform";
                 alert("Successfully Recorded");
                logObj = {"date":document.getElementById("date").value, "idnum":document.getElementById("idNumber").value, "name":name, "improperUniform":improperUniform, "reason":document.querySelector("#ImproUniformR textarea").value, "verdict":document.querySelector("#ImproUniformR input[type=radio]:checked").value} ;
                log.push(logObj);

                localStorage.Processed = JSON.stringify(log);

                document.getElementById("ImproUniform").checked = "";
                vioAdded.push("improperUniform"); 
             }
                if(document.getElementById("bullying").checked == true){
                 var bullying = "Bullying";
                alert("Successfully Recorded");
                logObj = {"date":document.getElementById("date").value, "idnum":document.getElementById("idNumber").value, "name":name, "Bullying":bullying} ;
                log.push(logObj);

                localStorage.Processed = JSON.stringify(log);

                document.getElementById("bullying").checked = "";
                vioAdded.push("Bullying"); 
             }
                if(document.getElementById("verbalAbuse").checked == true){
                 var vAbuse = "Verbal Abuse";
                alert("Successfully Recorded");
                logObj = {"date":document.getElementById("date").value, "idnum":document.getElementById("idNumber").value, "name":name, "verbalAbuse":vAbuse} ;
                log.push(logObj);

                localStorage.Processed = JSON.stringify(log);

                document.getElementById("verbalAbuse").checked = "";
                vioAdded.push("verbalAbuse"); 
             }
                if(document.getElementById("PDA").checked == true){
                 var PDA = "Public Display of Affection";
                alert("Successfully Recorded");
                logObj = {"date":document.getElementById("date").value, "idnum":document.getElementById("idNumber").value, "name":name, "PublicDA":PDA} ;
                log.push(logObj);

                localStorage.Processed = JSON.stringify(log);

                document.getElementById("PDA").checked = "";
                vioAdded.push("PublicDA"); 
             }
               if(document.getElementById("Dishonesty").checked == true){
                 var dishonesty = "Dishonesty";
                alert("Successfully Recorded");
                logObj = {"date":document.getElementById("date").value, "idnum":document.getElementById("idNumber").value, "name":name, "Dishonesty":dishonesty} ;
                log.push(logObj);

                localStorage.Processed = JSON.stringify(log);

                document.getElementById("Dishonesty").checked = "";
                vioAdded.push("Dishonesty"); 
             }
                 if(document.getElementById("cheating").checked == true){
                 var cheating = "Cheating";
                alert("Successfully Recorded");
                logObj = {"date":document.getElementById("date").value, "idnum":document.getElementById("idNumber").value, "name":name, "Cheating":cheating} ;
                log.push(logObj);

                localStorage.Processed = JSON.stringify(log);

                document.getElementById("cheating").checked = "";
                vioAdded.push("Cheating"); 
             }
                 if(document.getElementById("smoking").checked == true){
                 var smoke = "Smoking";
                alert("Successfully Recorded");
                logObj = {"date":document.getElementById("date").value, "idnum":document.getElementById("idNumber").value, "name":name, "Smoking":smoke} ;
                log.push(logObj);

                localStorage.Processed = JSON.stringify(log);

                document.getElementById("smoking").checked = "";
                vioAdded.push("Smoking"); 
             }
                if(document.getElementById("Intoxication").checked == true){
                var intox = "Intoxication";
                alert("Successfully Recorded");
                logObj = {"date":document.getElementById("date").value, "idnum":document.getElementById("idNumber").value, "name":name, "Intoxication":intox} ;
                log.push(logObj);

                localStorage.Processed = JSON.stringify(log);

                document.getElementById("Intoxication").checked = "";
                vioAdded.push("Intoxication"); 
             }
              if(document.getElementById("InappMaterial").checked == true){
                 var inaapMat = "Inappropriate Materials";
                alert("Successfully Recorded");
                logObj = {"date":document.getElementById("date").value, "idnum":document.getElementById("idNumber").value, "name":name, "Innapropriate":inaapMat} ;
                log.push(logObj);

                localStorage.Processed = JSON.stringify(log);

                document.getElementById("InappMaterial").checked = "";
                vioAdded.push("Innapropriate"); 
             }
                if(document.getElementById("Disrespect").checked == true){
                 var disRP = "Disrespect";
                alert("Successfully Recorded");
                logObj = {"date":document.getElementById("date").value, "idnum":document.getElementById("idNumber").value, "name":name, "Disrespect":disRP} ;
                log.push(logObj);

                localStorage.Processed = JSON.stringify(log);

                document.getElementById("cheating").checked = "";
                vioAdded.push("Cheating"); 
             }

             if(document.getElementById("gadget").checked == true){
                 var gadget = "Gadget";
                alert("Successfully Recorded");
                logObj = {"date":document.getElementById("date").value, "idnum":document.getElementById("idNumber").value, "name":name, "gadget":gadget} ;
                log.push(logObj);

                localStorage.Processed = JSON.stringify(log);

                document.getElementById("gadget").checked = "";
                vioAdded.push("gadget"); 
             }

             if(document.getElementById("Vandalism").checked == true){
                 var vandal = "Vandalism";
                alert("Successfully Recorded");
                logObj = {"date":document.getElementById("date").value, "idnum":document.getElementById("idNumber").value, "name":name, "Vandalism":vandal} ;
                log.push(logObj);

                localStorage.Processed = JSON.stringify(log);

                document.getElementById("Vandalism").checked = "";
                vioAdded.push("Vandalism"); 
             }
             if(document.getElementById("DmgSchl").checked == true){
                 var damage = "Damage to School Property";
                alert("Successfully Recorded");
                logObj = {"date":document.getElementById("date").value, "idnum":document.getElementById("idNumber").value, "name":name, "Damage":damage} ;
                log.push(logObj);

                localStorage.Processed = JSON.stringify(log);

                document.getElementById("DmgSchl").checked = "";
                vioAdded.push("Damage"); 
             }
                if(document.getElementById("Stealing").checked == true){
                 var steal = "Stealing";
                alert("Successfully Recorded");
                logObj = {"date":document.getElementById("date").value, "idnum":document.getElementById("idNumber").value, "name":name, "Stealing":steal} ;
                log.push(logObj);

                localStorage.Processed = JSON.stringify(log);

                document.getElementById("Stealing").checked = "";
                vioAdded.push("Stealing"); 
             }
                if(document.getElementById("Tampering").checked == true){
                 var tamper = "Tampering";
                alert("Successfully Recorded");
                logObj = {"date":document.getElementById("date").value, "idnum":document.getElementById("idNumber").value, "name":name, "Tampering":tamper} ;
                log.push(logObj);

                localStorage.Processed = JSON.stringify(log);

                document.getElementById("Tampering").checked = "";
                vioAdded.push("Tampering"); 
             }
                if(document.getElementById("Littering").checked == true){
                 var litter = "Littering";
                alert("Successfully Recorded");
                logObj = {"date":document.getElementById("date").value, "idnum":document.getElementById("idNumber").value, "name":name, "Littering":litter} ;
                log.push(logObj);

                localStorage.Processed = JSON.stringify(log);

                document.getElementById("Littering").checked = "";
                vioAdded.push("Littering"); 
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

function giveVerdict() {
    if (document.getElementById("ImproUniform").checked) {
        document.getElementById("ImproUniformR").style.display = 'block';
    } else {
        document.getElementById("ImproUniformR").style.display = 'none';
    }
    if (document.getElementById("noId").checked) {
        document.getElementById("noIdR").style.display = 'block';
    } else {
        document.getElementById("noIdR").style.display = 'none';
    }
    if (document.getElementById("ImproperHairCut").checked) {
        document.getElementById("ImproperHairCutR").style.display = 'block';
    } else {
        document.getElementById("ImproperHairCutR").style.display = 'none';
    }
    if (document.getElementById("ImproShoes").checked) {
        document.getElementById("ImproShoesR").style.display = 'block';
    } else {
        document.getElementById("ImproShoesR").style.display = 'none';
    }
    if (document.getElementById("late").checked) {
        document.getElementById("lateR").style.display = 'block';
    } else {
        document.getElementById("lateR").style.display = 'none';
    }
    if (document.getElementById("absent").checked) {
        document.getElementById("absentR").style.display = 'block';
    } else {
        document.getElementById("absentR").style.display = 'none';
    }
}



function searchCount() {
    var logger = [];

    logger = JSON.parse(localStorage.Processed);

    var lateCtr = 0;
    var absentCtr = 0;
    var noIdCtr = 0;
    var improperHairCtr = 0;
    var improperShoesCtr  = 0;
    var truancyCtr = 0;
    var improperUniformCtr = 0;
    var bullyingCtr = 0;
    var verbalAbuseCtr = 0;
    var publicDACtr = 0;
    var dishonestyCtr = 0;
    var cheatingCtr = 0;
    var smokingCtr = 0;
    var intoxicationCtr = 0;
    var innapropriateCtr= 0;
    var disrespectCtr = 0;
    var gadgetCtr = 0;
    var vandalismCtr = 0;
    var damageCtr = 0;
    var stealingCtr = 0;
    var tamperingCtr = 0;
    var litteringCtr = 0;



    for (var i = 0; i < logger.length; i++){
        if (document.getElementById("idNumber").value == logger[i].idnum){
             if(logger[i].late && logger[i].verdict == "unexcuse"&& logger[i].reason != "" && vioAdded.includes("late")){
                lateCtr++;        
            } else if (logger[i].absent && logger[i].verdict == "unexcuse"&& logger[i].reason != "" && vioAdded.includes("absent")){
                absentCtr++;
            } else if (logger[i].noId && logger[i].verdict == "unexcuse"&& logger[i].reason != "" && vioAdded.includes("noId")){
                noIdCtr++;
            } else if (logger[i].improperHair && logger[i].verdict == "unexcuse"&& logger[i].reason != "" && vioAdded.includes("improperHair")){
                improperHairCtr++;
            } else if (logger[i].improperShoes && logger[i].verdict == "unexcuse"&& logger[i].reason != "" && vioAdded.includes("improperShoes")) {
                improperShoesCtr++;
            } else if (logger[i].Truancy && vioAdded.includes("Truancy")) {
                truancyCtr++;
            } else if (logger[i].improperUniform && logger[i].verdict == "unexcuse"&& logger[i].reason != "" && vioAdded.includes("improperUniform")) {
                improperUniformCtr++;
            } else if (logger[i].Bullying && vioAdded.includes("improperUniform")) {
                bullyingCtr++;
            } else if (logger[i].verbalAbuse && vioAdded.includes("improperUniform")) {
                verbalAbuseCtr++;
            } else if (logger[i].PublicDA && vioAdded.includes("PublicDA")) {
                publicDACtr++;
            } else if (logger[i].Dishonesty && vioAdded.includes("Dishonesty")) {
                dishonestyCtr++;
            } else if (logger[i].Cheating && vioAdded.includes("Cheating")) {
                cheatingCtr++;
            } else if (logger[i].Smoking && vioAdded.includes("Smoking")) {
                smokingCtr++;
            } else if (logger[i].Intoxication && vioAdded.includes("Intoxication")) {
                intoxicationCtr++;
            } else if (logger[i].Innapropriate && vioAdded.includes("Innapropriate")) {
                innapropriateCtr++;
            } else if (logger[i].Disrespect && vioAdded.includes("Disrespect")) {
                disrespectCtr++;
            } else if (logger[i].gadget && vioAdded.includes("gadget")) {
                gadgetCtr++;
            } else if (logger[i].Vandalism && vioAdded.includes("Vandalism")) {
                vandalismCtr++;
            } else if (logger[i].Damage && vioAdded.includes("Damage")) {
                damageCtr++;
            } else if (logger[i].Stealing && vioAdded.includes("Stealing")) {
                stealingCtr++;
            } else if (logger[i].Tampering && vioAdded.includes("Tampering")) {
                tamperingCtr++;
            } else if (logger[i].Littering && vioAdded.includes("Littering")) {
                litteringCtr++;
            }

        }
    }
        if (lateCtr > 4){
                        alert("The student has " + lateCtr + " late records.")
        }

        if (absentCtr > 4){
                        alert("The student has " + absentCtr + " absent records.")
        }

        if ( noIdCtr > 4){
                        alert("The student has " + noIdCtr + " no ID records.")
        }

        if (improperHairCtr > 4){
                        alert("The student has " + improperHairCtr + " improper haircut records.")
        }

        if (improperShoesCtr > 4){
                        alert("The student has " + improperShoesCtr + " improper shoes records.")
        }

        if (truancyCtr >= 1){
                        alert("The student has " + truancyCtr + " truancy records.")
        }

        if (improperUniformCtr > 4){
                        alert("The student has " + improperUniformCtr + " improper uniform records.")
        }

        if (bullyingCtr >= 1){
                        alert("The student has " + bullyingCtr + " bullying records.")
        }

        if (verbalAbuseCtr >= 1){
                        alert("The student has " + verbalAbuseCtr + " verbal abuse records.")
        }

        if (publicDACtr >= 1){
                        alert("The student has " + publicDACtr + " PDA records.")
        }

        if (dishonestyCtr >= 1){
                        alert("The student has " + dishonestyCtr + " dishonesty records.")
        }

        if (cheatingCtr >= 1){
                        alert("The student has " + cheatingCtr + " cheating records.")
        }

        if (smokingCtr >= 1){
                        alert("The student has " + smokingCtr + " smoking records.")
        }

        if (intoxicationCtr >= 1){
                        alert("The student has " + intoxicationCtr + " intoxication records.")
        }

        if (innapropriateCtr > 4){
                        alert("The student has " + innapropriateCtr + " bringing innapropriate material records.")
        }

        if (disrespectCtr >= 1){
                        alert("The student has " + disrespectCtr + " desirespecting records.")
        }

        if (gadgetCtr > 4){
                        alert("The student has " + gadgetCtr + " bringing of gadget records.")
        }

        if (vandalismCtr >= 1){
                        alert("The student has " + vandalismCtr + " vandalism records.")
            }

        if (damageCtr >= 1){
                        alert("The student has " + damageCtr + " damages to school prperty records.")
        }

        if (stealingCtr >= 1){
                        alert("The student has " + stealingCtr + " stealing records.")
        }

        if (tamperingCtr >= 1){
                        alert("The student has " + tamperingCtr + " tampering records.")
        }

        if (litteringCtr > 4){
                        alert("The student has " + litteringCtr + " littering records.")
        }
}

