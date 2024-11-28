"use strict";
let myName = document.getElementById("name");
let desig = document.getElementById("desig");
let phone = document.getElementById("contact");
let email = document.getElementById("email");
let address = document.getElementById("add");
// document.addEventListener("DOMContentLoaded",function(){
// })
let education = document.getElementById("edu");
let Higherqualification = document.getElementById("hq");
let secondary_qualifiaction = document.getElementById("sq");
let skill_1 = document.getElementById("skill1");
let skill_2 = document.getElementById("skill2");
let skill_3 = document.getElementById("skill3");
let skill_4 = document.getElementById("skill4");
let lang_1 = document.getElementById("lang1");
let lang_2 = document.getElementById("lang2");
let about = document.getElementById("about");
let stYear = document.getElementById("styear");
let endYear = document.getElementById("edyear");
let company = document.getElementById("company");
let company_lucation = document.getElementById("Com-lucation");
let job_tital = document.getElementById("job-tital");
let achv1 = document.getElementById("achv-1");
let achv2 = document.getElementById("achv-2");
let achv3 = document.getElementById("achv-3");
let pic = document.getElementById("pic");
let submitBtn = document.getElementById("submitbtn");
let form = document.getElementById("form");
// Start Code of Submit button When click submit button Input text data store in local-storage
form?.addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log(myname?.value);        // uncomment For check in browser right click inspect consile
    localStorage.setItem("name", myName.value);
    // console.log(localStorage.getItem("name"));    // For check in browser right click inspect consile
    localStorage.setItem("desig", desig.value);
    localStorage.setItem("phone", phone.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("address", address.value);
    console.log(localStorage.getItem("address"));
    localStorage.setItem("edu", education.value);
    localStorage.setItem("hq", Higherqualification.value);
    localStorage.setItem("sq", secondary_qualifiaction.value);
    localStorage.setItem("skill1", skill_1.value);
    localStorage.setItem("skill2", skill_2.value);
    localStorage.setItem("skill3", skill_3.value);
    localStorage.setItem("skill4", skill_4.value);
    localStorage.setItem("lang1", lang_1.value);
    localStorage.setItem("lang2", lang_2.value);
    localStorage.setItem("about", about.value);
    localStorage.setItem("styea", stYear.value);
    localStorage.setItem("edyear", endYear.value);
    localStorage.setItem("company", company.value);
    localStorage.setItem("Com-lucation", company_lucation.value);
    localStorage.setItem("job-tital", job_tital.value);
    localStorage.setItem("achv-1", achv1.value);
    localStorage.setItem("achv-2", achv2.value);
    localStorage.setItem("achv-3", skill_3.value);
    if (pic.files && pic.files[0]) {
        let reader = new FileReader();
        reader.addEventListener("load", () => {
            let textimage = reader.result;
            // console.log(textimage);      // check for browesr console text-image
            localStorage.setItem("profile_pic", textimage); // data store in local-storage with the name of profile_pic
        });
        reader.readAsDataURL(pic.files[0]);
    }
    window.location.href = "./Resume/resume.html";
    // =========================End over All code ====================================
    // ================================================================================
    // ================ just for checking consile to browser below code ====================
    console.log(pic);
    console.log(pic.files);
    console.log(pic.files[0]);
    console.log(localStorage.getItem("skill3"));
    console.log(localStorage.getItem("email"));
    console.log(localStorage.getItem("Com-lucation"));
    console.log(localStorage.getItem("achv-3"));
});
