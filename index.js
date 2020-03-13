    let katzDeli = [];

    function takeANumber(katzDeli, x) {
      debugger;
      let idx;
      katzDeli.push(x);
      idx = katzDeli.indexOf(x) + 1
     return  `Welcome, ${x}. You are number ${idx} in line.`
    }
