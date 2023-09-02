import './emotions-at-play.css'
import Header from '../../Components/Header/Header'
import Baner_a2 from '../../Components/Baner/Baner_a2'
import Name2 from '../../Components/Name/Name2'
import End from '../../Components/End/End'

export default function Emotions_at_play() {
  return (
    <div className="emotions-at-play">
        <Header/>
        <Baner_a2
        about={'EMOTIONS AT PLAY WITH INSIDE OUT'} />
        <div className="emotions-at-play1">
            <div className="img">
                <img src="https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1621898778725-DK3WU39Z27ZKFD829L7G/210122_0172-Edit.jpg?format=1000w" alt="" />
                <img src="https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1621898778725-C628GP57UAU5HAZDQYY3/210124_0072.jpg?format=750w" alt="" />
                <img src="https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1621898780290-RKYNSCLCFXRD0UITW9EM/210124_0385.jpg?format=750w" alt="" />
            </div>
            <div className="emotions-at-play2">
                <div className="emotions-at-play21">
                    <h1>EMOTIONS AT PLAY WITH INSIDE OUT</h1> <br />    
                    <p>The first interactive exhibit based on Disney and Pixar’s hit animated feature Inside Out helps visitors — young and old — understand the important role emotions, memory and imagination play in our everyday lives. Developed by Children’s Museum of Pittsburgh in collaboration with Pixar Animation Studios, this exhibit focuses on the five core emotions featured in the film: Joy, Sadness, Anger, Disgust and Fear. Hands-on and digital experiences offer opportunities to explore some of the ways we express our emotions — and recognize emotions in others, too.</p>
                </div>
                <div className="emotions-at-play22">
                    <br /><br />
                    <hr />
                    <br /><br />
                    <div className="Name2"><p>CURRENT SHOW / UPCOMING</p></div> <br />
                    <Name2
                    theme={"MINNESOTA CHILDREN'S MUSUEM "}
                    logo={'ST. PAUL, MN'}
                    data={'MAY 20, 2023 - SEPTEMBER 3, 2023'}
                    />
                    <Name2
                    theme={'ATLANTA CHILDREN’S MUSUEM '}
                    logo={'ATLANTA, GA'}
                    data={'SEPTEMBER 16, 2023 - JANUARY 7, 2024'}
                    />
                    <br /><br />
                    <hr />
                    <br /><br />
                    <div className="Name2"><p>PAST SHOWS</p></div> <br />
                    <Name2
                    theme={'PLEASE TOUCH MUSUEM'}
                    logo={'PHILADELPHIA, PA'}
                    data={'JANUARY 28, 2023 - MAY 7, 2023'}
                    />
                    <Name2
                    theme={"NATIONAL CHILDREN'S MUSEUM"}
                    logo={'WASHINGTON, DC'}
                    data={'SEPTEMBER 24, 2022 - JANUARY 8, 2023'}
                    />
                    <Name2
                    theme={'DISCOVERY CUBE '}
                    logo={'LOS ANGELES, CA'}
                    data={'JUNE 4, 2022 - SEPTEMBER 11, 2022'}
                    />
                    <Name2
                    theme={'MUSEUM OF SCIENCE BOSTON'}
                    logo={'BOSTON, MA'}
                    data={'JANUARY 29, 2022 - MAY 15, 2022'}
                    />
                    <Name2
                    theme={'CHILDREN’S MUSEUM OF PITTSBURGH '}
                    logo={'PITTSBURGH, PA'}
                    data={'JUNE 12, 2021 – JANUARY 9, 2022'}
                    /> <br />
                    <div className="Name2"><p>THE EXHIBITION WAS DEVELOPED BY CHILDREN’S MUSEUM OF PITTSBURGH IN COLLABORATION WITH PIXAR ANIMATION STUDIOS. ©DISNEY/PIXAR. ALL RIGHTS RESERVED. USED UNDER AUTHORIZATION.</p></div>
                </div>
            </div>
        </div> <br /><br /><br /><br /><br /><br /><br />
        <End/>
    </div>
  )
}
