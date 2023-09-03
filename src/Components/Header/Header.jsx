import './Header.css'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className="Header">
        <h1><Link to={'/'} style={{color:'black' , letterSpacing:5}}>Pixar</Link></h1>
        <nav>
        <ul>
            <li><Link to={'/feature'}>FEATURE FILMS</Link></li>
            <li><Link to={''}>SHORT FILMS</Link>
            <ul>
                <li><Link to={'/shorts'} id='li_a'>THEATRICAL SHORTS</Link></li>
                <li><Link to={'/disneyplus'} id='li_a'>DISNEY+</Link></li>
                <li><Link to={'/sparkshorts'} id='li_a'>SPARKSHORTS</Link></li>
                <li><Link to={'/cars_toons'} id='li_a'>CARS TOONS</Link></li>
                <li><Link to={'/toy-story-toons'} id='li_a'>TOY STORY TOONS</Link></li>
                <li><Link to={'/home-entertainment'} id='li_a'>HOME ENTERTAINMENT</Link></li>
            </ul>
            </li>
            <li><Link to={''}>TECHNOLOGY</Link>
            <ul>
                <li><Link to={'/renderman'} id='li_a'>RENDERMAN</Link></li>
                <li><Link to={'/USD'} id='li_a'>USD</Link></li>
                <li><a href='https://graphics.pixar.com/' target='_blank' id='li_a'>RESEARCH AND OPEN SOURCE</a></li>
            </ul></li>
            <li><Link to={''}>CAREERS</Link>
            <ul>
                <li><Link to={''} id='li_a'>CAREERS AT PIXAR</Link></li>
                <li><Link to={''} id='li_a'>INTERNSHIPS</Link></li>
                <li><Link to={''} id='li_a'>LIFE AT PIXAR</Link></li>
                <li><Link to={'/eventsevents'} id='li_a'>EVENTS</Link></li>
            </ul></li>
            <li><Link to={''}>EXTRAS</Link>
            <ul>
                <li><Link to={'/pixar-building-characters'} id='li_a'>ART EXHIBITION</Link></li>
                <li><Link to={'/emotions-at-play'} id='li_a'>EMOTIONS AT PLAY</Link></li>
                <li><Link to={'/science-exhibition'} id='li_a'>THE SCIENCE BEHIND PIXAR</Link></li>
                <li><Link to={'/pixar-in-a-box'} id='li_a'>PIXAR IN Link BOX</Link></li>
            </ul></li>
            <li><Link to={''}>ABOUT</Link>
            <ul>
                <li><Link to={'/LEADERSHIP'} id='li_a'>LEADERSHIP</Link></li>
                <li><Link to={'/inclusion'} id='li_a'>INCLUSION & OUTREACH</Link></li>
                <li><Link to={'/supplier'} id='li_a'>SUPPLIER DIVERSITY</Link></li>
                <li><Link to={'/upcoming'} id='li_a'>COMING SOON</Link></li>
                <li><Link to={'/story'} id='li_a'>OUR STORY</Link></li>
                <li><Link to={'/company_faqs'} id='li_a'>COMPANY FAQ'S</Link></li>
            </ul></li>
        </ul>
        </nav>
    </div>
)
}
