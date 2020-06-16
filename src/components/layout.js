import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'
import Header from './header'
import Footer from './footer' 
import layoutStyle from './layout.module.scss'
import {Container} from 'react-bootstrap'
import Provider from "../provider/provider"
const Layout = (props) =>{

    const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
    return(
        <div style={{overflowX:'hidden'}}>
          <Provider>
            <Header siteTitle={data.site.siteMetadata.title}/>
                <div>
                    {props.children}
                    {props.preBodyComponents}
                </div>
            <Footer/>
          </Provider>
        </div>
    )
}
export default Layout