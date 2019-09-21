import React, { Component } from 'react';
import fly from "@/img/feixing.gif";
import fly_gif from "@/img/shanxian-export.gif";
import monster from "@/img/hound.gif";
import {Input,Modal,message,Row} from "antd";
import golbal from "@/golbal";
//判断2个div是否有交集,判断时以obj1作为固定的obj2作为移动的
function check(obj1, obj2) {
    //以obj1作为固定的参照物，使用时注意div是否有top与left，如果没有设置的话会是空值
    //obj2在obj1的上面 obj2.top+obj2.height<obj1.top
    //obj2在obj1的下面 obj2.top>obj1.top+obj1.height
    //obj2在obj1的左面 obj2.left+obj2.width<obj1.left
    //obj2在obj1的右面 obj2.left>obj1.left+obj1.width
    var obj1top = parseInt((obj1).css("top"));
    var obj1left = parseInt((obj1).css("left"));
    var obj1width = parseInt((obj1).width());
    var obj1height = parseInt((obj1).height());
    var obj2top = parseInt((obj2).css("top"));
    var obj2left = parseInt((obj2).css("left"));
    var obj2width = parseInt((obj2).width());
    var obj2height = parseInt((obj2).height());
    if ((obj2top + obj2height < obj1top) || (obj2top > obj1top + obj1height) || (obj2left + obj2width < obj1left) || (obj2left > obj1left + obj1width)) {
        return true;
    }
    else {
        return false;
    }
}
function score(score) {
    return Math.pow(score,2)-2147483000;
}
//两点之间的距离
function len(x1,y1,x2,y2){
    let len2=Math.pow(y1-y2,2)+Math.pow(x1-x2,2);
    let len=Math.sqrt(len2);
    return len;
}
function r(x,y) {
    let r2=Math.pow(x,2)+Math.pow(y,2);
    let r=Math.sqrt(r2);
    return r;
}
class Demo1 extends Component {
    componentDidMount(){
        this.selectAll();
        //键盘监听
        document.addEventListener("keydown", this.onKeyDown)
        //鼠标移动
        document.onmousemove=(e)=>{
            this.onMouseMove(e)
        }
        //鼠标按下
        document.onmousedown=(e)=>{
            console.log(e)
            console.log("点击")
            //this.moveToMouse();
            //this.moveToMouseSL();
            this.moveToMouseSL();
            this.mouse_timer = setInterval(() => {
                this.moveToMouseSL();
            }, 200)
        }
        //鼠标抬起
        document.onmouseup=(e)=>{
            console.log(e)
            console.log("点击")
            //this.moveToMouse();
            clearInterval(this.mouse_timer);
            this.moveToMouseSL();
            //this.monster1();
        }
        document.ontouchmove=(e)=>{
            console.log(e)
            console.log("触摸")
            this.onTouchMove(e)
            //this.moveToMouse();
            //clearInterval(this.mouse_timer);
            this.moveToMouseSL();
        }
        document.oncontextmenu = function(){
            return false;
        }
    }
    componentWillUnmount(){
        //键盘监听结束
        document.removeEventListener("keydown", this.onKeyDown)
    }
    // mainTimer = setInterval(() => {
    //     let box=document.getElementById("MainBox");
    //     let box1=document.getElementById("OtherBox");
    //     let box2=document.getElementById("Monster2");
    //     let box3=document.getElementById("Monster3");
    //     let box4=document.getElementById("Monster4");
    //     let box5=document.getElementById("Monster5");
    //     if(
    //         box===null||
    //         box1===null||
    //         box2===null||
    //         box3===null||
    //         box4===null||
    //         box5===null
    //     ){
    //         this.setState({
    //             score:this.state.score>this.state.time?this.state.score:this.state.time,
    //             touch:true,
    //         })
    //     }
    // }, 10000)
    timeButton=()=>{//计时器开关
        if (this.state.on) {
            //终止正在移动的怪物
            clearInterval(this.timer);
            clearInterval(this.m3_timer);
            clearInterval(this.m4_timer);
            clearInterval(this.m5_timer);
            clearInterval(this.m6_timer);
            clearInterval(this.t_timer);
            this.setState({
                touch: false,
            })
        } else {//开始
            //怪物们出现
            this.monster1();
            this.monster2();
            if (this.state.time>300){
                this.setState({time: this.state.time-300})
            }
            if (this.state.time>1000){
                this.monster3();
            }else{
                this.setState({
                    m_left: -100,
                    m_top: -100,
                    m2_left: -100,
                    m2_top: -100,
                    m3_left: -100,
                    m3_top: -100,
                    m4_left: -100,
                    m4_top: -100,
                    m5_left: -100,
                    m5_top: -100,
                    m6_left: -100,
                    m6_top: -100,
                    m7_left: -100,
                    m7_top: -100,
                    m8_left: -100,
                    m8_top: -100,
                    m9_left: -100,
                    m9_top: -100,
                    f_time:10,
                })
            }
            if (this.state.time>3000){
                this.monster4();
            }
            if (this.state.time>6666){
                this.monster5();
            }
            if (this.state.time>13000){
                this.monster6();
            }
            //计时器
            this.timer = setInterval(() => {
                if(this.state.touch){
                    this.setState({time: -1})
                    clearInterval(this.timer);
                }
                if (this.state.time===1000){
                    this.monster3();
                }
                if (this.state.time===3000){
                    this.monster4();
                }
                if (this.state.time===6666){
                    this.monster5();
                }
                if (this.state.time===13000){
                    this.monster6();
                }
                this.setState({time: this.state.time+1})
            }, 10)
            clearInterval(this.t_timer);
            this.t_timer = setInterval(() => {
                //console.log(t)//输出移动时间
                if(this.state.f_time<=20){
                    this.setState({
                        f_time:this.state.f_time+1
                    })
                }
            }, 1000)
        }
        //改变开始、暂停状态
        this.setState({
            on: !this.state.on,
            m_on:!this.state.on,
            m2_on:!this.state.on,
            m3_on:!this.state.on,
            m4_on:!this.state.on,
            m5_on:!this.state.on,
            m6_on:!this.state.on,
            m7_on:!this.state.on,
            m8_on:!this.state.on,
            m9_on:!this.state.on,
        },()=>{
            if(this.state.on){
                //作弊判断
                clearInterval(this.mainTimer);
                this.mainTimer = setInterval(() => {
                    let box=document.getElementById("MainBox");
                    let box1=document.getElementById("OtherBox");
                    let box2=document.getElementById("Monster2");
                    let box3=document.getElementById("Monster3");
                    let box4=document.getElementById("Monster4");
                    let box5=document.getElementById("Monster5");
                    let box6=document.getElementById("Monster6");
                    console.log(box)
                    console.log(box1)
                    console.log(box2)
                    console.log(box3)
                    console.log(box4)
                    console.log(box5)
                    if(
                        box===null||
                        box1===null||
                        box2===null||
                        box3===null||
                        box4===null||
                        box5===null||
                        box6===null
                    ){
                        this.setState({
                            score:this.state.score>this.state.time?this.state.score:this.state.time,
                            touch:true,
                        })
                    }else {
                        this.setState({
                            top:box.getBoundingClientRect().top+box.offsetHeight/2,
                            left:box.getBoundingClientRect().left+box.offsetWidth/2,
                        })
                    }
                }, 10000)
            }else {
                clearInterval(this.mainTimer);
            }
        })
    }
    //怪兽路径
    monster1=()=>{
        //console.log(window.innerWidth);
        //console.log(window.innerHeight);
        clearInterval(this.timer2);
        let innerWidth=window.innerWidth;
        let innerHeight=window.innerHeight;
        //计时器
        let endY=this.state.top;
        let endX=this.state.left;
        let thisY=this.state.m_top;
        let thisX=this.state.m_left;
        let len2=Math.pow(endY-thisY,2)+Math.pow(endX-thisX,2);
        let len=Math.sqrt(len2);
        //console.log("len",len)
        let t=len/this.state.m_v;
        let moveY=(endY-thisY)/t;
        let moveX=(endX-thisX)/t;
        //怪兽角度
        let m_turnWay = 0;
        let m_deg=Math.atan(moveY/moveX)*180/3.14
        if(moveX<0){
            m_turnWay=180;
        }
        this.setState({
            m_deg:m_deg,
            m_turnWay:m_turnWay,
        })
        //console.log("moveY",moveY);
        //console.log("moveX",moveX);
        //console.log(t)//输出移动时间
        this.timer2 = setInterval(() => {
            if(
                this.state.top+this.state.height/2<0||
                this.state.left+this.state.width/2<0||
                this.state.top+this.state.height/2>innerHeight||
                this.state.left+this.state.width/2>innerWidth
            ){
                this.setState({
                    score:this.state.score>this.state.time?this.state.score:this.state.time,
                    touch:true,
                })
            }
            if(this.state.m_on){
                if(
                    this.state.m_top+this.state.m_height<0||
                    this.state.m_left+this.state.m_width<0||
                    this.state.m_top>innerHeight||
                    this.state.m_left>innerWidth
                ){
                    if(Math.random()<0.5){
                        if(Math.random()<0.5){
                            this.setState({
                                m_top:0,
                                m_left:Math.random()*innerWidth
                            })
                        }else{
                            this.setState({
                                m_top:innerHeight,
                                m_left:Math.random()*innerWidth
                            })
                        }
                    }else{
                        if(Math.random()<0.5){
                            this.setState({
                                m_top:Math.random()*innerHeight,
                                m_left:0
                            })
                        }else{
                            this.setState({
                                m_top:Math.random()*innerHeight,
                                m_left:innerWidth
                            })
                        }
                    }
                    this.monster1();
                }
                this.checkCircle("MainBox", "OtherBox");
                this.setState({
                    m_top:this.state.m_top+moveY,
                    m_left:this.state.m_left+moveX,
                })
            }
        }, 10)
    }
    //怪兽路径
    monster2=()=>{
        clearInterval(this.m2_timer);
        let innerWidth=window.innerWidth;
        let innerHeight=window.innerHeight;
        //计时器
        let endY=this.state.top;
        let endX=this.state.left;
        let thisY=this.state.m2_top;
        let thisX=this.state.m2_left;
        let len2=Math.pow(endY-thisY,2)+Math.pow(endX-thisX,2);
        let len=Math.sqrt(len2);
        let t=len/this.state.m2_v;
        let moveY=(endY-thisY)/t;
        let moveX=(endX-thisX)/t;
        //怪兽角度
        let m2_turnWay = 0;
        let m2_deg=Math.atan(moveY/moveX)*180/3.14
        if(moveX<0){
            m2_turnWay=180;
        }
        console.log(Math.atan(moveY/moveX)*180/3.14)
        //console.log(Math.atan(-0.001))
        this.setState({
            m2_deg:m2_deg,
            m2_turnWay:m2_turnWay,
        })
        //console.log(t)//输出移动时间
        this.m2_timer = setInterval(() => {
            if(this.state.m2_on){
                if(
                    this.state.m2_top+this.state.m2_height<0||
                    this.state.m2_left+this.state.m2_width<0||
                    this.state.m2_top>innerHeight||
                    this.state.m2_left>innerWidth
                ){
                    if(Math.random()<0.5){
                        if(Math.random()<0.5){
                            this.setState({
                                m2_top:0,
                                m2_left:Math.random()*innerWidth
                            })
                        }else{
                            this.setState({
                                m2_top:innerHeight,
                                m2_left:Math.random()*innerWidth
                            })
                        }
                    }else{
                        if(Math.random()<0.5){
                            this.setState({
                                m2_top:Math.random()*innerHeight,
                                m2_left:0
                            })
                        }else{
                            this.setState({
                                m2_top:Math.random()*innerHeight,
                                m2_left:innerWidth
                            })
                        }
                    }
                    this.monster2();
                }
                this.checkCircle("MainBox", "Monster2");
                this.setState({
                    m2_top:this.state.m2_top+moveY,
                    m2_left:this.state.m2_left+moveX,
                })
            }
        }, 10)
    }
    //怪兽路径
    monster3=()=>{
        clearInterval(this.m3_timer);
        let innerWidth=window.innerWidth;
        let innerHeight=window.innerHeight;
        //计时器
        let endY=this.state.top;
        let endX=this.state.left;
        let thisY=this.state.m3_top;
        let thisX=this.state.m3_left;
        let len2=Math.pow(endY-thisY,2)+Math.pow(endX-thisX,2);
        let len=Math.sqrt(len2);
        let t=len/this.state.m3_v;
        let moveY=(endY-thisY)/t;
        let moveX=(endX-thisX)/t;
        //怪兽角度
        let m3_turnWay = 0;
        let m3_deg=Math.atan(moveY/moveX)*180/3.14
        if(moveX<0){
            m3_turnWay=180;
        }
        this.setState({
            m3_deg:m3_deg,
            m3_turnWay:m3_turnWay,
        })
        //console.log(t)//输出移动时间
        this.m3_timer = setInterval(() => {
            if(this.state.m3_on){
                if(
                    this.state.m3_top+this.state.m3_height<0||
                    this.state.m3_left+this.state.m3_width<0||
                    this.state.m3_top>innerHeight||
                    this.state.m3_left>innerWidth
                ){
                    if(Math.random()<0.5){
                        if(Math.random()<0.5){
                            this.setState({
                                m3_top:0,
                                m3_left:Math.random()*innerWidth
                            })
                        }else{
                            this.setState({
                                m3_top:innerHeight,
                                m3_left:Math.random()*innerWidth
                            })
                        }
                    }else{
                        if(Math.random()<0.5){
                            this.setState({
                                m3_top:Math.random()*innerHeight,
                                m3_left:0
                            })
                        }else{
                            this.setState({
                                m3_top:Math.random()*innerHeight,
                                m3_left:innerWidth
                            })
                        }
                    }
                    this.monster3();
                }
                this.checkCircle("MainBox", "Monster3");
                this.setState({
                    m3_top:this.state.m3_top+moveY,
                    m3_left:this.state.m3_left+moveX,
                })
            }
        }, 10)
    }
    //怪兽路径
    monster4=()=>{
        clearInterval(this.m4_timer);
        let innerWidth=window.innerWidth;
        let innerHeight=window.innerHeight;
        //计时器
        let endY=this.state.top;
        let endX=this.state.left;
        let thisY=this.state.m4_top;
        let thisX=this.state.m4_left;
        let len2=Math.pow(endY-thisY,2)+Math.pow(endX-thisX,2);
        let len=Math.sqrt(len2);
        let t=len/this.state.m4_v;
        let moveY=(endY-thisY)/t;
        let moveX=(endX-thisX)/t;
        //怪兽角度
        let m4_turnWay = 0;
        let m4_deg=Math.atan(moveY/moveX)*180/3.14
        if(moveX<0){
            m4_turnWay=180;
        }
        this.setState({
            m4_deg:m4_deg,
            m4_turnWay:m4_turnWay,
        })
        //console.log(t)//输出移动时间
        this.m4_timer = setInterval(() => {
            if(this.state.m4_on){
                if(
                    this.state.m4_top+this.state.m4_height<0||
                    this.state.m4_left+this.state.m4_width<0||
                    this.state.m4_top>innerHeight||
                    this.state.m4_left>innerWidth
                ){
                    if(Math.random()<0.5){
                        if(Math.random()<0.5){
                            this.setState({
                                m4_top:0,
                                m4_left:Math.random()*innerWidth
                            })
                        }else{
                            this.setState({
                                m4_top:innerHeight,
                                m4_left:Math.random()*innerWidth
                            })
                        }
                    }else{
                        if(Math.random()<0.5){
                            this.setState({
                                m4_top:Math.random()*innerHeight,
                                m4_left:0
                            })
                        }else{
                            this.setState({
                                m4_top:Math.random()*innerHeight,
                                m4_left:innerWidth
                            })
                        }
                    }
                    this.monster4();
                }
                this.checkCircle("MainBox", "Monster4");
                this.setState({
                    m4_top:this.state.m4_top+moveY,
                    m4_left:this.state.m4_left+moveX,
                })
            }
        }, 10)
    }
    //怪兽路径
    monster5=()=>{
        clearInterval(this.m5_timer);
        let innerWidth=window.innerWidth;
        let innerHeight=window.innerHeight;
        //计时器
        let endY=this.state.top;
        let endX=this.state.left;
        let thisY=this.state.m5_top;
        let thisX=this.state.m5_left;
        let len2=Math.pow(endY-thisY,2)+Math.pow(endX-thisX,2);
        let len=Math.sqrt(len2);
        let t=len/this.state.m5_v;
        let moveY=(endY-thisY)/t;
        let moveX=(endX-thisX)/t;
        //怪兽角度
        let m5_turnWay = 0;
        let m5_deg=Math.atan(moveY/moveX)*180/3.14
        if(moveX<0){
            m5_turnWay=180;
        }
        this.setState({
            m5_deg:m5_deg,
            m5_turnWay:m5_turnWay,
        })
        //console.log(t)//输出移动时间
        this.m5_timer = setInterval(() => {
            if(this.state.m5_on){
                if(
                    this.state.m5_top+this.state.m5_height<0||
                    this.state.m5_left+this.state.m5_width<0||
                    this.state.m5_top>innerHeight||
                    this.state.m5_left>innerWidth
                ){
                    if(Math.random()<0.5){
                        if(Math.random()<0.5){
                            this.setState({
                                m5_top:0,
                                m5_left:Math.random()*innerWidth
                            })
                        }else{
                            this.setState({
                                m5_top:innerHeight,
                                m5_left:Math.random()*innerWidth
                            })
                        }
                    }else{
                        if(Math.random()<0.5){
                            this.setState({
                                m5_top:Math.random()*innerHeight,
                                m5_left:0
                            })
                        }else{
                            this.setState({
                                m5_top:Math.random()*innerHeight,
                                m5_left:innerWidth
                            })
                        }
                    }
                    this.monster5();
                }
                this.checkCircle("MainBox", "Monster5");
                this.setState({
                    m5_top:this.state.m5_top+moveY,
                    m5_left:this.state.m5_left+moveX,
                })
            }
        }, 10)
    }
    //怪兽路径
    monster6=()=>{
        clearInterval(this.m6_timer);
        let innerWidth=window.innerWidth;
        let innerHeight=window.innerHeight;
        //计时器
        let endY=this.state.top;
        let endX=this.state.left;
        let thisY=this.state.m6_top;
        let thisX=this.state.m6_left;
        let len2=Math.pow(endY-thisY,2)+Math.pow(endX-thisX,2);
        let len=Math.sqrt(len2);
        let t=len/this.state.m6_v;
        let moveY=(endY-thisY)/t;
        let moveX=(endX-thisX)/t;
        //怪兽角度
        let m6_turnWay = 0;
        let m6_deg=Math.atan(moveY/moveX)*180/3.14
        if(moveX<0){
            m6_turnWay=180;
        }
        this.setState({
            m6_deg:m6_deg,
            m6_turnWay:m6_turnWay,
        })
        //console.log(t)//输出移动时间
        this.m6_timer = setInterval(() => {
            if(this.state.m6_on){
                if(
                    this.state.m6_top+this.state.m6_height<0||
                    this.state.m6_left+this.state.m6_width<0||
                    this.state.m6_top>innerHeight||
                    this.state.m6_left>innerWidth
                ){
                    if(Math.random()<0.5){
                        if(Math.random()<0.5){
                            this.setState({
                                m6_top:0,
                                m6_left:Math.random()*innerWidth
                            })
                        }else{
                            this.setState({
                                m6_top:innerHeight,
                                m6_left:Math.random()*innerWidth
                            })
                        }
                    }else{
                        if(Math.random()<0.5){
                            this.setState({
                                m6_top:Math.random()*innerHeight,
                                m6_left:0
                            })
                        }else{
                            this.setState({
                                m6_top:Math.random()*innerHeight,
                                m6_left:innerWidth
                            })
                        }
                    }
                    this.monster6();
                }
                this.checkCircle("MainBox", "Monster6");
                this.setState({
                    m6_top:this.state.m6_top+moveY,
                    m6_left:this.state.m6_left+moveX,
                })
            }
        }, 10)
    }
    //缓慢移动到鼠标位置
    moveToMouseSL=()=>{
        clearInterval(this.timer1);
        //计时器
        let endY=this.state.clientY;
        let endX=this.state.clientX;
        let thisY=this.state.top;
        let thisX=this.state.left;
        let len2=Math.pow(endY-thisY,2)+Math.pow(endX-thisX,2);
        let len=Math.sqrt(len2);
        //console.log("len",len)
        let t=len/this.state.v;
        let moveY=(endY-thisY)/t;
        let moveX=(endX-thisX)/t;
        //console.log("moveY",moveY)
        //console.log("moveX",moveX)
        if(moveX<0){
            this.setState({
                turnWay:180
            })
        }else{
            this.setState({
                turnWay:0
            })
        }
        this.timer1 = setInterval(() => {
            //console.log(t)//输出移动时间
            if(t<0){
                clearInterval(this.timer1);
            }
            this.setState({
                top:this.state.top+moveY,
                left:this.state.left+moveX,
            })
            t--;
        }, 10)
    }
    //判断2个div是否有交集,判断时以obj1作为固定的obj2作为移动的
    check=(obj1, obj2)=>{
        //有了这个方法，获取页面元素的位置就简单多了，*****************************重点参考
        //let X= this.getBoundingClientRect().left+document.documentElement.scrollLeft;
        //let Y =this.getBoundingClientRect().top+document.documentElement.scrollTop;

        //以obj1作为固定的参照物，使用时注意div是否有top与left，如果没有设置的话会是空值
        //obj2在obj1的上面 obj2.top+obj2.height<obj1.top
        //obj2在obj1的下面 obj2.top>obj1.top+obj1.height
        //obj2在obj1的左面 obj2.left+obj2.width<obj1.left
        //obj2在obj1的右面 obj2.left>obj1.left+obj1.width
        //console.log("check")
        let obj1top = parseInt(document.getElementById(obj1).getBoundingClientRect().top);
        let obj1left = parseInt(document.getElementById(obj1).getBoundingClientRect().left);
        let obj1width = parseInt(document.getElementById(obj1).offsetWidth);
        let obj1height = parseInt(document.getElementById(obj1).offsetHeight);
        let obj2top = parseInt(document.getElementById(obj2).getBoundingClientRect().top);
        let obj2left = parseInt(document.getElementById(obj2).getBoundingClientRect().left);
        let obj2width = parseInt(document.getElementById(obj2).offsetWidth);
        let obj2height = parseInt(document.getElementById(obj2).offsetHeight);
        if ((obj2top + obj2height < obj1top) || (obj2top > obj1top + obj1height) || (obj2left + obj2width < obj1left) || (obj2left > obj1left + obj1width)) {
            //没什么事发生
        }
        else {
            this.setState({

                score:this.state.score>this.state.time?this.state.score:this.state.time,
                touch:true,
            })
        }
        if(
            obj1height<parseInt(window.innerHeight/25)||
            obj2width<parseInt(window.innerWidth/35)
        ){//作弊判断
            this.setState({
                score:this.state.score>this.state.time?this.state.score:this.state.time,
                touch:true,
            })
        }
    }
    //判断2个div是否有交集,判断时以obj1作为固定的obj2作为移动的
    checkCircle=(obj1, obj2)=>{
        //有了这个方法，获取页面元素的位置就简单多了，*****************************重点参考
        //let X= this.getBoundingClientRect().left+document.documentElement.scrollLeft;
        //let Y =this.getBoundingClientRect().top+document.documentElement.scrollTop;

        //以obj1作为固定的参照物，使用时注意div是否有top与left，如果没有设置的话会是空值
        //obj2在obj1的上面 obj2.top+obj2.height<obj1.top
        //obj2在obj1的下面 obj2.top>obj1.top+obj1.height
        //obj2在obj1的左面 obj2.left+obj2.width<obj1.left
        //obj2在obj1的右面 obj2.left>obj1.left+obj1.width
        //console.log("check")
        let obj1top = parseInt(document.getElementById(obj1).getBoundingClientRect().top);
        let obj1left = parseInt(document.getElementById(obj1).getBoundingClientRect().left);
        let obj1width = parseInt(document.getElementById(obj1).offsetWidth);
        let obj1height = parseInt(document.getElementById(obj1).offsetHeight);
        let obj2top = parseInt(document.getElementById(obj2).getBoundingClientRect().top);
        let obj2left = parseInt(document.getElementById(obj2).getBoundingClientRect().left);
        let obj2width = parseInt(document.getElementById(obj2).offsetWidth);
        let obj2height = parseInt(document.getElementById(obj2).offsetHeight);
        let r1=r(obj1height,obj1width);
        let r2=r(obj2height,obj2width);
        if (len(obj1left+obj1width/2,obj1top+obj1height/2,obj2left+obj2width/2,obj2top+obj2height/2)>(r1+r2)/2.82) {
            //没什么事发生
        }
        else {
            this.setState({
                score:this.state.score>this.state.time?this.state.score:this.state.time,
                touch:true,
            })
        }
        if(
            obj1height<parseInt(window.innerHeight/25)||
            obj2width<parseInt(window.innerWidth/35)||
            document.getElementById(obj1).offsetWidth!==document.getElementById(obj1).clientWidth||
            document.getElementById(obj2).offsetWidth!==document.getElementById(obj2).clientWidth
        ){//作弊判断
            this.setState({
                score:this.state.score>this.state.time?this.state.score:this.state.time,
                touch:true,
            })
        }
    }

    //移动到鼠标位置
    moveToMouse=()=>{
        this.setState({
            top:this.state.clientY,
            left:this.state.clientX,
        })
    }
    //鼠标移动时监听鼠标坐标
    onMouseMove=(e)=>{
        //console.log(e)
        this.setState({
            clientX:e.clientX,
            clientY:e.clientY,
        })
    }
    //鼠标移动时监听鼠标坐标
    onTouchMove=(e)=>{
        console.log(e.changedTouches[0])
        this.setState({
            clientX:e.changedTouches[0].clientX,
            clientY:e.changedTouches[0].clientY,
        })
    }
    //键盘按下时
    onKeyDown = (e) => {
        console.log(e.keyCode)
        switch( e.keyCode) {
            case 13://回车事件
                break
            case 37:
                this.setState({
                    left:this.state.left-10,
                })
                break
            case 65:
                this.setState({
                    left:this.state.left-10,
                })
                break
            case 38:
                this.setState({
                    top:this.state.top-10,
                })
                break
            case 87:
                this.setState({
                    top:this.state.top-10,
                })
                break
            case 39:
                this.setState({
                    left:this.state.left+10,
                })
                break
            case 68:
                this.setState({
                    left:this.state.left+10,
                })
                break
            case 40:
                this.setState({
                    top:this.state.top+10,
                })
                break
            case 83:
                this.setState({
                    top:this.state.top+10,
                })
                break
            case 32:
                this.timeButton();
                break
            case 70:
                if(this.state.f_time>20){
                    this.setState({
                        f_time:this.state.f_time-20
                    })
                    clearInterval(this.t_timer);
                    this.t_timer = setInterval(() => {
                        //console.log(t)//输出移动时间
                        if(this.state.f_time<=20){
                            this.setState({
                                f_time:this.state.f_time+1
                            })
                        }
                    }, 1000)
                    let endY=this.state.clientY;
                    let endX=this.state.clientX;
                    let thisY=this.state.top;
                    let thisX=this.state.left;
                    let len2=Math.pow(endY-thisY,2)+Math.pow(endX-thisX,2);
                    let len=Math.sqrt(len2);
                    //console.log("len",len)
                    let lenY=endY-thisY;
                    let lenX=endX-thisX;
                    let p=100/len;//闪现距离100
                    let moveY=0;
                    let moveX=0;
                    if(p<1){
                        moveY=lenY*p;
                        moveX=lenX*p;
                        this.setState({
                            top:thisY+moveY,
                            left:thisX+moveX,
                        })
                    }else{
                        this.setState({
                            top:endY,
                            left:endX,
                        })
                    }
                }
                break
            default:
                break
        }
    }
    state = {
        name:"",
        userId:"",
        username:"",
        password:"",
        visible:false,
        scoreList:[],
        f_time:10,
        //我的大小位置速度
        width:parseInt(window.innerWidth/32),
        height: parseInt(window.innerHeight/24),
        left:100,
        top:100,
        v:3,
        gif:false,
        //鼠标位置
        clientX:100,
        clientY:100,
        //时间和计时器开关
        time: 0,
        score:0,
        on: false,
        log: [],
        //是否撞到障碍物
        touch:false,
        //旋转角度和左右方向
        deg:0,
        turnWay:180,
        //怪物位置和大小
        m_on:false,
        m_width:parseInt(window.innerWidth/24),
        m_height: parseInt(window.innerHeight/18),
        m_left: -100,
        m_top: -100,
        m_v:6,
        m_deg:0,
        m_turnWay:180,
        //怪物位置和大小
        m2_on:false,
        m2_width:parseInt(window.innerWidth/24),
        m2_height: parseInt(window.innerHeight/18),
        m2_left: -100,
        m2_top: -100,
        m2_v:6,
        m2_deg:0,
        m2_turnWay:180,
        //怪物位置和大小
        m3_on:false,
        m3_width:parseInt(window.innerWidth/24),
        m3_height: parseInt(window.innerHeight/18),
        m3_left: -100,
        m3_top: -100,
        m3_v:6,
        m3_deg:0,
        m3_turnWay:180,
        //怪物位置和大小
        m4_on:false,
        m4_width:parseInt(window.innerWidth/24),
        m4_height: parseInt(window.innerHeight/18),
        m4_left: -100,
        m4_top: -100,
        m4_v:7,
        m4_deg:0,
        m4_turnWay:180,
        //怪物位置和大小
        m5_on:false,
        m5_width:parseInt(window.innerWidth/24),
        m5_height: parseInt(window.innerHeight/18),
        m5_left: -100,
        m5_top: -100,
        m5_v:7,
        m5_deg:0,
        m5_turnWay:180,
        //怪物位置和大小
        m6_on:false,
        m6_width:parseInt(window.innerWidth/16),
        m6_height: parseInt(window.innerHeight/12),
        m6_left: -100,
        m6_top: -100,
        m6_v:9,
        m6_deg:0,
        m6_turnWay:180,
        //怪物位置和大小
        m7_on:false,
        m7_width:parseInt(window.innerWidth/24),
        m7_height: parseInt(window.innerHeight/18),
        m7_left: -100,
        m7_top: -100,
        m7_v:9,
        m7_deg:0,
        m7_turnWay:180,
        //怪物位置和大小
        m8_on:false,
        m8_width:parseInt(window.innerWidth/24),
        m8_height: parseInt(window.innerHeight/18),
        m8_left: -100,
        m8_top: -100,
        m8_v:9,
        m8_deg:0,
        m8_turnWay:180,
        //怪物位置和大小
        m9_on:false,
        m9_width:parseInt(window.innerWidth/24),
        m9_height: parseInt(window.innerHeight/18),
        m9_left: -100,
        m9_top: -100,
        m9_v:9,
        m9_deg:0,
        m9_turnWay:180,
    };
    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleOk = (e) => {
        console.log(e);
        this.login();
        this.setState({
            visible: false,
        });
    }
    handleCancel = (e) => {
        console.log("退出",e);
        this.setState({
            visible: false,
        });
    }
    login=()=>{
        const url=golbal.localhostUrl+"user/login";
        fetch(url, {
            method: "POST",
            mode: "cors",
            credentials:"include",//跨域携带cookie
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify({
                username:this.state.username,
                password:this.state.password,
            }),
        }).then(function (res) {//function (res) {} 和 res => {}效果一致
            return res.json()
        }).then(json => {
            // get result
            const data = json;
            console.log(data);
            if(data.status){
                if(this.state.name===""||this.state.name===data.data.username){
                    //什么事都没发生
                }else {
                    this.setState({
                        score:0,
                    })
                }
                message.success(data.message)
                this.setState({
                    name:data.data.username,
                })
            }else {
                message.error(data.message);
            }
        }).catch(function (e) {
            console.log("fetch fail");
            alert('系统错误');
        });
    }
    usernameChange=(e)=>{
        this.setState({
            username:e.target.value,
        })
    }
    passwordChange=(e)=>{
        this.setState({
            password:e.target.value
        })
    }
    submitS=()=>{
        const url=golbal.localhostUrl+"game1/submit";
        fetch(url, {
            method: "POST",
            mode: "cors",
            credentials:"include",//跨域携带cookie
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify({
                username:this.state.name,
                score:score(this.state.score),
            }),
        }).then(function (res) {//function (res) {} 和 res => {}效果一致
            return res.json()
        }).then(json => {
            // get result
            const data = json;
            console.log(data);
            if(data.status){
                message.success(data.message)
                this.selectAll();
            }else {
                message.error(data.message);
            }
        }).catch(function (e) {
            console.log("fetch fail");
            alert('系统错误');
        });
    }
    selectAll=()=>{
        const url=golbal.localhostUrl+"game1/selectAll";
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
                scoreList:data.data,
            })
        }).catch(function (e) {
            console.log("fetch fail");
            alert('系统错误');
        });
    }
    render() {
        return (
            <div>
                <div style={{width:(this.state.f_time)*10,height:10,backgroundColor:this.state.f_time<20?this.state.f_time<10?"#ff3333":"#ffdd66":"#99ff99"}}></div>
                {this.state.time>0?this.state.time:"game over"}
                {/*<button onClick={this.widthGo}></button>*/}
                <button onClick={this.timeButton}>{this.state.on?"stop":"start"}</button>
                <img
                    alt={"geluomo"}
                    src={this.state.f_time<2?fly_gif:fly}
                    id="MainBox"
                    style={{
                        //border:"1px black solid",
                        width:this.state.width,
                        height:this.state.height,
                        left:this.state.left-this.state.width/2,
                        top:this.state.top-this.state.height/2,
                        position:"absolute",
                        transform:"rotate("+this.state.deg+"deg) rotateY("+this.state.turnWay+"deg)",
                    }}
                />
                {"最高分："+this.state.score}
                <button onClick={this.submitS}>提交</button>
                <button onClick={this.showModal}>{this.state.name===""?"登录":this.state.name}</button>
                <br/>
                快乐周榜
                <br/>
                {
                    this.state.scoreList.map((item,i)=>{
                        return <Row key={i}>{i+1}.{item.username+" "+item.score+"分"}</Row>
                    })
                }

                <Modal
                    title="登录"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    okText={"登录/注册"}
                    onCancel={this.handleCancel}
                    cancelText={"返回"}
                >
                    <Input placeholder="username" value={this.state.username} onChange={this.usernameChange} />
                    <br/>
                    <br/>
                    <Input type="password" placeholder="password" value={this.state.password} onChange={this.passwordChange}/>
                </Modal>
                <img
                    alt={"monster"}
                    src={monster}
                    id="OtherBox"
                    style={{
                        display:this.state.m_on?"block":"none",
                        width:this.state.m_width,
                        height:this.state.m_height,
                        left:this.state.m_left-this.state.m_width/2,
                        top:this.state.m_top-this.state.height/2,
                        position:this.state.m_on?"absolute":"",
                        transform:"rotate("+this.state.m_deg+"deg) rotateY("+this.state.m_turnWay+"deg)",
                    }}
                />
                <img
                    alt={"monster"}
                    src={monster}
                    id="Monster2"
                    style={{
                        display:this.state.m2_on?"block":"none",
                        width:this.state.m2_width,
                        height:this.state.m2_height,
                        left:this.state.m2_left-this.state.m2_width/2,
                        top:this.state.m2_top-this.state.height/2,
                        position:this.state.m2_on?"absolute":"",
                        transform:"rotate("+this.state.m2_deg+"deg) rotateY("+this.state.m2_turnWay+"deg)",
                    }}
                />
                <img
                    alt={"monster"}
                    src={monster}
                    id="Monster3"
                    style={{
                        display:this.state.m3_on?"block":"none",
                        width:this.state.m3_width,
                        height:this.state.m3_height,
                        left:this.state.m3_left-this.state.m3_width/2,
                        top:this.state.m3_top-this.state.m3_height/2,
                        position:this.state.m3_on?"absolute":"",
                        transform:"rotate("+this.state.m3_deg+"deg) rotateY("+this.state.m3_turnWay+"deg)",
                    }}
                />
                <img
                    alt={"monster"}
                    src={monster}
                    id="Monster4"
                    style={{
                        display:this.state.m4_on?"block":"none",
                        width:this.state.m4_width,
                        height:this.state.m4_height,
                        left:this.state.m4_left-this.state.m4_width/2,
                        top:this.state.m4_top-this.state.m4_height/2,
                        position:this.state.m4_on?"absolute":"",
                        transform:"rotate("+this.state.m4_deg+"deg) rotateY("+this.state.m4_turnWay+"deg)",
                    }}
                />
                <img
                    alt={"monster"}
                    src={monster}
                    id="Monster5"
                    style={{
                        display:this.state.m5_on?"block":"none",
                        width:this.state.m5_width,
                        height:this.state.m5_height,
                        left:this.state.m5_left-this.state.m5_width/2,
                        top:this.state.m5_top-this.state.m5_height/2,
                        position:this.state.m5_on?"absolute":"",
                        transform:"rotate("+this.state.m5_deg+"deg) rotateY("+this.state.m5_turnWay+"deg)",
                    }}
                />
                <img
                    alt={"monster"}
                    src={monster}
                    id="Monster6"
                    style={{
                        display:this.state.m6_on?"block":"none",
                        width:this.state.m6_width,
                        height:this.state.m6_height,
                        left:this.state.m6_left-this.state.m6_width/2,
                        top:this.state.m6_top-this.state.m6_height/2,
                        position:this.state.m6_on?"absolute":"",
                        transform:"rotate("+this.state.m6_deg+"deg) rotateY("+this.state.m6_turnWay+"deg)",
                    }}
                />
                <img
                    alt={"monster"}
                    src={monster}
                    id="Monster7"
                    style={{
                        display:this.state.m7_on?"block":"none",
                        width:this.state.m7_width,
                        height:this.state.m7_height,
                        left:this.state.m7_left-this.state.m7_width/2,
                        top:this.state.m7_top-this.state.m7_height/2,
                        position:this.state.m7_on?"absolute":"",
                        transform:"rotate("+this.state.m7_deg+"deg) rotateY("+this.state.m7_turnWay+"deg)",
                    }}
                />
                <img
                    alt={"monster"}
                    src={monster}
                    id="Monster8"
                    style={{
                        display:this.state.m8_on?"block":"none",
                        width:this.state.m8_width,
                        height:this.state.m8_height,
                        left:this.state.m8_left-this.state.m8_width/2,
                        top:this.state.m8_top-this.state.m8_height/2,
                        position:this.state.m8_on?"absolute":"",
                        transform:"rotate("+this.state.m8_deg+"deg) rotateY("+this.state.m8_turnWay+"deg)",
                    }}
                />
                <img
                    alt={"monster"}
                    src={fly}
                    id="Monster9"
                    style={{
                        display:this.state.m9_on?"block":"none",
                        width:this.state.m9_width,
                        height:this.state.m9_height,
                        left:this.state.m9_left-this.state.m9_width/2,
                        top:this.state.m9_top-this.state.m9_height/2,
                        position:this.state.m9_on?"absolute":"",
                        transform:"rotate("+this.state.m9_deg+"deg) rotateY("+this.state.m9_turnWay+"deg)",
                    }}
                />

            </div>
        );
    }
}

export default Demo1;
