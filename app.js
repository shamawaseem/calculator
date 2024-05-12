let btns=document.querySelectorAll("button");
let str="";
let op="";
let no1="";
let no2="";
let inp=document.querySelector("input");
btns.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
    if(e.target.value=="=")
    {
        no2=str;
        str=eval(`${no1}${op}${no2}`);
        inp.value=str;
    }
    else if(e.target.value=="+"||e.target.value=="-"||e.target.value=="*"||e.target.value=="/"){
        op=e.target.value;
        no1=str;
        inp.value="";
        str=""
    }
    else if(e.target.value=="AC")
        {
            inp.value="";
            str="";
        }
    else
    {
        
        str=str+e.target.value;
        inp.value=str;
    }
})});