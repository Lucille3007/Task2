
import './App.css';
import Expenses from "./components/Expenses";
import ExpenseForm from "./components/ExpenseForm";
import Clock from "./components/Clock";

function App() {

  const expense = [
    { title: 'Mazda', amount: 3000, date: new Date(2020, 2, 28) },
    { title: 'Ford', amount: 2000, date: new Date(2021, 3, 28) },
    { title: 'Nissan', amount: 1000, date: new Date(2022, 4, 28) },
    { title: 'Honda', amount: 500, date: new Date(2023, 5, 28) },
  ];
  return (
    <div>
      <div id="headLine">
        <ExpenseForm />
        <Clock />
      </div>
      
      <Expenses items={expense} />

    </div>

  );
}

export default App;
