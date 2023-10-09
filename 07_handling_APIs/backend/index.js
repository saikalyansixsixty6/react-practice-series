import express from "express";

const app = express()


app.get("/",(req,res)=>{
    res.send("im there")
})

app.get("/api/products",(req,res)=>{
    const products = [
    {
      id:1,
      name:"table wooden",
      price:200,
      image:"https://images.pexels.com/photos/6576786/pexels-photo-6576786.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
    {
        id:2,
        name:"table glass",
        price:300,
        image:"https://images.pexels.com/photos/6576786/pexels-photo-6576786.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
    {
        id:3,
        name:"table metal",
        price:400,
        image:"https://images.pexels.com/photos/6576786/pexels-photo-6576786.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
    {
        id:4,
      name:"table fibre",
      price:500,
      image:"https://images.pexels.com/photos/6576786/pexels-photo-6576786.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    }]

  //http://localhost:3000/api/products?search=metal

    if(req.query.search){
        const filterProducts = products.filter(product=>product.name.includes(req.query.search))
        res.send(filterProducts)
        return
    }



    setTimeout(() => {
        res.send(products)
    }, 3000);
})

const port = process.env.PORT || 3000

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})


