const scenes = [
  {
    id: 1,
    title: '독특한 마법 세계',
    image: 'scene-001.png',
    alt: '푸른 하늘과 떠 있는 섬들, 성과 강이 보이는 마법 세계 전경',
    caption: '아주 오래전부터, 우리가 사는 세계와는\n전혀 다른 차원의 어딘가에\n독특한 마법 세계가 존재했다.'
  },
  {
    id: 2,
    title: '아름다운 곳',
    image: 'scene-002.png',
    alt: '달빛 아래 반짝이는 성과 강, 숲이 어우러진 마법 세계',
    caption: '그곳은 높은 탑과\n오래된 성, 빛나는 숲과\n강이 어우러진\n아름다운 곳이었다.'
  },
  {
    id: 3,
    title: '재능이 곧 마법',
    image: 'scene-003.png',
    alt: '노래, 음악, 수학, 요리, 그림 등 다양한 재능이 마법처럼 펼쳐지는 장면',
    caption: '하지만 그 세계가 특별한 진짜 이유는 따로 있었다.\n그곳에서는 사람들의 ‘재능’이 곧 마법이었다.'
  },
  {
    id: 4,
    title: '노래로 마음을 치유하는 아이',
    image: 'scene-004.png',
    alt: '노래를 부르며 사람들을 치유하는 아이',
    caption: '그 아이가 노래를 부르면 지쳐 있던 사람의 마음이 편안해졌고,\n아픈 사람의 고통이 조금씩 사라졌다.'
  },
  {
    id: 5,
    title: '바이올린과 피아노의 마법',
    image: 'scene-005.png',
    alt: '바이올린과 피아노 연주로 사람들의 마음을 움직이는 장면',
    caption: '바이올린을 켜면 슬픔에 빠진 사람의 마음이 따뜻해졌고,\n피아노를 연주하면 다투던 사람들의 화가 조금씩 가라앉았다.'
  },
  {
    id: 6,
    title: '수학으로 세상의 질서를 읽는 아이',
    image: 'scene-006.png',
    alt: '수학과 도형으로 다리와 길을 세우는 장면',
    caption: '수학에 뛰어난 사람도 있었다.\n그들은 다른 사람에게는 보이지 않는 세상의 규칙과 질서를 볼 수 있었다.\n복잡한 숫자와 도형을 이용해 무너질 것 같은 다리를 다시 세우기도 하고,\n길을 잃은 사람에게 가장 안전하고 빠른 길을 찾아주기도 했다.'
  },
  {
    id: 7,
    title: '식물과 요리의 재능',
    image: 'scene-007.png',
    alt: '시든 꽃을 다시 피워내고 따뜻한 음식을 나누는 장면',
    caption: '식물을 사랑하는 사람은 시든 꽃을 다시 피워냈고,\n요리를 잘하는 사람은 자신의 음식으로 지친 사람에게 힘을 되돌려주었다.'
  },
  {
    id: 8,
    title: '보랏빛 석양을 그리는 아이',
    image: 'scene-008.png',
    alt: '보랏빛 석양과 배가 있는 그림을 그리는 아이',
    caption: '어떤 아이는 보랏빛 석양과 잔잔한 물결을 그려,\n그 그림을 보는 사람들의 마음에 조용한 위로를 전했다.'
  },
  {
    id: 9,
    title: '그림으로 마음을 위로하는 세계',
    image: 'scene-009.png',
    alt: '푸른 숲, 따뜻한 햇살, 행복한 가족 그림이 한 장면에 이어지는 모습',
    caption: '푸른 숲과 맑은 하늘을 그리면 그 그림을 바라보는 사람의 불안이 조금씩 잦아들었다.\n따뜻한 햇살을 그리면 슬픔에 빠진 사람이 오랜만에 웃음을 되찾기도 했다.\n행복한 가족을 그리면 외로움에 지친 사람의 마음이 위로받았다.'
  },
  {
    id: 10,
    title: '재능을 찾는 아이들',
    image: 'scene-010.png',
    alt: '마법 세계의 옷을 입고 함께 서 있는 네 명의 아이들',
    caption: '아이들은 저마다의 빛을 품고 자신의 재능을 찾아가기 시작했다.\n서로 다른 빛이 모일수록, 그 세계는 더 환하게 반짝였다.'
  }
];

const bookmarkArts = [1,2,3,4,5,6].map(n => ({
  id: n,
  src: `bookmark-art-0${n}.jpg`,
  alt: `책갈피 작품 ${n}`
}));

const STORAGE = {
  theme: 'magicart-theme',
  selectedArt: 'magicart-bookmark-art',
  bookmarkScene: 'magicart-bookmark-scene',
  lastScene: 'magicart-last-scene'
};

const body = document.body;
const storyEl = document.querySelector('.story');
const drawer = document.getElementById('drawer');
const backdrop = document.getElementById('backdrop');
const menuBtn = document.getElementById('menuBtn');
const themeBtn = document.getElementById('themeBtn');
const continueBtn = document.getElementById('continueBtn');
const continueMeta = document.getElementById('continueMeta');
const bookmarkJumpBtn = document.getElementById('bookmarkJumpBtn');
const bookmarkArtImage = document.getElementById('bookmarkArtImage');
const bookmarkArtScene = document.getElementById('bookmarkArtScene');
const bookmarkMeta = document.getElementById('bookmarkMeta');
const bookmarkArtPicker = document.getElementById('bookmarkArtPicker');

let selectedArt = Number(localStorage.getItem(STORAGE.selectedArt) || 1);
let bookmarkScene = Number(localStorage.getItem(STORAGE.bookmarkScene) || 0);
let lastScene = Number(localStorage.getItem(STORAGE.lastScene) || 0);

function renderScenes(){
  storyEl.innerHTML = scenes.map(scene => `
    <section id="scene-${String(scene.id).padStart(2,'0')}" class="panel" data-scene="${scene.id}">
      <div class="panel-image">
        <button class="panel-bookmark ${bookmarkScene === scene.id ? 'saved' : ''}" type="button" aria-label="SCENE ${String(scene.id).padStart(2,'0')} 책갈피 저장" data-bookmark-btn="${scene.id}">
          <img class="panel-bookmark-art" src="bookmark-art-0${selectedArt}.jpg" alt="선택한 책갈피 그림">
        </button>
        <img class="panel-real-image" src="${scene.image}" alt="${scene.alt}">
      </div>
      <div class="panel-text">
        <div class="scene-index">SCENE ${String(scene.id).padStart(2,'0')}</div>
        <div class="scene-title">${scene.title}</div>
        <p class="scene-caption">${scene.caption}</p>
      </div>
    </section>
  `).join('');
}

function renderBookmarkPicker(){
  bookmarkArtPicker.innerHTML = bookmarkArts.map(art => `
    <button class="bookmark-art-choice ${art.id === selectedArt ? 'selected' : ''}" type="button" data-art-id="${art.id}" aria-label="책갈피 그림 ${art.id} 선택">
      <img src="${art.src}" alt="${art.alt}">
    </button>
  `).join('');
}

function updateSceneBookmarkButtons(){
  document.querySelectorAll('[data-bookmark-btn]').forEach(btn => {
    const sceneId = Number(btn.dataset.bookmarkBtn);
    const img = btn.querySelector('img');
    if(sceneId === bookmarkScene){
      btn.classList.add('saved');
      img.src = `bookmark-art-0${selectedArt}.jpg`;
    }else{
      btn.classList.remove('saved');
    }
  });
}

function updateBookmarkPanel(){
  bookmarkArtImage.src = `bookmark-art-0${selectedArt}.jpg`;
  if(bookmarkScene){
    const label = `SCENE ${String(bookmarkScene).padStart(2,'0')} · 여기까지 읽음`;
    bookmarkArtScene.textContent = label;
    bookmarkMeta.textContent = `현재 책갈피는 SCENE ${String(bookmarkScene).padStart(2,'0')}에 저장되어 있습니다.`;
    bookmarkJumpBtn.disabled = false;
  }else{
    bookmarkArtScene.textContent = '아직 저장된 책갈피가 없습니다';
    bookmarkMeta.textContent = '작품을 탭하면 이 그림으로 책갈피가 고정됩니다.';
    bookmarkJumpBtn.disabled = true;
  }
}

function updateContinuePanel(){
  if(lastScene){
    continueMeta.textContent = `SCENE ${String(lastScene).padStart(2,'0')}부터 이어서 읽기`;
    continueBtn.disabled = false;
  }else{
    continueMeta.textContent = '저장된 위치 없음';
    continueBtn.disabled = true;
  }
}

function saveSelectedArt(id){
  selectedArt = id;
  localStorage.setItem(STORAGE.selectedArt, String(id));
  renderBookmarkPicker();
  updateBookmarkPanel();
  updateSceneBookmarkButtons();
}

function saveBookmark(sceneId){
  bookmarkScene = sceneId;
  localStorage.setItem(STORAGE.bookmarkScene, String(sceneId));
  updateBookmarkPanel();
  updateSceneBookmarkButtons();
}

function saveLastScene(sceneId){
  lastScene = sceneId;
  localStorage.setItem(STORAGE.lastScene, String(sceneId));
  updateContinuePanel();
}

function goToScene(sceneId){
  const section = document.querySelector(`#scene-${String(sceneId).padStart(2,'0')}`);
  if(section){
    closeDrawer();
    section.scrollIntoView({behavior:'smooth', block:'start'});
  }
}

function openDrawer(){
  drawer.classList.add('open');
  backdrop.classList.add('show');
  body.classList.add('drawer-open');
}
function closeDrawer(){
  drawer.classList.remove('open');
  backdrop.classList.remove('show');
  body.classList.remove('drawer-open');
}

function bindEvents(){
  menuBtn.addEventListener('click', openDrawer);
  backdrop.addEventListener('click', closeDrawer);
  document.querySelectorAll('.drawer-link').forEach(a => {
    a.addEventListener('click', () => setTimeout(closeDrawer, 0));
  });

  continueBtn.addEventListener('click', () => {
    if(lastScene) goToScene(lastScene);
  });
  bookmarkJumpBtn.addEventListener('click', () => {
    if(bookmarkScene) goToScene(bookmarkScene);
  });

  bookmarkArtPicker.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-art-id]');
    if(!btn) return;
    saveSelectedArt(Number(btn.dataset.artId));
  });

  storyEl.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-bookmark-btn]');
    if(!btn) return;
    saveBookmark(Number(btn.dataset.bookmarkBtn));
  });

  themeBtn.addEventListener('click', () => {
    const nextLight = !body.classList.contains('light');
    body.classList.toggle('light', nextLight);
    localStorage.setItem(STORAGE.theme, nextLight ? 'light' : 'dark');
  });
}

function setupTheme(){
  const theme = localStorage.getItem(STORAGE.theme);
  if(theme === 'light') body.classList.add('light');
}

function setupProgressObserver(){
  const sections = [...document.querySelectorAll('.panel')];
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting && entry.intersectionRatio > 0.55){
        const sceneId = Number(entry.target.dataset.scene);
        saveLastScene(sceneId);
      }
    });
  }, {threshold:[0.55]});
  sections.forEach(section => observer.observe(section));
}

function init(){
  setupTheme();
  renderScenes();
  renderBookmarkPicker();
  updateBookmarkPanel();
  updateContinuePanel();
  updateSceneBookmarkButtons();
  bindEvents();
  setupProgressObserver();
}

init();
