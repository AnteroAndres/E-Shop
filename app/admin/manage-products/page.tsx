import { Product } from '@prisma/client';
import Container from "@/app/components/Container";
import ManageProductsClient from "./ManageProductsClient";
import getProducts from "@/actions/getProducts";
import NullData from "@/app/components/NullData";
import {getCurrentUser} from "@/actions/getCurrentUser";

type Products = Product[]

const ManageProducts = async() => {
    const products = await getProducts({category: null})
    const currentUser = await getCurrentUser()

    if(!currentUser || currentUser.role !== 'ADMIN'){
        return <NullData title="Oops! Access denied"/>
    }

    return <div className="pt-8">
        <Container>
            <ManageProductsClient products={products} />
        </Container>
    </div>
};
 
export default ManageProducts;