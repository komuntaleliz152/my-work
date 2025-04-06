const accountFormValidation =()=>{
    const name =document.getElementById(" First Name")

    let error =0;
    let nameRegex = /^[a-zA-Z\s]{1,50}$/;

    if(nameRegex.test(name.value) ==false){
        name.style.border = "1px solid red"
        document.getElementById("firstnameError").innerHTML = "Enter a valid first name"
        error++;
    }


}


if(error >0){
    e.preventDefault()
}