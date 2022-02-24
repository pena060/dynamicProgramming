
let counter = 0;

function fib(){

  let cache = {}

  return function fibMemo(n){
    counter++;
    if(n in cache){
      return cache[n];
    }else if(n < 2){
      cache[n] = n;
      return cache[n];
    }else{
      cache[n] =  fibMemo(n - 1) + fibMemo(n - 2);
      return cache[n];
    }
  }
  
}

let counterFib = 0;

function fib2(n){
   counterFib++;
   if(n < 2){
    return n;
   }

    return fib2(n - 1) + fib2(n - 2);
  
}



const memoized = fib();


console.log(fib2(10));
console.log("counter no DP:",counterFib);
console.log(memoized(10));
console.log("counter with DP:",counter);