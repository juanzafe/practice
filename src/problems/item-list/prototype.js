
Function.prototype.myCall = function(thisArg, ...argArray) {
  thisArg = thisArg ?? globalThis;
  thisArg.tempFn = this;                    
  const result = thisArg.tempFn(...argArray);      
  delete thisArg.tempFn;                    
  return result;                              
};