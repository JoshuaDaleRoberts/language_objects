const kit = {
  v: function(verb, tense){
    let finalVerb = ""; let objMark = "";
    if (verb.includes(" ")) {
      let spPos = verb.indexOf(" ")
      objMark = verb.substring(spPos, verb.length);
      verb = verb.substring(0, spPos);
    }
    let a = verb.substring(0,2); 
    if (a != "ku"){
      return "Verb error"
    }
    //0 = present
    if (tense == 0){
      finalVerb = verb.substring(2); 
    }
    //1 = present progressive, 
    if (tense == 1){
      finalVerb = `ke na ${verb}`
    }
    //2 = future
    if (tense == 2){
      finalVerb = "ke " + verb; 
    }
    //3 = past 
    if (tense == 3){
      finalVerb = verb.substring(2) + "ka"
    }
    //4 = past participle has 
   if (tense == 4) {
    finalVerb = "me " + verb.substring(2); 
    }
    //5 = past progressive
    if (tense == 5) {
      finalVerb = "me " + verb.substring(2) + "ka"; 
    }
    finalVerb = finalVerb + objMark
    return finalVerb
  }
}


function testingFunction(){
  let a =  kit.v("kusingala",0);
  document.getElementById("console").innerHTML = a;
}








document.body.onload = testingFunction(); 
