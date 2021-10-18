(function(g){var window=this;'use strict';var B6=function(a){g.V.call(this,{G:"div",L:"ytp-miniplayer-ui"});this.re=!1;this.player=a;this.T(a,"minimized",this.yg);this.T(a,"onStateChange",this.sG)},C6=function(a){g.$M.call(this,a);
this.i=new B6(this.player);this.i.hide();g.NM(this.player,this.i.element,4);a.Je()&&(this.load(),g.O(a.getRootNode(),"ytp-player-minimized",!0))};
g.w(B6,g.V);g.k=B6.prototype;
g.k.oE=function(){this.tooltip=new g.yQ(this.player,this);g.J(this,this.tooltip);g.NM(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.xc=new g.TN(this.player);g.J(this,this.xc);this.Dg=new g.V({G:"div",L:"ytp-miniplayer-scrim"});g.J(this,this.Dg);this.Dg.Da(this.element);this.T(this.Dg.element,"click",this.eA);var a=new g.V({G:"button",Ha:["ytp-miniplayer-close-button","ytp-button"],W:{"aria-label":"Close"},U:[g.VK()]});g.J(this,a);a.Da(this.Dg.element);this.T(a.element,"click",this.zi);
a=new g.V1(this.player,this);g.J(this,a);a.Da(this.Dg.element);this.qp=new g.V({G:"div",L:"ytp-miniplayer-controls"});g.J(this,this.qp);this.qp.Da(this.Dg.element);this.T(this.qp.element,"click",this.eA);var b=new g.V({G:"div",L:"ytp-miniplayer-button-container"});g.J(this,b);b.Da(this.qp.element);a=new g.V({G:"div",L:"ytp-miniplayer-play-button-container"});g.J(this,a);a.Da(this.qp.element);var c=new g.V({G:"div",L:"ytp-miniplayer-button-container"});g.J(this,c);c.Da(this.qp.element);this.eN=new g.qP(this.player,
this,!1);g.J(this,this.eN);this.eN.Da(b.element);b=new g.oP(this.player,this);g.J(this,b);b.Da(a.element);this.nextButton=new g.qP(this.player,this,!0);g.J(this,this.nextButton);this.nextButton.Da(c.element);this.Gg=new g.jQ(this.player,this);g.J(this,this.Gg);this.Gg.Da(this.Dg.element);this.Oc=new g.wP(this.player,this);g.J(this,this.Oc);g.NM(this.player,this.Oc.element,4);this.Sz=new g.V({G:"div",L:"ytp-miniplayer-buttons"});g.J(this,this.Sz);g.NM(this.player,this.Sz.element,4);a=new g.V({G:"button",
Ha:["ytp-miniplayer-close-button","ytp-button"],W:{"aria-label":"Close"},U:[g.VK()]});g.J(this,a);a.Da(this.Sz.element);this.T(a.element,"click",this.zi);a=new g.V({G:"button",Ha:["ytp-miniplayer-replay-button","ytp-button"],W:{"aria-label":"Close"},U:[g.$K()]});g.J(this,a);a.Da(this.Sz.element);this.T(a.element,"click",this.pV);this.T(this.player,"presentingplayerstatechange",this.Mc);this.T(this.player,"appresize",this.xb);this.T(this.player,"fullscreentoggled",this.xb);this.xb()};
g.k.show=function(){this.Jd=new g.Fq(this.gq,null,this);this.Jd.start();this.re||(this.oE(),this.re=!0);0!==this.player.getPlayerState()&&g.V.prototype.show.call(this);this.Oc.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.Jd&&(this.Jd.dispose(),this.Jd=void 0);g.V.prototype.hide.call(this);this.player.Je()||(this.re&&this.Oc.hide(),this.player.loadModule("annotations_module"))};
g.k.xa=function(){this.Jd&&(this.Jd.dispose(),this.Jd=void 0);g.V.prototype.xa.call(this)};
g.k.zi=function(){this.player.stopVideo();this.player.Oa("onCloseMiniplayer")};
g.k.pV=function(){this.player.playVideo()};
g.k.eA=function(a){if(a.target===this.Dg.element||a.target===this.qp.element)this.player.V().N("kevlar_miniplayer_play_pause_on_scrim")?g.YJ(this.player.yb())?this.player.pauseVideo():this.player.playVideo():this.player.Oa("onExpandMiniplayer")};
g.k.yg=function(){g.O(this.player.getRootNode(),"ytp-player-minimized",this.player.Je())};
g.k.od=function(){this.Oc.Qb();this.Gg.Qb()};
g.k.gq=function(){this.od();this.Jd&&this.Jd.start()};
g.k.Mc=function(a){g.U(a.state,32)&&this.tooltip.hide()};
g.k.xb=function(){g.JP(this.Oc,0,this.player.bb().getPlayerSize().width,!1);g.xP(this.Oc)};
g.k.sG=function(a){this.player.Je()&&(0===a?this.hide():this.show())};
g.k.fc=function(){return this.tooltip};
g.k.Re=function(){return!1};
g.k.uf=function(){return!1};
g.k.ni=function(){return!1};
g.k.RA=function(){};
g.k.Xm=function(){};
g.k.Mr=function(){};
g.k.zn=function(){return null};
g.k.ij=function(){return new g.Pl(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.nq=function(a,b,c,d,e){var f=0,h=d=0,l=g.gm(a);if(b){c=g.Qq(b,"ytp-prev-button")||g.Qq(b,"ytp-next-button");var m=g.Qq(b,"ytp-play-button"),n=g.Qq(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.em(b,this.element),h=b.x,f=b.y-12):n&&(h=g.Qq(b,"ytp-miniplayer-button-top-left"),f=g.em(b,this.element),b=g.gm(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.bb().getPlayerSize().width;e=f+(e||0);l=g.Xf(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.Wk=function(){};
g.k.vk=function(){return!1};g.w(C6,g.$M);C6.prototype.create=function(){};
C6.prototype.Ii=function(){return!1};
C6.prototype.load=function(){this.player.hideControls();this.i.show()};
C6.prototype.unload=function(){this.player.showControls();this.i.hide()};g.ZM("miniplayer",C6);})(_yt_player);
