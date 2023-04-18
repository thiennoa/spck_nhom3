

  // const input = document.querySelector('#searchItem');
  // const suggestions = document.querySelector('.suggestions ul');
  
  // const searchItem = ['Vương Nhất Bác',
  // 'Sơn Tùng MTP',
  // 'Phương Hằng',
  // 'Phạm Thoại',
  // 'Ngọc Trinh',
  // 'Mono',
  // 'Meo meo',
  // 'Lộc phụ hồ',
  // 'Huấn hoa hồng',
  // 'Đàm Vĩnh Hưng',
  // 'Chú Tiến Bịp',
  // 'Chipu'];
  
  // function search(str) {
  //   let results = [];
  //   const val = str.toLowerCase();
  
  //   for (i = 0; i < searchItem.length; i++) {
  //     if (searchItem[i].toLowerCase().indexOf(val) > -1) {
  //       results.push(searchItem[i]);
  //     }
  //   }
  
  //   return results;
  // }
  
  // function searchHandler(e) {
  //   const inputVal = e.currentTarget.value;
  //   let results = [];
  //   if (inputVal.length > 0) {
  //     results = search(inputVal);
  //   }
  //   showSuggestions(results, inputVal);
  // }
  
  // function showSuggestions(results, inputVal) {
      
  //     suggestions.innerHTML = '';
  
  //   if (results.length > 0) {
  //     for (i = 0; i < results.length; i++) {
  //       let item = results[i];
  //       // Highlights only the first match
  //       // TODO: highlight all matches
  //       const match = item.match(new RegExp(inputVal, 'i'));
  //       item = item.replace(match[0], `<strong>${match[0]}</strong>`);
  //       suggestions.innerHTML += `<li>${item}</li>`;
  //     }
  //     suggestions.classList.add('has-suggestions');
  //   } else {
  //     results = [];
  //     suggestions.innerHTML = '';
  //     suggestions.classList.remove('has-suggestions');
  //   }
  // }
  
  // function useSuggestion(e) {
  //   input.value = e.target.innerText;
  //   input.focus();
  //   suggestions.innerHTML = '';
  //   suggestions.classList.remove('has-suggestions');
  // }
  
  // input.addEventListener('keyup', searchHandler);
  // suggestions.addEventListener('click', useSuggestion);

  const input = document.querySelector('#search');
  const suggestions = document.querySelector('#search-suggestion ul');
  
  const searchItem = [ 'Sơn Tùng MTP',
  'Chipu',
  'Mono',
  'Vương Nhất Bác',
  'Ngọc Trinh',
  'Phạm Thoại',
  'Trần Đức Bo',
  'Sơn Tùng MTP',
  'Phương Hằng',
  'Huấn Hoa Hồng',
  'Tiến Bịp Bợm',
  'Đàm Vĩnh Hưng',
  'Lộc Fuho'];
  
  function search(str) {
    let results = [];
    const val = str.toLowerCase();
  
    for (i = 0; i < searchItem.length; i++) {
      if (searchItem[i].toLowerCase().indexOf(val) > -1) {
        results.push(searchItem[i]);
      }
    }
  
    return results;
  }
  
  
  function searchHandler(e) {
    const inputVal = e.currentTarget.value;
    let results = [];
    if (inputVal.length > 0) {
      results = search(inputVal);
    }
    showSuggestions(results, inputVal);
  }
  
  function showSuggestions(results, inputVal) {
      
      suggestions.innerHTML = '';
  
    if (results.length > 0) {
      for (i = 0; i < results.length; i++) {
        let item = results[i];
        // Highlights only the first match
        // TODO: highlight all matches
        const match = item.match(new RegExp(inputVal, 'i'));
        item = item.replace(match[0], `<strong>${match[0]}</strong>`);
        suggestions.innerHTML += `<li class="list-group-item">${item}</li>`;
      }
      suggestions.classList.add('has-suggestions');
    } else {
      results = [];
      suggestions.innerHTML = '';
      suggestions.classList.remove('has-suggestions');
    }
  }
  
  function useSuggestion(e) {
    input.value = e.target.innerText;
    input.focus();
    suggestions.innerHTML = '';
    suggestions.classList.remove('has-suggestions');
  }
  
  input.addEventListener('keyup', searchHandler);
  suggestions.addEventListener('click', useSuggestion);


// chuyển hướng trang tìm kiếm sang google
//   function searchName(event) {
//     event.preventDefault(); // Ngăn chặn mặc định hành vi khi tìm kiếm
//     const searchTerm = document.getElementById("search").value;
//     const url = "https://www.google.com/search?q=" + searchTerm;
//     window.location.href = url; // Chuyển hướng đến trang tìm kiếm của Google
//   }

// const changeWeb = document.getElementById("basic-addon2")
// changeWeb.addEventListener('click',searchName)





const searchNamee = document.getElementById('search')
function loadName (loName) {
  const data = [
    {
      id: 1,
      interView: 'Chipu',
      src: "/images/anh/Chipuuu.jpg",
      name:"Chipu",
      content: `Khi quyết định bước sang con đường ca hát cũng là lúc Chi biết thế nào là những sóng gió đầu đời. Những ngày đó cho mình nhiều cảm xúc và sự trưởng thành. Cho đến ngày hôm qua, Chi vẫn thấy chặng đường mình đi có quá nhiều khó khăn, thử thách. Nhưng dù thế nào đi nữa, Chi vẫn muốn mình bứt phá, nỗ lực không ngừng nghỉ để thoát khỏi sự an toàn. 
      Trước khi em bước ra ngoài kia để đối mặt với rất nhiều thứ mà em không biết trước, em vẫn phải luôn nhắc nhở mình rằng: Ngày hôm nay, em sẽ là em `,
      srcifame: "https://www.youtube.com/embed/Kg4Qm-xIYzk?start=17",
      color: "/images/anh/bg2.png"
    },
    {
      id: 2,
      interView: 'Mono',
      src: "/images/anh/mono.jpg",
      name:"Mono",
      content: `MONO, tân binh Vpop chính thức ra mắt công chúng ngày 7/8/2022 với bệ đỡ cực khủng khi là em trai của ngôi sao hàng đầu Việt Nam: Sơn Tùng M-TP. Do đó, màn debut này ngay lập tức trở thành tâm điểm dư luận. Với MONO, việc "ngậm thìa vàng" ngay từ khi bắt đầu sự nghiệp chắc chắn là một con dao hai lưỡi. 

      Trong 8 ca khúc và 3 intro, những ca khúc nổi bật nhất, được đánh giá cao của album 22 chính là Waiting For You, Em Là và Anh Không Thể. Trong đó, Waiting For You là bài hát bùng nổ nhất, trở thành xu hướng của giới trẻ. Mang đến màu sắc âm nhạc những năm 80 một cách thuyết phục, bản phối city-pop kết hợp cùng phần lời kể về người si tình yêu đơn phương là một phép thử thành công đến bất ngờ của MONO và onionn.. Dù chưa được phát hành MV và không quảng bá rầm rộ như Quên Anh Đi, nhưng loạt thành tích khủng mà Waiting For You đạt được đã chứng minh cá tính nghệ thuật không tầm thường của tân binh MONO. `,
      srcifame: "https://www.youtube.com/embed/aO2FG1yI18o"  ,
      color: "/images/anh/bg3.png"
    },
    {
      id: 3,
      interView: 'Vương Nhất Bác',
      src: "/images/anh/vuongnhatbac.jpg",
      name:"Vương Nhất Bác",
      content: `Dù xuất thân là một ca sĩ nhưng sự thành công của Vương Nhất Bác lại đến nhiều nhất ở mảng phim ảnh. Năm 2016, Vương Nhất Bác lần đầu chạm ngõ điện ảnh với 2 bộ phim Đối tác hoàn hảo và Im lặng! Yêu đi. Tính đến năm 2019, ngôi sao trẻ sinh năm 1997 đã sở hữu một gia tài phim ảnh đồ sộ như Thanh đạm là mỹ vị nhân gian, Đại thoại Tây du 3, Học viện tư lập Thục Sơn… `,
      srcifame: "https://www.youtube.com/embed/z-xdjXDQzdM" ,
      color: "/images/anh/bg4.png"
    },
    {
      id: 4,
      interView: 'Ngọc Trinh',
      src: "/images/anh/ngoctrinh.jpg",
      name:"Ngọc Trinh",
      content: `Ngọc Trinh vốn là người đẹp nổi danh showbiz Việt cô là một người sở hữu vòng eo siêu nhỏ 56 cm. Và được biết nhiều đến với cái tên “nữ hoàng nội y”. Nhưng dạo gần đây, Vũ Khắc Tiệp – ông bầu của Ngọc Trinh đã cập nhật trên mạng xã hội một bức hình người mẫu Ngọc Trinh diện áo croptop. Đó là vòng eo của Cô nàng bây giờ chỉ còn 53cm. Một vòng eo cả nam lẫn nữ đều bị mê hoặc. 

      “Nữ hoàng nội y” từ lâu đã có thương hiệu về “vòng eo” của cô nàng vô cùng hấp dẫn. Nhắc đến người có vòng 2 nhỏ nhất showbiz Việt, mọi người đều hay nghĩ đến Ngọc Trinh. Biết được lợi thế hình thể của bản thân, Ngọc Trinh chăm chỉ diện trang phục khoe eo, khi chụp hình cũng khéo léo để lộ vòng 2. `,
      srcifame:"https://www.youtube.com/embed/9KRC2X2f0rM",
      color: "/images/anh/bg5.png"
    },
    {
      id: 5,
      interView: 'Phạm Thoại',
      src: "/images/anh/Phamthoai.jpg",
      name:"Phạm Thoại",
      content: `Đi lên từ bàn tay trắng, nhờ sự cố gắng, nỗ lực không ngừng nghỉ mà có được thành quả như hiện tại. Dẫu vậy, khi nhìn lại quá khứ, điều khiến chàng trai quê Hải Phòng nuối tiếc nhất là bỏ ngang việc học đại học mà chạy theo đồng tiền. 

      Không có bằng đại học, đi làm tháng vẫn kiếm trăm triệu. Nhưng có bằng đại học, lương các bạn có thể cao gấp trăm lần. Nếu như không có bằng đại học, đỉnh cao của các bạn chỉ ở tầm này thôi còn khi có bằng đại học, sẽ lên cao hơn gấp 10 lần `,
      srcifame: "https://www.youtube.com/embed/3IVo9iV7mEo" ,
      color: "/images/anh/bg6.png"
    },
    {
      id: 6,
      interView: 'Trần Đức Bo',
      src: "/images/anh/meomeo.jpg",
      name:"Trần Đức Bo",
      content: `Trần Đức Bo sinh năm 1999 tại Đà Nẵng. Anh chàng này có tên thật là Trần Đức Phi. Hiện nay Bo Trần đang sinh sống và làm việc tại TP. HCM. Trong thời gian làm việc ở đây, Bo Trần đã tạo được những dấu ấn nổi bật trong sự nghiệp của mình và gây được “tiếng vang lớn”. Trong thời gian ngắn, chàng trai đã gây trở thành “hiện tượng” của mạng xã hội. Kênh của anh chàng này đang chiếm sóng số 1 hiện nay. 
      Đức Bo có phong cách trang điểm của ulzzang Hàn Quốc. Anh chàng này khiến cư dân mạng không ít lần phải bất ngờ. Mỗi lần xuất hiện Bo Trần đều khiến netizen phải “xỉu lên xỉu xuống” vì gương mặt được make up trắng bệch và tạo khối khác biệt. Thêm vào đó chàng trai này còn đánh son môi rất đậm và đôi mặt đeo lens to tròn. `,
      srcifame: "https://www.youtube.com/embed/RxpeNkOPrV8",
      color: "/images/anh/bg1.png"
    },
    {
      id: 7,
      interView: 'Sơn Tùng MTP',
      src: "/images/anh/sontungmtp.jpg",
      name:"Sơn Tùng MTP",
      content: `Nguyễn Thanh Tùng (sinh ngày 5 tháng 7 năm 1994), thường được biết đến với nghệ danh Sơn Tùng M-TP, là một nam ca sĩ kiêm sáng tác nhạc, rapper và diễn viên người Việt Nam.

      Sinh ra ở thành phố Thái Bình, thời thơ ấu, Sơn Tùng thường đi hát ở Cung văn hoá thiếu nhi tỉnh Thái Bình và học chơi đàn organ. Sau đó, Tùng cùng với các bạn trong lớp thành lập nên một nhóm nhạc, lấy tên là Over Band, bắt đầu sáng tác và đăng tải các bài hát của mình lên một trang web chuyên về lĩnh vực âm nhạc có tên là LadyKillah.`,
      srcifame: "https://www.youtube.com/embed/xWW1a-WiKrQ?start=17",
      color: "/images/anh/bg2.png"
    },
    {
      id: 8,
      interView: 'Phương Hằng',
      src: "/images/anh/phuonghang.jpg",
      name:"Phương Hằng",
      content: `Nguyễn Phương Hằng được biết đến là một nữ doanh nhân có sự nghiệp vô cùng thành công với khối lượng tài sản sở hữu trong tay vô cùng khủng. Bà nắm giữ vị trí Tổng giám đốc kiêm Phó Chủ tịch HĐQT CT Đại Nam. Tên thật Nguyễn Phương Hằng theo giấy khai sinh là Nguyễn Thị Thanh Tuyền. 

      Vào năm 2021 cả đất nước xôn xao về các clip chửi, bóc phốt lương ý lừa đảo Võ Hoàng Yên và một loạt nghệ sĩ làm từ thiện. Rất nhiều nghệ sĩ nổi tiếng trong showbiz Việt bị bà khui chuyện quá khứ và việc làm sai trái. Điển hình có danh hài Hoài Linh, Phi Nhung, Vy Oanh, Hồng Vân,… `,
      srcifame:"https://www.youtube.com/embed/5nR6P4TImjk" ,
      color: "/images/anh/bg3.png"
    },
    {
      id: 9,
      interView: 'Huấn Hoa Hồng',
      src: "/images/anh/Huanhoahong.jpg",
      name:"Huấn Hoa Hồng",
      content: `Em có sai với ai đi nữa, có làm cái gì đi nữa. Nếu có phải trả giá thì em cũng xin chấp nhận. Bởi vì anh biết đấy. Ra xã hội làm ăn bươn chải. Liều thì ăn nhiều, không liều thì ăn ít. Muốn thành công thì phải chấp nhận chịu qua đắng cay ngọt bùi. Làm ăn muốn kiếm được tiền phải chấp nhận mạo hiểm, nguy hiểm một tý, nhưng "trong tầm kiểm soát
      Xã hội này chỉ có làm, chịu khó, cần cù thì bù siêng năng. Chỉ có làm thì mới có ăn. Những cái loại không làm mà đòi có ăn thì chỉ có ăn `,
      srcifame: "https://www.youtube.com/embed/Q_JTr4UPRW8?end=26",
      color: "/images/anh/bg4.png"
    },
    {
      id: 10,
      interView: 'Tiến Bịp (Bợm)',
      src: "/images/anh/ChuTien.jpg",
      name:"",
      content: `Hai loại người chưa lên tin, một là nghiện hai là cờ bạc. Không bao giờ tin được hai loại này, lúc vay tiền thì trình bày hoàn cảnh, lúc đi xoay tiền trả thì quên mịa anh đi. 
      Một bài học cuộc sống mà chú Tiến Bịp muốn gửi đến chúng ta: 
      Nhặt, đút vào túi - Tham Lam 
      Nhặt, giơ lên “Của ai đây” - Ngu dốt 
      Những cái vụ mà nhặt được tiền trả lại người rơi thì đa phần là nhiều thằng nhìn thấy rồi, không nuốt được trôi. Ví dụ tôi nhặt được 20k, tất nhiên tôi sẻ trả lại. Nhưng nhặt được 20 triệu. Còn cái nịt. Còn đúng cái nịt.  `,
      srcifame: "https://www.youtube.com/embed/WTFFM9mm6Bk?end=9",
      color: "/images/anh/bg5.png"
    },
    {
      id: 11,
      interView: 'Đàm Vĩnh Hưng',
      src: "/images/anh/damvinhhung.jpg",
      name:"Đàm Vĩnh Hưng",
      content: `Con nít con nôi, mới có bây lớn mà bày đặt lên giọng như mình am hiểu lắm, kiến thức thì kém mà cứ thích chứng minh. Chú thách con tìm ra được bộ nào dị hợm của chú. Mặc đồ hiệu mà con gọi là trang phục xa rời công chúng? Chú có tiền thì chú mới mua được đồ hiệu con nhé, không giống với bộ đồ y như cái giẻ lau mà các con đang mặc. `,
      srcifame: "https://www.youtube.com/embed/beNMsB9DmCs?start=52",
      color: "/images/anh/bg6.png"
    },
    {
      id: 12,
      interView: 'Lộc Fuho',
      src: "/images/anh/Locphuho.jpg",
      name:"Lộc Fuho",
      content: `Chô cha, em để số tiền đó em ăn mùa dịch đi các em. Nhiều khi thầy cũng rán làm có tiền để gửi mùa dịch cho các em, nhưng mà thầy không có. Nên là thầy cũng không giúp ai được hết á, tại vì thầy còn có vợ có con nữa. Vợ thầy cũng sắp sinh nữa các em à, còn vài tháng nữa sinh thầy không giúp được các em. Nên là tiền của các em, các em để dành ăn qua mùa dịch đi. Thầy cũng mong cho Việt Nam hết dịch đi, để cho các em sớm đi phụ hồ sớm`,
      srcifame: "https://www.youtube.com/embed/Fk_gXuhBuJM?start=11",
      color: "/images/anh/bg1.png"
    },
    
  
  ];
  const res = await fetch(`${data}`);
  const dataa = await res.json();
}
loadName()