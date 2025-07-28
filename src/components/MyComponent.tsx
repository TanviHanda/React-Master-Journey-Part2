import { useEffect, useState } from "react"
type Product = {
    id:number;
    title:string;
    description:string;
    price:number;
    discountPercentage:number;
    rating:number;
    stock:number;
    brand:string;
    category:string;
    thumbnail:string;
    images:string[];
}
const MyComponent = () => {
    const [data,setData] = useState<Product | null>(null)
    useEffect(()=>{
        const fetchData = async () => {
            try{
                const response = await fetch('https://dummyjson.com/product/1')
                const result = await response.json()
                setData(result)
            }
            catch(err){
                console.error('Error fetching ',err);
                
            }
        }

        fetchData()
    },[])
  return (
    <div>
        {data ? (
            <div>
                <p> ID: {data.id}</p>
                <p> Title: {data.title}</p>
                <p> Description: {data.description}</p>
                <p> Price: {data.price}</p>
                <p> DiscountPercentage: {data.discountPercentage}</p>
                <p> Rating: {data.rating}</p>
                <p> Stock: {data.stock}</p>
                <p> Brand: {data.brand}</p>
                <p> Category: {data.category}</p>
                <p> Thumbnail: {data.thumbnail}</p>
                {data.images.map(image => (
                    <img src={image}/>
                ))}
            </div>
        ) : (<p>Loading...</p>)}
    </div>
  )
}

export default MyComponent