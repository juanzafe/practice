enum Resistencias{
  black, brown, red, orange, yellow, green, blue, violet, grey, white  
}

export function decodedValue(colors: string[]): number {
 var color1 = colors[0]
 var color2 = colors[1]
 var resistencia1 = stringToResistence(color1)
 var resistencia2 = stringToResistence(color2)
  const resultadoComoString = `${resistencia1}` +  `${resistencia2}`
  return +(resultadoComoString) 
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
