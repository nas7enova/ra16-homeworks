import Stars from './components/Stars';

function App() {
  return (
    <div className="App">
      <Stars count={1} />
      <Stars count={3} />
      <Stars count={5} />
      <Stars count={0} />
      <Stars count={6} />
    </div>
  );
}

export default App;
