import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Deluluu",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "BMW", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Mercedes benz",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "More delululuuu",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const addExpenseHandler = (expense) => {};

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
