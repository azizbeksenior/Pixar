import './End.css'
import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'

export default function End() {
  return (
    <div className="End">
        <div className="End_icons">
            <a href="https://www.facebook.com/Pixar/" target='_blank'><FaFacebookF id='icon'/></a>
            <a href="https://twitter.com/pixar" target='_blank'><AiOutlineTwitter id='icon'/></a>
            <a href="https://www.youtube.com/pixar" target='_blank'><AiFillYoutube id='icon'/></a>
            <a href="https://www.instagram.com/pixar" target='_blank'><AiFillInstagram id='icon'/></a>
        </div>
        <div className="End_1">
            <a href="https://privacy.thewaltdisneycompany.com/en/" target='_blank'>PRIVACY POLICY</a> <span>|</span>
            <a href="https://disneytermsofuse.com/" target='_blank'>TERMS OF USE</a> <br />
            <a href="https://privacy.thewaltdisneycompany.com/en/current-privacy-policy/your-us-state-privacy-rights/" target='_blank'>YOUR US STATE PRIVACY RIGHTS</a><span>|</span>
            <a href="https://privacy.thewaltdisneycompany.com/en/for-parents/childrens-online-privacy-policy/" target='_blank'>CHILDREN’S ONLINE PRIVACY POLICY</a> <br />
            <a href="http://preferences-mgr.truste.com/?affiliateId=115&type=disneycolor" target='_blank'>INTEREST-BASED ADS  </a> <br /> <br />
            <p>© 1986-2023 DISNEY / PIXAR</p> <br /> <br /><br />
            <a href="" id='a1'>Do Not Sell or Share My Personal Information</a>
        </div>
    </div>
  )
}
