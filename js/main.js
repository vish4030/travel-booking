

const formValidation = (name, value)=>{
    switch(name){
        case 'loc':
            if(value.trim() === ""){
                name.nextSibling.innerHTML = "Enter the location";
                name.focus();
            }else{
                return true;
            }
            break;
        case 'date_s':
            if(value.trim() === "") {
                name.nextSibling.innerHTML = "Enter the Check-in";
                name.focus();
            }else{
                return true;
            }  
            break;  
        case 'date_e':
            if(value.trim() === "") {
                name.nextSibling.innerHTML = "Enter the Check-out";
                name.focus();
            }else{
                return true;
            }  
            break;    
    }
}

document.querySelector("form").addEventListener("submit", onSubmit);


// Function to handle form submission
function onSubmit(e) {
    e.preventDefault();

    const form = document.querySelector("form");
    if(form.loc.value.trim() == "") {alert("Enter Location"); form.loc.focus(); return;}
    else{!formValidation('loc', form.loc.value) && alert("enter Valid Location");}

    if(form.date_s.value.trim() == "") {alert("Enter Check-in"); form.date_s.focus(); return;}
    else{!formValidation('date_s', form.date_s.value) && alert("enter Valid date"); }

    if(form.date_e.value.trim() == "") {alert("Enter Check-out"); form.date_e.focus(); return;}
    else{!formValidation('date_e', form.date_e.value) && alert("enter Valid date"); }

    alert("form Submitted");
    form.loc.value="";
    form.date_s.value="";
    form.date_e.value="";
}



let rev = 0;
carousel(rev);

function prevReview(){
    rev-=1;
    carousel(rev);
}

function nextReview(){
    rev+=1;
    carousel(rev);
}

setInterval(()=>{
    carousel(rev);
    rev+=1;
},3000)

function carousel(review){
    let reviews = document.getElementsByClassName("review_item");
    if(review >= reviews.length){
        review = 0;
        rev =0;
    }

    if(review<0){
        review = reviews.length -1;
        rev = reviews.length - 1;
    }

    for(let i=0; i<reviews.length; i++){
        reviews[i].style.display = "none";
    }
    reviews[review].style.display = "block"; 
}