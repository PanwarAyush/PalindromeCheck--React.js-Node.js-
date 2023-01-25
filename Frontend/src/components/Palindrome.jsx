import  Axios  from "axios";
import { useState } from "react";
const Palindrome=()=>{
const  [val,setVal]=useState('')
const  [isPalin,setisPalin]=useState('Not a palindrome')
 function isPalindrome(){
  let r={word:val};
 Axios.post("https://palindrome-check-react-js-node-js.vercel.app/checkPalindrome",r)
 .then(function (response){
  if(response.data.isPalindrome==='YES')
  setisPalin('Yes '+val+' is a palindrome');
  else
  setisPalin(val+' is not a palindrome');
 }).catch(function (response){
   console.log(response)
 }) 
}
 return (
  <div> 
    <h2>
    Enter Some text to check if it is palindrome or not: 
    </h2>
    <input  type='text' value={val} onChange={(e)=>{setVal(e.target.value)}} style={{fontSize:'25px',marginLeft:'20px'}}>
    </input>
    <button onClick={isPalindrome} style={{fontSize:'25px'}}>Check</button>
    <h3 style={{marginLeft:'20px',font:'bold'}}>{isPalin}</h3>
  </div>
 );
}
export default Palindrome;