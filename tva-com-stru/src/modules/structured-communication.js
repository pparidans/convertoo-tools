import _trim from 'lodash.trim'
import _padStart from 'lodash.padstart'
import _padEnd from 'lodash.padend'
import _isFinite from 'lodash.isfinite'

export function parseVat(str) {
  const enterpriseNumber = _trim(str).replace(/\D/g, '')
  const truncated = enterpriseNumber[0] === '0' ? enterpriseNumber.slice(0, 10) : enterpriseNumber.slice(0, 9)
  const numericEnterpriseNumber = parseInt(truncated, 10)
  if(!_isFinite(numericEnterpriseNumber)) return null
  return numericEnterpriseNumber
}

export function formatVatCommunication(vatNumber, separator = '/') {
  const strVatNumber = _trim(vatNumber)
  const prefixedVatNumber = (strVatNumber === '') ? '_' : `0${strVatNumber}`
  const checkDigit = (prefixedVatNumber.length === 10) ? _padStart(`${vatNumber % 97}`, 2, '0') : ''
  const suffixedVatNumber = _padEnd(`${prefixedVatNumber}${checkDigit}`, 12, '_')
  return suffixedVatNumber.replace(/^([0-9_]{3})([0-9_]{4})([0-9_]{5})$/, `$1${separator}$2${separator}$3`)
}

export function convertVat(str) {
  const vatNumber = parseVat(str)
  return formatVatCommunication(vatNumber)
}
