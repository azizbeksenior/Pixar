import './Card_home1.css'
import Card_home from '../Cards/Card_home/Card_home'

export default function Card_home1() {
  return (
    <div className="Card_home1">
        <Card_home img={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1489515186655-LQ8Q6L0MFGETKRSTD0UW/image-asset.jpeg?format=1500w'} about={'CAREERS AT PIXAR'} link={'/careers-at-pixar'}/>
        <Card_home img={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/14d587cf-008b-403e-aa2d-78a0d91c98cf/Home_Lower-elio.jpg?format=1500w'} about={'ELIO'} link={'https://www.youtube.com/watch?v=2w_K3CB8PuE'} />
        <Card_home img={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/9c25e4d4-ad11-421d-ab84-afda6157e3a5/wl_lower.jpg?format=1500w'} about={'WIN OR LOSE'} link={''}/>
    </div>
)
}
