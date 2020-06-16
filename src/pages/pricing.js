import React,{Component, useContext} from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'

import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout'
import { Row, Col,Container,Form,Button,Nav,Card,FAQ} from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import pricingStyle from './pricing.module.scss'
import SEO from "../components/seo"
import { GlobalDispatchContext } from "../provider/provider"

import Right from "../components/pricing_right"
import Left from "../components/pricing_left"
// function PricingPage () {
// class PricingPage extends Component{
const PricingPage = () => {
    const dispatch = useContext(GlobalDispatchContext);
    // render(){
        return(
            <Layout>
            <SEO title="Pricing" />
                <section className={pricingStyle.banner}>
                    <h1 className={pricingStyle.odoo_pricing}>Nexkraft Pricing</h1>
                </section>
                <section style={{backgroundColor: '#f8f9fa',fontSize: '14px',lineHeight: '1.4',paddingTop:'35px',height: '580px'}}>
                    
                    <Container className={pricingStyle.container}>
                        {/* <form action="" method="POST"> */}
                            <Row className={pricingStyle.row_style}>
                            
                                <Col md="8">
                                                                      
                                    <div>
                                        <span><h3 className={pricingStyle.user_text}>choose your <b>Apps</b></h3></span>
                                    </div>
                                    
                                    <Left />

                                </Col>
                                <Col md="4">
                                    <div>
                                        <div className={pricingStyle.user_text}>
                                            <Right/> 
                                            {/* <UserForm/> */}
                                        </div>
                                    </div>
                                    
                                </Col>
                            </Row>
                        {/* </form> */}
                    </Container>
                </section>
            </Layout>
        )    
    // }
}
export default PricingPage
