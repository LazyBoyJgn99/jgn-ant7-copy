import React, { Component } from 'react';
import fly from "@/img/feixing.gif";
import fly_gif from "@/img/shanxian-export.gif";
import monster from "@/img/hound.gif";
import mosquitoDash from "@/img/mosquitodash.gif";
import mosquitoFly from "@/img/mosquitofly.gif";
import {Input,Modal,message,Row} from "antd";
import golbal from "@/golbal";
import Monster from "@/pages/box/Monster";
import Fly from "@/pages/box/Fly";
import Mosquito from "@/pages/box/Mosquito";
import "@/css/Demo3.less";

document.body.style.background = "#999999";
let balls = []
let window_innerWidth=window.innerWidth;
let window_innerHeight=window.innerHeight;
let mainFly = window_innerHeight>450?window.innerWidth>450?
    new Fly(parseInt(window_innerWidth/32), parseInt(window_innerHeight/24), 100, 100, 4, 0, 0):
    new Fly(parseInt(window_innerWidth/12), parseInt(window_innerHeight/16), 100, 100, 4, 0, 0):
    new Fly(parseInt(window_innerWidth/16), parseInt(window_innerHeight/12), 100, 100, 4, 0, 0);

let mosquito = window_innerHeight>450?window.innerWidth>450?
    new Mosquito(parseInt(window_innerWidth/16), parseInt(window_innerHeight/12), -100, -100, 2, 0, 0):
    new Mosquito(parseInt(window_innerWidth/6), parseInt(window_innerHeight/8), -100, -100, 2, 0, 0):
    new Mosquito(parseInt(window_innerWidth/8), parseInt(window_innerHeight/6), -100, -100, 2, 0, 0);

//屏幕大小适配
setInterval(()=> {
    if (window_innerWidth !== window.innerWidth || window_innerHeight !== window_innerHeight) {
        window_innerWidth=window.innerWidth
        window_innerHeight=window.innerHeight
        if(window_innerWidth>450){
            if(window_innerHeight<450){
                balls[0].width=parseInt(window_innerWidth/12);balls[0].height=parseInt(window_innerHeight/9)
                balls[1].width=parseInt(window_innerWidth/12);balls[1].height=parseInt(window_innerHeight/9)
                balls[2].width=parseInt(window_innerWidth/12);balls[2].height=parseInt(window_innerHeight/9)
                balls[3].width=parseInt(window_innerWidth/12);balls[3].height=parseInt(window_innerHeight/9)
                balls[4].width=parseInt(window_innerWidth/12);balls[4].height=parseInt(window_innerHeight/9)
                balls[5].width=parseInt(window_innerWidth/8);balls[5].height=parseInt(window_innerHeight/6)
                balls[6].width=parseInt(window_innerWidth/8);balls[6].height=parseInt(window_innerHeight/6)
                balls[7].width=parseInt(window_innerWidth/8);balls[7].height=parseInt(window_innerHeight/6)
                balls[8].width=parseInt(window_innerWidth/8);balls[8].height=parseInt(window_innerHeight/6)
                mainFly = new Fly(parseInt(window_innerWidth/16), parseInt(window_innerHeight/12), mainFly.left, mainFly.top, 4, 0, 0)
                mosquito = new Mosquito(parseInt(window_innerWidth/8), parseInt(window_innerHeight/6), -100, -100, 2, 0, 0);

            }else {
                balls[0].width=parseInt(window_innerWidth/24);balls[0].height=parseInt(window_innerHeight/18)
                balls[1].width=parseInt(window_innerWidth/24);balls[1].height=parseInt(window_innerHeight/18)
                balls[2].width=parseInt(window_innerWidth/24);balls[2].height=parseInt(window_innerHeight/18)
                balls[3].width=parseInt(window_innerWidth/24);balls[3].height=parseInt(window_innerHeight/18)
                balls[4].width=parseInt(window_innerWidth/24);balls[4].height=parseInt(window_innerHeight/18)
                balls[5].width=parseInt(window_innerWidth/16);balls[5].height=parseInt(window_innerHeight/12)
                balls[6].width=parseInt(window_innerWidth/16);balls[6].height=parseInt(window_innerHeight/12)
                balls[7].width=parseInt(window_innerWidth/16);balls[7].height=parseInt(window_innerHeight/12)
                balls[8].width=parseInt(window_innerWidth/16);balls[8].height=parseInt(window_innerHeight/12)
                mainFly = new Fly(parseInt(window_innerWidth/32), parseInt(window_innerHeight/24), mainFly.left, mainFly.top, 4, 0, 0)
                mosquito = new Mosquito(parseInt(window_innerWidth/16), parseInt(window_innerHeight/12), -100, -100, 2, 0, 0);

            }
        }else {
            balls[0].width=parseInt(window_innerWidth/9);balls[0].height=parseInt(window_innerHeight/12)
            balls[1].width=parseInt(window_innerWidth/9);balls[1].height=parseInt(window_innerHeight/12)
            balls[2].width=parseInt(window_innerWidth/9);balls[2].height=parseInt(window_innerHeight/12)
            balls[3].width=parseInt(window_innerWidth/9);balls[3].height=parseInt(window_innerHeight/12)
            balls[4].width=parseInt(window_innerWidth/9);balls[4].height=parseInt(window_innerHeight/12)
            balls[5].width=parseInt(window_innerWidth/6);balls[5].height=parseInt(window_innerHeight/8)
            balls[6].width=parseInt(window_innerWidth/6);balls[6].height=parseInt(window_innerHeight/8)
            balls[7].width=parseInt(window_innerWidth/6);balls[7].height=parseInt(window_innerHeight/8)
            balls[8].width=parseInt(window_innerWidth/6);balls[8].height=parseInt(window_innerHeight/8)
            mainFly = new Fly(parseInt(window_innerWidth/12), parseInt(window_innerHeight/16), mainFly.left, mainFly.top, 4, 0, 0)
            mosquito = new Mosquito(parseInt(window_innerWidth/6), parseInt(window_innerHeight/8), -100, -100, 2, 0, 0);

        }
    }
},1000)
if(window_innerHeight<450){
    balls.push(new Monster(parseInt(window_innerWidth/12), parseInt(window_innerHeight/9), -100, -200, 3, 0, 0))
    balls.push(new Monster(parseInt(window_innerWidth/12), parseInt(window_innerHeight/9), -100, -100, 3, 0, 0))
    balls.push(new Monster(parseInt(window_innerWidth/12), parseInt(window_innerHeight/9), -100, -100, 3, 0, 0))
    balls.push(new Monster(parseInt(window_innerWidth/12), parseInt(window_innerHeight/9), -100, -100, 4, 0, 0))
    balls.push(new Monster(parseInt(window_innerWidth/12), parseInt(window_innerHeight/9), -100, -100, 4, 0, 0))
    balls.push(new Monster(parseInt(window_innerWidth/8), parseInt(window_innerHeight/6), -100, -100, 5, 0, 0))
    balls.push(new Monster(parseInt(window_innerWidth/8), parseInt(window_innerHeight/6), -100, -100, 5, 0, 0))
    balls.push(new Monster(parseInt(window_innerWidth/8), parseInt(window_innerHeight/6), -100, -100, 5, 0, 0))
    balls.push(new Monster(parseInt(window_innerWidth/8), parseInt(window_innerHeight/6), -100, -100, 5, 0, 0))
}else
if(window_innerWidth<450){
    balls.push(new Monster(parseInt(window_innerWidth/9), parseInt(window_innerHeight/12), -100, -200, 3, 0, 0))
    balls.push(new Monster(parseInt(window_innerWidth/9), parseInt(window_innerHeight/12), -100, -100, 3, 0, 0))
    balls.push(new Monster(parseInt(window_innerWidth/9), parseInt(window_innerHeight/12), -100, -100, 3, 0, 0))
    balls.push(new Monster(parseInt(window_innerWidth/9), parseInt(window_innerHeight/12), -100, -100, 4, 0, 0))
    balls.push(new Monster(parseInt(window_innerWidth/9), parseInt(window_innerHeight/12), -100, -100, 4, 0, 0))
    balls.push(new Monster(parseInt(window_innerWidth/6), parseInt(window_innerHeight/8), -100, -100, 5, 0, 0))
    balls.push(new Monster(parseInt(window_innerWidth/6), parseInt(window_innerHeight/8), -100, -100, 5, 0, 0))
    balls.push(new Monster(parseInt(window_innerWidth/6), parseInt(window_innerHeight/8), -100, -100, 5, 0, 0))
    balls.push(new Monster(parseInt(window_innerWidth/6), parseInt(window_innerHeight/8), -100, -100, 5, 0, 0))
}else {
    balls.push(new Monster(parseInt(window_innerWidth/24), parseInt(window_innerHeight/18), -100, -200, 6, 0, 0))
    balls.push(new Monster(parseInt(window_innerWidth/24), parseInt(window_innerHeight/18), -100, -100, 6, 0, 0))
    balls.push(new Monster(parseInt(window_innerWidth/24), parseInt(window_innerHeight/18), -100, -100, 6, 0, 0))
    balls.push(new Monster(parseInt(window_innerWidth/24), parseInt(window_innerHeight/18), -100, -100, 7, 0, 0))
    balls.push(new Monster(parseInt(window_innerWidth/24), parseInt(window_innerHeight/18), -100, -100, 7, 0, 0))
    balls.push(new Monster(parseInt(window_innerWidth/16), parseInt(window_innerHeight/12), -100, -100, 8, 0, 0))
    balls.push(new Monster(parseInt(window_innerWidth/16), parseInt(window_innerHeight/12), -100, -100, 8, 0, 0))
    balls.push(new Monster(parseInt(window_innerWidth/16), parseInt(window_innerHeight/12), -100, -100, 8, 0, 0))
    balls.push(new Monster(parseInt(window_innerWidth/16), parseInt(window_innerHeight/12), -100, -100, 8, 0, 0))
}

function score(score) {
    return Math.pow(score,2)-2147020617;
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
//禁止下拉
document.addEventListener('touchmove', function (event) {
    event.preventDefault();
}, false);
class Demo3 extends Component {
    componentDidMount(){
        this.selectAll();
        setInterval(()=>{
            this.setState({

            })
        },10)
        //键盘监听
        document.addEventListener("keydown", this.onKeyDown)
        //鼠标移动
        document.onmousemove=(e)=>{
            this.onMouseMove(e)
        }
        //鼠标按下
        document.onmousedown=(e)=>{
            //console.log(e)
            //console.log("点击")
            //this.moveToMouse();
            //this.moveToMouseSL();
            this.moveToMouseSL();
            clearInterval(this.mouse_timer);
            this.mouse_timer = setInterval(() => {
                this.moveToMouseSL();
            }, 100)
        }
        //鼠标抬起
        document.onmouseup=(e)=>{
            //console.log(e)
            //.log("点击")
            //this.moveToMouse();
            clearInterval(this.mouse_timer);
            this.moveToMouseSL();
            //this.monster1();
        }
        document.ontouchmove=(e)=>{
            //console.log(e)
            //console.log("触摸")
            this.onTouchMove(e)
            //this.moveToMouse();
            //clearInterval(this.mouse_timer);
            this.moveToMouseSL();
        }
        //禁止选中
        document.oncontextmenu = function(){
            return false;
        }

    }
    componentWillUnmount(){
        //键盘监听结束
        document.removeEventListener("keydown", this.onKeyDown)
    }

    timeButton=()=>{//计时器开关
        if (this.state.on) {
            //终止正在移动的怪物
            clearInterval(this.timer);
            this.m_timers.map((item)=>{
                clearInterval(item)
                return null
            })
            clearInterval(this.mo_timers);
            clearInterval(this.t_timer);
            this.setState({
                touch: false,
            })
        } else {//开始
            //怪物们出现
            this.monster1All();
            if (this.state.time>300){
                this.setState({time: this.state.time-300})
            }
            if(this.state.time>3000){
                this.mosquito();
            }
            if (this.state.time>10){
            }else{
                mosquito.top=-100
                mosquito.left=-100
                balls.map((item)=>{
                    item.top=-100
                    item.left=-100
                    return null
                })
                this.setState({
                    f_time:10,
                })
            }
            //计时器
            this.timer = setInterval(() => {
                if(this.state.touch){
                    this.setState({time: -1});
                    alert("game over");
                    clearInterval(this.timer);
                }
                switch (this.state.time) {
                    case 1000:
                        this.setState({
                            monsterNum:this.state.monsterNum+1
                        })
                        this.monster1(2);
                        break
                    case 3000:
                        this.mosquito();
                        break
                    case 6000:
                        this.setState({
                            monsterNum:this.state.monsterNum+1
                        })
                        this.monster1(3);
                        break
                    case 10000:
                        this.setState({
                            monsterNum:this.state.monsterNum+1
                        })
                        this.monster1(4);
                        break
                    case 13000:
                        this.setState({
                            monsterNum:this.state.monsterNum+1
                        })
                        this.monster1(5);
                        break
                    default:
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
        balls.map((item)=>{
            item.on=!this.state.on
            return null
        })
        mosquito.on=!this.state.on
        this.setState({
            on: !this.state.on,
        })
    }
    m_timers=[];
    //怪兽路径
    monster1All=()=>{
        this.m_timers.map((item)=>{
            clearInterval(item)
            return null
        })
        let innerWidth=window.innerWidth;
        let innerHeight=window.innerHeight;
        //计时器
        let endY=mainFly.top;
        let endX=mainFly.left;
        for (let i=0;i<balls.length;i++){
            if(this.state.monsterNum>i){
                let thisY=balls[i].top;
                let thisX=balls[i].left;
                let len2=Math.pow(endY-thisY,2)+Math.pow(endX-thisX,2);
                let len=Math.sqrt(len2);
                //console.log("len",len)
                let t=len/balls[i].v;
                let moveY=(endY-thisY)/t;
                let moveX=(endX-thisX)/t;
                //怪兽角度
                let m_turnWay = 0;
                let m_deg=Math.atan(moveY/moveX)*180/3.14
                if(moveX<0){
                    m_turnWay=180;
                }
                balls[i].deg=m_deg;
                balls[i].turnWay=m_turnWay;
                this.m_timers[i]=setInterval(() => {
                    if(
                        mainFly.top+mainFly.height/2<0||
                        mainFly.left+mainFly.width/2<0||
                        mainFly.top+mainFly.height/2>innerHeight||
                        mainFly.left+mainFly.width/2>innerWidth
                    ){
                        let myScore = this.state.score>this.state.time?this.state.score:this.state.time
                        this.setState({
                            score:myScore,
                            myScore:score(myScore),
                            touch:true,
                            monsterNum:2
                        })
                    }
                    if(balls[i].on){
                        if(
                            balls[i].top+balls[i].height<0||
                            balls[i].left+balls[i].width<0||
                            balls[i].top>innerHeight||
                            balls[i].left>innerWidth
                        ){
                            if(Math.random()<0.5){
                                if(Math.random()<0.5){
                                    balls[i].top=0;
                                    balls[i].left=Math.random()*innerWidth;
                                }else{
                                    balls[i].top=innerHeight;
                                    balls[i].left=Math.random()*innerWidth;
                                }
                            }else{
                                if(Math.random()<0.5){
                                    balls[i].top=Math.random()*innerHeight;
                                    balls[i].left=0;
                                }else{
                                    balls[i].top=Math.random()*innerHeight;
                                    balls[i].left=innerWidth;
                                }
                            }
                            this.monster1(i);
                        }
                        this.checkCircle(balls[i], mainFly);
                        balls[i].top=balls[i].top+moveY;
                        balls[i].left=balls[i].left+moveX;
                    }
                }, 10)
            }
        }
        // balls.map((item,i)=>{
        //     let thisY=item.top;
        //     let thisX=item.left;
        //     let len2=Math.pow(endY-thisY,2)+Math.pow(endX-thisX,2);
        //     let len=Math.sqrt(len2);
        //     //console.log("len",len)
        //     let t=len/item.v;
        //     let moveY=(endY-thisY)/t;
        //     let moveX=(endX-thisX)/t;
        //     //怪兽角度
        //     let m_turnWay = 0;
        //     let m_deg=Math.atan(moveY/moveX)*180/3.14
        //     if(moveX<0){
        //         m_turnWay=180;
        //     }
        //     item.deg=m_deg;
        //     item.turnWay=m_turnWay;
        //     this.m_timers[i]=setInterval(() => {
        //         if(
        //             mainFly.top+mainFly.height/2<0||
        //             mainFly.left+mainFly.width/2<0||
        //             mainFly.top+mainFly.height/2>innerHeight||
        //             mainFly.left+mainFly.width/2>innerWidth
        //         ){
        //             this.setState({
        //                 score:this.state.score>this.state.time?this.state.score:this.state.time,
        //                 touch:true,
        //             })
        //         }
        //         if(item.on){
        //             if(
        //                 item.top+item.height<0||
        //                 item.left+item.width<0||
        //                 item.top>innerHeight||
        //                 item.left>innerWidth
        //             ){
        //                 if(Math.random()<0.5){
        //                     if(Math.random()<0.5){
        //                         item.top=0;
        //                         item.left=Math.random()*innerWidth;
        //                     }else{
        //                         item.top=innerHeight;
        //                         item.left=Math.random()*innerWidth;
        //                     }
        //                 }else{
        //                     if(Math.random()<0.5){
        //                         item.top=Math.random()*innerHeight;
        //                         item.left=0;
        //                     }else{
        //                         item.top=Math.random()*innerHeight;
        //                         item.left=innerWidth;
        //                     }
        //                 }
        //                 this.monster1(i);
        //             }
        //             this.checkCircle(item, mainFly);
        //             item.top=item.top+moveY;
        //             item.left=item.left+moveX;
        //         }
        //     }, 10)
        // })
    }
    //怪兽路径
    monster1=(k)=>{
        //console.log(window.innerWidth);
        //console.log(window.innerHeight);
        let innerWidth=window.innerWidth;
        let innerHeight=window.innerHeight;
        //计时器
        let endY=mainFly.top;
        let endX=mainFly.left;
        let item=balls[k];
        let thisY=item.top;
        let thisX=item.left;
        let len2=Math.pow(endY-thisY,2)+Math.pow(endX-thisX,2);
        let len=Math.sqrt(len2);
        //console.log("len",len)
        let t=len/item.v;
        let moveY=(endY-thisY)/t;
        let moveX=(endX-thisX)/t;
        //怪兽角度
        let m_turnWay = 0;
        let m_deg=Math.atan(moveY/moveX)*180/3.14
        if(moveX<0){
            m_turnWay=180;
        }
        item.deg=m_deg;
        item.turnWay=m_turnWay;
        clearInterval(this.m_timers[k]);
        this.m_timers[k] = setInterval(() => {
            if(item.on){
                if(
                    item.top+item.height<0||
                    item.left+item.width<0||
                    item.top>innerHeight||
                    item.left>innerWidth
                ){
                    if(Math.random()<0.5){
                        if(Math.random()<0.5){
                            item.top=0;
                            item.left=Math.random()*innerWidth;
                        }else{
                            item.top=innerHeight;
                            item.left=Math.random()*innerWidth;
                        }
                    }else{
                        if(Math.random()<0.5){
                            item.top=Math.random()*innerHeight;
                            item.left=0;
                        }else{
                            item.top=Math.random()*innerHeight;
                            item.left=innerWidth;
                        }
                    }
                    this.monster1(k);
                }
                this.checkCircle(item, mainFly);
                item.top=item.top+moveY;
                item.left=item.left+moveX;
            }
        }, 10)

    }
    mosquito=()=>{
        //console.log(window.innerWidth);
        //console.log(window.innerHeight);
        clearInterval(this.mo_timers);
        let innerWidth=window.innerWidth;
        let innerHeight=window.innerHeight;
        //计时器
        let endY=mainFly.top;
        let endX=mainFly.left;
        let item=mosquito;
        let thisY=item.top;
        let thisX=item.left;
        let len2=Math.pow(endY-thisY,2)+Math.pow(endX-thisX,2);
        let len=Math.sqrt(len2);
        //console.log("len",len)
        let t=len/item.v;
        let moveY=(endY-thisY)/t;
        let moveX=(endX-thisX)/t;
        //怪兽角度
        let m_turnWay = 0;
        let m_deg=Math.atan(moveY/moveX)*180/3.14
        item.dash_t=0;
        this.mo_timers = setInterval(() => {
            if(item.dash){
                this.checkCircle(item, mainFly);
                if(moveX<0){
                    m_turnWay=180;
                }
                if(m_deg>30){
                    m_deg=30
                }
                if(m_deg<-30){
                    m_deg=-30
                }
                item.deg=m_deg;
                item.turnWay=m_turnWay;
                if(item.dash_t===30){
                    innerWidth=window.innerWidth;
                    innerHeight=window.innerHeight;
                    //计时器
                    endY=mainFly.top;
                    endX=mainFly.left;
                    item=mosquito;
                    thisY=item.top;
                    thisX=item.left;
                    len2=Math.pow(endY-thisY,2)+Math.pow(endX-thisX,2);
                    len=Math.sqrt(len2);
                    //console.log("len",len)
                    t=len/item.v;
                    moveY=(endY-thisY)/t;
                    moveX=(endX-thisX)/t;
                    //怪兽角度
                    m_turnWay = 0;
                    m_deg=Math.atan(moveY/moveX)*180/3.14
                    item.gif=true
                }
                if(item.dash_t>30){
                    if(item.on){
                        if(
                            item.top+item.height<0||
                            item.left+item.width<0||
                            item.top>innerHeight||
                            item.left>innerWidth
                        ){
                            item.on=false
                        }
                        item.top=item.top+moveY;
                        item.left=item.left+moveX;
                    }
                }
                if(item.dash_t>90){
                    item.gif=false
                    item.dash=false;
                    item.dash_t=0
                    item.v=2
                }
                item.dash_t++;
            }else{
                //计时器
                endY=mainFly.top;
                endX=mainFly.left;
                item=mosquito;
                thisY=item.top;
                thisX=item.left;
                len2=Math.pow(endY-thisY,2)+Math.pow(endX-thisX,2);
                len=Math.sqrt(len2);
                //console.log("len",len)
                t=len/item.v;
                moveY=(endY-thisY)/t;
                moveX=(endX-thisX)/t;
                //怪兽角度
                m_turnWay = 0;
                m_deg=Math.atan(moveY/moveX)*180/3.14
                let dash_len=Math.sqrt(Math.pow(item.width,2)+Math.pow(item.width,2))*2.5;
                if(item.dash_t>200&&len<dash_len){
                    item.dash=true;
                    item.dash_t=0
                    item.v=6
                }
                item.dash_t++;
                if(moveX<0){
                    m_turnWay=180;
                }
                if(m_deg>20){
                    m_deg=20
                }
                if(m_deg<-30){
                    m_deg=-30
                }
                item.deg=m_deg;
                item.turnWay=m_turnWay;
                if(item.on){
                    item.top=item.top+moveY;
                    item.left=item.left+moveX;
                }
            }

        }, 10)
    }
    checkCircle=(obj1, obj2)=>{
        let obj1top = parseInt(obj1.top);
        let obj1left = parseInt(obj1.left);
        let obj1width = parseInt(obj1.width);
        let obj1height = parseInt(obj1.height);
        let obj2top = parseInt(obj2.top);
        let obj2left = parseInt(obj2.left);
        let obj2width = parseInt(obj2.width);
        let obj2height = parseInt(obj2.height);
        let r1=r(obj1height,obj1width);
        let r2=r(obj2height,obj2width);
        if (len(obj1left+obj1width/2,obj1top+obj1height/2,obj2left+obj2width/2,obj2top+obj2height/2)>(r1+r2)/3.6) {
            //没什么事发生
        }
        else {
            let myScore = this.state.score>this.state.time?this.state.score:this.state.time
            this.setState({
                score:myScore,
                myScore:score(myScore),
                touch:true,
                monsterNum:2
            })
        }
    }
    //缓慢移动到鼠标位置
    moveToMouseSL=()=>{
        clearInterval(this.timer1);
        //计时器
        let endY=this.state.clientY;
        let endX=this.state.clientX;

        let thisY=mainFly.top;
        let thisX=mainFly.left;
        let len2=Math.pow(endY-thisY,2)+Math.pow(endX-thisX,2);
        let len=Math.sqrt(len2);
        let t=len/mainFly.v;
        let moveY=(endY-thisY)/t;
        let moveX=(endX-thisX)/t;
        if(moveX<0){
            mainFly.turnWay=180
        }else{
            mainFly.turnWay=0
        }
        this.timer1 = setInterval(() => {
            //console.log(t)//输出移动时间
            if(t<0){
                clearInterval(this.timer1);
            }
            mainFly.top=mainFly.top+moveY
            mainFly.left=mainFly.left+moveX
            t--;
        }, 10)
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
                    let thisY=mainFly.top;
                    let thisX=mainFly.left;
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
                        // this.setState({
                        //     top:thisY+moveY,
                        //     left:thisX+moveX,
                        // })
                        mainFly.top=thisY+moveY
                        mainFly.left=thisX+moveX
                    }else{
                        this.setState({
                            top:endY,
                            left:endX,
                        })
                        mainFly.top=endY
                        mainFly.left=endX
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
        //怪兽数量
        monsterNum:2,

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
                score:this.state.myScore,
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
                <button onClick={this.timeButton}>{this.state.on?"stop(空格)":"start(空格)"}</button>
                <img
                    alt={"geluomo"}
                    src={this.state.f_time<2?fly_gif:fly}
                    id="MainBox"
                    style={{
                        //border:"1px black solid",
                        width:mainFly.width,
                        height:mainFly.height,
                        left:mainFly.left-mainFly.width/2,
                        top:mainFly.top-mainFly.height/2,
                        position:"absolute",
                        transform:"rotate("+mainFly.deg+"deg) rotateY("+mainFly.turnWay+"deg)",
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
                        if(window_innerHeight<800&&i>9){
                            return null
                        }
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
                {/*<img*/}
                    {/*alt={"monster"}*/}
                    {/*src={monster}*/}
                    {/*id="OtherBox"*/}
                    {/*style={{*/}
                        {/*display:this.state.m_on?"block":"none",*/}
                        {/*width:this.state.m_width,*/}
                        {/*height:this.state.m_height,*/}
                        {/*left:this.state.m_left-this.state.m_width/2,*/}
                        {/*top:this.state.m_top-this.state.height/2,*/}
                        {/*position:this.state.m_on?"absolute":"",*/}
                        {/*transform:"rotate("+this.state.m_deg+"deg) rotateY("+this.state.m_turnWay+"deg)",*/}
                    {/*}}*/}
                {/*/>*/}
                {
                    balls.map((item,i)=>{
                        //console.log(item)
                        return <img
                            key={i}
                            alt={"monster"}
                            src={monster}
                            style={{
                                display:item.on?"block":"none",
                                width:item.width,
                                height:item.height,
                                left:item.left-item.width/2,
                                top:item.top-item.height/2,
                                position:item.on?"absolute":"",
                                transform:"rotate("+item.deg+"deg) rotateY("+item.turnWay+"deg)",
                            }}
                        />
                    })
                }
                <img
                    alt={"monster"}
                    src={mosquito.gif?mosquitoDash:mosquitoFly}
                    style={{
                        display:mosquito.on?"block":"none",
                        width:mosquito.width,
                        height:mosquito.height,
                        left:mosquito.left-mosquito.width/2,
                        top:mosquito.top-mosquito.height/2,
                        position:mosquito.on?"absolute":"",
                        transform:"rotate("+mosquito.deg+"deg) rotateY("+mosquito.turnWay+"deg)",
                    }}
                />

            </div>
        );
    }
}

export default Demo3;
