

let count = 0
let prev
let countEl = document.getElementById("count-el")

function increment(){
	count +=  1
	countEl.innerText = count
}


let saveInfo = document.getElementById("saved")

function save(){

	let countStr = count + " - "
	saveInfo.innerHTML += countStr
	console.log(count)

	countEl.innerHTML = 0
	count = 0
}


function clearData(){
	saveInfo.innerHTML = ''
}



/*let welcomeEl = document.getElementById('welcome-el')

let name = " AlshaneTzy"
let greeting = 'Welcome to Scrimba '

let container 

container = greeting + ", " + name

welcomeEl.innerText = container*/



/*const firstName = 'Hi There'
const lastName = 'Alshane Sali'
let fullName

function greetingFunction(){
	fullName = firstName + ", " + lastName
	console.log(fullName)
}

*/

/*let myPoint = 3
let total


function add3Point(){
	total = myPoint += 3
}

function removePoint(){
	total = myPoint -= 1
}

add3Point()
add3Point()
add3Point()

removePoint()
removePoint()
console.log(myPoint)*/

/*
function errorHandler(){
	const error = document.getElementById('error')
	error.innerHTML = 'Something went wrong, please try again'
}


let num1 = 8 
let num2 = 2 
document.getElementById('num1-el').innerHTML = num1
document.getElementById('num2-el').innerHTML = num2
let ans

function add(){
	ans = num1 += num2
	document.getElementById('sum-el').innerHTML = 'Sum: '+ ans
	console.log(ans)
}

function subtract(){
	ans = num1 -= num2
	document.getElementById('sum-el').innerHTML = 'Sum: '+ ans
	console.log(ans)
}

function multi(){
	ans = num1 *= num2
	document.getElementById('sum-el').innerHTML = 'Sum: '+ ans
	console.log(ans)
}

function divide(){	
	ans = num1 %= num2
	document.getElementById('sum-el').innerHTML = 'Sum: '+ ans
	console.log(ans)
}	*/

const firstCard = getRandomCard()
const secondCard = getRandomCard()
let ucards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById('message-el')
console.log(messageEl)

let sumEl = document.getElementById('sum-el')
let cardsEl = document.getElementById('cards-el')


function startGame(){
	renderGame()
}


function renderGame(){
		cardsEl.innerHTML = "Cards: "
	for (let i = 0; i < ucards.length; i++){
		cardsEl.innerHTML += ucards[i] + " "
	}
	sumEl.innerHTML = "Sum : " + sum
	if(sum < 21 || sum == 20){
		message = "Do you want to draw a new card?"
	}else if(sum == 21){
		message = "Wohoo! You've got Blackjack!"
		hasBlackJack = true
	}else{
		message = 'Your out of the game....'
		isAlive = false
	}
		messageEl.innerHTML = message
	}

function getRandomCard(){
	return Math.floor((Math.random() * 11) + 1);
}


function newCard(){
	console.log('Drawing new card from the deck!')

	let newcard = getRandomCard()
	sum += newcard

	ucards.push(newcard)

	console.log(ucards)
	renderGame()

}



/*let sentence = ["Hello", "my", "name","is","Shane"]
let greetingEl = document.getElementById('greeting-el')



for (let i = 0; i < sentence.length; i++){
	console.log(sentence[i])
	greetingEl.innerHTML += sentence[i] + " "
}*/