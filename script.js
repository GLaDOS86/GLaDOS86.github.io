//绑定菜单点击事件，菜单侧边显示
var hamburger = document.querySelector(".hamburger");
      if (hamburger) {
      hamburger.addEventListener('click', function(event) {
        const nav = document.querySelector('.nav-links');
      nav.style.right = 
      nav.style.right === '0px' ? '-100%' : '0px';
      console.log(nav.style.right);
     });
      } else {
      console.error('元素 .nav-links 未找到');
    }  

    //事件监听
document.querySelector('#home-link').addEventListener('click', function(event){
  event.preventDefault();
  ChangeIframeUrl('./content/home.html');

})
//事件监听
document.querySelector('#gallery-link').addEventListener('click', function(event){
  event.preventDefault();
  ChangeIframeUrl('./content/gallery.html');

})

//处理iframe的url切换
function ChangeIframeUrl(url){
  var iframe=document.getElementById('content-iframe');
  iframe.src=url;
  concole.log(iframe.src);
}
