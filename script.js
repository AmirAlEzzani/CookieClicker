
cookieNum = 0;
multiplier = 1;
multiplierCost = 10;
bakersNum = 0;
bakersCost = 100;
munch = new Audio("./assets/munch.mp3");
munch.volume = 0.03;



function bakeCookie() {
    cookieNum = cookieNum + multiplier;
    document.getElementById('cookieDisplay').innerHTML = "Cookies: "+cookieNum;
    munch.play();
}

function changeImg() {
    cookieImg.src="./assets/bitten.png"
}

function changeImgBack() {
    cookieImg.src="./assets/cookie.png"
}

function upgradeMultiplier() {
    if (cookieNum >= multiplierCost) {
        cookieNum-=multiplierCost;
        document.getElementById('cookieDisplay').innerHTML = "Cookies: "+cookieNum;
        multiplier+=1;
        multiplierCost+=multiplierCost;
        document.getElementById('multiplierUpgrade').innerHTML = "Upgrade Multiplier<br>Cost: "+multiplierCost;
    }
}

function hireBaker() {
    if (cookieNum >= bakersCost) {
        cookieNum-=bakersCost;
        document.getElementById('cookieDisplay').innerHTML = "Cookies: "+cookieNum;
        bakersNum+=1;
        bakersCost+=bakersCost;
        document.getElementById('upgradeBaker').innerHTML = "Hire a Baker<br>Cost: "+bakersCost;
    }
}
setInterval(
function baker() {
    cookieNum+=bakersNum
    document.getElementById('cookieDisplay').innerHTML = "Cookies: "+cookieNum;
},1000);

    


        