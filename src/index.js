module.exports = function check(str, bracketsConfig) {
	if (str.length % 2 === 1) return false;
  
	const config = Object.fromEntries(bracketsConfig);
	let stack = [];
  console.log(config);
	for (let i of str) {
	  let top = stack[stack.length - 1];
	  if (i === config[top]) {
		console.log(i);
		stack.pop();
	  } else {
		stack.push(i)
	  }
	};
  
	return stack.length === 0
  }
