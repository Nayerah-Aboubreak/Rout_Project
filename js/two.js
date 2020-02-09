

$(function(){


    
   let mPic = JSON.parse(localStorage.getItem("medical"));
   let btPic =JSON.parse(localStorage.getItem("beauty"));
   let pPic = JSON.parse(localStorage.getItem("business"));

   let urlMedical =JSON.parse(localStorage.getItem("medicalPic"));
   for( let i = 0 ; i < mPic.length ; i ++){

    if(urlMedical == 0){
        $("#back_Ground").html(` <header id="headmedical1" class="background mb-3">
            <nav class="  navbar navbar-expand-xl navbar-light bg-light fixed-top" >
                <a class="navbar-brand " style="font-weight: 700; font-size: 40px;" href="#">LOGO </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class=" collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div class="navbar-nav " style="font-size: 20px;font-weight: 600;">
                        <a class="nav-item nav-link active" href="#home">Home <span class="sr-only">(current)</span></a>
                        <a class="nav-item nav-link" href="#about">About</a>
                        <a class="nav-item nav-link" href="#services">Services</a>
                        <a class="nav-item nav-link " href="#contacts">Contact Us</a>
                    </div>
                    
                </div>
            </nav>
            <img class=" backimg img-fluid" src="imgs/doctor-1149149.jpg">
            
            </header>`)}
    else if(urlMedical == 1)
    {
        $("#back_Ground").html(` <header id="headmedical1"  class="background mb-3">
        <nav class="  navbar navbar-expand-xl navbar-light bg-light fixed-top" >
        <a class="navbar-brand " style="font-weight: 700; font-size: 40px;" href="#">LOGO </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class=" collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div class="navbar-nav " style="font-size: 20px;font-weight: 600;">
                <a class="nav-item nav-link active" href="#home">Home <span class="sr-only">(current)</span></a>
                <a class="nav-item nav-link" href="#about">About</a>
                <a class="nav-item nav-link" href="#services">Services</a>
                <a class="nav-item nav-link " href="#contacts">Contact Us</a>
            </div>
            
        </div>
    </nav>
            <img class=" backimg img-fluid" src="imgs/kendal-L4iKccAChOc-unsplash.jpg">
            
            </header>`)}
    
 else if(urlMedical == 2)
            {
                $("#back_Ground").html(` <header id="headmedical1"  class="background mb-3">
                    <nav class="   navbar navbar-expand-xl navbar-light bg-light fixed-top" >
                        <a class="navbar-brand " style="font-weight: 700; font-size: 40px;" href="#headmedical1">LOGO </a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class=" collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                            <div class="navbar-nav " style="font-size: 20px;font-weight: 600;">
                                <a class="nav-item nav-link active" href="#home">Home <span class="sr-only">(current)</span></a>
                                <a class="nav-item nav-link" href="#about">About</a>
                                <a class="nav-item nav-link" href="#services">Services</a>
                                <a class="nav-item nav-link " href="#contacts">Contact Us</a>
                            </div>
                            
                        </div>
                    </nav>
                    <img class=" backimg img-fluid" src="imgs/ani-kolleshi-7jjnJ-QA9fY-unsplash.jpg">
                    
             </header>`)}

else if(urlMedical == 3)
             {
                 $("#back_Ground").html(` <header id="headmedical1"  class="background mb-3">
                     <nav class="   navbar navbar-expand-xl navbar-light bg-light fixed-top ">
                         <a class="navbar-brand " style="font-weight: 700; font-size: 40px;" href="#headmedical1">LOGO </a>
                         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                             aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                             <span class="navbar-toggler-icon"></span>
                         </button>
                         <div class=" collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                             <div class="navbar-nav " style="font-size: 20px;font-weight: 600;">
                                 <a class="nav-item nav-link active" href="#home">Home <span class="sr-only">(current)</span></a>
                                 <a class="nav-item nav-link" href="#about">About</a>
                                 <a class="nav-item nav-link" href="#services">Services</a>
                                 <a class="nav-item nav-link " href="#contacts">Contact Us</a>
                             </div>
                             
                         </div>
                     </nav>
                     <img class=" backimg img-fluid" src="imgs/thermometer-1539191.jpg">
                     
              </header>`)}

    }


    let urlBeauty =JSON.parse(localStorage.getItem("beautyPic"));
   for( let i = 0 ; i < btPic.length ; i ++){

    if(urlBeauty == 0){
        $("#back_Ground").html(`  <header id="headbeauty1"  class="background  mb-3">


        <nav class="   navbar navbar-expand-xl navbar-danger bg-light fixed-top  ">
            <a class="navbar-brand " style="  font-weight: 700; font-size: 40px; " href="#headbeauty1">LOGO </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class=" collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div class="navbar-nav " style="font-size: 20px;font-weight: 600; ">
                    <a class="nav-item nav-link active" href="#home">Home <span class="sr-only">(current)</span></a>
                    <a class="nav-item nav-link" href="#about">About</a>
                    <a class="nav-item nav-link" href="#services">Services</a>
                    <a class="nav-item nav-link " href="#contacts">Contact Us</a>
                </div>
      
            </div>

        </nav>
        <img class=" backimg img-fluid" src="imgs/face-1511873.jpg">



    </header>`)}
    else if(urlBeauty == 1)
    {
        $("#back_Ground").html(` <header id="headbeauty2" class="background  mb-3">


        <nav class="   navbar navbar-expand-xl navbar-dark fixed-top  " style=" background-color: #e8c8cb;">
            <a class="navbar-brand " style="  font-weight: 800; font-size: 60px; " href="#headbeauty2">LOGO </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class=" collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div class="navbar-nav " style="font-size: 25px;font-weight: 600;">
                <a class="nav-item nav-link active" href="#home">Home <span class="sr-only">(current)</span></a>
                <a class="nav-item nav-link" href="#about">About</a>
                <a class="nav-item nav-link" href="#services">Services</a>
                <a class="nav-item nav-link " href="#contacts">Contact Us</a>
                </div>
             
            </div>

        </nav>
        <img class=" backimg img-fluid" src="imgs/girl-2189247.jpg">



    </header>
    `)}
    
 else if(urlBeauty == 2)
            {
                $("#back_Ground").html(` <header id="headbeauty3" class="background  mb-3">


                <nav class="   navbar navbar-expand-xl navbar-dark " style=" background-color: #1f2231;">
                    <a class="navbar-brand " style="  font-weight: 700; font-size: 40px; " href="#headbeauty3">LOGO </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class=" collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div class="navbar-nav " style="font-size: 20px;font-weight: 600;">
                        <a class="nav-item nav-link active" href="#home">Home <span class="sr-only">(current)</span></a>
                        <a class="nav-item nav-link" href="#about">About</a>
                        <a class="nav-item nav-link" href="#services">Services</a>
                        <a class="nav-item nav-link " href="#contacts">Contact Us</a>
                        </div>
                 
                    </div>
    
                </nav>
                <img class=" backimg img-fluid" src="imgs/darius-bashar-liRYTza_AU8-unsplash.jpg">
    
    
    
            </header>`)}

else if(urlBeauty == 3)
             {
                 $("#back_Ground").html(`  <header id="headbeauty4" class="background  mb-3">


                 <nav class="   navbar navbar-expand-xl navbar-dark  fixed-top" style=" ; background-color: #dbd7d4;">
                     <a class="navbar-brand " style="  font-weight: 800; font-size: 60px; " href="#headbeauty4">LOGO </a>
                     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                         aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                         <span class="navbar-toggler-icon"></span>
                     </button>
                     <div class=" collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                         <div class="navbar-nav " style="font-size: 25px;font-weight: 700;">
                         <a class="nav-item nav-link active" href="#home">Home <span class="sr-only">(current)</span></a>
                         <a class="nav-item nav-link" href="#about">About</a>
                         <a class="nav-item nav-link" href="#services">Services</a>
                         <a class="nav-item nav-link " href="#contacts">Contact Us</a>
                         </div>
                         <div class="nav_icons pt-2" >
                             <i class="fab fa-facebook-f px-2 icon_header " style="color: white;"></i>
                             <i class="fab fa-twitter px-2 icon_header"style="color: white;"></i>
                             <i class="fab fa-instagram px-2 icon_header "style="color: white;"></i>
     
     
                         </div>
                     </div>
     
                 </nav>
                 <img class=" backimg img-fluid" src="imgs/glass-3081015.jpg">
     
     
     
             </header>`)}

    }

    let urlBusiness =JSON.parse(localStorage.getItem("businessPic"));
   for( let i = 0 ; i < pPic.length ; i ++){

    if(urlBusiness == 0){
        $("#back_Ground").html(` <header id="headbusiness1"  class="background  mb-3">


        <nav class="   navbar navbar-expand-xl navbar-dark fixed-top " >
            <a class="navbar-brand " style="  font-weight: 800; font-size: 70px; " href="#headbusiness1">LOGO </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class=" collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div class="navbar-nav " style="font-size: 30px;font-weight: 700;">
                <a class="nav-item nav-link active" href="#home">Home <span class="sr-only">(current)</span></a>
                        <a class="nav-item nav-link" href="#about">About</a>
                        <a class="nav-item nav-link" href="#services">Services</a>
                        <a class="nav-item nav-link " href="#contacts">Contact Us</a>
                </div>
             
            </div>

        </nav>
        <img class=" backimg img-fluid" src="imgs/business-1031754_1920.jpg">



    </header>
    `)}
    else if(urlBusiness == 1)
    {
        $("#back_Ground").html(`  <header id="headbusiness2" " class="background  mb-3">


        <nav class="   navbar navbar-expand-xl navbar-dark bg-dark fixed-top>
            <a class="navbar-brand " style="  font-weight: 700; font-size: 40px; " href="#headbusiness2">LOGO </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class=" collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div class="navbar-nav " style="font-size: 25px;font-weight: 600;">
                <a class="nav-item nav-link active" href="#home">Home <span class="sr-only">(current)</span></a>
                <a class="nav-item nav-link" href="#about">About</a>
                <a class="nav-item nav-link" href="#services">Services</a>
                <a class="nav-item nav-link " href="#contacts">Contact Us</a>
                </div>
               
            </div>

        </nav>
        <img class=" backimg img-fluid" src="imgs/laptop-3196481_1920.jpg">



    </header>
    `)}
    
 else if(urlBusiness == 2)
            {
                $("#back_Ground").html(` <header id="headbusiness3" class="background  mb-3">


                <nav class="   navbar navbar-expand-xl navbar-dark fixed-top" >
                    <a class="navbar-brand " style="  font-weight: 700; font-size: 40px; " href="#headbusiness3">LOGO </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class=" collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div class="navbar-nav " style="font-size: 25px;font-weight: 600;">
                        <a class="nav-item nav-link active" href="#home">Home <span class="sr-only">(current)</span></a>
                        <a class="nav-item nav-link" href="#about">About</a>
                        <a class="nav-item nav-link" href="#services">Services</a>
                        <a class="nav-item nav-link " href="#contacts">Contact Us</a>
                        </div>
                
                    </div>
    
                </nav>
                <img class=" backimg img-fluid" src="imgs/kelly-sikkema-xoU52jUVUXA-unsplash.jpg">
    
    
    
            </header>`)}

else if(urlBusiness == 3)
             {
                 $("#back_Ground").html(` <header id="headbusiness4" style="position: relative;" class="background  mb-3">


                 <nav class="   navbar navbar-expand-xl navbar-dark fixed-top " ">
                     <a class="navbar-brand " style="  font-weight: 700; font-size: 40px; " href="#headbusiness4">LOGO </a>
                     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                         aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                         <span class="navbar-toggler-icon"></span>
                     </button>
                     <div class=" collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                         <div class="navbar-nav " style="font-size: 25px;font-weight: 600;">
                         <a class="nav-item nav-link active" href="#home">Home <span class="sr-only">(current)</span></a>
                         <a class="nav-item nav-link" href="#about">About</a>
                         <a class="nav-item nav-link" href="#services">Services</a>
                         <a class="nav-item nav-link " href="#contacts">Contact Us</a>
                         </div>
                        
                     </div>
         
                 </nav>
                 <img class=" backimg img-fluid" src="imgs/meeting-2284501.jpg">
         
         
         
             </header>        
         
         `)}

    }
    
    
        }


    
   
)



 
     
    
 