import React,{Component} from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'

import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout'
import { Row, Col,Container,Card,Form,Button} from 'react-bootstrap'
import BizViewStyle from './BizView.module.scss'
import headerStyle  from './BizView.module.scss'
import footerStyle  from './BizView.module.scss'
import SEO from "../components/seo"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudSunRain, faArrowDown,faArrowUp, faCaretDown} from '@fortawesome/free-solid-svg-icons'
import {} from '@fortawesome/free-regular-svg-icons'
import Footer from '../components/footer'
import Header from '../components/header_'
function BizViewPage () {
    return(
        <div>
            <Header/>
            <SEO title="Contact Us" />
            <div>
                
            </div>
            <Footer/>
        </div>
        
    )
}
export default BizViewPage
