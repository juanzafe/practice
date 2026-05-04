/**
 * @param {unknown} value
 * @returns {boolean}
 */
export function isArray(value) {
  return Array.isArray(value);
}

/**
 * @param {unknown} value
 * @returns {boolean}
 */
export function isFunction(value) {
  return typeof value === "function"
}

/**
 * @param {unknown} value
 * @returns {boolean}
 */
export function isObject(value) {
  return (typeof value === "object" && value !=null) || typeof value === "function";
}

/**
 * @param {unknown} value
 * @returns {boolean}
 */
export function isPlainObject(value) {
  if (!isObject(value)) return false;
  if (isArray(value) || isFunction(value)) return false;

  const proto = Object.getPrototypeOf(value);
  return proto === Object.prototype || proto === null;
}