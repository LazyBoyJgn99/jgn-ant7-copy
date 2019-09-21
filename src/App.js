import React, { Component } from 'react';
import {Layout} from 'antd';
import {BrowserRouter as HashRouter, Route, Link} from 'react-router-dom';
import '@/css/Layout.css';
import '@/App.css';
import Demo from "./pages/Demo";
import Demo2 from "./pages/Demo2";
import Demo3 from "./pages/Demo3";
import Demo4 from "./pages/Demo4";
import Demo1314THJ from "./pages/Demo1314THJ";
class App extends Component {
    state={

    }
    goToIndex=()=>{
        document.getElementById("goToIndex").click();
    }
    render() {
        return (
            <div className="App" id="App">
                <HashRouter>
                <Layout style={{backgroundColor:"#999"}}>
                    <Layout.Header className={'Head'}>
                    </Layout.Header>
                    <Layout>
                        {/************************************核心页面************************************/}
                        <Layout.Content className='contentLayout'>
                            {/**********************************路由和Link**********************************/}
                            <Route path={"/index"} component={Demo} />
                            {/*<Route path={"/Demo1"} component={Demo1} />*/}
                            <Route path={"/Demo2"} component={Demo2} />
                            <Route path={"/Demo1"} component={Demo3} />
                            <Route path={"/Demo4"} component={Demo4} />
                            <Route path={"/Demo1314THJ"} component={Demo1314THJ} />
                            <Link to={"/index"} id={"goToIndex"}/>
                        </Layout.Content>
                    </Layout>
                        <Layout.Footer style={{backgroundColor:"#999"}}>
                            制作人 @JGN-MilK-2019
                        </Layout.Footer>
                </Layout>
                </HashRouter>
            </div>
        );
    }

}


export default App;

