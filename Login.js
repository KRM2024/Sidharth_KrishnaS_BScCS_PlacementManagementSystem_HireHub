document.getElementById('loginForm').addEventListener('submit',function(event){
    event.preventDefault();
    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;
    console.log('Email:',email);
    console.log('Password:',password);
    if(email==='hirehub@gmail.com'&&password==='112233') {
        alert('Login successful!');
        window.location.href='index.html';
    }else{
        alert('Invalid email or password.');
    }
});