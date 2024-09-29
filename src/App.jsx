import './App.css';
import Board from './Components/Board/Board';

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <h1 className="text-white text-4xl mb-6 text-center bold">Tic-Tac-Toe</h1>
      <Board />
    </div>
  );
}

export default App;
