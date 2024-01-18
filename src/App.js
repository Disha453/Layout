import './App.css'
import { Demo } from './test';
import { Car } from './car'
import { Layout } from './layout';

export function App() {
  const numbers = 890;
  const number = 90;

  const string = "hello"


  const handleClick = () => {
    console.log("clicked")
  }

  const handle = () => {
    console.log("clicked")
  }

  return (
    <div>
      <div>
        <h1 style={{ color: 'red', backgroundColor: "yellow" }}>REact app</h1>

        <button onClick={() => handleClick()}>Click</button>
      </div>


      <div>
        <h1 style={{ color: 'orange', backgroundColor: "black" }}>React App</h1>

        <button onClick={() => handle()}>Click</button>
      </div>








      <div>
        <p>lorem</p>
        {/* JSX  */}
        <h1>{numbers}</h1>
        <h1>{number}</h1>
        <h1>{string}</h1>
      </div>

      <Demo />
      <Car />
      <Layout />
    </div>
  );
}

// export default App;
