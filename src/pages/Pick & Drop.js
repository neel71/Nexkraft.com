import React,{Component} from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'

import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout'
import { Row, Col,Container,Card,Form,Button} from 'react-bootstrap'
import pickdropStyle from './Pick&Drop.module.scss'
import headerStyle from './Pick&Drop.module.scss'
import footerStyle from './Pick&Drop.module.scss'
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
            <SEO title="Pick & Drop" />
            <div>
                <section>
                    <Container>
                        <div style={{}}>
                            <h1 className={pickdropStyle.title}>
                                A <strong>unique</strong>,<strong>modern</strong><br/>
                                <strong>time saving</strong> apps
                            </h1>
                            <h4 className={pickdropStyle.title_2}>Do more, in less time.</h4>
                            {/* <div style={{    position: 'absolute',paddingTop: '350px'}}>
                                <Link to="/" className={pickdropStyle.title_link}
                                style={{position: 'relative',overflow: 'hidden'}}    
                            >
                                Start Now - It's Free
                            </Link>
                            </div> */}
                        </div>
                    </Container>
                    <img src={'../../common_banner.jpg'} style={{width:'100%'}}/>
                </section>
            
                <section className={pickdropStyle.sec3}>
                    <h2 className={pickdropStyle.sec3_title}>
                    Popular <strong>features</strong> that will change your life
                    </h2>
                    <h4 className={pickdropStyle.sec3_title_2}>All the time-saving tools you need to grow your business.</h4>
                    <Container>
                        <Row style={{textAlign:'center'}}>
                            <Col md="10" className={pickdropStyle.row_col}>
                                <Row style={{height:'310px'}}>
                                    <Col md="3">
                                        <div className={pickdropStyle.col_items}>
                                            <p className={pickdropStyle.m_96}
                                            >
                                                System Rating
                                            </p>

                                            <p className={pickdropStyle.m_97}
                                            style={{fontSize:'15px'}}>
                                            This app will allow you to Rate your driver system as per driver performance
                                            </p>
                                        </div>
                                        <div className={pickdropStyle.col_items}>
                                            <p className={pickdropStyle.m_96} 
                                            style={{marginTop:"64px !important"}}
                                           >
                                                Emergency Options
                                            </p>

                                            <p className={pickdropStyle.m_97}>
                                            pick & Drop will allow driver "SOS" for any sort of emergency situation.
                                            </p>
                                        </div>
                                    </Col>

                                    <Col md="3">
                                        <div className={pickdropStyle.col_items}>
                                            <p className={pickdropStyle.m_96}
                                            >
                                                Map Location
                                            </p>

                                            <p className={pickdropStyle.m_97}
                                            style={{fontSize:'15px'}}>
                                                Location of vehicle in google map for easy online searching system
                                            </p>
                                        </div>
                                        <div className={pickdropStyle.col_items}>
                                            <p className={pickdropStyle.m_96} 
                                            style={{marginTop:"64px !important"}}
                                           >
                                                Performance Rating
                                            </p>

                                            <p className={pickdropStyle.m_97}>
                                                Rating System for overall performance according to report 
                                            </p>
                                        </div>
                                    </Col>

                                    <Col md="3">
                                        <div className={pickdropStyle.col_items}>
                                            <p className={pickdropStyle.m_96}
                                            >
                                                Vehicle Options
                                            </p>

                                            <p className={pickdropStyle.m_97}
                                            style={{fontSize:'15px'}}>
                                                Dedicated vehicle option of pick & drop apps for all time services
                                            </p>
                                        </div>
                                        <div className={pickdropStyle.col_items}>
                                            <p className={pickdropStyle.m_96} 
                                            style={{marginTop:"64px !important"}}
                                           >
                                                Emergency Options
                                            </p>

                                            <p className={pickdropStyle.m_97}>
                                                Pick & Drop is easy to use and navigate vehicles for emergency situation
                                            </p>
                                        </div>
                                    </Col>
                                    
                                    <Col md="3">
                                        <div className={pickdropStyle.col_items}>
                                            <p className={pickdropStyle.m_96}>
                                            User & Driver Interaction 
                                            </p>

                                            <p className={pickdropStyle.m_97}>
                                            Dedicated users can directly call the dedicated driver
                                            any where any time.
                                            </p>
                                        </div>                            
                                        <div className={pickdropStyle.col_items}>
                                            <p className={pickdropStyle.m_96}
                                            style={{marginTop:"64px !important"}}>
                                                Successful Notification 
                                            </p>

                                            <p className={pickdropStyle.m_97}>
                                            Real time notification about the trip through sms and Email for user and Admin
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
                                <img src={'../../content_image/Pick & Drop.jpg'}
                                    style={{width:'50%',height:'auto',
                                    boxShadow: '-40px 40px 160px 0 rgba(0, 0, 0, 0.08), -8px 8px 15px 0 rgba(120, 120, 120, 0.04), 3px 3px 30px 0 rgba(0, 0, 0, 0.04) !important'}}
                                />
                            </div>
                            <div style={{width:'35%',paddingTop:'150px'}}>
                                <h2 className={pickdropStyle.sec5_title}>
                                    <b>Beautiful</b> dynamic statements
                                </h2>
                                <h3 className={pickdropStyle.sec4_title_1}>
                                    Your reports, the way you like them.
                                </h3>
                                <p className={pickdropStyle.sec4_title_2}
                                style={{fontSize:'15px'}}
                                >
                                   The Pick & Drop is a detailed record of all trips for any type of vehicle for the organization and digital logbook software is a platform to give entry all the details digitally. By using this Apps booking seats and others staff will be more flawless.

                                </p>
                                {/* <p className={pickdropStyle.sec4_title_3}
                                style={{fontSize:'15px'}}>
                                Quickly filter, zoom, annotate and compare any data.
                                </p>
                                <p className={pickdropStyle.sec4_title_3}
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
                            <h2 className={pickdropStyle.sec6_title}>
                                Stop recoding transactions manually
                            </h2>
                            <h4 className={pickdropStyle.sec6_title_1}>
                                Integrated with other applications
                            </h4>
                        </div>
                        <div style={{padding:'20px'}}></div>
                        <Row>
                            <Col md="3" style={{paddingLeft:'15px',paddingRight:'15px'}}>
                                <Card style={{ width: '16rem' }}>
                                    <div className={pickdropStyle.sec6_border_1}>                                   
                                    </div>
                                    <div style={{justifyContent: 'space-between !important'}}>
                                        <h4 className={pickdropStyle.card_heading} 
                                            style={{display:'inline-block'}}
                                        >iFleet Driver</h4> 
                                        <img src={'../../pricing/expenses.png'} style={{
                                            width:'50px',height:'50px',overflow:'hidden',
                                            marginTop:'-4px',float:'right'
                                        }}/>
                                    </div>
                                    <div></div>
                                    <div className={pickdropStyle.card_body}
                                        style={{color: 'rgb(52, 58, 64)'}}
                                    >
                                        <p className={pickdropStyle.card_p}>A modern complete Driver management app</p>
                                    </div>

                                    <div className={pickdropStyle.card_footer}>
                                        <div className={pickdropStyle.card_footerLink}>
                                                <Link to="/iFleet Driver" className={pickdropStyle.link}>
                                                    more
                                                </Link>
                                            </div>
                                    </div>
                                </Card>
                            </Col>

                            <Col md="3" style={{paddingLeft:'15px',paddingRight:'15px'}}>
                                <Card style={{ width: '16rem' }}>
                                    <div className={pickdropStyle.sec6_border_2}>                                    
                                    </div>
                                    <div style={{justifyContent: 'space-between !important'}}>
                                        <h4 className={pickdropStyle.card_heading} 
                                            style={{display:'inline-block'}}
                                        >iFleet User</h4>
                                        <img src={'../../pricing/inventory.png'} style={{
                                                width:'50px',height:'50px',overflow:'hidden',
                                                marginTop:'-4px',float:'right'
                                            }}/>
                                    </div>

                                    <div className={pickdropStyle.card_body}
                                        style={{color: 'rgb(52, 58, 64)'}}
                                    >
                                        <p className={pickdropStyle.card_p}>A complete modern user management app</p>
                                    </div>

                                    <div className={pickdropStyle.card_footer}>
                                        <div className={pickdropStyle.card_footerLink}>
                                                <Link to="/iFleet User" className={pickdropStyle.link}>
                                                    more
                                                </Link>
                                            </div>
                                    </div>
                                </Card>
                            </Col>

                            <Col md="3" style={{paddingLeft:'15px',paddingRight:'15px'}}>
                                <Card style={{ width: '16rem' }}>
                                    <div className={pickdropStyle.sec6_border_3}>                                    
                                    </div> 
                                    <div style={{justifyContent: 'space-between !important'}}>
                                        <h4 className={pickdropStyle.card_heading} 
                                            style={{display:'inline-block'}}
                                        >nexParc</h4>
                                        <img src={'../../pricing/point_of_sale.png'} style={{
                                            width:'50px',height:'50px',overflow:'hidden',
                                            marginTop:'-4px',float:'right'
                                        }}/>
                                    </div>
                                    <div className={pickdropStyle.card_body}
                                        style={{color: 'rgb(52, 58, 64)'}}
                                    >
                                        <p className={pickdropStyle.card_p}>A complete modern parking management app</p>
                                    </div>

                                    <div className={pickdropStyle.card_footer}>
                                        <div className={pickdropStyle.card_footerLink}>
                                                <Link to="/nexParc" className={pickdropStyle.link}>
                                                    more
                                                </Link>
                                            </div>
                                    </div>
                                    
                                </Card>
                            </Col>

                            <Col md="3" style={{paddingLeft:'15px',paddingRight:'15px'}}>
                                <Card style={{ width: '16rem' }}>
                                    <div className={pickdropStyle.sec6_border_4}>                                    
                                    </div>
                                    <div style={{justifyContent: 'space-between !important'}}>
                                        <h4 className={pickdropStyle.card_heading} 
                                            style={{display:'inline-block'}}
                                        >Windows PID</h4>
                                        <img src={'../../pricing/sale.png'} style={{
                                            width:'50px',height:'50px',overflow:'hidden',
                                            marginTop:'-4px',float:'right'
                                        }}/>
                                    </div>
                                    <div className={pickdropStyle.card_body}
                                        style={{color: 'rgb(52, 58, 64)'}}
                                    >
                                        <p className={pickdropStyle.card_p}>A complete windows product checker app</p>
                                    </div>

                                    <div className={pickdropStyle.card_footer}>
                                        <div className={pickdropStyle.card_footerLink}>
                                                <Link to="/Windows PID" className={pickdropStyle.link}>
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
