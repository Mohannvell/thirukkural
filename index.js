
window.addEventListener("load", async e =>{
	await fetchKural();
});

async function fetchKural(){
	const res=await fetch(
	"https://gist.githubusercontent.com/Mohannvell/1146c9b23f413792cb3c07a8ee76c17e/raw/7f8f3fe80f8197574ec3affe42c40c6ddb92a724/thirukural"
	);
	
	//Response from service
	const kurals = await res.json();
	
	//Backgorund images
	const bgImg=[
	"url(src/assets/Bg1.png)",
	"url(src/assets/Bg2.png)",
	"url(src/assets/Bg3.png)",
	"url(src/assets/Bg5.png)",
	"url(src/assets/Bg6.png)",
	"url(src/assets/Bg7.png)"
	];
	
	//Get random kural from json response
	const getRandomKural= kurals => {
		let kuralsArr = [...kurals];
		return kuralsArr[Math.floor(kuralsArr.length * Math.random())];
	};
	
	//Get random background images
	const getRandomBgImg = () => {
		return bgImg[Math.floor(bgImg.length * Math.random())];
	};
	
	const setKural = () => {
		let kuralRandom = getRandomKural(kurals.kurals);
		let bg = getRandomBgImg();
		
		var str=kuralRandom.meaning.ta_salamon;
		var meaning1= str.replace("சாலமன் பாப்பையா :","");
		
		document.getElementById("chapter").innerHTML = "அதிகாரம்: "+kuralRandom.chapter;
		document.getElementById("kural1").innerHTML = kuralRandom.kural[0];
		document.getElementById("kural2").innerHTML =kuralRandom.kural[1];
		document.getElementById("meaning").innerHTML=meaning1;
		document.body.style.backgroundImage = bg;
		
		// document.body.style.backgroundImage = "url(src/assets/Bg1.png)";
		//document.body.style.backgroundRepeat = "no-repeat";
	};
	
	setKural();
	
}