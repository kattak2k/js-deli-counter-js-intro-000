    let deli = [];

    function takeANumber(deli, x) {
      let idx = 0;
      deli.push(x);
      idx = deli.indexOf(x) + 1
     return  `Welcome, ${x}. You are number ${idx} in line.`
    }

    function nowServing(deli) {
       var person
      if (deli.length == 0){
        return "There is nobody waiting to be served!";
      } else {
        person = deli.shift();
        return `Currently serving ${person}.`
      }
    }

    function currentLine(line) {
       var person
      if (deli.length == 0){
        return "There is nobody waiting to be served!";
      } else {
        person = deli.shift();
        return `Currently serving ${person}.`
      }
    }
    
