import React,{Component} from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'

import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout'
import { Row, Col,Container,Form,Button,Nav,Card,Figure,FAQ} from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import tourStyle from './tour.module.scss'
import SEO from "../components/seo"
import Video from "../assets/nexParc Promo.mp4"

function TourPage () {
    return(
        <Layout>
            <SEO title="Tour" />
            <div style={{height:'200px'}}>
                <img src={'../../devices.gif'} className={tourStyle.banner} />
                <p className={tourStyle.p__} >Odoo Vidoes</p>
            </div>
            
            <section style={{backgroundColor:'#F8F9FA',}}>
                <Container>
                    <div>
                        <div style={{height:'30px'}}></div>
                        <Row className={tourStyle.row_anim}
                            style={{
                                    animationName: 'none',
                                    visibility: 'visible',
                                    animationPlayState: 'running'
                            }}>
                           <Col md="4" style={{transitionDelay: '0ms'}}>
                                <Card style={{ width: '22rem' }}>
                                     <video controls style={{height:'200px'}}>
                                        <source src={Video} type="video/mp4" />
                                    </video>
                                    <Card.Body>
                                        <footer>
                                            <div style={{width:'100%',display:'flex'}}>
                                                <div style={{width:'40%'}}>
                                                    <img src={'../../pricing/crm.png'} 
                                                        style={{zIndex:'99999',display:'inline-block',height:'34px'}}/>
                                                    <span className={tourStyle.name}>CRM</span>
                                                </div>
                                                <div style={{width:'55%'}}></div>
                                                <div style={{width:'15%'}}>
                                                    <Link to="/tour" className={tourStyle.try_it_free} >
                                                        MORE
                                                    </Link>
                                                </div>
                                            </div>
                                            
                                            
                                        </footer>
                                    </Card.Body>
                                </Card>
                           </Col>

                           <Col md="4" style={{transitionDelay: '0ms'}}>
                                <Card style={{ width: '22rem' }}>
                                    <video controls style={{height:'200px'}}>
                                        <source src={Video} type="video/mp4" />
                                    </video>
                                    <Card.Body>
                                        <footer>
                                            <div style={{width:'100%',display:'flex'}}>
                                                <div style={{width:'40%'}}>
                                                    <img src={'../../pricing/crm.png'} 
                                                        style={{zIndex:'99999',display:'inline-block',height:'34px'}}/>
                                                    <span className={tourStyle.name}>CRM</span>
                                                </div>
                                                <div style={{width:'55%'}}></div>
                                                <div style={{width:'15%'}}>
                                                    <Link to="/tour" className={tourStyle.try_it_free} >
                                                        MORE
                                                    </Link>
                                                </div>
                                            </div>
                                            
                                            
                                        </footer>
                                    </Card.Body>
                                </Card>
                           </Col>

                           <Col md="4" style={{transitionDelay: '0ms'}}>
                                <Card style={{ width: '22rem' }}>
                                     <video controls style={{height:'200px'}}>
                                        <source src={Video} type="video/mp4" />
                                    </video>
                                    <Card.Body>
                                        <footer>
                                            <div style={{width:'100%',display:'flex'}}>
                                                <div style={{width:'40%'}}>
                                                    <img src={'../../pricing/crm.png'} 
                                                        style={{zIndex:'99999',display:'inline-block',height:'34px'}}/>
                                                    <span className={tourStyle.name}>CRM</span>
                                                </div>
                                                <div style={{width:'55%'}}></div>
                                                <div style={{width:'15%'}}>
                                                    <Link to="/tour" className={tourStyle.try_it_free} >
                                                        MORE
                                                    </Link>
                                                </div>
                                            </div>
                                            
                                            
                                        </footer>
                                    </Card.Body>
                                </Card>
                           </Col>
                       </Row>
                        
                        <Row className={tourStyle.row_anim}
                            style={{
                                    animationName: 'none',
                                    visibility: 'visible',
                                    animationPlayState: 'running'
                            }}>
                           <Col md="4" style={{transitionDelay: '0ms'}}>
                                <Card style={{ width: '22rem' }}>
                                     <video controls style={{height:'200px'}}>
                                        <source src={Video} type="video/mp4" />
                                    </video>
                                    <Card.Body>
                                        <footer>
                                            <div style={{width:'100%',display:'flex'}}>
                                                <div style={{width:'40%'}}>
                                                    <img src={'../../pricing/crm.png'} 
                                                        style={{zIndex:'99999',display:'inline-block',height:'34px'}}/>
                                                    <span className={tourStyle.name}>CRM</span>
                                                </div>
                                                <div style={{width:'55%'}}></div>
                                                <div style={{width:'15%'}}>
                                                    <Link to="/tour" className={tourStyle.try_it_free} >
                                                        MORE
                                                    </Link>
                                                </div>
                                            </div>
                                            
                                            
                                        </footer>
                                    </Card.Body>
                                </Card>
                           </Col>

                           <Col md="4" style={{transitionDelay: '0ms'}}>
                                <Card style={{ width: '22rem' }}>
                                    <video controls style={{height:'200px'}}>
                                        <source src={Video} type="video/mp4" />
                                    </video>
                                    <Card.Body>
                                        <footer>
                                            <div style={{width:'100%',display:'flex'}}>
                                                <div style={{width:'40%'}}>
                                                    <img src={'../../pricing/crm.png'} 
                                                        style={{zIndex:'99999',display:'inline-block',height:'34px'}}/>
                                                    <span className={tourStyle.name}>CRM</span>
                                                </div>
                                                <div style={{width:'55%'}}></div>
                                                <div style={{width:'15%'}}>
                                                    <Link to="/tour" className={tourStyle.try_it_free} >
                                                        MORE
                                                    </Link>
                                                </div>
                                            </div>
                                            
                                            
                                        </footer>
                                    </Card.Body>
                                </Card>
                           </Col>

                           <Col md="4" style={{transitionDelay: '0ms'}}>
                                <Card style={{ width: '22rem' }}>
                                     <video controls style={{height:'200px'}}>
                                        <source src={Video} type="video/mp4" />
                                    </video>
                                    <Card.Body>
                                        <footer>
                                            <div style={{width:'100%',display:'flex'}}>
                                                <div style={{width:'40%'}}>
                                                    <img src={'../../pricing/crm.png'} 
                                                        style={{zIndex:'99999',display:'inline-block',height:'34px'}}/>
                                                    <span className={tourStyle.name}>CRM</span>
                                                </div>
                                                <div style={{width:'55%'}}></div>
                                                <div style={{width:'15%'}}>
                                                    <Link to="/tour" className={tourStyle.try_it_free} >
                                                        MORE
                                                    </Link>
                                                </div>
                                            </div>
                                            
                                            
                                        </footer>
                                    </Card.Body>
                                </Card>
                           </Col>
                       </Row>

                        <Row className={tourStyle.row_anim}
                            style={{
                                    animationName: 'none',
                                    visibility: 'visible',
                                    animationPlayState: 'running'
                            }}>
                           <Col md="4" style={{transitionDelay: '0ms'}}>
                                <Card style={{ width: '22rem' }}>
                                     <video controls style={{height:'200px'}}>
                                        <source src={Video} type="video/mp4" />
                                    </video>
                                    <Card.Body>
                                        <footer>
                                            <div style={{width:'100%',display:'flex'}}>
                                                <div style={{width:'40%'}}>
                                                    <img src={'../../pricing/crm.png'} 
                                                        style={{zIndex:'99999',display:'inline-block',height:'34px'}}/>
                                                    <span className={tourStyle.name}>CRM</span>
                                                </div>
                                                <div style={{width:'55%'}}></div>
                                                <div style={{width:'15%'}}>
                                                    <Link to="/tour" className={tourStyle.try_it_free} >
                                                        MORE
                                                    </Link>
                                                </div>
                                            </div>
                                            
                                            
                                        </footer>
                                    </Card.Body>
                                </Card>
                           </Col>

                           <Col md="4" style={{transitionDelay: '0ms'}}>
                                <Card style={{ width: '22rem' }}>
                                    <video controls style={{height:'200px'}}>
                                        <source src={Video} type="video/mp4" />
                                    </video>
                                    <Card.Body>
                                        <footer>
                                            <div style={{width:'100%',display:'flex'}}>
                                                <div style={{width:'40%'}}>
                                                    <img src={'../../pricing/crm.png'} 
                                                        style={{zIndex:'99999',display:'inline-block',height:'34px'}}/>
                                                    <span className={tourStyle.name}>CRM</span>
                                                </div>
                                                <div style={{width:'55%'}}></div>
                                                <div style={{width:'15%'}}>
                                                    <Link to="/tour" className={tourStyle.try_it_free} >
                                                        MORE
                                                    </Link>
                                                </div>
                                            </div>
                                            
                                            
                                        </footer>
                                    </Card.Body>
                                </Card>
                           </Col>

                           <Col md="4" style={{transitionDelay: '0ms'}}>
                                <Card style={{ width: '22rem' }}>
                                     <video controls style={{height:'200px'}}>
                                        <source src={Video} type="video/mp4" />
                                    </video>
                                    <Card.Body>
                                        <footer>
                                            <div style={{width:'100%',display:'flex'}}>
                                                <div style={{width:'40%'}}>
                                                    <img src={'../../pricing/crm.png'} 
                                                        style={{zIndex:'99999',display:'inline-block',height:'34px'}}/>
                                                    <span className={tourStyle.name}>CRM</span>
                                                </div>
                                                <div style={{width:'55%'}}></div>
                                                <div style={{width:'15%'}}>
                                                    <Link to="/tour" className={tourStyle.try_it_free} >
                                                        MORE
                                                    </Link>
                                                </div>
                                            </div>
                                            
                                            
                                        </footer>
                                    </Card.Body>
                                </Card>
                           </Col>
                       </Row>
                       <div style={{height:'60px'}}></div>
                    </div>
                </Container>
            </section>
            
        </Layout>
    )
}
export default TourPage


