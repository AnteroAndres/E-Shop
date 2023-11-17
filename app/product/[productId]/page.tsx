import Container from "@/app/components/Container";
import { product } from "@/utils/product";
import ProductDetails from "./ProductDetails";
import ListRating from "./ListRating";

interface IPrams {
    productId?: string
}

const Product = ({params}:{params:IPrams}) => {
    console.log("params", params)
    
    return <div className="p-8">
    <Container>
            <ProductDetails product={product}/>
            <div className="flex flex-col mt-20 gap-4">
                <div>Add Rating</div>
                <ListRating product={product}/>
            </div>
    </Container>
    </div>
}
 
export default Product;