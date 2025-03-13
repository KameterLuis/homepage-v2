import React, { useEffect, useRef } from "react";

class entity {
  blockX: number;
  blockY: number;
  dirX: number;
  dirY: number;
  size: number;
  color: string;
  speed: number;
  shape: number;
  time: number;
  constructor(shape: number, color: string, speed: number, size: number) {
    if (typeof window !== "undefined") {
      this.blockX = Math.random() * (window.innerWidth - size - 5) + size + 5;
      this.blockY = Math.random() * (window.innerHeight - size - 5) + size + 5;
    } else {
      this.blockX = 0;
      this.blockY = 0;
    }
    this.dirX = Math.random() * speed;
    this.dirY = speed - this.dirX;
    this.size = size;
    this.color = color;
    this.speed = speed;
    this.shape = shape;
    this.time = Date.now();
  }
}

const Canvas = (props: any) => {
  const canvasRef = useRef(null);
  const size = 75;
  const speed = 6;

  function resizeCanvas(canvas: any) {
    const { width, height } = canvas.getBoundingClientRect();

    if (canvas.width !== width || canvas.height !== height) {
      const { devicePixelRatio: ratio = 1 } = window;
      const context = canvas.getContext("2d");
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      context.scale(ratio, ratio);
      return true;
    }

    return false;
  }

  const entities: entity[] = [];
  for (let i = 0; i < 1; i++) {
    let e: entity = new entity(1, "#000", 10, 75);
    /*Math.round(Math.random()),
      "#000000",
      Math.random() * 10 + 5,
      Math.random() * 150 + 50
    );*/
    entities.push(e);
  }

  let mouseX: number = -100,
    mouseY: number = -100;

  const updateMouse = (e: any) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  };

  const draw = (ctx: any, frameCount: number) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.beginPath();
    for (let e in entities) {
      let en = entities[e];
      ctx.fillStyle = en.color;
      if (en.shape >= 0.5) {
        ctx.rect(en.blockX, en.blockY, en.size, en.size);
      } else {
        ctx.arc(
          en.blockX + en.size / 2,
          en.blockY + en.size / 2,
          en.size / 2,
          0,
          Math.PI * 2
        );
      }
      en.blockX = en.blockX + en.dirX;
      en.blockY = en.blockY + en.dirY;
      if (en.blockX < 0 || en.blockX + en.size > window.innerWidth) {
        en.dirX = -en.dirX;
      }
      if (en.blockY < 0 || en.blockY + en.size > window.innerHeight) {
        en.dirY = -en.dirY;
        en.shape = Math.round(Math.random());
      }
      if (
        mouseX < en.blockX + en.size &&
        mouseX > en.blockX &&
        mouseY < en.blockY + en.size &&
        mouseY > en.blockY
      ) {
        //en.blockX = Math.random() * (window.innerWidth - size * 2) + size;
        //en.blockY = Math.random() * (window.innerHeight - size * 2) + size;
        let randR = Math.random() * 256;
        let randG = Math.random() * 256;
        let randB = Math.random() * 256;
        if (Date.now() - en.time > 500) {
          en.color = `rgb(${randR},${randG},${randB})`;
          en.time = Date.now();
        }
      }
    }
    ctx.fill();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    resizeCanvas(canvas);
    const context = (canvas as HTMLCanvasElement).getContext("2d");

    let frameCount = 0;
    let animationFrameId: any;

    const render = () => {
      frameCount++;
      draw(context, frameCount);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw]);

  return (
    <canvas
      onPointerMove={updateMouse}
      ref={canvasRef}
      className="fixed w-screen h-screen"
      {...props}
    />
  );
};

export default Canvas;
