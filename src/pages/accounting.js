import React,{Component} from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'

import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout'
import { Row, Col,Container,Card,Form,Button} from 'react-bootstrap'
import accountStyle from './accounting.module.scss'
import headerStyle  from './accounting.module.scss'
import footerStyle  from './accounting.module.scss'
import SEO from "../components/seo"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudSunRain, faArrowDown,faArrowUp, faCaretDown} from '@fortawesome/free-solid-svg-icons'
import {} from '@fortawesome/free-regular-svg-icons'

function AccountingPage () {
    return(
        <div>
            <header>
                <div  className={headerStyle.header_main} id='header_part'>
                <div className={headerStyle.header_main_2}>
                    <Link to="/" className={headerStyle.link} style={{position:'relative',overflow:'hidden'}}>
                    {/* <img src={'../../NK_.png'} style={{zIndex:'99999'}}/> */}
                    <span className={headerStyle.logo__} style={{width: '95px',height: '18px'}}></span>
                    </Link>
                
                    <div className={headerStyle.header_right}>
                    <div style={{position:'relative',overflow:'hidden'}}>
                        <Link to="#" className={'headerStyle.header_right_1'}
                        style={{padding:'0 20px',
                            fontWeight: '600',
                            textTransform: 'uppercase',
                            color:'#343a40',
                            textDecoration:'none'}}
                        >sign in</Link>
                    </div>
                    {/* className={headerStyle.try_it_free} */}
                    <Link to="/particle" className={headerStyle.try_it_free} >
                        <p style={{marginTop:'3px'}}>Try it Free</p>
                    </Link>
                    </div>

                    {/* style={{zIndex:'99999',textAlign:'center',marginTop:'12px',color:'white'}} */}
                    <div id="menu_color" style={{zIndex:'99999',textAlign:'center',marginTop:'12px',color:'white'}}>
                    
                    <Link to='#' className={headerStyle.menu_item}>Apps <span><FontAwesomeIcon icon="facCaretDown" /></span></Link>
                    <Link to='/tour' className={headerStyle.menu_item}>Tour</Link>
                    <Link to='/pricing' className={headerStyle.menu_item}>Pricing</Link>
                    <Link to='#' className={headerStyle.menu_item}>learn</Link>
                    <Link to='#' className={headerStyle.menu_item}>Community</Link>
                    </div>
                </div>  
                </div>
            </header>
            <SEO title="Accounting" />
            <div>
                <section>
                    <Container>
                        <div style={{}}>
                            <h1 className={accountStyle.title}>
                                Beautiful <strong>Accounting</strong> Software
                            </h1>
                            <h4 className={accountStyle.title_2}>Do more, in less time.</h4>
                            <div style={{    position: 'absolute',paddingTop: '350px'}}>
                                <Link to="/" className={accountStyle.title_link}
                                style={{position: 'relative',overflow: 'hidden'}}    
                            >
                                Start Now - It's Free
                            </Link>
                            </div>
                        </div>
                    </Container>
                    <img src={'../../accountingPage/accountant.jpg'} style={{width:'100%',marginTop:'50px'}}/>
                </section>
            
                <section style={{backgroundColor:'#F3F4F5',position:'relative',width:'100%'}}>
                    {/* <Container> */}
                        {/* <Container> */}
                        <div className={accountStyle.sec_2} style={{textAlign:'center',marginTop:'-50px'}}>
                            <div>
                                <img src={'../../accountingPage/browser.png'} style={{width:'60%'}}/>
                            </div>
                            {/* style={{backgroundColor: '#495057',transition: 'background 0.5s ease 0s'}} */}
                            <div className={accountStyle.main_img_div}>
                                <img src={'../../accountingPage/accounting_screenshot_01.gif'} 
                                className={accountStyle.img_main}
                                style={{}}/>
                            </div>
                        </div>
                        {/* </Container> */}
                    {/* </Container> */}
                </section>
                {/* style={{backgroundColor:'white',position:'relative',width:'100%'}} */}
                
                
                <section className={accountStyle.sec3}>
                    <h2 className={accountStyle.sec3_title}>
                    Popular <strong>features</strong> that will change your life
                    </h2>
                    <h4 className={accountStyle.sec3_title_2}>All the time-saving tools you need to grow your business.</h4>
                    <Container>
                        <Row style={{textAlign:'center'}}>
                            <Col md="10" className={accountStyle.row_col}>
                                <Row style={{height:'430px'}}>
                                    <Col md="4">
                                        <div>
                                            <p className={accountStyle.m_96}
                                            >
                                                Bank Synchronization
                                            </p>

                                            <p className={accountStyle.m_97}
                                            style={{fontSize:'15px'}}>
                                            Get your bank statements synced with your bank 
                                            automatically, or import files.
                                            </p>
                                        </div>
                                        <div>
                                            <p className={accountStyle.m_96} 
                                            style={{marginTop:"64px !important"}}
                                           >
                                                Invoicing
                                            </p>

                                            <p className={accountStyle.m_97}>
                                            Create sharp and professional invoices, manage 
                                            recurring billings, and easily track payments
                                            </p>
                                        </div>
                                    </Col>
                                    <Col md="4">
                                        <img src={'../../accountingPage/accounting_screenshot_02.gif'}
                                        style={{position:'absolute',
                                        marginLeft:'-150px',padding:'0',maxWidth:'100%',height:'auto',
                                        }}/>
                                    </Col>
                                    <Col md="4">
                                        <div>
                                            <p className={accountStyle.m_98}>
                                            Manage Bills & Expenses
                                            </p>

                                            <p className={accountStyle.m_99}>
                                            Control supplier invoices and get a clear 
                                            forecast of your future bills to pay.
                                            </p>
                                        </div>                            
                                        <div>
                                            <p className={accountStyle.m_98}
                                            style={{marginTop:"64px !important"}}>
                                                Easy Reconciliation
                                            </p>

                                            <p className={accountStyle.m_99}>
                                            Save time and automate 95% of 
                                            reconciliation with our smart reconciliation tool.
                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </section>
            
                <section className={accountStyle.sec4}>
                    <Container>
                        <div style={{width:'100%',display:'flex',marginTop:'48px',marginBottom:'48px'}}>
                            <div style={{width:'50%'}}>
                                <h2 className={accountStyle.sec4_title}>
                                Get paid <strong>faster</strong>
                                </h2>
                                <h4 className={accountStyle.sec4_title_1}>
                                    Electronic invoicing and automated follow-ups.
                                </h4>
                                <p className={accountStyle.sec4_title_2}>Create and send 
                                    professional <b>invoices</b> and receive <b>payments online</b>.
                                </p>
                                <p className={accountStyle.sec4_title_3}>
                                    Send reminders to your debtors in 
                                    just a few clicks. Simply 
                                    set-up and automate follow-ups <b>to get paid more quickly</b>.
                                </p>
                                <p className={accountStyle.sec4_title_3}>
                                    <b>Automatically create invoices</b> from sales orders, 
                                    delivery orders or base them on time and material.
                                </p>
                            </div>
                            <div style={{width:'50%'}}></div>
                        </div>
                    </Container>
                </section>
            
                <section style={{backgroundColor:'#F8F9FA'}}>
                    <Container>
                        <div style={{padding:'17px'}}></div>
                        <div style={{width:'100%',display:'flex'}}>
                            <div style={{width:'60%'}}>
                                <img src={'../../accountingPage/accounting_screenshot_03.jpg'}
                                    style={{width:'80%',
                                    boxShadow: '-40px 40px 160px 0 rgba(0, 0, 0, 0.08), -8px 8px 15px 0 rgba(120, 120, 120, 0.04), 3px 3px 30px 0 rgba(0, 0, 0, 0.04) !important'}}
                                />
                            </div>
                            <div style={{width:'40%',paddingTop:'150px'}}>
                                <h2 className={accountStyle.sec5_title}>
                                    <b>Beautiful</b> dynamic statements
                                </h2>
                                <h3 className={accountStyle.sec4_title_1}>
                                    Your reports, the way you like them.
                                </h3>
                                <p className={accountStyle.sec4_title_2}
                                style={{fontSize:'15px'}}
                                >
                                    Easily create your <strong>earnings report</strong>, <strong>balance sheet</strong> or <strong>cash flow statements</strong>.
                                </p>
                                <p className={accountStyle.sec4_title_3}
                                style={{fontSize:'15px'}}>
                                Quickly filter, zoom, annotate and compare any data.
                                </p>
                                <p className={accountStyle.sec4_title_3}
                                style={{fontSize:'15px'}}
                                >Use business intelligence's cubes to report across any dimension.</p>
                            </div>
                        </div>
                        <div style={{padding:'35px'}}></div>
                    </Container>
                </section>
            
                <section style={{backgroundColor:"#E9ECEF"}}>
                    <Container>
                        <div style={{padding:'10px'}}></div>
                        <div style={{textAlign:"center"}}>
                            <h2 className={accountStyle.sec6_title}>
                                Stop recoding transactions manually
                            </h2>
                            <h4 className={accountStyle.sec6_title_1}>
                                Integrated with other applications
                            </h4>
                        </div>
                        <div style={{padding:'20px'}}></div>
                        <Row>
                            <Col md="3" style={{paddingLeft:'15px',paddingRight:'15px'}}>
                                <Card style={{ width: '16rem' }}>
                                    <div className={accountStyle.sec6_border_1}>                                   
                                    </div>
                                    <div style={{justifyContent: 'space-between !important'}}>
                                        <h4 className={accountStyle.card_heading} 
                                            style={{display:'inline-block'}}
                                        >Expenses</h4> 
                                        <img src={'../../pricing/expenses.png'} style={{
                                            width:'50px',height:'50px',overflow:'hidden',
                                            marginTop:'-4px',float:'right'
                                        }}/>
                                    </div>
                                    <div></div>
                                    <div className={accountStyle.card_body}
                                        style={{color: 'rgb(52, 58, 64)'}}
                                    >
                                        <p className={accountStyle.card_p}>Track expenses and re-invoice them in batches.</p>
                                    </div>

                                    <div className={accountStyle.card_footer}>
                                        <div className={accountStyle.card_footerLink}>
                                                <Link to="/" className={accountStyle.link}>
                                                    more
                                                </Link>
                                            </div>
                                    </div>
                                </Card>
                            </Col>

                            <Col md="3" style={{paddingLeft:'15px',paddingRight:'15px'}}>
                                <Card style={{ width: '16rem' }}>
                                    <div className={accountStyle.sec6_border_2}>                                    
                                    </div>
                                    <div style={{justifyContent: 'space-between !important'}}>
                                        <h4 className={accountStyle.card_heading} 
                                            style={{display:'inline-block'}}
                                        >Inventory</h4>
                                        <img src={'../../pricing/inventory.png'} style={{
                                                width:'50px',height:'50px',overflow:'hidden',
                                                marginTop:'-4px',float:'right'
                                            }}/>
                                    </div>

                                    <div className={accountStyle.card_body}
                                        style={{color: 'rgb(52, 58, 64)'}}
                                    >
                                        <p className={accountStyle.card_p}>Track expenses and re-invoice them in batches.</p>
                                    </div>

                                    <div className={accountStyle.card_footer}>
                                        <div className={accountStyle.card_footerLink}>
                                                <Link to="/" className={accountStyle.link}>
                                                    more
                                                </Link>
                                            </div>
                                    </div>
                                </Card>
                            </Col>

                            <Col md="3" style={{paddingLeft:'15px',paddingRight:'15px'}}>
                                <Card style={{ width: '16rem' }}>
                                    <div className={accountStyle.sec6_border_3}>                                    
                                    </div> 
                                    <div style={{justifyContent: 'space-between !important'}}>
                                        <h4 className={accountStyle.card_heading} 
                                            style={{display:'inline-block'}}
                                        >Point of Sale</h4>
                                        <img src={'../../pricing/point_of_sale.png'} style={{
                                            width:'50px',height:'50px',overflow:'hidden',
                                            marginTop:'-4px',float:'right'
                                        }}/>
                                    </div>
                                    <div className={accountStyle.card_body}
                                        style={{color: 'rgb(52, 58, 64)'}}
                                    >
                                        <p className={accountStyle.card_p}>Track expenses and re-invoice them in batches.</p>
                                    </div>

                                    <div className={accountStyle.card_footer}>
                                        <div className={accountStyle.card_footerLink}>
                                                <Link to="/" className={accountStyle.link}>
                                                    more
                                                </Link>
                                            </div>
                                    </div>
                                    
                                </Card>
                            </Col>

                            <Col md="3" style={{paddingLeft:'15px',paddingRight:'15px'}}>
                                <Card style={{ width: '16rem' }}>
                                    <div className={accountStyle.sec6_border_4}>                                    
                                    </div>
                                    <div style={{justifyContent: 'space-between !important'}}>
                                        <h4 className={accountStyle.card_heading} 
                                            style={{display:'inline-block'}}
                                        >Sales</h4>
                                        <img src={'../../pricing/sale.png'} style={{
                                            width:'50px',height:'50px',overflow:'hidden',
                                            marginTop:'-4px',float:'right'
                                        }}/>
                                    </div>
                                    <div className={accountStyle.card_body}
                                        style={{color: 'rgb(52, 58, 64)'}}
                                    >
                                        <p className={accountStyle.card_p}>Track expenses and re-invoice them in batches.</p>
                                    </div>

                                    <div className={accountStyle.card_footer}>
                                        <div className={accountStyle.card_footerLink}>
                                                <Link to="/" className={accountStyle.link}>
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
            <footer className={footerStyle.footer_style}>
                <div style={{textAlign:"center"}}>
                {/* marginTop:'50px' */}
                    {/* <img src={'../../odoo_logo1.png'} width='100px'
                        style={{
                            marginTop:'3em',
                            marginBottom:'3em',
                            backgroundPosition: '100% 0',
                            backgroundSize: 'auto 30px'
                        }}
                    /> */}
                    <span className={footerStyle.logo__} style={{
                            marginTop:'3em',
                            marginBottom:'3em',
                            
                        }}></span>
                </div>

                <Container>
                    <Row>
                        <Col md="7">
                            <Row>
                                <Col md="4">
                                    <div className={footerStyle.menu_title}>Community</div>
                                    <div>
                                        <div>
                                            <Link to="/" className={footerStyle.all_link}>User Documentation</Link>
                                        </div>
                                        <div style={{marginTop: '-5px'}}>
                                            <Link to="/" className={footerStyle.all_link}>Mailing List</Link>
                                        </div>
                                        <div style={{marginTop: '-5px'}}>
                                            <Link to="/" className={footerStyle.all_link}>Forum</Link>
                                        </div>

                                        <div style={{margin:'10px'}}></div>

                                        <div>
                                            <Link to="/" className={footerStyle.all_link}>eLearning Platform</Link>
                                        </div>
                                        
                                        <div style={{margin:'10px'}}></div>

                                        <div>
                                            <Link to="/" className={footerStyle.all_link}>Write fro Community</Link>
                                        </div>

                                        <div style={{margin:'10px'}}></div>

                                        <div className={footerStyle.menu_title}>Developers</div>
                                        <div style={{margin:'10px'}}></div>
                                        <div>
                                            <Link to="/" className={footerStyle.all_link}>Dev documentation</Link>
                                        </div>
                                        <div style={{marginTop: '-5px'}}>
                                            <Link to="/" className={footerStyle.all_link}>Github</Link>
                                        </div>
                                        <div style={{margin:'10px'}}></div>
                                        <div>
                                            <Link to="/" className={footerStyle.all_link}>Download</Link>
                                        </div>
                                        <div style={{marginTop: '-5px'}}>
                                            <Link to="/" className={footerStyle.all_link}>Runbot</Link>
                                        </div>
                                        <div style={{marginTop: '-5px'}}>
                                            <Link to="/" className={footerStyle.all_link}>translation</Link>
                                        </div>
                                    </div>
                                </Col>
                                <Col md="4">
                                    <div className={footerStyle.menu_title}>Services</div>
                                    <div>
                                        
                                        <div>
                                            <Link to="/" className={footerStyle.all_link}>Odoo Cloud Platform</Link>
                                        </div>

                                        <div style={{margin:'10px'}}></div>

                                        <div>
                                            <Link to="/" className={footerStyle.all_link}>Support</Link>
                                        </div>
                                        <div style={{marginTop: '-5px'}}>
                                            <Link to="/" className={footerStyle.all_link}>Upgrade</Link>
                                        </div>
                                        
                                        <div style={{margin:'10px'}}></div>

                                        <div>
                                            <Link to="/" className={footerStyle.all_link}>Find a Partner</Link>
                                        </div>
                                        <div style={{marginTop: '-5px'}}>
                                            <Link to="/" className={footerStyle.all_link}>Become a Partner</Link>
                                        </div>

                                        <div style={{margin:'10px'}}></div>

                                        <div className={footerStyle.all_link}>Education</div>
                                    
                                    </div>
                                </Col>
                                <Col md="4">
                                    <div className={footerStyle.menu_title}>About us</div>
                                    <div>
                                        
                                        <div>
                                            <Link to="/" className={footerStyle.all_link}>Our Company</Link>
                                        </div>
                                        <div style={{marginTop: '-5px'}}>
                                            <Link to="/" className={footerStyle.all_link}>Contact</Link>
                                        </div>

                                        <div style={{margin:'10px'}}></div>

                                        <div>
                                            <Link to="/" className={footerStyle.all_link}>Events</Link>
                                        </div>
                                        <div style={{marginTop: '-5px'}}>
                                            <Link to="/" className={footerStyle.all_link}>Blog</Link>
                                        </div>
                                        <div style={{marginTop: '-5px'}}>
                                            <Link to="/" className={footerStyle.all_link}>Customers</Link>
                                        </div>

                                        <div style={{margin:'10px'}}></div>

                                        <div className={footerStyle.menu_title}>Jobs</div>
                                        
                                        <div style={{margin:'10px'}}></div>

                                        <div>
                                            <Link to="/" className={footerStyle.all_link}>White Paper</Link>
                                        </div>
                                        <div style={{marginTop: '-5px'}}>
                                            <Link to="/" className={footerStyle.all_link}>In the Press</Link>
                                        </div>

                                        <div style={{margin:'10px'}}></div>

                                        <div>
                                            <Link to="/" className={footerStyle.all_link} style={{display:'inline-block'}}>Legal</Link>&nbsp;|&nbsp;
                                            <Link to="/" className={footerStyle.all_link} style={{display:'inline-block'}}>Privacy</Link>&nbsp;|&nbsp;
                                            <Link to="/" className={footerStyle.all_link} style={{display:'inline-block'}}>GDPR</Link>
                                        </div>
                                        <div style={{marginTop: '-5px'}}>
                                        <Link to="/" className={footerStyle.all_link} style={{display:'inline-block'}}>Security</Link>&nbsp;|&nbsp;
                                            <Link to="/" className={footerStyle.all_link} style={{display:'inline-block'}}>SLA</Link>
                                        </div>

                                        
                                    
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col md="5">
                            <div>
                                <Link to="#" style={{
                                        }}
                                        className={footerStyle.english}>
                                        
                                    <img src={'../../en_US.png'} style={{display:'inline-block'}}/>
                                    <p style={{display:'inline-block',margin:'10px',
                                    }}>English</p>
                                </Link>
                                
                            </div>
                            <div style={{borderBottom:'.1px solid grey',marginTop:'14px'}}></div>

                            <div style={{marginTop:'18px'}}>
                                <p>
                                    <small>
                                        <span style={{
                                            lineHeight:'1',
                                            fontSize:'12px'
                                        }}>
                                            Odoo is a suite of open source business apps that cover all your company needs: CRM, 
                                            eCommerce, accounting, inventory, point of sale, project management, etc.
                                        </span>
                                        <br/><br/>
                                        <span style={{
                                            lineHeight:'1',
                                            fontSize:'12px'
                                        }}>
                                            Odoo's unique value proposition is to be at the same time
                                            very easy to use and fully integrated.
                                        </span>
                                    </small>
                                </p>
                            </div>
                                        
                            <div>
                                <Link to="#" style={{
                                        fontSize: '0.9em',
                                        fontWeight: '600',
                                        display:'inline-block',
                                        marginLeft:'-5px'}}
                                        className={footerStyle.english}>
                                        
                                    <img src={'../../facebook-16.png'} style={{}}/>
                                </Link>

                                <Link to="#" style={{
                                        fontSize: '0.9em',
                                        fontWeight: '600',
                                        display:'inline-block',
                                        marginLeft:'20px'}}
                                        className={footerStyle.english}>
                                        
                                    <img src={'../../twitter-16.png'} style={{}}/>
                                    
                                </Link>

                                <Link to="#" style={{
                                        fontSize: '0.9em',
                                        fontWeight: '600',
                                        display:'inline-block',marginLeft:'20px'}}
                                        className={footerStyle.english}>
                                        
                                    <img src={'../../linkedin-16.png'} style={{}}/>
                                    
                                </Link>

                                <Link to="#" style={{
                                        fontSize: '0.9em',
                                        fontWeight: '600',
                                        display:'inline-block',marginLeft:'20px'}}
                                        className={footerStyle.english}>
                                        
                                    <img src={'../../message-16.png'} style={{}}/>
                                    
                                </Link>
                                
                            </div>
                            
                        </Col>
                    </Row>
                    <div>
                        <Link className={footerStyle.all_link}>
                        <p className={footerStyle.text} style={{display:'inline-block'}}>Website made with </p>
                        <span className={footerStyle.logo__}></span>
                        </Link>
                    </div>
                </Container>
            </footer>
        </div>
        
    )
}
export default AccountingPage
