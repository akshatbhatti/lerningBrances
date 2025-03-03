let b=44545;

let a-23;
let0eewe=545
let efdf=335353;
rwewffg
gvfdgfdg


let partnerPageId = document.querySelector(".page-id-292");
if (partnerPageId) {
    let nameValidation = document.querySelector("#form-field-name");
    let lastName=document.querySelector("#form-field-field_9989548");

   let phoneNumber=document.querySelector("#form-field-field_f9dba0b");

    if (nameValidation && lastName && phoneNumber) {


        nameValidation.addEventListener("input", (e) => {
            e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, '');


            if (e.target.value.trim() === '') {
                nameValidation.setCustomValidity('Please Fill Your First name');
            } else {
                nameValidation.setCustomValidity('');
            }
        });

        lastName.addEventListener("input", (e) => {
            e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, '');


            if (e.target.value.trim() === '') {
                nameValidation.setCustomValidity('Please Fill Your Last name');
            } else {
                nameValidation.setCustomValidity('');
            }
        });



        phoneNumber.addEventListener("input", (e) => {
           
            e.target.value = e.target.value.replace(/\D/g, '');

           
            if (e.target.value.length > 10) {
                e.target.value = e.target.value.slice(0, 10);
            }

           
            if (e.target.value.length === 0) {
                verifyNumber.setCustomValidity('Please fill in your number');
            } else if (e.target.value.length !== 10) {
                verifyNumber.setCustomValidity('Phone number must be exactly 10 digits');
            } else {
                verifyNumber.setCustomValidity('');
            }
        });

       
        phoneNumber.addEventListener("blur", () => {
            phoneNumber.reportValidity();
        });

        lastName.addEventListener("blur",()=>{
            lastName.reportValidity()
        })

        nameValidation.addEventListener("blur",()=>{
            nameValidation.reportValidity()
        })
        
        
 }

}