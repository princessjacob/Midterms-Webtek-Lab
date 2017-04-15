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
                var late= "late";
                alert("Successfully Recorded");
                logObj = {"date":document.getElementById("date").value, "idnum":document.getElementById("idNumber").value, "name":name, "late":late, "reason":document.querySelector("#lateR textarea").value, "verdict":document.querySelector("#lateR input[type=radio]:checked").value} ;
                log.push(logObj);

                localStorage.Processed = JSON.stringify(log);

                document.getElementById("late").checked = "";      
             }
             if(document.getElementById("absent").checked == true){
                var absent = "absent";
                alert("Successfully Recorded");
                logObj = {"date":document.getElementById("date").value, "idnum":document.getElementById("idNumber").value, "name":name, "absent":absent, "reason":document.querySelector("#absentR textarea").value, "verdict":document.querySelector("#absentR input[type=radio]:checked").value} ;
                log.push(logObj);

                localStorage.Processed = JSON.stringify(log);
                document.getElementById("absent").checked = "";   
             }
             if(document.getElementById("noId").checked == true){
                var noId= "noID";
                alert("Successfully Recorded");
                logObj = {"date":document.getElementById("date").value, "idnum":document.getElementById("idNumber").value, "name":name, "noId":noId, "reason":document.querySelector("#noIdR textarea").value, "verdict":document.querySelector("#noIdR input[type=radio]:checked").value} ;
                log.push(logObj);

                localStorage.Processed = JSON.stringify(log);

                document.getElementById("noId").checked = "";   
             }
            if(document.getElementById("ImproperHairCut").checked == true){
                 var improperHair = "ImproperHairCut";
                alert("Successfully Recorded");
                logObj = {"date":document.getElementById("date").value, "idnum":document.getElementById("idNumber").value, "name":name, "improperHair":improperHair, "reason":document.querySelector("#ImproperHairCutR textarea").value, "verdict":document.querySelector("#ImproperHairCutR input[type=radio]:checked").value} ;
                log.push(logObj);

                localStorage.Processed = JSON.stringify(log);

                document.getElementById("ImproperHairCut").checked = "";   
                 
             }
             
             if(document.getElementById("ImproShoes").checked == true){
                 var improperShoes = "Improper Shoes";
                alert("Successfully Recorded");
                logObj = {"date":document.getElementById("date").value, "idnum":document.getElementById("idNumber").value, "name":name, "improperShoes":improperShoes, "reason":document.querySelector("#ImproShoesR textarea").value, "verdict":document.querySelector("#ImproShoesR input[type=radio]:checked").value} ;
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
                logObj = {"date":document.getElementById("date").value, "idnum":document.getElementById("idNumber").value, "name":name, "improperUniform":improperUniform, "reason":document.querySelector("#ImproUniformR textarea").value, "verdict":document.querySelector("#ImproUniformR input[type=radio]:checked").value} ;
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
            if(logger[i].late){
                lateCtr++;        
            } else if (logger[i].absent){
                absentCtr++;
            } else if (logger[i].noId){
                noIdCtr++;
            } else if (logger[i].improperHair){
                improperHairCtr++;
            } else if (logger[i].improperShoes) {
                improperShoesCtr++;
            } else if (logger[i].Truancy) {
                truancyCtr++;
            } else if (logger[i].improperUniform) {
                improperUniformCtr++;
            } else if (logger[i].Bullying) {
                bullyingCtr++;
            } else if (logger[i].verbalAbuse) {
                verbalAbuseCtr();
            } else if (logger[i].PublicDA) {
                publicDACtr++;
            } else if (logger[i].Dishonesty) {
                dishonestyCtr++;
            } else if (logger[i].Cheating) {
                cheatingCtr++;
            } else if (logger[i].Smoking) {
                smokingCtr++;
            } else if (logger[i].Intoxication) {
                intoxicationCtr++;
            } else if (logger[i].Innapropriate) {
                innapropriateCtr++;
            } else if (logger[i].Disrespect) {
                disrespectCtr++;
            } else if (logger[i].gadget) {
                gadgetCtr++;
            } else if (logger[i].Vandalism) {
                vandalismCtr++;
            } else if (logger[i].Damage) {
                damageCtr++;
            } else if (logger[i].Stealing) {
                stealingCtr++;
            } else if (logger[i].Tampering) {
                tamperingCtr++;
            } else if (logger[i].Littering) {
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

