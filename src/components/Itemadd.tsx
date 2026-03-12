import { ShoppingCart } from 'lucide-react';

const ItemAdd = () => {
    return(
        <div className="flex gap-2 justify-center my-8">
            <input 
            type="text" 
            placeholder="Adicione um item" 
            className="flex-3 border-2 outline-none bg-amber-50 border-amber-700 p-2 rounded-md"></input>
            <div className='flex bg-amber-700 flex-1 cursor-pointer rounded-md hover:bg-amber-900 justify-center items-center gap-2'>
                <button className="font-bold text-sm cursor-pointer">Adicionar</button>
                <ShoppingCart className='cursor-pointer' />
            </div>
        </div>
    )
}

export default ItemAdd