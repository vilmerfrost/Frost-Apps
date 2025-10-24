// mobilt nav
const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('#menu');
if (toggle && menu){
  toggle.addEventListener('click', ()=>{
    const open = menu.classList.toggle('show');
    toggle.setAttribute('aria-expanded', String(open));
  });
}

// smooth scroll för interna länkar
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(el){
      e.preventDefault();
      el.scrollIntoView({behavior:'smooth', block:'start'});
      menu?.classList.remove('show');
      toggle?.setAttribute('aria-expanded','false');
    }
  });
});

// årtal i footer
document.getElementById('year').textContent = new Date().getFullYear();

// header shadow vid scroll
const header = document.querySelector('.site-header');
const onScroll = () => header?.setAttribute('data-scrolled', window.scrollY > 4);
onScroll();
window.addEventListener('scroll', onScroll, {passive:true});
