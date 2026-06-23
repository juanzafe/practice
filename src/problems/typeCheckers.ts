export function isBoolean(value: unknown): boolean {
   return typeof value === 'boolean'
}

export function isNumber(value: unknown): boolean {
   return typeof value === 'number'
}

export function isString(value: unknown): boolean {
   return typeof value === 'string'
}

export function isObject(value: unknown): boolean {
   return typeof value === 'object'
}

export function isArray(value: unknown): boolean {
   return Array.isArray(value)
}

export function isFunction(value: unknown): boolean {
   return typeof value === 'function'
}

export function isNull(value: unknown): boolean {
   return value === null
}

export function isUndefined(value: unknown): boolean {
   return value === undefined
}

export function isSymbol(value: unknown): boolean {
   return typeof value === 'symbol'
}

export function isBigInt(value: unknown): boolean {
   return typeof value === 'bigint'
}
