import '../../css/index.css'
import {Row} from 'react-bootstrap'
import {Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
function Cards (){
    return(

        <div>

<div className='flex_cards'>
<Container>
  <Row>
  <Col xs>
<div className='  cards'>
  <h5>ECONOMY</h5>
 <h2>$9.90</h2>
 <span>BILLING PER MONTH</span><br /><br />
 <div className='card_hr_line'></div>
 <span>Bandwidth:<b className='bil_pr_mon'>1GB</b> </span><br /><br />
 <span>Onlinespace :<b className='bil_pr_mon'> 50MB</b> </span><br /><br />
 <span>Support: <b className='bil_pr_mon'>No</b> </span><br /><br />
 <span>Domain: <b className='bil_pr_mon'>1</b> </span><br /><br />
 <span>Hidden Fees:  <b className='bil_pr_mon'>No</b> </span><br /><br />
 <Button variant="danger" className='btns_sec_5'>Join now</Button>{' '}

</div><br /><br />
</Col>
<Col xs>
<div className='cards'>
<h5>DELUXE</h5>
 <h2>$9.90</h2>
 <span>BILLING PER MONTH</span><br /><br />
 <div className='card_hr_line'></div>
 <span>Bandwidth:<b className='bil_pr_mon'>1GB</b> </span><br /><br />
 <span>Onlinespace :<b className='bil_pr_mon'> 50MB</b> </span><br /><br />
 <span>Support: <b className='bil_pr_mon'>No</b> </span><br /><br />
 <span>Domain: <b className='bil_pr_mon'>1</b> </span><br /><br />
 <span>Hidden Fees:  <b className='bil_pr_mon'>No</b> </span><br /><br />
 <Button variant="danger" className='btns_sec_5'>Join now</Button>{' '}
</div><br /><br />
</Col>
<Col xs>
<div className='cards'>
<h5>ULTIMATE</h5>
 <h2>$9.90</h2>
 <span>BILLING PER MONTH</span><br /><br />
 <div className='card_hr_line'></div>
 <span>Bandwidth:<b className='bil_pr_mon'>1GB</b> </span><br /><br />
 <span>Onlinespace :<b className='bil_pr_mon'> 50MB</b> </span><br /><br />
 <span>Support: <b className='bil_pr_mon'>No</b> </span><br /><br />
 <span>Domain: <b className='bil_pr_mon'>1</b> </span><br /><br />
 <span>Hidden Fees:  <b className='bil_pr_mon'>No</b> </span><br /><br />
 <Button variant="danger" className='btns_sec_5'>Join now</Button>{' '}
</div>
</Col>
</Row>
</Container>
</div>
        </div>
    )
}
export default Cards