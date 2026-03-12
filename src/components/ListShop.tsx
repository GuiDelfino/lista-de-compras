import { SquareCheckBig } from 'lucide-react';
import { Trash2 } from 'lucide-react';

const ListShop = () => {
    return(
        <div>
            <p className='font-special text-center text-4xl'>Itens p/ compra</p>
            <div className='p-2 rounded-md flex justify-between items-center my-4'>
                <p>carne bovina</p>
                <div className='flex items-center gap-2 cursor-pointer'>
                    <SquareCheckBig className='hover:text-gray-700'/>
                    <Trash2 className='hover:text-gray-700'/>
                </div>

            </div>
        </div>
    )
}

export default ListShop;