import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import './index.css'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    type: 'INCOME',
    trasactionList: [],
    income: 0,
    expenses: 0,
    balance: 0,
  }

  addTransaction = event => {
    event.preventDefault()
    const {title, amount, type} = this.state

    if (type === 'INCOME') {
      this.setState(preVal => ({
        income: parseInt(preVal.income) + parseInt(amount),
      }))

      this.setState(preVal => ({
        balance: parseInt(preVal.balance) + parseInt(amount),
      }))
    }

    if (type === 'EXPENSES') {
      this.setState(preVal => ({
        expenses: parseInt(preVal.expenses) + parseInt(amount),
      }))
      this.setState(preVal => ({
        balance: parseInt(preVal.balance) - parseInt(amount),
      }))
    }

    const myObj = {
      id: uuidv4(),
      title,
      amount,
      type,
    }

    this.setState(preVal => ({
      trasactionList: [...preVal.trasactionList, myObj],
      title: '',
      amount: '',
      type: 'INCOME',
    }))
  }

  titleUpdate = event => {
    this.setState({title: event.target.value})
  }

  amountUpdate = event => {
    this.setState({amount: event.target.value})
  }

  incomeExpensesFun = event => {
    this.setState({type: event.target.value})
  }

  toRemoveItem = (id, type, amount) => {
    this.setState(preState => ({
      trasactionList: preState.trasactionList.filter(eachItem => {
        if (id === eachItem.id) {
          return null
        }
        return eachItem
      }),
    }))

    if (type === 'INCOME') {
      this.setState(preVal => ({
        income: parseInt(preVal.income) - parseInt(amount),
      }))

      this.setState(preVal => ({
        balance: parseInt(preVal.balance) - parseInt(amount),
      }))
    }

    if (type === 'EXPENSES') {
      this.setState(preVal => ({
        expenses: parseInt(preVal.expenses) - parseInt(amount),
      }))
      this.setState(preVal => ({
        balance: parseInt(preVal.balance) + parseInt(amount),
      }))
    }
  }

  render() {
    const {title, amount, trasactionList, income, balance, expenses} =
      this.state

    return (
      <div className="main-container">
        <div className="name-card">
          <h1 className="name-text">Hi, Richard</h1>
          <p className="description">
            Welcome back to your
            <span className="money-manager"> Money Manager</span>
          </p>
        </div>
        <MoneyDetails
          myIncome={income}
          myBalance={balance}
          myExpense={expenses}
        />
        <form className="form-style form-group" onSubmit={this.addTransaction}>
          <h1 className="add-transaction">Add Transaction</h1>
          <label htmlFor="textid" className="title-text">
            TITLE
          </label>
          <input
            type="text"
            id="textid"
            className="form-control form-text-style"
            placeholder="TITLE"
            onChange={this.titleUpdate}
            value={title}
          />

          <label htmlFor="textid" className="title-text">
            AMOUNT
          </label>
          <input
            type="text"
            id="textid"
            className="form-control form-text-style"
            placeholder="AMOUNT"
            onChange={this.amountUpdate}
            value={amount}
          />

          <label htmlFor="textid" className="title-text">
            TYPE
          </label>
          <br />
          <select
            id="textid"
            className="select-style"
            onChange={this.incomeExpensesFun}
          >
            {transactionTypeOptions.map(eachItem => (
              <option value={eachItem.optionId}>{eachItem.displayText}</option>
            ))}
          </select>

          <input type="submit" value="Add" className="add-button" />
        </form>
        <div className="list-card">
          <h1 className="history-text">History</h1>
          <ul className="un-order-list">
            <li className="list-item">
              <p className="list-content extra-style">Title</p>
              <p className="list-content extra-style">Amount</p>
              <p className="list-content extra-style">Type</p>
            </li>

            {trasactionList.map(eachItem => (
              <TransactionItem
                key={eachItem.id}
                myItem={eachItem}
                myFun={this.toRemoveItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default MoneyManager
