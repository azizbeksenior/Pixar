import './Baner.css'

export default function Baner({img , link}) {
  return (
    <div className="Baner">
    <a href={link}><img src={img} alt="" /></a>    
    </div>
)
}
