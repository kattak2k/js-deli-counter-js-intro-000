    let katzDeli = [];

    function takeANumber(katzDeli, x) {
      let idx = 0;
      katzDeli.push(x);
      idx = katzDeli.indexOf(x) + 1
     return  `Welcome, ${x}. You are number ${idx} in line.`
    }
