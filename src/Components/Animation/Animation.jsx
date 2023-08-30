import './Animation.css'

export default function Animation({img , about}) {
  return (
    <div className="Animation">
        <a href=""><img src={img} alt="" /></a> <br />
        <p>{about}</p>
    </div>
  )
}
