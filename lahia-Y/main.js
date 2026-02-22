// Translations
const translations = {
  ar: {
    nav_about: "من نحن", nav_courses: "الدروس", nav_mission: "رسالتنا", nav_journey: "رحلتك",
    badge: "ابدأ رحلتك نحو التفوق",
    hero_title1: "LAHIA",
    hero_sub: "منصة تعليمية لتطوير مهاراتك في اللغات والبرمجة خطوة بخطوة. هنا تبدأ رحلتك نحو نسخة أفضل منك.",
    cta1: "اكتشف الدروس", cta2: "تعرف علينا", scroll: "للأسفل",
    stat1: "تخصصات", stat2: "دروس مجانية", stat3: "جميع الأعمار", stat4: "رحلة تبدأ الآن",
    about_tag: "من نحن", about_title: "منصة تعلّم،<br>يوميات نمو",
    about_p1: "هذه المنصة صُممت لمساعدتك على تطوير مهاراتك في الإنجليزية والفرنسية والبرمجة بطريقة منظمة وبسيطة. هدفنا أن نجعل التعلم عادة يومية تقودك نحو التفوق.",
    about_p2: "في عالم سريع التغير، التعلم الذاتي هو أقوى سلاح. هنا ستجد دروسًا، تمارين، وأهدافًا تساعدك على التقدم خطوة بخطوة.",
    about_p3: "أنشأت هذا الموقع لأطور نفسي وأوثق رحلتي في التعلم. كل درس هنا هو خطوة نحو نسخة أفضل مني... ويمكنك أن تبدأ رحلتك أيضًا.",
    about_quote: "التعلم ليس وجهة، بل رحلة لا تنتهي. كل يوم تتعلم فيه شيئًا جديدًا هو انتصار.",
    courses_tag: "ما نقدمه", courses_title: "تخصصاتنا التعليمية",
    c1_title: "اللغة الإنجليزية", c1_desc: "من الأساسيات حتى الإتقان. دروس في القواعد، المفردات، المحادثة، والكتابة لجميع المستويات والأعمار.",
    c2_title: "اللغة الفرنسية", c2_desc: "تعلم الفرنسية بأسلوب عصري وممتع. محادثات يومية، ثقافة، وقواعد لغوية مبسّطة لكل مرحلة.",
    c3_title: "البرمجة", c3_desc: "ادخل عالم البرمجة من الصفر. HTML, CSS, JavaScript, Python وأكثر — مع مشاريع تطبيقية حقيقية.",
    c4_title: "الرياضيات", c4_desc: "من الأعداد إلى التكامل والمشتقات. دروس منظمة لجميع المستويات من الابتدائي إلى الجامعي.",
    c5_title: "الفيزياء", c5_desc: "استكشف قوانين الكون من الميكانيك إلى الكهرباء والضوء. دروس نظرية وتطبيقية.",
    c6_title: "العلوم الطبيعية", c6_desc: "علم الأحياء، الكيمياء، وعلوم الأرض. فهم الطبيعة وتفسير الظواهر الحية والكيميائية.",
    c7_title: "الفلسفة", c7_desc: "تعلم التفكير النقدي والمنطق الفلسفي. الفلسفة الغربية والعربية، تحليل النصوص، والمنهجية في الإجابة على الإشكاليات.",
    c8_title: "تعلّم التداول", c8_desc: "ادخل عالم الأسواق المالية من الصفر. تحليل تقني، إدارة رأس المال، استراتيجيات التداول في الفوركس والأسهم والعملات الرقمية.",
    trading_live: "مادة جديدة",
    mission_tag: "رسالتنا", mission_title: "لماذا LAHIA؟",
    m1_title: "منصة تعليم + يوميات تطوير ذاتي + Portfolio",
    m1_text: "LAHIA ليست مجرد موقع دروس. هي رحلة موثّقة، بورتفوليو حي، ويوميات تطوير ذاتي. كل محتوى هنا هو دليل على أن التعلم ممكن ومستمر.",
    m2_title: "محتوى منظّم", m2_text: "دروس مرتّبة من الأسهل للأصعب، تناسب جميع الأعمار والمستويات، بلغة واضحة وأمثلة تطبيقية.",
    m3_title: "مجتمع متعلمين", m3_text: "رحلتك لا تكون وحدك. هذا الموقع يساعد طلابًا آخرين يسيرون نفس الطريق ويحتاجون نفس الدعم.",
    journey_tag: "كيف تبدأ", journey_title: "رحلتك في أربع خطوات",
    s1_title: "اختر تخصصك", s1_desc: "ابدأ بما يشعل شغفك: الإنجليزية، الفرنسية، أو البرمجة. لا توجد بداية خاطئة.",
    s2_title: "اتبع المنهج خطوة بخطوة", s2_desc: "كل درس بُني بعناية ليُكمّل ما قبله. اتبع الترتيب ولا تقفز.",
    s3_title: "طبّق وتمرّن يوميًا", s3_desc: "التعلم الحقيقي في التطبيق. استخدم التمارين والمشاريع الصغيرة لترسيخ المعلومة.",
    s4_title: "وثّق تقدمك وشاركه", s4_desc: "أنت لست متعلمًا فقط، أنت تبني سجلًا يُثبت مهاراتك للعالم.",
    cta_title: "ابدأ اليوم.<br>ليس غدًا.", cta_sub: "كل إمبراطورية بدأت بخطوة واحدة. هذه الصفحة هي خطوتك الأولى نحو التفوق.",
    cta_btn: "🚀 ابدأ رحلتك الآن",
    footer: "© 2024 Lahia Platform — رحلة التعلم لا تنتهي"
  },
  en: {
    nav_about: "About", nav_courses: "Courses", nav_mission: "Mission", nav_journey: "Journey",
    badge: "Start your journey to excellence",
    hero_title1: "LAHIA",
    hero_sub: "An educational platform to develop your skills in languages and programming — step by step. Your journey to a better you starts here.",
    cta1: "Explore Courses", cta2: "About Us", scroll: "Scroll",
    stat1: "Specialties", stat2: "Free Lessons", stat3: "All Ages", stat4: "Journey Starts Now",
    about_tag: "About Us", about_title: "Learning Platform,<br>Self-Growth Journal",
    about_p1: "This platform is designed to help you develop your skills in English, French, and programming in an organized and simple way. Our goal is to make learning a daily habit that leads you to excellence.",
    about_p2: "In a rapidly changing world, self-learning is the most powerful weapon. Here you'll find lessons, exercises, and goals to help you progress step by step.",
    about_p3: "I created this site to develop myself and document my learning journey. Every lesson here is a step toward a better version of me... and you can start your journey too.",
    about_quote: "Learning is not a destination, but an endless journey. Every day you learn something new is a victory.",
    courses_tag: "What We Offer", courses_title: "Our Educational Tracks",
    c1_title: "English Language", c1_desc: "From basics to mastery. Grammar, vocabulary, conversation, and writing lessons for all levels and ages.",
    c2_title: "French Language", c2_desc: "Learn French in a modern and engaging way. Daily conversations, culture, and simplified grammar for every level.",
    c3_title: "Programming", c3_desc: "Enter the world of coding from scratch. HTML, CSS, JavaScript, Python and more — with real applied projects.",
    c4_title: "Mathematics", c4_desc: "From numbers to integrals and derivatives. Structured lessons for all levels from primary to university.",
    c5_title: "Physics", c5_desc: "Explore the laws of the universe from mechanics to electricity and light. Theoretical and applied lessons.",
    c6_title: "Natural Sciences", c6_desc: "Biology, chemistry, and earth sciences. Understanding nature and explaining living and chemical phenomena.",
    c7_title: "Philosophy", c7_desc: "Learn critical thinking and philosophical logic. Western and Arabic philosophy, text analysis, and methodology for answering philosophical problems.",
    c8_title: "Learn Trading", c8_desc: "Enter the world of financial markets from scratch. Technical analysis, capital management, and trading strategies in Forex, stocks, and crypto.",
    trading_live: "New Subject",
    mission_tag: "Our Mission", mission_title: "Why LAHIA?",
    m1_title: "Learning Platform + Self-Growth Journal + Portfolio",
    m1_text: "LAHIA is not just a lesson website. It's a documented journey, a living portfolio, and a self-development diary. Every piece of content here proves that learning is possible and continuous.",
    m2_title: "Structured Content", m2_text: "Lessons organized from easiest to hardest, suitable for all ages and levels, with clear language and practical examples.",
    m3_title: "Learning Community", m3_text: "Your journey doesn't have to be alone. This site helps other students walking the same path who need the same support.",
    journey_tag: "How to Start", journey_title: "Your Journey in Four Steps",
    s1_title: "Choose Your Track", s1_desc: "Start with what ignites your passion: English, French, or Programming. There's no wrong starting point.",
    s2_title: "Follow the Curriculum Step by Step", s2_desc: "Each lesson was carefully built to complement the previous one. Follow the order, don't skip.",
    s3_title: "Practice Daily", s3_desc: "Real learning happens through application. Use exercises and small projects to reinforce knowledge.",
    s4_title: "Document & Share Your Progress", s4_desc: "You're not just a learner, you're building a record that proves your skills to the world.",
    cta_title: "Start Today.<br>Not Tomorrow.", cta_sub: "Every empire began with a single step. This page is your first step toward excellence.",
    cta_btn: "🚀 Start Your Journey Now",
    footer: "© 2024 Lahia Platform — The learning journey never ends"
  },
  fr: {
    nav_about: "À propos", nav_courses: "Cours", nav_mission: "Mission", nav_journey: "Parcours",
    badge: "Commencez votre voyage vers l'excellence",
    hero_title1: "LAHIA",
    hero_sub: "Une plateforme éducative pour développer vos compétences en langues et en programmation — étape par étape. Votre voyage vers une meilleure version de vous commence ici.",
    cta1: "Découvrir les cours", cta2: "À propos", scroll: "Défiler",
    stat1: "Spécialités", stat2: "Cours gratuits", stat3: "Tous les âges", stat4: "Le voyage commence",
    about_tag: "À propos", about_title: "Plateforme d'apprentissage,<br>Journal de croissance",
    about_p1: "Cette plateforme est conçue pour vous aider à développer vos compétences en anglais, en français et en programmation de manière organisée et simple. Notre objectif est de faire de l'apprentissage une habitude quotidienne.",
    about_p2: "Dans un monde en rapide évolution, l'auto-apprentissage est l'arme la plus puissante. Ici vous trouverez des leçons, des exercices et des objectifs pour progresser pas à pas.",
    about_p3: "J'ai créé ce site pour me développer et documenter mon parcours d'apprentissage. Chaque leçon ici est un pas vers une meilleure version de moi... et vous pouvez commencer votre voyage aussi.",
    about_quote: "L'apprentissage n'est pas une destination, mais un voyage sans fin. Chaque jour où vous apprenez quelque chose de nouveau est une victoire.",
    courses_tag: "Ce que nous offrons", courses_title: "Nos parcours éducatifs",
    c1_title: "Langue anglaise", c1_desc: "Des bases à la maîtrise. Cours de grammaire, vocabulaire, conversation et écriture pour tous les niveaux et âges.",
    c2_title: "Langue française", c2_desc: "Apprenez le français de manière moderne et engageante. Conversations quotidiennes, culture et grammaire simplifiée.",
    c3_title: "Programmation", c3_desc: "Entrez dans le monde du code depuis zéro. HTML, CSS, JavaScript, Python et plus — avec des projets appliqués réels.",
    c4_title: "Mathématiques", c4_desc: "Des nombres aux intégrales et dérivées. Leçons structurées pour tous les niveaux du primaire à l'université.",
    c5_title: "Physique", c5_desc: "Explorez les lois de l'univers de la mécanique à l'électricité et la lumière. Cours théoriques et appliqués.",
    c6_title: "Sciences Naturelles", c6_desc: "Biologie, chimie et sciences de la Terre. Comprendre la nature et expliquer les phénomènes vivants et chimiques.",
    c7_title: "Philosophie", c7_desc: "Apprenez la pensée critique et la logique philosophique. Philosophie occidentale et arabe, analyse de textes et méthodologie.",
    c8_title: "Apprendre le Trading", c8_desc: "Entrez dans le monde des marchés financiers depuis zéro. Analyse technique, gestion du capital, stratégies de trading Forex, actions et crypto.",
    trading_live: "Nouvelle Matière",
    mission_tag: "Notre mission", mission_title: "Pourquoi LAHIA?",
    m1_title: "Plateforme d'apprentissage + Journal de développement + Portfolio",
    m1_text: "LAHIA n'est pas juste un site de cours. C'est un voyage documenté, un portfolio vivant et un journal de développement personnel. Chaque contenu ici prouve que l'apprentissage est possible et continu.",
    m2_title: "Contenu structuré", m2_text: "Leçons organisées du plus facile au plus difficile, adaptées à tous les âges et niveaux, avec un langage clair et des exemples pratiques.",
    m3_title: "Communauté d'apprenants", m3_text: "Votre voyage ne doit pas être solitaire. Ce site aide d'autres étudiants qui marchent sur le même chemin.",
    journey_tag: "Comment commencer", journey_title: "Votre parcours en quatre étapes",
    s1_title: "Choisissez votre spécialité", s1_desc: "Commencez par ce qui passionne: anglais, français ou programmation. Il n'y a pas de mauvais point de départ.",
    s2_title: "Suivez le programme étape par étape", s2_desc: "Chaque leçon a été soigneusement construite pour compléter la précédente. Suivez l'ordre, ne sautez pas.",
    s3_title: "Pratiquez quotidiennement", s3_desc: "L'apprentissage réel se fait par la pratique. Utilisez des exercices et petits projets pour consolider les connaissances.",
    s4_title: "Documentez et partagez vos progrès", s4_desc: "Vous n'êtes pas seulement un apprenant, vous construisez un dossier qui prouve vos compétences au monde.",
    cta_title: "Commencez aujourd'hui.<br>Pas demain.", cta_sub: "Chaque empire a commencé par un seul pas. Cette page est votre premier pas vers l'excellence.",
    cta_btn: "🚀 Commencez votre voyage",
    footer: "© 2024 Lahia Platform — Le voyage d'apprentissage ne finit jamais"
  }
};

let currentLang = 'ar';

function setLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  document.querySelector(`.lang-btn[onclick="setLang('${lang}')"]`).classList.add('active');
  
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) el.innerHTML = t[key];
  });
}

// Animated Canvas Background
const canvas = document.getElementById('canvas-bg');
const ctx = canvas.getContext('2d');

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

const nodes = [];
const NUM_NODES = 60;

for (let i = 0; i < NUM_NODES; i++) {
  nodes.push({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4,
    r: Math.random() * 2 + 1
  });
}

function drawCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Draw connections
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i].x - nodes[j].x;
      const dy = nodes[i].y - nodes[j].y;
      const dist = Math.sqrt(dx*dx + dy*dy);
      if (dist < 140) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(201,168,76,${(1 - dist/140) * 0.25})`;
        ctx.lineWidth = 0.5;
        ctx.moveTo(nodes[i].x, nodes[i].y);
        ctx.lineTo(nodes[j].x, nodes[j].y);
        ctx.stroke();
      }
    }
  }
  
  // Draw nodes
  nodes.forEach(n => {
    ctx.beginPath();
    ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(201,168,76,0.6)';
    ctx.fill();
    
    n.x += n.vx;
    n.y += n.vy;
    if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
    if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
  });
  
  requestAnimationFrame(drawCanvas);
}
drawCanvas();

// Custom Cursor
const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursor-follower');
let mx = 0, my = 0, fx = 0, fy = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
  cursor.style.left = mx - 6 + 'px';
  cursor.style.top = my - 6 + 'px';
});

function animateFollower() {
  fx += (mx - fx) * 0.28;
  fy += (my - fy) * 0.28;
  follower.style.left = fx - 18 + 'px';
  follower.style.top = fy - 18 + 'px';
  requestAnimationFrame(animateFollower);
}
animateFollower();

document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform = 'scale(2.5)';
    follower.style.transform = 'scale(1.5)';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.transform = 'scale(1)';
    follower.style.transform = 'scale(1)';
  });
});

// Scroll reveal for timeline
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.2 });

document.querySelectorAll('.timeline-item').forEach(el => observer.observe(el));

// Counter animation
function animateCounter(el, target, isSymbol = false) {
  if (isSymbol) return;
  let current = 0;
  const inc = target / 50;
  const timer = setInterval(() => {
    current += inc;
    if (current >= target) { current = target; clearInterval(timer); }
    el.textContent = Math.floor(current) + '+';
  }, 30);
}

const statsObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      statsObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });

// Floating particles
function createParticle() {
  const p = document.createElement('div');
  p.className = 'particle';
  const size = Math.random() * 4 + 2;
  p.style.cssText = `
    width: ${size}px;
    height: ${size}px;
    left: ${Math.random() * 100}%;
    bottom: -10px;
    animation-duration: ${Math.random() * 8 + 6}s;
    animation-delay: ${Math.random() * 4}s;
  `;
  document.body.appendChild(p);
  setTimeout(() => p.remove(), 15000);
}

setInterval(createParticle, 800);

// ——— Courses Carousel ———
(function() {
  const track = document.getElementById('coursesTrack');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const dotsWrap = document.getElementById('carouselDots');
  if (!track) return;

  let currentIndex = 0;
  let autoTimer = null;
  const GAP = 20;

  function getCards() { return Array.from(track.querySelectorAll('.course-card')); }

  function getVisibleCount() {
    const w = window.innerWidth;
    if (w <= 600) return 1;
    if (w <= 1100) return 2;
    return 3;
  }

  function getStepWidth() {
    // Always use the first normal card's actual rendered width + gap
    const cards = getCards();
    for (let i = 0; i < cards.length; i++) {
      if (!cards[i].classList.contains('wide')) {
        return cards[i].offsetWidth + GAP;
      }
    }
    return (track.parentElement.offsetWidth + GAP) / getVisibleCount();
  }

  function totalSlides() {
    const cards = getCards();
    const vis = getVisibleCount();
    return Math.max(1, cards.length - vis + 1);
  }

  function buildDots() {
    dotsWrap.innerHTML = '';
    const total = totalSlides();
    for (let i = 0; i < total; i++) {
      const d = document.createElement('button');
      d.className = 'carousel-dot' + (i === 0 ? ' active' : '');
      d.setAttribute('aria-label', 'Slide ' + (i+1));
      d.addEventListener('click', () => { stopAuto(); goTo(i); startAuto(); });
      dotsWrap.appendChild(d);
    }
  }

  function updateDots() {
    const dots = dotsWrap.querySelectorAll('.carousel-dot');
    dots.forEach((d, i) => d.classList.toggle('active', i === currentIndex));
  }

  function goTo(idx) {
    const total = totalSlides();
    currentIndex = Math.max(0, Math.min(idx, total - 1));
    const step = getStepWidth();
    const isRTL = document.documentElement.dir === 'rtl';
    const offset = currentIndex * step;
    track.style.transform = 'translateX(' + (isRTL ? offset : -offset) + 'px)';
    updateDots();
  }

  function stopAuto() { clearInterval(autoTimer); }
  function startAuto() {
    autoTimer = setInterval(() => {
      const next = currentIndex + 1 >= totalSlides() ? 0 : currentIndex + 1;
      goTo(next);
    }, 4200);
  }

  prevBtn.addEventListener('click', () => { stopAuto(); goTo(currentIndex - 1); startAuto(); });
  nextBtn.addEventListener('click', () => { stopAuto(); goTo(currentIndex + 1); startAuto(); });

  // Touch & drag
  let startX = 0, startTime = 0, dragging = false;

  function onStart(x) { startX = x; startTime = Date.now(); dragging = true; }
  function onEnd(x) {
    if (!dragging) return; dragging = false;
    const diff = x - startX;
    const elapsed = Date.now() - startTime;
    if (Math.abs(diff) > 40 && elapsed < 400) {
      stopAuto();
      diff < 0 ? goTo(currentIndex + 1) : goTo(currentIndex - 1);
      startAuto();
    }
  }

  track.addEventListener('mousedown', e => onStart(e.clientX));
  track.addEventListener('mouseup', e => onEnd(e.clientX));
  track.addEventListener('mouseleave', e => { if (dragging) onEnd(e.clientX); });
  track.addEventListener('touchstart', e => onStart(e.touches[0].clientX), {passive:true});
  track.addEventListener('touchend', e => onEnd(e.changedTouches[0].clientX), {passive:true});

  // Resize — rebuild dots and reposition
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      buildDots();
      goTo(Math.min(currentIndex, totalSlides() - 1));
    }, 150);
  });

  // Init
  buildDots();
  goTo(0);
  startAuto();

  // Draw mini trading chart
  const chartEl = document.getElementById('miniChart');
  if (chartEl) {
    const cv = document.createElement('canvas');
    chartEl.appendChild(cv);
    const w = chartEl.offsetWidth || 260, h = 50;
    cv.width = w; cv.height = h;
    const ctx2 = cv.getContext('2d');
    const pts = [22,35,28,40,30,20,38,25,42,18,45,30,50,22,55,38,48,42,52,36,60,28,65,34,70,22];
    const grad = ctx2.createLinearGradient(0, 0, 0, h);
    grad.addColorStop(0, 'rgba(16,185,129,0.4)');
    grad.addColorStop(1, 'rgba(16,185,129,0)');
    ctx2.beginPath();
    for (let i = 0; i < pts.length; i += 2) {
      const x = (pts[i] / 75) * w;
      const y = h - (pts[i+1] / 70) * h;
      i === 0 ? ctx2.moveTo(x, y) : ctx2.lineTo(x, y);
    }
    ctx2.strokeStyle = '#10b981';
    ctx2.lineWidth = 2;
    ctx2.stroke();
    ctx2.lineTo(w, h); ctx2.lineTo(0, h);
    ctx2.fillStyle = grad;
    ctx2.fill();
  }
})();