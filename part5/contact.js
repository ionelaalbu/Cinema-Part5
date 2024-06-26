const form=document.getElementById('form')
const username=document.getElementById('username');
const password=document.getElementById('password');
const password2=document.getElementById('password2');
const email=document.getElementById('email');


form.addEventListener('submit',(e)=>{
    e.preventDefault()
    checkInput();
} )



function checkInput(){
    const usernameValue=username.value.trim();
    const emailValue=email.value.trim();
    const passwordValue=password.value.trim();
    const password2Value=password2.value.trim();
  
    if (usernameValue === ''){
        setErrorFor(username, 'username cannot be blank')
    }else{
        setSuccessFor(username)
    }



    if (emailValue === ''){
        setErrorFor(email, 'email cannot be blank')
    }else if(!isEmail(emailValue) ){
        setErrorFor(email, 'not availbe email')
    }
    else{
        setSuccessFor(email)
    }


    if (passwordValue === ''){
        setErrorFor(password, 'password cannot be blank')
    }else{
        setSuccessFor(password)
    }



    if (password2Value === ''){
        setErrorFor(password2, 'password cannot be blank')
    }else if(passwordValue !== password2Value) {
        setErrorFor(password2, 'password doesnt match') 
    }else{
        setSuccessFor(password2)
    }
}

function setErrorFor(input,message){
    const formControl=input.parentElement;
    const small=formControl.querySelector('small');
    formControl.className='form-control error';
    small.innerText=message;

}
function setSuccessFor(input){
    const formControl=input.parentElement;
    formControl.className='form-control success';
    
}
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }


