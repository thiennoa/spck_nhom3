const submitButton = document.querySelector('.submit-btn');



// mảng tên nhân vật và truy xuất

const nhanVat = [`Sơn Tùng`, 
				`Chi Pu`,
				 `Mono`, 
				 `Huấn Hoa Hồng`]
const nhanVat2 = [
	{
		image: '/images/anh/sontungmtp.jpg', 
		name: `Sơn Tùng 
			<br> Bạn là người tài năng, nhiệt huyết và sáng tạo. Bạn cũng có khả năng cao sẽ trở thành tổng tài!`
	},
	{
		image: '/images/anh/Chipuuu.jpg',
		name: `Chi Pu 
		<br> Bạn là người linh hoạt, quyến rũ, yêu thích khám phá và theo đuổi cái mới, những ý tưởng và hoạt động mới. `
	},
	{
		image: '/images/anh/mono.jpg',
		name: `Mono 
		<br> Bạn là người nhanh nhẹn, nhiệt huyết và thông minh. Bạn luôn và trung tâm của sự chú ý và sự vui vẻ và bản chất bốc đồng của bạn thường rất hấp dẫn những người khác.`
	},
	{
		image: '/images/anh/Huanhoahong.jpg',
		name: `Huấn Hoa Hồng <br> Bạn là người biết nhìn xa trông rộng, biết truyền cảm hứng và vô cùng quyết đoán.`
	}
]
const randomIndex = Math.floor(Math.random() * nhanVat2.length);
const randomCharacter = nhanVat2[randomIndex];

const chonNhanVat = document.querySelector("#nhanVat")
function randomNhanVat() {

	chonNhanVat.innerHTML = `Tính cách của bạn giống với: <img class="xyz" src="${randomCharacter.image}"> ${randomCharacter.name}`;
}
submitButton.addEventListener("click", randomNhanVat);

//tính điểm và hiển thị kết quả.
const questions = [
	{
		question: "1",
		answers: {
			a: "a",
			b: "b",

		},
		correctAnswer: "a",
		correctAnswer1: "b"
	},
	{
		question: "2",
		answers: {
			a: "a",
			b: "b",

		},
		correctAnswer: "a",
		correctAnswer1: "b"
	},
	{
		question: "3",
		answers: {
			a: "a",
			b: "b",

		},
		correctAnswer: "a",
		correctAnswer1: "b"
	},
	{
		question: "4",
		answers: {
			a: "a",
			b: "b",

		},
		correctAnswer: "a",
		correctAnswer1: "b"
	},
	{
		question: "5",
		answers: {
			a: "a",
			b: "b",

		},
		correctAnswer: "a",
		correctAnswer1: "b"
	},
	{
		question: "6",
		answers: {
			a: "a",
			b: "b",

		},
		correctAnswer: "a",
		correctAnswer1: "b"
	},
	{
		question: "7",
		answers: {
			a: "a",
			b: "b",

		},
		correctAnswer: "a",
		correctAnswer1: "b"
	},
	{
		question: "8",
		answers: {
			a: "a",
			b: "b",

		},
		correctAnswer: "a",
		correctAnswer1: "b"
	},
	{
		question: "9",
		answers: {
			a: "a",
			b: "b",

		},
		correctAnswer: "a",
		correctAnswer1: "b"
	},
	{
		question: "10",
		answers: {
			a: "a",
			b: "b",

		},
		correctAnswer: "a",
		correctAnswer1: "b"
	},
	{
		question: "11",
		answers: {
			a: "a",
			b: "b",

		},
		correctAnswer: "a",
		correctAnswer1: "b"
	},
	{
		question: "12",
		answers: {
			a: "a",
			b: "b",

		},
		correctAnswer: "a",
		correctAnswer1: "b"
	},
	{
		question: "13",
		answers: {
			a: "a",
			b: "b",

		},
		correctAnswer: "a",
		correctAnswer1: "b"
	},
	{
		question: "14",
		answers: {
			a: "a",
			b: "b",

		},
		correctAnswer: "a",
		correctAnswer1: "b"
	},
	{
		question: "15",
		answers: {
			a: "a",
			b: "b",

		},
		correctAnswer: "a",
		correctAnswer1: "b"
	}

];

const quizContainer = document.querySelector(".quiz-container");
const resultContainer = document.querySelector(".result-container");
const scoreContainer = document.querySelector("#score");



function showResult() {
	const answerContainers = quizContainer.querySelectorAll(".answers");
	let numCorrect = 0;
	questions.forEach((currentQuestion, questionIndex) => {

		const answerContainer = answerContainers[questionIndex];
		const selector = `input[name=answer${questionIndex + 1}]:checked`;
		const userAnswer = (answerContainer.querySelector(selector) || {}).value;
		if (userAnswer === currentQuestion.correctAnswer || userAnswer === currentQuestion.correctAnswer1) {
			numCorrect++;
			answerContainer.classList.add("correct");
			answerContainer.classList.remove("incorrect");
		} else {
			answerContainer.classList.add("incorrect");
			answerContainer.classList.remove("correct");
		}
	});
	if (numCorrect < 15) {
		alert("Bạn phải điển đủ")
	} else {
		scoreContainer.innerHTML = `Bạn đã điền ${numCorrect} trên ${questions.length} câu hỏi .`;

		resultContainer.style.display = "block";
	}
}



submitButton.addEventListener("click", showResult);


const closeResult = document.querySelector(".result-container")
const nodeX = document.querySelector(".color")
console.log("nodeX: ", nodeX)
nodeX.onclick = () => {
	closeResult.style.display = "none";
}
