import React from 'react';
import Header from "./Header";
import Faucet from "./Faucet";
import Balance from "./Balance";
import Transfer from "./Transfer";

function App() {

  return (
    <div id="screen">
      <Header />

      <table>
        <tr>
          <td>
          <Faucet />
          </td>
          <td>
          <Balance />
          </td>
          <td>
          <Transfer />
          </td>
        </tr>
      </table>
      
      <br /><br /><br />
      
    </div>
  );
}

export default App;
