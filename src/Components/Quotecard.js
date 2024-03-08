
import './Quotecard.css';

const Quotecard = (props)=>{


return (

<>
<div className='quotecarddiv'>
<p className='descpara'>{props.description}</p>
<span className='author'>{props.author}</span>

</div>


</>


)


}

export default Quotecard;