joinUni = () =>{
    let fullName = document.getElementById("nameSurname").value
    let email = document.getElementById("email").value
    let phoneNo = document.getElementById("contactNo").value
    let subject = document.getElementById("subjectSelect").value
    let newsletter = document.getElementById("newsletter")

    if(newsletter.checked){
        alert("Welcome "+fullName+ " Thank you for your interest in "+subject+"! We will contact you via the email you provided: "+email+", or alternatively on the phone number: "+phoneNo);
    }
    else if(!newsletter.checked){
        alert("Well, well, well... why don't you want to sign up for our newsletter... you don't seem to be that interested "+fullName+"! If you want to sign up, you better CHECK that newsletter box!");
    }
}

document.getElementById("form").reset();