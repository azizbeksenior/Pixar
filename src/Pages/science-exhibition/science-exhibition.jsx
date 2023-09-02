import './science-exhibition.css'
import Header from '../../Components/Header/Header'
import Baner_a2 from '../../Components/Baner/Baner_a2'
import Name2 from '../../Components/Name/Name2'
import End from '../../Components/End/End'

export default function Science_exhibition() {
  return (
    <div className="Science_exhibition">
        <Header/>
        <Baner_a2
        about={'THE SCIENCE BEHIND PIXAR'}
        />
        <div className="Science_exhibition1">
            <div className="Science_exhibition11">
                <h1>The Science Behind Pixar</h1> <br />
                <p>This exhibition highlights the science, technology, engineering, and mathematics (STEM) and computer science concepts used every day at Pixar in each
                <br /> of our films. </p> <br />
                <img src="https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1469812960655-G0P6FZ18MHIMYROKQK2B/image-asset.jpeg?format=1500w" alt="" /> <br /><br />
                <p> Screen-based activities and physical interactive exhibits invite visitors to experience different roles, such as lighting designer, animator, or modeler. Videos of Pixar employees give first-hand accounts of the technological innovations that have revolutionized the field of computer animation. The exhibition includes an introductory theater, eight cluster areas, and a pipeline experience.</p> <br />
                <img src="https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1469812979151-5CBGMBDQ5ZJD1M7YVFRF/image-asset.jpeg?format=1500w" alt="" /> <br /><br />
                <img src="https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1469812940475-Y8P5EBRDX70I3LF6MSD6/image-asset.jpeg?format=1500w" alt="" />
            </div>
            <div className="Science_exhibition12">
                <br /><br /> <hr /><br /><br />
                <div className="Name2"><p>CURRENT/UPCOMING SHOWS</p></div> <br />
                <Name2
                theme={'PEROT MUSEUM OF NATURE AND SCIENCE'}
                logo={'DALLAS, TX'}
                data={'NOVEMBER 17, 2022 - SEPTEMBER 4, 2023'}
                />
                <Name2
                theme={'COSMOCAIXA'}
                logo={'BARCELONA, SPAIN'}
                data={'MAY 16, 2023 - SEPTEMBER 3, 2023'}
                />
                <br /><br /><hr /><br /><br />
                <div className="Name2"><p>PAST SHOWS</p></div> <br />
                <Name2
                theme={'EXPERIMENTARIUM'}
                logo={'COPENHAGEN, DENMARK'}
                data={'OCTOBER 13, 2022 - APRIL 10, 2023'}
                />
                <Name2
                theme={'THE MUSEUM OF SCIENCE'}
                logo={'BOSTON, MA'}
                data={'JULY 22, 2020 - SEPTEMBER 2O21'}
                />
                <Name2
                theme={'CINCINNATI MUSEM CENTER'}
                logo={'CINCINNATI, OH'}
                data={'NOVEMBER 10, 2021 - SEPTEMBER 5, 2022'}
                />
                <Name2
                theme={'SOPPORO ART MUSEUM'}
                logo={'SOPPORO, JAPAN'}
                data={'APRIL 19, 2022 - JUNE 28, 2022'}
                />
                <Name2
                theme={'HIROSHIMA MUSEUM OF ART'}
                logo={'HIROSHIMA, JAPAN'}
                data={'FEBRUARY 11, 2022 - MARCH 27, 2022'}
                />
                <Name2
                theme={'HONG KONG SCIENCE MUSEUM'}
                logo={'TSIM SHA TSUI EAST, HONG KONG'}
                data={'JULY 30, 2021 - JANUARY 12, 2022'}
                />
                <Name2
                theme={'THE MUSEUM OF SCIENCE'}
                logo={'BOSTON, MA'}
                data={'JUNE 28, 2015 - JANUARY 10, 2016'}
                />
                <Name2
                theme={'THE FRANKLIN INSTITUTE   '}
                logo={'PHILADELPHIA PA'}
                data={'MARCH 12 - SEPTEMBER 5, 2016'}
                />
                <Name2
                theme={'CALIFORNIA SCIENCE CENTER'}
                logo={'LOS ANGELES, CA'}
                data={'OCTOBER 15, 2016 – APRIL 16, 2017'}
                />
                <Name2
                theme={'SCIENCE MUSEUM OF MINNESOTA'}
                logo={'ST. PAUL, MN'}
                data={'JUNE 9 – SEPTEMBER 4, 2017'}
                />
                <Name2
                theme={'TELUS WORLD OF SCIENCE'}
                logo={'EDMONTON, ALBERTA, CANADA'}
                data={'JULY 1, 2017 - JANUARY 7, 2018'}
                />
                <Name2
                theme={'THE HENRY FORD MUSEUM'}
                logo={'DEARBORN, MI'}
                data={'OCTOBER 14, 2017 - MARCH 18, 2018'}
                />
                <Name2
                theme={'TELUS WORLD OF SCIENCE'}
                logo={'VANCOUVER, BRITISH COLUMBIA, CANADA'}
                data={'MAY 19, 2018 - JANUARY 6, 2019'}
                />
                <Name2
                theme={'MUSEUM OF SCIENCE AND INDUSTRY'}
                logo={'CHICAGO, IL'}
                data={'MAY 24, 2018 - JANUARY 6, 2019'}
                />
                <Name2
                theme={'OREGON MUSEUM OF SCIENCE AND INDUSTRY'}
                logo={'PORTLAND, OR '}
                data={'FEBRUARY 23 - SEP 2, 2019'}
                />
                <Name2
                theme={'TOKYO CITY VIEW'}
                logo={'ROPPONGI HILLS, MORI TOWER, OBSERVATION DECK TOKYO, JAPAN'}
                data={'APRIL 13 - SEPTEMBER 16, 2019'}
                />
                <Name2
                theme={'THE NIIGATA PREFECTURAL MUSEUM OF MODERN ART'}
                logo={'NIIGATA, JAPAN'}
                data={'OCTOBER 12 - NOVEMBER 24, 2019'}
                />
                <Name2
                theme={'GRAND FRONT OSAKA, NORTH BUILDING, KNOWLEDGE CAPITAL, EVENT LAB'}
                logo={'OSAKA, JAPAN'}
                data={'DECEMBER 21, 2019 – FEBRUARY 24, 2020'}
                />
                <Name2
                theme={'DENVER MUSEUM OF NATURE & SCIENCE'}
                logo={'DENVER, COLORADO'}
                data={'OCTOBER 11, 2019 – APRIL 5, 2020'}
                />
                <Name2
                theme={'FUKUOKA CITY MUSEUM'}
                logo={'FUKUOKA, JAPAN'}
                data={'JULY 1 - SEPTEMBER 27, 2020'}
                />
                <br /><br /><hr /><br /><br />
                <div className="Name2"><p>THE SCIENCE BEHIND PIXAR WAS DEVELOPED BY THE MUSEUM OF SCIENCE, BOSTON IN COLLABORATION WITH PIXAR ANIMATION STUDIOS. © DISNEY/PIXAR. ALL RIGHTS RESERVED. USED UNDER AUTHORIZATION</p></div>
            </div>
        </div> <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <End/>
    </div>
  )
}
