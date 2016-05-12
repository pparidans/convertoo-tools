import React from 'react'
import { convertVat } from '../modules/structured-communication'

const App = React.createClass({
  getInitialState() {
    return {
      enterpriseNumber: ''
    }
  },
  render() {
    const { enterpriseNumber } = this.state
    const comStructured = convertVat(enterpriseNumber)
    return (
      <div className="container">
        <div className="row">
          <form>
            <fieldset class="form-group">
              <label htmlFor="enterprise-number">Numéro d'entreprise</label>
              <input type="text" id="enterprise-number" value={enterpriseNumber} onChange={this.setEnterpriseNumber} placeholder="BE00.0000.0000" className="form-control" maxLength="14" />
            </fieldset>
          </form>
        </div>
        <div className="row">
          <p className="alert alert-info">+++ {comStructured} +++</p>
        </div>
      </div>
    )
  },
  setEnterpriseNumber(ev) {
    const { target: { value = '' } } = ev
    this.setState({ enterpriseNumber: value })
  }
})

export default App
