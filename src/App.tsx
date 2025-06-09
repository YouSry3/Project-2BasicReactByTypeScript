import { useState } from "react";
import Buttom from "./Components/Buttom"
import Card from "./Components/Card";
import { ProductsList } from "./Data/ProductsList";




function App() {

   const [count, SetCount] = useState(0);
  

  return (
    <>
      <Buttom  className="bg-amber-300 " onClick={()=> SetCount(count+1)}>increameen plus 1 </Buttom>
      <h1 className="text-shadow-teal-400 bg-amber-800  w-20 h-11 text-4xl m-8 flex align-middle justify-center ">{count}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
        {ProductsList.map(product => 
              <Card {...product} />
            )}
      </div>

    


    </>
  )
}

export default App
