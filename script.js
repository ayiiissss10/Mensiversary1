/* LOVE MODE */

const toggle = document.getElementById("toggle")
const heart = document.getElementById("heart")
const card = document.getElementById("card")
const game = document.getElementById("game")
const letter = document.getElementById("letter")
const text = document.getElementById("text")

toggle.addEventListener("change",()=>{
if(toggle.checked){
heart.textContent="❤"
heart.style.color="#ff2d55"

setTimeout(()=>{
card.style.display="none"
game.style.display="flex"
},600)
}
})

/* GAME */

const board=document.getElementById("board")
const message=document.getElementById("message")

let cells=["","","","","","","","",""]
let gameOver=false

const win=[
[0,1,2],[3,4,5],[6,7,8],
[0,3,6],[1,4,7],[2,5,8],
[0,4,8],[2,4,6]
]

function checkWin(){

for(let p of win){

let[a,b,c]=p

if(cells[a] && cells[a]==cells[b] && cells[a]==cells[c]){

gameOver=true

if(cells[a]=="X"){

message.innerHTML="Kamu memenangkan hatiku ❤️"

document.querySelectorAll(".cell").forEach(cell=>{
if(cell.innerHTML=="X"){
cell.innerHTML="❤️"
}
})

setTimeout(()=>showLetter(),2000)

}

}

}

}

function computerMove(){

if(gameOver) return

let empty=[]

cells.forEach((c,i)=>{
if(c=="") empty.push(i)
})

let move=empty[Math.floor(Math.random()*empty.length)]

cells[move]="O"
board.children[move].innerHTML="O"

}

function clickCell(i){

if(cells[i]!==""||gameOver) return

cells[i]="X"
board.children[i].innerHTML="X"

checkWin()
setTimeout(computerMove,400)

}

/* BOARD */

for(let i=0;i<9;i++){
let cell=document.createElement("div")
cell.classList.add("cell")
cell.addEventListener("click",()=>clickCell(i))
board.appendChild(cell)
}

/* LETTER */

const letterText=`Hai Odi sayang, selamat bulan pertama!
Aku ga tahu harus mulai dari mana,
tapi mungkin dari hal paling sederhana:
aku senang ada kamu.

Bukan karena semuanya selalu berjalan mulus,
tapi karena setiap hal yang kita lewati
terasa lebih berarti sejak ada kamu.

Aku suka cara kamu hadir,
tanpa perlu jadi sempurna, 
tapi kamu udah sempurna di mata aku sih.

Dan tanpa sadar,
itu bikin aku juga merasa cukup
jadi diri sendiri di dekat kamu.

Aku kadang bingung,
kamu itu sebenarnya bidadari atau beneran manusia ya?
kamu secantik bidadari tapi kamu suka mencuri
kamu ngambil semuanya, kamu ngambil hati aku, pikiran aku, dan perhatian aku
semuanya kamu ambil.`

let i=0

function showLetter(){
game.style.display="none"
letter.style.display="flex"
typeText()
}

function typeText(){

if(i<letterText.length){
text.innerHTML+=letterText.charAt(i)
i++
setTimeout(typeText,30)
}else{
setTimeout(showFlower,1000)
}

}

/* FLOWER */

function showFlower(){

letter.style.display="none"

const canvas=document.getElementById("flowerCanvas")
canvas.style.display="block"

const ctx=canvas.getContext("2d")

ctx.fillStyle="#2b0014"
ctx.fillRect(0,0,400,400)

/* batang */
ctx.strokeStyle="green"
ctx.lineWidth=5
ctx.beginPath()
ctx.moveTo(200,300)
ctx.lineTo(200,200)
ctx.stroke()

/* kelopak */
for(let i=0;i<8;i++){

let angle=i*Math.PI/4
let x=200+Math.cos(angle)*60
let y=200+Math.sin(angle)*60

ctx.beginPath()
ctx.fillStyle="pink"
ctx.arc(x,y,30,0,Math.PI*2)
ctx.fill()
}

/* tengah */
ctx.beginPath()
ctx.fillStyle="yellow"
ctx.arc(200,200,25,0,Math.PI*2)
ctx.fill()

/* teks */
ctx.fillStyle="white"
ctx.font="20px Poppins"
ctx.textAlign="center"
ctx.fillText("I Love You ❤️",200,350)

}
