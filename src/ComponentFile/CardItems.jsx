import React, { useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsStar } from 'react-icons/bs';
import { FaStar } from 'react-icons/fa';
import { SiCookiecutter  } from 'react-icons/si';
import Rating from 'react-rating';
import { toast } from 'react-toastify';

const CardItems = ({userdata}) => {





  
  const notify = () => {toast.success("Your favorites have been selected",{position: toast.POSITION.TOP_CENTER,autoClose: 4000,progress: undefined})}
  const [disabled,setdisabled] = useState(false)
function favorite(props){
  notify()
  setdisabled(true)
  console.log(props);
}








const {recipe_id,recipe_name,ingredients,cooking_method,rating,img} = userdata

    return (
        <div className="card w-12/12 sm:w-7/12 border sm:mx-2 border-5 border-green-700 my-5 bg-base-100 shadow-xl">
          
        <figure><img className='w-8/12' src={img} /></figure>

        <div className="card-body">
          <h2 className="card-title italic text-3xl">Recipe Name: <span className='font-extrabold text-orange-800 '>{recipe_name}</span></h2>
          <p className='font-semibold text-gray-500'>Food Origin: Italy</p>

<p className=' flex align-middle text-red-700 font-bold'> Avarage Rating: {rating}<br></br> 
<Rating className='mx-2'
  placeholderRating={rating}
  emptySymbol={<BsStar className='text-xl ' style={{color:"coral"}}/> }
  placeholderSymbol={ <FaStar className='text-xl' style={{color:"coral"}} />}
  fullSymbol={<FaStar className='text-xl' style={{color:"coral"}} />}
  readonly
/></p>


 <div className='sm:flex   sm:w-12/12'>
             
             <div className='sm:w-8/12 p-3 '>
                 <h1 className='flex my-2 text-2xl p-2 font-extrabold text-green-600'>
                    
                    <SiCookiecutter  className='mt-1 me-2'/>
                    Cooking Method : </h1>
                 <p>{cooking_method}</p>
             </div>
             <div className='p-3 '>
                 <h1 className='my-2 font-extrabold bg-green-300  p-3'>  Ingredients</h1>
                 <p>{ingredients.map(p=><li>{p}</li>)}</p>
             </div>
            </div>

          <div className="card-actions justify-end ">
            <button disabled={disabled} onClick={()=>favorite(recipe_id)} className="btn hover:bg-white bg-green-200 text-black border-none shadow-lg font-serif">
        
                Favorite
                
                <AiOutlineHeart className='text-2xl mt-1 mx-2' />
                </button>
          </div>
        </div>
      </div>
    );
};

export default CardItems;