// Web Worker for Canvas Atmosphere
// يحسن الأداء بنقل حسابات Canvas للـ main thread

var particles = [];
var scrollSmooth = 0;
var W = 0, H = 0;

function initParticles(count) {
  particles = [];
  for(var i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.6 + 0.4,
      vx: (Math.random() - 0.5) * 0.06,
      vy: (Math.random() - 0.5) * 0.06,
      gold: Math.random() < 0.22
    });
  }
}

function updateParticles(scrollTarget) {
  scrollSmooth += (scrollTarget - scrollSmooth) * 0.06;
  
  particles.forEach(function(p) {
    p.x += p.vx;
    p.y += p.vy - scrollSmooth * 0.02;
    
    if(p.x < 0) p.x = W;
    if(p.x > W) p.x = 0;
    if(p.y < 0) p.y = H;
    if(p.y > H) p.y = 0;
  });
  
  return {
    particles: particles,
    scrollSmooth: scrollSmooth
  };
}

self.onmessage = function(e) {
  var data = e.data;
  
  switch(data.type) {
    case 'init':
      W = data.width;
      H = data.height;
      var count = data.count || 46;
      initParticles(count);
      break;
      
    case 'resize':
      W = data.width;
      H = data.height;
      break;
      
    case 'update':
      var result = updateParticles(data.scrollTarget);
      self.postMessage({
        type: 'frame',
        data: result
      });
      break;
  }
};
