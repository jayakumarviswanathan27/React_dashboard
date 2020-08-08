import React, { Component } from 'react'
import { Layout } from 'antd';
import './content1.css'
import ProgressBar from 'react-bootstrap/ProgressBar'
import img from '../assets/React.png'
import { Progress } from 'antd';


const {  Content } = Layout;
 class Content1 extends Component {
    render() {
        return (
            <div>
                <Content style={{minHeight: 586}}>
              <div className="box">
                 <h2>WELCOME BACK JAYAKUMAR V </h2> 
                
                </div>  
                <div className="row">
                <div className="midbox" >
                    
                   <div className="head"> COURSE NAME</div> 
                   <div className="head" > Front-End Web Development with React JS</div>
                 
                  <div ><img className="design" src={img} alt="logo"/></div>
                   <div className="content1"><ProgressBar animated now={45} />
                       </div>
                </div> 
                
                <div className="midbox2">
                  <div className="head">SUMMARY</div>  
                  <div className="content1">Total Courses 5</div>
                
                  <div className="content2">Completed Courses 2</div>
                  
                  <div className="content2"><Progress type="circle" percent={40} width={80} /></div>
                  <div className="content2">Ongoing Courses 3</div>
                  
                  <div className="content2"><Progress type="circle" percent={60} width={80} /></div>
                  </div>
                     
                    </div>
                            
                </Content>
            </div>
        )
    }
}

export default Content1

