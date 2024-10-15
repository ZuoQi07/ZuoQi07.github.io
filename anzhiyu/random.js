var posts=["2024/10/15/对安知鱼主题颜色设置的补充/","2024/02/03/STM-DIY项目宣传文稿/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };