import { useCollection } from "../../hooks/useCollection"
import Slide from "./Slider"
import { motion } from "framer-motion"
import {zoomOut} from '../../animation/MotionVariants'
import { Link } from 'react-router-dom'
// import { ThreeDotsWave } from '../../animation/preloader/ThreeDotsWave'
import ThreeDotsWave from "../../animation/preloader/ThreeDotsWave"


export default function Home() {
  const {documents} = useCollection('local-recipe')
  return (
    <main className="w-full flex flex-col justify-center sm:px-[60px] px-[30px] mt-[100px]">
      {!documents && 
      <div className="flex justify-center items-center">
        <ThreeDotsWave/>
      </div> }
      {documents && <Slide/>}
      <div className="my-[30px] text-center bg-[#ff642b] text-white px-[10px] py-[20px] rounded-[16px]">
        <h1 className="sm:text-[40px] text-[35px] font-semibold mb-[20px]">Tasty Nigerian meals</h1>
        <p className="text-[20px]">With up-to-date recipe!</p>
        <p className="text-[20px]">Make a choice and hit the kitchen</p>
      </div>
      <div className="flex flex-row flex-wrap mx-auto  justify-center sm:w-full w-[200px]">
        {!documents && 
        <div className="flex justify-center items-center mt-[50%]">
          <ThreeDotsWave/>
        </div> }
        {documents && documents.map((recipe) => (
          <Link to={`/recipe/${recipe.id}`} key={recipe.id} 
            className="mx-[30px] shadow rounded cursor-pointer mt-[20px] min-w-[300px]" 
          >
            <div className="w-[300px] h-[300px] overflow-hidden">
              <motion.img 
                variants={zoomOut}
                initial={'initial'}
                whileHover ={'animate'}
                className="w-full h-full"
                src={recipe.image} 
                alt={recipe.Title} 
              />
            </div>
            <div className="p-4 mt-[10px]">
              <p className="text-[18px] font-semibold ">{recipe.Title}</p>
              <div className="my-[15px] flex flex-row justify-between border-t border-b border-black py-[10px] ">
                <span className="">{recipe.ingredients.length} {recipe.ingredients.length > 1 ? 'Ingredients' : 'Ingredient'}</span>
                <span className="">{recipe.method.length} {recipe.method.length > 1 ? ' Cooking steps' : 'Cooking step'}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}