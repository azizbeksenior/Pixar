import './Name2.css'

export default function Name2({theme , logo , data}) {
  return (
    <div className="Name2">
        <p>
            <b>{theme}</b> <br />
            {logo} <br />
            {data}
        </p> <br /> 
    </div>  
)
}
