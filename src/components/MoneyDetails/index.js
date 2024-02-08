// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {myIncome, myBalance, myExpense} = props

  return (
    <ul className="money-details-card">
      <li className="money-details-item">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="balance-image"
        />
        <div>
          <p className="your-balance-text">Your Balance</p>
          <p className="rupees-text" data-testid="balanceAmount">
            Rs {myBalance}
          </p>
        </div>
      </li>

      <li className="money-details-item income-style">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="balance-image"
        />
        <div>
          <p className="your-balance-text">Your Income</p>
          <p className="rupees-text" data-testid="incomeAmount">
            Rs {myIncome}
          </p>
        </div>
      </li>

      <li className="money-details-item expenses-style">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="balance-image"
        />
        <div>
          <p className="your-balance-text">Your Expenses</p>
          <p className="rupees-text" data-testid="expensesAmount">
            Rs {myExpense}
          </p>
        </div>
      </li>
    </ul>
  )
}

export default MoneyDetails
