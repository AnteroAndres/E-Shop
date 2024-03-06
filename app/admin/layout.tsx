import AdminNav from "../components/admin/AdminNav";

export const metadata = {
    title: " E-Shop Admin",
    description: "E-shop admin Dashboard"
}

const AdminLayout = ({ children }: {children:React.ReactNode}) => {
    return ( 
        <div>
            <AdminNav/>
            {children}
        </div>
     );
}
 
export default AdminLayout;