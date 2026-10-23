let nums = [12, 8, 15, 9, 17];

let lastNum = nums.length - 1;

let sum = nums[0] + nums[lastNum];

console.log(`sum of first and last num = ${sum}`);

nums[1] = 10;
nums[3] = 11;

console.log(`first not is : ${nums[0]}`);
console.log(`last num is : ${nums[lastNum]}`);
console.log(`final values : ${nums}`);

let total = 0;

console.log(`total number of nums = ${nums.length}`);
