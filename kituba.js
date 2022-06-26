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
    //tenses
    //0 = present
    if (tense == 0){
      finalVerb = verb.substring(2); 
      
    }
    //1 = present progressive, 
    //2 = future
    //3 = past 
    //4 = past participle has 
    //5 = past progressive
    finalVerb = finalVerb + objMark
    return finalVerb
  }
}


function testingFunction(){
  let a =  kit.v("kusingala",0);
  document.getElementById("console").innerHTML = a;
}








document.body.onload = testingFunction(); 
