import React,{Component} from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'

import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout'
import { Row, Col,Container,Card,Form,Button} from 'react-bootstrap'
import workshopStyle from './Workshop Manager.module.scss'
import headerStyle  from './Workshop Manager.module.scss'
import footerStyle  from './Workshop Manager.module.scss'
import SEO from "../components/seo"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudSunRain, faArrowDown,faArrowUp, faCaretDown} from '@fortawesome/free-solid-svg-icons'
import {} from '@fortawesome/free-regular-svg-icons'
import Footer from '../components/footer'
import Header from '../components/header_'
function WorkShopPage () {
    return(
        <div>
            <Header/>
            <SEO title="Workshop Manager" />
            <div>
                <section>
                    <Container>
                        <div style={{}}>
                            <h1 className={workshopStyle.title}>
                            A painless <strong>workshop<br/> management</strong> software 
                            </h1>
                            <h4 className={workshopStyle.title_2}>Increase your productivity</h4>
                            {/* <div style={{    position: 'absolute',paddingTop: '350px'}}>
                                <Link to="/" className={workshopStyle.title_link}
                                style={{position: 'relative',overflow: 'hidden'}}    
                            >
                                Start Now - It's Free
                            </Link>
                            </div> */}
                        </div>
                    </Container>
                    <img src={'../../common_banner.jpg'} style={{width:'100%'}}/>
                </section>
            
                <section className={workshopStyle.sec3}>
                    <h2 className={workshopStyle.sec3_title}>
                    Popular <strong>features</strong> that will change your life
                    </h2>
                    <h4 className={workshopStyle.sec3_title_2}>All the time-saving tools you need to grow your business.</h4>
                    <Container>
                        <Row style={{textAlign:'center'}}>
                            <Col md="10" className={workshopStyle.row_col}>
                                <Row style={{height:'310px'}}>
                                    <Col md="3">
                                        <div className={workshopStyle.col_items}>
                                            <p className={workshopStyle.m_96}
                                            >
                                                DB Synchronization
                                            </p>

                                            <p className={workshopStyle.m_97}
                                            style={{fontSize:'15px'}}>
                                            Create a smart Database of employers and vehicles to minimize your effort
                                            </p>
                                        </div>
                                        <div className={workshopStyle.col_items}>
                                            <p className={workshopStyle.m_96} 
                                            style={{marginTop:"64px !important"}}
                                           >
                                                Assign Tasks
                                            </p>

                                            <p className={workshopStyle.m_97}>
                                            Assign tasks individually to get maximum effort & productivity
                                            </p>
                                        </div>
                                    </Col>

                                    <Col md="3">
                                        <div className={workshopStyle.col_items}>
                                            <p className={workshopStyle.m_96}
                                            >
                                                Manage Workflow
                                            </p>

                                            <p className={workshopStyle.m_97}
                                            style={{fontSize:'15px'}}>
                                                Workshop Manager helps tp Manage entire workflow in one place
                                            </p>
                                        </div>
                                        <div className={workshopStyle.col_items}>
                                            <p className={workshopStyle.m_96} 
                                            style={{marginTop:"64px !important"}}
                                           >
                                                Easy Dashboard
                                            </p>

                                            <p className={workshopStyle.m_97}>
                                                Easy-to-use accessible and simple dashboard for Workshop Manager 
                                            </p>
                                        </div>
                                    </Col>

                                    <Col md="3">
                                        <div className={workshopStyle.col_items}>
                                            <p className={workshopStyle.m_96}
                                            >
                                                System Integration
                                            </p>

                                            <p className={workshopStyle.m_97}
                                            style={{fontSize:'15px'}}>
                                                Integrates workshop manager directly with your systems to reduce effort
                                            </p>
                                        </div>
                                        <div className={workshopStyle.col_items}>
                                            <p className={workshopStyle.m_96} 
                                            style={{marginTop:"64px !important"}}
                                           >
                                                Work Management
                                            </p>

                                            <p className={workshopStyle.m_97}>
                                                Work Order Management for easy management system and to handle task manager
                                            </p>
                                        </div>
                                    </Col>
                                    
                                    <Col md="3">
                                        <div className={workshopStyle.col_items}>
                                            <p className={workshopStyle.m_96}>
                                            Better View
                                            </p>

                                            <p className={workshopStyle.m_97}>
                                            Better and lucrative Design and UI for nice and easy user access
                                            </p>
                                        </div>                            
                                        <div className={workshopStyle.col_items}>
                                            <p className={workshopStyle.m_96}
                                            style={{marginTop:"64px !important"}}>
                                                Data visualization
                                            </p>

                                            <p className={workshopStyle.m_97}>
                                            Simplest way to view report and company Data through data visualization
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
                                <img src={'../../content_image/Workshop.jpg'}
                                    style={{width:'90%',
                                    boxShadow: '-40px 40px 160px 0 rgba(0, 0, 0, 0.08), -8px 8px 15px 0 rgba(120, 120, 120, 0.04), 3px 3px 30px 0 rgba(0, 0, 0, 0.04) !important'}}
                                />
                            </div>
                            <div style={{width:'35%',paddingTop:'50px'}}>
                                <h2 className={workshopStyle.sec5_title}>
                                    <b>Beautiful</b> dynamic statements
                                </h2>
                                <h3 className={workshopStyle.sec4_title_1}>
                                    Your reports, the way you like them.
                                </h3>
                                <p className={workshopStyle.sec4_title_2}
                                style={{fontSize:'15px'}}
                                >
                                    Stop being messy with the paper for managing workshop. Workshop Manager provides a short and simple way to manage your workshop’s reports. Monitor the daily process of vehicle documents, fleet assets and your precious time with the workshop manager.

                                </p>
                                {/* <p className={workshopStyle.sec4_title_3}
                                style={{fontSize:'15px'}}>
                                Quickly filter, zoom, annotate and compare any data.
                                </p>
                                <p className={workshopStyle.sec4_title_3}
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
                            <h2 className={workshopStyle.sec6_title}>
                                Stop recoding transactions manually
                            </h2>
                            <h4 className={workshopStyle.sec6_title_1}>
                                Integrated with other applications
                            </h4>
                        </div>
                        <div style={{padding:'20px'}}></div>
                        <Row>
                            <Col md="3" style={{paddingLeft:'15px',paddingRight:'15px'}}>
                                <Card style={{ width: '16rem' }}>
                                    <div className={workshopStyle.sec6_border_1}>                                   
                                    </div>
                                    <div style={{justifyContent: 'space-between !important'}}>
                                        <h4 className={workshopStyle.card_heading} 
                                            style={{display:'inline-block'}}
                                        >NexComm Chatbot</h4> 
                                        <img src={'../../pricing/expenses.png'} style={{
                                            width:'50px',height:'50px',overflow:'hidden',
                                            marginTop:'-4px',float:'right'
                                        }}/>
                                    </div>
                                    <div></div>
                                    <div className={workshopStyle.card_body}
                                        style={{color: 'rgb(52, 58, 64)'}}
                                    >
                                        <p className={workshopStyle.card_p}>An effortless software for managing client relation</p>
                                    </div>

                                    <div className={workshopStyle.card_footer}>
                                        <div className={workshopStyle.card_footerLink}>
                                                <Link to="/NexComm Chatbot" className={workshopStyle.link}>
                                                    more
                                                </Link>
                                            </div>
                                    </div>
                                </Card>
                            </Col>

                            <Col md="3" style={{paddingLeft:'15px',paddingRight:'15px'}}>
                                <Card style={{ width: '16rem' }}>
                                    <div className={workshopStyle.sec6_border_2}>                                    
                                    </div>
                                    <div style={{justifyContent: 'space-between !important'}}>
                                        <h4 className={workshopStyle.card_heading} 
                                            style={{display:'inline-block'}}
                                        >Data Tools</h4>
                                        <img src={'../../pricing/inventory.png'} style={{
                                                width:'50px',height:'50px',overflow:'hidden',
                                                marginTop:'-4px',float:'right'
                                            }}/>
                                    </div>

                                    <div className={workshopStyle.card_body}
                                        style={{color: 'rgb(52, 58, 64)'}}
                                    >
                                        <p className={workshopStyle.card_p}>A complete modern data survey software</p>
                                    </div>

                                    <div className={workshopStyle.card_footer}>
                                        <div className={workshopStyle.card_footerLink}>
                                                <Link to="/Data Tools" className={workshopStyle.link}>
                                                    more
                                                </Link>
                                            </div>
                                    </div>
                                </Card>
                            </Col>

                            <Col md="3" style={{paddingLeft:'15px',paddingRight:'15px'}}>
                                <Card style={{ width: '16rem' }}>
                                    <div className={workshopStyle.sec6_border_3}>                                    
                                    </div> 
                                    <div style={{justifyContent: 'space-between !important'}}>
                                        <h4 className={workshopStyle.card_heading} 
                                            style={{display:'inline-block'}}
                                        >Micro Finance</h4>
                                        <img src={'../../pricing/point_of_sale.png'} style={{
                                            width:'50px',height:'50px',overflow:'hidden',
                                            marginTop:'-4px',float:'right'
                                        }}/>
                                    </div>
                                    <div className={workshopStyle.card_body}
                                        style={{color: 'rgb(52, 58, 64)'}}
                                    >
                                        <p className={workshopStyle.card_p}>Uncomplicated software for managing finance operation</p>
                                    </div>

                                    <div className={workshopStyle.card_footer}>
                                        <div className={workshopStyle.card_footerLink}>
                                                <Link to="/Micro Finance" className={workshopStyle.link}>
                                                    more
                                                </Link>
                                            </div>
                                    </div>
                                    
                                </Card>
                            </Col>

                            <Col md="3" style={{paddingLeft:'15px',paddingRight:'15px'}}>
                                <Card style={{ width: '16rem' }}>
                                    <div className={workshopStyle.sec6_border_4}>                                    
                                    </div>
                                    <div style={{justifyContent: 'space-between !important'}}>
                                        <h4 className={workshopStyle.card_heading} 
                                            style={{display:'inline-block'}}
                                        >BizView</h4>
                                        <img src={'../../pricing/sale.png'} style={{
                                            width:'50px',height:'50px',overflow:'hidden',
                                            marginTop:'-4px',float:'right'
                                        }}/>
                                    </div>
                                    <div className={workshopStyle.card_body}
                                        style={{color: 'rgb(52, 58, 64)'}}
                                    >
                                        <p className={workshopStyle.card_p}>Modernize software for data analytics</p>
                                    </div>

                                    <div className={workshopStyle.card_footer}>
                                        <div className={workshopStyle.card_footerLink}>
                                                <Link to="/BizView" className={workshopStyle.link}>
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
export default WorkShopPage
