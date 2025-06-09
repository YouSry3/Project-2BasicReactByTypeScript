import type { ICard } from '../Interfaces/ICard';
import Buttom from './Buttom';

const Card = (props: ICard) => {
  const { id, title, description, urlImage, price, rating } = props;
  return (
    <div className="bg-white shadow-md rounded-lg p-6 m-4 my-1.5" key={id}>
      <img src={urlImage} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
      <h2 className="text-xl font-bold mt-4">{title}</h2>
      <p className="text-gray-700 mt-2">{description}</p>
      <div className="flex justify-between items-center mt-4">
        <span className="text-lg font-semibold">${price.toFixed(2)}</span>
        <span className="text-yellow-500">{'★'.repeat(Math.round(rating))}</span>
      </div>
      <div className="btns flex justify-between mt-4 space-x-2">
          <Buttom className='bg-green-500 w-full  text-0.5xl md:text-2xl lg:text-4xl ' onClick={()=> alert(`Udate This Item`)}>Edit</Buttom>
          <Buttom className='bg-red-500 w-full text-0.5xl md:text-2xl lg:text-4xl' onClickCapture={()=> alert(`Deleted This Item`)}>Delete</Buttom>
      </div>
      
    </div>
  );
}

export default Card;
