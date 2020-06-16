import React,{Component} from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'

import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout'
import { Row, Col,Container,Card,Form,Button} from 'react-bootstrap'
import productStyle from './Product.module.scss'
import headerStyle  from './Product.module.scss'
import footerStyle  from './Product.module.scss'
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
            <SEO title="Product" />
            <div>
                <section>
                    <Container>
                        <div style={{}}>
                            <h1 className={productStyle.title}>
                                Beautiful <strong>Software Products</strong> to make your life easy
                            </h1>
                            <h4 className={productStyle.title_2}>more efficient, more productive</h4>
                            {/* <div style={{    position: 'absolute',paddingTop: '350px'}}>
                                <Link to="/" className={productStyle.title_link}
                                style={{position: 'relative',overflow: 'hidden'}}    
                            >
                                Start Now - It's Free
                            </Link>
                            </div> */}
                        </div>
                    </Container>
                    <img src={'../../common_banner.jpg'} style={{width:'100%'}}/>
                </section>
            
                <section style={{backgroundColor:'#F3F4F5',position:'relative',width:'100%'}}>
                    {/* <Container> */}
                        {/* <Container> */}
                        <div className={productStyle.sec_2} style={{textAlign:'center',marginTop:'-50px'}}>
                            {/* <div>
                                <img src={'../../Product.jpeg'} style={{width:'60%'}}/>
                            </div> */}
                            {/* style={{backgroundColor: '#495057',transition: 'background 0.5s ease 0s'}} */}
                            <div className={productStyle.main_img_div}>
                                <img src={'../../Product.jpeg'} 
                                className={productStyle.img_main}
                                style={{}}/>
                            </div>
                        </div>
                        {/* </Container> */}
                    {/* </Container> */}
                </section>
                {/* style={{backgroundColor:'white',position:'relative',width:'100%'}} */}
                          
                <section style={{backgroundColor:"#E9ECEF"}}>
                    <Container>
                        <div style={{padding:'10px'}}></div>
                        <div style={{textAlign:"center"}}>
                            <h2 className={productStyle.sec6_title}>
                                Stop recoding transactions manually
                            </h2>
                            <h4 className={productStyle.sec6_title_1}>
                                Integrated with other applications
                            </h4>
                        </div>
                        <div style={{padding:'20px'}}></div>
                        <Row>
                            <Col md="3" style={{paddingLeft:'15px',paddingRight:'15px'}}>
                                <Card style={{ width: '16rem' }}>
                                    <div className={productStyle.sec6_border_1}>                                   
                                    </div>
                                    <div style={{justifyContent: 'space-between !important'}}>
                                        <h4 className={productStyle.card_heading} 
                                            style={{display:'inline-block'}}
                                        >Microsoft</h4> 
                                        <img src={'../../pricing/expenses.png'} style={{
                                            width:'50px',height:'50px',overflow:'hidden',
                                            marginTop:'-4px',float:'right'
                                        }}/>
                                    </div>
                                    <div></div>
                                    <div className={productStyle.card_body}
                                        style={{color: 'rgb(52, 58, 64)'}}
                                    >
                                        <p className={productStyle.card_p}>Beautiful Software Products to make your life easy</p>
                                    </div>

                                    <div className={productStyle.card_footer}>
                                        <div className={productStyle.card_footerLink}>
                                                <Link to="/Product" className={productStyle.link}>
                                                    more
                                                </Link>
                                            </div>
                                    </div>
                                </Card>
                            </Col>

                            <Col md="3" style={{paddingLeft:'15px',paddingRight:'15px'}}>
                                <Card style={{ width: '16rem' }}>
                                    <div className={productStyle.sec6_border_2}>                                    
                                    </div>
                                    <div style={{justifyContent: 'space-between !important'}}>
                                        <h4 className={productStyle.card_heading} 
                                            style={{display:'inline-block'}}
                                        >Kaspersky</h4>
                                        <img src={'../../pricing/inventory.png'} style={{
                                                width:'50px',height:'50px',overflow:'hidden',
                                                marginTop:'-4px',float:'right'
                                            }}/>
                                    </div>

                                    <div className={productStyle.card_body}
                                        style={{color: 'rgb(52, 58, 64)'}}
                                    >
                                        <p className={productStyle.card_p}>Beautiful Software Products to make your life easy</p>
                                    </div>

                                    <div className={productStyle.card_footer}>
                                        <div className={productStyle.card_footerLink}>
                                                <Link to="/Product" className={productStyle.link}>
                                                    more
                                                </Link>
                                            </div>
                                    </div>
                                </Card>
                            </Col>

                            <Col md="3" style={{paddingLeft:'15px',paddingRight:'15px'}}>
                                <Card style={{ width: '16rem' }}>
                                    <div className={productStyle.sec6_border_3}>                                    
                                    </div> 
                                    <div style={{justifyContent: 'space-between !important'}}>
                                        <h4 className={productStyle.card_heading} 
                                            style={{display:'inline-block'}}
                                        >Adobe</h4>
                                        <img src={'../../pricing/point_of_sale.png'} style={{
                                            width:'50px',height:'50px',overflow:'hidden',
                                            marginTop:'-4px',float:'right'
                                        }}/>
                                    </div>
                                    <div className={productStyle.card_body}
                                        style={{color: 'rgb(52, 58, 64)'}}
                                    >
                                        <p className={productStyle.card_p}>Beautiful Software Products to make your life easy</p>
                                    </div>

                                    <div className={productStyle.card_footer}>
                                        <div className={productStyle.card_footerLink}>
                                                <Link to="/Product" className={productStyle.link}>
                                                    more
                                                </Link>
                                            </div>
                                    </div>
                                    
                                </Card>
                            </Col>

                            <Col md="3" style={{paddingLeft:'15px',paddingRight:'15px'}}>
                                <Card style={{ width: '16rem' }}>
                                    <div className={productStyle.sec6_border_4}>                                    
                                    </div>
                                    <div style={{justifyContent: 'space-between !important'}}>
                                        <h4 className={productStyle.card_heading} 
                                            style={{display:'inline-block'}}
                                        >Redhat</h4>
                                        <img src={'../../pricing/sale.png'} style={{
                                            width:'50px',height:'50px',overflow:'hidden',
                                            marginTop:'-4px',float:'right'
                                        }}/>
                                    </div>
                                    <div className={productStyle.card_body}
                                        style={{color: 'rgb(52, 58, 64)'}}
                                    >
                                        <p className={productStyle.card_p}>Beautiful Software Products to make your life easy</p>
                                    </div>

                                    <div className={productStyle.card_footer}>
                                        <div className={productStyle.card_footerLink}>
                                                <Link to="/Product" className={productStyle.link}>
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
