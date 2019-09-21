import React from 'react';

class Ball {
    constructor(x, y, radius) {
        this.x = x
        this.y = y
        this.radius = radius
        this.angle = Math.random() * 180
        this.speed = 1
        this.flag = false
        this.fillStyle='#77ff77'
    }
    draw(ctx) {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
        ctx.closePath()
        ctx.fillStyle = this.fillStyle
        ctx.fill()
    }
}

export default Ball;
