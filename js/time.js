// 現在時刻
document.getElementById("view_time").innerHTML = getNow();

function getNow() {
	var now = new Date();
	var year = now.getFullYear();
	var mon = now.getMonth()+1; //１を足すこと
	var day = now.getDate();
	var hour = now.getHours();
	var min = now.getMinutes();
	
	//出力用
	var s = year + "年" + mon + "月" + day + "日" + hour + "時" + min + "分"; 
	return s;
}





// 8時間後
document.getElementById("time8h").innerHTML = getNow8();

function getNow8() {
	var hour8 = new Date();
hour8.setHours(hour8.getHours() +8);

	//出力用
	var s = hour8.toLocaleString();
	return s;
}


// 48時間後
document.getElementById("time48h").innerHTML = getNow48();

function getNow48() {
	var hour48 = new Date();
hour48.setHours(hour48.getHours() +48);

	//出力用
	var s = hour48.toLocaleString();
	return s;
}




// ３日後
document.getElementById("day3").innerHTML = getNowday3();

function getNowday3() {
	var dat3 = new Date();
dat3.setDate(dat3.getDate() +2);

	//出力用
	var s = dat3.toLocaleDateString();
	return s;
}





// 5日後
document.getElementById("day5").innerHTML = getNowday5();

function getNowday5() {
	var dat5 = new Date();
dat5.setDate(dat5.getDate() +4);

	//出力用
	var s = dat5.toLocaleDateString();
	return s;
}


// 7日後
document.getElementById("day7").innerHTML = getNowday7();

function getNowday7() {
	var dat7 = new Date();
dat7.setDate(dat7.getDate() +6);

	//出力用
	var s = dat7.toLocaleDateString();
	return s;
}



// 14日後
document.getElementById("day14").innerHTML = getNowday14();

function getNowday14() {
	var dat14 = new Date();
dat14.setDate(dat14.getDate() +13);

	//出力用
	var s = dat14.toLocaleDateString();
	return s;
}


// 30日後
document.getElementById("day30").innerHTML = getNowday30();

function getNowday30() {
	var dat30 = new Date();
dat30.setDate(dat30.getDate() +29);

	//出力用
	var s = dat30.toLocaleDateString();
	return s;
}



