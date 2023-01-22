
import { useState } from 'react';
 // 1 st way
// function component()
// {
//   const [name,setName]=useState["bharti"];
//   return(

//     <div>
//       <h1>hello {name}</h1>
//     </div>
// )
// }

const App=()=>
{
  // const name=useState("bharti");
  // const userName=name[0];
  // const setName=name[1];
  // function changeName()
  // {
  //   setName("Bharti Manshore");
  // }
  // return(
  //   <div>
  //     <h2>hye:{name[0]}</h2>
  //     <button onClick={changeName}>update name</button>
  //   </div>
  // )

   // second way 
//   const [name,setName]=useState("bharti");
//   function changeName()
//   {
//     setName("bharti Manshore")
//   }
//   return(

//     <div>
//       <h1>hye:{name}</h1>
//       <button onClick={changeName}>update</button>
//     </div>
//   )
  // }  
      // 3rd way 

      const [name,setName]=useState("Aarti");
      const [show,setShow]=useState(false)
      function changeName()
      {
        setShow(true);
      }
      return(
        <div className='app' onClick={changeName}>
          <h1> hey this is App component{name}</h1>
         {show && <h2>this is component</h2>}
        </div>
      )
      }

export default App