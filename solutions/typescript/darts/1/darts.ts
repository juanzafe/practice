export function score(x: number, y: number): number {
    var distancia: number = Math.sqrt(x*x + y*y)
  if     (distancia>10){
  return 0
  }
  else if (distancia>5){
    return 1}
  else if (distancia>1){
    return 5
  }
  else{
    return 10
  }

  
  }