function isString(val: any): val is string {
  return typeof val === 'string'
}

function isNumber(val: any): val is number {
  return typeof val === 'number'
}

function isBoolean(val: any): val is boolean {
  return typeof val === 'boolean'
}

function isSymbol(val: any): val is symbol {
  return typeof val === 'symbol'
}

function isUndefined(val: any): val is undefined {
  return typeof val === 'undefined'
}

function isBigint(val: any): val is bigint {
  return typeof val === 'bigint'
}

function isIPv4(address: string): boolean {
  const pattern = /^((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])$/
  return pattern.test(address)
}

function isIPv4CIDR(address: string): boolean {
  const pattern = /^(?:(?:[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}(?:[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\/([1-9]|[1-2]\d|3[0-2])$/
  return pattern.test(address)
}

export {
  isString,
  isNumber,
  isBoolean,
  isSymbol,
  isUndefined,
  isBigint,
  isIPv4,
  isIPv4CIDR
}