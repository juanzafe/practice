export function checkCoupon(enteredCode: string, correctCode: string, currentDate: string, expirationDate: string): boolean {
    const a=new Date(currentDate).getTime();
    const b=new Date(expirationDate).getTime();
  
  
return enteredCode===correctCode && a <= b
  
}
