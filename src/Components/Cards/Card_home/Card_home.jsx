import './Card_home.css'

export default function Card_home({img , about , link}) {
  return (
    <div className="Card_home">
        <a href={link}><img src={img} alt="" /></a>
        <p>{about}</p>
    </div>
  )
}
