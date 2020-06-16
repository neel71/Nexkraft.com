import React,{Component} from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'

import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout'
import { Row, Col,Container,Card,Form,Button} from 'react-bootstrap'
import nextCaseStyle from './NexCase-Book.module.scss'
import headerStyle  from './NexCase-Book.module.scss'
import footerStyle  from './NexCase-Book.module.scss'
import SEO from "../components/seo"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudSunRain, faArrowDown,faArrowUp, faCaretDown} from '@fortawesome/free-solid-svg-icons'
import {} from '@fortawesome/free-regular-svg-icons'
import Footer from '../components/footer'
import Header from '../components/header_'
function NexfleetPage () {
    return(
        <div>
           <Header/>
            <SEO title="NexCase Book" />
            <div>
            
                <section>
                    <Container>
                        <div style={{}}>
                            <h1 className={nextCaseStyle.title}>
                                A systematic <br/><strong>case management</strong> software
                            </h1>
                            <h4 className={nextCaseStyle.title_2}>Save time by using updated tools</h4>
                            {/* <div style={{    position: 'absolute',paddingTop: '350px'}}>
                                <Link to="/" className={nextCaseStyle.title_link}
                                style={{position: 'relative',overflow: 'hidden'}}    
                            >
                                Start Now - It's Free
                            </Link>
                            </div> */}
                        </div>
                    </Container>
                    <img src={'../../common_banner.jpg'} style={{width:'100%'}}/>
                </section>
            
                <section className={nextCaseStyle.sec3}>
                    <h2 className={nextCaseStyle.sec3_title}>
                    Popular <strong>features</strong> that will change your life
                    </h2>
                    <h4 className={nextCaseStyle.sec3_title_2}>All the time-saving tools you need to grow your business.</h4>
                    <Container>
                        <Row style={{textAlign:'center'}}>
                            <Col md="10" className={nextCaseStyle.row_col}>
                                <Row style={{height:'310px'}}>
                                    <Col md="3">
                                        <div className={nextCaseStyle.col_items}>
                                            <p className={nextCaseStyle.m_96}
                                            >
                                                Centralized data sources
                                            </p>

                                            <p className={nextCaseStyle.m_97}
                                            style={{fontSize:'15px'}}>
                                                Create a smart Database of employers and access all your data from one 
                                                center
                                            </p>
                                        </div>
                                        <div className={nextCaseStyle.col_items}>
                                            <p className={nextCaseStyle.m_96} 
                                            style={{marginTop:"64px !important"}}
                                           >
                                                Data Preservation
                                            </p>

                                            <p className={nextCaseStyle.m_97}>
                                             Save your data as per your need and keep safely and access easily
                                            </p>
                                        </div>
                                    </Col>

                                    <Col md="3">
                                        <div className={nextCaseStyle.col_items}>
                                            <p className={nextCaseStyle.m_96}
                                            >
                                                Data Facilities
                                            </p>

                                            <p className={nextCaseStyle.m_97}
                                            style={{fontSize:'15px'}}>
                                                Cloud applications and data warehouses facilities to keep data safe
                                            </p>
                                        </div>
                                        <div className={nextCaseStyle.col_items}>
                                            <p className={nextCaseStyle.m_96} 
                                            style={{marginTop:"64px !important"}}
                                           >
                                                Data Examine
                                            </p>

                                            <p className={nextCaseStyle.m_97}>
                                                Nexcase book will allow data governance for sensitive data and security
                                            </p>
                                        </div>
                                    </Col>
                                    
                                    <Col md="3">
                                        <div className={nextCaseStyle.col_items}>
                                            <p className={nextCaseStyle.m_96}>
                                                Accessible anywhere
                                            </p>

                                            <p className={nextCaseStyle.m_97}>
                                                The centralized case file and multi-user access capabilities from anywhere
                                            </p>
                                        </div>                            
                                        <div className={nextCaseStyle.col_items}>
                                            <p className={nextCaseStyle.m_96}
                                            style={{marginTop:"64px !important"}}>
                                                Customized workflow
                                            </p>

                                            <p className={nextCaseStyle.m_97}>
                                                Customized workflow and scheduling capabilities of the data
                                            </p>
                                        </div>
                                  </Col>

                                    <Col md="3">
                                        <div className={nextCaseStyle.col_items}>
                                                <p className={nextCaseStyle.m_96}>
                                                Design and UI
                                                </p>

                                                <p className={nextCaseStyle.m_97}>
                                                Better and lucrative Design and UI for nice and easy user access
                                                </p>
                                            </div>                            
                                        <div className={nextCaseStyle.col_items}>
                                                <p className={nextCaseStyle.m_96}
                                                style={{marginTop:"64px !important"}}>
                                                    Easy Input
                                                </p>

                                                <p className={nextCaseStyle.m_97}>
                                                Simplest way to put Data from any where and any place
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
                            <div style={{width:'60%',paddingTop:'30px',marginRight:'5px'}}>
                                <img src={'../../content_image/legal-case.jpg'}
                                    style={{width:'90%',
                                    boxShadow: '-40px 40px 160px 0 rgba(0, 0, 0, 0.08), -8px 8px 15px 0 rgba(120, 120, 120, 0.04), 3px 3px 30px 0 rgba(0, 0, 0, 0.04) !important'}}
                                />
                            </div>
                            <div style={{width:'35%',paddingTop:'50px'}}>
                                <h2 className={nextCaseStyle.sec5_title}>
                                    <b>Beautiful</b> dynamic statements
                                </h2>
                                <h3 className={nextCaseStyle.sec4_title_1}>
                                    Your reports, the way you like them.
                                </h3>
                                <p className={nextCaseStyle.sec4_title_2}
                                style={{fontSize:'15px'}}
                                >
                                    Increased productivity enables greater profitability. By investing in NexCase Book today, 
                                    you are securing the future. If you are depending on papers, you could be left without retrievable backups easily. 
                                </p>
                                {/* <p className={nextCaseStyle.sec4_title_3}
                                style={{fontSize:'15px'}}>
                                Quickly filter, zoom, annotate and compare any data.
                                </p>
                                <p className={nextCaseStyle.sec4_title_3}
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
                            <h2 className={nextCaseStyle.sec6_title}>
                                Stop recoding transactions manually
                            </h2>
                            <h4 className={nextCaseStyle.sec6_title_1}>
                                Integrated with other applications
                            </h4>
                        </div>
                        <div style={{padding:'20px'}}></div>
                        <Row>
                            <Col md="3" style={{paddingLeft:'15px',paddingRight:'15px'}}>
                                <Card style={{ width: '16rem' }}>
                                    <div className={nextCaseStyle.sec6_border_1}>                                   
                                    </div>
                                    <div style={{justifyContent: 'space-between !important'}}>
                                        <h4 className={nextCaseStyle.card_heading} 
                                            style={{display:'inline-block'}}
                                        >Micro Finance</h4> 
                                        <img src={'../../pricing/expenses.png'} style={{
                                            width:'50px',height:'50px',overflow:'hidden',
                                            marginTop:'-4px',float:'right'
                                        }}/>
                                    </div>
                                    <div></div>
                                    <div className={nextCaseStyle.card_body}
                                        style={{color: 'rgb(52, 58, 64)'}}
                                    >
                                        <p className={nextCaseStyle.card_p}>Uncomplicated software for managing finance operation</p>
                                    </div>

                                    <div className={nextCaseStyle.card_footer}>
                                        <div className={nextCaseStyle.card_footerLink}>
                                                <Link to="/Micro Finance" className={nextCaseStyle.link}>
                                                    more
                                                </Link>
                                            </div>
                                    </div>
                                </Card>
                            </Col>

                            <Col md="3" style={{paddingLeft:'15px',paddingRight:'15px'}}>
                                <Card style={{ width: '16rem' }}>
                                    <div className={nextCaseStyle.sec6_border_2}>                                    
                                    </div>
                                    <div style={{justifyContent: 'space-between !important'}}>
                                        <h4 className={nextCaseStyle.card_heading} 
                                            style={{display:'inline-block'}}
                                        >BizView</h4>
                                        <img src={'../../pricing/inventory.png'} style={{
                                                width:'50px',height:'50px',overflow:'hidden',
                                                marginTop:'-4px',float:'right'
                                            }}/>
                                    </div>

                                    <div className={nextCaseStyle.card_body}
                                        style={{color: 'rgb(52, 58, 64)'}}
                                    >
                                        <p className={nextCaseStyle.card_p}>Modernaize software for data analytics</p>
                                    </div>

                                    <div className={nextCaseStyle.card_footer}>
                                        <div className={nextCaseStyle.card_footerLink}>
                                                <Link to="/BizView" className={nextCaseStyle.link}>
                                                    more
                                                </Link>
                                            </div>
                                    </div>
                                </Card>
                            </Col>

                            <Col md="3" style={{paddingLeft:'15px',paddingRight:'15px'}}>
                                <Card style={{ width: '16rem' }}>
                                    <div className={nextCaseStyle.sec6_border_3}>                                    
                                    </div> 
                                    <div style={{justifyContent: 'space-between !important'}}>
                                        <h4 className={nextCaseStyle.card_heading} 
                                            style={{display:'inline-block'}}
                                        >NexComm Chatbot</h4>
                                        <img src={'../../pricing/point_of_sale.png'} style={{
                                            width:'50px',height:'50px',overflow:'hidden',
                                            marginTop:'-4px',float:'right'
                                        }}/>
                                    </div>
                                    <div className={nextCaseStyle.card_body}
                                        style={{color: 'rgb(52, 58, 64)'}}
                                    >
                                        <p className={nextCaseStyle.card_p}>An effortless software foe managing client relation</p>
                                    </div>

                                    <div className={nextCaseStyle.card_footer}>
                                        <div className={nextCaseStyle.card_footerLink}>
                                                <Link to="/NexComm Chatbot" className={nextCaseStyle.link}>
                                                    more
                                                </Link>
                                            </div>
                                    </div>
                                    
                                </Card>
                            </Col>

                            <Col md="3" style={{paddingLeft:'15px',paddingRight:'15px'}}>
                                <Card style={{ width: '16rem' }}>
                                    <div className={nextCaseStyle.sec6_border_4}>                                    
                                    </div>
                                    <div style={{justifyContent: 'space-between !important'}}>
                                        <h4 className={nextCaseStyle.card_heading} 
                                            style={{display:'inline-block'}}
                                        >Nexfleet</h4>
                                        <img src={'../../pricing/sale.png'} style={{
                                            width:'50px',height:'50px',overflow:'hidden',
                                            marginTop:'-4px',float:'right'
                                        }}/>
                                    </div>
                                    <div className={nextCaseStyle.card_body}
                                        style={{color: 'rgb(52, 58, 64)'}}
                                    >
                                        <p className={nextCaseStyle.card_p}>A complete fleet management software</p>
                                    </div>

                                    <div className={nextCaseStyle.card_footer}>
                                        <div className={nextCaseStyle.card_footerLink}>
                                                <Link to="/Nexfleet" className={nextCaseStyle.link}>
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
export default NexfleetPage
