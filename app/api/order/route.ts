import { getCurrentUser } from '@/actions/getCurrentUser';
import  prisma  from '@/libs/prismadb';
import { NextApiResponse } from 'next';

export async function PUT(request: Request, res: NextApiResponse){
    const currentUser = await getCurrentUser();

    if(!currentUser) {
        res.status(401).json({ error: 'Not authorized' });
        return;
    }

    if(currentUser.role !== 'ADMIN'){
        res.status(403).json({ error: 'Forbidden' });
        return;
    }
    const body = await request.json();
    const { id, deliveryStatus} = body;

    const order = await prisma.order.update({
        where: {id: id},
        data: {deliveryStatus},
    });

    res.status(200).json(order);
}