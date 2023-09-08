import './Card_home.css'
import { Link } from 'react-router-dom'

export default function Card_home({img , about , link}) {
  return (
    <div className="Card_home">
        <Link to={link}><img src={img} alt="" /></Link>
        <p>{about}</p>
    </div>
  )
}
