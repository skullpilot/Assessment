//Solution 1
if (province === "ONTARIO") {
  amt = base * ONTARIO_RATE;
} else if (province === "QUEBEC") {
  amt = base * QUEBEC_RATE;
  points = 2;
} else if (province === "ALBERTA") {
  amt = base * ALBERTA_RATE;
} else {
  amt = base;
}
calc = 2 * basis(amt) + extra(amt) * 1.05;

//Solution 2
let provinceObj = {
  ONTARIO: ONTARIO_RATE,
  QUEBEC: QUEBEC_RATE,
  ALBERTA: ALBERTA_RATE,
};

if (province in provinceObj) {
  rate = provinceObj.province;
  if (province === "QUEBEC") {
    points = 2;
  }
} else {
  rate = 1;
}

amt = base * rate;
calc = 2 * basis(amt) + extra(amt) * 1.05;
