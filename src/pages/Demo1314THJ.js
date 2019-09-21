import React, { Component } from 'react';
import {Row, Col,Input,Table,Button,message} from "antd";
import golbal from "@/golbal";

class Demo1314THJ extends Component {
    componentDidMount() {
        this.selectAll();
    }
    componentWillUnmount(){
    }
    state = {
        name:"",
        code:"",
        dataSource:[],
        dataSource2:[],
    };

    selectAll=()=>{
        this.selectAllAll();
        const url=golbal.localhostUrl+"HJList/select0";
        fetch(url, {
            method: "POST",
            mode: "cors",
            credentials:"include",//跨域携带cookie
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify({
            }),
        }).then(function (res) {//function (res) {} 和 res => {}效果一致
            return res.json()
        }).then(json => {
            // get result
            const data = json;
            console.log(data);
            this.setState({
                dataSource:data.data,
            })
        }).catch(function (e) {
            console.log("fetch fail");
            alert('系统错误');
        });
    }
    selectAllAll=()=>{
        const url=golbal.localhostUrl+"HJList/selectAll";
        fetch(url, {
            method: "POST",
            mode: "cors",
            credentials:"include",//跨域携带cookie
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify({
            }),
        }).then(function (res) {//function (res) {} 和 res => {}效果一致
            return res.json()
        }).then(json => {
            // get result
            const data = json;
            console.log(data);
            this.setState({
                dataSource2:data.data,
            })
        }).catch(function (e) {
            console.log("fetch fail");
            alert('系统错误');
        });
    }
    call=()=>{
        const url=golbal.localhostUrl+"HJList/call";
        fetch(url, {
            method: "POST",
            mode: "cors",
            credentials:"include",//跨域携带cookie
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify({
                name:this.state.name,
                code:this.state.code
            }),
        }).then(function (res) {//function (res) {} 和 res => {}效果一致
            return res.json()
        }).then(json => {
            // get result
            const data = json;
            console.log(data);
            if(data.status){
                message.success(data.message)
            }else {
                message.error(data.message)
            }
            this.selectAll();
        }).catch(function (e) {
            console.log("fetch fail");
            alert('系统错误');
        });
    }
    callNext=()=>{
        const url=golbal.localhostUrl+"HJList/callNext";
        fetch(url, {
            method: "POST",
            mode: "cors",
            credentials:"include",//跨域携带cookie
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify({}),
        }).then(function (res) {//function (res) {} 和 res => {}效果一致
            return res.json()
        }).then(json => {
            // get result
            const data = json;
            console.log(data);
            if(data.status){
                message.success(data.message)
            }else {
                message.error(data.message)
            }
            this.selectAll();
        }).catch(function (e) {
            console.log("fetch fail");
            alert('系统错误');
        });
    }
    callOne=(id)=>{
        const url=golbal.localhostUrl+"HJList/callOne?id="+id;
        fetch(url, {
            method: "POST",
            mode: "cors",
            credentials:"include",//跨域携带cookie
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify({}),
        }).then(function (res) {//function (res) {} 和 res => {}效果一致
            return res.json()
        }).then(json => {
            // get result
            const data = json;
            console.log(data);
            if(data.status){
                message.success(data.message)
            }else {
                message.error(data.message)
            }
            this.selectAll();
        }).catch(function (e) {
            console.log("fetch fail");
            alert('系统错误');
        });
    }
render() {
    const columns=[
        {
            title: '队号',
            dataIndex:"id",
        },{
            title: '学号',
            dataIndex:"code",
        },{
            title: '姓名',
            dataIndex:"name",
        },{
            title: '排队时间',
            dataIndex:"time",
        },{
            title: '操作',
            render:(item)=>{
                return <Button onClick={()=>{this.callOne(item.id)}}>验收完成</Button>
            }
        }
    ]
    const columns2=[
        {
            title: '队号',
            dataIndex:"id",
        },{
            title: '学号',
            dataIndex:"code",
        },{
            title: '姓名',
            dataIndex:"name",
        },{
            title: '排队时间/验收时间',
            dataIndex:"time",
        },{
            title: '状态',
            dataIndex:"status",
            render:(item)=>{
                switch (item) {
                    case "0":
                        return "未验收"
                    case "1":
                        return "已验收"
                    default :
                        return item
                }
            }
        }
    ]
    return (
        <div
            style={{backgroundColor:"white"}}
        >
            <div
                style={{width:"100%",height:100,fontSize:30}}
            >
                {this.state.dataSource.map((item,i)=>{
                    if(i===0){
                        return item.code
                    }else{
                        return ""
                    }
                })}
                <br/>
                {this.state.dataSource.map((item,i)=>{
                    if(i===0){
                        return item.name
                    }else{
                        return ""
                    }
                })}            </div>
            <Button
                style={{width:"100%",height:200,fontSize:50}}
                onClick={this.callNext}
            >
                下一个
            </Button>
            <br/>
            <Table
                rowKey={record=>record.id}
                columns={columns}
                dataSource={this.state.dataSource}
            />
            <Table
                rowKey={record=>record.id}
                columns={columns2}
                dataSource={this.state.dataSource2}
            />
        </div>
    )}
}


export default Demo1314THJ;
