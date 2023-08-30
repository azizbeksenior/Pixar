import './Home.css'
import Header from '../../Components/Header/Header'
import Baner from '../../Components/Baner/Baner'
import Card_home1 from '../../Components/Card_home1/Card_home1'
import End from '../../Components/End/End'

export default function Home() {
  return (
    <div className="Home">
        <Header/>
        <Baner
        img={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/46f34534-920f-4e0c-92d0-ba049086c623/ele_logo2.png?format=1500w'}
        />
        <Card_home1/>
        <End/>
    </div>
)
}
