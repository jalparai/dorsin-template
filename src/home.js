import Header from './components/header'
import './css/index.css'
import {BsPlayCircle} from 'react-icons/bs'
import Curve2 from './images/bg-pattern-light.png'
import Curve from './images/bg-pattern.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import  {Navbar,NavDropdown,Container,Nav} from 'react-bootstrap'
import {Row} from 'react-bootstrap'
import {Col} from 'react-bootstrap'
import Logo from './images/diamond.png'
import Logo2 from './images/bandwidth.png'
import Logo3 from './images/piggy-bank.png'
import Logo4 from './images/atom.png'
import Logo5 from './images/folder.png'
import Logo6 from './images/diamond.png'
import Online_world from './images/online-world.svg'
import {Button} from 'react-bootstrap'
import {Card} from 'react-bootstrap'
import Cards from './component/sections/cards'
import ArroW from  './images/next.png'
import WorkLogo from './images/pen.png'
import WorkLogo2 from './images/video-call.png'
import WorkLogo3 from './images/circular-target.png'
import Section8_cards from './component/sections/section8-cards'
import Img_1 from './images/user-2.jpg'
import BlogCards from './component/sections/blog cards'
import Contact from './component/sections/contact'
import Footer from './component/sections/footer'
import Icon1 from './images/facebook (2).png'
import Icon2 from './images/google-plus.png'
import Icon3 from './images/linkedin.png'
import Icon4 from './images/twitter.png'
function Home() {
  return (
 <div>

<div className='header'>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">DORSIN</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav" className='collaps'>
    <Nav className="me-auto">
      <div className='flex_header'>
<div>
      <a href="#home" className='links'>Home</a>
      </div><br />
      <div>
      <a href="#services" className='links'>Services</a>
      </div><br />
      <div>
      <a href="#features" className='links'>Feature</a>
      </div><br />
      <div>
      <a href="#Pricing" className='links'>Pricing</a>
      </div><br />
      
   
    <div>
      <a href="#team" className='links'>Team</a></div><br />
      <div>
      <a href="#Blog" className='links'>Blog</a>
      </div><br />
      <div>
      <a href="#contact" className='links'>Contact</a>
      </div>
      </div>
    </Nav><br /><br />
    <Button variant="danger">Try it Free</Button>{' '}

  </Navbar.Collapse>
  </Container>
</Navbar>
</div>




{/* sec1 */}
  <div className='section_1' id='home'>
<div className=' back_img_sec1' >
  <div className='overlay'>
  <div className='section_1_text'>
<h1 className='text_1'>
We help startups launch their products</h1><br />
<span className='text_2'>Etiam sed.Interdum consequat proin vestibulum class at.</span><br /><br />
<div><BsPlayCircle size={50}  color={"#e63a3af"}/></div>

</div>

  </div>

</div>
<div className='lear_effect'>
<img src={Curve2} className='cruve_line' height='100'/>
</div>

  </div>

{/* section_2 */ }
<div className="sec_2" id="services">
<h2  className='sec_2_text'>OUR SERVICES</h2>
<div className='horiz_lin'></div>
<p className='sec_para'>We craft digital, graphic and dimensional thinking, to create category leading brand experiences that have meaning and add a value for our clients.</p><br />
<div className='grid_sec'>

<Container>
  <Row>
    <Col xs><div className='grid_flex_1'><br />
    <img src={Logo} width="50px" className='logo_png'/>
    <h5>Digital Design</h5>
    <p>Some quick example text to build on the card title and make up the bulk of the card's content. Moltin gives you the platform.</p>
</div></Col>

    <Col xs><div className='grid_flex_1'><br />
    <img src={Logo2} width="50px" className='logo_png'/>
    <h5>Unlimited Colors</h5>
    <p>Credibly brand standards compliant users without extensible services. Anibh euismod tincidunt ut laoreet.</p>
</div></Col>
    <Col xs><div className='grid_flex_1'><br />
    <img src={Logo3} width="50px" className='logo_png'/>
    <h5>Strategy Solutions</h5>
    <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean necessary regelialia.</p>
</div></Col>
  
    <Col xs><div className='grid_flex_1'><br />
    <img src={Logo4} width="50px" className='logo_png'/>
    <h5>Awesome Support</h5>
    <p>It is a paradisematic country, in which roasted parts of sentences fly into your mouth leave for the far World.</p>
</div></Col>

    <Col xs><div className='grid_flex_1'><br />
    <img src={Logo5} width="50px" className='logo_png'/>
    <h5>Truly Multipurpose</h5>
    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
</div></Col>
    <Col xs><div className='grid_flex_1'><br />
    <img src={Logo6} width="50px" className='logo_png'/>
    <h5>Easy to customize</h5>
    <p>Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia.</p>
</div></Col>
  </Row>
</Container>
</div>
</div>

{/* section_3 */}
<div className="sec_3" id='features'>
<div className='flex_sec3'>
<div className='fea_text'>
    <h4>A digital web design studio creating modern & engaging online experiences</h4><br /><br />
  <span>
  Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.
  </span>

  <ul><br /><br />
    <li>We put a lot of effort in design.</li><br />
    <li>The most important ingredient of successful website.</li><br />
    <li>Sed ut perspiciatis unde omnis iste natus error sit.</li><br />
<li>Submit Your Orgnization.</li><br />

  </ul>
  <Button variant="primary" className='btns_sec'>Learn more</Button>{' '}
</div>

<div>

    <img src={Online_world}  className='sec_3_pic_set'/>
</div>


</div>
</div>
{/* grid 4 section */}
<div className='sec_4' id='Pricing'>
<div className='sec_4_img'>
<div className='overlay_2'>
<div className='section_1_text'>
<h2 className='text_1'>

Build your dream website today</h2><br />
<div className='sec_4_text'>
<h6 className='text_2'>But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her.</h6><br /><br />
</div>
<Button variant="light">View Plan and Price</Button>{' '}
</div>
</div>
<div className='lear_effect'>
<img src={Curve} className='cruve_line' />
</div>
</div>
</div>

{/* section_5 */}
<div className='sec_5' id='team'>

  
 <div className='sec_5_text'>
   <h3>OUR PRICING</h3>
   
 </div>
 <div className='horiz_lin'></div>
 <p className='sec_5_para'>Call to action pricing table is really crucial to your for your business website. Make your bids stand-out with amazing options.</p>
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

{/* sec 6 */}
<div className='sec_6' >
<div className='sec_5_text'>
   <h3>BEHIND THE PEOPLE</h3>
   
 </div>
 <div className='horiz_lin'></div>
 <p className='sec_5_para'>It is a long established fact that create category leading brand experiences a reader will be distracted by the readable content of a page when looking at its layout.</p>
<br /><br /><br /><br />
{/*  */}
<div className='cards_margin_setup'>
<Cards />
</div>
</div>
<div className='sec_7'>
<div className='sec_5_text'>
   <h3>WORK PROCESS</h3>
   
 </div>


 <div className='horiz_lin'></div>
 <p className='sec_5_para'>In an ideal world this website wouldn’t exist, a client would acknowledge the importance of having web copy before the design starts.</p>
 <div className='sec_7_flex'>
 <Container>
  <Row>
  <Col xs className='worksec_setup'>
<div >
  <img src={WorkLogo}  className='work_sec_logo'/>
<h5>Tell us what you need</h5>
<span>
The Big Oxmox advised her not to do so.</span>
</div>
</Col>



<Col xs className='worksec_setup'>
<div >
<img src={WorkLogo2}  className='work_sec_logo'/>
{/* <div className='work_hr_arro'></div> */}
<h5>Tell us what you need</h5>
<span>
The Big Oxmox advised her not to do so.</span>
</div>
</Col>
<Col xs className='worksec_setup2'>
<div >
{/* <div className='work_hr_arro'></div> */}
<img src={WorkLogo3}  className='work_sec_logo ' id='logo_2'/>

<h5>Tell us what you need</h5>
<span>
The Big Oxmox advised her not to do so.</span>
</div>
</Col>
</Row>
</Container>

</div>
<div className='work_btn'>
<Button variant="danger" className='work_btn_setup'>Get Start</Button>{' '}
</div>


</div>
{/* what they said */}
<div className='sec_8' >
<div className='sec_5_text'>
   <h3>WHAT THEY'VE SAID</h3>
   
 </div>
 <div className='horiz_lin'></div>
 <p className='sec_5_para'>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli.</p>
 <div className='sec_8_cards'>
<Section8_cards />

</div>
</div>
<div className='sec_9'>
<div className='sec_9_img'>
<div className='overlay_2'>
<div className='section_1_text'>
<h2 className='text_1'>
<div className='horiz_lin' id='hr_in9'></div>
Let's Get Started</h2>

<div className='sec_4_text'>
<h6 className='text_2' id='text_in9'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</h6><br /><br />
</div>
<Button variant="light" id='btn_in9'>Get Start</Button>{' '}
</div>
</div>
<div className='lear_effect' >
<img src={Curve} className='cruves'/>
</div>
</div>
</div>

{/* sec 10 */}

<div className='sec_10' id='Blog'>
<div className='sec_5_text'>
   <h3>BLOG</h3>
   
 </div>
 <div className='horiz_lin'></div>
 <p className='sec_5_para'>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean class at a euismod mus luctus quam.</p>
<BlogCards />


<div className='sec_11' id='contact'>
<div className='sec_5_text'>
   <h3>GET IN TOUCH</h3>
   
 </div>
 <div className='horiz_lin'></div>
 <p className='sec_5_para'>We thrive when coming up with innovative ideas but also understand that a smart concept should be supported with measurable results.</p>

<Contact />
</div>













<div className='contact_networks'>


<div className='net_compt'>
  <img src={Icon1} className="icons"/>
  <img src={Icon2} className="icons"/>
  <img src={Icon3} className="icons"/>
  <img src={Icon4} className="icons"/>
</div><br />

<div className='net_compt'>
  <h3>
  +91 123 4556 789</h3>
</div><br />
<div className='net_compt'><h3> Support@info.com</h3></div>

</div>

<div className='footer_sec'>
<Footer />
</div>




 </div>
 </div>
  );
}

export default Home
 
