// Canvas oluştur
const canvas = document.createElement("canvas");
canvas.width = 1200;
canvas.height = 630;
const ctx = canvas.getContext("2d");

// Kullanıcı bilgileri (örnek $getUserVar verisi)
const username = "Marco";
const money = 1000;
const level = 6;
const msg = "Merhaba";
const items = ["😅","🎹","😎","","","","","","","","","","","","","","","","",""]; // 4x5 grid

// Arka plan
ctx.fillStyle = "#1e1f22";
ctx.fillRect(0,0,canvas.width,canvas.height);

// Avatar
ctx.fillStyle="#5865f2";
ctx.beginPath();
ctx.arc(75,125,50,0,Math.PI*2);
ctx.fill();
ctx.fillStyle="#fff";
ctx.font="40px Arial";
ctx.fillText("👤",55,140);

// Username + Para + Level
ctx.fillStyle="#fff";
ctx.font="30px Arial";
ctx.fillText(username, 120, 90);
ctx.font="24px Arial";
ctx.fillText("💰 "+money,120,130);
ctx.fillText("Level "+level+"/100",120,170);

// Level Bar
ctx.fillStyle="#333";
ctx.fillRect(120,180,200,20);
ctx.fillStyle="#57f287";
ctx.fillRect(120,180,Math.min(level*2,200),20);

// Mesaj kutusu
ctx.fillStyle="#222";
ctx.fillRect(50,250,1100,60);
ctx.fillStyle="#fff";
ctx.font="24px Arial";
ctx.fillText(msg,70,290);

// Envanter 4x5
const startX = 50, startY = 330, slotSize = 100, gap = 10;
ctx.font="50px Arial";
for(let i=0;i<20;i++){
  let row=Math.floor(i/5);
  let col=i%5;
  let x=startX + col*(slotSize+gap);
  let y=startY + row*(slotSize+gap);
  ctx.fillStyle="#222";
  ctx.fillRect(x,y,slotSize,slotSize);
  if(items[i]!=="") ctx.fillText(items[i],x+25,y+65);
}

// PNG URL üret
const pngUrl = canvas.toDataURL("image/png");
console.log(pngUrl); // Bu URL'yi Discord $image[] ile kullanabilirsin
