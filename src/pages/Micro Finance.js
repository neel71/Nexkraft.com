import React,{Component} from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'

import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout'
import { Row, Col,Container,Card,Form,Button} from 'react-bootstrap'
import mFinanceStyle from './Micro-Finance.module.scss'
import headerStyle  from './Micro-Finance.module.scss'
import footerStyle  from './Micro-Finance.module.scss'
import SEO from "../components/seo"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudSunRain, faArrowDown,faArrowUp, faCaretDown} from '@fortawesome/free-solid-svg-icons'
import {} from '@fortawesome/free-regular-svg-icons'
import Footer from '../components/footer'
import Header from '../components/header_'
function MicroFinancePage () {
    return(
        <div>
            <Header/>
            <SEO title="Micro Finance" />
            <div>
                <section>
                    <Container>
                        <div style={{}}>
                            <h1 className={mFinanceStyle.title}>
                               
                                Uncomplicated software for <br/><strong>managing finance</strong> operation
                            </h1>
                            <h4 className={mFinanceStyle.title_2}>Make your finance operation easier than ever</h4>
                            {/* <div style={{    position: 'absolute',paddingTop: '350px'}}>
                                <Link to="/" className={mFinanceStyle.title_link}
                                style={{position: 'relative',overflow: 'hidden'}}    
                            >
                                Start Now - It's Free
                            </Link>
                            </div> */}
                        </div>
                    </Container>
                    <img src={'../../common_banner.jpg '} style={{width:'100%'}}/>
                </section>
            
                <section className={mFinanceStyle.sec3}>
                    <h2 className={mFinanceStyle.sec3_title}>
                    Popular <strong>features</strong> that will change your life
                    </h2>
                    <h4 className={mFinanceStyle.sec3_title_2}>All the time-saving tools you need to grow your business.</h4>
                    <Container>
                        <Row style={{textAlign:'center'}}>
                            <Col md="10" className={mFinanceStyle.row_col}>
                                <Row style={{height:'310px'}}>
                                    <Col md="3">
                                        <div className={mFinanceStyle.col_items}>
                                            <p className={mFinanceStyle.m_96}
                                            >
                                                DB Synchronization
                                            </p>

                                            <p className={mFinanceStyle.m_97}
                                            style={{fontSize:'15px'}}>
                                            Create a smart Database of employers and vehicles to minimize your effort
                                            </p>
                                        </div>
                                        <div className={mFinanceStyle.col_items}>
                                            <p className={mFinanceStyle.m_96} 
                                            style={{marginTop:"64px !important"}}
                                           >
                                                Assign Tasks
                                            </p>

                                            <p className={mFinanceStyle.m_97}>
                                                Assign tasks individually to get maximum productivity in less effort
                                            </p>
                                        </div>
                                    </Col>
                                    <Col md="3">
                                        <div className={mFinanceStyle.col_items}>
                                            <p className={mFinanceStyle.m_96}
                                            >
                                                Data Storage
                                            </p>

                                            <p className={mFinanceStyle.m_97}
                                            style={{fontSize:'15px'}}>
                                            	Most organizational data is stored in large databases in micro finance
                                            </p>
                                        </div>
                                        <div className={mFinanceStyle.col_items}>
                                            <p className={mFinanceStyle.m_96} 
                                            style={{marginTop:"64px !important"}}
                                           >
                                                User Environment
                                            </p>

                                            <p className={mFinanceStyle.m_97}>
                                                Software supports a multi-user environment for easy access
                                            </p>
                                        </div>
                                    </Col>

                                    
                                    <Col md="3">
                                        <div className={mFinanceStyle.col_items}>
                                            <p className={mFinanceStyle.m_96}>
                                                Language Compatibility
                                            </p>

                                            <p className={mFinanceStyle.m_97}>
                                                Micro Finance is Compatible with various programming languages
                                            </p>
                                        </div>                            
                                        <div className={mFinanceStyle.col_items}>
                                            <p className={mFinanceStyle.m_96}
                                            style={{marginTop:"64px !important"}}>
                                                Data Managing
                                            </p>

                                            <p className={mFinanceStyle.m_97}>
                                                Provides access to well-managed data and easily synchronized
                                            </p>
                                        </div>
                                    </Col>
                                    <Col md="3">
                                        <div className={mFinanceStyle.col_items}>
                                            <p className={mFinanceStyle.m_96}>
                                            Better View
                                            </p>

                                            <p className={mFinanceStyle.m_97}>
                                            Better and lucrative Design and UI for nice and easy user access
                                            </p>
                                        </div>                            
                                        <div className={mFinanceStyle.col_items}>
                                            <p className={mFinanceStyle.m_96}
                                            style={{marginTop:"64px !important"}}>
                                                Data visualization
                                            </p>

                                            <p className={mFinanceStyle.m_97}>
                                                Simplest way to view report and company Data and easily visualized
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
                                <img src={'../../Micro Finance/M_Finance.jpg'}
                                    style={{width:'90%',height:'auto',
                                    boxShadow: '-40px 40px 160px 0 rgba(0, 0, 0, 0.08), -8px 8px 15px 0 rgba(120, 120, 120, 0.04), 3px 3px 30px 0 rgba(0, 0, 0, 0.04) !important'}}
                                />
                            </div>
                            <div style={{width:'35%',paddingTop:'50px'}}>
                                <h2 className={mFinanceStyle.sec5_title}>
                                    <b>Beautiful</b> dynamic statements
                                </h2>
                                <h3 className={mFinanceStyle.sec4_title_1}>
                                    Your reports, the way you like them.
                                </h3>
                                <p className={mFinanceStyle.sec4_title_2}
                                style={{fontSize:'15px'}}
                                >
                                    Effective micro finance management is no easy feat. 
                                    Micro Finance is a solution available to manage anyone work more efficiently, 
                                    saving your time and money. It provides a suite of tools to help anyone control their processes.
                                </p>
                                {/* <p className={mFinanceStyle.sec4_title_3}
                                style={{fontSize:'15px'}}>
                                Quickly filter, zoom, annotate and compare any data.
                                </p>
                                <p className={mFinanceStyle.sec4_title_3}
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
                            <h2 className={mFinanceStyle.sec6_title}>
                                Stop recoding transactions manually
                            </h2>
                            <h4 className={mFinanceStyle.sec6_title_1}>
                                Integrated with other applications
                            </h4>
                        </div>
                        <div style={{padding:'20px'}}></div>
                        <Row>
                            <Col md="3" style={{paddingLeft:'15px',paddingRight:'15px'}}>
                                <Card style={{ width: '16rem' }}>
                                    <div className={mFinanceStyle.sec6_border_1}>                                   
                                    </div>
                                    <div style={{justifyContent: 'space-between !important'}}>
                                        <h4 className={mFinanceStyle.card_heading} 
                                            style={{display:'inline-block'}}
                                        >iFleet</h4> 
                                        <img src={'../../pricing/expenses.png'} style={{
                                            width:'50px',height:'50px',overflow:'hidden',
                                            marginTop:'-4px',float:'right'
                                        }}/>
                                    </div>
                                    <div></div>
                                    <div className={mFinanceStyle.card_body}
                                        style={{color: 'rgb(52, 58, 64)'}}
                                    >
                                        <p className={mFinanceStyle.card_p}>A modern fleet management software</p>
                                    </div>

                                    <div className={mFinanceStyle.card_footer}>
                                        <div className={mFinanceStyle.card_footerLink}>
                                                <Link to="/iFleet" className={mFinanceStyle.link}>
                                                    more
                                                </Link>
                                            </div>
                                    </div>
                                </Card>
                            </Col>

                            <Col md="3" style={{paddingLeft:'15px',paddingRight:'15px'}}>
                                <Card style={{ width: '16rem' }}>
                                    <div className={mFinanceStyle.sec6_border_2}>                                    
                                    </div>
                                    <div style={{justifyContent: 'space-between !important'}}>
                                        <h4 className={mFinanceStyle.card_heading} 
                                            style={{display:'inline-block'}}
                                        >BizView</h4>
                                        <img src={'../../pricing/inventory.png'} style={{
                                                width:'50px',height:'50px',overflow:'hidden',
                                                marginTop:'-4px',float:'right'
                                            }}/>
                                    </div>

                                    <div className={mFinanceStyle.card_body}
                                        style={{color: 'rgb(52, 58, 64)'}}
                                    >
                                        <p className={mFinanceStyle.card_p}>Modernize software for data analytics</p>
                                    </div>

                                    <div className={mFinanceStyle.card_footer}>
                                        <div className={mFinanceStyle.card_footerLink}>
                                                <Link to="/BizView" className={mFinanceStyle.link}>
                                                    more
                                                </Link>
                                            </div>
                                    </div>
                                </Card>
                            </Col>

                            <Col md="3" style={{paddingLeft:'15px',paddingRight:'15px'}}>
                                <Card style={{ width: '16rem' }}>
                                    <div className={mFinanceStyle.sec6_border_3}>                                    
                                    </div> 
                                    <div style={{justifyContent: 'space-between !important'}}>
                                        <h4 className={mFinanceStyle.card_heading} 
                                            style={{display:'inline-block'}}
                                        >NexFleet</h4>
                                        <img src={'../../pricing/point_of_sale.png'} style={{
                                            width:'50px',height:'50px',overflow:'hidden',
                                            marginTop:'-4px',float:'right'
                                        }}/>
                                    </div>
                                    <div className={mFinanceStyle.card_body}
                                        style={{color: 'rgb(52, 58, 64)'}}
                                    >
                                        <p className={mFinanceStyle.card_p}>A complete fleet management software</p>
                                    </div>

                                    <div className={mFinanceStyle.card_footer}>
                                        <div className={mFinanceStyle.card_footerLink}>
                                                <Link to="/Nexfleet" className={mFinanceStyle.link}>
                                                    more
                                                </Link>
                                            </div>
                                    </div>
                                    
                                </Card>
                            </Col>

                            <Col md="3" style={{paddingLeft:'15px',paddingRight:'15px'}}>
                                <Card style={{ width: '16rem' }}>
                                    <div className={mFinanceStyle.sec6_border_4}>                                    
                                    </div>
                                    <div style={{justifyContent: 'space-between !important'}}>
                                        <h4 className={mFinanceStyle.card_heading} 
                                            style={{display:'inline-block'}}
                                        >Data Tools</h4>
                                        <img src={'../../pricing/sale.png'} style={{
                                            width:'50px',height:'50px',overflow:'hidden',
                                            marginTop:'-4px',float:'right'
                                        }}/>
                                    </div>
                                    <div className={mFinanceStyle.card_body}
                                        style={{color: 'rgb(52, 58, 64)'}}
                                    >
                                        <p className={mFinanceStyle.card_p}>A modern survey management software</p>
                                    </div>

                                    <div className={mFinanceStyle.card_footer}>
                                        <div className={mFinanceStyle.card_footerLink}>
                                                <Link to="/Data Tools" className={mFinanceStyle.link}>
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
export default MicroFinancePage
