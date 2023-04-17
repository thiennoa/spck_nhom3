// const doDuLieu = [{
//     "id": 1,
//     "name": "Skua, great",
//     "year": 1990,
//     "image": "http://dummyimage.com/600x700.png/5fa2dd/ffffff"
//   }, {
//     "id": 2,
//     "name": "Bird, red-billed tropic",
//     "year": 2004,
//     "image": "http://dummyimage.com/600x700.png/cc0000/ffffff"
//   }, {
//     "id": 3,
//     "name": "Macaw, blue and yellow",
//     "year": 2004,
//     "image": "http://dummyimage.com/600x700.png/dddddd/000000"
//   }, {
//     "id": 4,
//     "name": "Peacock, indian",
//     "year": 2007,
//     "image": "http://dummyimage.com/600x700.png/ff4444/ffffff"
//   }, {
//     "id": 5,
//     "name": "Cliffchat, mocking",
//     "year": 1987,
//     "image": "http://dummyimage.com/600x700.png/ff4444/ffffff"
//   }, {
//     "id": 6,
//     "name": "Caiman, spectacled",
//     "year": 2006,
//     "image": "http://dummyimage.com/600x700.png/dddddd/000000"
//   }, {
//     "id": 7,
//     "name": "Malagasy ground boa",
//     "year": 1993,
//     "image": "http://dummyimage.com/600x700.png/cc0000/ffffff"
//   }, {
//     "id": 8,
//     "name": "Owl, snowy",
//     "year": 1997,
//     "image": "http://dummyimage.com/600x700.png/cc0000/ffffff"
//   }, {
//     "id": 9,
//     "name": "Lion, south american sea",
//     "year": 1988,
//     "image": "http://dummyimage.com/600x700.png/cc0000/ffffff"
//   }, {
//     "id": 10,
//     "name": "Hudsonian godwit",
//     "year": 1992,
//     "image": "http://dummyimage.com/600x700.png/cc0000/ffffff"
//   }, {
//     "id": 11,
//     "name": "Brown lemur",
//     "year": 2005,
//     "image": "http://dummyimage.com/600x700.png/cc0000/ffffff"
//   }, {
//     "id": 12,
//     "name": "Lion, african",
//     "year": 2006,
//     "image": "http://dummyimage.com/600x700.png/ff4444/ffffff"
//   }, {
//     "id": 13,
//     "name": "Crested bunting",
//     "year": 2007,
//     "image": "http://dummyimage.com/600x700.png/cc0000/ffffff"
//   }, {
//     "id": 14,
//     "name": "Brown antechinus",
//     "year": 2001,
//     "image": "http://dummyimage.com/600x700.png/cc0000/ffffff"
//   }, {
//     "id": 15,
//     "name": "American woodcock",
//     "year": 1995,
//     "image": "http://dummyimage.com/600x700.png/5fa2dd/ffffff"
//   }, {
//     "id": 16,
//     "name": "Crowned hawk-eagle",
//     "year": 1999,
//     "image": "http://dummyimage.com/600x700.png/dddddd/000000"
//   }, {
//     "id": 17,
//     "name": "Gray heron",
//     "year": 1969,
//     "image": "http://dummyimage.com/600x700.png/5fa2dd/ffffff"
//   }, {
//     "id": 18,
//     "name": "Zorro, common",
//     "year": 1991,
//     "image": "http://dummyimage.com/600x700.png/ff4444/ffffff"
//   }, {
//     "id": 19,
//     "name": "Black-tailed prairie dog",
//     "year": 2009,
//     "image": "http://dummyimage.com/600x700.png/cc0000/ffffff"
//   }, {
//     "id": 20,
//     "name": "Civet, small-toothed palm",
//     "year": 1997,
//     "image": "http://dummyimage.com/600x700.png/dddddd/000000"
//   }]


//   const $bookList = document.getElementById('edu');

//   let result = "";
// for (const item of doDuLieu) {
//     result += `
//          <div class="col-3 mb-3">
//              <div class="card">
//                  <img class="card-img-top"
//                      src="${item.image}"
//                      alt="">
//                      <div class="card-body">
//                      <b class="card-title">Tên</b>
                     
//                      <div>
//                          <p class="card-text">Môn học</p>
//                      <div>
//                          <a href="#" class="btn btn-dark btn-sm">Bài Học</a>
//                      </div>
//                      </div>
//                  </div>
//              </div>
//          </div>`;
// }
// $bookList.innerHTML = result;


// const dataJson = JSON.stringify(doDuLieu);
// localStorage.setItem('doDuLieu', dataJson);
