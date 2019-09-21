import React, { Component } from 'react';
import {Row, Col} from "antd";
import fly from "@/img/feixing.gif";
import fly_gif from "@/img/shanxian-export.gif";
import monster from "@/img/hound.gif";
import Ball from "@/pages/box/Ball";
let img = new Image();   // 创建一个<img>元素
img.src = monster;
let sun;
let earth;
let moon;
let ctx;
let t=0;
let balls = []
balls.push(new Ball(100, 100, 100))
balls.push(new Ball(100, 100, 100))

console.log(Math.sin(0*Math.PI/180))
console.log(Math.sin(10*Math.PI/180))
console.log(Math.sin(20*Math.PI/180))
console.log(Math.sin(30*Math.PI/180))
console.log(Math.sin(40*Math.PI/180))
console.log(Math.sin(50*Math.PI/180))
console.log(Math.sin(60*Math.PI/180))
console.log(Math.sin(70*Math.PI/180))
console.log(Math.sin(80*Math.PI/180))
console.log(Math.sin(90*Math.PI/180))
console.log(Math.sin(100*Math.PI/180))
console.log(Math.sin(110*Math.PI/180))
console.log(Math.sin(120*Math.PI/180))
console.log(Math.sin(130*Math.PI/180))
console.log(Math.sin(140*Math.PI/180))
console.log(Math.sin(150*Math.PI/180))
console.log(Math.sin(160*Math.PI/180))
console.log(Math.sin(170*Math.PI/180))
console.log(Math.sin(180*Math.PI/180))
console.log(Math.sin(190*Math.PI/180))
console.log(Math.sin(360*Math.PI/180))
console.log(Math.sin(370*Math.PI/180))
console.log(Math.sin(380*Math.PI/180))
console.log(Math.sin(390*Math.PI/180))
console.log(Math.sin(400*Math.PI/180))
console.log(Math.sin(410*Math.PI/180))
console.log(Math.sin(420*Math.PI/180))
console.log(Math.sin(430*Math.PI/180))
class Demo2 extends Component {
    componentDidMount(){
        //键盘监听
        document.addEventListener("keydown", this.onKeyDown)
        //鼠标移动
        document.onmousemove=(e)=>{
            //this.onMouseMove(e)
        }
        //鼠标按下
        document.onmousedown=(e)=>{
            console.log(e)
            console.log("点击")
            // this.moveToMouse();
            // this.moveToMouseSL();
            // this.moveToMouseSL();
            // this.mouse_timer = setInterval(() => {
            //     this.moveToMouseSL();
            // }, 200)
        }
        //鼠标抬起
        document.onmouseup=(e)=>{
            console.log(e)
            console.log("点击")
            //this.moveToMouse();
            //clearInterval(this.mouse_timer);
            //this.moveToMouseSL();
            //this.monster1();
        }
        document.ontouchmove=(e)=>{
            console.log(e)
            console.log("触摸")
            //this.onTouchMove(e)
            //this.moveToMouse();
            //clearInterval(this.mouse_timer);
            //this.moveToMouseSL();
        }
        //右键事件取消
        document.oncontextmenu = function(){
            return false;
        }
    }
    componentWillUnmount(){
        //键盘监听结束
        document.removeEventListener("keydown", this.onKeyDown)
    }
    state = {
        ballNum:10
    };
    myFunction=()=>{
        var c=document.getElementById("myCanvas");
        var ctx=c.getContext("2d");
        var my_gradient=ctx.createLinearGradient(0,0,100,100);
        my_gradient.addColorStop(0,"#ff7777");
        my_gradient.addColorStop(1,"#7777ff");
        ctx.fillStyle=my_gradient;
        ctx.fillRect(20,20,150,100);
    }

    myFunction2=()=>{
        var c=document.getElementById("myCanvas");
        var ctx=c.getContext("2d");
        ctx.moveTo(0,0);
        ctx.lineTo(200,100);
        ctx.moveTo(100,100);
        ctx.stroke();
    }

    myFunction3=()=>{
        var c=document.getElementById("myCanvas");
        var ctx=c.getContext("2d");
        ctx.beginPath();
        ctx.arc(95,50,40,0,2*Math.PI);
        ctx.stroke();
    }

    myFunction4=()=>{
        let img1 = document.getElementById("img1");   // 创建一个<img>元素
        img1.src = monster;
        var c=document.getElementById("myCanvas2");
        c.addEventListener('mousemove',function(ev) {
            var ev = ev || window.event;
            console.log(ev)
        })
        var ctx=c.getContext("2d");
        // var img=document.getElementById("img1");
        let i=0
        this.timer0=setInterval(()=>{
            ctx.clearRect(0, 0, 600, 600); //清空所有的内容
            ctx.drawImage(img1, 100, 100);
        },16)

    }
    myFunction5=()=>{//鼠标监听
        var c=document.getElementById("myCanvas2");
        c.addEventListener('mousemove',function(ev) {
            var ev = ev || window.event;
            console.log(ev)
        })
    }


    init=()=>{
        sun = new Image();
        earth = new Image();
        moon = new Image();
        sun.src = fly;
        earth.src = fly;
        moon.src = monster;

        let canvas = document.getElementById("myCanvas2");
        ctx = canvas.getContext("2d");
        this.timer1=setInterval(()=>{
            this.draw();
            t=t+0.01;
        },10)
    }
    draw=()=>{
        ctx.clearRect(0, 0, 600, 600); //清空所有的内容
        /*绘制 太阳*/
        ctx.drawImage(sun, 150, 150, 300, 300);

        ctx.save();
        ctx.translate(300, 300);

        //绘制earth轨道
        ctx.beginPath();
        ctx.strokeStyle = "rgba(255,255,0,0.5)";
        ctx.arc(0, 0, 140, 0, 2 * Math.PI)
        ctx.stroke()

        let time = new Date();
        //绘制地球
        //ctx.rotate(2 * Math.PI / 60 * time.getSeconds() + 2 * Math.PI / 60000 * time.getMilliseconds())
        ctx.rotate(2 * Math.PI / 60 * t )
        ctx.translate(140, 0);
        ctx.rotate(2 * Math.PI / 60 * t )
        ctx.drawImage(earth, -70, -70,140,140)

        //绘制月球轨道
        ctx.beginPath();
        ctx.strokeStyle = "rgba(255,255,255,.3)";
        ctx.arc(0, 0, 70, 0, 2 * Math.PI);
        ctx.stroke();

        //绘制月球
        // ctx.rotate(2 * Math.PI / 6 * time.getSeconds() + 2 * Math.PI / 6000 * time.getMilliseconds());
        ctx.rotate(2 * Math.PI / 3 * t );
        ctx.translate(0, 0);
        ctx.drawImage(moon, 70-20, 0-20,40,40);
        ctx.restore();
        //const that=this;
        //requestAnimationFrame(that.draw);

    }
    stop=()=>{
        clearInterval(this.timer0)
        clearInterval(this.timer1)
        clearInterval(this.timer2)
    }


    //ball


    // 随机生成若干个小球
    newBalls=()=>{
        const canvas = document.getElementById('myCanvas2')
        const ctxBall = canvas.getContext('2d')
        balls = []
        while (balls.length < this.state.ballNum) {
            const radius = Math.random() * 10 + 1 // 1 ~ 11
            // const radius = Math.random() * 20 + 10 // 10 ~ 30
            const x = Math.random() * (canvas.width - radius - radius) + radius
            const y = Math.random() * (canvas.height - radius - radius) + radius

            let flag = true
            for (let i = 0; i < balls.length; i++) {
                const dx = x - balls[i].x
                const dy = y - balls[i].y
                const dl = Math.sqrt(dx * dx + dy * dy)
                if (dl <= radius + balls[i].radius) {
                    flag = false
                }
            }
            if (flag) {
                balls.push(new Ball(x, y, radius))
            }
        }

    }


    drawFrame=()=>{
        const canvas = document.getElementById('myCanvas2')
        const ctxBall = canvas.getContext('2d')
        //window.requestAnimationFrame(this.drawFrame)
        clearInterval(this.timer2)
        this.timer2=setInterval(()=>{
            this.drawFrame();
        },1)
        canvas.height = canvas.height // 清空画布

        // 绘制墙壁
        ctxBall.strokeRect(0, 0, canvas.width, canvas.height)

        for (let i = 0; i < balls.length; i++) {
            let ball = balls[i]

            // 判断小球间的碰撞
            for (let j = i + 1; j < balls.length; j++) {
                const dx = ball.x - balls[j].x
                const dy = ball.y - balls[j].y
                const dl = Math.sqrt(dx * dx + dy * dy)
                let angle = Math.atan(dy/dx)*180/Math.PI
                if(dx>0){
                    angle=180+angle
                }
                if(angle<0){
                    angle=360+angle
                }
                // if (dl <= ball.radius + balls[j].radius) {
                //     if(ball.flag === false){
                //         ball.angle = angle
                //     }
                //     if(balls[j].flag === false){
                //         balls[j].angle = 360-angle
                //     }
                //     ball.flag = balls[j].flag = true
                // }
                if (dl <= ball.radius + balls[j].radius) {
                    if(balls[j].flag === false){
                        let a=ball.angle
                        ball.angle=balls[j].angle
                        balls[j].angle=a
                    }
                    ball.flag = balls[j].flag = true
                }

            }
            var my_gradient=ctxBall.createLinearGradient(0,0,600,600);
            my_gradient.addColorStop(0,"#ff7777");
            my_gradient.addColorStop(1,"#7777ff");
            // 判断与墙壁的碰撞反弹
            if (ball.flag === false) {
                //右边
                if (ball.x + ball.radius > canvas.width) {
                    if(ball.angle>0&&ball.angle<90){
                        ball.angle = 180 - ball.angle
                    }else
                    if(ball.angle>270&&ball.angle<360){
                        ball.angle = 360 + 180 - ball.angle
                    }
                    //彩色demo
                    // if(ball.fillStyle==="#7777ff"){
                    //     ball.fillStyle=my_gradient
                    // }else{
                    //     ball.fillStyle="#ff7777"
                    // }
                }else
                //左边
                if (ball.x - ball.radius < 0) {
                    if(ball.angle>90&&ball.angle<180){
                        ball.angle = 180 - ball.angle
                    }else
                    if(ball.angle>180&&ball.angle<270){
                        ball.angle = 360 + 180 - ball.angle
                    }
                    //彩色demo
                    // if(ball.fillStyle==="#ff7777"){
                    //     ball.fillStyle=my_gradient
                    // }else{
                    //     ball.fillStyle="#7777ff"
                    // }
                }else
                //上边
                if (ball.y - ball.radius < 0 ) {
                    if(ball.angle>0&&ball.angle<180){
                        ball.angle = 360-ball.angle
                    }
                }else
                //下边
                if (ball.y + ball.radius > canvas.height) {
                    if(ball.angle>180&&ball.angle<360){
                        ball.angle = 360-ball.angle
                    }
                }
            }

            // 计算小球下一帧的坐标
            ball.x += ball.speed * Math.cos(ball.angle * Math.PI / 180)
            ball.y -= ball.speed * Math.sin(ball.angle * Math.PI / 180)

            // 绘制
            ball.draw(ctxBall)
            ball.flag = false

        }
    }
    showBall=()=>{
        this.newBalls();
        this.drawFrame();
    }
    ballNumChange=(e)=>{
        this.setState({
            ballNum:e.target.value
        })
    }

render() {
        return (
            <div>
                <img
                    alt={"monster"}
                    src={monster}
                    id="img1"
                />
                <Row>
                    <canvas id={"dome1"} style={{border:"2px solid #d3d3d3",backgroundColor:"#335533"}}></canvas>
                </Row>
                <Row>
                    <canvas id="myCanvas"  style={{border:"2px solid #d3d3d3",backgroundColor:"#446644"}}>
                        您的浏览器不支持 HTML5 canvas 标签。
                    </canvas>
                </Row>
                <button onClick={this.myFunction}>1</button>
                <button onClick={this.myFunction2}>2</button>
                <button onClick={this.myFunction3}>3</button>
                <button onClick={this.myFunction4}>4</button>
                <button onClick={this.init}>5</button>
                <button onClick={this.showBall}>6</button>
                <button onClick={this.stop}>stop</button>
                <input value={this.state.ballNum} onChange={this.ballNumChange}/>
                <Row>
                    <canvas id="myCanvas2"  height={600} width={600}
                            style={{
                                border:"2px solid #d3d3d3",
                                // backgroundColor:"#335533",
                                backgroundColor:"#000"
                            }}>
                        您的浏览器不支持 HTML5 canvas 标签。
                    </canvas>
                </Row>
                <div style={{
                    left:balls[0].x,
                    top:balls[0].y,
                    width:100,
                    height:100,
                    position:"absolute",
                    background:"black"
                }}/>

            </div>
        );
    }
}



export default Demo2;
