//dữ liệu fake
// const data = [
//     {
//       id: 1,
//       interView: 'Chipu',
//       src: "./anh/Chipuuu.jpg",
//       name:"Chipu",
//       content: 'đây là bali',
//       srcifame: "https://youtube.com/embed/LCyo565N_5w",
//       color: "pink"
//     },
//     {
//       id: 2,
//       interView: 'Mono',
//       src: "./anh/mono.jpg",
//       name:"Mono",
//       content: 'đây là bali',
//       srcifame: "https://youtube.com/embed/LCyo565N_5w",
//       color: "pink"
//     },
//     {
//       id: 3,
//       interView: 'Vương Nhất Bác',
//       src: "./anh/vuongnhatbac.jpg",
//       name:"Vương Nhất Bác",
//       content: 'đây là bali',
//       srcifame: "https://youtube.com/embed/LCyo565N_5w",
//       color: "pink"
//     },
//     {
//       id: 4,
//       interView: 'Ngọc Trinh',
//       src: "./anh/ngoctrinh.jpg",
//       name:"Ngọc Trinh",
//       content: 'đây là bali',
//       srcifame: "https://youtube.com/embed/LCyo565N_5w",
//       color: "pink"
//     },
//     {
//       id: 5,
//       interView: 'Phạm Thoại',
//       src: "./anh/Phamthoai.jpg",
//       name:"Phạm Thoại",
//       content: 'đây là bali',
//       srcifame: "https://youtube.com/embed/LCyo565N_5w",
//       color: "pink"
//     },
//     {
//       id: 6,
//       interView: 'Trần Đức Bo',
//       src: "./anh/meomeo.jpg",
//       name:"Trần Đức Bo",
//       content: 'đây là bali',
//       srcifame: "https://youtube.com/embed/LCyo565N_5w",
//       color: "pink"
//     },
//     {
//       id: 7,
//       interView: 'Sơn Tùng MTP',
//       src: "./anh/sontungmtp.jpg",
//       name:"Sơn Tùng MTP",
//       content: 'đây là bali',
//       srcifame: "https://youtube.com/embed/LCyo565N_5w",
//       color: "pink"
//     },
//     {
//       id: 8,
//       interView: 'Phương Hằng',
//       src: "./anh/phuonghang.jpg",
//       name:"Phương Hằng",
//       content: 'đây là bali',
//       srcifame: "https://youtube.com/embed/LCyo565N_5w",
//       color: "pink"
//     },
//     {
//       id: 9,
//       interView: 'Huấn Hoa Hồng',
//       src: "./anh/Huanhoahong.jpg",
//       name:"Huấn Hoa Hồng",
//       content: 'đây là bali',
//       srcifame: "https://youtube.com/embed/LCyo565N_5w",
//       color: "pink"
//     },
//     {
//       id: 1,
//       interView: 'Chipu',
//       src: "./anh/Chipuuu.jpg",
//       name:"Issac",
//       content: 'đây là bali',
//       srcifame: "https://youtube.com/embed/LCyo565N_5w",
//       color: "pink"
//     },
//     {
//       id: 1,
//       interView: 'Chipu',
//       src: "./anh/Chipuuu.jpg",
//       name:"Issac",
//       content: 'đây là bali',
//       srcifame: "https://youtube.com/embed/LCyo565N_5w",
//       color: "pink"
//     },
//     {
//       id: 1,
//       interView: 'Chipu',
//       src: "./anh/Chipuuu.jpg",
//       name:"Issac",
//       content: 'đây là bali',
//       srcifame: "https://youtube.com/embed/LCyo565N_5w",
//       color: "pink"
//     },
    
  
//   ];
  
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let id = 1;
if(urlParams.get('id')){
  id = urlParams.get('id');
}
const detail = urlParams.get('detail');

let content = {};

for(let i = 0; i<data.length; i++){
  if(data[i].id == id){
    // console.log(data[i])
    content = {...data[i]}
  }
}

const string = `Đây là bài viết ${id}`;
let strSubString = content.content.slice(1);

document.getElementById('id-post').innerHTML = ` 

<!-- header -->
    <nav class="navbar navbar-expand-sm navbar-dark bg-success sticky-top" style="background-image:url(https://wallpaperset.com/w/full/6/6/4/125431.jpg); font-size: large;"> 
        <div class="container">
            <a class="navbar-brand" href="/html/home.html"><img src="/images/anh/LOGO (1).png" style="width: 100%;height: 50px"></a>
            <ul class="navbar-nav ms-auto me-5" style="gap: 20px">
                <li class="nav-item">
                    <a href="./home.html" class="nav-link">Trang chủ</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Môn học</a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Vũ Đạo và Nghệ Thuật</a></li>
                        <li><a class="dropdown-item" href="#">Truyền Thông</a></li>
                        <li><a class="dropdown-item" href="#">Triết Học Đại Cương</a></li>
                        <li><a class="dropdown-item" href="#">Tài Chính - Ngân Hàng</a></li>
                        <li><a class="dropdown-item" href="#">Kinh Tế Vi Mô</a></li>
                        <li><a class="dropdown-item" href="#">Tâm Lý Học Đại Cương</a></li>
                        <li><a class="dropdown-item" href="#">Tư Pháp Đại Cương</a></li>
                        <li><a class="dropdown-item" href="#">Luật Đại Cương</a></li>
                        <li><a class="dropdown-item" href="#">Tham Vấn</a></li>
                        <li><a class="dropdown-item" href="#">Toán Cao Cấp</a></li>
                        <li><a class="dropdown-item" href="#">Âm nhạc</a></li>
                        <li><a class="dropdown-item" href="#">Kiến trúc</a></li>


                    </ul>
                </li>
                
                <li class="nav-item">
                    <a href="./Contact us.html" class="nav-link">Liên hệ</a>
                </li>
                <li class="nav-item">
                    <a href="/html/result_quiz.html" class="nav-link">Đố vui</a>
                </li>
                <li style="position: relative;">
                
                    <div class="input-group">
                        <input type="text" id="search" class="form-control" placeholder="Tìm kiếm" aria-label="Recipient's username" aria-describedby="basic-addon2">
                        <span class="input-group-text" id="basic-addon2"><i class="fa-solid fa-magnifying-glass"></i></span>
                    </div>

                    <div id="search-suggestion" style="position:absolute; margin-top: 10px; width: 100%;">
                        <ul class="list-group"></ul>
                    </div>
                </li>

            </ul>

            <ul class="navbar-nav" id='navbar-abc'>
                <li class="nav-item me-2">
                    <button class="btn btn-outline-primary"><a class="nav-link" href="/html/login.html">Đăng nhập</a></button>
                </li>
                <li class="nav-item">
                    <button class="btn btn-outline-success"><a class="nav-link" href="/html/login.html">Đăng ký</a></button>
                </li>
            </ul>
            <header class="btn-all"><i class="fas fa-grip-lines"></i>
               
                <div class="menuu">
                    <div class="menuu-item">Đăng nhập</div>
                    <div class="menuu-item">Đăng ký</div>
                    <div class="menuu-item">Môn học</div>
                    <div class="menuu-item">Liên hệ</div>
                    <div class="menuu-item"> Đố vui</div>
                </div>
                
            </header>
        </div>

    </nav>





<div class="container-tong">
<h1 class="interview" style=" margin-top: 50px;margin-left: 50px;font-size: 50px;">${content.interView}</h1>
<div class="container-huy"  >
<div class="image" style="background: url(${content.color})">
<img class="image-item" src="${content.src}"
alt="img">
<h3>${content.name}</h3>
</div>
<div class="container-item">
    <span style="font-size: 36px; font-weight: bold">${content.content.charAt(0, 1)}</span>
    <p class="content" style="display: inline; margin-left: -6px">${strSubString}</p>
    <div class="listen">
        <b>Nghe toàn tập :</b>
        
        <div class="video-wrapper">
            <iframe width="560" height="315" src="${content.srcifame} " title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </iframe>
        </div>
       


    </div>
  
</div>


</div>
</div>
`;

//Dựa vào id lấy được, tìm kiếm bài viết có id tương ứng
//Sau đó thì in ra trang detail.html


