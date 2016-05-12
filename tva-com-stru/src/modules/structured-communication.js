import trim from 'lodash.trim'
import padEnd from 'lodash.padstart'

export function parseVat(str) {
  const enterpriseNumber = trim(str)
  const reg = /^(BE)?[\.,\-\s]?(0)?[\.,\-\s]?([0-9]{2,3})[\.,\-\s]?([0-9]{3})[\.,\-\s]?([0-9]{3})$/
  const parts = reg.exec(enterpriseNumber)
  return parseInt(`${parts[3]}${parts[4]}${parts[5]}`, 10)
}

export function formatVatCommunication(vatNumber, separator = '/') {
  const checkDigit = vatNumber % 97
  const comStru = `0${vatNumber}${padEnd(checkDigit, 2, '0')}`
  return comStru.replace(/^([0-9]{3})([0-9]{4})([0-9]{5})$/, `$1${separator}$2${separator}$3`)
}

export function convertVat(str) {
  const vatNumber = parseVat(str)
  const comStru = formatVatCommunication(vatNumber)
  return comStru
}
