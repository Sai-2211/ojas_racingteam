const cur=document.getElementById('cur'),cur2=document.getElementById('cur2');
document.addEventListener('mousemove',e=>{cur.style.left=e.clientX+'px';cur.style.top=e.clientY+'px';cur2.style.left=e.clientX+'px';cur2.style.top=e.clientY+'px';});
document.addEventListener('mousedown',()=>{cur.style.transform='translate(-50%,-50%) scale(1.8)';cur2.style.transform='translate(-50%,-50%) scale(.7)';});
document.addEventListener('mouseup',()=>{cur.style.transform='translate(-50%,-50%) scale(1)';cur2.style.transform='translate(-50%,-50%) scale(1)';});

function showPage(n){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById('page-'+n).classList.add('active');
  document.querySelectorAll('.nlink').forEach(l=>l.classList.remove('active'));
  const el=document.getElementById('nav-'+n);if(el)el.classList.add('active');
  window.scrollTo(0,0);
  if(n==='team')renderTeam('2026');
  if(n==='achievements')renderAch('2025');
}

const teamData = {
  '2026': {
    leadership: [
      {name:'Abhay Anand',role:'Chief Executive Officer',init:'AA'},
      {name:'Yash Mangatt',role:'Chief Technical Officer',init:'YM'},
      {name:'Rohit Gandham',role:'Chief Operations Officer',init:'RG'},
      {name:'Vishrudh GK',role:'Electrical Systems Officer',init:'VG'},
      {name:'Suren Elango',role:'Autonomous Systems Officer',init:'SE'},
    ],
    pe: [
      {name:'Varun S',role:'Structures',init:'VS'},
      {name:'CS Sathvin',role:'Electrical & Powertrain',init:'CS'},
      {name:'Advaith Krishna',role:'Vehicle Dynamics & Brakes',init:'AK'},

    ],
    powertrain: [
      {name:'Rohit Gandham',role:'Battery Pack Lead',init:'RG'},
      {name:'RB Kamalesh',role:'Drivetrain Lead',init:'KR'},
      {name:'Arthur Leslie',role:'Battery Pack Engineer',init:'AL'},
      {name:'Sushanth Bibi',role:'Drivetrain Engineer',init:'SB'},
    ],
    aero: [
      {name:'Yash Mangatt',role:'Aero & Composites Lead',init:'YM'},
      {name:'Siddhartha Verma',role:'Aero & Composites Engineer',init:'SV'},
      {name:'Arjun Srikanth',role:'Aero & Composites Engineer',init:'AS'},
    ],
    chassis: [
      {name:'Varun S',role:'Design Lead',init:'VS'},
      {name:'Adhish Maheshbabu',role:'Chassis Engineer',init:'AM'},
      {name:'Ananthya S',role:'Chassis Engineer',init:'AS'},
    ],
    vd: [
      {name:'Advaith Krishna',role:'Vehicle Dynamics &',init:'AK'},
      {name:'Navaneeth Baiju',role:'Kinematics & Steering Lead',init:'NB'},
      {name:'Jacob Jiby',role:'Vehicle Dynamics Engineer',init:'JJ'},
      {name:'Aryan Kokate',role:'Vehicle Dynamics Engineer',init:'AK'},
      {name:'Yusuf Ameer',role:'Vehicle Dynamics Engineer',init:'YA'},
    ],
    electronics: [
      {name:'Vishrudh GK',role:'Software Lead',init:'VG'},
      {name:'CS Sathvin',role:'Electrical Lead',init:'CS'},
      {name:'Abhay Anand',role:'BPP Lead',init:'AA'},
      {name:'Krish Gupta',role:'Electrical Engineer',init:'KG'},
      {name:'Krishna Kotikalapudi',role:'Electrical Engineer',init:'KK'},
      {name:'Idhika Sharma',role:'Electrical Engineer',init:'IS'},
      {name:'Sabharish Balaji',role:'Electrical Engineer',init:'SB'},
      {name:'Raajvardhan Singh',role:'Electrical Engineer',init:'RS'},
    ],
    ops: [
      {name:'Subham Saha',role:'Operations Lead',init:'SS'},
      {name:'Anirudh Ponraj',role:'Operations Member',init:'AP'},
      {name:'Arthur Leslie',role:'Operations Member',init:'AL'},
      {name:'Prabhav Sharma',role:'Operations Member',init:'PS'},
      {name:'Sushanth Bibi',role:'Operations Member',init:'SB'},
      {name:'Tejashri Krishnakumar',role:'Operations Member',init:'TK'},
      {name:'Tanushree Paidi',role:'Operations Member',init:'TP'},
      {name:'Naval Aggarwal',role:'Operations Member',init:'NA'},
    ],
    auto: [
      {name:'Veekshith Gali',role:'Path Planning Lead',init:'VG'},
      {name:'Suren Elango',role:'Perception Lead',init:'SE'},
      {name:'Krish Gupta',role:'Autonomous Engineer',init:'KG'},
      {name:'Naval Aggarwal',role:'Autonomous Engineer',init:'NA'},
      {name:'Krishna Kotikalapudi',role:'Autonomous Engineer',init:'KK'},
      {name:'Sabharish Balaji',role:'Autonomous Engineer',init:'SB'},
      {name:'Raajvardhan Singh',role:'Autonomous Engineer',init:'RS'},
    ]
  },
  '2025': {
    leadership: [
      {name:'Ayush Shahapurkar',role:'Chief Executive Officer',init:'AS'},
      {name:'Shubhang Sai',role:'Chief Technical Officer',init:'SS'},
      {name:'Juzer Morudwala',role:'Electrical Systems Officer',init:'JM'},
      {name:'Nitin S',role:'Autonomous Systems Officer',init:'NS'},
      {name:'T Donald Noel',role:'Chief Operating Officer',init:'DN'},
      {name:'Pranav S',role:'Chief Management Officer',init:'PS'},
    ],
    pe: [
      {name:'Chetan Verma',role:'Software',init:'CV'},
      {name:'Siddharth Das',role:'Electrical',init:'SD'},
      {name:'Rishabh Ramakrishna',role:'Battery Pack',init:'RR'},
      {name:'Aditya Santhosh',role:'Drivetrain',init:'AS'},
      {name:'Abhaygopal Nistala',role:'Powertrain',init:'AN'},
      {name:'Marc Stephen',role:'Vehicle Performance Lead',init:'MS'},
      {name:'Padhma Kamalesh',role:'Structures & Design',init:'PK'},
      {name:'Yajur Shah',role:'Engineering Design Presentation Lead',init:'YS'},

    ]
  },
  '2024': {
    leadership: [
      {name:'Vijay Menon',role:'Team Principal',init:'VM'},
      {name:'Preethi Rao',role:'Deputy Principal',init:'PR'},
    ],
    powertrain: [
      {name:'Kabir Anand',role:'Powertrain Lead',init:'KA'},
      {name:'Deepa Nath',role:'HV Systems',init:'DN'},
      {name:'Suraj Patil',role:'Motor Design',init:'SP'},
    ],
    aero: [
      {name:'Lavanya Singh',role:'Aero Lead',init:'LS'},
      {name:'Rahul Das',role:'CFD Analyst',init:'RD'},
    ],
    chassis: [
      {name:'Kiara Mehta',role:'Chassis Lead',init:'KM'},
      {name:'Aryan Roy',role:'Suspension',init:'AR'},
    ],
    electronics: [
      {name:'Rohit Verma',role:'Electronics Lead',init:'RV'},
      {name:'Pooja Iyer',role:'Embedded Systems',init:'PI'},
    ]
  },
  '2023': {
    leadership: [
      {name:'Aarav Shah',role:'Team Principal',init:'AS'},
      {name:'Divya Krishnan',role:'Chief Engineer',init:'DK'},
    ],
    powertrain: [
      {name:'Nikhil Babu',role:'Powertrain Lead',init:'NB'},
      {name:'Sneha Thomas',role:'Battery Systems',init:'ST'},
    ],
    aero: [
      {name:'Raj Sharma',role:'Aero Lead',init:'RS'},
    ],
    chassis: [
      {name:'Ishaan Gupta',role:'Chassis Lead',init:'IG'},
      {name:'Mira Pillai',role:'Suspension Eng.',init:'MP'},
    ],
    electronics: [
      {name:'Chetan Joshi',role:'Electronics Lead',init:'CJ'},
    ]
  },
  '2022': {
    leadership: [
      {name:'Sanjay Kumar',role:'Team Principal',init:'SK'},
    ],
    powertrain: [
      {name:'Pooja Singh',role:'Powertrain Lead',init:'PS'},
      {name:'Aman Verma',role:'Drivetrain',init:'AV'},
    ],
    chassis: [
      {name:'Riya Nair',role:'Chassis Lead',init:'RN'},
    ],
    electronics: [
      {name:'Tarun Bhat',role:'Electronics Lead',init:'TB'},
    ]
  }
};

const deptNames = {leadership:'Team Leadership',powertrain:'Powertrain',aero:'Aerodynamics, Composites & Cooling',chassis:'Chassis & Design',vd:'Vehicle Dynamics & Brakes',electronics:'Electrical',ops:'Operations', pe:'Principal Engineers', auto:'Autonomous'};
function renderTeam(yr){
  const d=teamData[yr];if(!d)return;let h='';
  for(const[k,ms]of Object.entries(d)){h+=`<div class="ds"><div class="dlbl">${deptNames[k]||k}</div><div class="mg">`;for(const m of ms)h+=`<div class="mc"><div class="mav">${m.init}</div><div class="mn">${m.name}</div><div class="mr2">${m.role}</div></div>`;h+='</div></div>';}
  document.getElementById('team-display').innerHTML=h;
}
function switchTeam(el,yr){document.querySelectorAll('.ytabs .ytab').forEach(t=>t.classList.remove('active'));el.classList.add('active');renderTeam(yr);}

const achData={
  '2025':{results:[{event:'Formula Student Concept Class',location:'Virtual Event · IN',rank:'1',desc:'Overall winners and a clean sweep in all events, cementing us as the best in India.',tags:['1st Overall']},{event:'Business Plan Presentation',location:'FSCC 2025',rank:'1',desc:'1st in Business Plan Presentation - this is not just a project, this is a business',tags:['Winners']},{event:'Cost & Manufacturing',location:'FSCC 2025',rank:'1',desc:'1st in Cost Event — testament to lean, student-built manufacturing.',tags:['Winners']},{event:'Engineering Design Presentation',location:'FSCC 2025',rank:'1',desc:'1st in Engineering Design Presentation - the ultimate proof of the best India can produce.',tags:['Winners']}],awards:[]},
  '2024':{results:[{event:'Formula Student Germany',location:'Hockenheimring · DE',rank:'26',desc:'A return to the foremost stage. Among just two teams representing India',tags:['Return to the top stage']},{event:'Business Plan Presentation',location:'FSG 2024',rank:'26',desc:'The best from India',tags:['Statics Event']}],awards:[{icon:'🏁',title:'Rookie Best Completion',body:'Recognised for completing all events as a young international team.'},{icon:'📐',title:'Business Plan — Top 15',body:'Strong business plan with compelling commercial viability.'}]},
  '2022':{results:[{event:'Formula SAE Italy',location:'Riccardo Paletti Circuit · IT',rank:'4',desc:'A close call away from podium, and the best from India',tags:['International Return']},{event:'Cost & Manufacturing',location:'Formula SAE Italy',rank:'4',desc:'4th in Cost Event — testament to our international standard of manufacturing at a fraction of the cost.',tags:['Best from Asia']}, {event:'Business Plan Presentation',location:'Formula SAE Italy',rank:'5',desc:'5th in Business Presentation',tags:['Top 5']}],awards:[{icon:'🔩',title:'First International TI',body:'Historic first technical inspection clearance at an international event.'}]},
  '2021':{results:[{event:'Formula Bharat (Online)',location:'Virtual Event · IN',rank:'8',desc:'8th overall in virtual event. Strong static event performance.',tags:['Top 10 National']},{event:'Engineering Design Presentation',location:'Formula Bharat',rank:'7',desc:'Keeping our momentum alive during the Pandemic',tags:['Top 10 National']}],awards:[{icon:'💡',title:'Best Concept Design',body:'Top award in concept design at Formula Bharat 2021.'}]},
  '2020':{results:[{event:'Formula SAE Italy',location:'Riccardo Paletti Circuit · IT',rank:'19',desc:'19th overall in an event hit by the Pandemic. Strong static event performance.',tags:['Top 10 National']}],awards:[{icon:'💡',title:'Best Concept Design',body:'Top award in concept design at Formula Bharat 2021.'}]},
  '2019':{results:[{event:'Formula Student EV UK',location:'Silverstone Circuit · GB',rank:'7',desc:'7th Overall in our last event before the Pandemic.',tags:['Top 10']}],awards:[{icon:'💡',title:'Best Battery Design',body:'Top award in battery design.'},{icon:'💡',title:'Best Powertrain Design',body:'Top award in powertrain design.'}]},
  '2018':{results:[{event:'Formula Bharat',location:'Kari Motor Speedway · IN',rank:'3',desc:'3rd Overall in our most successful season',tags:['National Podium']},{event:'FSEV Design Event',location:'Formula Bharat 2018',rank:'5',desc:'A strong showing at the Design Event',tags:['Top 5']},{event:'FSEV Cost Report',location:'Formula Bharat 2018',rank:'1',desc:'The best cost to performance showing ever seen at FB',tags:['Winners']},{event:'FSEV Business Plan Presentation',location:'Formula Bharat 2018',rank:'3',desc:'3rd Overall, continuing our streak at one of the best business plans',tags:['National Podium']}],awards:[]}

};

 function renderAch(yr){
  const d = achData[yr];
  if(!d) return;

  const eventHeader = d.results[0];

  let h = `
    <div class="ach-year-head">
      ${yr} Season Results
    </div>

    <div class="ach-event-head">
      <div class="ach-event-title">${eventHeader.event}</div>
      <div class="ach-event-loc">${eventHeader.location}</div>
    </div>

    <div class="ach-cards">
  `;

  d.results.forEach((r,i)=>{

    let accent = 'blue';

    if(r.rank === '1') accent = 'gold';
    else if(r.rank === '2') accent = 'silver';
    else if(r.rank === '3') accent = 'bronze';

    h += `
      <div class="ach-card ${accent}" onclick="toggleAchCard(this)">
        
        <div class="ach-card-inner">

          <div class="ach-front">

            <div class="ach-watermark">
              ${r.rank}
            </div>

            <div class="ach-title">
              ${r.event}
            </div>

            <div class="ach-rank">
              ${r.rank}
            </div>

            <div class="ach-rank-text">
              POSITION
            </div>

            <div class="ach-hint">
              Click for details →
            </div>

          </div>

          <div class="ach-back">

            <div class="ach-back-title">
              ${r.event}
            </div>

            <div class="ach-back-desc">
              ${r.desc}
            </div>

          </div>

        </div>

      </div>
    `;
  });

  h += `
    </div>
  `;

  if(d.awards.length){

    h += `
      <div class="ach-awards-sec">

        <div class="sec-lbl">
          Awards & Recognition
        </div>

        <div class="aw-grid">
    `;

    d.awards.forEach(a=>{
      h += `
        <div class="awc">
          <div class="awi">${a.icon}</div>
          <div class="awt">${a.title}</div>
          <div class="awb">${a.body}</div>
        </div>
      `;
    });

    h += `
        </div>
      </div>
    `;
  }

  document.getElementById('ach-display').innerHTML = h;
}
function toggleAchCard(card){

  const open = document.querySelector('.ach-card.flipped');

  if(open && open !== card){
    open.classList.remove('flipped');
  }

  card.classList.toggle('flipped');
}
function switchAch(el,yr){document.querySelectorAll('#ach-tabs .ytab').forEach(t=>t.classList.remove('active'));el.classList.add('active');renderAch(yr);}

const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible');}),{threshold:.1});
document.querySelectorAll('.fade-up').forEach(el=>obs.observe(el));
renderTeam('2026');renderAch('2025');
function toggleSponsor(card){

  const open = document.querySelector('.scard.flipped');

  if(open && open !== card){
    open.classList.remove('flipped');
  }

  card.classList.toggle('flipped');
}
const sponsorObserver = new IntersectionObserver(entries=>{

  entries.forEach(entry=>{

    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }

  });

},{threshold:.35});

function initSponsors(){

  document.querySelectorAll('.sponsor-card').forEach(card=>{

    sponsorObserver.observe(card);

  });

}
initSponsors();

/* ============================================================
   PIT LANE SCROLL - SPONSORS SECTION
   ============================================================ */

(function () {

  const pitContainer = document.getElementById('pit-scroll-container');
  if (!pitContainer) return;

  const pitLeftStrip = document.getElementById('pit-strip-left');
  const pitRightStrip = document.getElementById('pit-strip-right');
  const pitRoadSurf = document.getElementById('pit-road-surface');
  const pitCenterDash = document.getElementById('pit-road-center-dash');
  const pitScrollHint = document.getElementById('pit-scroll-hint');
  const pitCurrentPair = document.getElementById('pit-current-pair');
  const pitNameLeft = document.getElementById('pit-name-left');
  const pitNameRight = document.getElementById('pit-name-right');
  const pitLeftBanners = pitLeftStrip ? Array.from(pitLeftStrip.querySelectorAll('.pit-banner')) : [];
  const pitRightBanners = pitRightStrip ? Array.from(pitRightStrip.querySelectorAll('.pit-banner')) : [];

  if (
    !pitLeftStrip ||
    !pitRightStrip ||
    !pitRoadSurf ||
    !pitCenterDash ||
    !pitScrollHint ||
    !pitCurrentPair ||
    !pitNameLeft ||
    !pitNameRight ||
    !pitLeftBanners.length ||
    pitLeftBanners.length !== pitRightBanners.length
  ) return;

  const pitPairNames = pitLeftBanners.map(function (banner, index) {
    return {
      left: banner.dataset.name || '',
      right: pitRightBanners[index].dataset.name || ''
    };
  });

  let pitRAF;
  let pitActive = false;
  let pitViewportHeight = window.innerHeight;
  let pitHorizonY = pitViewportHeight * 0.365;
  let pitNearZoneY = pitViewportHeight * 0.65;
  let pitExitZoneY = pitViewportHeight * 1.08;
  let pitBannerStep = pitViewportHeight * 0.24;
  let pitTravel = 0;
  let pitRoadOffset = 0;
  let pitRoadSpeed = 0;
  let pitLastProgress = 0;
  let pitLastFrameTime = performance.now();

  function pitGetProgress() {
    const rect = pitContainer.getBoundingClientRect();
    const scrolled = -rect.top;
    const total = pitContainer.offsetHeight - window.innerHeight;
    return Math.max(0, Math.min(1, scrolled / total));
  }

  function pitClamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function pitSetBannerRows() {
    const horizonValue = parseFloat(getComputedStyle(pitContainer).getPropertyValue('--pit-horizon')) || 36.5;
    const bannerHeight = pitLeftBanners[0].offsetHeight || 120;

    pitViewportHeight = window.innerHeight;
    pitHorizonY = pitViewportHeight * (horizonValue / 100);
    pitNearZoneY = pitViewportHeight * 0.65;
    pitExitZoneY = pitViewportHeight * 1.08;
    pitBannerStep = pitViewportHeight * (pitViewportHeight <= 720 ? 0.48 : 0.55);
    pitTravel = (pitExitZoneY - pitHorizonY) + (pitBannerStep * (pitLeftBanners.length - 1));

    pitLeftBanners.forEach(function (banner, index) {
      banner.style.top = `${(pitHorizonY - (bannerHeight / 2)) - (index * pitBannerStep)}px`;
    });

    pitRightBanners.forEach(function (banner, index) {
      banner.style.top = `${(pitHorizonY - (bannerHeight / 2)) - (index * pitBannerStep)}px`;
    });
  }

  function pitOpacityForCenter(centerY) {
    const fadeInStart = pitHorizonY - (pitViewportHeight * 0.08);
    const fadeInEnd = pitHorizonY + (pitViewportHeight * 0.16);
    const fadeOutStart = pitViewportHeight * 0.92;

    if (centerY <= fadeInStart || centerY >= pitExitZoneY) return 0;
    if (centerY < fadeInEnd) return pitClamp((centerY - fadeInStart) / (fadeInEnd - fadeInStart), 0, 1);
    if (centerY <= fadeOutStart) return 1;
    return pitClamp(1 - ((centerY - fadeOutStart) / (pitExitZoneY - fadeOutStart)), 0, 1);
  }

  function pitPaint(now) {
    const p = pitGetProgress();
    const dt = Math.max(16, now - pitLastFrameTime);
    const progressDelta = p - pitLastProgress;
    const travelY = p * pitTravel;
    const velocityTarget = Math.min(8, Math.abs(progressDelta) * 600);

    pitLeftStrip.style.transform = `translateY(${travelY}px)`;
    pitRightStrip.style.transform = `translateY(${travelY}px)`;

    if (Math.abs(progressDelta) > 0.00015) {
      pitRoadSpeed += (velocityTarget - pitRoadSpeed) * 0.28;
    } else {
      pitRoadSpeed *= 0.92;
    }

    pitRoadOffset = (pitRoadOffset + (pitRoadSpeed * (dt / 16))) % 360;
    pitRoadSurf.style.backgroundPositionY = `${pitRoadOffset}px`;
    pitCenterDash.style.backgroundPositionY = `${pitRoadOffset * 1.32}px`;
    pitScrollHint.style.opacity = p < 0.045 ? '1' : '0';

    let showingPair = -1;
    let showingStrength = 0;

    pitLeftBanners.forEach(function (leftBanner, index) {
      const rightBanner = pitRightBanners[index];
      const rect = leftBanner.getBoundingClientRect();
      const centerY = rect.top + (rect.height / 2);
      const depth = Math.max(0, (centerY - pitHorizonY) / (pitNearZoneY - pitHorizonY));
      const size = 0.28 + (Math.pow(depth, 0.9) * 0.88);
      const maxShift = window.innerWidth * 0.23;
      const lateralShift = (1 - depth) * maxShift;
      const introFade = pitClamp(p / 0.02, 0, 1);
      const opacity = pitOpacityForCenter(centerY) * introFade;
      const fadeFilter = 1.0 + (depth * 0.45);
      const labelStrength = opacity * (1 - pitClamp(Math.abs(centerY - pitNearZoneY) / (pitViewportHeight * 0.2), 0, 1));

      leftBanner.style.transform = `translateX(${lateralShift}px) scale(${size})`;
      rightBanner.style.transform = `translateX(${-lateralShift}px) scale(${size})`;
      leftBanner.style.opacity = opacity.toFixed(3);
      rightBanner.style.opacity = opacity.toFixed(3);
      leftBanner.style.filter = `brightness(${fadeFilter.toFixed(3)})`;
      rightBanner.style.filter = `brightness(${fadeFilter.toFixed(3)})`;
      leftBanner.style.pointerEvents = opacity > 0.14 ? 'auto' : 'none';
      rightBanner.style.pointerEvents = opacity > 0.14 ? 'auto' : 'none';
      leftBanner.style.zIndex = String(100 + Math.round(centerY));
      rightBanner.style.zIndex = String(100 + Math.round(centerY));

      if (labelStrength > showingStrength) {
        showingStrength = labelStrength;
        showingPair = index;
      }
    });

    if (showingPair >= 0 && showingStrength > 0.28) {
      const names = pitPairNames[showingPair];
      pitNameLeft.textContent = names.left;
      pitNameRight.textContent = names.right;
      pitCurrentPair.style.opacity = showingStrength.toFixed(3);
    } else {
      pitCurrentPair.style.opacity = '0';
    }

    pitLastProgress = p;
    pitLastFrameTime = now;
  }

  function pitFrame(now) {
    if (!pitActive) return;
    pitPaint(now);
    pitRAF = requestAnimationFrame(pitFrame);
  }

  function pitRefresh() {
    pitSetBannerRows();
    pitPaint(performance.now());
  }

  const pitObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      pitActive = entry.isIntersecting;
      if (pitActive) {
        pitLastProgress = pitGetProgress();
        pitLastFrameTime = performance.now();
        pitRAF = requestAnimationFrame(pitFrame);
      } else {
        cancelAnimationFrame(pitRAF);
      }
    });
  }, { threshold: 0 });

  window.addEventListener('resize', pitRefresh);
  pitRefresh();
  pitObserver.observe(pitContainer);

})();

