import  Axios  from "axios";
import { useState } from "react";
import { ProgressBar } from "react-loader-spinner";
const Palindrome=()=>{
const  [val,setVal]=useState('')
const  [isLoading,setisLoading]=useState(false)
const  [isPalin,setisPalin]=useState('Not a palindrome')
 function isPalindrome(){
  let r={word:val};
  setisLoading(true);
 Axios.post("https://palindrome-check-react-js-node-js.vercel.app/checkPalindrome",r)
 .then(function (response){
  setisLoading(false)
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
    {
  !isLoading&&<h3 style={{marginLeft:'20px',font:'bold'}}>{isPalin}</h3>  
   }
   <div>
   {isLoading&&<ProgressBar
  height="100"
  width="300"
  ariaLabel="progress-bar-loading"
  wrapperStyle={{marginLeft:'20px'}}
  wrapperClass="progress-bar-wrapper"
  borderColor = '#F4442E'
  barColor = '#51E5FF'
/>}   
</div>
  </div>
 );
}
export default Palindrome;