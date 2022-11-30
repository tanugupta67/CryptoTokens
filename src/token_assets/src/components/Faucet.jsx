import React,{useState} from 'react';
import {token} from "../../../declarations/token";
function Faucet() {
const [isDisabled,setDisabled]=useState(false);
const [buttontext,setText]=useState("Gimme gimme");
  async function handleClick(event) {
    setDisabled(true);
const result=await token.payOut();
setDisabled(false);
setText(result);
  };

  return (
//     <div class="card" style="width: 18rem;">
//   <img class="card-img-top" src="..." alt="Card image cap"></img>
//   <div class="card-body">
//     <h2 class="card-title">Faucet</h2>
//     <p class="card-text">Get your free CRYPTOCRED tokens here! Claim 10,000 CRYPTOCRED coins to your account.</p>
//     <p className="trade-buttons">
//         <button id="btn-payout" onClick={handleClick} disabled={isDisabled}>
//           {buttontext}
//         </button>
//       </p>
//   </div>
// </div>
<div id="fcs">
<div class="fauce">
      <h2>
        Faucet
        
      </h2>
     
      <br /><br />
      <p>Get your free CRYPTOCRED tokens here! Claim 10,000 CRYPTOCRED coins to your account.</p><br /><br /><br />
      <p className="trade-buttons">
        <button id="btn-payout" onClick={handleClick} disabled={isDisabled}>
          {buttontext}
        </button>
      </p>
    </div>
</div>

   );
}

export default Faucet;
