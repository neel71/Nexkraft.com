import React from 'react'
import {Link} from "gatsby"
import {graphql , useStaticQuery} from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css';
import footerStyle from './footer.module.scss'
import { Col,Row,Container,Form,Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard,faAddressBook} from '@fortawesome/free-solid-svg-icons'

const Footer = () => {

    return (
        <footer className={footerStyle.footer_style}>
            <div style={{textAlign:"center"}}>        
                <span className={footerStyle.logo__} style={{
                marginTop:'3em',
                marginBottom:'3em',        
                }}></span>
            </div>

            <Container>
                <Row>
                    <Col md="7">
                        <Row>
                            <Col md="4">
                                <div className={footerStyle.menu_title}>Address</div>
                                <div>
                                    <div>
                                        <p className={footerStyle.all_link}>58 Lake Circus Road,</p>
                                    </div>
                                    <div style={{marginTop: '-5px'}}>
                                        <p className={footerStyle.all_link}>Kalabagan, Dhanmondi,</p>
                                    </div>
                                    <div style={{marginTop: '-5px'}}>
                                        <p className={footerStyle.all_link}>Dhaka-1209,Bangladesh</p>
                                    </div>

                                    <div style={{margin:'10px'}}></div>

                                    <div>
                                        <Link to="/" className={footerStyle.all_link}>eLearning Platform</Link>
                                    </div>
                                    
                                    <div style={{margin:'10px'}}></div>

                                    <div>
                                        <Link to="/" className={footerStyle.all_link}>Write fro Community</Link>
                                    </div>

                                    <div style={{margin:'10px'}}></div>

                                    <div className={footerStyle.menu_title}>Developers</div>
                                    <div style={{margin:'10px'}}></div>
                                    <div>
                                        <Link to="/" className={footerStyle.all_link}>Dev documentation</Link>
                                    </div>
                                    <div style={{marginTop: '-5px'}}>
                                        <Link to="/" className={footerStyle.all_link}>Github</Link>
                                    </div>
                                    <div style={{margin:'10px'}}></div>
                                    <div>
                                        <Link to="/" className={footerStyle.all_link}>Download</Link>
                                    </div>
                                    <div style={{marginTop: '-5px'}}>
                                        <Link to="/" className={footerStyle.all_link}>Runbot</Link>
                                    </div>
                                    <div style={{marginTop: '-5px'}}>
                                        <Link to="/" className={footerStyle.all_link}>translation</Link>
                                    </div>
                                </div>
                            </Col>
                            <Col md="4">
                                <div className={footerStyle.menu_title}>Services</div>
                                <div>
                                    
                                    <div>
                                        <Link to="/" className={footerStyle.all_link}>Odoo Cloud Platform</Link>
                                    </div>

                                    <div style={{margin:'10px'}}></div>

                                    <div>
                                        <Link to="/" className={footerStyle.all_link}>Support</Link>
                                    </div>
                                    <div style={{marginTop: '-5px'}}>
                                        <Link to="/" className={footerStyle.all_link}>Upgrade</Link>
                                    </div>
                                    
                                    <div style={{margin:'10px'}}></div>

                                    <div>
                                        <Link to="/" className={footerStyle.all_link}>Find a Partner</Link>
                                    </div>
                                    <div style={{marginTop: '-5px'}}>
                                        <Link to="/" className={footerStyle.all_link}>Become a Partner</Link>
                                    </div>

                                    <div style={{margin:'10px'}}></div>

                                    <div className={footerStyle.all_link}>Education</div>
                                   
                                </div>
                            </Col>
                            <Col md="4">
                                <div className={footerStyle.menu_title}>About us</div>
                                <div>
                                    
                                    <div>
                                        <Link to="/" className={footerStyle.all_link}>Our Company</Link>
                                    </div>
                                    <div style={{marginTop: '-5px'}}>
                                        <Link to="/" className={footerStyle.all_link}>Contact</Link>
                                    </div>

                                    <div style={{margin:'10px'}}></div>

                                    <div>
                                        <Link to="/" className={footerStyle.all_link}>Events</Link>
                                    </div>
                                    <div style={{marginTop: '-5px'}}>
                                        <Link to="/" className={footerStyle.all_link}>Blog</Link>
                                    </div>
                                    <div style={{marginTop: '-5px'}}>
                                        <Link to="/" className={footerStyle.all_link}>Customers</Link>
                                    </div>

                                    <div style={{margin:'10px'}}></div>

                                    <div className={footerStyle.menu_title}>Jobs</div>
                                    
                                    <div style={{margin:'10px'}}></div>

                                    <div>
                                        <Link to="/" className={footerStyle.all_link}>White Paper</Link>
                                    </div>
                                    <div style={{marginTop: '-5px'}}>
                                        <Link to="/" className={footerStyle.all_link}>In the Press</Link>
                                    </div>

                                    <div style={{margin:'10px'}}></div>

                                    <div>
                                        <Link to="/" className={footerStyle.all_link} style={{display:'inline-block'}}>Legal</Link>&nbsp;|&nbsp;
                                        <Link to="/" className={footerStyle.all_link} style={{display:'inline-block'}}>Privacy</Link>&nbsp;|&nbsp;
                                        <Link to="/" className={footerStyle.all_link} style={{display:'inline-block'}}>GDPR</Link>
                                    </div>
                                    <div style={{marginTop: '-5px'}}>
                                    <Link to="/" className={footerStyle.all_link} style={{display:'inline-block'}}>Security</Link>&nbsp;|&nbsp;
                                        <Link to="/" className={footerStyle.all_link} style={{display:'inline-block'}}>SLA</Link>
                                    </div>

                                    
                                   
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col md="5">
                        <div>
                            <div className={footerStyle.menu_title}>Contact Us</div>
                            <div style={{borderBottom:'.5pv solid white'}}></div>
                            <Form name="contact_contact_form" method="post" data-netlify="true" netlify-honeypot="bot-field">
                      <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                          <Form.Label>FirstName</Form.Label>
                          <Form.Control type="text" placeholder="Firstname" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                          <Form.Label>LastName</Form.Label>
                          <Form.Control type="text" placeholder="Lastname" />
                        </Form.Group>
                      </Form.Row>

                      <Form.Group controlId="formGridAddress1">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Email" />
                      </Form.Group>

                      <Form.Group controlId="formGridAddress2">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="text" placeholder="phone" />
                      </Form.Group>


                      <Button type="submit">
                        Connect with us!
                      </Button>
                    </Form>
                        </div>
                    </Col>
                </Row>
                <div>
                    <Link className={footerStyle.all_link}>
                    <p className={footerStyle.text} style={{display:'inline-block'}}>Website made with </p>
                    <span className={footerStyle.logo__}></span>
                    </Link>
                </div>
            </Container>
        </footer>
    )
}

export default Footer

