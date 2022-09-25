import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <footer className="bg-black p-[40px] flex lg:flex-row flex-col gap-[10%] mt-[50px] items-center">
      <div className="lg:w-[40%] lg:mb-0 mb-[30px]">
        <h1 className="font-logo text-[30px] text-white">9JA RECIPE</h1>
      </div>
      <div className="lg:w-[50%] text-end">
        <p className="text-white">Created by <a href="">Scott</a></p>
        <div className='flex flex-row gap-[22px] justify-end mt-[20px]'>
          <a href="">
            <FontAwesomeIcon icon={faTwitter} inverse />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faFacebook} inverse />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faInstagram} inverse />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faLinkedin} inverse/>
          </a>
        </div>
      </div>
    </footer>
  )
}