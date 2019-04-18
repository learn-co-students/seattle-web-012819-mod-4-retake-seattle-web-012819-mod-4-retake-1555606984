import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'

const API = "https://boiling-brook-94902.herokuapp.com/transactions"

class AccountContainer extends Component {

  constructor() {
    super();
    this.state = {
      transactions: [],
      searchTerm: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(data => {
      this.setState({transactions: data})
    })
  }


  handleChange(ev) {
    this.setState({searchTerm: ev.target.value})
  }

  render() {

    return (
      <div>
        <Search searchTerm={this.state.searchTerm} handleChange={this.handleChange}/>
        <TransactionsList searchTerm={this.state.searchTerm} transactions={this.state.transactions}/>
      </div>
    )
  }
}

export default AccountContainer
