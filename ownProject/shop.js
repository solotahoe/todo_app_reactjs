import React,  {useState, useEffect} from 'react';
import '../App.css';
import {Link} from 'react-router-dom';




function Shop() {

    useEffect(()=>{
        fetchdata();

    },[]);

    const [newArray, setItems] = useState([]);
    const fetchdata = async () => {
        let data = await fetch("https://jsonplaceholder.typicode.com/photos");
        let result = await data.json();
        // console.log(result);
        let slicedArray = result.slice(0, 20);
        //console.log(slicedArray);
        const newArray = slicedArray.map(item => {
            let id = item.id;
            let title = item.title;
            let image = item.url;

            return { image, id, title };

        });

        console.log(newArray);
        setItems(newArray);

    };


    return (
        <div>
            <h1>This is the shop</h1>
    {newArray.map(items=>(
        <Link to={`/shop/${items.id}`}>
        <img key ={items.id} src={items.image} alt="" height="150px" width="150px"/>
        </Link>
    ))}
           
        </div>



    );
}
export default Shop;