import React from 'react'
import Transaction from '../components/Transaction'

const TransactionsList = (props) => {

  let filtered = props.transactions.filter((transaction) => (transaction.description.toLowerCase().includes(props.searchTerm.toLowerCase()) || transaction.category.toLowerCase().includes(props.searchTerm.toLowerCase())))
  //filter transactions here

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">
              Posted At
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Description
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Category
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Amount
            </h3>
          </th>
        </tr>

        {filtered.map((transaction) => {
          return <Transaction transaction={transaction}/>
        })}


      </tbody>
    </table>
  )
}

export default TransactionsList
