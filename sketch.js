var inp,player  ,b,cmp;
var w ,bu,c,a;
var y=100;
function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
inp=createInput()
inp.position(100,50)
inp.attribute("placeholder","enter word in the box")
inp.style("textAlign","center")
b=createButton("submit")
b.position(200,500)
b.style("backgroundColor","blue")
b.style("borderRadius","20px")



w=createElement("H1")
w.position(500,50)
w.html("Word")
w.style("backgroundColor","red")

bu=createElement("h1")
bu.position(700,50)
bu.html("Bulls")
bu.style("backgroundColor","brown")

c=createElement("h1")
c.position(900,50)
c.html("Cows")
c.style("backgroundColor","yellow")
a=Math.round(random(0,s.length-1))
console.log(a)

cmp=s[a]
console.log(cmp)

b.mousePressed(danger)


}

function draw() {
  background(255,255,255);  
  drawSprites();
}
function danger(){
var bulls=0,cows=0
if (inp.value().length!==4){
alert("Please enter a four Letter Word")
}
player=inp.value().toLowerCase()
console.log(player)
//this Are for bulls
if (player.charAt(0)===cmp.charAt(0)){
bulls=bulls+1
}
if (player.charAt(1)===cmp.charAt(1)){
  bulls=bulls+1
}
if (player.charAt(2)===cmp.charAt(2)){
  bulls=bulls+1
}
if (player.charAt(3)===cmp.charAt(3)){
  bulls=bulls+1
}
if (player.charAt(0)===cmp.charAt(1)||player.charAt(0)===cmp.charAt(2)||player.charAt(0)===cmp.charAt(3)){
  cows=cows+1
}
if (player.charAt(1)===cmp.charAt(0)||player.charAt(1)===cmp.charAt(2)||player.charAt(1)===cmp.charAt(3)){
  cows=cows+1
}
if (player.charAt(2)===cmp.charAt(0)||player.charAt(2)===cmp.charAt(1)||player.charAt(2)===cmp.charAt(3)){
  cows=cows+1
}
if (player.charAt(3)===cmp.charAt(0)||player.charAt(3)===cmp.charAt(1)||player.charAt(3)===cmp.charAt(2)){
  cows=cows+1

}
if(inp.value().length===4){
for(var i=0;i<s.length;i++){
if (s[i].includes(player)){
break
}
}
if(i<s.length){
var m=createElement("h1")
m.html(player)
m.position(500,y)

var ma=createElement("h1")
ma.html(bulls)
ma.position(700,y)

var maa=createElement("h1")
maa.html(cows)
maa.position(900,y)

y=y+50

}
}
}



