import '../../css/index.css'
import {Container} from 'react-bootstrap'
import {Row} from 'react-bootstrap'
import {Col} from 'react-bootstrap'

import {Card} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import pic1 from '../../images/team-img-1.jpg'
import pic2 from '../../images/team-img-2.jpg'
import pic3 from '../../images/team-img-3.jpg'
import pic4 from '../../images/team-img-4.jpg'
function Cards (){
    return(
<div>

<Container>
  <Row>
  <Col xs >


<Card  className='team_cards_'>
<img src={pic1}/>
  <Card.Body>
    <Card.Title>Frank Johnson</Card.Title>
    <Card.Text>
    CEO
    </Card.Text>

  </Card.Body>
</Card>

</Col>
<Col xs>


<Card  className='team_cards_'>
<img src={pic2}/>
  <Card.Body>
    <Card.Title>Wanda Arthur
</Card.Title>
    <Card.Text>
DEVELOPER
    </Card.Text>

  </Card.Body>
</Card>

</Col>

<Col xs >


<Card  className='team_cards_'>
<img src={pic3}/>
  <Card.Body>
    <Card.Title>Joshua Stemple
</Card.Title>
    <Card.Text>
    MANAGER
    </Card.Text>

  </Card.Body>
</Card>

</Col>
<Col xs>

<div >
<Card  className='team_cards_'>
<img src={pic4}/>
  <Card.Body>
    <Card.Title>Frank Johnson</Card.Title>
    <Card.Text>
    CEO
    </Card.Text>
   
  </Card.Body>
</Card>
</div>
</Col>







</Row>
</Container>
</div>










    )
}
export default Cards 