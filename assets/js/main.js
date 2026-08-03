
(function(){
  function ready(fn){ if(document.readyState!=='loading') fn(); else document.addEventListener('DOMContentLoaded',fn); }
  ready(function(){
    // Cookie consent
    try {
      if (!localStorage.getItem('ke_cookie')) {
        var bar = document.createElement('div');
        bar.id = 'cookie-banner';
        bar.innerHTML = '<div class="cookie-inner"><span>We use cookies for preferences, analytics, and advertising (including Google AdSense). See our <a href="policies/privacy-policy.html">Privacy Policy</a>.</span><span class="cookie-actions"><button type="button" id="ke-cookie-essential">Essential</button><button type="button" id="ke-cookie-accept" class="primary">Accept</button></span></div>';
        // fix relative privacy path
        var depth = (location.pathname.match(/\//g)||[]).length;
        // simpler: detect folder
        var priv = 'policies/privacy-policy.html';
        if (location.pathname.indexOf('/recipes/')>=0 || location.pathname.indexOf('/articles/')>=0 || location.pathname.indexOf('/policies/')>=0) priv = '../policies/privacy-policy.html';
        if (location.pathname.indexOf('/policies/')>=0) priv = 'privacy-policy.html';
        document.body.appendChild(bar);
        bar.querySelector('a').setAttribute('href', priv);
        function save(v){ try{localStorage.setItem('ke_cookie',v);}catch(e){} bar.remove(); }
        document.getElementById('ke-cookie-accept').onclick=function(){save('all');};
        document.getElementById('ke-cookie-essential').onclick=function(){save('essential');};
      }
    } catch(e){}
    // Mobile menu
    var btn = document.getElementById('mobile-menu-btn');
    var menu = document.getElementById('mobile-menu');
    if (btn && menu) {
      btn.addEventListener('click', function(){ menu.classList.toggle('hidden'); });
    }
    // Image fallback
    document.querySelectorAll('img').forEach(function(img){
      img.addEventListener('error', function(){
        img.src = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500"><rect fill="#c2410c" width="800" height="500"/><text x="400" y="250" text-anchor="middle" fill="white" font-size="28" font-family="sans-serif">Kadhai Express</text></svg>');
      });
    });
  });
})();
