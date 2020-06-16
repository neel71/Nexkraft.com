import React,{Component} from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'

import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout'
import { Row, Col,Container,Card,Form,Button} from 'react-bootstrap'
import dToolsStyle from './Data-tools.module.scss'
import headerStyle  from './Data-tools.module.scss'
import footerStyle  from './Data-tools.module.scss'
import SEO from "../components/seo"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudSunRain, faArrowDown,faArrowUp, faCaretDown} from '@fortawesome/free-solid-svg-icons'
import {} from '@fortawesome/free-regular-svg-icons'
import Footer from '../components/footer'
import Header from '../components/header_'
function DataToolsPage () {
    return(
        <div>
            <Header/>
            <SEO title="Data Tools" />
            <div>
                <section>
                    <Container>
                        <div style={{}}>
                            <h1 className={dToolsStyle.title}>
                                
                                A modern <strong>survey management</strong> software 
                            </h1>
                            <h4 className={dToolsStyle.title_2}>Make your survey procedure smooth</h4>
                            {/* <div style={{    position: 'absolute',paddingTop: '350px'}}>
                                <Link to="/" className={dToolsStyle.title_link}
                                style={{position: 'relative',overflow: 'hidden'}}    
                            >
                                Start Now - It's Free
                            </Link>
                            </div> */}
                        </div>
                    </Container>
                    <img src={'../../common_banner.jpg'} style={{width:'100%'}}/>
                </section>
            
                <section className={dToolsStyle.sec3}>
                    <h2 className={dToolsStyle.sec3_title}>
                    Popular <strong>features</strong> that will change your life
                    </h2>
                    <h4 className={dToolsStyle.sec3_title_2}>All the time-saving tools you need to grow your business.</h4>
                    <Container>
                        <Row style={{textAlign:'center'}}>
                            <Col md="10" className={dToolsStyle.row_col}>
                                <Row style={{height:'310px'}}>
                                    <Col md="3">
                                        <div className={dToolsStyle.col_items}>
                                            <p className={dToolsStyle.m_96}
                                            >
                                                DB Synchronization
                                            </p>

                                            <p className={dToolsStyle.m_97}
                                            style={{fontSize:'15px'}}>
                                            Create a smart Database of employers and vehicles to minimize your effort
                                            </p>
                                        </div>
                                        <div className={dToolsStyle.col_items}>
                                            <p className={dToolsStyle.m_96} 
                                            style={{marginTop:"64px !important"}}
                                           >
                                                Assign Tasks
                                            </p>

                                            <p className={dToolsStyle.m_97}>
                                            Assign tasks individually to get maximum effort and productivity
                                            </p>
                                        </div>
                                    </Col>

                                    <Col md="3">
                                        <div className={dToolsStyle.col_items}>
                                            <p className={dToolsStyle.m_96}
                                            >
                                                Survey Results
                                            </p>

                                            <p className={dToolsStyle.m_97}
                                            style={{fontSize:'15px'}}>
                                                Relevance to your audience and your historical survey results
                                            </p>
                                        </div>
                                        <div className={dToolsStyle.col_items}>
                                            <p className={dToolsStyle.m_96} 
                                            style={{marginTop:"64px !important"}}
                                           >
                                                Cost Reduce
                                            </p>

                                            <p className={dToolsStyle.m_97}>
                                                Reduce labor and material costs to grab more benefits and save earnings
                                            </p>
                                        </div>
                                    </Col>
                                    
                                    <Col md="3">
                                        <div className={dToolsStyle.col_items}>
                                            <p className={dToolsStyle.m_96}>
                                            Saving Feedback
                                            </p>

                                            <p className={dToolsStyle.m_97}>
                                                More systematic by saving all feedback in one database and easy accessible
                                            </p>
                                        </div>                            
                                        <div className={dToolsStyle.col_items}>
                                            <p className={dToolsStyle.m_96}
                                            style={{marginTop:"64px !important"}}>
                                                Easy Design
                                            </p>

                                            <p className={dToolsStyle.m_97}>
                                                Questionnaires are easy and fast to design and distribute different tasks
                                            </p>
                                        </div>
                                    </Col>

                                    <Col md="3">
                                        <div className={dToolsStyle.col_items}>
                                            <p className={dToolsStyle.m_96}>
                                            Better View
                                            </p>

                                            <p className={dToolsStyle.m_97}>
                                            Better and lucrative Design and UI for nice and easy user access
                                            </p>
                                        </div>                            
                                        <div className={dToolsStyle.col_items}>
                                            <p className={dToolsStyle.m_96}
                                            style={{marginTop:"64px !important"}}>
                                                Data visualization
                                            </p>

                                            <p className={dToolsStyle.m_97}>
                                                Simplest way to view report and company Data and arrange smoothly
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
                        <div style={{padding:'17px'}}></div>
                        <div style={{width:'100%',display:'flex'}}>
                            <div style={{width:'65%',paddingTop:'30px',marginRight:'5px'}}>
                                <img src={'../../content_image/datatools.jpg'}
                                    style={{width:'80%',
                                    boxShadow: '-40px 40px 160px 0 rgba(0, 0, 0, 0.08), -8px 8px 15px 0 rgba(120, 120, 120, 0.04), 3px 3px 30px 0 rgba(0, 0, 0, 0.04) !important'}}
                                />
                            </div>
                            <div style={{width:'35%',paddingTop:'50px'}}>
                                <h2 className={dToolsStyle.sec5_title}>
                                    <b>Beautiful</b> dynamic statements
                                </h2>
                                <h3 className={dToolsStyle.sec4_title_1}>
                                    Your reports, the way you like them.
                                </h3>
                                <p className={dToolsStyle.sec4_title_2}
                                style={{fontSize:'15px'}}
                                >
                                    Effective data management is no easy feat. 
                                    Data tools is a solution available to manage 
                                    your data more efficiently, saving your time and money. 
                                    It provides a suite of tools to help businesses control 
                                    their data processes. This module provides centralization 
                                    of your most basic and necessary information.

                                </p>
                                {/* <p className={dToolsStyle.sec4_title_3}
                                style={{fontSize:'15px'}}>
                                Quickly filter, zoom, annotate and compare any data.
                                </p>
                                <p className={dToolsStyle.sec4_title_3}
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
                            <h2 className={dToolsStyle.sec6_title}>
                                Stop recoding transactions manually
                            </h2>
                            <h4 className={dToolsStyle.sec6_title_1}>
                                Integrated with other applications
                            </h4>
                        </div>
                        <div style={{padding:'20px'}}></div>
                        <Row>
                            <Col md="3" style={{paddingLeft:'15px',paddingRight:'15px'}}>
                                <Card style={{ width: '16rem' }}>
                                    <div className={dToolsStyle.sec6_border_1}>                                   
                                    </div>
                                    <div style={{justifyContent: 'space-between !important'}}>
                                        <h4 className={dToolsStyle.card_heading} 
                                            style={{display:'inline-block'}}
                                        >BizView</h4> 
                                        <img src={'../../pricing/expenses.png'} style={{
                                            width:'50px',height:'50px',overflow:'hidden',
                                            marginTop:'-4px',float:'right'
                                        }}/>
                                    </div>
                                    <div></div>
                                    <div className={dToolsStyle.card_body}
                                        style={{color: 'rgb(52, 58, 64)'}}
                                    >
                                        <p className={dToolsStyle.card_p}>Modernize software for data analytics</p>
                                    </div>

                                    <div className={dToolsStyle.card_footer}>
                                        <div className={dToolsStyle.card_footerLink}>
                                                <Link to="/BizView" className={dToolsStyle.link}>
                                                    more
                                                </Link>
                                            </div>
                                    </div>
                                </Card>
                            </Col>

                            <Col md="3" style={{paddingLeft:'15px',paddingRight:'15px'}}>
                                <Card style={{ width: '16rem' }}>
                                    <div className={dToolsStyle.sec6_border_2}>                                    
                                    </div>
                                    <div style={{justifyContent: 'space-between !important'}}>
                                        <h4 className={dToolsStyle.card_heading} 
                                            style={{display:'inline-block'}}
                                        >Nexcomm Chatbot</h4>
                                        <img src={'../../pricing/inventory.png'} style={{
                                                width:'50px',height:'50px',overflow:'hidden',
                                                marginTop:'-4px',float:'right'
                                            }}/>
                                    </div>

                                    <div className={dToolsStyle.card_body}
                                        style={{color: 'rgb(52, 58, 64)'}}
                                    >
                                        <p className={dToolsStyle.card_p}>An effortless software for managing client relation</p>
                                    </div>

                                    <div className={dToolsStyle.card_footer}>
                                        <div className={dToolsStyle.card_footerLink}>
                                                <Link to="/Nexcomm Chatbot" className={dToolsStyle.link}>
                                                    more
                                                </Link>
                                            </div>
                                    </div>
                                </Card>
                            </Col>

                            <Col md="3" style={{paddingLeft:'15px',paddingRight:'15px'}}>
                                <Card style={{ width: '16rem' }}>
                                    <div className={dToolsStyle.sec6_border_3}>                                    
                                    </div> 
                                    <div style={{justifyContent: 'space-between !important'}}>
                                        <h4 className={dToolsStyle.card_heading} 
                                            style={{display:'inline-block'}}
                                        >Nexcase Book</h4>
                                        <img src={'../../pricing/point_of_sale.png'} style={{
                                            width:'50px',height:'50px',overflow:'hidden',
                                            marginTop:'-4px',float:'right'
                                        }}/>
                                    </div>
                                    <div className={dToolsStyle.card_body}
                                        style={{color: 'rgb(52, 58, 64)'}}
                                    >
                                        <p className={dToolsStyle.card_p}>A systematic case management software</p>
                                    </div>

                                    <div className={dToolsStyle.card_footer}>
                                        <div className={dToolsStyle.card_footerLink}>
                                                <Link to="/Nexcase Book" className={dToolsStyle.link}>
                                                    more
                                                </Link>
                                            </div>
                                    </div>
                                    
                                </Card>
                            </Col>

                            <Col md="3" style={{paddingLeft:'15px',paddingRight:'15px'}}>
                                <Card style={{ width: '16rem' }}>
                                    <div className={dToolsStyle.sec6_border_4}>                                    
                                    </div>
                                    <div style={{justifyContent: 'space-between !important'}}>
                                        <h4 className={dToolsStyle.card_heading} 
                                            style={{display:'inline-block'}}
                                        >iFleet</h4>
                                        <img src={'../../pricing/sale.png'} style={{
                                            width:'50px',height:'50px',overflow:'hidden',
                                            marginTop:'-4px',float:'right'
                                        }}/>
                                    </div>
                                    <div className={dToolsStyle.card_body}
                                        style={{color: 'rgb(52, 58, 64)'}}
                                    >
                                        <p className={dToolsStyle.card_p}>A beautiful fleet management software</p>
                                    </div>

                                    <div className={dToolsStyle.card_footer}>
                                        <div className={dToolsStyle.card_footerLink}>
                                                <Link to="/iFleet" className={dToolsStyle.link}>
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
export default DataToolsPage
