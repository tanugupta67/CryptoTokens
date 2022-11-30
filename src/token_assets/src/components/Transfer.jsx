import React,{useState} from 'react';
import {Principal} from '@dfinity/principal';
import {token} from "../../../declarations/token";
function Transfer() {
  const [rId,setId]=useState("");
  const[aId,setAmount]=useState("");
  const[isDisabled,setDisabled]=useState(false);
  const[feedBack,setFeedback]=useState("");
  const[isHidden,setHidden]=useState(true);
  async function handleClick() {
    setHidden(true);
    setDisabled(true);
    const rec=Principal.fromText(rId);
const amt=Number(aId);
    const result=await token.transfer(rec,amt);
    setFeedback(result);
    setHidden(false);
    setDisabled(false);
  }

  return (
    <div class="tar">
      {/* <div className="transfer"> */}
        <h2><label >Transfer CryptoCred</label></h2>
        <br /><br />
        <fieldset>
          <legend>To Account:</legend>
          <ul>
            <li>
              <input
                type="text"
                id="transfer-to-id"
                value={rId}
                onChange={(e)=>setId(e.target.value)}
              />
            </li>
          </ul>
        </fieldset><br /><br />
        <fieldset>
          <legend>Amount:</legend>
          <ul>
            <li>
              <input
                type="number"
                id="amount"
                value={aId}
                onChange={(e)=>setAmount(e.target.value)}
              />
            </li>
          </ul>
        </fieldset>
        <p className="trade-buttons">
          <button id="btn-transfer" onClick={handleClick} disabled={isDisabled} >
            Transfer
          </button>
        </p>
        <p hidden={isHidden}>{feedBack}</p>
      </div>
    // </div>
  );
}

export default Transfer;
