import React,{Component} from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'

import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout'
import { Row, Col,Container,Card,Form,Nav,Button} from 'react-bootstrap'
import learnStyle from './learn.module.scss'
import headerStyle  from './learn.module.scss'
import footerStyle  from './learn.module.scss'
import SEO from "../components/seo"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudSunRain, faArrowDown,faArrowUp, faCaretDown} from '@fortawesome/free-solid-svg-icons'
import {} from '@fortawesome/free-regular-svg-icons'

function AccountingPage () {
    return(
        
        <Layout>
            <SEO title="Learn" />
            <section className={learnStyle.sec1}>
                <img src={'../../banner_learn.png'} className={learnStyle.banner} />    
                <Container>
                    <div>
                        <p className={learnStyle.p__} >
                            Knowledge
                            <p className={learnStyle.p___}>
                            <span style={{paddingTop: '0.25em'}}>is</span>
                            <img src={'../../oe_slides_splash_super.png'} 
                            style={{height:'2em', width: 'auto',
                                    marginLeft: '-0.5rem !important',marginRight: '-1.5rem !important'}}/>
                            <span style={{paddingTop: '0.25em'}}>power!</span>
                            </p>
                        </p>
                        
                    </div>
                    <div className={learnStyle.nav_div}>
                        <Nav className={learnStyle.nav_content}>
                            <Nav.Item>
                            <Nav.Link href="/home">Active</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="link-1">Link</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="link-2">Link</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>
                </Container>
            </section>
            <section>
                <Container>
                    <div>
                        <Row>
                            <Col md="3">
                                <div>
                                    <h5 >Latest achievements</h5>
                                    <hr/>
                                    <div>
                                        <div>
                                            <img src={'../../camera.png'} 
                                            width="32px" height="32px" />
                                            <span>Lorem Ipsom</span>
                                        </div>
                                        
                                        <div>
                                            <img src={'../../camera.png'} 
                                            width="32px" height="32px" />
                                            <span>Lorem Ipsom</span>
                                        </div>
                                        
                                        <div>
                                            <img src={'../../camera.png'} 
                                            width="32px" height="32px" />
                                            <span>Lorem Ipsom</span>
                                        </div>
                                        
                                        <div>
                                            <img src={'../../camera.png'} 
                                            width="32px" height="32px" />
                                            <span>Lorem Ipsom</span>
                                        </div>
                                        
                                        <div>
                                            <img src={'../../camera.png'} 
                                            width="32px" height="32px" />
                                            <span>Lorem Ipsom</span>
                                        </div>
                                        
                                    </div>
                                </div>

                                <div style={{marginTop:'35px'}}>
                                    <h5 >Leader Boards</h5>
                                    <hr/>
                                    <div>
                                        <div>
                                            <img src={'../../camera.png'} 
                                            width="32px" height="32px" style={{borderRadius:'50%'}} />
                                            <span>Lorem Ipsom</span>
                                        </div>
                                        
                                        <div>
                                            <img src={'../../camera.png'} 
                                            width="32px" height="32px"  style={{borderRadius:'50%'}}/>
                                            <span>Lorem Ipsom</span>
                                        </div>
                                        
                                        <div>
                                            <img src={'../../camera.png'} 
                                            width="32px" height="32px" />
                                            <span>Lorem Ipsom</span>
                                        </div>
                                        
                                        <div>
                                            <img src={'../../camera.png'} 
                                            width="32px" height="32px" />
                                            <span>Lorem Ipsom</span>
                                        </div>
                                        
                                        <div>
                                            <img src={'../../camera.png'} 
                                            width="32px" height="32px" />
                                            <span>Lorem Ipsom</span>
                                        </div>
                                        
                                    </div>
                                </div>
                            </Col>
                            <Col md="9">asdd</Col>
                        </Row>
                    </div>
                </Container>
            </section>
        </Layout>
        
           
               
    )
}
export default AccountingPage
