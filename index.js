const next = document.querySelector(".next");
const back = document.querySelector(".back");
const circle = document.querySelectorAll(".circle");
const onoff = document.querySelector(".onoff");
const monthly = document.querySelector(".monthly");
const yearly = document.querySelector(".yearly");
const free = document.querySelectorAll(".free");
const square = document.querySelectorAll(".square");
const planValue = document.querySelectorAll(".plan-value");
const planP = document.querySelectorAll(".plan-p");
const options = document.querySelectorAll(".options");
const checkbox = document.querySelectorAll(".options input");
let selectedPlan = 'Advanced';
const pannels = document.querySelectorAll(".pannel");
const errors = document.querySelectorAll(".error");
const nameInp = document.querySelector(".nameInp");
const emailInp = document.querySelector(".emailInp");
const phoneInp = document.querySelector(".phoneInp");
const perMonth = document.querySelector(".permonth");
const selectedPeriod = document.querySelector(".selected-period");
const selectedPlanTotal = document.querySelector(".selected-plan-total");
const finalTotalPeriod = document.querySelectorAll(".final-total-period");
const finalPlanPrice = document.querySelector(".final-plan-price");
const addonsTotalSelected = document.querySelectorAll(".addons-total")
const summaryTotalPrice = document.querySelector(".summary-total-price");
const summaryOptions = document.querySelectorAll(".summary-options");
const changeBtn = document.querySelector(".change-btn");
const errorsMsg = {
    empty: "This field is required",
    name: "Invalid name",
    email: "Invalid email",
    phone: "Invalid phone number (Min. 10 digits)",
    phonemax: "Invalid phone number (Max. 10 digits)"
};
let total = 0;
let planTotal =9;
console.log(summaryOptions[0]);



const nameRegex = /^[a-zA-Z\s]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let isSelected = 0;
square[isSelected].classList.add('selected');

square[0].onclick = ()=>{
    isSelected=0;
    square[0].classList.add('selected');
    square[1].classList.remove('selected');
    square[2].classList.remove('selected');
    planTotal=parseInt(planValue[0].innerHTML);
    
    
}
square[1].onclick = ()=>{
    isSelected=1;
    square[0].classList.remove('selected');
    square[1].classList.add('selected');
    square[2].classList.remove('selected');
    planTotal=parseInt(planValue[1].innerHTML);
    
    
}
square[2].onclick = ()=>{
    isSelected=2;
    square[0].classList.remove('selected');
    square[1].classList.remove('selected');
    square[2].classList.add('selected');
    planTotal=parseInt(planValue[2].innerHTML);
    

}



onoff.value='off';
onoff.onclick = ()=>{
    if(onoff.value=='off'){
        onoff.value='on';
        monthly.classList.remove("on-color");
        monthly.classList.add("off-color");
        yearly.classList.remove("off-color");
        yearly.classList.add("on-color");
        free[0].classList.remove("hidden");
        free[1].classList.remove("hidden");
        free[2].classList.remove("hidden");
        planValue[0].innerHTML = parseInt(planValue[0].innerHTML)*10;
        planValue[1].innerHTML = parseInt(planValue[1].innerHTML)*10;
        planValue[2].innerHTML = parseInt(planValue[2].innerHTML)*10;
        planValue[3].innerHTML = parseInt(planValue[3].innerHTML)*10;
        planValue[4].innerHTML = parseInt(planValue[4].innerHTML)*10;
        planValue[5].innerHTML = parseInt(planValue[5].innerHTML)*10;
        planP[0].innerHTML = `$${parseInt(planValue[0].innerHTML)}/yr`;
        planP[1].innerHTML = `$${parseInt(planValue[1].innerHTML)}/yr`;
        planP[2].innerHTML = `$${parseInt(planValue[2].innerHTML)}/yr`;
        planP[3].innerHTML = `+$${parseInt(planValue[3].innerHTML)}/yr`;
        planP[4].innerHTML = `+$${parseInt(planValue[4].innerHTML)}/yr`;
        planP[5].innerHTML = `+$${parseInt(planValue[5].innerHTML)}/yr`;
        perMonth.innerHTML = `(per year)`;
        selectedPeriod.innerHTML = `(Yearly)`;
        finalTotalPeriod[0].innerHTML=`/yr`;
        finalTotalPeriod[1].innerHTML=`/yr`;
        finalTotalPeriod[2].innerHTML=`/yr`;
        finalTotalPeriod[3].innerHTML=`/yr`;
        finalTotalPeriod[4].innerHTML=`/yr`;
        total*=10;
        planTotal*=10;
        summaryOptions[0].innerHTML = parseInt(planValue[3].innerHTML);
        summaryOptions[1].innerHTML = parseInt(planValue[4].innerHTML);
        summaryOptions[2].innerHTML = parseInt(planValue[5].innerHTML);
        
        
        
        return;
    }
    
    if(onoff.value=='on'){
        onoff.value='off';
        monthly.classList.add("on-color");
        monthly.classList.remove("off-color");
        yearly.classList.add("off-color");
        yearly.classList.remove("on-color");
        free[0].classList.add("hidden");
        free[1].classList.add("hidden");
        free[2].classList.add("hidden");
        planValue[0].innerHTML = parseInt(planValue[0].innerHTML)/10;
        planValue[1].innerHTML = parseInt(planValue[1].innerHTML)/10;
        planValue[2].innerHTML = parseInt(planValue[2].innerHTML)/10;
        planValue[3].innerHTML = parseInt(planValue[3].innerHTML)/10;
        planValue[4].innerHTML = parseInt(planValue[4].innerHTML)/10;
        planValue[5].innerHTML = parseInt(planValue[5].innerHTML)/10;
        planP[0].innerHTML = `$${parseInt(planValue[0].innerHTML)}/mo`;
        planP[1].innerHTML = `$${parseInt(planValue[1].innerHTML)}/mo`;
        planP[2].innerHTML = `$${parseInt(planValue[2].innerHTML)}/mo`;
        planP[3].innerHTML = `+$${parseInt(planValue[3].innerHTML)}/mo`;
        planP[4].innerHTML = `+$${parseInt(planValue[4].innerHTML)}/mo`;
        planP[5].innerHTML = `+$${parseInt(planValue[5].innerHTML)}/mo`;
        perMonth.innerHTML = `(per month)`;
        selectedPeriod.innerHTML = `(Monthly)`;
        total/=10;
        planTotal/=10;

        finalTotalPeriod[0].innerHTML=`/mo`;
        finalTotalPeriod[1].innerHTML=`/mo`;
        finalTotalPeriod[2].innerHTML=`/mo`;
        finalTotalPeriod[3].innerHTML=`/mo`;
        finalTotalPeriod[4].innerHTML=`/mo`;
        summaryOptions[0].innerHTML = parseInt(planValue[3].innerHTML);
        summaryOptions[1].innerHTML = parseInt(planValue[4].innerHTML);
        summaryOptions[2].innerHTML = parseInt(planValue[5].innerHTML);
        
        
        
        
        return;
    }
    
}

let step=0;

next.onclick = ()=>{
    try{
        nameCheck();
        emailCheck();
        phoneCheck();
        finalPlanPrice.innerHTML=planTotal;
        summaryTotalPrice.innerHTML=total+planTotal
    
        
        
        
        if(nameCheck() && emailCheck() && phoneCheck() ){
            circle[step].classList.remove("active");
            step+=1;
            renderStep();
            check();
            
        }
        selectedTotal();
        
        
        
    }
    catch(e){
        location.reload();
    }
    

    
}

back.onclick = ()=>{
    circle[step].classList.remove("active");
    step-=1;
    check();
    renderStep();
}

function selectedTotal(){
    if(isSelected==0){
        selectedPlanTotal.innerHTML = "Arcade";
    }
    if(isSelected==1){
        selectedPlanTotal.innerHTML = "Advanced";
    }
    if(isSelected==2){
        selectedPlanTotal.innerHTML = "Pro";
    }
}

function nameCheck(){
    if(nameInp.value==''){
        errors[0].innerHTML = errorsMsg.empty;
        errors[0].classList.remove("hidden");
        return false;
    }else{
        errors[0].classList.add("hidden");
        
    }
    if(nameRegex.test(nameInp.value)){

    }else{
        errors[0].classList.remove("hidden");
        errors[0].innerHTML = errorsMsg.name;
        return false;
    }
return true;

}
function emailCheck(){
    if(emailInp.value==''){
        errors[1].innerHTML = errorsMsg.empty;
        errors[1].classList.remove("hidden");
        return false;;
    }else{
        errors[1].classList.add("hidden");
    }

    if(emailRegex.test(emailInp.value)){

    }else{
        errors[1].classList.remove("hidden");
        errors[1].innerHTML = errorsMsg.email;
        return false;
    }
    return true;
}
function phoneCheck(){
    if(phoneInp.value==''){
        errors[2].innerHTML = errorsMsg.empty;
        errors[2].classList.remove("hidden");
        return false;;
    }else{
        errors[2].classList.add("hidden");
    }

    if(phoneInp.value.length<10){
        errors[2].classList.remove("hidden");
        errors[2].innerHTML = errorsMsg.phone;
        return false;
    }
    if(phoneInp.value.length>10){
        errors[2].classList.remove("hidden");
        errors[2].innerHTML = errorsMsg.phonemax;
        return false;
    }
    return true;
}

function check(){
   
        if(step<=4){
            if(step==0){
                back.classList.add("hidden2");
            }
        if(step>2){
            next.innerHTML = 'Confirm';
        }else{next.innerHTML = 'Next Step';}
        if(step>0){
            back.classList.remove("hidden2");
        }
   
        if(step>3){
    
            back.classList.add("hidden2");
            return;
        }
        circle[step].classList.add("active");
        }
}
    


function renderStep(){
    pannels[0].classList.add('hidden');
    pannels[1].classList.add('hidden');
    pannels[2].classList.add('hidden');
    pannels[3].classList.add('hidden');
    pannels[4].classList.add('hidden');
    pannels[step].classList.remove('hidden');
    
}

options[0].onclick=()=>{
    if(checkbox[0].checked==true){
        options[0].classList.remove("selected");
        checkbox[0].checked = false;
        addonsTotalSelected[0].classList.add("hidden");
        total-=parseInt(planValue[3].innerHTML) ;
        
        
    }else{
        options[0].classList.add("selected");
        checkbox[0].checked = true;
        addonsTotalSelected[0].classList.remove("hidden");
        total+=parseInt(planValue[3].innerHTML) ;
        
        
    }
}
options[1].onclick=()=>{
    if(checkbox[1].checked==true){
        options[1].classList.remove("selected");
        checkbox[1].checked = false;
        addonsTotalSelected[1].classList.add("hidden");
        total-=parseInt(planValue[4].innerHTML) ;
        
    }else{
        options[1].classList.add("selected");
        checkbox[1].checked = true;
        addonsTotalSelected[1].classList.remove("hidden");
        total+=parseInt(planValue[4].innerHTML) ;
        
    }
    
}
options[2].onclick=()=>{
    if(checkbox[2].checked==true){
        options[2].classList.remove("selected");
        checkbox[2].checked = false;
        addonsTotalSelected[2].classList.add("hidden");
        total-=parseInt(planValue[5].innerHTML) ;
        
    }else{
        options[2].classList.add("selected");
        checkbox[2].checked = true;
        addonsTotalSelected[2].classList.remove("hidden");
        total+=parseInt(planValue[5].innerHTML) ;
        
    }
}

changeBtn.onclick= ()=>{
    step=1;
    circle[step].classList.add("active");
    circle[3].classList.remove("active");
    renderStep();
}
