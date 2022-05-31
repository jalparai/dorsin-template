import '../../css/sec8.css'
import {Container} from 'react-bootstrap'
import {Row} from 'react-bootstrap'
import {Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Img_1 from '../../images/user-2.jpg'
import Img_2 from '../../images/user-1.jpg'
import Img_3 from '../../images/user-3.jpg'
function Section8_cards(){
    return(
        <div className='main_card_sec'>
<Container>
  <Row>
  <Col xs>
  <div id='Card_1'>
         
          <div className="cards_1">
<img src={Img_1} className='users_img'/>
<div>
    <span>
    “I feel confident imposing change on myself. It's a lot more fun progressing than looking back. That's why I need to throw curve balls.”
    </span>
</div>

</div>
<h5 className='foot_name'>RUBEN REED - <span> Charleston</span></h5>

      </div>
    


</Col><br /><br /><br />
<Col xs>
<div id='Card_1'>
         
          <div className="cards_1">
<img src={Img_2} className='users_img'/>
<div>
    <span>
    “Our task must be to free ourselves by widening our circle of compassion to embrace all living creatures and the whole of nature and its beauty.”
    </span>
</div>
</div>
<h5 className='foot_name'>MICHAEL P. HOWLETT - <span>  Worcester</span></h5>

      </div>
</Col><br /><br /><br />
<Col xs>
<div id='Card_1'>
         
          <div className="cards_1">
<img src={Img_3} className='users_img'/>
<div>
    <span>
    “I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”
    </span>
</div>
</div>
<h5 className='foot_name'>THERESA D. SINCLAIR - <span>  Lynchburg</span></h5>

 
</div>
</Col>
</Row>
</Container>
     
        </div>
    )
}
export default Section8_cards