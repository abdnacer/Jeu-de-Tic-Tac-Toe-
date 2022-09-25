let depart = document.getElementById("depart")
let game = document.getElementById("game")
let selectBox = document.getElementById("select-box")
let commence = document.getElementById("commence")

// Select Class Button
let squarEl = document.querySelectorAll(".squar")

// input
let inptPlayer1 = document.getElementById("player1")
let inptPlayer2 = document.getElementById("player2")

// Validtion Input Player
let errorName = document.getElementById("errorName")

// paragraph
let joueur1 = document.getElementById("joueur1")
let joueur2 = document.getElementById("joueur2")

// Scoor
let win1 = document.getElementById("win1")
let win2 = document.getElementById("win2")
win1.innerText = 0
win2.innerText = 0

// Timer
let timerEl = document.getElementById("timer")
let timerSecond = 60;

// Count Scoore
let countScore1 = 0
let countScore2 = 0

// Click Button
let whowinner = false

// SUM Button
let sumButton = 0

// Game
var choix = "X"

// Care game
let C1 = document.querySelector("#C1")
let C2 = document.querySelector("#C2")
let C3 = document.querySelector("#C3")
let C4 = document.querySelector("#C4")
let C5 = document.querySelector("#C5")
let C6 = document.querySelector("#C6")
let C7 = document.querySelector("#C7")
let C8 = document.querySelector("#C8")
let C9 = document.querySelector("#C9")


localStorage.clear()

// change content de depart jeu
function commencer() {
  depart.style.display = "none"
  selectBox.style.display = "block"
}

// Set Name To localstorage
function storeName() {
  if ((inptPlayer1.value != '') && (inptPlayer2.value != '')) {
  errorName.innerHTML = ""

  localStorage.setItem("player1", inptPlayer1.value)
  localStorage.setItem("player2", inptPlayer2.value)

  joueur1.style.background = "#56baed"
  joueur1.style.color = "#fff"
  joueur2.style.color = "#000"


  depart.style.display = "none"
  selectBox.style.display = "none"
  game.style.display = "block"

  let playerJeu1 = localStorage.getItem("player1").toUpperCase()
  let playerJeu2 = localStorage.getItem("player2").toUpperCase()

  joueur1.innerText = playerJeu1
  joueur2.innerText = playerJeu2

  timerEl.innerHTML = `00:${timerSecond}`

  // const countDow = setInterval(() => {
  //   timerSecond--
  //   timerEl.innerHTML = `00:${timerSecond}`
  // }, 1000);

  } 
  else {
    errorName.innerHTML = 'File the All files';
    errorName.style.color = 'red'
  }

}

// Function Reset
function reset() {
  errorName.innerHTML = ""
  localStorage.setItem('win1', 0);
  localStorage.setItem('win2', 0);
  C1.innerHTML = '';
  C2.innerHTML = '';
  C3.innerHTML = '';
  C4.innerHTML = '';
  C5.innerHTML = '';
  C6.innerHTML = '';
  C7.innerHTML = '';
  C8.innerHTML = '';
  C9.innerHTML = '';

  inptPlayer1.value = ""
  inptPlayer2.value = ""

  win1.innerHTML = localStorage.getItem('win1');
  win2.innerHTML = localStorage.getItem('win2');

  depart.style.display = "none"
  selectBox.style.display = "block"
  game.style.display = "none"

  localStorage.clear();
  choix = "X"

  whowinner = false
  sumButton = 0
  countScore1 = 0
  countScore2 = 0

  joueur2.style.background = null
  joueur2.style.color = "#000"
  joueur1.style.background = "#56baed"
  joueur1.style.color = "#fff"
}

// Function replay
function replay() {
  localStorage.removeItem("C1")
  localStorage.removeItem("C2")
  localStorage.removeItem("C3")
  localStorage.removeItem("C4")
  localStorage.removeItem("C5")
  localStorage.removeItem("C6")
  localStorage.removeItem("C7")
  localStorage.removeItem("C8")
  localStorage.removeItem("C9")

  C1.innerHTML = '';
  C2.innerHTML = '';
  C3.innerHTML = '';
  C4.innerHTML = '';
  C5.innerHTML = '';
  C6.innerHTML = '';
  C7.innerHTML = '';
  C8.innerHTML = '';
  C9.innerHTML = '';

  whowinner = false
  sumButton = 0

  joueur1.style.background = "#56baed"
  joueur1.style.color = "#fff"
  joueur2.style.background = null
  joueur2.style.color = "#000"

  choix = "X"


}


// Game Click
function jouer(id) {
  let choixEl = document.getElementById(id)

  if ((choix == "X") && (choixEl.innerHTML == "") && (whowinner == false)) {
    choixEl.innerHTML = "X"
    localStorage.setItem(id, "X")
    choix = "O"
    sumButton++
    joueur1.style.background = null
    joueur1.style.color = "#000"
    joueur2.style.background = "#56baed"
    joueur2.style.color = "#fff"
    winner()
  }
  else if ((choix == "O") && (choixEl.innerHTML == "") && (whowinner == false)) {
    choixEl.innerHTML = "O"
    localStorage.setItem(id, "O")
    choix = "X"
    sumButton++
    joueur2.style.background = null
    joueur2.style.color = "#000"
    joueur1.style.background = "#56baed"
    joueur1.style.color = "#fff"
    winner()
  }

}

// Condition Pour Game
function winner() {
  let C1Local = localStorage.getItem("C1")
  let C2Local = localStorage.getItem("C2")
  let C3Local = localStorage.getItem("C3")
  let C4Local = localStorage.getItem("C4")
  let C5Local = localStorage.getItem("C5")
  let C6Local = localStorage.getItem("C6")
  let C7Local = localStorage.getItem("C7")
  let C8Local = localStorage.getItem("C8")
  let C9Local = localStorage.getItem("C9")

  if (C1Local === "X" && C2Local === "X" && C3Local === "X" || C1Local === "X" && C4Local === "X" && C7Local === "X" || C1Local === "X" && C5Local === "X" && C9Local === "X" || C2Local === "X" && C5Local === "X" && C8Local === "X" || C4Local === "X" && C5Local === "X" && C6Local === "X" || C7Local === "X" && C8Local === "X" && C9Local === "X" || C3Local === "X" && C5Local === "X" && C7Local === "X" || C3Local === "X" && C6Local === "X" && C9Local === "X") {
    setTimeout(() => {
      let winner1 = localStorage.getItem("player1")
      whowinner = true
      Swal.fire(
        'Good job!',
        'Winner ' + winner1,
        'success'
      )
      countScore1 += 1
      win1.innerText = countScore1
    }, 100);
  }

  else if (C1Local === "O" && C2Local === "O" && C3Local === "O" || C1Local === "O" && C4Local === "O" && C7Local === "O" || C1Local === "O" && C5Local === "O" && C9Local === "O" || C2Local === "O" && C5Local === "O" && C8Local === "O" || C4Local === "O" && C5Local === "O" && C6Local === "O" || C7Local === "O" && C8Local === "O" && C9Local === "O" || C3Local === "O" && C5Local === "O" && C7Local === "O" || C3Local === "O" && C6Local === "O" && C9Local === "O") {
    setTimeout(() => {
      let winner2 = localStorage.getItem("player2")
      whowinner = true
      Swal.fire(
        'Good job!',
        'Winner ' + winner2,
        'success'
      )
      countScore2 += 1
      win2.innerText = countScore2
    }, 100);
  }
  else if (sumButton === 9 && whowinner === false) {
    Swal.fire(
      'Good job!',
      'No winner',
      'success'
    )
  }

}