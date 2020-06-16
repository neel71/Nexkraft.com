import React,{Component} from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'

import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout'
import { Row, Col,Container,Card,Form,Button} from 'react-bootstrap'
import BizViewStyle from './BizView.module.scss'
import headerStyle  from './BizView.module.scss'
import footerStyle  from './BizView.module.scss'
import SEO from "../components/seo"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudSunRain, faArrowDown,faArrowUp, faCaretDown} from '@fortawesome/free-solid-svg-icons'
import {} from '@fortawesome/free-regular-svg-icons'
import Footer from '../components/footer'
import Header from '../components/header_'
function BizViewPage () {
    return(
        <div>
            <Header/>
            <SEO title="BizView" />
            <div>
                <section>
                    <Container>
                        <div style={{}}>
                            <h1 className={BizViewStyle.title}>
                                
                                Modernized software for <br/><strong>data analytics</strong>
                            </h1>
                            <h4 className={BizViewStyle.title_2}>Utilize your valuable time</h4>
                            {/* <div style={{    position: 'absolute',paddingTop: '350px'}}>
                                <Link to="/" className={BizViewStyle.title_link}
                                style={{position: 'relative',overflow: 'hidden'}}    
                            >
                                Start Now - It's Free
                            </Link>
                            </div> */}
                        </div>
                    </Container>
                    <img src={'../../common_banner.jpg'} style={{width:'100%'}}/>
                </section>
            
                <section className={BizViewStyle.sec3}>
                    <h2 className={BizViewStyle.sec3_title}>
                    Popular <strong>features</strong> that will change your life
                    </h2>
                    <h4 className={BizViewStyle.sec3_title_2}>All the time-saving tools you need to grow your business.</h4>
                    <Container>
                        <Row style={{textAlign:'center'}}>
                            <Col md="10" className={BizViewStyle.row_col}>
                                <Row style={{height:'310px'}}>
                                    <Col md="3">
                                        <div className={BizViewStyle.col_items}>
                                            <p className={BizViewStyle.m_96}
                                            >
                                                Data density
                                            </p>

                                            <p className={BizViewStyle.m_97}
                                            style={{fontSize:'15px'}}>
                                            Create a smart Database of employers and vehicles and displaying high data density
                                            </p>
                                        </div>
                                        <div className={BizViewStyle.col_items}>
                                            <p className={BizViewStyle.m_96} 
                                            style={{marginTop:"64px !important"}}
                                           >
                                                Understand ideas
                                            </p>

                                            <p className={BizViewStyle.m_97}>
                                                BizView will Make a complex idea easy for your access and make it simple
                                            </p>
                                        </div>
                                    </Col>

                                    <Col md="3">
                                        <div className={BizViewStyle.col_items}>
                                            <p className={BizViewStyle.m_96}
                                            >
                                                Decision Making
                                            </p>

                                            <p className={BizViewStyle.m_97}
                                            style={{fontSize:'15px'}}>
                                                Accelerate the decision making process to faster your task and be more productive
                                            </p>
                                        </div>
                                        <div className={BizViewStyle.col_items}>
                                            <p className={BizViewStyle.m_96} 
                                            style={{marginTop:"64px !important"}}
                                           >
                                                Improve Workflow
                                            </p>

                                            <p className={BizViewStyle.m_97}>
                                                You can easily improve a workflow to find your task process
                                            </p>
                                        </div>
                                    </Col>
                                    
                                    <Col md="3">
                                        <div className={BizViewStyle.col_items}>
                                            <p className={BizViewStyle.m_96}>
                                                Data Models
                                            </p>

                                            <p className={BizViewStyle.m_97}>
                                                Different data models on small data sets for long durations
                                            </p>
                                        </div>                            
                                        <div className={BizViewStyle.col_items}>
                                            <p className={BizViewStyle.m_96}
                                            style={{marginTop:"64px !important"}}>
                                                Integration
                                            </p>

                                            <p className={BizViewStyle.m_97}>
                                                Simple integrations also make it easier and easy accessible 
                                            </p>
                                        </div>
                                    </Col>
                                    <Col md="3">
                                        <div className={BizViewStyle.col_items}>
                                            <p className={BizViewStyle.m_96}>
                                            Better View
                                            </p>

                                            <p className={BizViewStyle.m_97}>
                                            Better and lucrative Design and UI for nice and easy user view
                                            </p>
                                        </div>                            
                                        <div className={BizViewStyle.col_items}>
                                            <p className={BizViewStyle.m_96}
                                            style={{marginTop:"64px !important"}}>
                                                Data Viewing
                                            </p>

                                            <p className={BizViewStyle.m_97}>
                                            Simplest way to view report and company data in less effort
                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </section>
            
                <section style={{backgroundColor:'#F8F9FA'}}>
                    <Container>
                        <div style={{padding:'0px'}}></div>
                        <div style={{width:'100%',display:'flex'}}>
                            <div style={{width:'65%',paddingTop:'30px',marginRight:'5px'}}>
                                <img src={'../../content_image/BizView.jpg'}
                                    style={{width:'90%',height:'auto',
                                    boxShadow: '-40px 40px 160px 0 rgba(0, 0, 0, 0.08), -8px 8px 15px 0 rgba(120, 120, 120, 0.04), 3px 3px 30px 0 rgba(0, 0, 0, 0.04) !important'}}
                                />
                            </div>
                            <div style={{width:'35%',paddingTop:'50px'}}>
                                <h2 className={BizViewStyle.sec5_title}>
                                    <b>Beautiful</b> dynamic statements
                                </h2>
                                <h3 className={BizViewStyle.sec4_title_1}>
                                    Your reports, the way you like them.
                                </h3>
                                <p className={BizViewStyle.sec4_title_2}
                                style={{fontSize:'15px'}}
                                >
                                     Bizview not only delivers the analytics wherever you are but also communicates the value whenever you need. 
                                </p>
                                {/* <p className={BizViewStyle.sec4_title_3}
                                style={{fontSize:'15px'}}>
                                Quickly filter, zoom, annotate and compare any data.
                                </p>
                                <p className={BizViewStyle.sec4_title_3}
                                style={{fontSize:'15px'}}
                                >Use business intelligence's cubes to report across any dimension.</p> */}
                            </div>
                        </div>
                        <div style={{padding:'35px'}}></div>
                    </Container>
                </section>
            
                <section style={{backgroundColor:"#E9ECEF"}}>
                    <Container>
                        <div style={{padding:'10px'}}></div>
                        <div style={{textAlign:"center"}}>
                            <h2 className={BizViewStyle.sec6_title}>
                                Stop recoding transactions manually
                            </h2>
                            <h4 className={BizViewStyle.sec6_title_1}>
                                Integrated with other applications
                            </h4>
                        </div>
                        <div style={{padding:'20px'}}></div>
                        <Row>
                            <Col md="3" style={{paddingLeft:'15px',paddingRight:'15px'}}>
                                <Card style={{ width: '16rem' }}>
                                    <div className={BizViewStyle.sec6_border_1}>                                   
                                    </div>
                                    <div style={{justifyContent: 'space-between !important'}}>
                                        <h4 className={BizViewStyle.card_heading} 
                                            style={{display:'inline-block'}}
                                        >Micro Finance</h4> 
                                        <img src={'../../pricing/expenses.png'} style={{
                                            width:'50px',height:'50px',overflow:'hidden',
                                            marginTop:'-4px',float:'right'
                                        }}/>
                                    </div>
                                    <div></div>
                                    <div className={BizViewStyle.card_body}
                                        style={{color: 'rgb(52, 58, 64)'}}
                                    >
                                        <p className={BizViewStyle.card_p}>Uncomplicated software for managing finance solution</p>
                                    </div>

                                    <div className={BizViewStyle.card_footer}>
                                        <div className={BizViewStyle.card_footerLink}>
                                                <Link to="/Micro Finance" className={BizViewStyle.link}>
                                                    more
                                                </Link>
                                            </div>
                                    </div>
                                </Card>
                            </Col>

                            <Col md="3" style={{paddingLeft:'15px',paddingRight:'15px'}}>
                                <Card style={{ width: '16rem' }}>
                                    <div className={BizViewStyle.sec6_border_2}>                                    
                                    </div>
                                    <div style={{justifyContent: 'space-between !important'}}>
                                        <h4 className={BizViewStyle.card_heading} 
                                            style={{display:'inline-block'}}
                                        >Nexfleet</h4>
                                        <img src={'../../pricing/inventory.png'} style={{
                                                width:'50px',height:'50px',overflow:'hidden',
                                                marginTop:'-4px',float:'right'
                                            }}/>
                                    </div>

                                    <div className={BizViewStyle.card_body}
                                        style={{color: 'rgb(52, 58, 64)'}}
                                    >
                                        <p className={BizViewStyle.card_p}>A modern fleet management software</p>
                                    </div>

                                    <div className={BizViewStyle.card_footer}>
                                        <div className={BizViewStyle.card_footerLink}>
                                                <Link to="/Nexfleet" className={BizViewStyle.link}>
                                                    more
                                                </Link>
                                            </div>
                                    </div>
                                </Card>
                            </Col>

                            <Col md="3" style={{paddingLeft:'15px',paddingRight:'15px'}}>
                                <Card style={{ width: '16rem' }}>
                                    <div className={BizViewStyle.sec6_border_3}>                                    
                                    </div> 
                                    <div style={{justifyContent: 'space-between !important'}}>
                                        <h4 className={BizViewStyle.card_heading} 
                                            style={{display:'inline-block'}}
                                        >Data Tools</h4>
                                        <img src={'../../pricing/point_of_sale.png'} style={{
                                            width:'50px',height:'50px',overflow:'hidden',
                                            marginTop:'-4px',float:'right'
                                        }}/>
                                    </div>
                                    <div className={BizViewStyle.card_body}
                                        style={{color: 'rgb(52, 58, 64)'}}
                                    >
                                        <p className={BizViewStyle.card_p}>A modern survey management software</p>
                                    </div>

                                    <div className={BizViewStyle.card_footer}>
                                        <div className={BizViewStyle.card_footerLink}>
                                                <Link to="/Data Tools" className={BizViewStyle.link}>
                                                    more
                                                </Link>
                                            </div>
                                    </div>
                                    
                                </Card>
                            </Col>

                            <Col md="3" style={{paddingLeft:'15px',paddingRight:'15px'}}>
                                <Card style={{ width: '16rem' }}>
                                    <div className={BizViewStyle.sec6_border_4}>                                    
                                    </div>
                                    <div style={{justifyContent: 'space-between !important'}}>
                                        <h4 className={BizViewStyle.card_heading} 
                                            style={{display:'inline-block'}}
                                        >NexComm Chatbot</h4>
                                        <img src={'../../pricing/sale.png'} style={{
                                            width:'50px',height:'50px',overflow:'hidden',
                                            marginTop:'-4px',float:'right'
                                        }}/>
                                    </div>
                                    <div className={BizViewStyle.card_body}
                                        style={{color: 'rgb(52, 58, 64)'}}
                                    >
                                        <p className={BizViewStyle.card_p}>An effortless software for managing client relation</p>
                                    </div>

                                    <div className={BizViewStyle.card_footer}>
                                        <div className={BizViewStyle.card_footerLink}>
                                                <Link to="/NexComm Chatbot" className={BizViewStyle.link}>
                                                    more
                                                </Link>
                                            </div>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                        <div style={{padding:'60px'}}></div>
                    </Container>
                </section>
            </div>
            <Footer/>
        </div>
        
    )
}
export default BizViewPage
