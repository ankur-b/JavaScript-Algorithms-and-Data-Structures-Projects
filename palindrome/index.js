var output = document.getElementById("output");
var submit = document.getElementById("submit");
var input = document.getElementById("input");
var stri = input.innerHTML;
function palindrome(str){
	str = str.replace(/[\W_]/g, '').toLowerCase();
	var x = "";
	for (var i = str.length - 1; i >= 0; i--) {
		x+=str[i];
	}
	return x===str;
}
var result = palindrome(stri);
document.getElementById("btn").onclick=function(){
output.innerHTML=result;
};
 