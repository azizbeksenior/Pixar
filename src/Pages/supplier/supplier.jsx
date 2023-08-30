import './supplier.css'
import Header from '../../Components/Header/Header'
import Baner_a2 from '../../Components/Baner/Baner_a2'
import End from '../../Components/End/End'

export default function Supplier() {
  return (
    <div className="Supplier">
        <Header/>
        <Baner_a2
        about={' PIXAR SUPPLIER DIVERSITY'}/> <br /><br /><br /> <br /><br /> <br />
        <div className="Supplier1">
            <p>We believe that diverse perspectives lead to richer stories and partnerships, as well as a more innovative, successful, and dynamic workplace. We are committed to Inclusion & Representation both on-screen and off. And, Supplier diversity is a vital component of our strategy. Help us build these invaluable partnerships!</p> <br /> <br />
            <a href="">Contact us</a> <br /> <br />
            <p>Are you a diverse supplier interested in learning more?</p> <br /> <br />
            <a href="">About </a> <br /> <br />
            <a href="">What is a diverse-owned enterprise? </a> <br /> <br />
            <a href="">What certifications does Pixar accept? </a> <br /><br /> <hr /> <br /><br /><br />
            <h2 style={{color:'gray'}}>About</h2> <br /><br />
            <p>A diverse supplier is defined as an organization that is at least 51% owned, operated and controlled by a person of a diverse background. The categories of classification include: </p> <br /><br />
            <ul>
                <li>Disadvantaged Business Enterprise (DBE) </li>
                <li>Disabled Owned Business Enterprise (DOBE) </li>
                <li>Historically black colleges and universities (HBCU) </li>
                <li>Minority-owned business enterprises (MBE) </li>
                <li>African-American, Hispanic, Asian-Indian, Asian-Pacific or Native American descent </li>
                <li>Service-disabled veteran-owned businesses (SDVOB) </li>
                <li>Veteran-owned businesses (VOB) </li>
                <li>Woman-owned business enterprises (WBE) </li>
            </ul> <br /><br />
            <p>At Pixar, we strive to work with as many diverse suppliers as possible and are always seeking to enlarge our partnership pool.</p> <br /><br /> <hr /> <br /><br />
            <h2 style={{color:'gray'}}>What is a diverse-owned enterprise? </h2> <br /><br />
            <p>For purposes of the Program, the following definitions apply:</p> <br /><br />
            <ul>
                <p>1."Minority Business" </p> <br />
                <li id='li'>means (1) a sole proprietorship at least 51% owned by Minority Group Members, Veteran, Disabled Veteran, or women; (2) a publicly-owned business in which at least 51% of the stock is owned by Minority Group Members or women; (3) a subsidiary which is wholly owned by a parent corporation, but only if at least 51% of the voting stock of the parent corporation is owned by Minority Group Members or women; (4) a joint venture in which at least 51% of the joint venture's management and control and earnings are held by Minority Group Members or women; or (5) Minority Group Members or women who manage and control daily operations of the business.</li>  <br />
                <p>2."Management" </p> <br />
                <li  id='li'>means those persons actively involved in the day-to-day management of the business and not merely holding the designation of officers or directors.</li> <br />
                <p>3."Control"</p> <br />
                <li  id='li'>means exercising the power to make policy decisions.</li> <br />
                <p>4."Minority Group Members" </p> <br />
                <li  id='li'>mean citizens of the United States of America who are male or female African Americans, Hispanic Americans, Native Americans (American Indians, Eskimos, Aleuts, or Native Hawaiians), Asian Pacific Americans, and Subcontinent Asian Americans.</li> <br />
                <p>5."Asian Pacific Americans" </p> <br />
                <li  id='li'>means persons with origins in Burma, Thailand, Malaysia, Indonesia, Singapore, Brunei, Japan, China, Taiwan, Laos, Cambodia, Vietnam, Korea, The Philippines, U.S. Territory of the Pacific Islands (Republic of Palau), Republic of the Marshall Islands, Federated State of Micronesia, the Commonwealth of the North Mariana Islands, Guam, Samoa, Macao, Fiji, Tonga, Kiribati, Tuvalu, or Nauru.</li> <br />
                <p>6."Subcontinent Asian Americans" </p> <br />
                <li  id='li'>mean persons with origins in India, Pakistan, Bangladesh, Sri Lanka, Bhutan, the Maldives Islands, or Nepal.</li> <br />
                <p>7.“Veteran-Owned Business” </p> <br />
                <li  id='li'>means a small business that is at least 51% owned, operated and controlled by one or more veterans and certified by the Department of Veterans Affairs <a href="">http://www.VA.gov</a> under Federal Regulation 38 CFR 74.</li>  <br />
                <p>8.“Service-Disabled Veteran-Owned Business</p> <br />
                <li  id='li'>means a small business that is at least 51% owned, operated and controlled by one or more veterans with a service-connected disability and certified by the Department of Veterans Affairs <a href="">http://www.VA.gov</a> under Federal Regulation 38 CFR 74.</li> <br />
                <p>9.“Disabled-Owned Business”</p> <br />
                <li  id='li'>means a small business that meets for following criteria:</li> <br />
                <ul>
                    <li  id='li'>Be at least 51% owned, operated, managed, and controlled by individuals with a disability who are either United States citizens or lawful permanent residents;</li>
                    <li  id='li'>Exercise independence from any other business enterprise;</li>
                    <li  id='li'>Have its principal place of business (headquarters) in the United States; and</li>
                    <li  id='li'>Have been formed as a legal entity in the United States.</li>
                </ul> <br />
                <li  id='li'>The above definition is based on the Americans with Disability Act of 1990.</li> <br />
                <p>10."Subcontract" </p> <br />
                <li  id='li'>includes the provision of any or all products and services (relative to providing) contracted for in the execution of the Agreement between Bidder and Disney.</li> <br />
            </ul> <br /><br /> <hr /> <br /><br />
            <h2 style={{color:'gray'}}>What certifications does Pixar accept? </h2> <br />
            <ul>
                <li>For purposes of the Program, we look for suppliers who have been certified by either <a href="">NMSDC</a>, <a href="">WBENC</a>, <a href="">Department of Veterans Affairs</a>, <a href="">NGLCC</a>, or <a href="">DisabilityIN</a> as minority, woman, veteran, service-disabled veteran, LGBTQ, or disabled owned enterprises.</li>
            </ul>
            <br /><br /><br /><br /><br /><br />
        </div>
        <End/>
    </div>
  )
}
