import React,{Component} from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'

import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout'
import { Row, Col,Container,Card,Form,Button} from 'react-bootstrap'
import iFleetUserStyle from './iFleet User.module.scss'
import headerStyle from './iFleet User.module.scss'
import footerStyle from './iFleet User.module.scss'
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
            <SEO title="iFleet User" />
            <div>
                <section>
                    <Container>
                        <div style={{}}>
                            <h1 className={iFleetUserStyle.title}>
                                
                            
                                A systematic <strong>user<br/> management</strong> apps
                            </h1>
                            <h4 className={iFleetUserStyle.title_2}>Save time by using updated tools</h4>
                            {/* <div style={{    position: 'absolute',paddingTop: '350px'}}>
                                <Link to="/" className={iFleetUserStyle.title_link}
                                style={{position: 'relative',overflow: 'hidden'}}    
                            >
                                Start Now - It's Free
                            </Link>
                            </div> */}
                        </div>
                    </Container>
                    <img src={'../../common_banner.jpg'} style={{width:'100%'}}/>
                </section>
               
                <section className={iFleetUserStyle.sec3}>
                    <h2 className={iFleetUserStyle.sec3_title}>
                    Popular <strong>features</strong> that will change your parking
                    </h2>
                    <h4 className={iFleetUserStyle.sec3_title_2}>All the time-saving tools you need parking solution simpler.</h4>
                    <Container>
                        <Row style={{textAlign:'center'}}>
                            <Col md="10" className={iFleetUserStyle.row_col}>
                                <Row style={{height:'310px'}}>
                                    <Col md="3">
                                        <div className={iFleetUserStyle.col_items}>
                                            <p className={iFleetUserStyle.m_96}
                                            >
                                                Vehicle detection system
                                            </p>

                                            <p className={iFleetUserStyle.m_97}
                                            style={{fontSize:'15px'}}>
                                                Entitled vehicle option which vehicle will be dedicated for the Users. 
                                            </p>
                                        </div>
                                        <div className={iFleetUserStyle.col_items}>
                                            <p className={iFleetUserStyle.m_96} 
                                            style={{marginTop:"64px !important"}}
                                           >
                                                Easy fuel loading
                                            </p>

                                            <p className={iFleetUserStyle.m_97}>
                                               Fuel Filling Notification to User within 30 Sec. 
                                            </p>
                                        </div>
                                    </Col>
                                    
                                    <Col md="3">
                                        <div className={iFleetUserStyle.col_items}>
                                            <p className={iFleetUserStyle.m_96}
                                            >
                                                Simple interface
                                            </p>

                                            <p className={iFleetUserStyle.m_97}
                                            style={{fontSize:'15px'}}>
                                                Simple and intuitive interface for users
                                            </p>
                                        </div>
                                        <div className={iFleetUserStyle.col_items}>
                                            <p className={iFleetUserStyle.m_96} 
                                            style={{marginTop:"64px !important"}}
                                           >
                                                Notifications
                                            </p>

                                            <p className={iFleetUserStyle.m_97}>
                                                Personalized push notifications for users 
                                            </p>
                                        </div>
                                    </Col>

                                    <Col md="3">
                                        <div className={iFleetUserStyle.col_items}>
                                            <p className={iFleetUserStyle.m_96}>
                                                Filtering
                                            </p>

                                            <p className={iFleetUserStyle.m_97}>
                                                Filter by price or distance for easy counting
                                            </p>
                                        </div>                            
                                        <div className={iFleetUserStyle.col_items}>
                                            <p className={iFleetUserStyle.m_96}
                                            style={{marginTop:"64px !important"}}>
                                                Reservation
                                            </p>

                                            <p className={iFleetUserStyle.m_97}>
                                                On-demand parking reservation for uses from any where
                                            </p>
                                        </div>
                                    </Col>

                                    <Col md="3">
                                        <div className={iFleetUserStyle.col_items}>
                                            <p className={iFleetUserStyle.m_96}>
                                            Easy vehicle location
                                            </p>

                                            <p className={iFleetUserStyle.m_97}>
                                             Real-time Location Info of the vehicle For User
                                            </p>
                                        </div>                            
                                        <div className={iFleetUserStyle.col_items}>
                                            <p className={iFleetUserStyle.m_96}
                                            style={{marginTop:"64px !important"}}>
                                                location update
                                            </p>

                                            <p className={iFleetUserStyle.m_97}>
                                                Car's location (Km) information updated in 30 Sec
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
                                <img src={'../../content_image/iFleet User.jpg'}
                                    style={{width:'50%',
                                    boxShadow: '-40px 40px 160px 0 rgba(0, 0, 0, 0.08), -8px 8px 15px 0 rgba(120, 120, 120, 0.04), 3px 3px 30px 0 rgba(0, 0, 0, 0.04) !important'}}
                                />
                            </div>
                            <div style={{width:'35%',paddingTop:'50px'}}>
                                <h2 className={iFleetUserStyle.sec5_title}>
                                    <b>Beautiful</b> dynamic statements
                                </h2>
                                <h3 className={iFleetUserStyle.sec4_title_1}>
                                    Your reports, the way you like them.
                                </h3>
                                <p className={iFleetUserStyle.sec4_title_2}
                                style={{fontSize:'15px'}}
                                >
                                    iFleet provides an easy-to-use platform that manage vehicles over their entire lifecycle, administration, financial controlling, fuel consumption reports, vehicle, and driver record, etc. 

                                </p>
                                {/* <p className={iFleetUserStyle.sec4_title_3}
                                style={{fontSize:'15px'}}>
                                Quickly filter, zoom, annotate and compare any data.
                                </p>
                                <p className={iFleetUserStyle.sec4_title_3}
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
                            <h2 className={iFleetUserStyle.sec6_title}>
                                Stop recoding transactions manually
                            </h2>
                            <h4 className={iFleetUserStyle.sec6_title_1}>
                                Integrated with other applications
                            </h4>
                        </div>
                        <div style={{padding:'20px'}}></div>
                        <Row>
                            <Col md="3" style={{paddingLeft:'15px',paddingRight:'15px'}}>
                                <Card style={{ width: '16rem' }}>
                                    <div className={iFleetUserStyle.sec6_border_1}>                                   
                                    </div>
                                    <div style={{justifyContent: 'space-between !important'}}>
                                        <h4 className={iFleetUserStyle.card_heading} 
                                            style={{display:'inline-block'}}
                                        >iFleet Driver</h4> 
                                        <img src={'../../pricing/expenses.png'} style={{
                                            width:'50px',height:'50px',overflow:'hidden',
                                            marginTop:'-4px',float:'right'
                                        }}/>
                                    </div>
                                    <div></div>
                                    <div className={iFleetUserStyle.card_body}
                                        style={{color: 'rgb(52, 58, 64)'}}
                                    >
                                        <p className={iFleetUserStyle.card_p}>A complete modern driver management apps</p>
                                    </div>

                                    <div className={iFleetUserStyle.card_footer}>
                                        <div className={iFleetUserStyle.card_footerLink}>
                                                <Link to="/iFleet Driver" className={iFleetUserStyle.link}>
                                                    more
                                                </Link>
                                            </div>
                                    </div>
                                </Card>
                            </Col>

                            <Col md="3" style={{paddingLeft:'15px',paddingRight:'15px'}}>
                                <Card style={{ width: '16rem' }}>
                                    <div className={iFleetUserStyle.sec6_border_2}>                                    
                                    </div>
                                    <div style={{justifyContent: 'space-between !important'}}>
                                        <h4 className={iFleetUserStyle.card_heading} 
                                            style={{display:'inline-block'}}
                                        >nexParc</h4>
                                        <img src={'../../pricing/inventory.png'} style={{
                                                width:'50px',height:'50px',overflow:'hidden',
                                                marginTop:'-4px',float:'right'
                                            }}/>
                                    </div>

                                    <div className={iFleetUserStyle.card_body}
                                        style={{color: 'rgb(52, 58, 64)'}}
                                    >
                                        <p className={iFleetUserStyle.card_p}>A modern complete parking solution app</p>
                                    </div>

                                    <div className={iFleetUserStyle.card_footer}>
                                        <div className={iFleetUserStyle.card_footerLink}>
                                                <Link to="/nexParc" className={iFleetUserStyle.link}>
                                                    more
                                                </Link>
                                            </div>
                                    </div>
                                </Card>
                            </Col>

                            <Col md="3" style={{paddingLeft:'15px',paddingRight:'15px'}}>
                                <Card style={{ width: '16rem' }}>
                                    <div className={iFleetUserStyle.sec6_border_3}>                                    
                                    </div> 
                                    <div style={{justifyContent: 'space-between !important'}}>
                                        <h4 className={iFleetUserStyle.card_heading} 
                                            style={{display:'inline-block'}}
                                        >Defect Record</h4>
                                        <img src={'../../pricing/point_of_sale.png'} style={{
                                            width:'50px',height:'50px',overflow:'hidden',
                                            marginTop:'-4px',float:'right'
                                        }}/>
                                    </div>
                                    <div className={iFleetUserStyle.card_body}
                                        style={{color: 'rgb(52, 58, 64)'}}
                                    >
                                        <p className={iFleetUserStyle.card_p}>A complete defect record management app</p>
                                    </div>

                                    <div className={iFleetUserStyle.card_footer}>
                                        <div className={iFleetUserStyle.card_footerLink}>
                                                <Link to="/Defect part record" className={iFleetUserStyle.link}>
                                                    more
                                                </Link>
                                            </div>
                                    </div>
                                    
                                </Card>
                            </Col>

                            <Col md="3" style={{paddingLeft:'15px',paddingRight:'15px'}}>
                                <Card style={{ width: '16rem' }}>
                                    <div className={iFleetUserStyle.sec6_border_4}>                                    
                                    </div>
                                    <div style={{justifyContent: 'space-between !important'}}>
                                        <h4 className={iFleetUserStyle.card_heading} 
                                            style={{display:'inline-block'}}
                                        >Pick & Drop</h4>
                                        <img src={'../../pricing/sale.png'} style={{
                                            width:'50px',height:'50px',overflow:'hidden',
                                            marginTop:'-4px',float:'right'
                                        }}/>
                                    </div>
                                    <div className={iFleetUserStyle.card_body}
                                        style={{color: 'rgb(52, 58, 64)'}}
                                    >
                                        <p className={iFleetUserStyle.card_p}>A complete unique modern time saving app</p>
                                    </div>

                                    <div className={iFleetUserStyle.card_footer}>
                                        <div className={iFleetUserStyle.card_footerLink}>
                                                <Link to="/Pick & Drop" className={iFleetUserStyle.link}>
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
