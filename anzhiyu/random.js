var posts=["2024/10/17/Hexo美化日志/","2024/02/03/STM-DIY项目宣传文稿/","2024/10/17/一些关于hexo的快速指令/","2024/10/15/关于”PL2303HXA自2012已停产-请联系供货商”/","2024/10/17/关于部署hexo至热铁盒网页托管/","2024/10/15/对安知鱼主题颜色设置的补充/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };