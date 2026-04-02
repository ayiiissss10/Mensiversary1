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

message.innerHTML="Selamat kamu memenangkan hatiku ❤️"

// ubah X jadi ❤️
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
if(c==="") empty.push(i)
})

if(empty.length===0) return

let move=empty[Math.floor(Math.random()*empty.length)]

cells[move]="O"
board.children[move].innerHTML="O"

}

function clickCell(i){

if(cells[i]!=="" || gameOver) return

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
Pertama-tama aku mau bilang terima kasih sama kamu karena udah memilih aku sebagai pasangan kamu,
tapi aku minta maaf mungkin belum bisa jadi yang terbaik buat kamu dan aku bakal usahain jadi yang terbaik buat kamu.
Aku selalu bersyukur bisa kenal sama kamu dan milikin kamu seperti sekarang,
kamu sangat berharga buat aku,
kamu sangat spesial buat aku,
aku senang ada kamu di hidup aku,
dan buat hidup aku jadi lebih berwarna di banding hari-hari kemarin.

Setiap hari jadi lebih berarti sejak ada kamu di kehidupan aku,
kamu ngajarin aku banyak hal,
walaupun bukan secara langsung,
tapi dengan kamu negur aku,
dengan cara kamu melihat dunia,
aku jadi belajar banyak hal yang berbeda dari sudut pandangan aku.

Kamu mungkin bukan orang yang sempurna,
tapi di pandangan aku,
kamu udah lebih dari sempurna buat aku.
Kamu sempurna seperti bidadari,
kamu manis seperti madu,
tapi kamu juga pencuri,
tanpa sadar kamu ambil semuanya,
hati aku, pikiran aku, dan perhatian aku.
Tapi aku ga masalah kamu mengambil semuanya dari aku, 
aku rela asal itu kamu.
Aku mau beri semua yang aku bisa buat kamu, 
kamu segalanya buat aku,
kamu duniaku, kamu semestaku.

Aku minta maaf ga bisa ngeluarin isi hati semuanya,
tapi yang jelas aku sayang banget sama kamu,
aku bener bener sesayang itu sama kamu,
aku cinta sama kamu,
perasaan aku bener-bener sedalam ini sama kamu.
I really love u, i love u so much.
Selamat tanggal 3 yang pertama sayang!`

function showLetter(){

game.style.display="none"
letter.style.display="flex"

// reset text biar tidak dobel
text.innerHTML = letterText

// lanjut ke bunga setelah 4 detik (biar sempat dibaca)
setTimeout(()=>{
showFlower()
},4000)

}

/* FLOWER */

function showFlower(){

letter.style.display="none"

const canvas=document.getElementById("flowerCanvas")
canvas.style.display="block"

const ctx=canvas.getContext("2d")

let angle=0

function draw(){

ctx.clearRect(0,0,400,400)

// batang
ctx.strokeStyle="#2d6a4f"
ctx.lineWidth=6
ctx.beginPath()
ctx.moveTo(200,320)
ctx.lineTo(200,220)
ctx.stroke()

// bunga spiral aesthetic
for(let i=0;i<12;i++){

let a = angle + i * 0.5

let radius = 10 + i*7

let x = 200 + Math.cos(a) * radius
let y = 220 + Math.sin(a) * radius

ctx.beginPath()

let gradient = ctx.createRadialGradient(x,y,5,x,y,25)
gradient.addColorStop(0,"#ff8fa3")
gradient.addColorStop(1,"#ff4d6d")

ctx.fillStyle=gradient

// glow biar lebih bagus
ctx.shadowBlur = 15
ctx.shadowColor = "#ff4d6d"

ctx.arc(x,y,14,0,Math.PI*2)
ctx.fill()

}

// reset shadow biar teks tidak blur
ctx.shadowBlur = 0

// tengah bunga
ctx.beginPath()
ctx.fillStyle="#ffd166"
ctx.arc(200,220,12,0,Math.PI*2)
ctx.fill()

// teks
ctx.fillStyle="white"
ctx.font="20px Poppins"
ctx.textAlign="center"
ctx.fillText("I Love You ❤️",200,360)

// animasi mekar
if(angle < 6){
angle += 0.05
requestAnimationFrame(draw)
}

}

draw()

}
