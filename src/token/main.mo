import Principal "mo:base/Principal";//unique user
import HashMap "mo:base/HashMap";//rl3ia-xqaaa-aaaao-aamuq-cai//CYCLE FAUCET
import Debug "mo:base/Debug";
import Iter "mo:base/Iter";
actor token{
let owner:Principal=Principal.fromText("t56r3-iaphk-vquz4-ozq3k-deemj-jnfap-rczyw-q62na-lvauf-sp3kv-lqe");
let totalSupply:Nat =1000000000;
let symbol:Text="CRYPTOCRED";
stable var balanceEnteries:[(Principal,Nat)]=[];
 var balances=HashMap.HashMap<Principal,Nat>(1,Principal.equal,Principal.hash);//hashmap is unstable

public query func balanceOf(who:Principal):async Nat{
  let balance:Nat=switch(balances.get(who)){
    case null 0;
    case (?result) result;
  };
return balance;
};
public query func getSymbol():async Text{
return symbol;
};
public shared(msg) func payOut():async Text{
  //shared allowsus to store from which id it has been callled.
  Debug.print(debug_show(msg.caller));
  if(balances.get(msg.caller)==null){
let amount=10000;
  let result=await transfer(msg.caller,amount);
  return result;
  }
  else{
    return "Already Claimed"; 
  }
  
};
public shared(msg)func transfer(to:Principal,amount:Nat):async Text{
let fromBalance= await balanceOf(msg.caller);
if(fromBalance > amount){

let newfromBalance : Nat =fromBalance-amount;
balances.put(msg.caller,newfromBalance);
let toBalance=await balanceOf(to);
let newtoBalance = toBalance+amount;
balances.put(to,newtoBalance);
return "Success";
}else{
return "Insufficient Funds";
}

};
system func preupgrade(){
balanceEnteries:=Iter.toArray(balances.entries());
};
system func postupgrade(){
balances :=HashMap.fromIter<Principal,Nat>(balanceEnteries.vals(),1,Principal.equal,Principal.hash);
if(balances.size() < 1){
  balances.put(owner,totalSupply);
}

};
};
