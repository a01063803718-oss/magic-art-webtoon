const scenes = [["마법 세계 전경", "아주 오래전부터, 우리가 사는 세계와는 전혀 다른 차원의 어딘가에 하나의 마법 세계가 존재했다."], ["높은 탑과 오래된 성, 빛나는 숲과 강", "그곳은 높은 탑과 오래된 성, 빛나는 숲과 강이 어우러진 아름다운 곳이었다."], ["재능이 마법인 세계", "하지만 그 세계가 특별한 진짜 이유는 따로 있었다. 그곳에서는 사람들의 ‘재능’이 곧 마법이었다."], ["노래로 사람을 치유하는 아이", "누군가는 노래를 잘했다. 그 아이가 노래를 부르면 지쳐 있던 사람의 마음이 편안해졌고, 아픈 사람의 고통이 조금씩 사라졌다."], ["바이올린과 피아노의 마법", "누군가는 악기를 아주 잘 다뤘다. 바이올린을 켜면 슬픔에 빠진 사람의 마음이 따뜻해졌고, 피아노를 연주하면 다투던 사람들의 화가 조금씩 가라앉았다."], ["수학으로 세상의 질서를 읽는 아이", "수학에 뛰어난 사람들은 다른 사람에게는 보이지 않는 세상의 규칙과 질서를 볼 수 있었다."], ["식물과 요리의 재능", "식물을 사랑하는 사람은 시든 꽃을 다시 피워냈고, 요리를 잘하는 사람은 자신의 음식으로 지친 사람에게 힘을 되돌려주었다."], ["그림이 마음을 위로하는 세계", "그리고 그림을 그리는 재능을 가진 사람도 있었다. 그들이 그린 그림은 단순히 아름다운 그림이 아니었다."], ["푸른 숲과 맑은 하늘의 그림", "푸른 숲과 맑은 하늘을 그리면 그 그림을 바라보는 사람의 불안이 조금씩 잦아들었다."], ["따뜻한 햇살의 그림", "따뜻한 햇살을 그리면 슬픔에 빠진 사람이 오랜만에 웃음을 되찾기도 했다."], ["행복한 가족의 그림", "행복한 가족을 그리면 외로움에 지친 사람의 마음이 위로받았다."], ["재능을 찾는 아이들", "아이들은 어릴 때부터 자신이 어떤 재능을 가지고 태어났는지 찾았다. 사람들은 늘 물었다. “너는 어떤 마법을 가지고 있니?”"], ["재능을 칭찬하는 어른들", "뛰어난 재능을 가진 아이에게는 “정말 강한 마법을 가지고 태어났구나.”라는 말이 최고의 칭찬이었다."], ["재능을 찾지 못한 아이", "하지만 모든 사람이 뛰어난 재능을 가지고 태어나는 것은 아니었다."], ["두 형제의 어린 시절", "마법 세계의 어느 작은 도시에는 서로 한 살 차이가 나는 두 형제가 살고 있었다."], ["15세 형과 14세 동생", "형은 열다섯 살, 동생은 열네 살이었다. 두 사람은 아주 어릴 때부터 같은 것을 사랑했다. 그림이었다."], ["함께 그림 그리는 형제", "종이와 연필만 있으면 두 형제는 몇 시간이고 그림을 그렸다. 그림을 그릴 때만큼은 두 사람 모두 행복했다."], ["동생의 재능이 드러나는 순간", "시간이 지나면서 사람들은 두 형제 사이에서 아주 큰 차이를 발견했다."], ["동생의 마법 같은 붓질", "동생에게는 놀라운 미술적 재능이 있었다. 붓을 한 번 움직일 때마다 그림에 생기가 돌았고, 색을 섞을 때마다 아름다운 빛이 만들어졌다."], ["동생의 작품 앞에 모인 사람들", "사람들은 동생의 그림 앞에서 오랫동안 감탄했다. “정말 아름다워.” “이 아이는 대단한 마법을 가지고 있어.”"], ["다른 도시에서도 찾아오는 사람들", "동생의 이름은 점점 알려지기 시작했고, 그의 그림을 보기 위해 다른 도시에서 찾아오는 사람들까지 생겼다."], ["밤늦게 혼자 그림 그리는 형", "그러나 형은 달랐다. 형도 그림을 사랑했다. 아니, 어쩌면 동생보다 더 그림을 사랑했는지도 몰랐다."], ["한 장 대신 열 장을 그리는 형", "형은 매일 그림을 그렸다. 사람들이 잠든 밤에도 불을 켜고 붓을 들었다. 남들이 한 장을 그릴 동안 형은 열 장을 그렸다."], ["형의 작품을 혹평하는 사람들", "하지만 아무리 노력해도 사람들은 형의 그림을 인정해주지 않았다."], ["혹평 말풍선", "“비율이 이상하잖아.” “색도 엉망이야.” “이 정도면 그림에 재능이 없는 것 같은데?”"], ["혼자 자기 그림을 바라보는 형", "형은 사람들 앞에서는 아무렇지 않은 척했지만, 혼자 있을 때면 자신의 그림을 한참 동안 바라보곤 했다."], ["동생의 작품과 관객을 바라보는 형", "동생의 그림을 바라보는 사람들의 눈빛과 자신의 그림을 바라보는 사람들의 눈빛이 너무나 다르다는 것을 형은 알고 있었다."], ["서로 다른 평가", "두 사람은 같은 것을 사랑했다. 그러나 세상은 두 사람을 완전히 다르게 대했다."], ["축복과 무시", "한 사람의 재능은 축복이라고 불렸다. 다른 한 사람의 노력은 쓸모없는 일이라고 여겨졌다."], ["상처가 쌓이는 형", "그 차이는 조금씩 형의 마음속 깊은 곳에 상처로 쌓여갔다."], ["동생이 도구함을 만드는 장면", "한편 동생은 자신의 뛰어난 미술적 재능과 마법의 힘을 이용해 특별한 물건을 만들기 시작했다."], ["마법의 미술 도구함", "그것은 커다란 미술 도구함이었다. 하지만 평범한 화구 상자가 아니었다."], ["도구함 내부", "에칭, 판화, 세밀한 드로잉, 특별한 안료와 붓, 조각과 인쇄에 필요한 도구까지 수많은 미술 기법의 도구가 들어 있었다."], ["도구함의 마법", "동생이 자신의 마법으로 수많은 미술 기법에 사용하는 다양한 도구를 하나의 상자 안에 담아놓은 것이었다."], ["고야 작품을 따라 그리는 장면", "이 도구함 속 도구로 어떤 화가의 작품을 따라 그리기 시작하면, 그림은 단순한 그림으로 끝나지 않았다."], ["그림 속 선과 색이 움직임", "예를 들어 고야의 작품을 따라 그리면, 완성되어가는 그림 속 색과 선이 서서히 움직이기 시작했다."], ["점점 커지는 그림", "그림은 종이보다 커지고, 책상보다 커지고, 마침내 사람의 키보다 훨씬 거대한 그림이 되었다."], ["그림이 사람을 삼키는 장면", "그리고 어느 순간 그 그림은 자신을 그린 사람을 통째로 삼켰다."], ["과거 고야의 세계", "눈을 다시 떴을 때 그 사람은 그림이 만들어졌던 시대에 도착해 있었다. 고야의 작품을 그렸다면 고야가 살던 과거였다."], ["실제 고야와 마주하는 장면", "그리고 그곳에서 실제 고야를 만날 수도 있었다."], ["멀티버스 전경", "하지만 이 마법 세계에는 또 다른 비밀이 있었다. 우주는 수많은 세계가 함께 존재하는 거대한 멀티버스였다."], ["각각 분리된 세계들", "각각의 세계는 평소에는 서로 분리되어 있었다."], ["1년에 한 번의 충돌", "하지만 약 1년에 한 번, 서로 다른 멀티버스가 아주 가까이 스쳐 지나가며 충돌하는 순간이 있었다."], ["허공의 얇은 금", "그때 두 세계 사이의 공간이 불안정해지고, 처음에는 허공에 아주 얇은 금이 생겼다."], ["천처럼 찢어지는 공간", "금은 점점 길어졌고, 마치 거대한 천을 양쪽에서 잡아당겨 찢는 것처럼 공간 자체가 갈라졌다."], ["틈 너머 다른 세계", "갈라진 틈 너머에는 전혀 다른 세계가 보였다."], ["형의 15번째 생일", "어느 날, 형의 열다섯 번째 생일이 찾아왔다."], ["생일날 작품을 공개한 형", "형은 이번만큼은 자신이 꽤 좋은 그림을 그렸다고 생각했다. 며칠 동안 밤늦게까지 고치고 또 고친 작품이었다."], ["생일날 다시 비웃는 사람들", "하지만 사람들의 반응은 달라지지 않았다."], ["상처가 되는 말들", "“역시 기대했는데 별로네.” “동생하고 정말 형제 맞아?” “아무리 노력해도 재능은 어쩔 수 없는 건가 봐.”"], ["자리를 떠나는 형", "그 말들이 형의 마음속에 박혔다. 형은 아무 말도 하지 않고 그 자리를 떠났다."], ["동생의 그림이 가득한 방", "형은 동생의 그림들이 있는 곳으로 향했다. 방 안에는 사람들에게 칭찬받았던 그림들이 가득했다."], ["한쪽의 마법 도구함", "그리고 그 한편에는 동생이 만든 마법의 미술 도구함이 놓여 있었다."], ["도구함과 그림을 번갈아 보는 형", "형은 도구함을 바라봤다. 동생의 그림을 바라봤다. 다시 도구함을 바라봤다."], ["시공간 균열 시작", "바로 그 순간, 허공에서 이상한 소리가 들렸다. 찌이익—"], ["금이 길어지고 공간이 찢어짐", "공간에 생긴 금은 순식간에 길어졌고, 마치 천이 찢어지듯 크게 갈라졌다."], ["2026년 현대 지구가 보임", "찢어진 공간 너머로 높은 건물, 수많은 자동차, 빛나는 전광판, 처음 보는 옷을 입은 사람들이 보였다. 그곳은 2026년의 현대 지구였다."], ["형의 결심", "형의 마음속에서 하나의 생각이 떠올랐다. ‘이걸 가지고 가버리면…….’"], ["도구함에 손을 뻗는 형", "‘동생은 더 이상 그림을 그리지 못할 거야.’"], ["차원의 문으로 달리는 형", "형은 마법의 미술 도구함을 들고 그대로 찢어진 시공간의 틈을 향해 달렸다."], ["차원을 넘어가는 순간", "형은 도구함을 품에 안은 채 차원의 문을 넘어갔다."], ["국립현대미술관 내부", "다음 순간, 형은 2026년의 국립현대미술관 안에 서 있었다."], ["고야 특별전 안내", "높은 천장과 수많은 그림들. 그리고 바로 앞에는 ‘고야 특별전’을 알리는 안내가 있었다."], ["고야 작품을 바라보는 형", "형이 차원의 문에서 빠져나오자마자 가장 먼저 눈에 들어온 것도 고야의 작품이었다."], ["그림 앞에서 감탄하는 관람객", "여기도 그림, 저기도 그림. 사람들은 작품 앞에 서서 감탄하고 있었다."], ["분노하는 형 얼굴", "형의 얼굴이 굳어졌다. 자신의 세계에서 받았던 비난과 동생의 작품 앞에서 감탄하던 사람들이 떠올랐다."], ["손이 떨리는 형", "“그림…….” 형은 이를 악물었다. “다 그림이야.”"], ["손바닥의 불꽃", "형이 손을 앞으로 내밀었다. 손바닥 위에 붉은 불꽃이 피어올랐다."], ["커지는 불덩어리", "불꽃은 점점 커지며 하나의 뜨거운 불덩어리가 되었다."], ["형의 분노", "“이런 미술 작품들…… 전부 없애버리겠어.”"], ["고야 작품에 불덩어리를 던짐", "형은 불덩어리를 고야의 작품을 향해 던졌다."], ["불길과 비명", "불길이 번졌다. 사람들이 비명을 질렀다. “불이야!”"], ["화재경보와 비상등", "곧 미술관 안에 날카로운 화재경보음이 울려 퍼졌고 붉은 비상등이 번쩍였다."], ["대피 방송", "“화재가 발생했습니다. 관람객 여러분께서는 직원의 안내에 따라 대피해 주십시오.”"], ["놀란 형", "형은 깜짝 놀랐다. 그의 세계에는 이런 기계도, 이런 경보음도 없었다."], ["관람객 대피", "사람들이 한꺼번에 움직이기 시작했고, 미술관 직원들은 관람객들을 출구 쪽으로 안내했다."], ["형이 도망치기 시작", "형의 얼굴에 처음으로 두려움이 떠올랐다. “뭐…… 뭐야, 이게?”"], ["아직 남아 있는 차원의 문", "도망치던 형은 자신이 넘어왔던 시공간의 문이 아직 완전히 닫히지 않았다는 것을 발견했다."], ["문이 좁아지는 장면", "천이 찢어진 것 같은 틈은 점점 좁아지고 있었다."], ["형이 다시 차원문으로 돌진", "형은 마지막 힘을 다해 그 틈을 향해 달렸다."], ["문 닫히기 직전 뛰어드는 형", "문이 닫히기 직전 형은 다시 시공간의 틈 속으로 몸을 던졌다."], ["차원의 문이 닫힘", "형의 모습이 사라지고, 찢어졌던 공간은 완전히 닫혔다."], ["형이 마법 세계로 귀환", "형은 다시 자신이 살던 마법의 세계로 돌아갔다."], ["미술관 바닥에 남은 도구함", "하지만 너무 급하게 도망친 나머지 마법의 미술 도구함을 미술관에 두고 갔다."], ["시연·은우·지윤·헌이 같은 미술관에서 대피", "그날 같은 미술관 안에는 시연, 은우, 지윤, 헌도 있었다."], ["경보에 놀라 뛰는 시연·은우·지윤·헌", "네 아이도 갑작스러운 경보음과 사람들의 움직임에 놀라 사람들을 따라 뛰기 시작했다."], ["시연이가 멈춰서는 장면", "그때 시연이가 갑자기 걸음을 멈췄다."], ["바닥의 도구함을 발견한 시연", "시연이가 바닥 한쪽의 낯선 상자를 발견했다. “헌아, 저거 좀 봐!”"], ["헌이 고개를 돌림", "헌이 고개를 돌렸다. “뭐야, 저게?”"], ["헌이 도구함을 들어 올림", "헌은 도구함 쪽으로 달려가 상자를 들어 올렸다."], ["헌의 대사", "“이게 뭐지?”"], ["시연이가 재촉", "시연이가 재촉했다. “일단 가져가 보자!”"], ["네 명이 함께 뛰어감", "헌은 도구함을 품에 안은 채 시연, 은우, 지윤과 함께 미술관 밖으로 뛰기 시작했다."], ["엔딩 컷", "네 아이는 아직 몰랐다. 자신들이 방금 주운 상자가 다른 세계에서 온 물건이라는 것도, 그 안에 수많은 시대와 화가들을 연결하는 힘이 들어 있다는 것도."]];
const story=document.querySelector('.story');
scenes.forEach((s,i)=>{
  const sec=document.createElement('section');
  sec.className='panel';
  sec.id=`scene-${String(i+1).padStart(3,'0')}`;
  sec.dataset.sceneIndex=String(i+1);

  const sceneNo = String(i+1).padStart(2,'0');
  const imageMap = {1:'scene-001.png', 2:'scene-002.png', 3:'scene-003.png'};
  const visualHtml = imageMap[i+1]
    ? `<img class="panel-real-image" src="${imageMap[i+1]}" alt="SCENE ${sceneNo}">`
    : `<div class="panel-label">${s[0]}</div>`;

  sec.innerHTML=`
    <button class="panel-bookmark" type="button" aria-label="SCENE ${sceneNo} 책갈피" title="여기까지 읽음">🔖</button>
    <div class="panel-image">
      ${visualHtml}
    </div>
    <div class="panel-text"><p>${s[1]}</p></div>`;
  story.appendChild(sec);
});
const drawer=document.getElementById('drawer');
const backdrop=document.getElementById('backdrop');
document.getElementById('menuBtn').onclick=()=>{drawer.classList.add('open');backdrop.classList.add('show')};
function close(){drawer.classList.remove('open');backdrop.classList.remove('show')}
backdrop.onclick=close;
drawer.querySelectorAll('a').forEach(a=>a.onclick=close);
document.getElementById('themeBtn').onclick=()=>{
  document.body.classList.toggle('light');
  localStorage.setItem('magicart-theme',document.body.classList.contains('light')?'light':'dark');
};
if(localStorage.getItem('magicart-theme')==='light')document.body.classList.add('light');


// ===== Reading progress / bookmark =====
const PROGRESS_KEY='magicart-last-scene';
const BOOKMARK_KEY='magicart-bookmark-scene';

const continueBtn=document.getElementById('continueBtn');
const continueMeta=document.getElementById('continueMeta');
const bookmarkJumpBtn=document.getElementById('bookmarkJumpBtn');
const bookmarkMeta=document.getElementById('bookmarkMeta');

function sceneLabel(n){
  return `SCENE ${String(n).padStart(2,'0')}`;
}
function getSceneElement(n){
  return document.getElementById(`scene-${String(n).padStart(3,'0')}`);
}
function closeDrawerOnly(){
  drawer.classList.remove('open');
  backdrop.classList.remove('show');
}
function scrollToScene(n){
  const el=getSceneElement(Number(n));
  if(!el) return;
  closeDrawerOnly();
  setTimeout(()=>el.scrollIntoView({behavior:'smooth',block:'start'}),80);
}
function refreshReadingUI(){
  const last=Number(localStorage.getItem(PROGRESS_KEY)||0);
  const bookmark=Number(localStorage.getItem(BOOKMARK_KEY)||0);

  if(last>0){
    continueBtn.disabled=false;
    continueMeta.textContent=`${sceneLabel(last)}부터`;
  }else{
    continueBtn.disabled=true;
    continueMeta.textContent='저장된 위치 없음';
  }

  if(bookmark>0){
    bookmarkJumpBtn.disabled=false;
    bookmarkMeta.textContent=`${sceneLabel(bookmark)} 저장됨`;
  }else{
    bookmarkJumpBtn.disabled=true;
    bookmarkMeta.textContent='저장된 책갈피 없음';
  }

  document.querySelectorAll('.panel-bookmark').forEach(btn=>btn.classList.remove('saved'));
  if(bookmark>0){
    const panel=getSceneElement(bookmark);
    if(panel) panel.querySelector('.panel-bookmark')?.classList.add('saved');
  }
}

continueBtn?.addEventListener('click',()=>{
  const n=Number(localStorage.getItem(PROGRESS_KEY)||0);
  if(n) scrollToScene(n);
});
bookmarkJumpBtn?.addEventListener('click',()=>{
  const n=Number(localStorage.getItem(BOOKMARK_KEY)||0);
  if(n) scrollToScene(n);
});

document.querySelectorAll('.panel').forEach(panel=>{
  const btn=panel.querySelector('.panel-bookmark');
  btn?.addEventListener('click',(e)=>{
    e.stopPropagation();
    const n=Number(panel.dataset.sceneIndex);
    const current=Number(localStorage.getItem(BOOKMARK_KEY)||0);

    if(current===n){
      localStorage.removeItem(BOOKMARK_KEY);
    }else{
      localStorage.setItem(BOOKMARK_KEY,String(n));
      localStorage.setItem(PROGRESS_KEY,String(n));
    }
    refreshReadingUI();
  });
});

// Save the most visible scene as the last-read point.
let progressTimer=null;
const observer=new IntersectionObserver(entries=>{
  let best=null;
  for(const entry of entries){
    if(entry.isIntersecting && (!best || entry.intersectionRatio>best.intersectionRatio)){
      best=entry;
    }
  }
  if(best){
    clearTimeout(progressTimer);
    progressTimer=setTimeout(()=>{
      const n=Number(best.target.dataset.sceneIndex);
      if(n){
        localStorage.setItem(PROGRESS_KEY,String(n));
        refreshReadingUI();
      }
    },250);
  }
},{threshold:[0.35,0.55,0.75]});

document.querySelectorAll('.panel').forEach(panel=>observer.observe(panel));
refreshReadingUI();

if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js'))}
