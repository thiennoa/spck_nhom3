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

document.getElementById('id-post').innerHTML = ` <div class="container-tong">
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


