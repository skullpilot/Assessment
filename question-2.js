function divisible(num) {
  if (num % 14 === 0) console.log("foobar");
  else if (num % 2 === 0) console.log("foo");
  else if (num % 7 === 0) console.log("bar");
  else console.log(num);
}

//console.log("hello")
divisible(1);
divisible(2);
divisible(4);
divisible(5);
divisible(6);
divisible(7);
divisible(14);
divisible(21);
divisible(28);
divisible(67);
