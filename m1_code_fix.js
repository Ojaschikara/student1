function isPrime(num) {
    let bag=0;
     for(let i = 2; i < num; i++) {
       
        if(num % i == 0) {
            bag++;
        }
      
       
     } 
    if(bag>0){return `${num} is not a prime number`}
     else{return `${num} is a prime number`}
    
  }
  console.log(isPrime(9));