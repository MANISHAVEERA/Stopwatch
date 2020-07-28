let sec=0;
let minute=0;
let hrs=0;
let startbtn;
let time;
window.onload=()=>{
 startbtn=document.getElementById('strt')
 time=document.getElementById('timer')
 pause=document.getElementById('pause')
}
start=()=>{
    if(startbtn.textContent=="START"){
      
    interval=window.setInterval(inc,1000);
    startbtn.textContent="STOP"
   
    }
    else if(startbtn.textContent=="STOP"){
        window.clearInterval(interval)
        sec=0
        minute=0
        hrs=0
        
        time.textContent=`${String(hrs).padStart(2, '0')} : ${String(minute).padStart(2, '0')} : ${String(sec).padStart(2, '0')} `
        startbtn.textContent="START"
        
    }
    
pause=(e)=>{
    var pause=document.getElementById('pause')
    if(pause.textContent=="RESUME"){
        interval=window.setInterval(inc,1000)
        pause.textContent="PAUSE"
    }
    else{
        startbtn=document.getElementById('strt')
        if(startbtn.textContent=="STOP"){
            window.clearInterval(interval)
            pause.textContent="RESUME"
        }
    }
}


    
  

}
inc=()=>{
    if(sec===60){
        minute+=1;
        sec=0;
    }
    else if(minute===60){
        hrs+=1;
        sec=0
        minute=0
    }
    sec+=1
    time.textContent=`${String(hrs).padStart(2, '0')} : ${String(minute).padStart(2, '0')} : ${String(sec).padStart(2, '0')} `
       
    lap=()=>{
   
        let ol=document.getElementById('ul')
        let li=document.createElement('li')
        
        li.textContent=`${String(hrs).padStart(2, '0')} : ${String(minute).padStart(2, '0')} : ${String(sec).padStart(2, '0')} `
        document.getElementById('clearlap').style.display='block'
        ol.appendChild(li)
       
    }
}

clearlap=()=>{
    let ol=document.getElementById('ul')
    ol.innerHTML=""
    document.getElementById('clearlap').style.display='none'
}

