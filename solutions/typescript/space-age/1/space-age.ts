export function age(planet: string, seconds: number): number{
  var age:number
  const secondsOfYearEarth = 31557600
age=(seconds/secondsOfYearEarth)/planets[planet]
return Number (age.toFixed(2))
}

const planets:{ [key:string]: number} ={
  "mercury": 0.2408467,
  "venus": 0.61519726,
  "earth": 1.0,
  "mars": 1.8808158,
  "jupiter": 11.862615,
  "saturn": 29.447498,
  "uranus": 84.016846,
  "neptune": 164.79132
}

