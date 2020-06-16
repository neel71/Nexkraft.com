import React,{Component} from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'

import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout'
import { Row, Col,Container,Card,Form,Button} from 'react-bootstrap'
import sCombatStyle from './Sales Combat.module.scss'
import headerStyle  from './Sales Combat.module.scss'
import footerStyle  from './Sales Combat.module.scss'
import SEO from "../components/seo"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudSunRain, faArrowDown,faArrowUp, faCaretDown} from '@fortawesome/free-solid-svg-icons'
import {} from '@fortawesome/free-regular-svg-icons'
import Footer from '../components/footer'
import Header from '../components/header_'
function SalesCombatPage () {
    return(
        <div>
            <Header/>
            <SEO title="Sales Combat" />
            <div>
                <section>
                    <Container>
                        <div style={{}}>
                            <h1 className={sCombatStyle.title}>
                                
                                A modern <strong>sales tracking</strong><br/> apps
                            </h1>
                            <h4 className={sCombatStyle.title_2}>Increase your Sales</h4>
                            {/* <div style={{    position: 'absolute',paddingTop: '350px'}}>
                                <Link to="/" className={sCombatStyle.title_link}
                                style={{position: 'relative',overflow: 'hidden'}}    
                            >
                                Start Now - It's Free
                            </Link>
                            </div> */}
                        </div>
                    </Container>
                    <img src={'../../common_banner.jpg'} style={{width:'100%'}}/>
                </section>
                                
                <section className={sCombatStyle.sec3}>
                    <h2 className={sCombatStyle.sec3_title}>
                    Popular <strong>features</strong> that will change your life
                    </h2>
                    <h4 className={sCombatStyle.sec3_title_2}>All the time-saving tools you need to grow your business.</h4>
                    <Container>
                        <Row style={{textAlign:'center'}}>
                            <Col md="10" className={sCombatStyle.row_col}>
                                <Row style={{height:'310px'}}>
                                    <Col md="3">
                                        <div className={sCombatStyle.col_items}>
                                            <p className={sCombatStyle.m_96}
                                            >
                                                Bar-code confirmation
                                            </p>

                                            <p className={sCombatStyle.m_97}
                                            style={{fontSize:'15px'}}>
                                            Manually enter the bar-code to confirm the digital selling with approval of administration
                                            </p>
                                        </div>
                                        <div className={sCombatStyle.col_items}>
                                            <p className={sCombatStyle.m_96} 
                                            style={{marginTop:"64px !important"}}
                                           >
                                                Profitable Information's
                                            </p>

                                            <p className={sCombatStyle.m_97}>
                                            Benefits and opportunities info by monthly basis and lifetime basis
                                            </p>
                                        </div>
                                    </Col>

                                    <Col md="3">
                                        <div className={sCombatStyle.col_items}>
                                            <p className={sCombatStyle.m_96}
                                            >
                                                Selling History
                                            </p>

                                            <p className={sCombatStyle.m_97}
                                            style={{fontSize:'15px'}}>
                                                Daily and monthly basis Selling History for increasing performance
                                            </p>
                                        </div>
                                        <div className={sCombatStyle.col_items}>
                                            <p className={sCombatStyle.m_96} 
                                            style={{marginTop:"64px !important"}}
                                           >
                                                Payment Status
                                            </p>

                                            <p className={sCombatStyle.m_97}>
                                                Real time payment status and the payment history for secure transactions
                                            </p>
                                        </div>
                                    </Col>

                                    <Col md="3">
                                        <div className={sCombatStyle.col_items}>
                                            <p className={sCombatStyle.m_96}
                                            >
                                                Payment Withdrawal
                                            </p>

                                            <p className={sCombatStyle.m_97}
                                            style={{fontSize:'15px'}}>
                                                Various payment withdrawal method and request for payment management digitally
                                            </p>
                                        </div>
                                        <div className={sCombatStyle.col_items}>
                                            <p className={sCombatStyle.m_96} 
                                            style={{marginTop:"64px !important"}}
                                           >
                                                Other Support
                                            </p>

                                            <p className={sCombatStyle.m_97}>
                                                Secured authentication, material app interface and live information.
                                            </p>
                                        </div>
                                    </Col>
                                    
                                    <Col md="3">
                                        <div className={sCombatStyle.col_items}>
                                            <p className={sCombatStyle.m_96}>
                                            security & Safety
                                            </p>

                                            <p className={sCombatStyle.m_97}>
                                            Users can update personal information’s for security and keep updated
                                            </p>
                                        </div>                            
                                        <div className={sCombatStyle.col_items}>
                                            <p className={sCombatStyle.m_96}
                                            style={{marginTop:"64px !important"}}>
                                                Performance Tracking
                                            </p>

                                            <p className={sCombatStyle.m_97}>
                                            Salespersons can keep track of other performances in competitive environment
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
                                <img src={'../../content_image/Sales Combat.jpg'}
                                    style={{width:'50%',
                                    boxShadow: '-40px 40px 160px 0 rgba(0, 0, 0, 0.08), -8px 8px 15px 0 rgba(120, 120, 120, 0.04), 3px 3px 30px 0 rgba(0, 0, 0, 0.04) !important'}}
                                />
                            </div>
                            <div style={{width:'35%',paddingTop:'50px'}}>
                                <h2 className={sCombatStyle.sec5_title}>
                                    <b>Beautiful</b> dynamic statements
                                </h2>
                                <h3 className={sCombatStyle.sec4_title_1}>
                                    Your reports, the way you like them.
                                </h3>
                                <p className={sCombatStyle.sec4_title_2}
                                style={{fontSize:'15px'}}
                                >
                                    Sales Combat provides a convenient platform that manage diverse functionalities and keep track of all probable calculation regarding the sale and maintenance of diverse products manufactured and distributed under the authorization of Kaspersky Limited.

                                </p>
                                {/* <p className={sCombatStyle.sec4_title_3}
                                style={{fontSize:'15px'}}>
                                Quickly filter, zoom, annotate and compare any data.
                                </p>
                                <p className={sCombatStyle.sec4_title_3}
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
                            <h2 className={sCombatStyle.sec6_title}>
                                Stop recoding transactions manually
                            </h2>
                            <h4 className={sCombatStyle.sec6_title_1}>
                                Integrated with other applications
                            </h4>
                        </div>
                        <div style={{padding:'20px'}}></div>
                        <Row>
                            <Col md="3" style={{paddingLeft:'15px',paddingRight:'15px'}}>
                                <Card style={{ width: '16rem' }}>
                                    <div className={sCombatStyle.sec6_border_1}>                                   
                                    </div>
                                    <div style={{justifyContent: 'space-between !important'}}>
                                        <h4 className={sCombatStyle.card_heading} 
                                            style={{display:'inline-block'}}
                                        >Defect Record</h4> 
                                        <img src={'../../pricing/expenses.png'} style={{
                                            width:'50px',height:'50px',overflow:'hidden',
                                            marginTop:'-4px',float:'right'
                                        }}/>
                                    </div>
                                    <div></div>
                                    <div className={sCombatStyle.card_body}
                                        style={{color: 'rgb(52, 58, 64)'}}
                                    >
                                        <p className={sCombatStyle.card_p}>A complete defect record management software</p>
                                    </div>

                                    <div className={sCombatStyle.card_footer}>
                                        <div className={sCombatStyle.card_footerLink}>
                                                <Link to="/Defect part record" className={sCombatStyle.link}>
                                                    more
                                                </Link>
                                            </div>
                                    </div>
                                </Card>
                            </Col>

                            <Col md="3" style={{paddingLeft:'15px',paddingRight:'15px'}}>
                                <Card style={{ width: '16rem' }}>
                                    <div className={sCombatStyle.sec6_border_2}>                                    
                                    </div>
                                    <div style={{justifyContent: 'space-between !important'}}>
                                        <h4 className={sCombatStyle.card_heading} 
                                            style={{display:'inline-block'}}
                                        >Pick & Drop</h4>
                                        <img src={'../../pricing/inventory.png'} style={{
                                                width:'50px',height:'50px',overflow:'hidden',
                                                marginTop:'-4px',float:'right'
                                            }}/>
                                    </div>

                                    <div className={sCombatStyle.card_body}
                                        style={{color: 'rgb(52, 58, 64)'}}
                                    >
                                        <p className={sCombatStyle.card_p}>A complete unique modern time saving app</p>
                                    </div>

                                    <div className={sCombatStyle.card_footer}>
                                        <div className={sCombatStyle.card_footerLink}>
                                                <Link to="/Pick & Drop" className={sCombatStyle.link}>
                                                    more
                                                </Link>
                                            </div>
                                    </div>
                                </Card>
                            </Col>

                            <Col md="3" style={{paddingLeft:'15px',paddingRight:'15px'}}>
                                <Card style={{ width: '16rem' }}>
                                    <div className={sCombatStyle.sec6_border_3}>                                    
                                    </div> 
                                    <div style={{justifyContent: 'space-between !important'}}>
                                        <h4 className={sCombatStyle.card_heading} 
                                            style={{display:'inline-block'}}
                                        >nexParc</h4>
                                        <img src={'../../pricing/point_of_sale.png'} style={{
                                            width:'50px',height:'50px',overflow:'hidden',
                                            marginTop:'-4px',float:'right'
                                        }}/>
                                    </div>
                                    <div className={sCombatStyle.card_body}
                                        style={{color: 'rgb(52, 58, 64)'}}
                                    >
                                        <p className={sCombatStyle.card_p}>A complete modern parking solution app</p>
                                    </div>

                                    <div className={sCombatStyle.card_footer}>
                                        <div className={sCombatStyle.card_footerLink}>
                                                <Link to="/nexParc" className={sCombatStyle.link}>
                                                    more
                                                </Link>
                                            </div>
                                    </div>
                                    
                                </Card>
                            </Col>

                            <Col md="3" style={{paddingLeft:'15px',paddingRight:'15px'}}>
                                <Card style={{ width: '16rem' }}>
                                    <div className={sCombatStyle.sec6_border_4}>                                    
                                    </div>
                                    <div style={{justifyContent: 'space-between !important'}}>
                                        <h4 className={sCombatStyle.card_heading} 
                                            style={{display:'inline-block'}}
                                        >iFleet</h4>
                                        <img src={'../../pricing/sale.png'} style={{
                                            width:'50px',height:'50px',overflow:'hidden',
                                            marginTop:'-4px',float:'right'
                                        }}/>
                                    </div>
                                    <div className={sCombatStyle.card_body}
                                        style={{color: 'rgb(52, 58, 64)'}}
                                    >
                                        <p className={sCombatStyle.card_p}>A complete modern fleet management software</p>
                                    </div>

                                    <div className={sCombatStyle.card_footer}>
                                        <div className={sCombatStyle.card_footerLink}>
                                                <Link to="/iFleet" className={sCombatStyle.link}>
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
export default SalesCombatPage
