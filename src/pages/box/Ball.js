
class Ball {
    constructor(x, y, radius) {
        this.x = x
        this.y = y

        this.radius = radius
        this.angle = Math.random() * 180
        this.speed = 1
        this.flag = false
        // this.fillStyle='#77ff77'
        this.fillStyle='rgba(200,200,200,1)'
        this.fillStyleR= Math.random() * 256
        this.fillStyleG= Math.random() * 256
        this.fillStyleB= Math.random() * 256
        this.mode=Math.random()*3

    }
    draw(ctx) {
        let grad=ctx.createRadialGradient(this.x,this.y,5,this.x,this.y,200) //创建一个渐变色线性对象
                 grad.addColorStop(0,"rgba("+this.fillStyleR+","+this.fillStyleG+","+this.fillStyleB+",0.2)");                  //定义渐变色颜色
                 grad.addColorStop(1,"rgba(255,255,255,0)");
        ctx.beginPath()
        let angle1=this.angle+120>360?this.angle+120-360:this.angle+120
        let angle2=this.angle+240>360?this.angle+240-360:this.angle+240
        if(this.mode<1){//三角形
            ctx.moveTo(this.x+Math.cos((angle1)*Math.PI/180)*200, this.y-Math.sin(angle1*Math.PI/180)*200);
            ctx.lineTo(this.x+Math.cos((angle2)*Math.PI/180)*200, this.y-Math.sin(angle2*Math.PI/180)*200)
            ctx.lineTo(this.x+Math.cos((this.angle)*Math.PI/180)*200, this.y-Math.sin(this.angle*Math.PI/180)*200)
        }else if(this.mode<2){
            ctx.moveTo(this.x, this.y-0.5*200);
            ctx.lineTo(this.x+0.85*0.5*200, this.y+0.5*0.5*200)
            ctx.lineTo(this.x-0.85*0.5*200, this.y+0.5*0.5*200)
        }else {//圆形
            ctx.arc(this.x, this.y, 200, 0, 2 * Math.PI)
        }
        ctx.closePath()
        ctx.fillStyle = grad
        ctx.fill()

        //光源
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
        ctx.closePath()
        ctx.fillStyle = 'rgba(255,255,255,1)'
        ctx.fillStyle = "rgba("+this.fillStyleR+","+this.fillStyleG+","+this.fillStyleB+",1)"
        // ctx.fillStyle = this.fillStyle
        ctx.fill()
    }
}

export default Ball;
