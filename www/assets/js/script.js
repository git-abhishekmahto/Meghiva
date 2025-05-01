// home-page sidebar


$(document).ready(function () {
    let sidebar = document.getElementById("side-bar");
    let closeSidebar = document.getElementById("close-sidebar");

    if (sidebar) {
        sidebar.addEventListener("click", function () {
            sidebar.classList.add("extend");
            closeSidebar.classList.add("active");
        })
    }

    if (closeSidebar) {
        closeSidebar.addEventListener("click", function () {
            sidebar.classList.remove("extend");
            closeSidebar.classList.remove("active");
        })
    }

});


// $(".owl-carousel").owlCarousel({
//     items: 1,               // एक बार में एक आइटम दिखाने के लिए
//     loop: false,             // Infinite Loop
//     autoplay: false,        // Auto Play Off, ताकि सिर्फ Swipe से चले
//     dots: true,             // नीचे वाले Dots दिखाने के लिए
//     nav: false,             // Next/Prev बटन नहीं चाहिए तो false करें
//     touchDrag: true,        // Touch Dragging Enable करना
//     mouseDrag: true,        // Mouse Dragging Enable करना
//     pullDrag: true,         // Pull Effect Enable करना
//     smartSpeed: 600,
//     // margin:15,
//     // stagePadding:40

// });


// my-carousel home page
$(document).ready(() => {

    $('.my-carousel').owlCarousel({
        loop: false,
        center: true,
        margin: 10,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })
});

// booking-page , my hostel top-content-slide-img

$(document).ready(function () {

    let owl = $(".top-content-slide-img");
    owl.owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 2000,
        stagePadding: 0,
        // responsive: {
        //     0:{
        //         items:1
        //     },
        //     600:{
        //         items:3
        //     },
        //     1000:{
        //         items:3
        //     }
        // }
    });
    var restartTimeout;

    $(".owl-carousel img").on("touchstart", function () {
        owl.trigger("stop.owl.autoplay"); // Autoplay रोकें
        clearTimeout(restartTimeout); // पहले का timeout clear करें
    });

    $(".owl-carousel img").on("touchend", function () {
        restartTimeout = setTimeout(function () {
            owl.trigger("play.owl.autoplay", [2000]); // 3 sec बाद autoplay चालू करें
        }, 2000);
    });
});
// $(document).ready(() => {
//     $('.book-now-page').owlCarousel({
//         loop:false,
//         center:true,
//         margin:10,
//         nav:false,
//         dots:true,
//         responsive:{
//             0:{
//                 items:1
//             },
//             600:{
//                 items:3
//             },
//             1000:{
//                 items:3
//             }
//         }
//     })
// }); 


// $(".owl-carousel-1").trigger('destroy.owl.carousel');
// $(".owl-carousel-1").owlCarousel({
//     items : 4,
//     loop: false,
//     autoplay:false,
//     dots:false,
//     nav: false,             
//     touchDrag: true,        
//     mouseDrag: true,        
//     pullDrag: true,  
//     autoWidth:true,
//     // stagePadding:0,
//     smartSpeed: 600,
//     margin:15
// });

// let owlOuter = $(".state-carousel-img-slide-container");
// $(".owl-carousel").on("drag.owl.carousel", function() {
//     owlOuter.css("padding-left", "0px");  // Swipe start hone par padding remove
// });

// $(window).on("scroll", function() {
//     owlOuter.css("padding-left", "25px");
// });



//home-page sidebar

$("#side-bar").on("click", function () {
    // alert();
    const burgerMenu = $(".burger-menu-slide");
    burgerMenu.addClass("active");
    var body = $("body");
    body.css("overflow", "hidden");

});

$("#close-sidebar").on("click", function () {
    // alert();
    const burgerMenu = $(".burger-menu-slide");
    burgerMenu.removeClass("active");
    var body = $("body");
    body.css("overflow", "unset");

});



// $("#side-bar,#close-sidebar").on("click" , function () {
//     const burgerMenu = $(".burger-menu-slide");
//     burgerMenu.toggleClass("active");

//     let homePage = $("#home-container");
//     if (homePage.css("position") === "fixed"){
//         // homePage.css("position","static")
//     //    var data =  document.getElementsByTagName('body')[0];
//     // var body = $("body");
//     // body.css("background" , "red");


//     } else {
//         // homePage.css("position","fixed");
//     }

// });

// booking-page slide-up effect
window.onload = () => {
    let slideUp = document.querySelector(".slide-top");
    if (slideUp) {
        slideUp.classList.toggle("slide-up");
    }
}

// slide-image

// $(document).ready(function () {
//         let currentIndex = 0;
//         let dots = $(".dot");
//         let imageContainer = $("#claim-offer-image-content");

//         $(".dot").click(function () {
//             let newIndex = $(this).index(); // Clicked dot का index
//             let newBg = $(this).attr("data-bg");

//             if (newIndex === currentIndex) return; // अगर पहले से active है तो कुछ न करें

//             let direction = newIndex > currentIndex ? "right" : "left"; // Direction check करें

//             // पहले transition effect add करें
//             imageContainer.css("transform", direction === "right" ? "translateX(1000px)" : "translateX(-1000px)");

//             setTimeout(() => {
//                 // New image set करें
//                 imageContainer.css("background-image", `url(${newBg})`);
//                 imageContainer.css("transform", "translateX(0)");
//             }, 100); // थोड़ा delay ताकि animation smooth लगे

//             currentIndex = newIndex;

//             $(".dot").removeClass("active");
//             $(this).addClass("active");
//         });
//     });


// const track = document.querySelector(".claim-offer-image-content");
// const dots = document.querySelectorAll(".dot");
// const contentBox = document.getElementById("carousel-content");
// const items = document.querySelectorAll(".claim-offer-image");
// let currentIndex = 0;

// function updateCarousel(index) {
//     const offset = -index * 100 + "%";
//     track.style.transform = `translateX(${offset})`;

//     // Update active indicator
//     dots.forEach(dot => dot.classList.remove("active"));
//     dots[index].classList.add("active");

//     // Update content dynamically
//     contentBox.innerHTML = items[index].getAttribute("data-content");
//     // contentBox.innerHTML = items[index].
// }

// dots.forEach((dot, index) => {
//     dot.addEventListener("click", () => {
//         currentIndex = index;
//         updateCarousel(currentIndex);
//     });
// });
// function autoSlide() {
//     currentIndex = (currentIndex + 1) % items.length;
//     updateCarousel(currentIndex);
// }



// booking-history page reed more toggletext

function toggleText() {
    let textContent = document.querySelector(".ps-header-text-content");
    let readmore = document.querySelector(".read-more");

    if (textContent.style.display === "none" || textContent.style.display === "") {
        textContent.style.display = "inline";
        readmore.textContent = "...Show Less";
    } else {
        textContent.style.display = "none";
        readmore.textContent = "...Read More";
    }
}

// notification btn all & offer

$(document).ready(function () {
    let mybtn = document.querySelectorAll(".btn");

    mybtn.forEach((btn) => {
        btn.addEventListener("click", function () {
            // पहले सभी बटनों से "active" क्लास हटा दो
            mybtn.forEach(b => b.classList.remove("active"));

            // अब सिर्फ क्लिक किए गए बटन पर "active" क्लास ऐड करो
            btn.classList.add("active");
        });
    });


    let offerbtn = document.getElementById("offer-btn");
    let hideonoffer = document.querySelectorAll(".hideonoffer");
    if (offerbtn) {
        offerbtn.addEventListener("click", () => {
            hideonoffer.forEach(h => h.classList.add("hide"));
        })
    }

    let allbtn = document.getElementById("all-btn");

    if (allbtn) {
        allbtn.addEventListener("click", () => {
            hideonoffer.forEach(h => h.classList.remove("hide"));
        })
    }

});

// share modal booking-page & cancel booking
$(document).ready(() => {
    let shareIcon = document.getElementById("share-icon");
    let shareModal = document.getElementById("share-modal-container");
    let shareModalContent = document.getElementById("share-modal-content");
    let closeShareModal = document.getElementById("close-share-modal");

    let closeShareModal1 = document.getElementById("close-share");
    let backModal = document.getElementById("back-modal"); // for cancel page modal
    // let bookingPageFooter = document.getElementById("booking-page-footer");

    let burgurMenuLeftLinks = document.querySelectorAll(".burgur-menu-left-links");

    let loginStatus = localStorage.getItem("login-status");

    if (loginStatus == 1){
            if (shareIcon) {
                shareIcon.addEventListener("click", () => {
                    shareModal.classList.add("active");
                    shareModalContent.classList.add("active");
                    document.body.style.overflow = "hidden";
                });
            };
            
    } else {
        if (shareIcon) {
            shareIcon.addEventListener("click", () => {
                location.href = 'login.html';
            });
        };
    }


    if (closeShareModal) {

        closeShareModal.addEventListener("click", () => {
            setTimeout(function () {
                shareModal.classList.remove("active");
            }, 250);
            shareModalContent.classList.remove("active");
            document.body.style.overflow = "unset";
        });
    };

    if (closeShareModal1) {

        closeShareModal1.addEventListener("click", () => {
            shareModalContent.classList.remove("active");
            setTimeout(function () {
                shareModal.classList.remove("active");
            }, 250);
            document.body.style.overflow = "unset";
        });
    }


    // if (backModal !== '') {
    if (backModal) {
        backModal.addEventListener("click", () => {
            setTimeout(function () {
                shareModal.classList.remove("active");
            }, 250);
            shareModalContent.classList.remove("active");
            document.body.style.overflow = "unset";
            // bookingPageFooter.classList.remove("z-index");
            // document.body.appendChild(bookingPageFooter);

            if (burgurMenuLeftLinks) {
                burgurMenuLeftLinks.forEach(v => {
                    v.classList.remove("active");
                });
            }
        });
    }
});


//=> give star icon -->

$(document).ready(() => {


    let giveStarIcon = document.getElementById("give-star-icon");
    let giveStarModal = document.getElementById("give-star-modal-container");
    let giveStarModalContent = document.getElementById("give-star-modal-content");
    let closeStarModal = document.getElementById("close-give-star-modal");
    let closeStarModal1 = document.getElementById("close-give-star");
    let backModal = document.getElementById("back-modal");
    // let bookingPageFooter = document.getElementById("booking-page-footer");


    if (giveStarIcon) {
        giveStarIcon.addEventListener("click", () => {
            giveStarModal.classList.add("active");
            giveStarModalContent.classList.add("active");
            document.body.style.overflow = "hidden";
        });
    }

    if (closeStarModal) {
        closeStarModal.addEventListener("click", () => {
            setTimeout(function () {
                giveStarModal.classList.remove("active");
            }, 250);
            giveStarModalContent.classList.remove("active");
            document.body.style.overflow = "unset";
        });
    };
    if (closeStarModal1) {

        closeStarModal1.addEventListener("click", () => {
            giveStarModalContent.classList.remove("active");
            setTimeout(function () {
                giveStarModal.classList.remove("active");
            }, 250);
            document.body.style.overflow = "unset";
        });
    };


    if (backModal) {
        backModal.addEventListener("click", () => {
            if (giveStarModal){
                setTimeout(function () {
                    giveStarModal.classList.remove("active");
                }, 250);
                giveStarModalContent.classList.remove("active");
            };
            document.body.style.overflow = "unset";
        });
    }
});


// booking page ->> available occupancy 

document.addEventListener("DOMContentLoaded", function () {
    const occupancyCardBox = document.querySelectorAll(".occupancy-card-box");
    const footerStayPrice = document.getElementById("footer-stay-price");
    const footerStayCharges = document.getElementById("footer-stay-charges");
    const bookProcess = document.getElementById("book-now");
    const occupancyMsg = document.getElementById("occupancy-msg");
    const alertMsgText = document.querySelector(".alert-msg-text");
    const alertMsgText1 = document.querySelector(".alert-msg-text1");
    const countMonth = document.getElementById("count-month");
    const plusMonth = document.getElementById("plus-month");

    function updateUIState() {
        const hasAlert1 = alertMsgText1.textContent.includes("!");
        const hasAlert2 = alertMsgText.textContent.includes("!");

        // Alert colors
        alertMsgText1.style.color = hasAlert1 ? "#E10E0E" : "#363939";
        alertMsgText.style.color = hasAlert2 ? "#E10E0E" : "#363939";

        // Alert visibility
        occupancyMsg.style.display = (hasAlert1 || hasAlert2) ? "block" : "none";
    }

    // ✅ Handle Box Selection
    occupancyCardBox.forEach(box => {
        box.addEventListener("click", () => {
            const isActive = box.classList.contains("active");

            // सभी से active हटाओ
            occupancyCardBox.forEach(v => v.classList.remove("active"));

            if (!isActive) {
                box.classList.add("active");

                // ✅ Alert हटाओ अगर हो
                if (alertMsgText1.textContent.includes("!")) {
                    alertMsgText1.textContent = alertMsgText1.textContent.replace(/!/g, '');
                }
                updateUIState();

                // ✅ Price Update
                const stayPrice = box.querySelector(".footer-price");
                const currentValue = parseInt(countMonth.textContent);
                const price = parseInt(stayPrice.textContent.replace(/[₹,]/g, '').trim());

                if (currentValue !== 0) {
                    const total = price * currentValue;
                    footerStayPrice.textContent = `₹${total.toLocaleString()}`;
                    footerStayCharges.textContent = "+ security charge";
                    bookProcess.style.width = "217px";
                }
            } else {
                // Deactivate
                footerStayPrice.textContent = "";
                footerStayCharges.textContent = '';
                bookProcess.style.width = "100%";
            }
        });
    });

    // ✅ Handle Book Now Button
    if (bookProcess) {
        bookProcess.addEventListener("click", () => {
            const activeBox = document.querySelector(".occupancy-card-box.active");
            const currentValue = parseInt(countMonth.textContent);

            if (!activeBox && currentValue === 0) {
                if (!alertMsgText1.textContent.includes("!")) alertMsgText1.textContent += "!";
                if (!alertMsgText.textContent.includes("!")) alertMsgText.textContent += "!";
            } else if (activeBox && currentValue === 0) {
                if (!alertMsgText.textContent.includes("!")) alertMsgText.textContent += "!";
            } else if (!activeBox && currentValue !== 0) {
                if (!alertMsgText1.textContent.includes("!")) alertMsgText1.textContent += "!";
            } else {
                location.href = "payment.html";
                // console.log(parseInt(footerStayPrice.textContent.replace(/[₹,]/g, '').trim()) + 5000);
                return;
            }



            updateUIState();
            occupancyMsg.scrollIntoView({ behavior: "smooth", block: "center" });
        });
    }

    // ✅ Handle Plus Month Button
    if (plusMonth) {
        plusMonth.addEventListener("click", () => {
            // Alert हटाओ (अगर है)
            if (alertMsgText.textContent.includes("!")) {
                alertMsgText.textContent = alertMsgText.textContent.replace(/!/g, '');
                updateUIState();
            }

            // ✅ Count बढ़ाओ (सही तरीके से)
            let updatedValue = parseInt(countMonth.textContent) + 1;
            countMonth.textContent = updatedValue;

            // ✅ Price Calculation अब updatedValue से
            const activeBox = document.querySelector(".occupancy-card-box.active");
            if (activeBox) {
                const stayPrice = activeBox.querySelector(".footer-price");
                const price = parseInt(stayPrice.textContent.replace(/[₹,]/g, '').trim());
                const total = price * updatedValue;

                footerStayPrice.textContent = `₹${total.toLocaleString()}`;
                footerStayCharges.textContent = "+ security charge";
                bookProcess.style.width = "217px";
            }

        });
    }


    const minusMonth = document.getElementById("minus-month");

    if (minusMonth) {

        minusMonth.addEventListener("click", () => {
            let updatedValue = parseInt(countMonth.textContent);
            if (updatedValue > 0) {
                updatedValue -= 1;
                countMonth.textContent = updatedValue;

                // ✅ Price Calculation with updatedValue
                const activeBox = document.querySelector(".occupancy-card-box.active");
                if (activeBox) {
                    const stayPrice = activeBox.querySelector(".footer-price");
                    const price = parseInt(stayPrice.textContent.replace(/[₹,]/g, '').trim());
                    const total = price * updatedValue;

                    // ✅ UI Update
                    if (updatedValue === 0) {
                        footerStayPrice.textContent = "";
                        footerStayCharges.textContent = '';
                        bookProcess.style.width = "100%";
                    } else {
                        footerStayPrice.textContent = `₹${total.toLocaleString()}`;
                        footerStayCharges.textContent = "+ security charge";
                        bookProcess.style.width = "217px";
                    }
                }
            }
        });
    }
});








// review section add reviews 

document.addEventListener("DOMContentLoaded", function () {
    let showMoreRev = document.getElementById("show-more-reviews");
    let showLessRev = document.getElementById("show-less-reviews");
    let reviewSectionMiddle = document.querySelector(".review-section-middle");
    let count = 0;

    if (showMoreRev) {

        showMoreRev.addEventListener("click", () => {

            // reviewSectionMiddle.insertAdjacentHTML("beforeend" , `

            //     <div> mera naam ihhuksh</div>

            // `)

            for (i = 0; i <= 2; i++) {

                reviewSectionMiddle.innerHTML += `
                
                <div class="review-section-middle-content">
                <div class="middle-content-title">
                <h2>Erat maecenas id tellus in.</h2>
                <div class="middle-content-title-stars">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M5.04894 1.42705C5.3483 0.505738 6.6517 0.50574 6.95106 1.42705L7.5716 3.33688C7.70547 3.7489 8.08943 4.02786 8.52265 4.02786H10.5308C11.4995 4.02786 11.9023 5.26748 11.1186 5.83688L9.49395 7.01722C9.14347 7.27187 8.99681 7.72323 9.13068 8.13525L9.75122 10.0451C10.0506 10.9664 8.9961 11.7325 8.21238 11.1631L6.58778 9.98278C6.2373 9.72813 5.7627 9.72814 5.41221 9.98278L3.78761 11.1631C3.0039 11.7325 1.94942 10.9664 2.24878 10.0451L2.86932 8.13526C3.00319 7.72323 2.85653 7.27186 2.50604 7.01722L0.881445 5.83688C0.0977311 5.26748 0.500508 4.02786 1.46923 4.02786H3.47735C3.91057 4.02786 4.29453 3.7489 4.4284 3.33688L5.04894 1.42705Z"
                                    fill="#F9D262" />
                            </svg>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M5.04894 1.42705C5.3483 0.505738 6.6517 0.50574 6.95106 1.42705L7.5716 3.33688C7.70547 3.7489 8.08943 4.02786 8.52265 4.02786H10.5308C11.4995 4.02786 11.9023 5.26748 11.1186 5.83688L9.49395 7.01722C9.14347 7.27187 8.99681 7.72323 9.13068 8.13525L9.75122 10.0451C10.0506 10.9664 8.9961 11.7325 8.21238 11.1631L6.58778 9.98278C6.2373 9.72813 5.7627 9.72814 5.41221 9.98278L3.78761 11.1631C3.0039 11.7325 1.94942 10.9664 2.24878 10.0451L2.86932 8.13526C3.00319 7.72323 2.85653 7.27186 2.50604 7.01722L0.881445 5.83688C0.0977311 5.26748 0.500508 4.02786 1.46923 4.02786H3.47735C3.91057 4.02786 4.29453 3.7489 4.4284 3.33688L5.04894 1.42705Z"
                                    fill="#F9D262" />
                            </svg>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M5.04894 1.42705C5.3483 0.505738 6.6517 0.50574 6.95106 1.42705L7.5716 3.33688C7.70547 3.7489 8.08943 4.02786 8.52265 4.02786H10.5308C11.4995 4.02786 11.9023 5.26748 11.1186 5.83688L9.49395 7.01722C9.14347 7.27187 8.99681 7.72323 9.13068 8.13525L9.75122 10.0451C10.0506 10.9664 8.9961 11.7325 8.21238 11.1631L6.58778 9.98278C6.2373 9.72813 5.7627 9.72814 5.41221 9.98278L3.78761 11.1631C3.0039 11.7325 1.94942 10.9664 2.24878 10.0451L2.86932 8.13526C3.00319 7.72323 2.85653 7.27186 2.50604 7.01722L0.881445 5.83688C0.0977311 5.26748 0.500508 4.02786 1.46923 4.02786H3.47735C3.91057 4.02786 4.29453 3.7489 4.4284 3.33688L5.04894 1.42705Z"
                                    fill="#F9D262" />
                                    </svg>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                d="M9.61163 5.7279C9.6844 5.87532 9.82499 5.97755 9.98767 6.00133L13.5924 6.52822L10.9844 9.06841C10.8665 9.18328 10.8127 9.34884 10.8405 9.51111L11.4559 13.0991L8.23271 11.404C8.08701 11.3274 7.91295 11.3274 7.76725 11.404L4.54407 13.0991L5.15945 9.51111C5.18728 9.34884 5.13345 9.18328 5.01551 9.06841L2.40752 6.52822L6.01229 6.00133C6.17497 5.97755 6.31556 5.87532 6.38833 5.7279L7.99998 2.46288L9.61163 5.7279Z"
                                stroke="#F9D262" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                                <path
                                d="M9.61163 5.7279C9.6844 5.87532 9.82499 5.97755 9.98767 6.00133L13.5924 6.52822L10.9844 9.06841C10.8665 9.18328 10.8127 9.34884 10.8405 9.51111L11.4559 13.0991L8.23271 11.404C8.08701 11.3274 7.91295 11.3274 7.76725 11.404L4.54407 13.0991L5.15945 9.51111C5.18728 9.34884 5.13345 9.18328 5.01551 9.06841L2.40752 6.52822L6.01229 6.00133C6.17497 5.97755 6.31556 5.87532 6.38833 5.7279L7.99998 2.46288L9.61163 5.7279Z"
                                    stroke="#F9D262" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            </div>
                            </div>
                            <div class="review-section-middle-date">
                            <p>August 1, 2024</p>
                            </div>
                            <div class="review-section-middle-describe">
                            <p>Massa morbi id lorem ultricies. Aliquet eu dolor cras ipsum hendrerit id ut habitant nisi.
                            Lectus ipsum faucibus sed fringilla at tempor.</p>
                            </div>
                            <div class="review-section-middle-user">
                            <div class="review-section-middle-user-image">
                            <img src="assets/images/user2.png" alt="sonam.png">
                        </div>
                        <h2>Mohit Singh </h2>
                    </div>
                </div>
                
                `
            }


            // showLessRev.classList.remove("hide");

            if (count >= 2) {
                // showMoreRev.style.display = "none";
                showMoreRev.classList.add("hide");

                showLessRev.classList.remove("hide");
                // showLessRev.style.display = "block";
            }
            count++;
        });
    }

    if (showLessRev) {

        showLessRev.addEventListener("click", () => {
            for (i = 0; i <= 2; i++) {
                if (reviewSectionMiddle.lastElementChild) {
                    reviewSectionMiddle.removeChild(reviewSectionMiddle.lastElementChild);
                }
            }

            count--;

            if (count === 0) {
                // showLessRev.style.display = "none";
                // showMoreRev.style.display = "block";
                showMoreRev.classList.remove("hide");
                showLessRev.classList.add("hide");
            }

        })
    }

})

$(document).ready(() => {
    $(".payment-card-slider-carousel").owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
});
$(document).ready(() => {
    $(".stay-card-box-1-slide").owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
});


// toggle-leave-type-ul 
$(document).ready(() => {
    let toggleUl = document.getElementById("toggle-leave-type-ul");
    let toggleUl1 = document.getElementById("toggle-leave-type-ul1");
    let toggleUl2 = document.getElementById("toggle-leave-type-ul2");
    let dropdownMenu = document.querySelector(".leave-type-select-content-dropdown");
    let dropdownMenu1 = document.querySelector(".leave-type-select-content-dropdown1");
    let dropdownMenu2 = document.querySelector(".leave-type-select-content-dropdown2");
    var owl = $(".request-leave-carousel");

    if (dropdownMenu) {
        let myLi = dropdownMenu.querySelectorAll("li");
        myLi.forEach(li => {
            li.addEventListener("click", () => {

                toggleUl.querySelector("h2").textContent = li.textContent;

                dropdownMenu.classList.toggle("show");
                owl.trigger('refresh.owl.carousel');
                toggleUl.querySelector(".leave-type-select-content-title-svg").classList.toggle("rotate-animate");

            })
        });
    }
    if (dropdownMenu1) {
        let myLi1 = dropdownMenu1.querySelectorAll("li");
        myLi1.forEach(li => {
            li.addEventListener("click", () => {
                toggleUl1.querySelector("h2").textContent = li.textContent;

                dropdownMenu1.classList.toggle("show");
                owl.trigger('refresh.owl.carousel');
                toggleUl1.querySelector(".leave-type-select-content-title-svg").classList.toggle("rotate-animate");

            })
        });
    }
    if (dropdownMenu2) {
        let myLi2 = dropdownMenu2.querySelectorAll("li");
        myLi2.forEach(li => {
            li.addEventListener("click", () => {
                toggleUl2.querySelector("h2").textContent = li.textContent;

                dropdownMenu2.classList.toggle("show");
                owl.trigger('refresh.owl.carousel');
                toggleUl2.querySelector(".leave-type-select-content-title-svg").classList.toggle("rotate-animate");

            })
        })
    }



    if (toggleUl) {

        toggleUl.addEventListener("click", () => {
            dropdownMenu.classList.toggle("show");

            toggleUl.querySelector(".leave-type-select-content-title-svg").classList.toggle("rotate-animate");

            // toggleUl.querySelector(".leave-type-select-content-title-svg").style.rotate = "360deg";
            owl.trigger('refresh.owl.carousel');
        });
    };

    if (toggleUl1) {

        toggleUl1.addEventListener("click", () => {
            dropdownMenu1.classList.toggle("show");
            toggleUl1.querySelector(".leave-type-select-content-title-svg").classList.toggle("rotate-animate");
            owl.trigger('refresh.owl.carousel');

        });
    };

    if (toggleUl2) {

        toggleUl2.addEventListener("click", () => {
            dropdownMenu2.classList.toggle("show");
            toggleUl2.querySelector(".leave-type-select-content-title-svg").classList.toggle("rotate-animate");
            owl.trigger('refresh.owl.carousel');

        });
    };

})

// show & hide > temp - permanent leave option 


$(document).ready(function () {
    var owl = $(".request-leave-carousel");

    owl.owlCarousel({
        items: 1,
        loop: false,
        margin: 10,
        nav: false,
        dots: true,
        autoplay: false,
        autoHeight: true,
        // animateIn: "fadeIn",
        animateOut: "fadeOut",
        smartSpeed: 150
    });

    // Function to update active button
    function updateActiveButton(index) {
        $("#permanentBtn, #temporaryBtn").removeClass("active");

        if (index === 0) { // ✅ Temporary Button (पहला बटन) first slide से जुड़े
            $("#temporaryBtn").addClass("active");
        } else {
            $("#permanentBtn").addClass("active");
        }
    }

    // ✅ Page Load पर Temporary Button Active रहे और First Slide दिखे
    setTimeout(() => {
        updateActiveButton(0); // ✅ Temporary Button को Active रखना
        owl.trigger('to.owl.carousel', [0, 0, true]); // ✅ First Slide दिखाना
    }, 100);

    // ✅ Custom Buttons Click Event
    $("#permanentBtn").click(function () {
        owl.trigger('to.owl.carousel', [1, 400, true]); // ✅ Second Slide दिखे
        updateActiveButton(1);
    });

    $("#temporaryBtn").click(function () {
        owl.trigger('to.owl.carousel', [0, 400, true]); // ✅ First Slide दिखे
        updateActiveButton(0);
    });

    // ✅ Sync Buttons with Owl Carousel Changes
    owl.on('changed.owl.carousel', function (event) {
        var realIndex = event.item.index % event.item.count;
        updateActiveButton(realIndex);
    });

});











// my-hostel - page 

$(document).ready(() => {
    let paymentBtn = document.getElementById("payment-btn");
    let paymentAmount = document.getElementById("payment-amount");


    if (paymentBtn) {

        paymentBtn.addEventListener("click", () => {
            location.href = "payment.html";
            sessionStorage.setItem("monthly-amount", paymentAmount.textContent);
            console.log(paymentAmount.textContent);

        });
    };

});



function dropdownFoodMenu(event, day) {
    let clickedMenu = event.currentTarget.closest(".dropdown-food-menu-content");
    let contentToToggle = clickedMenu.querySelector(".dropdown-food-menu-items-container");
    let icons = clickedMenu.querySelectorAll(".toggle-food-menu-icon");

    // ✅ Step 1: Agar already open hai to bas toggle off kardo
    if (contentToToggle.classList.contains("active")) {
        contentToToggle.classList.remove("active");
        icons.forEach((icon, index) => {
            icon.classList.toggle("active", index === 0); // menu icon on
        });
        return; // Exit yahin kar do
    }

    // ✅ Step 2: Baaki sabko band karo
    let allMenus = document.querySelectorAll(".dropdown-food-menu-content");
    allMenus.forEach(menu => {
        let content = menu.querySelector(".dropdown-food-menu-items-container");
        let menuIcons = menu.querySelectorAll(".toggle-food-menu-icon");

        content.classList.remove("active");
        menuIcons.forEach((icon, index) => {
            icon.classList.toggle("active", index === 0); // menu icon active
        });
    });

    // ✅ Step 3: Ab clicked wale ko open karo
    contentToToggle.classList.add("active");
    icons.forEach((icon, index) => {
        icon.classList.toggle("active", index === 1); // close icon active
    });
}


$(document).ready(() => {

    let communitySlideSvg = document.getElementById("community-top-side-modal-svg");
    let communitySlideCont = document.getElementById("community-top-side-modal-container-slide");
    let closeCommunitySideModal = document.getElementById("close-community-side-modal");

    function toggleCommunitySlide() {
        if (communitySlideCont.style.display === "none" || communitySlideCont.style.display === "") {
            communitySlideCont.style.display = "flex";
            closeCommunitySideModal.classList.add("active");
            setTimeout(() => {
                communitySlideCont.style.right = "0px";
            }, 10);
        } else {
            communitySlideCont.style.right = "-300px";
            closeCommunitySideModal.classList.remove("active");
            setTimeout(() => {
                communitySlideCont.style.display = "none";
            }, 600);
        }
    }

    // दोनों elements के लिए event listener जोड़ो
    if (communitySlideSvg) communitySlideSvg.addEventListener("click", toggleCommunitySlide);

    if (closeCommunitySideModal) {
        closeCommunitySideModal.addEventListener("click", toggleCommunitySlide);
    };

});
function cancelComplaint() {

    let shareIcon = document.getElementById("share-icon");
    let shareModal = document.getElementById("share-modal-container");
    let shareModalContent = document.getElementById("share-modal-content");
    let closeShareModal = document.getElementById("close-share-modal");
    let closeShareModal1 = document.getElementById("close-share");
    let backModal = document.getElementById("back-modal"); // for cancel page modal
    // let bookingPageFooter = document.getElementById("booking-page-footer");




    shareIcon.addEventListener("click", () => {
        shareModal.classList.add("active");
        shareModalContent.classList.add("active");
        document.body.style.overflow = "hidden";
        // bookingPageFooter.classList.add("z-index");
        

    });
    closeShareModal.addEventListener("click", () => {
        setTimeout(function () {
            shareModal.classList.remove("active");
        }, 250);
        shareModalContent.classList.remove("active");
        document.body.style.overflow = "unset";
        // bookingPageFooter.classList.remove("z-index");
        // document.body.appendChild(bookingPageFooter);
    });
    closeShareModal1.addEventListener("click", () => {
        shareModalContent.classList.remove("active");
        setTimeout(function () {
            shareModal.classList.remove("active");
        }, 250);
        document.body.style.overflow = "unset";
        // bookingPageFooter.classList.remove("z-index");
        // document.body.appendChild(bookingPageFooter);

    });


    if (backModal !== '') {
        backModal.addEventListener("click", () => {
            setTimeout(function () {
                shareModal.classList.remove("active");
            }, 250);
            shareModalContent.classList.remove("active");
            document.body.style.overflow = "unset";
            // bookingPageFooter.classList.remove("z-index");
            // document.body.appendChild(bookingPageFooter);
        });
    }
}


// my-complaints 


$(document).ready(() => {

    let filterBtn = document.getElementById("showing-filter-modal");
    let filterContainer = document.getElementById("my-complaints-filter-modal-container");
    let filterModalTitle = document.getElementById("my-complaints-filter-modal-title");
    let back = document.getElementById("back-filter-modal");
    let closeFilterPriceModal = document.getElementById("closeFilterPriceModal");
    let backModalFilter = document.getElementById("filter-back-modal");




    function toggle() {



        if (filterContainer.style.display === 'none' || filterContainer.style.display === '') {
            filterContainer.style.display = 'block';
            if (closeFilterPriceModal) {
                closeFilterPriceModal.style.visibility = "visible";
            }
        } else {
            setTimeout(() => {
                filterContainer.style.display = 'none';
                if (closeFilterPriceModal) {
                    closeFilterPriceModal.style.visibility = "hidden";
                }

            }, 600);
        }

        setTimeout(() => {

            filterContainer.classList.toggle("active");
            if (filterModalTitle.classList.contains("active")) {
                filterModalTitle.classList.remove("active");
                document.body.style.overflow = "unset";

            } else {
                setTimeout(() => {
                    document.body.style.overflow = "hidden";
                    filterModalTitle.classList.add("active");
                }, 600);
            }
        }, 100);
    }

    if (back) {
        back.addEventListener("click", toggle);
    };
    if (closeFilterPriceModal) {
        closeFilterPriceModal.addEventListener("click", toggle);
    };

    if (backModalFilter) {
        backModalFilter.addEventListener("click", toggle);
    };

    if (filterBtn) {
        filterBtn.addEventListener("click", () => {
            if (!filterContainer.classList.contains("active")) {
                toggle();
            };
        });
    }






})




// all stays filter {}

$(document).ready(() => {
    let filterOption = document.querySelectorAll(".all-stays-filter-modal-filter-content");

    filterOption.forEach(a => {
        a.addEventListener("click", () => {
            a.classList.toggle("active");
        })
    })
})

// filter-price-modal - user-profile

$(document).ready(() => {
    let shareIcon = document.getElementById("price-filter-modal");
    let shareModal = document.getElementById("filter-price-modal-container");
    let shareModalContent = document.getElementById("filter-price-modal-content");
    let closeShareModal = document.getElementById("close-filter-price-modal-svg");

    let closeShareModal1 = document.getElementById("close-filter-price-modal");
    let backModal = document.getElementById("back-modal"); // for cancel page modal
    // let bookingPageFooter = document.getElementById("booking-page-footer");

    let userFilterDoneBtn = document.getElementById("user-filter-done-btn");

    let locationFilterBtn = document.getElementById("price-filter-modal1");

    if (locationFilterBtn) {
        locationFilterBtn.addEventListener("click", () => {
            shareModal.classList.add("active");
            shareModalContent.classList.add("active");
            document.body.style.overflow = "hidden";
            // bookingPageFooter.classList.add("z-index");
            

        });
    }

    let locationFilterCloseBtn = document.getElementById("close-filter-price-modal-svg1");

    if (locationFilterCloseBtn) {


        locationFilterCloseBtn.addEventListener("click", () => {
            setTimeout(function () {
                shareModal.classList.remove("active");
            }, 250);
            shareModalContent.classList.remove("active");
            document.body.style.overflow = "unset";
            // bookingPageFooter.classList.remove("z-index");
            // document.body.appendChild(bookingPageFooter);
        });
    }








    if (userFilterDoneBtn) {

        userFilterDoneBtn.addEventListener("click", () => {
            setTimeout(function () {
                shareModal.classList.remove("active");
            }, 250);
            shareModalContent.classList.remove("active");
            document.body.style.overflow = "unset";

        });
    };

    if (shareIcon) {

        shareIcon.addEventListener("click", () => {
            shareModal.classList.add("active");
            shareModalContent.classList.add("active");
            document.body.style.overflow = "hidden";
        });
    };



    if (closeShareModal) {

        closeShareModal.addEventListener("click", () => {
            setTimeout(function () {
                shareModal.classList.remove("active");
            }, 250);
            shareModalContent.classList.remove("active");
            document.body.style.overflow = "unset";
            // bookingPageFooter.classList.remove("z-index");
            // document.body.appendChild(bookingPageFooter);
        });
    };


    if (closeShareModal1) {

        closeShareModal1.addEventListener("click", () => {
            shareModalContent.classList.remove("active");
            setTimeout(function () {
                shareModal.classList.remove("active");
            }, 250);
            document.body.style.overflow = "unset";
            // bookingPageFooter.classList.remove("z-index");
            // document.body.appendChild(bookingPageFooter);

        });
    };


    if (backModal) {
        backModal.addEventListener("click", () => {
            if (shareModalContent){
                setTimeout(function () {
                    shareModal.classList.remove("active");
                }, 250);
                shareModalContent.classList.remove("active");
            }
            document.body.style.overflow = "unset";
        });
    }

});





$(document).ready(() => {


    let printMinVal = document.getElementById("print-price-min-val");
    let printMaxVal = document.getElementById("print-price-max-val");
    let printMinVal1 = document.getElementById("location-price-min-val");
    let printMaxVal1 = document.getElementById("location-price-max-val");
    let minVal = document.getElementById("min-val");
    let maxVal = document.getElementById("max-val");
    let minVal1 = document.getElementById("min-val1");
    let maxVal1 = document.getElementById("max-val1");
    let minPriceInput = document.getElementById("min-price-input");
    let minPriceInput1 = document.getElementById("min-price-input1");
    let maxPriceInput = document.getElementById("max-price-input");
    let maxPriceInput1 = document.getElementById("max-price-input1");
    let tooltipMin = document.getElementById("tooltip-min");
    let tooltipMin1 = document.getElementById("tooltip-min1");
    let tooltipMax = document.getElementById("tooltip-max");
    let tooltipMax1 = document.getElementById("tooltip-max1");
    let minValInMap = document.getElementById("min-val-in-map");
    let maxValInMap = document.getElementById("max-val-in-map");

    let filterBtn = document.getElementById("price-filter-modal");

    let page = window.location.pathname;
    if (page.endsWith('reg-roll&pref.html')) {
        updateTooltip(minPriceInput, maxPriceInput, tooltipMin, tooltipMax, minVal, maxVal, printMinVal, printMaxVal);
    }

    if (filterBtn) {
        filterBtn.addEventListener("click", () => {
            updateTooltip(minPriceInput, maxPriceInput, tooltipMin, tooltipMax, minVal, maxVal, printMinVal, printMaxVal);
        });
    }
    let filterBtn1 = document.getElementById("price-filter-modal1");

    if (filterBtn1) {
        filterBtn1.addEventListener("click", () => {

            updateTooltip(minPriceInput1, maxPriceInput1, tooltipMin1, tooltipMax1, minVal1, maxVal1, printMinVal1, printMaxVal1);
        });
    }
    let showingFilterModal = document.getElementById("showing-filter-modal");

    if (showingFilterModal) {
        showingFilterModal.addEventListener("click", () => {
            updateTooltip(minPriceInput, maxPriceInput, tooltipMin, tooltipMax, minVal, maxVal, printMinVal, printMaxVal);
        });
    }


    function updateTooltip(minInput, maxInput, tooltipMin, tooltipMax, minValElem, maxValElem, printMinElem, printMaxElem) {
        if (minInput) {
            const minPercent = (minInput.value / minInput.max) * 100;
            tooltipMin.style.left = `calc(${minPercent}% + 10px)`;

        };
        if (maxInput) {
            const maxPercent = (maxInput.value / maxInput.max) * 100;
            tooltipMax.style.left = `calc(${maxPercent}% - 14px)`;

        };
        if (minInput) {
            const minValText = `₹${parseInt(minInput.value).toLocaleString()}`;
            if (minValText) {
                minValElem.textContent = minValText;
            };
            printMinElem.textContent = minValText;

        };
        if (maxInput) {
            const maxValText = `₹${parseInt(maxInput.value).toLocaleString()}`;
            if (maxValText) {
                maxValElem.textContent = maxValText;
            };
            printMaxElem.textContent = maxValText;
        };


    };

    if (minPriceInput) {
        minPriceInput.addEventListener("input", () => {
            updateTooltip(minPriceInput, maxPriceInput, tooltipMin, tooltipMax, minVal, maxVal, printMinVal, printMaxVal);
        });
    };
    if (maxPriceInput) {
        maxPriceInput.addEventListener("input", () => {
            updateTooltip(minPriceInput, maxPriceInput, tooltipMin, tooltipMax, minVal, maxVal, printMinVal, printMaxVal);
        });
    };

    if (minPriceInput1) {
        minPriceInput1.addEventListener("input", () => {
            updateTooltip(minPriceInput1, maxPriceInput1, tooltipMin1, tooltipMax1, minVal1, maxVal1, printMinVal1, printMaxVal1);
        });
    };
    if (maxPriceInput1) {
        maxPriceInput1.addEventListener("input", () => {
            updateTooltip(minPriceInput1, maxPriceInput1, tooltipMin1, tooltipMax1, minVal1, maxVal1, printMinVal1, printMaxVal1);
        });
    };


})

// user-profile-edit

$(document).ready(() => {
    let editBtn = document.getElementById("edit-btn");
    let doneBtn = document.getElementById("done-btn");
    let userName = document.getElementById("user-profile-name");
    let userAbout = document.getElementById("user-profile-about");
    let userNameInput = document.getElementById("user-name-input");
    let userAboutInput = document.getElementById("user-about-input");
    let profileImgChange = document.getElementById("change-profile-img-text");
    let uploadProfileImg = document.getElementById("upload-profile-img");
    let userProfileInput = document.getElementById("user-profile-input");

    function uploadUserImg() {
        userProfileInput.click();
    };

    function editProcess() {
        userName.classList.add("edit-hide");
        userAbout.classList.add("edit-hide");
        editBtn.classList.add("edit-hide");


        userNameInput.classList.remove("edit-hide");
        userAboutInput.classList.remove("edit-hide");
        doneBtn.classList.remove("edit-hide");
        profileImgChange.classList.remove("edit-hide");
        userAboutInput.style.height = userAboutInput.scrollHeight + 'px';
        userAboutInput.focus();
        userAboutInput.setSelectionRange(userAboutInput.value.length, userAboutInput.value.length);

        uploadProfileImg.addEventListener("click", uploadUserImg);
    };




    function doneProcess() {

        userName.textContent = String(userNameInput.value);
        userAbout.textContent = String(userAboutInput.value)



        userName.classList.remove("edit-hide");
        userAbout.classList.remove("edit-hide");
        editBtn.classList.remove("edit-hide");

        userNameInput.classList.add("edit-hide");
        userAboutInput.classList.add("edit-hide");
        doneBtn.classList.add("edit-hide");
        profileImgChange.classList.add("edit-hide");

        uploadProfileImg.removeEventListener("click", uploadUserImg);

    };

    let userFilterDoneBtn = document.getElementById("user-filter-done-btn");

    let minValInMap = document.getElementById("min-val-in-map");
    let maxValInMap = document.getElementById("max-val-in-map");
    let minVal = document.getElementById("min-price-input");
    let maxVal = document.getElementById("max-price-input");

    let minVal1 = document.getElementById("min-price-input1");
    let maxVal1 = document.getElementById("max-price-input1");

    function inputValReturnMap(doneBtn, minValMap, maxValMap, min, max,) {
        minValMap.textContent = String(min.value);
        maxValMap.textContent = String(max.value);

        // -->

        minValMap.setAttribute('style', 'font-size: 16px !important');
        maxValMap.setAttribute('style', 'font-size: 16px !important');


        setTimeout(() => {
            minValMap.setAttribute('style', 'font-size: 14px !important');

        }, 400);
        setTimeout(() => {
            maxValMap.setAttribute('style', 'font-size: 14px !important');

        }, 400);
    };

    if (minVal1 && userFilterDoneBtn) {
        userFilterDoneBtn.addEventListener("click", () => {
            inputValReturnMap(userFilterDoneBtn, minValInMap, maxValInMap, minVal1, maxVal1);
        });
    } else if (userFilterDoneBtn) {
        userFilterDoneBtn.addEventListener("click", () => {
            inputValReturnMap(userFilterDoneBtn, minValInMap, maxValInMap, minVal, maxVal);
        });
    }


    if (userAboutInput) {

        userAboutInput.addEventListener("input", () => {
            userAboutInput.style.height = userAboutInput.scrollHeight + 'px';
        });
    };

    if (editBtn) {
        editBtn.addEventListener("click", editProcess);
    };
    if (doneBtn) {
        doneBtn.addEventListener("click", doneProcess);
    };



});

$(document).ready(() => {
    let myDate = document.querySelectorAll(".my-date");

    myDate.forEach(d => {
        let input = d.previousElementSibling;  // Assuming input is the sibling of `.my-date`

        // Initialize flatpickr only once
        if (!input._flatpickr) {
            input.flatpickr({
                dateFormat: "m-d-Y",  // Set desired date format
                disableMobile: true,
                onOpen: () => input.style.color = 'initial',  // On open, reset the color
            });
        }

        // Open the calendar when clicking on .my-date element
        d.addEventListener("click", function () {
            if (input._flatpickr) {
                input._flatpickr.open();
            }
        });
    });
});


// -> user-profile-personal edit-procee -->

$(document).ready(() => {

    let personalDetailsEditSvg = document.getElementById("personal-details-edit-svg");
    let personalDetailsEditSaveBtn = document.getElementById("personal-details-edit-save-btn");

    let personalDetailText = document.querySelectorAll(".personal-detail-text");
    let personalDetailInput = document.querySelectorAll(".personal-detail-input");

    let personalAddressEditSaveBtn = document.getElementById("personal-address-edit-save-btn");
    let personalAddressEditSvg = document.getElementById("personal-address-edit-svg");

    let personalAddressText = document.querySelectorAll(".personal-address-text");
    let personalAddressInput = document.querySelectorAll(".personal-address-input");

    let guardianInfoEditSvg = document.getElementById("guardian-info-edit-svg");
    let guardianInfoEditSaveBtn = document.getElementById("guardian-info-edit-save-btn");

    let guardianInfoText = document.querySelectorAll(".guardian-info-text");
    let guardianInfoInput = document.querySelectorAll(".guardian-info-input");


    function editProcess(btn, svg, text, input) {
        svg.addEventListener("click", () => {
            btn.classList.remove("edit-hide");
            svg.classList.add("edit-hide");

            text.forEach(t => {
                t.classList.add("edit-hide");
            })
            input.forEach(p => {
                p.classList.remove("edit-hide");
                p.addEventListener("input", () => {
                    p.style.height = p.scrollHeight + 'px';
                });

            });
            input[0].focus();
            input[0].setSelectionRange(input[0].value.length, input[0].value.length);

        })
    }
    function doneProcess(btn, svg, text, input) {
        btn.addEventListener("click", () => {
            svg.classList.remove("edit-hide");
            btn.classList.add("edit-hide");

            text.forEach(t => {
                t.classList.remove("edit-hide");
            })
            input.forEach(p => {
                p.classList.add("edit-hide");
            })

        });
    };

    if (personalDetailsEditSvg) {
        personalDetailsEditSvg.addEventListener("click", editProcess(
            personalDetailsEditSaveBtn, personalDetailsEditSvg, personalDetailText, personalDetailInput
        ));
    };

    if (personalDetailsEditSaveBtn) {
        personalDetailsEditSaveBtn.addEventListener("click", doneProcess(
            personalDetailsEditSaveBtn, personalDetailsEditSvg, personalDetailText, personalDetailInput
        ));
    };

    if (personalAddressEditSvg) {
        personalAddressEditSvg.addEventListener("click", editProcess(
            personalAddressEditSaveBtn, personalAddressEditSvg, personalAddressText, personalAddressInput
        ));
    };

    if (personalAddressEditSaveBtn) {
        personalAddressEditSaveBtn.addEventListener("click", doneProcess(
            personalAddressEditSaveBtn, personalAddressEditSvg, personalAddressText, personalAddressInput
        ));
    };

    if (guardianInfoEditSvg) {
        guardianInfoEditSvg.addEventListener("click", editProcess(
            guardianInfoEditSaveBtn, guardianInfoEditSvg, guardianInfoText, guardianInfoInput
        ));
    };

    if (guardianInfoEditSaveBtn) {
        guardianInfoEditSaveBtn.addEventListener("click", doneProcess(
            guardianInfoEditSaveBtn, guardianInfoEditSvg, guardianInfoText, guardianInfoInput
        ));
    };
});



$(document).ready(() => {
    let transactionFiltersBox = document.querySelectorAll(".transaction-filters-box");

    let all = document.getElementById("all-wallets");
    let credit = document.getElementById("credit-wallets");
    let debit = document.getElementById("debit-wallets");
    let expired = document.getElementById("expired-wallets");

    let walletsMiddleContentTop = document.querySelectorAll(".wallets-middle-content-top");
    let creditWallets = document.querySelectorAll(".credit-wallets");
    let debitWallets = document.querySelectorAll(".debit-wallets");
    let expiredWallets = document.querySelectorAll(".expired-wallets");

    transactionFiltersBox.forEach(box => {
        box.addEventListener("click", () => {
            transactionFiltersBox.forEach(v => {
                v.classList.remove("active");
            })
            box.classList.add("active");
        })
    });

    if (all) {
        all.addEventListener("click", () => {
            walletsMiddleContentTop.forEach(content => {
                if (content.classList.contains("wallets-hide")) {
                    content.classList.remove("wallets-hide");
                };
            });
        });
    }


    function walletManage(main, card, type) {
        type.addEventListener("click", () => {
            main.forEach(content => {
                content.classList.add("wallets-hide");
            })
            card.forEach(creditContent => {
                creditContent.classList.remove("wallets-hide");
            })
        })
    };

    if (credit) {
        credit.addEventListener("click", walletManage(walletsMiddleContentTop, creditWallets, credit));
    };
    if (debit) {
        debit.addEventListener("click", walletManage(walletsMiddleContentTop, debitWallets, debit))
    };
    if (expired) {
        expired.addEventListener("click", walletManage(walletsMiddleContentTop, expiredWallets, expired))
    };

});


// burger-menu-home-page --> activate ..::-m "done" -D">

$(document).ready(() => {
    let burgurMenuLeftLinks = document.querySelectorAll(".burgur-menu-left-links");

    burgurMenuLeftLinks.forEach(link => {

        link.addEventListener("click", function (){

            if (this.classList.contains("no-active"))return;

            burgurMenuLeftLinks.forEach(a => {
                if (a.classList.contains("active")) {
                    a.classList.remove("active");
                }
            });
            
            link.classList.add("active");

        })
    })
});

// cancel booking modal 

$(document).ready(() => {
    let reasonForCancelSelect = document.querySelectorAll(".r-s-option");

    reasonForCancelSelect.forEach(opt => {
        opt.addEventListener("click", () => {
            opt.classList.toggle("active");
        })
    })
})



// $(document).ready(() => {
//     const walletsDashLine = document.getElementById("wallets-dash-line");
//     const container = document.getElementById("my-complaints-filter-modal-container");
//     let closebtn = document.getElementById("back-filter-modal");


//     let startY = 0;
//     let initialTop = 222;
//     let isDragging = false;

//     // set default position
//     // container.style.top = initialTop + "px";

//     walletsDashLine.addEventListener("touchstart", (e) => {
//         startY = e.touches[0].clientY;
//         initialTop = parseInt(window.getComputedStyle(container).top); // more accurate
//         isDragging = true;
//         container.style.transition = "none"; // disable smooth transition during drag
//     });

//     walletsDashLine.addEventListener("touchmove", (e) => {
//         if (!isDragging) return;

//         let currentY = e.touches[0].clientY;
//         let diffY = currentY - startY;
//         let newTop = initialTop + diffY;

//         // Restrict range between 100 and 400
//         newTop = Math.max(100, Math.min(333, newTop));

//         container.style.top = newTop + "px";
//     });

//     walletsDashLine.addEventListener("touchend", () => {
//         isDragging = false;

//         let finalTop = parseInt(container.style.top);
//         container.style.transition = "top 0.2s ease"; // enable smooth snap

//         // Snap to nearest step
//         if (finalTop < 161) {
//             container.style.top = "100px";
//         } else if (finalTop < 222) {
//             container.style.top = "222px";
//         } else {
//             container.style.top = "400px";
//             setTimeout(() => {
//                 container.classList.remove("active");
//                 closebtn.click();
//             }, 20);
//         }
//     });


// });

// temp-comment
$(document).ready(() => {
    const walletsDashLine = document.getElementById("wallets-dash-line");
    const container = document.getElementById("filter-modal-content");
    let closebtn = document.getElementById("back-filter-modal");

    let isDragging = false;

    let offSetY = 0;
    let y = 0;

    let start = 0;
    let end = 0;
    let dif = 0;

    if (walletsDashLine) {
        walletsDashLine.addEventListener("touchstart", (e) => {

            let containerRect = container.getBoundingClientRect();
            isDragging = true;
            offSetY = e.touches[0].clientY - containerRect.top;

            start = e.touches[0].clientY;

        });
        walletsDashLine.addEventListener("touchmove", (e) => {
            if (isDragging) {
                e.preventDefault();
                y = e.touches[0].clientY - offSetY;
                container.style.top = y + 'px';
                end = e.touches[0].clientY;
            }
        }, { passive: false });
        walletsDashLine.addEventListener("touchend", (e) => {

            dif = start - end;

            let topValue = parseInt(container.style.top);

            let page = window.location.pathname;
            let pageTop = 0;

            if (page.includes('index.html')) {
                pageTop = 250;
            } else {
                pageTop = 150;
            };

            if (isDragging == true) {
                isDragging = false;

                if (dif > 0 && topValue < 250) {
                    container.style.top = '0';

                } else if (dif < 0 && topValue < 250) {
                    container.style.top = pageTop + "px";

                } else if (dif < 0 && topValue > 250) {

                    closebtn.click();
                    setTimeout(() => {
                        container.style.top = pageTop + 'px';
                    }, 1000);
                };
            };
        });
    };


    // let containerTouchActive = false;
    // container.addEventListener("scroll", () => {
    //     let scrollTop = container.scrollTop;

    //     if (scrollTop == 0) {

    //         containerTouchActive = true;

    //     } else {
    //         containerTouchActive = false;
    //     }

    // });


    // container.addEventListener("touchstart", (e) => {
    //     if (containerTouchActive) {
    //         let containerRect = container.getBoundingClientRect();

    //         offSetY = e.touches[0].clientY - containerRect.top;

    //         start = e.touches[0].clientY;
    //     }
    // });
    // container.addEventListener("touchmove", (e) => {

    //     if (containerTouchActive) {
    //         e.preventDefault();
    //         y = e.touches[0].clientY - offSetY;
    //         container.style.top = y + 'px';
    //         end = e.touches[0].clientY;
    //     }
    // });
    // container.addEventListener("touchend", (e) => {
    //     if (containerTouchActive) {

    //         dif = start - end;
    //         let topValue = parseInt(container.style.top);

    //         if (topValue > 0 && topValue < 250){
    //             container.style.top = '250px';
    //         } else if (topValue > 250){
    //         containerTouchActive = false;
    //             closebtn.click();

    //             setTimeout(() => {
    //                 container.style.top = '250px';
    //             }, 1000);
    //         }

    //     }
    // })

});




$(document).ready(() => {

    let circle = document.querySelectorAll(".circle-heart");

    circle.forEach(c => {

        c.addEventListener("click", (e) => {

            c.classList.toggle("active");

            e.stopPropagation();
            e.preventDefault();

        });

    });
});

$(document).ready(() => {
    const stars = document.querySelectorAll('.svg-star');

    if (stars) {
        stars.forEach((star, index) => {
            star.addEventListener('click', () => {
                const clickedIndex = index;
                stars.forEach((s, i) => {
                    if (i <= clickedIndex) {
                        s.classList.add('active');

                    } else {
                        s.classList.remove('active');
                    }
                });
            });
        });
    }
});


// email-validation > 


const emailInput = document.getElementById("email-input");

if (emailInput) {
    let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    emailInput.addEventListener("input", () => {
        if (!pattern.test(emailInput.value)) {
            if (emailInput.value.length == 0) {
                emailInput.style.border = "1px solid #CBD2E0";
            } else {

                emailInput.style.border = "2px solid red";
            }
        } else {
            emailInput.style.border = "1px solid #CBD2E0";
        }
    })
};

//reason-for-leave-textarea Set limit character count

$(document).ready(() => {

    let textarea = document.querySelectorAll(".reason-for-leave-textarea");


    textarea.forEach(input => {
        input.addEventListener("input", () => {
            let charCount = input.parentElement.querySelector('.character-counter-leave-duration')
            let textAreaLength = input.value.length;
            let maxLength = input.getAttribute("maxlength");

            if (textAreaLength < maxLength) {
                charCount.textContent = `${textAreaLength}/${maxLength}`;
                charCount.style.color = "black";
                if (textAreaLength == 0) {
                    charCount.style.color = "#00000033"
                }
            } else {
                charCount.style.color = "red";
                charCount.textContent = `!limit !! ${textAreaLength}/${maxLength}`;
            }

        })
    })
});


$(document).ready(() => {
    let addCardContent = document.querySelectorAll(".add-cards-content");

    addCardContent.forEach(card => {
        let editBtn = card.querySelector(".add-cards-edit-btn");

        let allInput = card.querySelectorAll(".atm-card-input");

        let accountInput = card.querySelector(".account-input");
        let accountText = card.querySelector(".account-number");

        editBtn.addEventListener("click", () => {
            allInput.forEach(input => {
                input.removeAttribute("readonly");
            })
            allInput[0].focus();
            allInput[0].setSelectionRange(allInput[0].value.length, allInput[0].value.length)
            accountInput.classList.remove("edit-hide");
            accountText.classList.add("edit-hide");
        })
    })
})


// document.addEventListener('contextmenu', function(e) {
//     e.preventDefault();
// });

$(document).ready(() => {
    let allFaqDropdownContent = document.querySelectorAll(".faqs-dropdown-content");

    if (allFaqDropdownContent) {
        allFaqDropdownContent.forEach(faqContent => {
            let minusSvg = faqContent.querySelector(".minus-svg");
            let plusSvg = faqContent.querySelector(".plus-svg");
            let dropdownFaqUl = faqContent.querySelector(".faqs-dropdown-ul");

            plusSvg.addEventListener("click", () => {
                plusSvg.classList.add("faqs-hide");
                dropdownFaqUl.classList.remove("faqs-hide");
                minusSvg.classList.remove("faqs-hide");

            });
            minusSvg.addEventListener("click", () => {
                plusSvg.classList.remove("faqs-hide");
                dropdownFaqUl.classList.add("faqs-hide");
                minusSvg.classList.add("faqs-hide");
            })
        })
    }


});

$(document).ready(() => {
    let photoInput = document.getElementById("reg-user-profile-photo");
    let triggerInput = document.getElementById("trigger-reg-user-photo");

    if (triggerInput) {
        triggerInput.addEventListener("click", () => {
            photoInput.click();
        })
    }
})


