import { getCurrentUser } from "@/actions/getCurrentUser";
import  prisma  from '@/libs/prismadb';
import { NextApiResponse } from 'next';

export async function DELETE(
    request: Request,
    res: NextApiResponse,
    {params} : {params: {id: string}}
){
    const currentUser = await getCurrentUser();

    if(!currentUser) {
        res.status(401).json({ error: 'Not authorized' });
        return;
    }

    if(currentUser.role !== 'ADMIN'){
        res.status(403).json({ error: 'Forbidden' });
        return;
    }
    const product = await prisma?.product.delete({
        where: {id: params.id},
    });
    res.status(200).json(product);
}