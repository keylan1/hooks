import { useReducer } from 'react';
import './App.css';

const reducer = (state, action) => {
  if (action.type === 'buy_ingredients') return { money: state.money - 10 };
  if (action.type === 'sell_a_meal') return { money: state.money + 10 };
  if (action.type === 'special_event') return { money: state.money + 1000 };
  return state;
};

function App() {
  const initialState = { money: 100 };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <h1>Wallet: {state.money}</h1>
      <div>
        <button onClick={() => dispatch({ type: 'buy_ingredients' })}>
          Shopping for ingredients
        </button>
        <button onClick={() => dispatch({ type: 'sell_a_meal' })}>
          Served meal to customer
        </button>
        <button onClick={() => dispatch({ type: 'special_event' })}>
          Special event
        </button>
      </div>
    </div>
  );
}

export default App;
