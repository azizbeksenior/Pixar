import './inclusion.css'
import Header from '../../Components/Header/Header'
import Baner_a from '../../Components/Baner/Baner_a'
import About_p1 from '../../Components/About_P/About_p1'
import PP from '../../Components/PP/PP'
import Baner_a2 from '../../Components/Baner/Baner_a2'
import About_a from '../../Components/About_a/About_a'
import About_a1 from '../../Components/About_a/About_a1'
import PP1 from '../../Components/PP/PP1'
import End from '../../Components/End/End'

export default function Inclusion() {
  return (
    <div className="inclusion">
        <Header/>
        <Baner_a/>
        <div className="inclusion1">
        <hr /> <br /> <br />
        <a href="https://www.youtube.com/watch?feature=youtu.be&v=DBO40PxbIzs" target='_blank'><img src="https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1618943343829-NQTOQEOK4ZGLF420E8UK/inclusion.jpg?format=1500w" alt="" /></a> <br /> <br /> <br /> <hr /> <br /> <br />
        <About_p1
        img={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1597100974173-B7OSVV4YBCPQLDMJAMP9/morris.jpg?format=1500w'}
        theme={`“Pixar's stories rise out of the life experiences of the people who work on our films and we always want those films to speak deeply to our audience.`}
        about={"For us, it is essential that our own team represents the whole of that audience - so we commit to creating a Pixar that includes everyone, makes movies for everyone, and hopefully allows everyone who goes to see a Pixar movie to see a bit of themselves on the screen.”"}
        Pname={'JIM MORRIS'}
        job={'PRESIDENT'}
        /> <br />
        <hr /> <br />
        <About_p1
        img={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1597100990786-JMKPHKVP39KX488BE1HD/docter.jpg?format=1500w'}
        theme={'“At Pixar we ask our directors to make movies about themselves. '}
        about={'Rather than trying to second guess what the audience wants to see, our films are born out of the life experiences and reflections of our filmmakers.  I believe that’s the strongest way to get authenticity. If the story is truthful and emotional to the people who make it, it’ll be more likely to touch audiences as well.  So for our films to really speak to everyone out there, we need our filmmakers to reflect the full diversity of the world.'}
        Pname={'PETE DOCTER'}
        job={'CHIEF CREATIVE OFFICER'}
        /> <br /> <br /> <br /> <hr /> <br /> <br />
        <PP 
        img={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1596560746215-5ELAHV2VBJ27EB773GBL/north_stars-6.jpg?format=1500w'}
        theme={'Our North Star - A thriving inclusive work environment that:'}
        li={'Produces exceptional content that is representative of our audience'}
        li1={'Provides access and opportunity to talented individuals '}
        li2={'Respects & values the presence and participation of difference'}
        li3={'Extends our inclusive practices into the community'}
        /> 
        </div> <br /> <br />
        <Baner_a2 
        about={'DIVERSE STORIES AND STORYTELLERS'}
        />
        <div className="inclusion2">
          <About_a
          theme={'Talent Outreach'}
          about={'We are committed to building a more diverse workforce and inclusive workplace through university outreach, conferences, community events and organizational partnerships.'}
          img1={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1596481513818-R4PNXPD63MD16SBEADRN/t3.jpg?format=500w'}
          img2={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1596814540790-LPBQU5CN5SA317DKTHH5/Screen-Shot-2020-08-06-at-3.28.55-PM.jpg?format=500w'}
          img3={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1596814526478-DL077BBE0L84R2HBNBCK/PixarInterns%26CampusPhotos4.jpg?format=500w'}
          img4={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1596481514341-EWHNQMSAWFMY0SWO2OE7/t4.jpg?format=500w'}
          />
          <About_p1
          theme={'“Over a decade ago my summer as a Pixar Undergraduate Program intern opened my eyes to the inspiring work happening in the space between technology and art.'}
          about={'Now, having the opportunity to teach in this program is one of my favorite things I get to do.” '}
          img={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1597101019503-39J49T1KS5KPKUITJF11/louh.jpg?format=1500w'}
          Pname={'GILLIAN LIBBERT '}
          job={'STORY DEPARTMENT HEAD'}
          /> <br /><br />
          <hr />
          <br /><br />
          <About_a1
          theme={'SparkShorts'}
          about={'The SparkShorts program is designed to discover new storytellers, explore new storytelling techniques, and experiment with new production workflows. These films are unlike anything we’ve ever done at Pixar, providing an opportunity to unlock the potential of individual artists and their inventive filmmaking approaches on a smaller scale than our normal fare.'}
          img={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1596034048204-3YGY4YH8D48IDUJ4KVV8/spark2.jpg?format=1500w'}
          /> <br /><br />
          <About_p1
          img={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1597101047382-IOSCJT4V852LYVE11386/milsom.jpg?format=1500w'}
          theme={"I love that the SparkShorts program is looking for stories that are personal from directors who haven't traditionally gotten to control the narrative."}
          about={`In making Loop, I wanted to create the kind of characters I've known in the world, but who I haven't seen in animation -  and reconsider who gets to be the hero, which stories matter, and what kinds of stories should be explored." `}
          Pname={'ERICA MILSOM'}
          job={'DIRECTOR OF ‘LOOP’'}
          /> <br /><br />
          <hr />
          <br></br>
          <div className="box">
          <About_a
          theme={'Co-Op Program'}
          about={'The Pixar Cooperative Film Program gives employees the opportunity to produce personal film projects at Pixar. The basic premise: if you have a film project you are passionate about and are prepared to work on the project during your unpaid, free time, then Pixar wants to offer resources to help make it happen. Our goal is to give filmmakers at Pixar the opportunity to expand and grow their creative skills while experiencing what it takes to mount a production. '}
          img1={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1594912254835-6ODN30KYK2X4I8RBAOL7/BorrowedTime.jpeg?format=500w'}
          img2={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1594912264373-FC09FVDX5KFT2ABEJLRV/SoMuchYellow.jpeg?format=500w'}
          img3={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1594912276011-Q1WTR87DVOTJGYC3F5W4/Twinsburg.jpeg?format=500w'}
          img4={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1594912288620-KZP107PAQOV2RRAW62SH/Weekends.jpeg?format=500w'}
          />
          </div>
          <About_p1
          img={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1597101223928-RRQR07KY1IPGJYLWMKY1/jimez.jpg?format=1500w'}
          theme={`“It's so unique to have the co-op program and all of its benefits available to anyone at Pixar.  `}
          about={` I was able to explore my own personal voice outside of the studio while also getting this support...it's a very special combination and a great way for diverse voices at Pixar to get their perspectives out in the world.”  `}
          Pname={'TREVOR JIMENEZ'}
          job={'DIRECTOR OF ‘WEEKENDS’'}
          /> <br /> <hr />
          <div className="box box1">
          <About_a
          theme={'Culture Trusts'}
          about={'We believe that details are the building blocks of authenticity.  To ensure that our films get the details correct and our representations are culturally competent, we will often convene a group of employees to assist in those efforts. '}
          img1={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1589829470923-RZW75A3UVVUDBLDJQOE1/soul.jpg?format=500w'}
          img2={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1589829137891-JIEVKOML0FKFSQ03SUY2/payoff.jpg?format=500w'}
          img3={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1589829257615-N9F6NVK9QQDQ63069QI4/coco.jpg?format=500w'}
          img4={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1596117989504-X57Z7MIPEB3VV9AAH69Q/BAO_Poster_basket_RGB.jpg?format=500w' }/>
          </div> 
          <About_p1
          img={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1597101245121-6MPURIO3R56R75V1WWNW/5.jpg?format=1500w'}
          theme={`“As an artist it's incredibly important to me that our films represent the experiences of a diverse universe of people, accurately and with truth.  `}
          about={`Our culture trusts provide us with personal insights and ideas that point us toward authenticity in the movies we make.”`}
          Pname={'APHTON CORBIN'}
          job={'STORY ARTIST'}
          />
          </div> <br /><br /> <br /><br />  
          <div className="Baner_in">
            <Baner_a2
            about={'A CULTURE OF BELONGING'}
            />
          </div>
          <div className="inclusion3">
            <About_a
            theme={'Inclusion Learning Opportunities'}
            about={'Ensuring we have a diverse team of storytellers is critically important, but not enough. We also need to ensure we provide access, opportunity and a sense of belonging to everyone. As part of that effort, we provide opportunities for all to expand their understanding of others’ identities through a series of workshops, outside speakers, and film screenings. Our annual Inclusion Summit and other learning experiences engage employees from  all parts of Pixar in the work of addressing unconscious biases and other barriers to full inclusion for all. '}
            img1={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1597336422372-VL1GOW1WWNARGXGXSB28/IMG_7933.jpg?format=500w'}
            img2={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1596481892205-E2LXKY5EFUEP4YOQ7TZN/l3.jpg?format=750w'}
            img3={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1596481892840-B10897IS59ENHDQPLTI2/l4.jpg?format=500w'}
            img4={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1597336442081-2JC9KQUJMHDZB5V0S7UM/11504_BD_0158.jpg?format=500w'}
            />
            <About_p1
            img={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1597101440528-EQSI6R05Z7PSU8B4RP4K/libbert.jpg?format=1500w'}
            theme={'“We all have unique qualities and honoring and welcoming our differences is what creates a sense of acceptance and belonging.”'}
            Pname={'GILLIAN LIBBERT '}
            job={'STORY DEPARTMENT HEAD'}
            /> <hr/> <br /><br />
            <div className="a1">
            <PP
            img={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1596560611484-ZQJYTYK1SRO2P4QGOAIF/engaging2a.jpg?format=1500w'}
            theme={'Studio Resource Groups & Pixar Allies'}
            li={'Our Studio Resource Groups are integral to our ability to build and sustain a culture of inclusion in our workplace and in our films. These employee led groups welcome all who are curious and committed to positively impacting the representation and experiences of our increasingly diverse community.'}
            />
            </div> <br /> <hr /> <br /> <br />
            <div className="box">
              <img src="https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1597767204696-6ZKS3W87OA8049THLEMX/logos3a.jpg?format=1500w" alt="" />
              <div className="boxX"></div>
            </div> <br /> <hr /> <br /> <br />
            <About_p1
            img={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1597101460170-OK55ADM4JZSARVUYU9OK/chang.jpg?format=1500w'}
            theme={`“Learning about my culture and heritage is something that's evolved over time -`}
            about={`while earlier on it felt like something that set me apart from others, I've grown to appreciate how it connects me on a larger scale with a community across the country and world.”`}
            Pname={'EDWIN CHANG'}
            job={'WRITER AND DIRECTOR OF ‘WIND’'}
            /> <br /><br /><hr /><br /><br />
            <About_a1
            theme={'Allyship also plays a critical role in our journey to full inclusion and belonging for all.  We encourage every Pixar employee to join this effort, either formally as part of one of our many ally groups, or informally on their own. '}
            about={'An ally is a person with some privilege who acts to support the inclusion and equality of others who have been marginalized and/or underrepresented.'}
            img={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1593447639973-J9QNAUP5SUBLVSHNXL67/ally_head2.jpg?format=1500w'}
            /> <br /> <br />
            <About_p1
            img={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1597101477851-2TTR3CQ38TSDO4R3JYZ2/tony.jpg?format=1500w'}
            theme={`“It’s the mix that gives the stew its flavor – and that’s what I like.”`}
            Pname={'TONY KAPLAN'}
            job={'CREATIVE CONTENT DIRECTOR'}
            />
          </div> <br /><br /> <br /><br />
          <div className="Baner_a2_1">
          <Baner_a2
          about={'OUTREACH'}
          />
          </div> <br /> <br /> <br />
          <div className="inclusion4">
            <PP1
            li1={'We believe we cannot promote an inclusive culture within Pixar, without being an inclusive participant in our local community. We invest in organizations focused on giving diverse groups of people visibility and resources. '}
            li2={'Pixar’s charitable mission supports local organizations and schools in Emeryville and Oakland that directly focus on those under-represented in the fields of Science, Technology, Engineering, Arts, Mathematics (STEAM).'}
            li3={'Employees are encouraged to play active roles in their community. Through individual volunteering on their personal time, during work sponsored initiatives or as part of one of our eight affinity Studio Resource Groups. '}
            li4={'We believe in extending our arms into the community through Signature Partnerships with local STEAM organizations.'}
            img={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1588175793921-SMD8RR9NVGUBXTJANGKC/14.jpg?format=750w'}
            img1={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1596826762339-K2OFY9SU4MDJS440EVNM/Pic-8.jpg?format=500w'}
            img2={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1596826715991-WIH8L4HJG39BHEIBWHXH/Screen-Shot-2020-08-07-at-11.02.48-AM.jpg?format=500w'}
            img3={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1596639660326-YCN186X9LD1GNV6FQB6J/New+pic.jpg?format=500w'}
            />
            <About_p1
            theme={'“Pixar is an outstanding partner of the Oakland Public Education Fund’s Adopt an Oakland School program.'}
            about={` Pixar Employees invest in student outcomes by sharing real-world career experiences and mentoring around relevant job-skills to support students' ambitions.  They are an invaluable resource for our students.” `}
            Pname={'ALEXANDRIA MEDINA '}
            job={`INTERIM EXECUTIVE DIRECTOR
            THE OAKLAND PUBLIC EDUCATION FUND`}
            /> <br /><br /> <hr /> <br /><br />
            <div className="p1p">
            <p>We believe engaging our employees in volunteerism is critical  throughout the year such as during our Pixar Day of Service. A studio wide, annual day for volunteering that was launched in 2019.</p>
            </div> <br /><br /> <hr /> <br /><br />
            <About_p1
            theme={'“Volunteering is the most rewarding part of the work I’ve done while being at Pixar.'}
            about={' To see first-hand what our films can mean to people who are struggling, brings a new sense of purpose to the work we do as artists here at Pixar.” '}
            Pname={'GRAHAM FINLEY'}
            job={'ANIMATOR'}
            /> <br /><hr /> <br /><br />
            <div className="p1p">
              <p>We strive to make the deepest impact by promoting corporate citizenship within.</p>
            </div> <br /><br /> <hr /> <br /><br />
            <div className="comp">
              <h1>2019 Impact</h1>
              <img src="https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1598292714927-W44JL3K7F8YGYC5J4UOY/community-2.jpg?format=1500w" alt="" />
              <ul>
                <li>Nearly 8,000 volunteer hours logged by Pixar employees.</li>
                <li>Over $630,000 provided to nonprofit organizations through employee Disney VoluntEARs Grants and Matching Gifts.</li>
                <li>Nearly $4.5 million provided to community partners through studio events and donations. </li>
              </ul>
            </div>
          </div> <br /><br /><br /><br />
          <div className="Baner_a2_2">
          <Baner_a2
          about={'BE A PART OF IT'}
          />
          </div> <br /><br /><br /><br />
          <div className="inclusion5">
            <div className="aa">
              <img src="https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1596133474716-U3SUDCZBIPLD2ZC7ASUU/comemakefilms-2.jpg?format=1500w" alt="" /> <br />
              <h1>Join us and be a part of the story</h1>
            </div> <br /><br /> <hr /> <br /><br />
            <button>WORK AT PIXAR</button>
            <br /><br /> <br /> <hr /><br /><br />
            <About_p1
            img={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1597101501891-RTZ44IM8QYGS4H9AJCJO/beal.jpg?format=1500w'}
            theme={'“Creativity is best when it comes from diverse minds.  '}
            about={'So when I walk the halls of Pixar, I see space. Space for everyone. Space that needs to be filled by you. Come create with us!”'}
            job={'DIRECTOR, STUDIO INITIATIVES'}
            Pname={'ANDY BEALL'}
            />
          </div> <br /><br /> <br /><br />
          <End/>
    </div>
  )
}