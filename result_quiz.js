const submitButton = document.querySelector('.submit-btn');



// mảng tên nhân vật và truy xuất

const nhanVat = [`Son Tung`,`Chi pu`,`Mono`,`Huan Hoa Hong`]
const randomIndex = Math.floor(Math.random() * nhanVat.length);
const randomName = nhanVat[randomIndex];

const chonNhanVat= document.querySelector("#nhanVat")
function randomNhanVat(){
	
	chonNhanVat.innerHTML='Tính cách của bạn giống với: ' + randomName
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
		const selector = `input[name=answer${questionIndex+1}]:checked`;
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
	scoreContainer.innerHTML = `bạn đã điền ${numCorrect} trên ${questions.length} câu hỏi .`;
	
	resultContainer.style.display = "block" ;
	
	

	
}

submitButton.addEventListener("click", showResult);

// close result-container

const closeResult= document.querySelector(".result-container")
const nodeX= document.querySelector(".color")
console.log("nodeX: ", nodeX)
nodeX.onclick = () => {
	closeResult.style.display="none";
}
