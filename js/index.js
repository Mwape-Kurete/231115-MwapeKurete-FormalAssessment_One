//Formal Assessment JS -> Starts here 

// creating Student obj 
// JS test --> console.log("hello  world"); 

addNewStudent = () => {
    
    let fullName = document.getElementById("fName_sName").value;
    
    //delimiting fullname var 
    let fName = fullName.trim().split(' ')[0];

        //fetching index of the start of the surname 
        //let indexSname = +fullName.indexOf(" "); }} didn't need this code 

    let sName = fullName.substring(fullName.indexOf(" ") + 1); 
    //console.log(indexSname + sName);

    

    //getting the other values 
    let email = document.getElementById("txtEmail").value;
    let telNumber = +document.getElementById("txtNum").value;
    let subjChoice = document.getElementById("selectSubj").value;
    let userPassword = document.getElementById("txtPassword").value;
    let checkFlag = document.getElementById("sendSpam").checked;

    //checking inputs grabbed 
    console.log(fName + " " + sName + " " + email + " " + telNumber + " " + subjChoice + " " + userPassword + " " + checkFlag);
//Well, well, well... why don't you want to sign up for our newsletter... you don't seem to be that interested Name & Surname!  If you want to sign up, you better CHECK that newsletter box! 
    if(checkFlag === true){
        alert("Welcome " + fName + " " + sName + "! Thank you for your interest in " + subjChoice + "! We will contact you via the email provided: " + email + ", or alternatively on the phone number: " + telNumber + ".");
    }else{
        alert("Well, well, well... why don't you want to sign up for our newsletter... you don't seem to be that interestd " + fName + " " + sName + "! If you want to sign up, you better check that newsletter box!");
    }

    document.getElementById("form");
}