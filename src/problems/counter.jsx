export default function makeCounter(initialValue = 0) {

  let count = initialValue;


  return function() {
  
    const temporalValue = count;

    count++;
  
    return temporalValue;
  }
}
