const input = document.getElementById('password');
 const eyeIcon = document.getElementById('eye-icon');
eyeIcon.addEventListener('click',function(){
   if(input.type === 'password'){
    input.type = 'text';

    eyeIcon.classList.remove('fa-eye');
    eyeIcon.classList.add('fa-eye-slash');

}else{
    input.type = 'password';

    eyeIcon.classList.remove('fa-eye-slash');
    eyeIcon.classList.add('fa-eye');
}
})