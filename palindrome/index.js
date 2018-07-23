var output = document.getElementById("output");
var submit = document.getElementById("submit");
var input = document.getElementById("input");
function palindrome(str){
	str = str.replace(/[\W_]/g, '').toLowerCase();
	var x = "";
	for (var i = str.length - 1; i >= 0; i--) {
		x+=str[i];
	}
	return x===str;
}

document.getElementById("btn").onclick=function(){
	var result = palindrome(input.value);
output.innerHTML=result;
};
