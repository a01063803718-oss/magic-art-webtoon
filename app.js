const scenes = [{"id": "scene-001", "label": "SCENE 01", "image": "scene-001.png", "overlay": "아주 오래전부터, 우리가 사는 세계와는 전혀 다른 차원의 어딘가에 하나의 마법 세계가 존재했다.", "overlayPosition": "top-left", "narration": "아주 오래전부터, 우리가 사는 세계와는 전혀 다른 차원의 어딘가에 하나의 마법 세계가 존재했다."}, {"id": "scene-002", "label": "SCENE 02", "image": "scene-002.png", "overlay": "그곳은 높은 탑과 오래된 성, 빛나는 숲과 강이 어우러진 아름다운 곳이었다.", "overlayPosition": "bottom-right", "narration": "그곳은 높은 탑과 오래된 성, 빛나는 숲과 강이 어우러진 아름다운 곳이었다."}, {"id": "scene-003", "label": "SCENE 03", "image": "scene-003.png", "overlay": "하지만 그 세계가 특별한 진짜 이유는 따로 있었다. 그곳에서는 사람들의 ‘재능’이 곧 마법이었다.", "overlayPosition": "mid-left", "narration": "하지만 그 세계가 특별한 진짜 이유는 따로 있었다. 그곳에서는 사람들의 ‘재능’이 곧 마법이었다."}]

const story = document.getElementById('story');

scenes.forEach(scene => {
  const section = document.createElement('section');
  section.className = 'scene';
  section.id = scene.id;
  section.innerHTML = `
    <div class="scene-label">${scene.label}</div>
    <div class="scene-visual">
      <img class="scene-image" src="${scene.image}" alt="${scene.label}">
      <div class="bubble ${scene.overlayPosition}">${scene.overlay}</div>
    </div>
    <div class="narration-card">
      <p>${scene.narration}</p>
    </div>
  `;
  story.appendChild(section);
});

const drawer = document.getElementById('drawer');
const backdrop = document.getElementById('backdrop');
document.getElementById('menuBtn').onclick = () => {
  drawer.classList.add('open');
  backdrop.classList.add('show');
};
function closeDrawer(){
  drawer.classList.remove('open');
  backdrop.classList.remove('show');
}
backdrop.onclick = closeDrawer;
drawer.querySelectorAll('a').forEach(a => a.onclick = closeDrawer);

document.getElementById('themeBtn').onclick = () => {
  document.body.classList.toggle('light');
  localStorage.setItem('magicart-theme', document.body.classList.contains('light') ? 'light' : 'dark');
};
if(localStorage.getItem('magicart-theme') === 'light'){
  document.body.classList.add('light');
}

if('serviceWorker' in navigator){
  window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js'));
}
