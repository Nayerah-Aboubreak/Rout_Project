

function dispalayThems() {



    let websiteType = document.getElementById("webType").value;

    if (websiteType == "Beauty/fashion") {
        document.getElementById("beauty").style.display = "block"
        document.getElementById("business").style.display = "none"
        document.getElementById("medical").style.display = "none"
    }

    else if (websiteType == "Business") {
        document.getElementById("business").style.display = "block"
        document.getElementById("medical").style.display = "none"
        document.getElementById("beauty").style.display = "none"

    }
    else if (websiteType == "Medical") {

        document.getElementById("medical").style.display = "block"
        document.getElementById("business").style.display = "none"
        document.getElementById("beauty").style.display = "none"

    }

}


var header = " ";
var medicalTemp = Array.from(document.querySelectorAll("#medical .medTemp  .medical"));
var beautyTemp = Array.from(document.querySelectorAll(".beauty "));
var businessTemp = Array.from(document.querySelectorAll(".business"));
localStorage.setItem("medical", JSON.stringify(medicalTemp));
localStorage.setItem("beauty", JSON.stringify(beautyTemp));
localStorage.setItem("business", JSON.stringify(businessTemp));

for (var i = 0; i < medicalTemp.length; i++) {
    medicalTemp[i].addEventListener("click", medtemplates)

}


for (var i = 0; i < businessTemp.length; i++) {
    businessTemp[i].addEventListener("click", bustemplates)
}



for (var i = 0; i < beautyTemp.length; i++) {
    beautyTemp[i].addEventListener("click", beautemplates)
}

function medtemplates(e) {

    let imgSrc = medicalTemp.indexOf(e.target);
    localStorage.setItem("medicalPic", JSON.stringify(imgSrc))
    console.log(imgSrc)

 
}

function beautemplates(e) {

    let imgSrc = beautyTemp.indexOf(e.target);
    localStorage.setItem("beautyPic", JSON.stringify(imgSrc))
    console.log(imgSrc)

  
}

function bustemplates(e) {

    let imgSrc = businessTemp.indexOf(e.target);
    localStorage.setItem("businessPic", JSON.stringify(imgSrc))
    console.log(imgSrc)

  
}

