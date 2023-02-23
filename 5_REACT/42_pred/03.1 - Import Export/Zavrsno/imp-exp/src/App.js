import './App.css';

import Name from './Components/Name';

import { divide, greet, age } from './Helpers/Utility';

function App() {
  return (
    <div>
      {greet()}
      <Name />
      36 divided by 2 is: {divide(36,2)}
      <br />
      Age is: {age}
    </div>
  );
}

export default App;
