import React,{Component} from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'

import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout'
import { Row, Col,Container,Card,Form,Button} from 'react-bootstrap'
import DPRStyle from './Defect Part Record.module.scss'
import headerStyle  from './Defect Part Record.module.scss'
import footerStyle  from './Defect Part Record.module.scss'
import SEO from "../components/seo"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudSunRain, faArrowDown,faArrowUp, faCaretDown} from '@fortawesome/free-solid-svg-icons'
import {} from '@fortawesome/free-regular-svg-icons'
import Footer from '../components/footer'
import Header from '../components/header_'
function DefectPartPage () {
    return(
        <div>
            <Header/>
            <SEO title="Defect Part Record" />
            <div>
                <section>
                    <Container>
                        <div style={{}}>
                            <h1 className={DPRStyle.title}>
                               
                                A complete <strong>defect record</strong><br/> management app
                                
                            </h1>
                            <h4 className={DPRStyle.title_2}>Minimize your Defect</h4>
                            {/* <div style={{    position: 'absolute',paddingTop: '350px'}}>
                                <Link to="/" className={DPRStyle.title_link}
                                style={{position: 'relative',overflow: 'hidden'}}    
                            >
                                Start Now - It's Free
                            </Link>
                            </div> */}
                        </div>
                    </Container>
                    <img src={'../../common_banner.jpg'} style={{width:'100%'}}/>
                </section>
            
                <section className={DPRStyle.sec3}>
                    <h2 className={DPRStyle.sec3_title}>
                    Features that will change your  <strong>Defect Part </strong>of your task
                    </h2>
                    <h4 className={DPRStyle.sec3_title_2}>All the time-saving tools you need to minimize your defect</h4>
                    <Container>
                        <Row style={{textAlign:'center'}}>
                            <Col md="10" className={DPRStyle.row_col}>
                                <Row style={{height:'310px'}}>
                                    <Col md="3">
                                        <div className={DPRStyle.col_items}>
                                            <p className={DPRStyle.m_96}
                                            >
                                                Easy Interface 
                                            </p>

                                            <p className={DPRStyle.m_97}
                                            style={{fontSize:'15px'}}>
                                                Defect Record has effortless nice interface which will help to utilise 
                                                this app easily.
                                                
                                            </p>
                                        </div>
                                        <div className={DPRStyle.col_items}>
                                            <p className={DPRStyle.m_96} 
                                            style={{marginTop:"64px !important"}}
                                           >
                                                Timely Report
                                            </p>

                                            <p className={DPRStyle.m_97}>
                                             Defect Part Record has daily and monthly basis History will 
                                             help to get updated.
                                            </p>
                                        </div>
                                    </Col>

                                    <Col md="3">
                                        <div className={DPRStyle.col_items}>
                                            <p className={DPRStyle.m_96}
                                            >
                                                Job Process 
                                            </p>

                                            <p className={DPRStyle.m_97}
                                            style={{fontSize:'15px'}}>
                                                Manage your entire job progress simply from defect part 
                                                
                                            </p>
                                        </div>
                                        <div className={DPRStyle.col_items}>
                                            <p className={DPRStyle.m_96} 
                                            style={{marginTop:"64px !important"}}
                                           >
                                                Stock Tracing
                                            </p>

                                            <p className={DPRStyle.m_97}>
                                                Make your stock tracking easy and take the record for further use
                                            </p>
                                        </div>
                                    </Col>
                                    
                                    <Col md="3">
                                        <div className={DPRStyle.col_items}>
                                            <p className={DPRStyle.m_96}>
                                            Staff Allocation
                                            </p>

                                            <p className={DPRStyle.m_97}>
                                                Manage your entire staff allocation and get the report for more productivity
                                            </p>
                                        </div>                            
                                        <div className={DPRStyle.col_items}>
                                            <p className={DPRStyle.m_96}
                                            style={{marginTop:"64px !important"}}>
                                                Service Reminders
                                            </p>

                                            <p className={DPRStyle.m_97}>
                                                Automated service reminders in defect part record for accurate services
                                            </p>
                                        </div>
                                    </Col>

                                    <Col md="3">
                                        <div className={DPRStyle.col_items}>
                                            <p className={DPRStyle.m_96}>
                                            Easy Accessible
                                            </p>

                                            <p className={DPRStyle.m_97}>
                                            Defect part App is easy accessible which you can access even not in office.
                                            </p>
                                        </div>                            
                                        <div className={DPRStyle.col_items}>
                                            <p className={DPRStyle.m_96}
                                            style={{marginTop:"64px !important"}}>
                                                Data Centralization
                                            </p>

                                            <p className={DPRStyle.m_97}>
                                            Defect Part has data backups and storages. so all your data is secured.
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
                                <img src={'../../content_image/Defect.jpg'}
                                    style={{width:'50%',height:'auto',
                                    boxShadow: '-40px 40px 160px 0 rgba(0, 0, 0, 0.08), -8px 8px 15px 0 rgba(120, 120, 120, 0.04), 3px 3px 30px 0 rgba(0, 0, 0, 0.04) !important'}}
                                />
                            </div>
                            <div style={{width:'35%',paddingTop:'50px'}}>
                                <h2 className={DPRStyle.sec5_title}>
                                    <b>Beautiful</b> dynamic statements
                                </h2>
                                <h3 className={DPRStyle.sec4_title_1}>
                                    Your reports, the way you like them.
                                </h3>
                                <p className={DPRStyle.sec4_title_2}
                                style={{fontSize:'15px'}}
                                >
                                    The Defect record is a detailed record of all 
                                    types of issue for any type of vehicle for the 
                                    organization and Defect part record apps is a 
                                    platform to give entry all the details digitally. 
                                    By using this Apps recording any issue and others 
                                    staff will be more flawless.

                                </p>
                               
                            </div>
                        </div>
                        <div style={{padding:'35px'}}></div>
                    </Container>
                </section>
            
                <section style={{backgroundColor:"#E9ECEF"}}>
                    <Container>
                        <div style={{padding:'10px'}}></div>
                        <div style={{textAlign:"center"}}>
                            <h2 className={DPRStyle.sec6_title}>
                                Stop recoding transactions manually
                            </h2>
                            <h4 className={DPRStyle.sec6_title_1}>
                                Integrated with other applications
                            </h4>
                        </div>
                        <div style={{padding:'20px'}}></div>
                        <Row>
                            <Col md="3" style={{paddingLeft:'15px',paddingRight:'15px'}}>
                                <Card style={{ width: '16rem' }}>
                                    <div className={DPRStyle.sec6_border_1}>                                   
                                    </div>
                                    <div style={{justifyContent: 'space-between !important'}}>
                                        <h4 className={DPRStyle.card_heading} 
                                            style={{display:'inline-block'}}
                                        >Pick & Drop</h4> 
                                        <img src={'../../pricing/expenses.png'} style={{
                                            width:'50px',height:'50px',overflow:'hidden',
                                            marginTop:'-4px',float:'right'
                                        }}/>
                                    </div>
                                    <div></div>
                                    <div className={DPRStyle.card_body}
                                        style={{color: 'rgb(52, 58, 64)'}}
                                    >
                                        <p className={DPRStyle.card_p}>An unique modern time saving app</p>
                                    </div>

                                    <div className={DPRStyle.card_footer}>
                                        <div className={DPRStyle.card_footerLink}>
                                                <Link to="/Pick & Drop" className={DPRStyle.link}>
                                                    more
                                                </Link>
                                            </div>
                                    </div>
                                </Card>
                            </Col>

                            <Col md="3" style={{paddingLeft:'15px',paddingRight:'15px'}}>
                                <Card style={{ width: '16rem' }}>
                                    <div className={DPRStyle.sec6_border_2}>                                    
                                    </div>
                                    <div style={{justifyContent: 'space-between !important'}}>
                                        <h4 className={DPRStyle.card_heading} 
                                            style={{display:'inline-block'}}
                                        >Windows PID</h4>
                                        <img src={'../../pricing/inventory.png'} style={{
                                                width:'50px',height:'50px',overflow:'hidden',
                                                marginTop:'-4px',float:'right'
                                            }}/>
                                    </div>

                                    <div className={DPRStyle.card_body}
                                        style={{color: 'rgb(52, 58, 64)'}}
                                    >
                                        <p className={DPRStyle.card_p}>An authenticate windows product checker app</p>
                                    </div>

                                    <div className={DPRStyle.card_footer}>
                                        <div className={DPRStyle.card_footerLink}>
                                                <Link to="/Windows PID" className={DPRStyle.link}>
                                                    more
                                                </Link>
                                            </div>
                                    </div>
                                </Card>
                            </Col>

                            <Col md="3" style={{paddingLeft:'15px',paddingRight:'15px'}}>
                                <Card style={{ width: '16rem' }}>
                                    <div className={DPRStyle.sec6_border_3}>                                    
                                    </div> 
                                    <div style={{justifyContent: 'space-between !important'}}>
                                        <h4 className={DPRStyle.card_heading} 
                                            style={{display:'inline-block'}}
                                        >iFleet User</h4>
                                        <img src={'../../pricing/point_of_sale.png'} style={{
                                            width:'50px',height:'50px',overflow:'hidden',
                                            marginTop:'-4px',float:'right'
                                        }}/>
                                    </div>
                                    <div className={DPRStyle.card_body}
                                        style={{color: 'rgb(52, 58, 64)'}}
                                    >
                                        <p className={DPRStyle.card_p}>A systematic user management app</p>
                                    </div>

                                    <div className={DPRStyle.card_footer}>
                                        <div className={DPRStyle.card_footerLink}>
                                                <Link to="/iFleet User" className={DPRStyle.link}>
                                                    more
                                                </Link>
                                            </div>
                                    </div>
                                    
                                </Card>
                            </Col>

                            <Col md="3" style={{paddingLeft:'15px',paddingRight:'15px'}}>
                                <Card style={{ width: '16rem' }}>
                                    <div className={DPRStyle.sec6_border_4}>                                    
                                    </div>
                                    <div style={{justifyContent: 'space-between !important'}}>
                                        <h4 className={DPRStyle.card_heading} 
                                            style={{display:'inline-block'}}
                                        >nexParc</h4>
                                        <img src={'../../pricing/sale.png'} style={{
                                            width:'50px',height:'50px',overflow:'hidden',
                                            marginTop:'-4px',float:'right'
                                        }}/>
                                    </div>
                                    <div className={DPRStyle.card_body}
                                        style={{color: 'rgb(52, 58, 64)'}}
                                    >
                                        <p className={DPRStyle.card_p}>A complete modern parking solution app</p>
                                    </div>

                                    <div className={DPRStyle.card_footer}>
                                        <div className={DPRStyle.card_footerLink}>
                                                <Link to="/nexParc" className={DPRStyle.link}>
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
export default DefectPartPage
