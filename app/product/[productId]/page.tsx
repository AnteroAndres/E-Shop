interface IPrams {
    productId?: string
}

const Product = ({params}:{params:IPrams}) => {
    console.log("params", params)
    return ( <div>Product Page</div> );
}
 
export default Product;