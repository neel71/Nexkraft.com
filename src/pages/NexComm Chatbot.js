import React,{Component} from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'

import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout'
import { Row, Col,Container,Card,Form,Button} from 'react-bootstrap'
import ChatbotStyle from './NexComm-Chatbot.module.scss'
import headerStyle  from './NexComm-Chatbot.module.scss'
import footerStyle  from './NexComm-Chatbot.module.scss'
import SEO from "../components/seo"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudSunRain, faArrowDown,faArrowUp, faCaretDown} from '@fortawesome/free-solid-svg-icons'
import {} from '@fortawesome/free-regular-svg-icons'
import Footer from '../components/footer'
import Header from '../components/header_'
function NexCommChatbotPage () {
    return(
        <div>
            <Header/>
            <SEO title="NexComm Chatbot" />
            <div>
                <section>
                    <Container>
                        <div style={{}}>
                            <h1 className={ChatbotStyle.title}>
                                
                                An effortless software for <br/><strong>managing client relation</strong>
                            </h1>
                            <h4 className={ChatbotStyle.title_2}>Make your customer communication easier than ever</h4>
                            {/* <div style={{    position: 'absolute',paddingTop: '350px'}}>
                                <Link to="/" className={ChatbotStyle.title_link}
                                style={{position: 'relative',overflow: 'hidden'}}    
                            >
                                Start Now - It's Free
                            </Link>
                            </div> */}
                        </div>
                    </Container>
                    <img src={'../../common_banner.jpg'} style={{width:'100%'}}/>
                </section>         
                
                <section className={ChatbotStyle.sec3}>
                    <h2 className={ChatbotStyle.sec3_title}>
                    Popular <strong>features</strong> that will change your life
                    </h2>
                    <h4 className={ChatbotStyle.sec3_title_2}>All the time-saving tools you need to grow your business.</h4>
                    <Container>
                        <Row style={{textAlign:'center'}}>
                            <Col md="10" className={ChatbotStyle.row_col}>
                                <Row style={{height:'310px'}}>
                                    <Col md="3">
                                        <div className={ChatbotStyle.col_items}>
                                            <p className={ChatbotStyle.m_96}
                                            >
                                                Mature conversation
                                            </p>

                                            <p className={ChatbotStyle.m_97}
                                            style={{fontSize:'15px'}}>
                                            Create a smart Bot and provide ultra smart level service using nexcomm chatbot
                                            </p>
                                        </div>
                                        <div className={ChatbotStyle.col_items}>
                                            <p className={ChatbotStyle.m_96} 
                                            style={{marginTop:"64px !important"}}
                                           >
                                                Human-like approach
                                            </p>

                                            <p className={ChatbotStyle.m_97}>
                                             Handle your client with smart AI and approach like human in simplest way
                                            </p>
                                        </div>
                                    </Col>

                                    <Col md="3">
                                        <div className={ChatbotStyle.col_items}>
                                            <p className={ChatbotStyle.m_96}
                                            >
                                                Language Effective
                                            </p>

                                            <p className={ChatbotStyle.m_97}
                                            style={{fontSize:'15px'}}>
                                                NexComm Chatbot has the platform in multiple languages though apps
                                            </p>
                                        </div>
                                        <div className={ChatbotStyle.col_items}>
                                            <p className={ChatbotStyle.m_96} 
                                            style={{marginTop:"64px !important"}}
                                           >
                                                Conversation Capable
                                            </p>

                                            <p className={ChatbotStyle.m_97}>
                                                Chatbot has advanced conversational capabilities as like human
                                            </p>
                                        </div>
                                    </Col>
                                    
                                    <Col md="3">
                                        <div className={ChatbotStyle.col_items}>
                                            <p className={ChatbotStyle.m_96}>
                                            System Integrate
                                            </p>

                                            <p className={ChatbotStyle.m_97}>
                                                Chatbot Can be integrated with critical systems for any emergency
                                            </p>
                                        </div>                            
                                        <div className={ChatbotStyle.col_items}>
                                            <p className={ChatbotStyle.m_96}
                                            style={{marginTop:"64px !important"}}>
                                                Action Handler
                                            </p>

                                            <p className={ChatbotStyle.m_97}>
                                                Chatbot Can handle real-time action in real time attachment
                                            </p>
                                        </div>
                                    </Col>

                                    <Col md="3">
                                        <div className={ChatbotStyle.col_items}>
                                            <p className={ChatbotStyle.m_96}>
                                            Short and Simple
                                            </p>

                                            <p className={ChatbotStyle.m_97}>
                                            NexComm Chatbot is so simple to use and short effort needed
                                            </p>
                                        </div>                            
                                        <div className={ChatbotStyle.col_items}>
                                            <p className={ChatbotStyle.m_96}
                                            style={{marginTop:"64px !important"}}>
                                                Accessible anytime
                                            </p>

                                            <p className={ChatbotStyle.m_97}>
                                            Access your bot from any  where and always present to your client
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
                                <img src={'../../content_image/Chatbot.jpg'}
                                    style={{width:'90%',
                                    boxShadow: '-40px 40px 160px 0 rgba(0, 0, 0, 0.08), -8px 8px 15px 0 rgba(120, 120, 120, 0.04), 3px 3px 30px 0 rgba(0, 0, 0, 0.04) !important'}}
                                />
                            </div>
                            <div style={{width:'35%',paddingTop:'50px'}}>
                                <h2 className={ChatbotStyle.sec5_title}>
                                    <b>Beautiful</b> dynamic statements
                                </h2>
                                <h3 className={ChatbotStyle.sec4_title_1}>
                                    Your reports, the way you like them.
                                </h3>
                                <p className={ChatbotStyle.sec4_title_2}
                                style={{fontSize:'15px'}}
                                >
                                    Nexcomm chat bot serves streamline interactions between 
                                    people and service while enhancing customer experience. 
                                    At the same time, it offers new opportunities to the 
                                    organizations to improve customer engagement. It brings 
                                    a fast and secure way to connect customers.

                                </p>
                                {/* <p className={ChatbotStyle.sec4_title_3}
                                style={{fontSize:'15px'}}>
                                Quickly filter, zoom, annotate and compare any data.
                                </p>
                                <p className={ChatbotStyle.sec4_title_3}
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
                            <h2 className={ChatbotStyle.sec6_title}>
                                Stop recoding transactions manually
                            </h2>
                            <h4 className={ChatbotStyle.sec6_title_1}>
                                Integrated with other applications
                            </h4>
                        </div>
                        <div style={{padding:'20px'}}></div>
                        <Row>
                            <Col md="3" style={{paddingLeft:'15px',paddingRight:'15px'}}>
                                <Card style={{ width: '16rem' }}>
                                    <div className={ChatbotStyle.sec6_border_1}>                                   
                                    </div>
                                    <div style={{justifyContent: 'space-between !important'}}>
                                        <h4 className={ChatbotStyle.card_heading} 
                                            style={{display:'inline-block'}}
                                        >BizView</h4> 
                                        <img src={'../../pricing/expenses.png'} style={{
                                            width:'50px',height:'50px',overflow:'hidden',
                                            marginTop:'-4px',float:'right'
                                        }}/>
                                    </div>
                                    <div></div>
                                    <div className={ChatbotStyle.card_body}
                                        style={{color: 'rgb(52, 58, 64)'}}
                                    >
                                        <p className={ChatbotStyle.card_p}>modernize software for data analytics</p>
                                    </div>

                                    <div className={ChatbotStyle.card_footer}>
                                        <div className={ChatbotStyle.card_footerLink}>
                                                <Link to="/Bizview" className={ChatbotStyle.link}>
                                                    more
                                                </Link>
                                            </div>
                                    </div>
                                </Card>
                            </Col>

                            <Col md="3" style={{paddingLeft:'15px',paddingRight:'15px'}}>
                                <Card style={{ width: '16rem' }}>
                                    <div className={ChatbotStyle.sec6_border_2}>                                    
                                    </div>
                                    <div style={{justifyContent: 'space-between !important'}}>
                                        <h4 className={ChatbotStyle.card_heading} 
                                            style={{display:'inline-block'}}
                                        >Micro Finance</h4>
                                        <img src={'../../pricing/inventory.png'} style={{
                                                width:'50px',height:'50px',overflow:'hidden',
                                                marginTop:'-4px',float:'right'
                                            }}/>
                                    </div>

                                    <div className={ChatbotStyle.card_body}
                                        style={{color: 'rgb(52, 58, 64)'}}
                                    >
                                        <p className={ChatbotStyle.card_p}>Uncomplicated software fro managing finance operation</p>
                                    </div>

                                    <div className={ChatbotStyle.card_footer}>
                                        <div className={ChatbotStyle.card_footerLink}>
                                                <Link to="/Micro Finance" className={ChatbotStyle.link}>
                                                    more
                                                </Link>
                                            </div>
                                    </div>
                                </Card>
                            </Col>

                            <Col md="3" style={{paddingLeft:'15px',paddingRight:'15px'}}>
                                <Card style={{ width: '16rem' }}>
                                    <div className={ChatbotStyle.sec6_border_3}>                                    
                                    </div> 
                                    <div style={{justifyContent: 'space-between !important'}}>
                                        <h4 className={ChatbotStyle.card_heading} 
                                            style={{display:'inline-block'}}
                                        >Data Tools</h4>
                                        <img src={'../../pricing/point_of_sale.png'} style={{
                                            width:'50px',height:'50px',overflow:'hidden',
                                            marginTop:'-4px',float:'right'
                                        }}/>
                                    </div>
                                    <div className={ChatbotStyle.card_body}
                                        style={{color: 'rgb(52, 58, 64)'}}
                                    >
                                        <p className={ChatbotStyle.card_p}>A modern survey management software</p>
                                    </div>

                                    <div className={ChatbotStyle.card_footer}>
                                        <div className={ChatbotStyle.card_footerLink}>
                                                <Link to="/Data Tools" className={ChatbotStyle.link}>
                                                    more
                                                </Link>
                                            </div>
                                    </div>
                                    
                                </Card>
                            </Col>

                            <Col md="3" style={{paddingLeft:'15px',paddingRight:'15px'}}>
                                <Card style={{ width: '16rem' }}>
                                    <div className={ChatbotStyle.sec6_border_4}>                                    
                                    </div>
                                    <div style={{justifyContent: 'space-between !important'}}>
                                        <h4 className={ChatbotStyle.card_heading} 
                                            style={{display:'inline-block'}}
                                        >Nexcase Book</h4>
                                        <img src={'../../pricing/sale.png'} style={{
                                            width:'50px',height:'50px',overflow:'hidden',
                                            marginTop:'-4px',float:'right'
                                        }}/>
                                    </div>
                                    <div className={ChatbotStyle.card_body}
                                        style={{color: 'rgb(52, 58, 64)'}}
                                    >
                                        <p className={ChatbotStyle.card_p}>A systematic case management software</p>
                                    </div>

                                    <div className={ChatbotStyle.card_footer}>
                                        <div className={ChatbotStyle.card_footerLink}>
                                                <Link to="/Nexcase Book" className={ChatbotStyle.link}>
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
export default NexCommChatbotPage
