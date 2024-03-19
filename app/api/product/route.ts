import { getCurrentUser } from '@/actions/getCurrentUser';
import  prisma  from '@/libs/prismadb';
import { NextApiResponse } from 'next';

export async function POST(request: Request, res: NextApiResponse){
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
    const { name, description, price, brand, category, inStock, images } = body;

    const product = await prisma.product.create({
        data: {
            name,
            description,
            brand,
            category,
            inStock,
            images,
            price: parseFloat(price)
            
        }
    });
    res.status(200).json(product);
}

export async function PUT(request: Request, res: NextApiResponse){
    const currentUser = await getCurrentUser();

    if(!currentUser || currentUser.role !== 'ADMIN'){
        res.status(403).json({ error: 'Forbidden' });
        return;
    }
    const body = await request.json();
    const { id, inStock} = body;

    const product = await prisma.product.update({
        where: {id: id},
        data: {inStock},
    });

    res.status(200).json(product);
}