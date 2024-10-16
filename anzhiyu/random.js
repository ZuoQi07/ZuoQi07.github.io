var posts=["2024/02/03/STM-DIY项目宣传文稿/","2024/10/15/关于”PL2303HXA自2012已停产-请联系供货商”/","2024/10/15/对安知鱼主题颜色设置的补充/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };