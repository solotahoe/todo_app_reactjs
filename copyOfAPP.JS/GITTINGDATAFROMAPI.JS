import React, { useState, useEffect } from "react";
import "./App.css";



function App() {
    const [resourceType, setResourceType] = useState("posts");

    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then(response => response.json())
            .then((json) => {
                console.log(json);
                setItems(json)
            });

    }, [resourceType]);//in the array is the values that when ever they change your hook will run

    return (
        <>
            <div>

                <button onClick={() => setResourceType("posts")}>post</button>
                <button onClick={() => setResourceType("comments")}>comment</button>
                <button onClick={() => setResourceType("users")}>users</button>
            </div>
            {resourceType}
            {items.map((item => {
                return <pre key={item.id}>{JSON.stringify(item)}</pre>

            }))};
        </>
    );

}


export default App;



//USE OF THE USE STATE
// import React, {useState} from "react";
// import "./App.css";



// function App(){
//  const [state , setState]= useState({ count:4, theme:"blue"});  //use state always returns an array with two values //the 4 is the current value
//  const count =state.count;
//  const theme=state.theme;


//  function decrementCount(){
//     setState((prevState)=> {
//       return {...prevState,count: prevState.count -1};
//     } );
//   }                                            //fisrst value  is the current state at single iteration and the second value is the function to run

//   function increamentCount(){
//     setState((prevCount) =>{ 
//       return { ...prevCount, count: prevCount.count + 1 }
//     } );
//   }
//   return(
//     <>
//   <button onClick={decrementCount}>-</button>
//   <span>{count}</span>
//   <span>{theme}</span>
//   <button onClick={increamentCount}>+</button>
//     </>
//   );

// }


// export default App;
