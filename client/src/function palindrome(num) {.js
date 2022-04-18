/** @format */

function palindrome(num) {
	let arr = num.toString().split("");
	let n = arr.length - 1;
	let normal;
	let reverse;
	if (num < 0 || typeof num !== "number") return "Not valid";

	for (let j = 3; j <= n; j++) {
		for (let i = 0; i < arr.length - j - 1; i++) {
			normal = +arr.slice(i, i + j).join("");
			console.log(normal);
			reverse = +arr
				.slice(i, i + j)
				.reverse()
				.join("");
			console.log(reverse);
			if (reverse === normal) return true;
			else continue;
		}
	}
	return false;
}
console.log(palindrome(63223321));
//123322367

//   let test = [1,2,3,4,5,6,7]
//   for(let i = 0 ; i < test.length-2; i++){
//       console.log(test.slice(i,i+3));
//   }
//   console.log(test.slice(1,4));
//check slice length before test palindrom so less than three ignored characters
//also slice from start  and from end and enter to inside
//(0,length - 1)-(1,length - 2)-(2,length - 3)-(3,length - 4)...
