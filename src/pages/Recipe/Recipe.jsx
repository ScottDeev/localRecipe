import {useParams} from 'react-router-dom'
import { useDocument } from '../../hooks/useDocument'
import RecipeComments from './RecipeComments'
import ThreeDotsWave from "../../animation/preloader/ThreeDotsWave"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'


export default function Recipe() {
  const { id } = useParams()
  const { error, document} = useDocument('local-recipe', id)
  if(error){
    return <div className="mt-[100px]">{error}</div>
  }
  if(!document){
    return  <div className="flex justify-center items-center mt-[100px]">
      <ThreeDotsWave/>
    </div> 
  }
  return(
    <div className='flex flex-col gap-[20px] lg:mx-[60px] mx-[20px] mt-[100px]'>
      <div>
        <h1 className='text-[50px] text-center'>{document.Title}</h1>
      </div>
      <div className=' sm:h-[450px] lg:w-[50%] md:w-[70%] w-[100%] mx-auto overflow-hidden rounded-[8px]'>
        <img className='w-full h-full' src={document.coverImage} alt="" />
      </div>
      <div className='flex flex-row items-center justify-center gap-[5px] border-t border-b border-black py-[8px]'>
        <FontAwesomeIcon icon={faClock} />
        <p className='uppercase font-medium text-center'>PREP TIME: {document.cookingTime}</p>
      </div>
      <div className='flex lg:flex-row flex-col gap-[40px] justify-between'>
        <div className='my-[30px] bg-black text-white px-[20px] py-[20px] lg:w-[25%] w-full h-full shadow-lg rounded-[12px]'>
          <h2 className='lg:text-[30px] text-[25px] uppercase'>Ingredients</h2>
          <ul className='flex flex-col gap-[20px] mt-[30px]'>
            {document.ingredients.map((ing, i) => (
              <li className='lg:text-[18px] text-[16px]' key={i}>{ing}</li>
            ))}
          </ul>
        </div>
        <div className='my-[30px] bg-[#f9f9f9] px-[20px] py-[20px] lg:w-[75%] w-full shadow-lg rounded-[12px]'>
          <h2 className='lg:text-[30px] text-[25px] uppercase'>Cooking steps</h2>
          <ul className='flex flex-col gap-[20px] mt-[30px]'>
            {document.method.map((met, i) => (
              <li key={i}>
                <h5 className='text-[2opx] uppercase mb-[10px] font-medium'>Step {i+1}</h5>
                <p className='lg:text-[18px] text-[16px]' >{met}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <RecipeComments recipe={document}/>
    </div>
  )
}