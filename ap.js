// function showResult() {
    // //     let nameStart(a,s,d,f,g,h,j,k,l) = "you are smart.";
    // //     let nameStart(,q,w,e,r,t,u,i,o,p) = "you are dumb.";
    // //     let nameStart,z,x,c,v,b,n,m ="you are Eienstine.";
    // //      if(nameStart,a,s,d,f,g,h,j,k,l){
    // //          console.log(document.querySelector("input").text="you are smart");
    // //      }else(nameStart[q,w,e,r,t,y,u,i,o,p){
    // //          console.log(dcument.querySelector("input").text="ou are dumb");
    // //      }
    // // }
    // // //if the name start with 1st let show u r smart;
    // // //if name start wd 2nd showu r dumb
    // // //if name stat wd 3rd 1 show that u r eienstine
    // // //this all prnt in console log 
    // let name="";
     let intelligenceLevel=["smart","dumb","mastermind", "genius","brillient","fantastic","good","fabulous","cooooll","jack of all class","unbeleiveable","dumb","null"];
    // //  function showResult(){
    //      //1.get input name
    //      //2.if input name is empty than show alert
    //      //wrna goto step 3
    //      //3. randomly select inteligence level
    //      //loops
    //      //if,else
    //      //math.random
    //      //show user their intelligenc3e level
    // //      let name = document.querySelector("input").value;
    // //      if(name=="false"){
    // //          alert("plz enter name");
    // //      } else{
    // //          for(let i = 0 ;i,< intelligenceLevels.lenght;
    // //             i++ ){
    // //                 alert(intelligenceLevel[i]);
    // //             }
    // //      }
    // //  }loops se ni howa
    // // function showResult(){
    // //     let name = document.querySelector("input").value;
    // //      if(name=="false"){
    // //         alert("plz enter name");
    // //      }
    // // }
    // function showResult(){
    //     let name = document.querySelector("input").value;
        
    //     if(name == false){
    //         alert("plz enter ur name");
    //     }
    //     else {
    //         if(name.charAt(0).toLowerCase() == "a"){
    //             intelligence = intelligenceLevel[6];
    //             alert(intelligence);
    //         }
    //         else if(name.charAt(0).toLowerCase() == "b"){
    //             intelligence = intelligenceLevel[5];
    //             alert(intelligence);
    //         }
        
    //     }
        
    //         // if(name.charAt(0).toLowerCase() == "b"){
    //         //     intelligence = intelligenceLevel[5];
    //         //     alert(intelligence);
    //         // }else if(name.charAt(0).toLowerCase);
        
    
    // }
    function showResult(){
        let name = document.querySelector("input").value;
     //let intelligenceLevel=["smart","dumb","mastermind", "genius","brillient","fantastic","good","fabulous","loral","jack of all class",];
        let randomIndex = parseInt(Math.random()*intelligenceLevel.length);
        alert( intelligenceLevel[randomIndex]) ;
    }