import Container from "@/app/components/Container";
import FormWrap from "@/app/components/FormWrap";
import AddProductForm from "./AddProductForm";
import { getCurrentUser } from "@/actions/getCurrentUser";
import NullData from "@/app/components/NullData";

const AddProducts = async() => {
    const currenUser = await getCurrentUser();

    if(!currenUser || currenUser.role !== 'ADMIN'){
        return <NullData title="Oops! Access denied"/>
    }

    return ( <div className="p-8">
    <Container>
        <FormWrap>
            <AddProductForm/>
        </FormWrap>
    </Container>
</div> );
}
 
export default AddProducts;