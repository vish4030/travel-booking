
const formValidation = (name, value)=>{
    switch(name){
        case 'email':
            if(value.trim() === ""){
                name.nextSibling.innerHTML = "Enter the Email";
                name.focus();
            }else{
                let email_pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
                return email_pattern.test(value.trim());
            }
            break;
        case 'password':
            if(value.trim() === "") {
                name.nextSibling.innerHTML = "Enter the Password";
                name.focus();
            }else{
                let password_pattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
                return password_pattern.test(value.trim());
            }  
            break;  
    }
}


document.querySelector("input").addEventListener("input",function(e){
  
     if(formValidation(this.name, this.value)) this.nextElementSibling.innerHTML = "";
     else if(this.value.trim() != "") {this.nextElementSibling.innerHTML = `Invalid ${this.name}`; this.focus()}
    
})

document.querySelector("form").addEventListener("submit", onSubmit);


// Function to handle form submission
function onSubmit(e) {
    e.preventDefault();

    const form = document.querySelector("form");
    if(form.email.value.trim() == "") {alert("Enter Email"); form.email.focus()}
    else{!formValidation('email', form.email.value) && alert("enter Valid Email"); form.email.focus()}

    if(form.password.value.trim() == "") {alert("Enter Password"); form.password.focus()}
    else{!formValidation('password', form.password.value) && alert("enter Valid Password"); form.password.focus()}
}