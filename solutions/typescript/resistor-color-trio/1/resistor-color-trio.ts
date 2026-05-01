enum Resistencias{
    black, brown, red, orange, yellow, green, blue, violet, grey, white  
  }
enum Resistencias2{
  black=" ohms",
  brown="0 ohms",
  red=" kiloohms",
  orange= " kiloohms",
  yellow= "0 kiloohms",
  blue= " megaohms",
  white= " gigaohms"
}


  export function decodedResistorValue(colors: string[]): string {
   const color1=colors[0]
   const color2=colors[1]
   const color3=colors[2]
   const Resistencia1=stringToResistence(color1)
   const Resistencia2=stringToResistence(color2)
   const Resistencia3=stringToOhms(color3)
    if(colors[1]==="black"){
       return `${Resistencia1}`+`${Resistencia3}`}
    else if(colors[0]==="black"){
      return `${Resistencia2}`+`${Resistencia3}`}
    
      else{
    return `${Resistencia1}`+`${Resistencia2}`+`${Resistencia3}`
    }
  }

function stringToOhms(color:string):Resistencias2{
  if (color==="black") return Resistencias2.black
  if (color==="brown") return Resistencias2.brown
  if (color==="red") return Resistencias2.red
  if (color==="orange") return Resistencias2.orange
  if (color==="yellow") return Resistencias2.yellow
  if (color==="blue") return Resistencias2.blue
  if (color==="white") return Resistencias2.white
  return Resistencias2.black
}
  
  function stringToResistence(color: string): Resistencias {
    if (color === "black") return Resistencias.black
    if (color === "brown") return Resistencias.brown
    if (color === "red") return Resistencias.red
    if (color === "orange") return Resistencias.orange
    if (color === "yellow") return Resistencias.yellow
    if (color === "green") return Resistencias.green
    if (color === "blue") return Resistencias.blue
    if (color === "violet") return Resistencias.violet
    if (color === "grey") return Resistencias.grey
    if (color === "white") return Resistencias.white
    return Resistencias.black
  }
      