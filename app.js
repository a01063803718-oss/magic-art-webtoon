const episodes = [
  {
    id: "ep1",
    title: "EP. 01 마법의 세계",
    scenes: [
      {
        visual: "마법 세계 전경 — 높은 탑, 오래된 성, 빛나는 숲과 강",
        text: "아주 오래전부터, 우리가 사는 세계와는 전혀 다른 차원의 어딘가에 하나의 마법 세계가 존재했다."
      },
      {
        visual: "서로 다른 재능을 가진 아이들이 한 도시에서 살아가는 모습",
        text: "그곳에서는 사람들의 ‘재능’이 곧 마법이었다."
      },
      {
        visual: "노래하는 아이가 아픈 사람을 치유하는 장면",
        text: "누군가는 노래를 잘했다. 그 아이가 노래를 부르면 지쳐 있던 사람의 마음이 편안해졌고, 아픈 사람의 고통이 조금씩 사라졌다."
      },
      {
        visual: "바이올린 연주가 슬픈 사람들의 마음을 따뜻하게 만드는 장면",
        text: "누군가는 악기를 아주 잘 다뤘다. 바이올린을 켜면 슬픔에 빠진 사람의 마음이 따뜻해졌다."
      },
      {
        visual: "수학적 마법으로 무너질 다리를 분석하고 복원하는 장면",
        text: "수학에 뛰어난 사람들은 다른 사람에게는 보이지 않는 세상의 규칙과 질서를 볼 수 있었다."
      },
      {
        visual: "식물, 요리, 미술의 재능이 각각 마법으로 발현되는 몽타주",
        text: "식물을 사랑하는 사람은 시든 꽃을 다시 피워냈고, 요리를 잘하는 사람은 자신의 음식으로 지친 사람에게 힘을 되돌려주었다."
      },
      {
        visual: "한 장의 그림을 바라보는 사람들의 표정이 편안해지는 장면",
        text: "그리고 그림을 그리는 재능을 가진 사람도 있었다. 그들이 그린 그림은 단순히 아름다운 그림이 아니었다."
      },
      {
        visual: "어린 형제 둘이 나란히 그림을 그리는 어린 시절",
        text: "그 마법 세계의 어느 작은 도시에는 서로 한 살 차이가 나는 두 형제가 살고 있었다. 두 사람은 아주 어릴 때부터 그림을 사랑했다."
      },
      {
        visual: "14세 동생의 그림 앞에 사람들이 모여 감탄하는 장면",
        text: "동생에게는 놀라운 미술적 재능이 있었다.",
        dialogue: "“정말 아름다워.” “이 아이는 대단한 마법을 가지고 있어.”"
      },
      {
        visual: "15세 형이 밤늦게 홀로 수많은 그림을 그리는 장면",
        text: "그러나 형은 달랐다. 형도 그림을 사랑했다. 아니, 어쩌면 동생보다 더 그림을 사랑했는지도 몰랐다."
      },
      {
        visual: "형의 작품을 보며 사람들이 혹평하고, 형이 말없이 서 있는 장면",
        text: "하지만 아무리 노력해도 사람들은 형의 그림을 인정해주지 않았다.",
        dialogue: "“비율이 이상하잖아.” “색도 엉망이야.” “재능이 없는 것 같은데?”"
      },
      {
        visual: "동생이 마법과 미술 재능으로 화려한 도구함을 만드는 장면",
        text: "한편 동생은 자신의 뛰어난 미술적 재능과 마법의 힘을 이용해 특별한 물건을 만들기 시작했다."
      },
      {
        visual: "도구함 내부에 에칭, 판화, 드로잉, 안료, 붓, 조각 도구가 가득한 장면",
        text: "그것은 평범한 화구 상자가 아니었다. 수많은 미술 기법에 사용하는 다양한 도구를 하나의 상자 안에 담아놓은 마법의 미술 도구함이었다."
      },
      {
        visual: "고야 작품을 따라 그린 그림이 커지며 사람을 삼키는 장면",
        text: "이 도구함 속 도구로 어떤 화가의 작품을 따라 그리면, 그림은 점점 커져 그린 사람을 삼켰다."
      },
      {
        visual: "그림을 통과해 과거의 고야가 있는 시대로 이동하는 장면",
        text: "고야의 작품을 그렸다면 고야가 살던 과거로 갈 수 있었고, 그곳에서 실제 고야를 만날 수도 있었다."
      },
      {
        visual: "여러 우주가 겹치는 멀티버스와 갈라지는 차원의 틈",
        text: "하지만 이 마법 세계는 유일한 세계가 아니었다. 우주는 수많은 세계가 함께 존재하는 거대한 멀티버스였다."
      },
      {
        visual: "허공이 천처럼 찢어지며 2026년 현대 도시가 보이는 장면",
        text: "약 1년에 한 번, 서로 다른 세계가 아주 가까이 스쳐 지나가며 충돌했고, 그 순간 공간 자체가 천처럼 찢어졌다."
      },
      {
        visual: "형의 15번째 생일, 작품을 둘러싼 사람들의 비웃음",
        text: "어느 날, 형의 열다섯 번째 생일이 찾아왔다. 하지만 그날도 사람들은 형의 작품을 보고 비웃었다."
      },
      {
        visual: "상처받은 형이 동생의 작업실에서 도구함과 그림을 바라보는 장면",
        text: "형은 아무 말도 하지 않고 동생의 그림들이 있는 곳으로 향했다."
      },
      {
        visual: "바로 옆에서 차원의 틈이 열리고 현대 지구가 보이는 장면",
        text: "바로 그 순간, 1년에 한 번 일어나는 멀티버스의 충돌이 시작됐다."
      },
      {
        visual: "형이 도구함을 움켜쥔 채 차원의 문으로 달리는 장면",
        text: "형의 마음속에서 하나의 생각이 떠올랐다.",
        dialogue: "‘이걸 가지고 가버리면… 동생은 더 이상 그림을 그리지 못할 거야.’"
      },
      {
        visual: "2026년 국립현대미술관 고야 특별전으로 넘어온 형",
        text: "형은 마법의 미술 도구함을 품에 안은 채 차원의 문을 넘어갔다. 그곳은 2026년의 국립현대미술관이었다."
      },
      {
        visual: "고야 작품과 관람객들을 바라보며 분노하는 형",
        text: "사람들은 그림 앞에 서서 감탄하고 있었다. 형의 얼굴이 굳어졌다.",
        dialogue: "“그림… 다 그림이야.”"
      },
      {
        visual: "형의 손바닥 위에 붉은 불덩어리가 생기는 장면",
        text: "분노가 솟구쳤다.",
        dialogue: "“이런 미술 작품들… 전부 없애버리겠어.”"
      },
      {
        visual: "고야 작품에 불길이 번지고 관람객들이 놀라는 장면",
        text: "형은 불덩어리를 고야의 작품을 향해 던졌다."
      },
      {
        visual: "화재경보, 붉은 비상등, 관람객 대피",
        text: "곧 미술관 안에 날카로운 화재경보음이 울려 퍼졌다.",
        dialogue: "“화재가 발생했습니다. 직원의 안내에 따라 대피해 주십시오.”"
      },
      {
        visual: "형이 아직 닫히지 않은 차원의 문을 발견하는 장면",
        text: "형은 도망치던 중, 자신이 넘어왔던 시공간의 문이 아직 완전히 닫히지 않았다는 것을 발견했다."
      },
      {
        visual: "형이 마지막 순간 차원의 문으로 뛰어드는 장면",
        text: "형은 마지막 힘을 다해 그 틈으로 뛰어들었다."
      },
      {
        visual: "차원의 문이 닫히고 미술관 바닥에 도구함만 남은 장면",
        text: "형은 자신의 세계로 돌아갔고, 시공간의 문은 완전히 닫혔다. 하지만 마법의 미술 도구함은 미술관에 남겨졌다."
      },
      {
        visual: "미아, 루크, 에블린, 허니 네 아이가 대피 중인 장면",
        text: "그날 같은 미술관 안에는 미아, 루크, 에블린, 허니도 있었다."
      },
      {
        visual: "미아가 바닥의 마법 도구함을 발견하고 손가락으로 가리키는 장면",
        text: "사람들을 따라 뛰던 미아가 갑자기 멈췄다.",
        dialogue: "“허니야, 저거 좀 봐!”"
      },
      {
        visual: "허니가 도구함을 들어 올리는 장면",
        text: "허니가 도구함을 들어 올렸다.",
        dialogue: "“이게 뭐지? 일단 가져가 보자.”"
      },
      {
        visual: "네 아이가 도구함을 들고 미술관 밖으로 뛰어가는 엔딩 장면",
        text: "허니는 정체를 알 수 없는 마법의 미술 도구함을 품에 안은 채 미아, 루크, 에블린과 함께 밖으로 뛰기 시작했다."
      }
    ]
  }
];

const reader = document.getElementById("reader");
const sceneTemplate = document.getElementById("sceneTemplate");
const episodeTitle = document.getElementById("episodeTitle");
const episodeList = document.getElementById("episodeList");
const drawer = document.getElementById("drawer");
const backdrop = document.getElementById("backdrop");
const topBtn = document.getElementById("topBtn");

function renderEpisode(ep){
  reader.innerHTML = "";
  episodeTitle.textContent = ep.title;

  ep.scenes.forEach((scene, i) => {
    const node = sceneTemplate.content.cloneNode(true);
    node.querySelector(".scene-no").textContent = `SCENE ${String(i+1).padStart(2,"0")}`;
    node.querySelector(".placeholder-label").textContent = scene.visual;

    const text = node.querySelector(".scene-text");
    const p = document.createElement("p");
    p.textContent = scene.text;
    text.appendChild(p);

    if(scene.dialogue){
      const d = document.createElement("div");
      d.className = "dialogue";
      d.textContent = scene.dialogue;
      text.appendChild(d);
    }
    reader.appendChild(node);
  });
  window.scrollTo({top:0, behavior:"instant"});
}

episodes.forEach((ep, idx) => {
  const btn = document.createElement("button");
  btn.className = "episode-item" + (idx===0 ? " active" : "");
  btn.textContent = ep.title;
  btn.onclick = () => {
    document.querySelectorAll(".episode-item").forEach(x=>x.classList.remove("active"));
    btn.classList.add("active");
    renderEpisode(ep);
    closeDrawer();
  };
  episodeList.appendChild(btn);
});

function openDrawer(){
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden","false");
  backdrop.hidden = false;
}
function closeDrawer(){
  drawer.classList.remove("open");
  drawer.setAttribute("aria-hidden","true");
  backdrop.hidden = true;
}

document.getElementById("menuBtn").onclick = openDrawer;
document.getElementById("closeDrawer").onclick = closeDrawer;
backdrop.onclick = closeDrawer;

document.getElementById("themeBtn").onclick = () => {
  document.body.classList.toggle("light");
  localStorage.setItem("webtoon-theme", document.body.classList.contains("light") ? "light" : "dark");
};

if(localStorage.getItem("webtoon-theme")==="light"){
  document.body.classList.add("light");
}

window.addEventListener("scroll", () => {
  topBtn.classList.toggle("show", window.scrollY > 1200);
});
topBtn.onclick = () => window.scrollTo({top:0, behavior:"smooth"});

renderEpisode(episodes[0]);

if("serviceWorker" in navigator){
  window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js"));
}
