import '../../css/sec8.css'
import {Button} from 'react-bootstrap'

function Contact(){
    return(
        <div className="disply_flex_contact">
<div className='tiltle'>
    <h5>
    Office Address 1:
    </h5>
    <span>4461 Cedar Street Moro, AR 72368</span><br /><br />
    <h5>Office Address 2:</h5><br />
    <span>2467 Swick Hill Street<br />
New Orleans, LA 70171</span><br /><br /><br />
<h5>
Working Hours:
    </h5>
    <span>9:00AM To 6:00PM</span><br /><br />
</div>


<div className='inputs'>
    <input type="email" placeholder='Email' className='input'/>
    <input type="password" placeholder='Password' className='input'/><br />
    <input placeholder='Subject' className='input_2'/><br />
    <textarea ></textarea>
    <Button variant="danger" className='btn_inCont'>Get Start</Button>{' '}

</div>













        </div>
    )
}
export default Contact