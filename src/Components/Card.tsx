import type { ICard } from '../Interfaces/ICard';
import { txtSlicer } from '../Logic/SpliteTxt';
import Buttom from './Buttom';
import IMage from './IMage';
import CycleColor from './UI/CircleColor';

interface CardProps {
  product: ICard;
  setProductToEdit: (product: ICard) => void;
  openEditModal: () => void;
  idx: number;
  setProductToEditIdx: (value: number) => void;



}
const Card = ( {  
  product,
  setProductToEdit,
  openEditModal,
  idx,
  setProductToEditIdx,
  
}: CardProps) => {
  const {id ,  title, description, imageURL, price ,colors ,category} = product;
    /* ------- RENDER -------  */
  

  /* ------- HANDLER -------  */
  const onEdit = () => {
    setProductToEdit(product);
    openEditModal();
    setProductToEditIdx(idx);
  };

  const onRemove = () => {
    setProductToEdit(product);
    alert(`Deleted This Item`);
  };
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 m-4 my-1.5"  key={id}>
      <img src={imageURL} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
      <h2 className="text-xl font-bold mt-4">{title}</h2>
      <p className="text-gray-700 mt-2">{txtSlicer(description)}</p>

            {/* Render Cycle Colors in big Cylcle of Product  */}
      <div className="listsColor flex space-x-1 mt-1.5">
              {colors.map(col=>
        <CycleColor color={col}  key={col}/>
      )}
      </div>


    <div className="flex items-center justify-between mb-4">
        <span className="text-lg text-indigo-600 font-semibold">${price}</span>
        <div className="flex items-center space-x-2">
          <span className="text-xs font-semibold">{category.name}</span>
           <IMage imageURL={category.imageURL} alt={category.name} className="w-10 h-10 rounded-full object-bottom" />
        </div>
      </div>

      <div className="flex items-center justify-between space-x-2">
          <Buttom className='bg-indigo-700 hover:bg-indigo-800 w-full  text-0.5xl md:text-2xl lg:text-2xl ' onClick={onEdit}>Edit</Buttom>
          <Buttom className='bg-[#c2344d] hover:bg-red-800 w-full text-0.5xl md:text-2xl lg:text-2xl' onClickCapture={onRemove}>Delete</Buttom>
      </div>

      
    </div>
  );
}

export default Card;
