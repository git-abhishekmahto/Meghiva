const API = 'http://localhost/meghani-homex/api/index.php';

const IMG_URL = 'http://localhost/meghani-homex/upload/';

const params = new URLSearchParams(window.location.search);



//type-1 -< for loadhostels


function loadHostels() {
    let cardBox = $('#popular-stay-card-box-container');

    if (cardBox) {
        $.ajax({
            url: API,
            method: 'POST',
            data: { type: 1 },
            success: function (data) {
                $(cardBox).html('');
                // data.forEach(v => {
                //     console.log(v.property_add);
                    
                // });
                data.map(item => $(cardBox).append(
                    `
                    <div class="card-box popular-stay-card-box" href="booking.html">
                <div><img src="${IMG_URL + item.img_nm}" alt="a"></div>
                <div class="circle-heart">
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.25" y="0.25" width="49.5" height="49.5" rx="24.75" fill="white" fill-opacity="0.3" />
                        <rect x="0.25" y="0.25" width="49.5" height="49.5" rx="24.75" stroke="#EFEFEF"
                            stroke-width="0.5" />
                        <path
                            d="M33.1033 17.61C32.6351 17.099 32.0792 16.6936 31.4674 16.4171C30.8556 16.1405 30.1998 15.9982 29.5375 15.9982C28.8752 15.9982 28.2194 16.1405 27.6076 16.4171C26.9957 16.6936 26.4399 17.099 25.9717 17.61L25 18.67L24.0283 17.61C23.0826 16.5783 21.7999 15.9987 20.4625 15.9987C19.125 15.9987 17.8424 16.5783 16.8967 17.61C15.9509 18.6417 15.4196 20.041 15.4196 21.5C15.4196 22.959 15.9509 24.3583 16.8967 25.39L17.8683 26.45L25 34.23L32.1317 26.45L33.1033 25.39C33.5717 24.8792 33.9433 24.2728 34.1968 23.6053C34.4503 22.9379 34.5808 22.2225 34.5808 21.5C34.5808 20.7775 34.4503 20.0621 34.1968 19.3946C33.9433 18.7272 33.5717 18.1208 33.1033 17.61V17.61Z"
                            stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <div class="card-stay-area">
                    <div class="card-stay-area-property-name"><h2>${item.property_name}</h2></div>
                    <div class="stay-area-rating">
                        <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_95_6168)">
                                <path
                                    d="M6.2875 3.94165L5 1.33331L3.7125 3.94165L0.833328 4.36248L2.91666 6.39165L2.425 9.25831L5 7.90415L7.575 9.25831L7.08333 6.39165L9.16666 4.36248L6.2875 3.94165Z"
                                    fill="#FABD38" stroke="#FABD38" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_95_6168">
                                    <rect width="10" height="10" fill="white" transform="translate(0 0.5)" />
                                </clipPath>
                            </defs>
                        </svg>
                        <p>4.25</p>
                    </div>
                </div>
                <div class="card-stay-location ">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8 14.6666C7.84444 14.6666 7.71111 14.6222 7.6 14.5333C7.48889 14.4444 7.40555 14.3278 7.35 14.1833C7.13889 13.5611 6.87222 12.9778 6.55 12.4333C6.23889 11.8889 5.8 11.25 5.23333 10.5166C4.66667 9.78331 4.20555 9.08331 3.85 8.41665C3.50555 7.74998 3.33333 6.94442 3.33333 5.99998C3.33333 4.69998 3.78333 3.59998 4.68333 2.69998C5.59444 1.78887 6.7 1.33331 8 1.33331C9.3 1.33331 10.4 1.78887 11.3 2.69998C12.2111 3.59998 12.6667 4.69998 12.6667 5.99998C12.6667 7.01109 12.4722 7.85553 12.0833 8.53331C11.7056 9.19998 11.2667 9.86109 10.7667 10.5166C10.1667 11.3166 9.71111 11.9833 9.4 12.5166C9.1 13.0389 8.85 13.5944 8.65 14.1833C8.59444 14.3389 8.50556 14.4611 8.38333 14.55C8.27222 14.6278 8.14444 14.6666 8 14.6666ZM8 7.66665C8.46667 7.66665 8.86111 7.50553 9.18333 7.18331C9.50555 6.86109 9.66667 6.46665 9.66667 5.99998C9.66667 5.53331 9.50555 5.13887 9.18333 4.81665C8.86111 4.49442 8.46667 4.33331 8 4.33331C7.53333 4.33331 7.13889 4.49442 6.81667 4.81665C6.49444 5.13887 6.33333 5.53331 6.33333 5.99998C6.33333 6.46665 6.49444 6.86109 6.81667 7.18331C7.13889 7.50553 7.53333 7.66665 8 7.66665Z"
                            fill="#E10E0E" />
                    </svg>
                    <p>${item.property_add}</p>
                </div>
                <div class="stay-price">
                    <h2>₹6,000</h2>
                </div>
            </div>
                    `
                ))
            }
        })
    }

};

//type-2 -< for signup

function signup() {


    let fullname = $("#fullname").val();
    let mobileno = $("#mobile-no").val();
    let password = $("#password").val();

    if (!fullname || !mobileno || !password) {
        alert('plz fill all inputs');
        return;
    }
    $.ajax({
        url: API,
        method: 'POST',
        data: { type: 2, fullname: fullname, mobileno: mobileno, password: password },
        success: function (res) {
            if (res.status == 1) {
                localStorage.setItem("login-status", 1);
                localStorage.setItem("user-id", res.uid);
                location.href = 'reg-otp.html';
            }
        }
    });
};

//type-3 -< for login


function login() {
    let mobileno = $("#mobile-no").val();
    let password = $("#password").val();

    if (!mobileno || !password) {
        alert("plz fill");
        return;
    }
    const getParam = params.get('get');


    $.ajax({
        url: API,
        method: 'POST',
        data: { type: 3, mobileno: mobileno, password: password },
        success: function (res) {

            if (res.status == 1) {
                localStorage.setItem("login-status", 1);
                localStorage.setItem("user-id", res.uid);
                if (getParam === 'list-your-property') {
                    location.href = 'list-your-property-1.html';
                } else {
                    location.href = 'index.html';
                }
                console.log(res.uid);
            } else {
                alert(res.msg);
            }
        }
    });

};

//type-4 -< for owner-contact-details

function ownerConatctDetails() {
    let owner_name = $("#owner-name").val();
    let owner_phone_no = $("#owner-phone-no").val();
    let owner_email = $("#owner-email").val();

    if (!owner_name || !owner_email || !owner_phone_no) {
        alert('fill-the boxes');
        return;
    };

    $.ajax({
        url: API,
        method: 'POST',
        data: { type: 4, owner_name: owner_name, owner_phone_no: owner_phone_no, owner_email: owner_email },
        success: function (res) {
            if (res.status == 1) {
                localStorage.setItem("owner_id" , res.id);
                location.href = `list-your-property-2.html?`;
            } else {
                alert(res.msg)
            }
        }
    });
};

//type-5 -< for property-basic-details


function basicInfo() {
    let property_name = $("#property-name").val();
    let property_type = $("#property-type").text();
    let property_stay_type = $("#property-stay-type").text();
    let property_city = $("#property-city").text();
    let property_area = $("#property-area").val();
    let property_pincode = $("#property-pincode").val();

    let owner_id = localStorage.getItem('owner_id');

    if (
        !property_name ||
        property_type === 'Please select' ||
        property_stay_type === 'Please select' ||
        property_city === 'Please select' ||
        !property_area ||
        !property_pincode
    ) {
        alert('Please fill all inputs');
        return;
    }

    $.ajax({
        url: API,
        method: 'POST',
        data: {
            type: 5,
            owner_id: owner_id,
            property_name: property_name,
            property_type: property_type,
            property_stay_type: property_stay_type,
            property_city: property_city,
            property_area: property_area,
            property_pincode: property_pincode
        },
        success: function (res) {
            if (res.status == 1) {
                localStorage.setItem('property-id', res.pid);
                location.href = `list-your-property-3.html`;

            } else {
                alert(res.msg);
            }
        }
    });

};

//type-6 -< for fetch owner-contact-details

function fetchOwnerDetails() {
    let user_id = localStorage.getItem('user-id');

    console.log(user_id);

    $.ajax({

        url: API,
        method: 'POST',
        data: { type: 6, user_id: user_id },
        success: function (data) {
            const item = data[0];

            $("#owner-name").val(item.name);
            $("#owner-phone-no").val(item.mobile_no);
            $("#owner-email").val(item.email);
        }
    });
};


// showing selected image on screen

let selectedFiles = [];
let imageUpload = document.getElementById("real-file");

if (imageUpload) {
    imageUpload.addEventListener("change", function (event) {
        let imageUploadPreviewContent = document.getElementById("property-image-preview-content");
        imageUploadPreviewContent.style.display = 'flex';
        
       
        
        

        let files = event.target.files;

        [...files].forEach(file => {
            if (window.location.pathname.endsWith('list-your-property-5.html')){
                if (selectedFiles.length == 1){
                    selectedFiles = []; 
                }
            }
            selectedFiles.push(file); // SAVE file in array

            const reader = new FileReader();
            reader.onload = function (e) {
                const imageBox = document.createElement('div');
                
                if (imageUploadPreviewContent.classList.contains('upload-aadhar-img-content')) {
                    imageBox.classList.add('upload-property-img-box', 'upload-aadhar-img-box');
                } else {
                    imageBox.classList.add('upload-property-img-box');
                }
                
                

                imageBox.innerHTML = `
                <div class="upload-property-delete-img-svg">
                    <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.97309 3.02091L8.53921 10.3968C8.52304 10.6727 8.40203 10.932 8.20094 11.1216C7.99985 11.3112 7.73389 11.4168 7.4575 11.4167H3.54234C3.26595 11.4168 2.99999 11.3112 2.7989 11.1216C2.59781 10.932 2.4768 10.6727 2.46063 10.3968L2.02784 3.02091H0.895752V2.47925C0.895752 2.40742 0.924286 2.33853 0.975077 2.28774C1.02587 2.23695 1.09476 2.20841 1.16659 2.20841H9.83325C9.90508 2.20841 9.97397 2.23695 10.0248 2.28774C10.0756 2.33853 10.1041 2.40742 10.1041 2.47925V3.02091H8.97309ZM4.41659 0.854248H6.58325C6.65508 0.854248 6.72397 0.882782 6.77476 0.933573C6.82555 0.984364 6.85409 1.05325 6.85409 1.12508V1.66675H4.14575V1.12508C4.14575 1.05325 4.17429 0.984364 4.22508 0.933573C4.27587 0.882782 4.34476 0.854248 4.41659 0.854248ZM3.87492 4.37508L4.14575 9.25008H4.95825L4.74159 4.37508H3.87492ZM6.31242 4.37508L6.04159 9.25008H6.85409L7.12492 4.37508H6.31242Z" fill="white"/>
                            </svg>  
                </div>
                <img src="${e.target.result}" alt="" />
            `;

                // Delete button functionality
                imageBox.querySelector('.upload-property-delete-img-svg').addEventListener('click', function () {
                    imageBox.remove();
                    if (selectedFiles.length == 1) {
                        imageUploadPreviewContent.style.display = 'none';
                    };

                    selectedFiles = selectedFiles.filter(f => f !== file); // Remove from array
                });
            if (window.location.pathname.endsWith('list-your-property-5.html')){
                imageUploadPreviewContent.innerHTML = '';
                imageUploadPreviewContent.appendChild(imageBox);
                
            } else {
                imageUploadPreviewContent.appendChild(imageBox);
            }
            

            };
            reader.readAsDataURL(file);
        });
    });
}


//type-7 -< upload-img & property-rooms state;


function uploadImg() {

    if (selectedFiles.length != 4) {
        alert('please select at least 4 images');
        return;
    };
    let formData = new FormData();

    let pid = localStorage.getItem("property-id");

    // inputs
    let total_rooms = $("#total-rooms").val();
    let total_beds = $("#total-beds").val();
    let stayer_range = $("#stayer-range").val();

    formData.append('total_rooms', total_rooms);
    formData.append('total_beds', total_beds);
    formData.append('stayer_range', stayer_range);

    selectedFiles.forEach((file, index) => {
        formData.append('images[]', file);
    });
    formData.append('type', 7);
    formData.append('pid', pid);


    console.log([...formData.entries()]);
    if (!total_rooms || !total_beds || !stayer_range) {
        alert("please fill all inputs");
        return;
    };

    $.ajax({
        url: API,
        method: 'POST',
        data: formData,
        contentType: false,
        processData: false,
        success: function (data) {
            if (data.status == 1) {
                location.href = `list-your-property-4.html`;
            } else {
                alert(data.msg);
            }
        }
    });

};

//type-8 -< upload amenities ;


$("#aminities-submit-btn").on("click", function (e) {
    e.preventDefault();
    let form = document.getElementById("amenities-form");

    let formdata = new FormData(form);
    let pid = localStorage.getItem("property-id");
    let checkbox_count = 0;
    let alertMsg = $("#alert-msg");

    for (let pair of formdata.entries()) {
        if (pair[0] === 'amenities[]') {
            checkbox_count++;
        }
    }
    if (checkbox_count === 0) {
        alertMsg.css("display" , "flex");
        return;
    }


    formdata.append('type' , 8);
    formdata.append('pid' , pid);

    $.ajax({
        url : API , 
        data : formdata,
        method : 'POST',
        contentType : false , 
        processData : false , 
        success : function (res){
            if (res.status == 1){
                location.href = "list-your-property-5.html"
            } else {
                alert(res.msg);
            }
        }
    })
});

//type-9 -< upload owner aadhar ;

function uploadOwnerAadhar() {
    let oid = localStorage.getItem('owner_id');
    if (selectedFiles.length != 1){        
        alert("please upload file");
        return;
    };
    let formData = new FormData();
    
    formData.append('oid' , oid);
    formData.append('aadhar_file' , selectedFiles[0]);
    formData.append('type' , 9);


    
    
    $.ajax({
        url :API,
        method : 'POST',
        data : formData,
        contentType : false , 
        processData : false ,
        success : function (res) {
            console.log(res);
            
            if (res.status === 1){
                alert("aadhar upload successful");
                location.href = 'index.html';
            } else {
                alert(res.msg);
            }
        }
    });
    
}









// if (window.location.pathname.endsWith('list-your-property-3.html')){
//     let stayImg = $("#real-file");

//     // $(stayImg).on('chan')

// } 





function logout() {
    localStorage.removeItem("login-status");
    localStorage.removeItem("user-id");
    localStorage.removeItem("property-id");
    let firstTime = localStorage.getItem("first-time");
    if (firstTime == 1){
        location.href = "index.html";
    } else {
        location.href = 'intro.html';
    }
}
