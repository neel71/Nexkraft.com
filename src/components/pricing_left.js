import React,  { useContext,Component } from "react"
import { GlobalDispatchContext } from "../provider/provider"
import pricingStyle from "../pages/pricing.module.scss"
import { Form ,Col,Button} from 'react-bootstrap'
// import Contact from './contact/contact'
import MultiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import RaisedButton from "material-ui/RaisedButton";
import TextField from 'material-ui/TextField'
import WorkshopManager from '../components/Workshop Manager/Workshop Manager'
import NexcommChatbot from '../components/NexComm Chatbot/NexComm Chatbot'
import DataTools from '../components/Data Tools/Data Tools'
import Nexfleet from '../components/Nexfleet/Nexfleet'
import MicroFinance from '../components/Micro Finance/Micro Finance'
import BizView from '../components/BizView/BizView'
import Ifleet from '../components/iFleet/iFleet'
import NexCaseBook from '../components/NexCase Book/NexCase Book'
import Nexparc from '../components/nexParc/nexParc'
const Left = () => {

        const dispatch = useContext(GlobalDispatchContext);
        return (
            <div>
                <div className={pricingStyle.form_row}>
                    <div style={{paddingRight: '5px',paddingLeft: '5px'}}>
                                                
                        <button className={pricingStyle.label__}
                            style={{display:'inline-block',marginRight:'10px'}} 
                            onClick={
                                () => {
                                    dispatch({title: "iFleet",
                                    data : <Ifleet/>
                                    });
                                    }
                            }
                            >

                            <div>
                                <div style={{width:'100%',display:'flex',width:'219px'}}>
                                                        <div style={{width:'22%'}}>
                                                            <img src={'../../pricing/crm.png'} 
                                                            alt="CRM" className={pricingStyle.img_fluid} style={{maxWidth:'45px'}}/>
                                                        </div>
                                                        <div style={{width:'71%'}}>
                                                            <div className={pricingStyle.head}>
                                                            iFleet 
        
                                                            </div>
                                                            <div className={pricingStyle.price}>
                                                                <b><span>$8.00</span>&nbsp;<span>USD</span></b>/month
                                                            </div>
                                                        </div>
                                                        <div style={{width:'7%'}}>
                                                            
                                                        </div>
                                                    </div>
                            </div>
                        </button>
    
                        <button className={pricingStyle.label__}
                            style={{display:'inline-block',marginRight:'10px'}} 
                            onClick ={
                                ()=>{
                                    dispatch({title: "nexParc",
                                    data: <Nexparc/>
                                    })
                                }
                            }>
                                                    <div>
                                                    {/* <button onClick={clickHandler}> */}
                                                    <div style={{width:'100%',display:'flex',width:'219px'}}>
                                                        <div style={{width:'22%'}}>
                                                            <img src={'../../pricing/invoicing.png'} 
                                                            alt="CRM" className={pricingStyle.img_fluid} style={{maxWidth:'45px'}}/>
                                                        </div>
                                                        <div style={{width:'71%'}}>
                                                            <div className={pricingStyle.head}>
                                                            nexParc 
        
                                                            </div>
                                                            <div className={pricingStyle.price}>
                                                                <b><span>$4.00</span>&nbsp;<span>USD</span></b>/month
                                                            </div>
                                                        </div>
                                                        <div style={{width:'7%'}}>
                                                            
                                                        </div>
                                                    </div>
                                                    {/* </button> */}
                                                </div>
                                                </button>
    
                        <button className={pricingStyle.label__}
                            style={{display:'inline-block',}} 
                            onClick ={
                                ()=>{
                                    dispatch({title: "NexCase Book",
                                    data: <NexCaseBook/>
                                    })
                                }
                            }>
                                                    <div>
                                                    <div style={{width:'100%',display:'flex',width:'218px'}}>
                                                        <div style={{width:'22%'}}>
                                                            <img src={'../../pricing/sale.png'} 
                                                            alt="CRM" className={pricingStyle.img_fluid} style={{maxWidth:'45px'}}/>
                                                        </div>
                                                        <div style={{width:'71%'}}>
                                                            <div className={pricingStyle.head}>
                                                                NexCase Book
                                                            </div>
                                                            <div className={pricingStyle.price}>
                                                                <b><span>$4.00</span>&nbsp;<span>USD</span></b>/month
                                                            </div>
                                                        </div>
                                                        <div style={{width:'7%'}}>
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                                </button>
                    
                    </div>
        
                    <div style={{paddingRight: '5px',paddingLeft: '5px'}}>
                        
                        <button className={pricingStyle.label__}
                            style={{display:'inline-block',marginRight:'10px'}} 
                            onClick ={
                                ()=>{
                                    dispatch({title: "Biz View",
                                    data: <BizView/>
                                    })
                                }
                            }>
                                                    <div style={{width:'100%',display:'flex',width:'219px'}}>
                                                        <div style={{width:'22%'}}>
                                                            <img src={'../../pricing/website.png'} 
                                                            alt="CRM" className={pricingStyle.img_fluid} style={{maxWidth:'45px'}}/>
                                                        </div>
                                                        <div style={{width:'71%'}}>
                                                            <div className={pricingStyle.head}>
                                                                BizView
                                                            </div>
                                                            <div className={pricingStyle.price}>
                                                                <b><span>$8.00</span>&nbsp;<span>USD</span></b>/month
                                                            </div>
                                                        </div>
                                                        <div style={{width:'7%'}}>
                                                            
                                                        </div>
                                                    </div>
                                                </button>
    
                        <button className={pricingStyle.label__}
                            style={{display:'inline-block',marginRight:'10px'}} 
                            onClick ={
                                () => {
                                    dispatch({title: "Micro Finance",
                                    data: <MicroFinance/>
                                    })
                                }
                            }>
                                                    <div style={{width:'100%',display:'flex',width:'219px'}}>
                                                        <div style={{width:'22%'}}>
                                                            <img src={'../../pricing/ecommerce.png'} 
                                                            alt="CRM" className={pricingStyle.img_fluid} style={{maxWidth:'45px'}}/>
                                                        </div>
                                                        <div style={{width:'71%'}}>
                                                            <div className={pricingStyle.head}>
                                                                Micro Finance
                                                            </div>
                                                            <div className={pricingStyle.price}>
                                                                <b><span>$4.00</span>&nbsp;<span>USD</span></b>/month
                                                            </div>
                                                        </div>
                                                        <div style={{width:'7%'}}>
                                                            
                                                        </div>
                                                    </div>
                                                </button>
    
                        <button className={pricingStyle.label__}
                            style={{display:'inline-block',}} 
                            onClick ={
                                () => {
                                    dispatch({title: "Nexfleet",
                                    data: <Nexfleet/>
                                    })
                                }
                            }
                            >
                                <div style={{width:'100%',display:'flex',width:'218px'}}>
                                                        <div style={{width:'22%'}}>
                                                            <img src={'../../pricing/point_of_sale.png'} 
                                                            alt="CRM" className={pricingStyle.img_fluid} style={{maxWidth:'45px'}}/>
                                                        </div>
                                                        <div style={{width:'71%'}}>
                                                            <div className={pricingStyle.head}>
                                                                Nexfleet
                                                            </div>
                                                            <div className={pricingStyle.price}>
                                                                <b><span>$8.00</span>&nbsp;<span>USD</span></b>/month
                                                            </div>
                                                        </div>
                                                        <div style={{width:'7%'}}>
                                                            
                                                        </div>
                                                    </div>
                        </button>
    
                    </div>
        
                    <div style={{paddingRight: '5px',paddingLeft: '5px'}}>
                                                
                        <button className={pricingStyle.label__}
                            style={{display:'inline-block',marginRight:'10px'}} 
                            onClick={
                                () => {
                                    dispatch({title: "Data Tools",
                                    data : <DataTools/>
                                    });
                                    }
                            }
                        >
                            <div style={{width:'100%',display:'flex',width:'219px'}}>
                                <div style={{width:'22%'}}>
                                                            <img src={'../../pricing/accounting.png'} 
                                                            alt="CRM" className={pricingStyle.img_fluid} style={{maxWidth:'45px'}}/>
                                                        </div>
                                <div style={{width:'71%'}}>
                                                            <div className={pricingStyle.head}>
                                                                Data Tools
                                                            </div>
                                                            <div className={pricingStyle.price}>
                                                                <b><span>$8.00</span>&nbsp;<span>USD</span></b>/month
                                                            </div>
                                                        </div>
                                <div style={{width:'7%'}}>
                                                            
                                                        </div>
                            </div>
                        </button>
    
                        <button className={pricingStyle.label__}
                            style={{display:'inline-block', marginRight:'9px'}} 
                            
                            onClick ={
                                () => {
                                    dispatch({title: "NexComm Chatbot",
                                    data: <NexcommChatbot/>
                                    })
                                }
                            }
                            >
                            <div style={{width:'100%',display:'flex',width:'219px'}}>
                                <div style={{width:'22%'}}>
                                    <img src={'../../pricing/project.png'} 
                                        alt="CRM" className={pricingStyle.img_fluid} style={{maxWidth:'45px'}}/>
                                </div>
                                <div style={{width:'71%'}}>
                                    <div className={pricingStyle.head}>
                                        NexComm Chatbot
                                    </div>
                                    <div className={pricingStyle.price}>
                                        <b><span>$8.00</span>&nbsp;<span>USD</span></b>/month
                                    </div>
                                </div>
                                <div style={{width:'7%'}}>
                                                            
                                </div>
                            </div>
                        </button>
    
                        <button className={pricingStyle.label__}
                            style={{display:'inline-block',}} 
                            
                            onClick ={
                                () => {
                                    dispatch({title: "Workshop Manager",
                                    data: <WorkshopManager/>
                                    })
                                }
                            }
                            >
                            <div style={{width:'100%',display:'flex',width:'219px'}}>
                                <div style={{width:'22%'}}>
                                    <img src={'../../pricing/product_lifestyle.png'} 
                                        alt="CRM" className={pricingStyle.img_fluid} style={{maxWidth:'45px'}}/>
                                </div>
                                <div style={{width:'70%'}}>
                                    <div className={pricingStyle.head}>
                                        WorkShop Manager
                                    </div>
                                    <div className={pricingStyle.price}>
                                        <b><span>$8.00</span>&nbsp;<span>USD</span></b>/month
                                    </div>
                                </div>
                                <div style={{width:'7%'}}>
                                                            
                                </div>
                            </div>
                        </button>
                                                
                    </div>
                </div>
            </div>
        )
    }
export default Left

