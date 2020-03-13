    let deli = [];

    function takeANumber(deli, x) {
      let idx = 0;
      deli.push(x);
      idx = deli.indexOf(x) + 1
     return  `Welcome, ${x}. You are number ${idx} in line.`
    }

    function nowServing(deli) {
      let idx = 0;
      deli.shift();
      idx = deli.indexOf(x) + 1
     return  `Welcome, ${x}. You are number ${idx} in line.`
    }
