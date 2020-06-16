import React,{ Component,useEffect } from 'react'
import {render } from 'react-dom';
import {Link, graphql, useStaticQuery} from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row,Col,Nav, NavDropdown,Navbar,Container } from 'react-bootstrap'
import headerStyle from './header_.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudSunRain, faAngleDown,faAngelUp, faCaretDown,faCaretSquareDown} from '@fortawesome/free-solid-svg-icons'
import PropTypes from "prop-types"

// window.onscroll = function() {scrollFunction()};
//       function scrollFunction() {
//         if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
//           document.getElementById("header_part").style.background = '#86597A'
//           document.getElementById("menu_color").style.color = '#000' 
//         }
//          else {
//           document.getElementById("header_part").style.background  = 'none'
//         }
//       }
 const Header = ({ siteTitle }) =>{
  //  render(){
    return(

      // Fixed Position HEader
      <header>
        <div  className={headerStyle.header_main} id='header_part'>
          <div className={headerStyle.header_main_2}>
            <Link to="/" className={headerStyle.link} style={{position:'relative',overflow:'hidden'}}>
              {/* <img src={'../../NK_.png'} style={{zIndex:'99999'}}/> */}
              <span className={headerStyle.logo__}></span>
            </Link>
          
            <div className={headerStyle.header_right}>
              {/* <div style={{position:'relative',overflow:'hidden'}}>
                <Link to="#" className={'headerStyle.header_right_1'}
                  style={{padding:'0 20px',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    color:'#343a40',
                    textDecoration:'none'}}
                >sign in</Link>
              </div>
              
              <Link to="/particle" className={headerStyle.try_it_free} >
                <p style={{marginTop:'3px'}}>Try it Free</p>
              </Link> */}
            </div>

            {/* style={{zIndex:'99999',textAlign:'center',marginTop:'12px',color:'white'}} */}
            <div className={headerStyle.item_navbar} id="menu_color" 
              style={{zIndex:'99999',textAlign:'center',marginTop:'12px',color:'white'}}>
              <div  className={`${headerStyle.item_dropdown}`}>
                <div className={`${headerStyle.menu_item} ${headerStyle.item___dropdown}`}>Apps&nbsp; 
                <span><FontAwesomeIcon icon={faAngleDown} /></span>

                <div className={headerStyle.item_dropdown_content}>
                  <Container>
                    <Row style={{paddingTop:'40px',paddingBottom:'60px'}}>
                      <Col style={{padding:'10px'}}>
                        <div className={`${headerStyle.menu_common}`}>
                          <div className={`${headerStyle.s_l}`}>Software Licensing</div>
                          <div className={`${headerStyle.common__}`}>validate your software</div>
                        </div>
                        <div className={headerStyle.content_item}>
                          <div><Link to="/Product" className={headerStyle.content_link_item}>Microsoft</Link></div>
                          <div><Link to="/Product" className={headerStyle.content_link_item}>Kaspersky</Link></div>
                          <div><Link to="/Product" className={headerStyle.content_link_item}>Autocad</Link></div>
                          <div><Link to="/Product" className={headerStyle.content_link_item}>Team Viewer</Link></div>
                          <div><Link to="/Product" className={headerStyle.content_link_item}>Trend Micro</Link></div>
                          <div><Link to="/Product" className={headerStyle.content_link_item}>Avira</Link></div>
                          <div><Link to="/Product" className={headerStyle.content_link_item}>Adobe</Link></div>
                          <div><Link to="/Product" className={headerStyle.content_link_item}>Redhat</Link></div>
                        </div> 
                      </Col>
                      <Col style={{padding:'10px',borderLeft:'.1px solid grey'}}>
                        <div className={`${headerStyle.menu_common}`}>
                          <div className={`${headerStyle.s_d}`}>Software Development</div>
                          <div className={`${headerStyle.common__}`}>develop your software</div>
                        </div>
                        <div className={headerStyle.content_item}>
                          <div><Link to="/iFleet" className={headerStyle.content_link_item}>iFleet</Link></div>
                          <div><Link to="/NexCase Book" className={headerStyle.content_link_item}>NexCase Book</Link></div>
                          <div><Link to="/BizView" className={headerStyle.content_link_item}>BizView</Link></div>
                          <div><Link to="/Micro Finance" className={headerStyle.content_link_item}>Micro Finance</Link></div>
                          <div><Link to="/Nexfleet" className={headerStyle.content_link_item}>NexFleet</Link></div>
                          <div><Link to="/Data Tools" className={headerStyle.content_link_item}>Data Tools</Link></div>
                          <div><Link to="/NexComm Chatbot" className={headerStyle.content_link_item}>NaxComm Chatbot</Link></div>
                          <div><Link to="/Workshop Manager" className={headerStyle.content_link_item}>WorkShop Manager</Link></div>
                        </div> 
                      </Col>
                      <Col style={{padding:'10px',borderLeft:'.1px solid grey'}}>
                      <div className={`${headerStyle.menu_common}`}>
                        <div className={` ${headerStyle.a_d}`}>Apps Development</div>
                        <div className={`${headerStyle.common__}`}>develop your apps</div>
                      </div>
                      <div className={headerStyle.content_item}>
                          <div><Link to="/iFleet Driver" className={headerStyle.content_link_item}>iFleet Driver</Link></div>
                          <div><Link to="/iFleet User" className={headerStyle.content_link_item}>iFleet User</Link></div>
                          <div><Link to="/nexParc" className={headerStyle.content_link_item}>nexParc</Link></div>
                          <div><Link to="/Pick & Drop" className={headerStyle.content_link_item}>Pick & Drop</Link></div>
                          <div><Link to="/Windows PID" className={headerStyle.content_link_item}>Windows PID</Link></div>
                          <div><Link to="/Sales Combat" className={headerStyle.content_link_item}>Sales Combat</Link></div>
                          <div><Link to="/Defect part record" className={headerStyle.content_link_item}>DEFECT part record</Link></div>
                          <div><Link to="" className={headerStyle.content_link_item}>Arirang Aviation</Link></div>
                        </div>  
                      
                      </Col>
                      <Col style={{padding:'10px',borderLeft:'.1px solid grey'}}>
                        <div className={`${headerStyle.menu_common}`}>
                          <div className={` ${headerStyle.w_d}`}>Website Development</div>
                          <div className={`${headerStyle.common__}`}>develop your website</div>
                         </div> 
                         <div className={headerStyle.content_item}>
                         <div><a href='https://blackboard.com.bd/' className={headerStyle.content_link_item}>Blackboard</a></div>
                          <div><a href="https://www.nexparc.com/" className={headerStyle.content_link_item}>nexParc</a></div>
                          <div><a href="https://mindshaper.xyz/" className={headerStyle.content_link_item}>Mindshaper</a></div>
                          <div><a href="/" className={headerStyle.content_link_item}>nexFleet</a></div>
                          <div><a href="http://www.e-commercebarta.com/" className={headerStyle.content_link_item}>E-commerce Barta</a></div>
                          <div><a href="/" className={headerStyle.content_link_item}>Horek rokom</a></div>
                          
                        </div>
                      </Col>   
                    </Row>
                  </Container>  
                </div>
              </div>
              <Link to='/tour' className={headerStyle.menu_item}>Tour </Link>
              <Link to='/pricing' className={headerStyle.menu_item}>Pricing</Link>
              {/* <Link to='/learn' className={headerStyle.menu_item}>learn</Link> */}
              </div>
            </div>
          </div>  
        </div>
      </header>
    )
  // }
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header



// constructor(){
//   super();
//   this.state={
//     scrolled : false,
//   };
// }
// componentDidMount(){
//   window.addEventListener ('scroll',()=>{
//     const isTop = window.scrollY<100;
//     if(isTop != true){
//       this.setState({scrolled:true});
//     }else{
//       this.setState({scrolled:false});
//     }
//   });
// }
// componentWillUnmount(){
//   window.removeEventListener('scroll');
// }