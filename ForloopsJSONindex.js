var arr = [1000, 2000, "Maheswari", true];

// for
console.log("***For loop***");
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//for in
console.log("***For in***");
for (var x in arr) {
   console.log(arr[x]);
}

// for of
console.log("***For of***");
for (const num of arr) {
  console.log(num);
}

// for each
console.log("***For Each***");
arr.forEach((num) => {
  console.log(num)
});


