    let katzDeli = [];

    function takeANumber(katzDeli, x) {
      let idx;
      katzDeli.push(x);
      idx = katzDeli.indexOf(x) + 1
     return  `Welcome, Ada. You are number ${idx} in line.`
    }
