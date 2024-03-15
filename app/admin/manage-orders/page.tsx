import Container from "@/app/components/Container";
import ManageOrdersClient from "./ManageOrdersClient";
import getProducts from "@/actions/getProducts";                                 
import NullData from "@/app/components/NullData";
import {getCurrentUser} from "@/actions/getCurrentUser";
import getOrders from "@/actions/getOrders";

const ManageOrders = async() => {
    const orders = await getOrders()
    const currentUser = await getCurrentUser()

    if(!currentUser || currentUser.role !== 'ADMIN'){
        return <NullData title="Oops! Access denied"/>
    }

    return <div className="pt-8">
        <Container>
            <ManageOrdersClient orders = {orders}/>
        </Container>
    </div>
};
 
export default ManageOrders;