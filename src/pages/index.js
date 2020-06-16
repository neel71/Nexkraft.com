import React,{Component} from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'

import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout'
import { Row, Col,Container,Form,Button} from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import indexStyle from './index.module.scss'
import SEO from "../components/seo"
function IndexPage () {
    return(
        <Layout>
            <SEO title="Home" />
            <section style={{}}>
                {/* <div>
                    <img src={'../../banner_bg.png'} className={indexStyle.backgroud}/>
                </div> */}
                <section className={indexStyle.background} >
                    <Container>
                        <div style={{width:'100%',display:'flex'}}>
                            <div style={{width:'50%',marginTop:'100px'}}>
                                <div className={indexStyle.sec1_1}>
                                    We are what our clients need us to be.<br/><br/>
                                </div>
                                <div className={indexStyle.sec1_2}>
                                    We won’t sell software,
                                </div>
                                <div className={indexStyle.sec1_2}>
                                    We recommend solution<br/>
                                </div>
                                <div className={indexStyle.sec1_3}>
                                    We build tools to help organization, turn data into information and 
                                    information into result and results into happiness. 
                                </div>

                                
                            </div>

                            <div style={{width:'50%',marginTop:'100px'}}>
                                <img src={'../../home_laptop.png'} height='350px' width='600px'/>

                            </div>
                        </div>
                        
                        <section>
                            <div style={{ marginTop:'120px'}}>
                                <h2 className={indexStyle.h2} style={{textAlign:'center'}}>
                                    An <b>app</b> for every need
                                </h2>
                                <div>
                                    <Row className={indexStyle.row}>
                                        <Col md="4" className={indexStyle.col_lg}>
                                            {/* <div style={{textAlign: 'center',marginBottom:'5px',fontSize:'12px',fontWeight: '600'}} >
                                                BOOST YOUR SALES
                                            </div> */}
                                            <div style={{width:'100%',display:'flex'}}>
                                                <div style={{width:'30%'}}>
                                                    
                                                    <Link to="/iFleet" className={indexStyle.a_app}>
                                                        <img src={'../../icon/icon.png'} style={{marginBottom:'5px'}}/>
                                                        <div className={indexStyle.i_name} style={{textAlign: 'center',marginLeft:'10px'}}>iFleet</div>
                                                    </Link>
                                                </div>
                                                <div style={{width:'30%'}}>
                                                    <Link to="/nexParc" className={indexStyle.a_app}>
                                                    <img src={'../../icon/icon (1).png'} style={{marginBottom:'5px'}}/>
                                                    <div className={indexStyle.i_name} style={{textAlign: 'center',marginLeft:'10px'}}>nexParc</div>
                                                    </Link>
                                                </div>
                                                <div style={{width:'30%'}}>
                                                <Link to="/Pick&Drop" className={indexStyle.a_app}>
                                                    <img src={'../../icon/icon (2).png'} style={{marginBottom:'5px'}}/>
                                                    <div className={indexStyle.i_name} style={{textAlign: 'center',marginLeft:'10px'}}>Pick & Drop</div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md="4" className={indexStyle.col_lg} style={{justifyContent: 'center !important',}}>
                                            {/* <div style={{textAlign: 'center',marginBottom:'5px',fontSize:'12px',fontWeight: '600'}}>
                                                INTEGRATE YOUR SERVICES
                                            </div> */}
                                            <div style={{width:'100%',display:'flex'}}>

                                                <div style={{width:'30%'}}>
                                                <Link to="/Windows PID" className={indexStyle.a_app}>
                                                    <img src={'../../icon/icon (3).png'} style={{marginBottom:'5px'}}/>
                                                    <div className={indexStyle.i_name} style={{textAlign: 'center',marginLeft:'14px'}}>Windows PID</div>
                                                    </Link>
                                                </div>
                                                <div style={{width:'30%'}}>
                                                <Link to="/Sales Combat" className={indexStyle.a_app}>
                                                    <img src={'../../icon/icon (4).png'} style={{marginBottom:'5px'}}/>
                                                    <div className={indexStyle.i_name} style={{textAlign: 'center',marginLeft:'14px'}}>Sales Combat</div>
                                                    </Link>
                                                </div>
                                                <div style={{width:'30%'}}>
                                                
                                                <Link to="/Defect part record" className={indexStyle.a_app}>
                                                    <img src={'../../icon/icon (5).png'} style={{marginBottom:'5px'}}/>
                                                    <div className={indexStyle.i_name} style={{textAlign: 'center',marginLeft:'14px'}}>Defect Record</div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md="4" className={indexStyle.col_lg}>
                                            {/* <div style={{textAlign: 'center',marginBottom:'5px',fontSize:'12px',fontWeight: '600'}}>
                                                STREAMING YOUR OPERATIONS
                                            </div> */}
                                            <div style={{width:'100%',display:'flex'}}>
                                                <div style={{width:'30%'}}>
                                                    <Link to="/NexCase Book" className={indexStyle.a_app}>
                                                    <img src={'../../icon/icon (6).png'} style={{marginBottom:'5px'}}/>
                                                    <div className={indexStyle.i_name} style={{textAlign: 'center',marginLeft:'10px'}}>NexCase Book</div>
                                                    </Link>
                                                </div>
                                                <div style={{width:'30%'}}>
                                                    <Link to="/BizView" className={indexStyle.a_app}>
                                                    <img src={'../../icon/icon (7).png'} style={{marginBottom:'5px'}}/>
                                                    <div className={indexStyle.i_name} style={{textAlign: 'center',marginLeft:'14px'}}>BizView</div>
                                                    </Link>
                                                </div>
                                                <div style={{width:'30%'}}>
                                                    <Link to="/Micro Finance" className={indexStyle.a_app}>
                                                    <img src={'../../icon/icon (8).png'} style={{marginBottom:'5px'}}/>
                                                    <div className={indexStyle.i_name} style={{textAlign: 'center',marginLeft:'14px'}}>Micro Finance</div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                
                                    <Row className={indexStyle.row} style={{marginTop:'50px'}}>
                                        <Col md="3" style={{marginLeft:'-4px'}}>
                                            {/* <div className={indexStyle.h_name}>
                                                BUILDING STUNNING WEBSITE
                                            </div> */}
                                            <div style={{width:'100%',display:'flex'}}>
                                                <div style={{width:'45%'}}>
                                                <a href="https://blackboard.com.bd/" className={indexStyle.a_app}>
                                                    <img src={'../../icon/icon (9).png'} style={{marginBottom:'5px'}}/>
                                                    <div className={indexStyle.i_name} style={{textAlign: 'center',marginLeft:'14px'}}>BlackBoard</div>
                                                </a>
                                                    
                                                </div>
                                                <a style={{width:'45%'}}>
                                                <a href="https://mindshaper.xyz/" className={indexStyle.a_app}>
                                                    <img src={'../../icon/icon (10).png'} style={{marginBottom:'5px'}}/>
                                                    <div className={indexStyle.i_name} style={{textAlign: 'center',marginLeft:'8px'}}>MindShaper</div>
                                                    </a>
                                                </a>
                                                
                                            </div>
                                        </Col>
                                        <Col md="3" style={{marginLeft:'-19px'}}>
                                            {/* <div className={indexStyle.h_name}>
                                                MANAGE YOUR FINANCES
                                            </div> */}
                                            <div style={{width:'100%',display:'flex'}}>
                                                <div style={{width:'45%'}}>
                                                <Link to="/NexFleet" className={indexStyle.a_app}>
                                                    <img src={'../../icon/icon (11).png'} style={{marginBottom:'5px'}}/>
                                                    <div className={indexStyle.i_name} style={{textAlign: 'center',marginLeft:'11px'}}>NexFleet</div>
                                                    </Link>
                                                </div>
                                                <div style={{width:'45%'}}>
                                                <Link to="/Data Tools" className={indexStyle.a_app}>
                                                    <img src={'../../icon/icon (12).png'} style={{marginBottom:'5px'}}/>
                                                    <div className={indexStyle.i_name} style={{textAlign: 'center',marginLeft:'11px'}}>Data Tools</div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md="3" style={{marginLeft:'37px'}}>
                                            {/* <div className={indexStyle.h_name}>
                                                GROW YOUR MARKETING REACH
                                            </div> */}
                                            <div style={{width:'100%',display:'flex'}}>
                                                <div style={{width:'45%'}}>
                                                <Link to="/NexComm Chatbot" className={indexStyle.a_app}>
                                                    <img src={'../../icon/icon (13).png'} style={{marginBottom:'5px'}}/>
                                                    <div className={indexStyle.i_name} style={{textAlign: 'center',marginLeft:'14px'}}>NexComm Chatbot</div>
                                                    </Link>
                                                </div>
                                                <div style={{width:'45%'}}>
                                                <Link to="/Workshop Manager" className={indexStyle.a_app}>
                                                    <img src={'../../icon/icon (14).png'} style={{marginBottom:'5px'}}/>
                                                    <div className={indexStyle.i_name} style={{textAlign: 'center',marginLeft:'14px'}}>Workshop Manager</div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md="3" style={{marginLeft:'-17px'}}>
                                            {/* <div className={indexStyle.h_name}>
                                                CUSTOMIZE & DEVELOP
                                            </div> */}
                                            <div style={{width:'100%',display:'flex'}}>
                                                <div style={{width:'45%'}}>
                                                <Link to="/iFleet Driver" className={indexStyle.a_app}>
                                                    <img src={'../../icon/icon (15).png'} style={{marginBottom:'5px'}}/>
                                                    <div className={indexStyle.i_name} style={{textAlign: 'center',marginLeft:'11px'}}>iFleet Driver</div>
                                                    </Link>
                                                </div>
                                                <div style={{width:'45%'}}>
                                                <Link to="/iFleet User" className={indexStyle.a_app}>
                                                    <img src={'../../icon/icon (16).png'} style={{marginBottom:'5px'}}/>
                                                    <div className={indexStyle.i_name} style={{textAlign: 'center',marginLeft:'11px'}}>iFleet User</div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>

                                {/* <div style={{textAlign:'center'}} className={indexStyle.many_more}>
                                    <Link to="/" className={indexStyle._many_more}>... and many more</Link>
                                </div> */}
                            </div>
                        </section>
                        
                    </Container>
                </section>
                
                <section style={{marginTop:'550px'}}>
                
                    <div style={{width:'100%',display:'flex'}} className={indexStyle.sample_background}>
                    <img src={'../../screen_fly.gif'} style={{display:'inline-block',maxWidth: '100%',
                                height: '520px'}}/>
                    
                    <div style={{display:'inline-block',transform:'none', width:'33%', marginLeft:'112px',marginTop:'50px',
                                position:'relative'}}>
                        <div>
                            <p className={indexStyle.r_head}>
                                We create impactful software solutions.
                            </p>
                            <p className={indexStyle.r_body}>                           
                                Nexkraft is a Software craft solution company 
                                providing customized Product and Application 
                                Development Services and Solutions to the 
                                businesses. <br/>As an IT services provider, we have 
                                been leveraging our software engineering expertise 
                                in delivering cost effective innovative solutions 
                                With extensive years of 
                                experience in Software Solutions.
                            </p>
                            <div style={{width:'100%', display:'flex'}}>
                                <div style={{width:'18%'}}>
                                    <img src={'../../IMG_9606_edited.jpg'} height='60px' style={{borderRadius:'50%'}}/>
                                </div>
                                <div style={{width:'76%'}}>
                                    <p style={{marginBottom:'2px',
                                    color:'#212529',fontSize:'0.8em',lineHeight: '1.3',
                                    fontWeight:'500'
                                    }}>“Absolutely the best selection in the area of software development. 
                                    I will always recommend Nexkraft to my friends”</p>
                                    
                                    <p style={{
                                        fontStyle:'italic'
                                    }}><small>-MIRSAD HOSSAIN, Assistant General Manager, Smart Technologies (BD) Ltd</small></p>
                                    <div>
                                        <img src={'../../smart.png'} height='auto' width="25%"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 

                </section>
                            
                <section style={{marginTop:'0px',
                                backgroundColor:'#F8F9FA',
                            height:'80px',padding:'20px',
                            paddingLeft:'230px',paddingRight:'210px',width:'100%',display:'flex'}}>
                    
                    <Row>
                        <div style={{display:'inline-block'}} className={indexStyle.used_trusted}>
                            <p style={{textAlign:'right'}}>used and<br/> trusted by</p>
                        </div>
                        <div style={{display:'inline-block'}}>
                            {/* <img src={'../../customers.gif'} style={{width:'24px',opacity:'.5',textAlign:'justify'}}/> */}
                            <div style={{}}>
                                <img src={'../../customer/panda.png'} 
                                    style={{marginLeft:'115px',width:'24px',opacity:'.5',display:'inline-block'}}/>
                                <img src={'../../customer/toyota.png'} 
                                    style={{marginLeft:'100px',width:'40px',opacity:'.5',display:'inline-block'}}/>
                                <img src={'../../customer/jj.png'} 
                                    style={{marginLeft:'100px',width:'45px',opacity:'.5',display:'inline-block'}}/>
                                <img src={'../../customer/cox.png'} 
                                    style={{marginLeft:'100px',width:'60px',opacity:'.5',display:'inline-block'}}/>
                                <img src={'../../customer/hundai.png'} 
                                    style={{marginLeft:'100px',width:'41px',opacity:'.5',display:'inline-block'}}/>
                                <img src={'../../customer/danone.png'} 
                                    style={{marginLeft:'100px',width:'45px',opacity:'.5',display:'inline-block'}}/>
                                
                            </div>
                        </div>
                    </Row>

                </section>
            
                <section >
                    <div >
                        <img src={'../../client-logos.jpg'} className={indexStyle.banner} />
                        <p className={indexStyle.p__}>Million User Here</p>
                        {/* <p style={{
                            left:'50%',
                        }}>ass hole</p> */}
                    </div>
                </section>
            
            </section>

        </Layout>
    )
}
export default IndexPage

