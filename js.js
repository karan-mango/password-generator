

const inp=document.querySelector('#inp1');
var length=12;
let password = '';
function  createPass(){
password='';



    let capital = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let small = 'abcdefghijklmnopqrstuvwxyz';
    let nums = '0123456789';
    let special = '!@#$%^&*()_|<>?/';
    
    let all = capital + small + nums + special;
    
    
    password += capital[Math.floor(Math.random() * capital.length)];
    password += small[Math.floor(Math.random() * small.length)];
    password += nums[Math.floor(Math.random() * nums.length)];
    password += special[Math.floor(Math.random() * special.length)];

    while(length>password.length){

password += all[Math.floor(Math.random() * all.length)];
    }
    
    
    inp.value=password;
    
    
}
function copyp() {
    inp.focus(); // Set focus to the input element
    inp.select(); // Select the text
    document.execCommand('copy'); // Execute the copy command
    window.getSelection().removeAllRanges(); // Remove the selection
}
