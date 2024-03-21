document.addEventListener('DOMContentLoaded',function()
{
    var createbutton=document.querySelector('.card')
    createbutton.addEventListener('click',function()
    {
        var emailinput=document.getElementById('emailid').value;
        var passinput=document.getElementById('pwd').value;

        console.log('EmailID:',emailinput);
        console.log('Password:',passinput);

        alert('Email: '+emailinput+'\nPassword: '+passinput);
    });
}  

);