import React,{Component} from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'

import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout'
import { Row, Col,Container,Card,Form,Button} from 'react-bootstrap'
import wPIDStyle from './Windows PID.module.scss'
import headerStyle  from './Windows PID.module.scss'
import footerStyle  from './Windows PID.module.scss'
import SEO from "../components/seo"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudSunRain, faArrowDown,faArrowUp, faCaretDown} from '@fortawesome/free-solid-svg-icons'
import {} from '@fortawesome/free-regular-svg-icons'
import Footer from '../components/footer'
import Header from '../components/header_'
function WindowsPIDPage () {
    return(
        <div>
           <Header/>
            <SEO title="Windows PID" />
            <div>
                <section>
                    <Container>
                        <div style={{}}>
                            <h1 className={wPIDStyle.title}>
                                
                                A authenticated <strong>windows products</strong> checker apps
                            </h1>
                            <h4 className={wPIDStyle.title_2}>Save time, Save money</h4>
                            {/* <div style={{    position: 'absolute',paddingTop: '350px'}}>
                                <Link to="/" className={wPIDStyle.title_link}
                                style={{position: 'relative',overflow: 'hidden'}}    
                            >
                                Start Now - It's Free
                            </Link>
                            </div> */}
                        </div>
                    </Container>
                    <img src={'../../common_banner.jpg'} style={{width:'100%'}}/>
                </section>
                  
                <section className={wPIDStyle.sec3}>
                    <h2 className={wPIDStyle.sec3_title}>
                    Popular <strong>features</strong> that will change your life
                    </h2>
                    <h4 className={wPIDStyle.sec3_title_2}>All the time-saving tools you need to grow your business.</h4>
                    <Container>
                        <Row style={{textAlign:'center'}}>
                            <Col md="10" className={wPIDStyle.row_col}>
                                <Row style={{height:'310px'}}>
                                    <Col md="3">
                                        <div className={wPIDStyle.col_items}>
                                            <p className={wPIDStyle.m_96}
                                            >
                                                Validation Information
                                            </p>

                                            <p className={wPIDStyle.m_97}
                                            style={{fontSize:'15px'}}>
                                            Necessary information about the validated products for windows services
                                            </p>
                                        </div>
                                        <div  className={wPIDStyle.col_items}>
                                            <p className={wPIDStyle.m_96} 
                                            style={{marginTop:"64px !important"}}
                                           >
                                                Bar-code Authentication
                                            </p>

                                            <p className={wPIDStyle.m_97}>
                                            Authenticate The products via bar-code scanner mechanism for time saving
                                            </p>
                                        </div>
                                    </Col>

                                    <Col md="3">
                                        <div  className={wPIDStyle.col_items}>
                                            <p className={wPIDStyle.m_96}
                                            >
                                                Validate Products
                                            </p>

                                            <p className={wPIDStyle.m_97}
                                            style={{fontSize:'15px'}}>
                                                Attain necessary information about the validation of products 
                                            </p>
                                        </div>
                                        <div  className={wPIDStyle.col_items}>
                                            <p className={wPIDStyle.m_96} 
                                            style={{marginTop:"64px !important"}}
                                           >
                                                Collaboration
                                            </p>

                                            <p className={wPIDStyle.m_97}>
                                                Collaborate with colleagues anywhere through windows product services
                                            </p>
                                        </div>
                                    </Col>

                                    <Col md="3">
                                        <div  className={wPIDStyle.col_items}>
                                            <p className={wPIDStyle.m_96}
                                            >
                                                Managing users
                                            </p>

                                            <p className={wPIDStyle.m_97}
                                            style={{fontSize:'15px'}}>
                                                Managing customers or colleagues anywhere through windows services
                                            </p>
                                        </div>
                                        <div  className={wPIDStyle.col_items}>
                                            <p className={wPIDStyle.m_96} 
                                            style={{marginTop:"64px !important"}}
                                           >
                                                Post Notification
                                            </p>

                                            <p className={wPIDStyle.m_97}>
                                                Notification Center find most urgent posts fro emergency situation
                                            </p>
                                        </div>
                                    </Col>
                                    
                                    <Col md="3">
                                        <div  className={wPIDStyle.col_items}>
                                            <p className={wPIDStyle.m_96}>
                                            Authenticate verification
                                            </p>

                                            <p className={wPIDStyle.m_97}>
                                            Authenticate for verified user through generating OTP and validating user instantly
                                            </p>
                                        </div>                            
                                        <div  className={wPIDStyle.col_items}>
                                            <p className={wPIDStyle.m_96}
                                            style={{marginTop:"64px !important"}}>
                                                Product Differentiation
                                            </p>

                                            <p className={wPIDStyle.m_97}>
                                            Thus differentiating between verified and fake windows products
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
                        <div style={{width:'5%'}}></div>
                            <div style={{width:'60%',paddingTop:'30px',marginRight:'5px'}}>
                                <img src={'../../content_image/Windows PID.jpg'}
                                    style={{width:'50%',
                                    boxShadow: '-40px 40px 160px 0 rgba(0, 0, 0, 0.08), -8px 8px 15px 0 rgba(120, 120, 120, 0.04), 3px 3px 30px 0 rgba(0, 0, 0, 0.04) !important'}}
                                />
                            </div>
                            <div style={{width:'35%',paddingTop:'50px'}}>
                                <h2 className={wPIDStyle.sec5_title}>
                                    <b>Beautiful</b> dynamic statements
                                </h2>
                                <h3 className={wPIDStyle.sec4_title_1}>
                                    Your reports, the way you like them.
                                </h3>
                                <p className={wPIDStyle.sec4_title_2}
                                style={{fontSize:'15px'}}
                                >
                                    Windows Product Verifier provides an easy-to-use platform that verifies authenticated windows products. This software is a platform to attain information about genuine windows products digitally.
                                </p>
                                {/* <p className={wPIDStyle.sec4_title_3}
                                style={{fontSize:'15px'}}>
                                Quickly filter, zoom, annotate and compare any data.
                                </p>
                                <p className={wPIDStyle.sec4_title_3}
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
                            <h2 className={wPIDStyle.sec6_title}>
                                Stop recoding transactions manually
                            </h2>
                            <h4 className={wPIDStyle.sec6_title_1}>
                                Integrated with other applications
                            </h4>
                        </div>
                        <div style={{padding:'20px'}}></div>
                        <Row>
                            <Col md="3" style={{paddingLeft:'15px',paddingRight:'15px'}}>
                                <Card style={{ width: '16rem' }}>
                                    <div className={wPIDStyle.sec6_border_1}>                                   
                                    </div>
                                    <div style={{justifyContent: 'space-between !important'}}>
                                        <h4 className={wPIDStyle.card_heading} 
                                            style={{display:'inline-block'}}
                                        >nexParc</h4> 
                                        <img src={'../../pricing/expenses.png'} style={{
                                            width:'50px',height:'50px',overflow:'hidden',
                                            marginTop:'-4px',float:'right'
                                        }}/>
                                    </div>
                                    <div></div>
                                    <div className={wPIDStyle.card_body}
                                        style={{color: 'rgb(52, 58, 64)'}}
                                    >
                                        <p className={wPIDStyle.card_p}>A complete modern parking solution app</p>
                                    </div>

                                    <div className={wPIDStyle.card_footer}>
                                        <div className={wPIDStyle.card_footerLink}>
                                                <Link to="/nexParc" className={wPIDStyle.link}>
                                                    more
                                                </Link>
                                            </div>
                                    </div>
                                </Card>
                            </Col>

                            <Col md="3" style={{paddingLeft:'15px',paddingRight:'15px'}}>
                                <Card style={{ width: '16rem' }}>
                                    <div className={wPIDStyle.sec6_border_2}>                                    
                                    </div>
                                    <div style={{justifyContent: 'space-between !important'}}>
                                        <h4 className={wPIDStyle.card_heading} 
                                            style={{display:'inline-block'}}
                                        >Pick & Drop</h4>
                                        <img src={'../../pricing/inventory.png'} style={{
                                                width:'50px',height:'50px',overflow:'hidden',
                                                marginTop:'-4px',float:'right'
                                            }}/>
                                    </div>

                                    <div className={wPIDStyle.card_body}
                                        style={{color: 'rgb(52, 58, 64)'}}
                                    >
                                        <p className={wPIDStyle.card_p}>An unique modern complete time saving app</p>
                                    </div>

                                    <div className={wPIDStyle.card_footer}>
                                        <div className={wPIDStyle.card_footerLink}>
                                                <Link to="/Pick & Drop" className={wPIDStyle.link}>
                                                    more
                                                </Link>
                                            </div>
                                    </div>
                                </Card>
                            </Col>

                            <Col md="3" style={{paddingLeft:'15px',paddingRight:'15px'}}>
                                <Card style={{ width: '16rem' }}>
                                    <div className={wPIDStyle.sec6_border_3}>                                    
                                    </div> 
                                    <div style={{justifyContent: 'space-between !important'}}>
                                        <h4 className={wPIDStyle.card_heading} 
                                            style={{display:'inline-block'}}
                                        >Sales Combat</h4>
                                        <img src={'../../pricing/point_of_sale.png'} style={{
                                            width:'50px',height:'50px',overflow:'hidden',
                                            marginTop:'-4px',float:'right'
                                        }}/>
                                    </div>
                                    <div className={wPIDStyle.card_body}
                                        style={{color: 'rgb(52, 58, 64)'}}
                                    >
                                        <p className={wPIDStyle.card_p}>A complete modern sales tracking app</p>
                                    </div>

                                    <div className={wPIDStyle.card_footer}>
                                        <div className={wPIDStyle.card_footerLink}>
                                                <Link to="/Sales Combat" className={wPIDStyle.link}>
                                                    more
                                                </Link>
                                            </div>
                                    </div>
                                    
                                </Card>
                            </Col>

                            <Col md="3" style={{paddingLeft:'15px',paddingRight:'15px'}}>
                                <Card style={{ width: '16rem' }}>
                                    <div className={wPIDStyle.sec6_border_4}>                                    
                                    </div>
                                    <div style={{justifyContent: 'space-between !important'}}>
                                        <h4 className={wPIDStyle.card_heading} 
                                            style={{display:'inline-block'}}
                                        >Defect Record</h4>
                                        <img src={'../../pricing/sale.png'} style={{
                                            width:'50px',height:'50px',overflow:'hidden',
                                            marginTop:'-4px',float:'right'
                                        }}/>
                                    </div>
                                    <div className={wPIDStyle.card_body}
                                        style={{color: 'rgb(52, 58, 64)'}}
                                    >
                                        <p className={wPIDStyle.card_p}>A complete defect record management app</p>
                                    </div>

                                    <div className={wPIDStyle.card_footer}>
                                        <div className={wPIDStyle.card_footerLink}>
                                                <Link to="/Defect part record" className={wPIDStyle.link}>
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
export default WindowsPIDPage
