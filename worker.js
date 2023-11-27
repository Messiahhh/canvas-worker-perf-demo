let canvas = null;
self.onmessage = function(evt) {
    if (evt.data.canvas) {
        canvas = evt.data.canvas;
        draw()
    }

    if (evt.data.pause) {
        blockTask()
    }
}

let count = 0;
function draw() {
    if (canvas) {
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = 'pink'
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = 'black'
        ctx.fillText(`webworker 渲染的canvas ${count}`, 10, 10);
        count++
        
        requestAnimationFrame(draw)
    }
}

function blockTask() {
    let count = 0;
    while (count < 10000000000) {
        count++;
    }
    console.log('finish')
}