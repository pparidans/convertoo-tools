import { parseVat, formatVatCommunication, convertVat } from '../../src/modules/structured-communication'
import { expect } from 'chai'

describe('StructuredCommunication module', () => {

  it('parse a VAT number representation', () => {
    expect(parseVat('BE0507.722.348')).to.equal(507722348)
  })

  it('an empty string should return NULL', () => {
    expect(parseVat('')).to.equal(null)
  })

  it('a blank string should return NULL', () => {
    expect(parseVat('   ')).to.equal(null)
  })

  it('truncate a VAT number that is too long (more than 10 chars)', () => {
    expect(parseVat('507722348123235')).to.equal(507722348)
  })

  it('format a VAT number into a structured communication', () => {
    expect(formatVatCommunication(507722348)).to.equal('050/7722/34801')
  })

  it('format a VAT number into a structured communication with dash separator', () => {
    expect(formatVatCommunication(507722348, '-')).to.equal('050-7722-34801')
  })

  it('return a placeholder communication when  VAT number is NULL', () => {
    expect(formatVatCommunication(null)).to.equal('___/____/_____')
  })

  it('return a partialy filled placeholder communication when VAT number is not complete', () => {
    expect(formatVatCommunication(507)).to.equal('050/7___/_____')
  })

  it('convert a VAT number representation into structured communication', () => {
    expect(convertVat('BE0507.722.348')).to.equal('050/7722/34801')
  })

  it('an empty VAT number should return a placeholder communication', () => {
    expect(convertVat('')).to.equal('___/____/_____')
  })

  it('truncate a VAT number that is too long (more than 10 chars)', () => {
    expect(convertVat('BE0507722348123235')).to.equal('050/7722/34801')
  })

})
