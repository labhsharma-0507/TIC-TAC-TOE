let a=document.getElementById("1");
let b=document.getElementById("2");
let c=document.getElementById("3");
let d=document.getElementById("4");
let e=document.getElementById("5");
let f=document.getElementById("6");
let g=document.getElementById("7");
let h=document.getElementById("8");
let i=document.getElementById("9");
let pl1=document.getElementById("pl1");
let pl=document.getElementById("pl");
let win1=document.getElementById("win1");
let win=document.getElementById("win");
let pll=document.getElementById("pll");
let restart=document.getElementById("restart");
function restartbutton(){
 window.location.href = "one.html";
}
// document.getElementById("restart").addEventListener("click", function() {
//     window.location.href = "one.html";});
let A=0,A1=0,A2=0,A3=0,A4=0,A5=0,A6=0,A7=0,A8=0,A9=0;

let arr=["O","X","O","X","O","X","O","X","O"]
let p=0;
function clickoperation()
{
    if(A==0)
    {
a.innerText=arr[p]
checking();
p++;
A++;
}
}
function clickoperation1()
{
    if(A1==0)
    {
    b.innerText=arr[p];
    checking();
A1++;
p++;
}}
function clickoperation2()
{
    if(A2==0)
    {
    c.innerText=arr[p];
    checking();
    A2++;
p++;
}}
function clickoperation3()
{if(A3==0)
    {
    d.innerText=arr[p];
    checking();
    A3++;
p++;
}}
function clickoperation4()
{if(A4==0)
    {
    e.innerText=arr[p];
    checking();
A4++;
p++;
}}
function clickoperation5()
{if(A5==0)
    {
    f.innerText=arr[p];
    checking();
A5++;
p++;
}}
function clickoperation6()
{if(A6==0)
    {
    g.innerText=arr[p];
    checking();
A6++;
p++;
}}
function clickoperation7()
{if(A7==0)
    {
    h.innerText=arr[p];
    checking();
A7++;
p++;
}}
function clickoperation8()
{if(A8==0)
    {
    i.innerText=arr[p];
    checking();
A8++;
p++;
}}
function checking()
{
    if(a.innerText=="O"&&b.innerText=="O"&&c.innerText=="O")
    {
        a.classList="bg-yellow-600 size-30 text-8xl text-blue-500 border-10 border-green-300";
        b.classList="bg-yellow-600 size-30 text-8xl text-green-500 border-10 border-green-300";
        c.classList="bg-yellow-600 size-30 text-8xl text-red-500 border-10 border-green-300";
       setTimeout(() => {
  player1win() }, 1000);
  celebrateWinner("");
    }
    if(d.innerText=="O"&&e.innerText=="O"&&f.innerText=="O")
    {
        d.classList="bg-yellow-600 size-30 text-8xl text-blue-500 border-10 border-green-300";
        e.classList="bg-yellow-600 size-30 text-8xl text-green-500 border-10 border-green-300";
        f.classList="bg-yellow-600 size-30 text-8xl text-red-500 border-10 border-green-300";
    setTimeout(() => {
  player1win() }, 1000);
   celebrateWinner("");
    }
    if(g.innerText=="O"&&h.innerText=="O"&&i.innerText=="O")
    {
        g.classList="bg-yellow-600 size-30 text-8xl text-blue-500 border-10 border-green-300";
        h.classList="bg-yellow-600 size-30 text-8xl text-green-500 border-10 border-green-300";
        i.classList="bg-yellow-600 size-30 text-8xl text-red-500 border-10 border-green-300";
    setTimeout(() => {
  player1win() }, 1000);
   celebrateWinner("");
    }
    if(a.innerText=="O"&&d.innerText=="O"&&g.innerText=="O")
    {
        a.classList="bg-yellow-600 size-30 text-8xl text-blue-500 border-10 border-green-300";
        d.classList="bg-yellow-600 size-30 text-8xl text-green-500 border-10 border-green-300";
        g.classList="bg-yellow-600 size-30 text-8xl text-red-500 border-10 border-green-300";
    setTimeout(() => {
  player1win() }, 1000);
   celebrateWinner("");
    }
    if(b.innerText=="O"&&e.innerText=="O"&&h.innerText=="O")
    {
        b.classList="bg-yellow-600 size-30 text-8xl text-blue-500 border-10 border-green-300";
        e.classList="bg-yellow-600 size-30 text-8xl text-green-500 border-10 border-green-300";
        h.classList="bg-yellow-600 size-30 text-8xl text-red-500 border-10 border-green-300";
    setTimeout(() => {
  player1win() }, 1000);
   celebrateWinner("");
    }
    if(c.innerText=="O"&&f.innerText=="O"&&i.innerText=="O")
    {
        c.classList="bg-yellow-600 size-30 text-8xl text-blue-500 border-10 border-green-300";
        f.classList="bg-yellow-600 size-30 text-8xl text-green-500 border-10 border-green-300";
        i.classList="bg-yellow-600 size-30 text-8xl text-red-500 border-10 border-green-300";
    setTimeout(() => {
  player1win() }, 1000);
   celebrateWinner("");
    }
    if(a.innerText=="O"&&e.innerText=="O"&&i.innerText=="O")
    {
        a.classList="bg-yellow-600 size-30 text-8xl text-blue-500 border-10 border-green-300";
        e.classList="bg-yellow-600 size-30 text-8xl text-green-500 border-10 border-green-300";
        i.classList="bg-yellow-600 size-30 text-8xl text-red-500 border-10 border-green-300";
    setTimeout(() => {
  player1win() }, 1000);
   celebrateWinner("");
    }
    if(c.innerText=="O"&&e.innerText=="O"&&g.innerText=="O")
    {
        c.classList="bg-yellow-600 size-30 text-8xl text-blue-500 border-10 border-green-300";
        e.classList="bg-yellow-600 size-30 text-8xl text-green-500 border-10 border-green-300";
        g.classList="bg-yellow-600 size-30 text-8xl text-red-500 border-10 border-green-300";
    setTimeout(() => {
  player1win1() }, 1000);
   celebrateWinner("");
    }

    if(a.innerText=="X"&&b.innerText=="X"&&c.innerText=="X")
    {
        a.classList="bg-yellow-600 size-30 text-8xl text-blue-500 border-10 border-green-300";
        b.classList="bg-yellow-600 size-30 text-8xl text-green-500 border-10 border-green-300";
        c.classList="bg-yellow-600 size-30 text-8xl text-red-500 border-10 border-green-300";
            setTimeout(() => {
  player1win1() }, 1000);
   celebrateWinner("");
    }
    if(d.innerText=="X"&&e.innerText=="X"&&f.innerText=="X")
    {
        d.classList="bg-yellow-600 size-30 text-8xl text-blue-500 border-10 border-green-300";
        e.classList="bg-yellow-600 size-30 text-8xl text-green-500 border-10 border-green-300";
        f.classList="bg-yellow-600 size-30 text-8xl text-red-500 border-10 border-green-300";
            setTimeout(() => {
  player1win1() }, 1000);
   celebrateWinner("");
    }
    if(g.innerText=="X"&&h.innerText=="X"&&i.innerText=="X")
    {
        g.classList="bg-yellow-600 size-30 text-8xl text-blue-500 border-10 border-green-300";
        h.classList="bg-yellow-600 size-30 text-8xl text-green-500 border-10 border-green-300";
        i.classList="bg-yellow-600 size-30 text-8xl text-red-500 border-10 border-green-300";
            setTimeout(() => {
  player1win1() }, 1000);
   celebrateWinner("");
    }
    if(a.innerText=="X"&&d.innerText=="X"&&g.innerText=="X")
    {
        a.classList="bg-yellow-600 size-30 text-8xl text-blue-500 border-10 border-green-300";
        d.classList="bg-yellow-600 size-30 text-8xl text-green-500 border-10 border-green-300";
        g.classList="bg-yellow-600 size-30 text-8xl text-red-500 border-10 border-green-300";
            setTimeout(() => {
  player1win1() }, 1000);
   celebrateWinner("");
    }
    if(b.innerText=="X"&&e.innerText=="X"&&h.innerText=="X")
    {
        b.classList="bg-yellow-600 size-30 text-8xl text-blue-500 border-10 border-green-300";
        e.classList="bg-yellow-600 size-30 text-8xl text-green-500 border-10 border-green-300";
        h.classList="bg-yellow-600 size-30 text-8xl text-red-500 border-10 border-green-300";
            setTimeout(() => {
  player1win1() }, 1000);
   celebrateWinner("");
    }
    if(c.innerText=="X"&&f.innerText=="X"&&i.innerText=="X")
    {
        c.classList="bg-yellow-600 size-30 text-8xl text-blue-500 border-10 border-green-300";
        f.classList="bg-yellow-600 size-30 text-8xl text-green-500 border-10 border-green-300";
        i.classList="bg-yellow-600 size-30 text-8xl text-red-500 border-10 border-green-300";
            setTimeout(() => {
  player1win1() }, 1000);
   celebrateWinner("");
    }
    if(a.innerText=="X"&&e.innerText=="X"&&i.innerText=="X")
    {
        a.classList="bg-yellow-600 size-30 text-8xl text-blue-500 border-10 border-green-300";
        e.classList="bg-yellow-600 size-30 text-8xl text-green-500 border-10 border-green-300";
        i.classList="bg-yellow-600 size-30 text-8xl text-red-500 border-10 border-green-300";
            setTimeout(() => {
  player1win1() }, 1000);
   celebrateWinner("");
    }
        
    if(c.innerText=="X"&&e.innerText=="X"&&g.innerText=="X")
    {
        c.classList="bg-yellow-600 size-30 text-8xl text-blue-500 border-10 border-green-300";
        e.classList="bg-yellow-600 size-30 text-8xl text-green-500 border-10 border-green-300";
        g.classList="bg-yellow-600 size-30 text-8xl text-red-500 border-10 border-green-300";
            setTimeout(() => {
  player1win1() }, 1000);
   celebrateWinner("");
    }
}
function player1win(){
 pl1.classList="absolute border-8 border-black rounded-4xl font-bold p-6 bg-red-600 gap-3 flex text-white"
 pl.innerText="PLAYER"
win1.classList="absolute border-8 rounded-3xl font-bold p-6 bg-green-500 top-80 gap-3 flex text-black "
win.innerText="🏆WIN🏆"
win.classList="text-7xl"
pl.classList="text-8xl"
pll.innerText="1"
pll.classList="text-8xl"

}
function player1win1(){
 pl1.classList="absolute border-8 border-black rounded-4xl font-bold p-6 bg-red-600 gap-3 flex text-white"
 pl.innerText="PLAYER"
win1.classList="absolute border-8 rounded-3xl font-bold p-6 bg-green-500 top-80 gap-3 flex text-black "
win.innerText="🏆WIN🏆"
win.classList="text-7xl"
pl.classList="text-8xl"
pll.innerText="2"
pll.classList="text-8xl"

}
function celebrateWinner(player) {
  // Winner text
  const winText = document.getElementById("win");
  winText.textContent = `${player}`;
  winText.classList.add("winner-animate");

  // Add confetti
  for(let i=0;i<50;i++){
    const c = document.createElement("div");
    c.classList.add("confetti");
    c.style.left = Math.random()*window.innerWidth + "px";
    c.style.background = `hsl(${Math.random()*360},100%,50%)`;
    c.style.animationDuration = 2 + Math.random()*2 + "s";
    document.body.appendChild(c);
    // Remove confetti after animation
    setTimeout(()=>c.remove(),4000);
  }

  // Celebration sound
  const audio = new Audio('https://www.myinstants.com/media/sounds/cheer.mp3');
  audio.play();
}