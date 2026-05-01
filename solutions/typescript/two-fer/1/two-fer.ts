/**
 * This stub is provided to make it straightforward to get started.
 */

export function twoFer(nombre:string|undefined): string {
  if(nombre===undefined){
    return "One for you, one for me."
  }else{
    return `One for ${nombre}, one for me.`
  }
}
