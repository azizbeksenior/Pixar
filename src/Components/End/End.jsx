import './End.css'
import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'

export default function End() {
  return (
    <div className="End">
        <div className="End_icons">
            <FaFacebookF id='icon'/>
            <AiOutlineTwitter id='icon'/>
            <AiFillYoutube id='icon'/>
            <AiFillInstagram id='icon'/>
        </div>
        <div className="End_1">
            <a href="">PRIVACY POLICY</a> <span>|</span>
            <a href="">TERMS OF USE</a> <br />
            <a href="">YOUR US STATE PRIVACY RIGHTS</a><span>|</span>
            <a href="">CHILDREN’S ONLINE PRIVACY POLICY</a> <br />
            <a href="">INTEREST-BASED ADS  </a> <br /> <br />
            <p>© 1986-2023 DISNEY / PIXAR</p> <br />
            <a href=""><button>Do Not Sell or Share My Personal Information</button></a>
        </div>
    </div>
  )
}
