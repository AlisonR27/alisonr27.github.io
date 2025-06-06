<template>
  <section id="welcome">
      <div class="welcome-content">
          <p>
              {{ $t('welcome.emphasis') }}
          </p>
          <p> {{ $t('welcome.text') }} </p>
      </div>
      <canvas ref="canvasRef" id="starCanvas"></canvas>
      <div class="linear-gradient" aria-hidden="true"></div>
  </section>  
</template>

<script lang="ts" setup>
const canvasRef = ref(null as HTMLCanvasElement | null);

onMounted(() => {
  const canvas = canvasRef.value!;
  const ctx = canvas.getContext('2d');

  canvas.addEventListener("contextmenu", function(e) {
    e.preventDefault();
  });

  let stars = [];
  const numStars = 300;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    createStars();
  }

  function createStars() {
    stars = [];
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        alpha: Math.random(),
        delta: Math.random() * 0.02
      });
    }
  }

  function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let star of stars) {
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
      ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
      ctx.fill();
      // animação de brilho (piscando)
      star.alpha += star.delta;
      if (star.alpha <= 0 || star.alpha >= 1) {
        star.delta *= -1;
      }
    }
  }

  function animate() {
    drawStars();
    requestAnimationFrame(animate);
  }

  window.addEventListener('resize', resizeCanvas);

  // inicialização
  resizeCanvas();
  animate();
});
</script>

<style lang="scss" scoped>
canvas {
  display: block;
  background: radial-gradient(#1f1141b0, #04040a4a);
}
.linear-gradient {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
  background: linear-gradient(#000, #0f2144);
}
#welcome {
        max-width: 100%; overflow: hidden;
        position: relative;
    }

.welcome-content {
  position:absolute;
  width: 100%;
  height: 100%;
  padding: calc(100vh / 6) calc(100vw / 8);
  z-index: 3;
  color:white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  font-size: 16pt;

  animation: blurry 2s ease-in-out;
  animation-delay: 1s;
  animation-fill-mode: forwards;
  p:first-child {
    font-size: 48pt;
    margin: 0;

    @media screen and (max-width: 768px) {
      font-weight: bold;
      font-size: 32pt;
    }
    @media screen and (max-width: 480px){
      font-size:26pt;
      line-height:1.5em;
      // word-wrap: normal;
      // overflow-wrap:break-word;
      // hyphens: auto;
    }
  }
  p {
    @media screen and (max-width: 768px){ 
      max-width: 80%;
    }
    @media screen and (max-width: 480px){ 
      font-size: 16pt;
      font-weight: 200;
    }

  }
}

@keyframes blurry {
  from {
      backdrop-filter: blur(0);
  }
  to {
      backdrop-filter: blur(5px);
  }
}
</style>