import { useCollection } from "../../hooks/useCollection"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// slider hook
import { useSlick } from "../../hooks/useSlick";

export default function Slide() {
  const {documents} = useCollection('local-recipe')
  const {settings} = useSlick()

  return (
    <div className="">
      <Slider {...settings}>
        {documents && documents.map((recipe) => (
          <div className="w-[200px] h-[200px] py-[10px] sm:px-[30px] px-[5px]" key={recipe.image}>
            <img className="w-full h-full" src={recipe.image} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  )
}