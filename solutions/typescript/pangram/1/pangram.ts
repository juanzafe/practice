export function isPangram(sentence:string):boolean {
   const alphabet = "abcdefghijklmnopqrstuvwxyz"
   const lowersentence= sentence.toLowerCase()
   return alphabet.split('').every(letter => lowersentence.includes(letter));
}
