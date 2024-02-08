// Write your code here
import './index.css'

const TransactionItem = props => {
  const {myItem, myFun} = props
  const {title, amount, type, id} = myItem

  const toDeleteItem = () => {
    myFun(id, type, amount)
  }
  return (
    <li className="list-item">
      <p className="list-content">{title}</p>
      <p className="list-content">{`Rs ${amount}`}</p>
      <p className="list-content">{type}</p>

      <button
        type="button"
        className="delete-button"
        onClick={toDeleteItem}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          className="delete-image"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
