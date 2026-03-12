
const ItemAdd = () => {
    return(
        <div className="flex gap-2 justify-center my-8">
            <input 
            type="text" 
            placeholder="Adicione um item" 
            className="flex-3 border-2 outline-none border-gray-950 p-2 rounded-md focus:border-white"></input>
            <button className="bg-amber-800 flex-1 cursor-pointer rounded-md hover:bg-amber-900 ">Adicionar</button>
        </div>
    )
}

export default ItemAdd