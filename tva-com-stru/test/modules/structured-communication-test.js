import { parseVat, formatVatCommunication, convertVat } from '../../src/modules/structured-communication'
import { expect } from 'chai'

describe('StructuredCommunication module', () => {

  it('parse a VAT number representation', () => {
    expect(parseVat('BE0507.722.348')).to.equal(507722348)
  })

  it('format a VAT number into a structured communication', () => {
    expect(formatVatCommunication(507722348)).to.equal('050/7722/34801')
  })

  it('format a vat number into a structured communication with dash separator', () => {
    expect(formatVatCommunication(507722348, '-')).to.equal('050-7722-34801')
  })

  it('convert a VAT number representation into structured communication', () => {
    expect(convertVat('BE0507.722.348')).to.equal('050/7722/34801')
  })

})
