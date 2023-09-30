import './ExpenseItem.css'


function ExpenseItem(){
    return (
        <div className='expense-item'>
            <div>March 17th 2025</div>
            <div className='expense-item__description'>
                <div>Car Insurance</div>
                <div className='expense-item__price'>$567</div>
            </div>
        </div>
    )
}

export default ExpenseItem;