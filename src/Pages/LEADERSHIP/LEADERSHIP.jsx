import './LEADERSHIP.css'
import Header from '../../Components/Header/Header'
import Name from '../../Components/Name/Name'
import People from '../../Components/Peaple/People'
import End from '../../Components/End/End'

export default function LEADERSHIP() {
  return (
    <div className="LEADERSHIP">
        <Header/>
        <div className="Name_p">
          
          <h1>LEADERSHIP</h1> <br /> <hr /> <br />
          <Name Pname={'JIM MORRIS'} job={'PRESIDENT'}/>
          <Name Pname={'PETE DOCTER'} job={'CHIEF CREATIVE OFFICER'}/> <br /> <hr /> <br />
          <Name Pname={'REEMA BATNAGAR'} job={'VICE PRESIDENT, HUMAN RESOURCES'}/>
          <Name Pname={' LINDSEY COLLINS'} job={'SENIOR VICE PRESIDENT,DEVELOPMENT'}/>
          <Name Pname={'TYLER FAZAKERLY'} job={'VICE PRESIDENT, SYSTEMS'}/>
          <Name Pname={'JONATHAN GARSON'} job={'SENIOR VICE PRESIDENT, WORLDWIDE MARKETING & FRANCHISE'}/>
          <Name Pname={'MARK JOSEPH'} job={'VICE PRESIDENT,CONTROLLER & FACILITY OPERATIONS'}/>
          <Name Pname={'CHRIS KAISER'} job={'VICE PRESIDENT,FINANCE & STRATEGY'}/>
          <Name Pname={'JAMES M. KENNEDY'} job={'SENIOR VICE PRESIDENT, BUSINESS AFFAIRS AND CHIEF LEGAL COUNSEL'}/>
          <Name Pname={'STEVE MAY'} job={'VICE PRESIDENT,CHIEF TECHNOLOGY OFFICER '}/>
          <Name Pname={'OLIVER MEISEBERG'} job={'VICE PRESIDENT, RENDERMAN'}/>
          <Name Pname={'JONAS RIVERA'} job={'SENIOR VICE PRESIDENT, PRODUCTION'}/>
          <Name Pname={'DAVID RYU'} job={'VICE PRESIDENT,SOFTWARE RESEARCH & DEVELOPMENT'}/>
          <Name Pname={'KATHERINE SARAFIAN'} job={'SENIOR VICE PRESIDENT, TALENT'}/>
          <Name Pname={'DAN SCANLON'} job={'VICE PRESIDENT,CREATIVE'}/>
          <Name Pname={'JESSIE SCHROEDER'} job={'VICE PRESIDENT, POST PRODUCTION'}/>
          <Name Pname={'DOMEE SHI'} job={'VICE PRESIDENT,CREATIVE'}/>
          <Name Pname={'PETER SOHN'} job={'VICE PRESIDENT,CREATIVE'}/>
          <Name Pname={'ANDREW STANTON'} job={'VICE PRESIDENT,CREATIVE'}/>
          <Name Pname={'JODY WEINBERG'} job={'VICE PRESIDENT,BUSINESS AFFAIRS & LEGAL COUNSEL'}/>
          <br /> <br />  <br /> <hr /> <br /> <br /> <br /> <br />
        </div> 
        <People/>
        <End/>
    </div>
)
}
