import React, { Component } from 'react'
import { Layout } from 'antd';
import Content1 from './Content1';
import './main.css'
import { Menu } from 'antd';
import { AiFillFacebook} from "react-icons/ai";
import { AiFillInstagram} from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";


const { Header, Footer, Sider } = Layout;

 class Main extends Component {
    render() {
        return (
            <div>
            <Layout>
                <Layout>
                    <Sider >
                        <div className="rightside">
                    <div className="logo" >DASHBOARD</div>
                        <Menu theme="dark" mode="inline" >
                            
                        <Menu.Item  key="1"  className="menu1">MY COURSES</Menu.Item>
                        <Menu.Item key="2"  className="menu1">STATICTICS</Menu.Item>
                        <Menu.Item key="3"  className="menu1">ASSIGNMENT</Menu.Item>
                        <Menu.Item key="4"  className="menu1">OVERALL PERFORMANCE</Menu.Item>
                     
                        </Menu>
                        </div>
                        </Sider>
                        <Layout>
                        <Header theme="dark" ><h2 className="header">CREVICE</h2> </Header>
                        <Content1/>
                        </Layout>
                <Sider  className="col">
                        <div className="rightsider"><h3 className="sidehead">ABOUT US</h3></div>
                        <div className="rightsider">B-TECH student at MES College Of Engineering Kuttipuram</div>
                        <div className="rightsider"><h3 className="sidehead">CONTACT US</h3></div>
                        <div className="rightsider">
                        <Menu theme="dark" mode="inline" >
                            
                        <Menu.Item  ><AiFillFacebook/>  FACEBOOK</Menu.Item>
                        <Menu.Item ><AiFillInstagram/>  INSTAGRAM</Menu.Item>
                        <Menu.Item ><AiFillTwitterCircle/>  TWITTER</Menu.Item>
                        <Menu.Item ><AiFillLinkedin/>  LINKEDIN</Menu.Item>
                     
                        </Menu>
                      </div>
                        </Sider>
                </Layout>
        <Footer  style={{textAlign:"center"}}>Internship @ CREVICE</Footer>
        </Layout>
    
            </div>

        )
    }
}

export default Main
