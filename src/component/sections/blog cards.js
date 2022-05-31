import '../../css/index.css'
import {Container} from 'react-bootstrap'
import {Row} from 'react-bootstrap'
import {Col} from 'react-bootstrap'

import {Card} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import pic1 from '../../images/blog-img-1.jpg'
import pic2 from '../../images/blog-img-2.jpg'
import pic3 from '../../images/blog-img-3.jpg'
function BlogCards (){
    return(
      <div>
<div className='blog_container'>

<Container>
  <Row>
  <Col xs >


<Card  className='blog_cards_'>
<img src={pic1}/>
  <Card.Body>
      <span>UI & UX Design</span>
    <Card.Title className='title_hover'>Doing a cross country road trip</Card.Title>
    <Card.Text>
   <span>She packed her seven versalia, put her initial into the belt and made herself on the way..</span>
    </Card.Text>
<span className='read_me'>Read Me</span>
  </Card.Body>
</Card>

</Col>
<Col xs >


<Card className='blog_cards_'>
<img src={pic2}/>
  <Card.Body>
      <span>Digital Marketing</span>
    <Card.Title className='title_hover'>New exhibition at our Museum</Card.Title><br />
    <Card.Text>
   <span>Pityful a rethoric question ran over her cheek, then she continued her way.</span>
    </Card.Text>
<span className='read_me'>Read Me</span>

  </Card.Body>
</Card>

</Col>

<Col xs>


<Card  className='blog_cards_'>
<img src={pic3}/>
  <Card.Body>
  <span>Travelling</span>
    <Card.Title className='title_hover'> Why are so many people..</Card.Title>
    <Card.Text>
   <span>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</span>
    </Card.Text>
<span className='read_me'>Read Me</span>

  </Card.Body>
</Card>

</Col>








</Row>
</Container>
</div>
</div>









    )
}
export default BlogCards 