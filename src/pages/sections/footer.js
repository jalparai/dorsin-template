import { color } from '@mui/system'
import '../../css/index.css'
import '../../css/footer.css'
import FooterLogo from '../../images/payment.png'
function Footer(){
    return(
        <div>

<div className='footer'>
<div className='footer_text' >
  <h4>DORSIN</h4><br />
  <p>Home</p>
  <p>About Us</p>
  <p>Careers</p>
  <p>Contact Us</p>
</div>

<div className='footer_text'>
  <h4>INFORMATION</h4><br />
  <p>Team anf Condition</p>
  <p>About Us</p>
  <p>Jobs</p>
  <p>Book Mark</p>
</div>


<div  className='footer_text'>
  <h4>Support</h4><br />
  <p>FAQ</p>
  <p>Contacts</p>
  <p>Disscussion</p>
  
</div>

<div  className='footer_text'>
  <h4>DORSIN</h4><br />
  <p>Home</p>
  <p>About Us</p>
  <p>Careers</p>
  <p>Contact Us</p>
</div>

<div  className='footer_text'>
  <h4>Subscribe</h4><br />
  <p  className='subs'>In an ideal world this text wouldn’t exist, a client would acknowledge the importance of having web copy before the design starts.</p>
 <input placeholder='Email' className='input_footer'/>
</div>




</div>

<div className='last_footer'>
    <div>
<span className='text_'>2022 © Jalpa-Rai  Dorsin - Themesbrand 
</span>
</div>
<div>
    <img  src={FooterLogo} width='150px' height='30px'/>
</div>
</div>
        </div>
    )
}
export default Footer