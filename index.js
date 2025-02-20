const jellybutton = document.getElementById("jellybutton")
const jellyinput = document.getElementById("jellyinput")
const jellydiv = document.getElementById("jellydiv");

jellybutton.addEventListener("click",function(){
    const divinephase = document.createElement("div")
    const phase = document.createElement("p")
    phase.textContent=jellyinput.value;
    // buttons
    const jellyremove=document.createElement("button");
    const jellystrike=document.createElement("button");
    jellyremove.textContent="remove";
    jellystrike.textContent="strike";
    jellyremove.addEventListener("click",function(){
        divinephase.remove();
    })
    jellystrike.addEventListener("click",function(){
        if(phase.style.textDecoration==="line-through")
        {
            phase.style.textDecoration="none";
            jellystrike.textContent="strike";
        }
        else{
            phase.style.textDecoration="line-through";
            jellystrike.textContent="undo";
        }
    })
    //
    divinephase.style.display="flex";
    divinephase.style.alignItems="center";
    jellystrike.style.marginLeft="auto";
    //
    divinephase.appendChild(phase)
    divinephase.appendChild(jellystrike)

    divinephase.appendChild(jellyremove)
    jellydiv.appendChild(divinephase)

    //
    jellyinput.value="";
})