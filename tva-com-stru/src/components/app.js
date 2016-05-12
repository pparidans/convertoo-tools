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
        <div className="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
          <div className="row">
            <form>
              <fieldset class="form-group">
                <label htmlFor="enterprise-number" className="control-label">Numéro d'entreprise</label>
                <input type="text" id="enterprise-number" value={enterpriseNumber} onChange={this.setEnterpriseNumber} placeholder="BE0000.000.000" className="form-control input-lg text-center" maxLength="14" />
              </fieldset>
            </form>
          </div>
          <div className="row result">
            <p className="alert alert-info text-center">+++ {comStructured} +++</p>
          </div>
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
