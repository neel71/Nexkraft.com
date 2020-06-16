import React,{Component} from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'

import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout'
import { Row, Col,Container,Card,Form,Button} from 'react-bootstrap'
import nexParcStyle from './nexParc.module.scss'
import headerStyle from './nexParc.module.scss'
import footerStyle from './nexParc.module.scss'
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
            <SEO title="nexParc" />
            <div>
                <section>
                    <Container>
                        <div style={{}}>
                            <h1 className={nexParcStyle.title}>
                                
                                A modern <strong>parking solution</strong> <br/> apps
                            </h1>
                            <h4 className={nexParcStyle.title_2}>Save vehicle, Save time, Save money</h4>
                            {/* <div style={{    position: 'absolute',paddingTop: '350px'}}>
                                <Link to="/" className={nexParcStyle.title_link}
                                style={{position: 'relative',overflow: 'hidden'}}    
                            >
                                Start Now - It's Free
                            </Link>
                            </div> */}
                        </div>
                    </Container>
                    <img src={'../../common_banner.jpg'} style={{width:'100%'}}/>
                </section>
            
                <section className={nexParcStyle.sec3}>
                    <h2 className={nexParcStyle.sec3_title}>
                    Popular <strong>features</strong> that will change your parking
                    </h2>
                    <h4 className={nexParcStyle.sec3_title_2}>All the time-saving tools you need parking solution simpler.</h4>
                    <Container>
                        <Row style={{textAlign:'center'}}>
                            <Col md="10" className={nexParcStyle.row_col}>
                                <Row style={{height:'310px'}}>
                                    <Col md="3">
                                        <div className={nexParcStyle.col_items}>
                                            <p className={nexParcStyle.m_96}
                                            >
                                                Parking solution
                                            </p>

                                            <p className={nexParcStyle.m_97}
                                            style={{fontSize:'15px'}}>
                                            Find parking in seconds wherever and whenever you need
                                            </p>
                                        </div>
                                        <div className={nexParcStyle.col_items}>
                                            <p className={nexParcStyle.m_96} 
                                            style={{marginTop:"64px !important"}}
                                           >
                                                Easily Available 
                                            </p>

                                            <p className={nexParcStyle.m_97}>
                                            Enjoy peace of mind with information on availability, restrictions and directions
                                            </p>
                                        </div>
                                    </Col>

                                    <Col md="3">
                                        <div className={nexParcStyle.col_items}>
                                            <p className={nexParcStyle.m_96}
                                            >
                                                Simple Interface
                                            </p>

                                            <p className={nexParcStyle.m_97}
                                            style={{fontSize:'15px'}}>
                                                nexParc has Simple and intuitive interface for your easy parking solution
                                            </p>
                                        </div>
                                        <div className={nexParcStyle.col_items}>
                                            <p className={nexParcStyle.m_96} 
                                            style={{marginTop:"64px !important"}}
                                           >
                                                Push Notification 
                                            </p>

                                            <p className={nexParcStyle.m_97}>
                                                Personalized push notifications for instant alert and for proper security
                                            </p>
                                        </div>
                                    </Col>
                                    
                                    <Col md="3">
                                        <div className={nexParcStyle.col_items}>
                                            <p className={nexParcStyle.m_96}>
                                            Easy Filtering 
                                            </p>

                                            <p className={nexParcStyle.m_97}>
                                                Filter by price or distance for easy usage and in less effort for instant result
                                            </p>
                                        </div>                            
                                        <div className={nexParcStyle.col_items}>
                                            <p className={nexParcStyle.m_96}
                                            style={{marginTop:"64px !important"}}>
                                                Parking Reservation

                                            </p>

                                            <p className={nexParcStyle.m_97}>
                                                On-demand parking reservation from anywhere & anytime
                                            </p>
                                        </div>
                                    </Col>

                                    <Col md="3">
                                        <div className={nexParcStyle.col_items}>
                                            <p className={nexParcStyle.m_96}>
                                            Easy Reservation 
                                            </p>

                                            <p className={nexParcStyle.m_97}>
                                            Reserve and pay for parking easily with one app from anywhere
                                            </p>
                                        </div>                            
                                        <div className={nexParcStyle.col_items}>
                                            <p className={nexParcStyle.m_96}
                                            style={{marginTop:"64px !important"}}>
                                                Easy Guidelines
                                            </p>

                                            <p className={nexParcStyle.m_97}>
                                            Simple instructions and directions fro parking destination
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
                                <img src={'../../content_image/Nexparc.jpg'}
                                    style={{width:'50%',height:'auto',
                                    boxShadow: '-40px 40px 160px 0 rgba(0, 0, 0, 0.08), -8px 8px 15px 0 rgba(120, 120, 120, 0.04), 3px 3px 30px 0 rgba(0, 0, 0, 0.04) !important'}}
                                />
                            </div>
                            <div style={{width:'35%',paddingTop:'50px'}}>
                                <h2 className={nexParcStyle.sec5_title}>
                                    <b>Beautiful</b> dynamic statements
                                </h2>
                                <h3 className={nexParcStyle.sec4_title_1}>
                                    Your reports, the way you like them.
                                </h3>
                                <p className={nexParcStyle.sec4_title_2}
                                style={{fontSize:'15px'}}
                                >
                                    Starting from parking solutions, we are offering a variety of parking related services to our customers. Requesting any of these services is very simple, just choose your desired service from the list, fill out your basic information and our team will reach you.
                                </p>
                                {/* <p className={nexParcStyle.sec4_title_3}
                                style={{fontSize:'15px'}}>
                                Quickly filter, zoom, annotate and compare any data.
                                </p>
                                <p className={nexParcStyle.sec4_title_3}
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
                            <h2 className={nexParcStyle.sec6_title}>
                                Stop recoding transactions manually
                            </h2>
                            <h4 className={nexParcStyle.sec6_title_1}>
                                Integrated with other applications
                            </h4>
                        </div>
                        <div style={{padding:'20px'}}></div>
                        <Row>
                            <Col md="3" style={{paddingLeft:'15px',paddingRight:'15px'}}>
                                <Card style={{ width: '16rem' }}>
                                    <div className={nexParcStyle.sec6_border_1}>                                   
                                    </div>
                                    <div style={{justifyContent: 'space-between !important'}}>
                                        <h4 className={nexParcStyle.card_heading} 
                                            style={{display:'inline-block'}}
                                        >Pick & Drop</h4> 
                                        <img src={'../../pricing/expenses.png'} style={{
                                            width:'50px',height:'50px',overflow:'hidden',
                                            marginTop:'-4px',float:'right'
                                        }}/>
                                    </div>
                                    <div></div>
                                    <div className={nexParcStyle.card_body}
                                        style={{color: 'rgb(52, 58, 64)'}}
                                    >
                                        <p className={nexParcStyle.card_p}>Track expenses and re-invoice them in batches.</p>
                                    </div>

                                    <div className={nexParcStyle.card_footer}>
                                        <div className={nexParcStyle.card_footerLink}>
                                                <Link to="/Pick & Drop" className={nexParcStyle.link}>
                                                    more
                                                </Link>
                                            </div>
                                    </div>
                                </Card>
                            </Col>

                            <Col md="3" style={{paddingLeft:'15px',paddingRight:'15px'}}>
                                <Card style={{ width: '16rem' }}>
                                    <div className={nexParcStyle.sec6_border_2}>                                    
                                    </div>
                                    <div style={{justifyContent: 'space-between !important'}}>
                                        <h4 className={nexParcStyle.card_heading} 
                                            style={{display:'inline-block'}}
                                        >Windows PID</h4>
                                        <img src={'../../pricing/inventory.png'} style={{
                                                width:'50px',height:'50px',overflow:'hidden',
                                                marginTop:'-4px',float:'right'
                                            }}/>
                                    </div>

                                    <div className={nexParcStyle.card_body}
                                        style={{color: 'rgb(52, 58, 64)'}}
                                    >
                                        <p className={nexParcStyle.card_p}>An authenticated windows product checker app</p>
                                    </div>

                                    <div className={nexParcStyle.card_footer}>
                                        <div className={nexParcStyle.card_footerLink}>
                                                <Link to="/Windows PID" className={nexParcStyle.link}>
                                                    more
                                                </Link>
                                            </div>
                                    </div>
                                </Card>
                            </Col>

                            <Col md="3" style={{paddingLeft:'15px',paddingRight:'15px'}}>
                                <Card style={{ width: '16rem' }}>
                                    <div className={nexParcStyle.sec6_border_3}>                                    
                                    </div> 
                                    <div style={{justifyContent: 'space-between !important'}}>
                                        <h4 className={nexParcStyle.card_heading} 
                                            style={{display:'inline-block'}}
                                        >Sales Combat</h4>
                                        <img src={'../../pricing/point_of_sale.png'} style={{
                                            width:'50px',height:'50px',overflow:'hidden',
                                            marginTop:'-4px',float:'right'
                                        }}/>
                                    </div>
                                    <div className={nexParcStyle.card_body}
                                        style={{color: 'rgb(52, 58, 64)'}}
                                    >
                                        <p className={nexParcStyle.card_p}>A complete modern sales tracking app</p>
                                    </div>

                                    <div className={nexParcStyle.card_footer}>
                                        <div className={nexParcStyle.card_footerLink}>
                                                <Link to="/Sales Combat" className={nexParcStyle.link}>
                                                    more
                                                </Link>
                                            </div>
                                    </div>
                                    
                                </Card>
                            </Col>

                            <Col md="3" style={{paddingLeft:'15px',paddingRight:'15px'}}>
                                <Card style={{ width: '16rem' }}>
                                    <div className={nexParcStyle.sec6_border_4}>                                    
                                    </div>
                                    <div style={{justifyContent: 'space-between !important'}}>
                                        <h4 className={nexParcStyle.card_heading} 
                                            style={{display:'inline-block'}}
                                        >Defect Record</h4>
                                        <img src={'../../pricing/sale.png'} style={{
                                            width:'50px',height:'50px',overflow:'hidden',
                                            marginTop:'-4px',float:'right'
                                        }}/>
                                    </div>
                                    <div className={nexParcStyle.card_body}
                                        style={{color: 'rgb(52, 58, 64)'}}
                                    >
                                        <p className={nexParcStyle.card_p}>A complete defect record management app</p>
                                    </div>

                                    <div className={nexParcStyle.card_footer}>
                                        <div className={nexParcStyle.card_footerLink}>
                                                <Link to="/Defect part record" className={nexParcStyle.link}>
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
