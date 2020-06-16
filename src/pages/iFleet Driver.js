import React,{Component} from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'

import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout'
import { Row, Col,Container,Card,Form,Button} from 'react-bootstrap'
import iFleetDriverStyle from './iFleet Driver.module.scss'
import headerStyle from './iFleet Driver.module.scss'
import footerStyle from './iFleet Driver.module.scss'
import SEO from "../components/seo"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudSunRain, faArrowDown,faArrowUp, faCaretDown} from '@fortawesome/free-solid-svg-icons'
import {} from '@fortawesome/free-regular-svg-icons'
import Footer from '../components/footer'
import Header from '../components/header_'
function AccountingPage () {
    return(
        <div>
            <Header/>
            <SEO title="iFleet Driver" />
            <div>
                <section>
                    <Container>
                        <div style={{}}>
                            <h1 className={iFleetDriverStyle.title}>
                                
                                
                                A systematic <strong>driver<br/> management</strong> apps
                            </h1>
                            <h4 className={iFleetDriverStyle.title_2}>Save time by using updated tools</h4>
                            {/* <div style={{    position: 'absolute',paddingTop: '350px'}}>
                                <Link to="/" className={iFleetDriverStyle.title_link}
                                style={{position: 'relative',overflow: 'hidden'}}    
                            >
                                Start Now - It's Free
                            </Link>
                            </div> */}
                        </div>
                    </Container>
                    <img src={'../../common_banner.jpg'} style={{width:'100%'}}/>
                </section>
            
                <section className={iFleetDriverStyle.sec3}>
                    <h2 className={iFleetDriverStyle.sec3_title}>
                    Popular <strong>features</strong> that will change your parking
                    </h2>
                    <h4 className={iFleetDriverStyle.sec3_title_2}>All the time-saving tools you need parking solution simpler.</h4>
                    <Container>
                        <Row style={{textAlign:'center'}}>
                            <Col md="10" className={iFleetDriverStyle.row_col}>
                                <Row style={{height:'310px'}}>
                                    <Col md="3">
                                        <div className={iFleetDriverStyle.col_items}>
                                            <p className={iFleetDriverStyle.m_96}
                                            >
                                                Checkup vehicle
                                            </p>

                                            <p className={iFleetDriverStyle.m_97}
                                            style={{fontSize:'15px'}}>
                                                Keep drivers log in to checkup vehicle for extensive performance
                                            </p>
                                        </div>
                                        <div className={iFleetDriverStyle.col_items}>
                                            <p className={iFleetDriverStyle.m_96} 
                                            style={{marginTop:"64px !important"}}
                                           >
                                                Report Summary
                                            </p>

                                            <p className={iFleetDriverStyle.m_97}>
                                                Easy Requisitions, non-requisitions, and Summary for regular notification
                                            </p>
                                        </div>
                                    </Col>

                                    <Col md="3">
                                        <div className={iFleetDriverStyle.col_items}>
                                            <p className={iFleetDriverStyle.m_96}
                                            >
                                                Location Update
                                            </p>

                                            <p className={iFleetDriverStyle.m_97}
                                            style={{fontSize:'15px'}}>
                                                Update location information in 30 seconds for daily security and info
                                            </p>
                                        </div>
                                        <div className={iFleetDriverStyle.col_items}>
                                            <p className={iFleetDriverStyle.m_96} 
                                            style={{marginTop:"64px !important"}}
                                           >
                                                Feature  Monitoring
                                            </p>

                                            <p className={iFleetDriverStyle.m_97}>
                                                Fuel consumption, Price, Receipt monitoring feature for better costing
                                            </p>
                                        </div>
                                    </Col>
                                    
                                    <Col md="3">
                                        <div className={iFleetDriverStyle.col_items}>
                                            <p className={iFleetDriverStyle.m_96}>
                                            Emergency Options
                                            </p>

                                            <p className={iFleetDriverStyle.m_97}>
                                                iFleet driver has emergency option “SOS” for the drivers for safety
                                            </p>
                                        </div>                            
                                        <div className={iFleetDriverStyle.col_items}>
                                            <p className={iFleetDriverStyle.m_96}
                                            style={{marginTop:"64px !important"}}>
                                                Cost Summary
                                            </p>

                                            <p className={iFleetDriverStyle.m_97}>
                                                iFleet Driver has cost information and trip summery for drivers
                                            </p>
                                        </div>
                                    </Col>

                                    <Col md="3">
                                        <div className={iFleetDriverStyle.col_items}>
                                            <p className={iFleetDriverStyle.m_96}>
                                            Easy requisition
                                            </p>

                                            <p className={iFleetDriverStyle.m_97}>
                                            User details, PIN and trip info for requisition and for easy access
                                            </p>
                                        </div>                            
                                        <div className={iFleetDriverStyle.col_items}>
                                            <p className={iFleetDriverStyle.m_96}
                                            style={{marginTop:"64px !important"}}>
                                                Real-Time calculation
                                            </p>

                                            <p className={iFleetDriverStyle.m_97}>
                                               Real-Time location and kilometers of the vehicle for perfect milage
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
                        <div style={{width:'5%'}}></div>
                            <div style={{width:'60%',paddingTop:'30px',marginRight:'5px'}}>
                                <img src={'../../content_image/iFleet Driver.jpg'}
                                    style={{width:'50%',height:'auto',
                                    boxShadow: '-40px 40px 160px 0 rgba(0, 0, 0, 0.08), -8px 8px 15px 0 rgba(120, 120, 120, 0.04), 3px 3px 30px 0 rgba(0, 0, 0, 0.04) !important'}}
                                />
                            </div>
                            <div style={{width:'35%',paddingTop:'50px'}}>
                                <h2 className={iFleetDriverStyle.sec5_title}>
                                    <b>Beautiful</b> dynamic statements
                                </h2>
                                <h3 className={iFleetDriverStyle.sec4_title_1}>
                                    Your reports, the way you like them.
                                </h3>
                                <p className={iFleetDriverStyle.sec4_title_2}
                                style={{fontSize:'15px'}}
                                >
                                    The logbook is a detailed record of all trips for any type of vehicle for the organization and digital logbook software is a platform to give entry all the details digitally.

                                </p>
                                {/* <p className={iFleetDriverStyle.sec4_title_3}
                                style={{fontSize:'15px'}}>
                                Quickly filter, zoom, annotate and compare any data.
                                </p>
                                <p className={iFleetDriverStyle.sec4_title_3}
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
                            <h2 className={iFleetDriverStyle.sec6_title}>
                                Stop recoding transactions manually
                            </h2>
                            <h4 className={iFleetDriverStyle.sec6_title_1}>
                                Integrated with other applications
                            </h4>
                        </div>
                        <div style={{padding:'20px'}}></div>
                        <Row>
                            <Col md="3" style={{paddingLeft:'15px',paddingRight:'15px'}}>
                                <Card style={{ width: '16rem' }}>
                                    <div className={iFleetDriverStyle.sec6_border_1}>                                   
                                    </div>
                                    <div style={{justifyContent: 'space-between !important'}}>
                                        <h4 className={iFleetDriverStyle.card_heading} 
                                            style={{display:'inline-block'}}
                                        >iFleet User</h4> 
                                        <img src={'../../pricing/expenses.png'} style={{
                                            width:'50px',height:'50px',overflow:'hidden',
                                            marginTop:'-4px',float:'right'
                                        }}/>
                                    </div>
                                    <div></div>
                                    <div className={iFleetDriverStyle.card_body}
                                        style={{color: 'rgb(52, 58, 64)'}}
                                    >
                                        <p className={iFleetDriverStyle.card_p}>A modern user management software</p>
                                    </div>

                                    <div className={iFleetDriverStyle.card_footer}>
                                        <div className={iFleetDriverStyle.card_footerLink}>
                                                <Link to="/iFleet User" className={iFleetDriverStyle.link}>
                                                    more
                                                </Link>
                                            </div>
                                    </div>
                                </Card>
                            </Col>

                            <Col md="3" style={{paddingLeft:'15px',paddingRight:'15px'}}>
                                <Card style={{ width: '16rem' }}>
                                    <div className={iFleetDriverStyle.sec6_border_2}>                                    
                                    </div>
                                    <div style={{justifyContent: 'space-between !important'}}>
                                        <h4 className={iFleetDriverStyle.card_heading} 
                                            style={{display:'inline-block'}}
                                        >Sales Combat</h4>
                                        <img src={'../../pricing/inventory.png'} style={{
                                                width:'50px',height:'50px',overflow:'hidden',
                                                marginTop:'-4px',float:'right'
                                            }}/>
                                    </div>

                                    <div className={iFleetDriverStyle.card_body}
                                        style={{color: 'rgb(52, 58, 64)'}}
                                    >
                                        <p className={iFleetDriverStyle.card_p}>A complete modern sales tracking apps</p>
                                    </div>

                                    <div className={iFleetDriverStyle.card_footer}>
                                        <div className={iFleetDriverStyle.card_footerLink}>
                                                <Link to="/Sales Combat" className={iFleetDriverStyle.link}>
                                                    more
                                                </Link>
                                            </div>
                                    </div>
                                </Card>
                            </Col>

                            <Col md="3" style={{paddingLeft:'15px',paddingRight:'15px'}}>
                                <Card style={{ width: '16rem' }}>
                                    <div className={iFleetDriverStyle.sec6_border_3}>                                    
                                    </div> 
                                    <div style={{justifyContent: 'space-between !important'}}>
                                        <h4 className={iFleetDriverStyle.card_heading} 
                                            style={{display:'inline-block'}}
                                        >Defect Record</h4>
                                        <img src={'../../pricing/point_of_sale.png'} style={{
                                            width:'50px',height:'50px',overflow:'hidden',
                                            marginTop:'-4px',float:'right'
                                        }}/>
                                    </div>
                                    <div className={iFleetDriverStyle.card_body}
                                        style={{color: 'rgb(52, 58, 64)'}}
                                    >
                                        <p className={iFleetDriverStyle.card_p}>An effortless defect record management app</p>
                                    </div>

                                    <div className={iFleetDriverStyle.card_footer}>
                                        <div className={iFleetDriverStyle.card_footerLink}>
                                                <Link to="/Defect part record" className={iFleetDriverStyle.link}>
                                                    more
                                                </Link>
                                            </div>
                                    </div>
                                    
                                </Card>
                            </Col>

                            <Col md="3" style={{paddingLeft:'15px',paddingRight:'15px'}}>
                                <Card style={{ width: '16rem' }}>
                                    <div className={iFleetDriverStyle.sec6_border_4}>                                    
                                    </div>
                                    <div style={{justifyContent: 'space-between !important'}}>
                                        <h4 className={iFleetDriverStyle.card_heading} 
                                            style={{display:'inline-block'}}
                                        >Pick & Drop</h4>
                                        <img src={'../../pricing/sale.png'} style={{
                                            width:'50px',height:'50px',overflow:'hidden',
                                            marginTop:'-4px',float:'right'
                                        }}/>
                                    </div>
                                    <div className={iFleetDriverStyle.card_body}
                                        style={{color: 'rgb(52, 58, 64)'}}
                                    >
                                        <p className={iFleetDriverStyle.card_p}>An unique modern time saving app</p>
                                    </div>

                                    <div className={iFleetDriverStyle.card_footer}>
                                        <div className={iFleetDriverStyle.card_footerLink}>
                                                <Link to="/Pick & Drop" className={iFleetDriverStyle.link}>
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
export default AccountingPage
