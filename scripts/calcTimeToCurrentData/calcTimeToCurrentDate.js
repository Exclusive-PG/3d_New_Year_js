

 const calcTimeToCurrentDate = () =>{
    
    let tempDate = new Date()
    const date1 = new Date();
    const date2 = new Date(`1/1/${tempDate.getFullYear()+1}`);

    let diffTime = Math.abs(date2 - date1);
      
    console.log(convertToDays(diffTime))
   // console.log(diffTime)
    const days = Math.floor(diffTime/(86400 * 1000)); 

    diffTime -= days * (86400*1000)

    const hours = Math.floor(diffTime/(60 * 60 * 1000 ));

    diffTime -= hours*(60*60*1000)

    const min = Math.floor(diffTime/(60 * 1000))

    diffTime -= min*(60*1000)

    const sec = Math.floor(diffTime/(1000))

   // console.log(diffTime + " milliseconds");
    //console.log(diffDays + " days");

    return `New Year in <br> ${days} days ${hours} hours  ${min} minutes ${sec} seconds`;
}

setInterval(()=>{
    document.querySelector(".text_outer").innerHTML = calcTimeToCurrentDate()
    
},1000)


function convertToDays(milliSeconds){
    
    let days = Math.floor(milliSeconds/(86400 * 1000));
    milliSeconds -= days*(86400*1000);
    let hours = Math.floor(milliSeconds/(60 * 60 * 1000 ));
    milliSeconds -= hours * (60 * 60 * 1000);
    let minutes = Math.floor(milliSeconds/(60 * 1000));
    return {
      days,hours,minutes
    } 
      
}


document.querySelector(".text_outer").style.animationPlayState = "paused";
document.querySelector(".off-review").style.display = "none";

setInterval(()=>{
   if(document.querySelector(".text_outer").style.animationPlayState === "paused"){
    document.querySelector(".text_outer").style.animationPlayState = "running";
   }else{
       
    document.querySelector(".text_outer").style.animationPlayState = "paused";
   }

},5000)



