(function(e){function t(t){for(var i,s,o=t[0],d=t[1],l=t[2],c=0,p=[];c<o.length;c++)s=o[c],r[s]&&p.push(r[s][0]),r[s]=0;for(i in d)Object.prototype.hasOwnProperty.call(d,i)&&(e[i]=d[i]);u&&u(t);while(p.length)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,o=1;o<n.length;o++){var d=n[o];0!==r[d]&&(i=!1)}i&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var i={},r={app:0},a=[];function s(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=i,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],d=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=d;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var i=n("c21b"),r=n.n(i);r.a},"1cdc":function(e,t,n){"use strict";var i=n("6c6f"),r=n.n(i);r.a},"49b5":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var i=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("info-menu",{directives:[{name:"show",rawName:"v-show",value:!e.gameStarted,expression:"!gameStarted"}],on:{startGame:e.startGame}}),n("transition",{attrs:{name:"fade"}},[e.gameStarted?n("div",{directives:[{name:"show",rawName:"v-show",value:!e.faded,expression:"!faded"}],class:{"shake animated":e.animated},attrs:{id:"mainCard"},on:{animationend:function(t){e.animated=!1}}},["roman"===e.currentType?n("roman-riddle",{staticClass:"riddle",attrs:{riddle:e.currentRiddle},on:{goodAnswer:e.goodAnswer,badAnswer:e.badAnswer}}):e._e(),"arabic"===e.currentType?n("arabic-riddle",{staticClass:"riddle",attrs:{riddle:e.currentRiddle},on:{goodAnswer:e.goodAnswer,badAnswer:e.badAnswer}}):e._e()],1):e._e()]),n("div",{attrs:{id:"bg"}},[n("progress-bar",{directives:[{name:"show",rawName:"v-show",value:e.gameStarted,expression:"gameStarted"}],attrs:{progress:e.progress}}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.gameStarted,expression:"gameStarted"}],attrs:{id:"levelInfo"}},[e._v("\n      Obecny poziom:"),n("span",{attrs:{id:"level"}},[e._v(" "+e._s(e.level))])]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.gameStarted,expression:"gameStarted"}],attrs:{id:"pointContainer"}},[n("animated-number",{attrs:{id:"points",number:e.points}}),e._v(" pkt.\n    ")],1)],1),n("div",{class:{active:e.modalOpened},attrs:{id:"btn"},on:{click:e.showHelp}},[n("div",{attrs:{id:"top"}}),n("div",{attrs:{id:"middle"}}),n("div",{attrs:{id:"bottom"}})]),n("div",{class:{active:e.modalOpened},attrs:{id:"box"}},[e._m(0),n("div",{attrs:{id:"copyright"}},[e._v("\n      Ⓒ 2018 Kamil Soćko \n    ")])])],1)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"items"}},[n("div",{staticClass:"item"},[e._v("I - 1")]),n("div",{staticClass:"item"},[e._v("V - 5")]),n("div",{staticClass:"item"},[e._v("X - 10")]),n("div",{staticClass:"item"},[e._v("L - 50")]),n("div",{staticClass:"item"},[e._v("C - 100")]),n("div",{staticClass:"item"},[e._v("D - 500")]),n("div",{staticClass:"item"},[e._v("M - 1000")])])}],s=(n("28a5"),n("c5f6"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[e._v(e._s(e.displayNumber))])}),o=[],d={props:["number"],data:function(){return{displayNumber:0,intNumber:parseInt(this.number),interval:!1}},mounted:function(){this.displayNumber=this.intNumber?this.intNumber:0},watch:{number:function(){this.intNumber=parseInt(this.number)},intNumber:function(){clearInterval(this.interval),this.intNumber!=this.displayNumber&&(this.interval=window.setInterval(function(){if(this.displayNumber!=this.intNumber){var e=(this.intNumber-this.displayNumber)/10;e=e>=0?Math.ceil(e):Math.floor(e),this.displayNumber=this.displayNumber+e}}.bind(this),20))}}},l=d,u=n("2877"),c=Object(u["a"])(l,s,o,!1,null,null,null);c.options.__file="animatedNumber.vue";var p=c.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("span",{staticClass:"display-4 font-weight-regular"},[e._v(e._s(e.riddleArabized))]),n("v-text-field",{ref:"questionInput",attrs:{autofocus:"",id:"answerInRomanian",type:"string"},on:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.guess(t):null}},model:{value:e.answer,callback:function(t){e.answer=t},expression:"answer"}})],1)},h=[],v={props:{riddle:{type:Number}},created:function(){var e=this;this.$nextTick(function(){e.$refs.questionInput.focus()})},data:function(){return{riddleArabized:this.riddle,answer:"",riddleRomanized:this.$parent.romanize(this.riddle)}},watch:{riddle:function(e){this.riddle=e,this.riddleArabized=this.riddle,this.riddleRomanized=this.$parent.romanize(this.riddle)}},methods:{guess:function(){console.log(this.answer,this.riddleRomanized),null!=this.answer&&this.answer.toUpperCase().trim()==this.riddleRomanized?(console.log("Good answer! ".concat(this.answer," == ").concat(this.riddleRomanized)),this.$emit("goodAnswer")):(console.log("Bad answer! ".concat(this.answer," != ").concat(this.riddleRomanized)),this.$emit("badAnswer")),this.answer=null}}},f=v,w=(n("8f47"),Object(u["a"])(f,m,h,!1,null,null,null));w.options.__file="arabicRiddle.vue";var b=w.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"info"}},[n("div",{staticClass:"display-2 font-weight-medium",attrs:{id:"infoTitle"}},[e._v("Zasady gry")]),e._m(0),n("div",{staticStyle:{"text-align":"center"}},[n("v-btn",{attrs:{id:"start",large:"",color:"blue"},on:{click:e.startGame}},[e._v("GRAJ")])],1)])},y=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"body-1",attrs:{id:"infoBody"}},[e._v("\n        Gra polega na zamianie liczb rzymskich na arabskie i odwrotnie."),n("br"),e._v("\n        Odpowiadając sześć razy z rzędu bez pomyłek - zapełniając pasek, awansujesz na kolejny, trudniejszy poziom."),n("br"),e._v("\n        Z każdym poziomem wzrasta pula liczb możliwych do wylosowania i ilość odpowiedzi potrzebnych do awansowania na kolejny, a także mnożnik punktów."),n("br"),e._v("\n        Punkty, jak i obecny poziom nie znikają po odświeżeniu strony, resetuje się natomiast licznik poprawnych pod rząd odpowiedzi."),n("br"),e._v("\n        Ściągawka znajduje się w lewym górnym rogu."),n("br"),e._v("\n        Powodzenia!\n\n    ")])}],_={methods:{startGame:function(){this.$emit("startGame")}}},I=_,C=(n("fa65"),Object(u["a"])(I,g,y,!1,null,null,null));C.options.__file="infoMenu.vue";var z=C.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("span",{staticClass:"display-4 font-weight-regular"},[e._v(e._s(e.riddleRomanized))]),n("v-text-field",{ref:"questionInput",attrs:{id:"answerInArabic",autofocus:"",type:"number"},on:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.guess(t):null}},model:{value:e.answer,callback:function(t){e.answer=t},expression:"answer"}})],1)},S=[],L={props:{riddle:{type:Number}},data:function(){return{riddleArabized:this.riddle,answer:null,riddleRomanized:this.$parent.romanize(this.riddle)}},watch:{riddle:function(e){this.riddle=e,this.riddleRomanized=this.$parent.romanize(this.riddle),this.riddleArabized=this.riddle}},created:function(){var e=this;this.$nextTick(function(){e.$refs.questionInput.focus()})},methods:{guess:function(){null!=this.answer&&this.answer.trim()==this.riddleArabized?(console.log("Good answer! ".concat(this.answer," == ").concat(this.riddleArabized)),this.$emit("goodAnswer")):(console.log("Bad answer! ".concat(this.answer," != ").concat(this.riddleArabized)),this.$emit("badAnswer")),this.answer=null}}},A=L,N=(n("77d8"),Object(u["a"])(A,k,S,!1,null,null,null));N.options.__file="romanRiddle.vue";var j=N.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"progress-container"},[n("div",{staticClass:"progress",style:{width:e.progress+"%"}})])},R=[],X={props:["progress"]},$=X,O=(n("1cdc"),Object(u["a"])($,x,R,!1,null,"0325c695",null));O.options.__file="progressBar.vue";var M=O.exports,T=n("1e5c"),D=n.n(T),P=D.a.Howl,V={name:"app",components:{arabicRiddle:b,infoMenu:z,romanRiddle:j,progressBar:M,animatedNumber:p},data:function(){return{amountToLevelUp:4,gameStarted:!1,currentType:String,currentRiddle:Number,level:1,streak:0,progress:0,animated:!1,faded:!1,points:0,prevRand:0,modalOpened:!1}},created:function(){localStorage.getItem("currentLevel")?this.level=localStorage.getItem("currentLevel"):localStorage.setItem("currentLevel",1),localStorage.getItem("points")?this.points=localStorage.getItem("points"):localStorage.setItem("points",0),this.initializeSounds(),this.updateAmountToLevelUp()},methods:{showHelp:function(){this.modalOpened=!this.modalOpened},addPoints:function(e){console.log("Added ".concat(e," points to score")),this.points=parseInt(parseInt(this.points)+e),localStorage.setItem("points",this.points)},updateAmountToLevelUp:function(){this.amountToLevelUp=parseInt(this.level)+5},updateProgress:function(){this.progress=this.streak/this.amountToLevelUp*100},getCurrentLevel:function(){return this.level},setLevel:function(e){localStorage.setItem("currentLevel",e)},incrementLevel:function(){this.level=parseInt(this.getCurrentLevel())+1,localStorage.setItem("currentLevel",this.level)},decrementLevel:function(){this.getCurrentLevel()>1&&(this.level=parseInt(this.getCurrentLevel())-1,localStorage.setItem("currentLevel",this.level))},romanize:function(e){if(!+e)return!1;var t=String(+e).split(""),n=["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM","","X","XX","XXX","XL","L","LX","LXX","LXXX","XC","","I","II","III","IV","V","VI","VII","VIII","IX"],i="",r=3;while(r--)i=(n[+t.pop()+10*r]||"")+i;return Array(+t.join("")+1).join("M")+i},arabize:function(e){e=e.toUpperCase();var t,n=/^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/,i=/[MDLV]|C[MD]?|X[CL]?|I[XV]?/g,r={M:1e3,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},a=0;if(!e||!n.test(e))return!1;while(t=i.exec(e))a+=r[t[0]];return a},randomBetween:function(e,t){return Math.floor(Math.random()*(t-e+1)+e)},randomBetweenNoDup:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;do{var i=Math.floor(Math.random()*(t-e+1)+e)}while(i==n);return i},createRiddle:function(){if(1==this.level)var e=1;else e=10*parseInt(this.level)-10;var t=50*parseInt(this.level),n=this.randomBetweenNoDup(e,t,this.prevRand);this.prevRand=parseInt(n),this.currentRiddle=parseInt(n),0===this.randomBetween(0,1)?this.currentType="roman":this.currentType="arabic"},goodAnswer:function(){var e=this;this.streak++,this.updateProgress(),this.addPoints(5*parseInt(this.level)+2*parseInt(this.streak)),this.streak>=this.amountToLevelUp?(this.levelupSound.play(),this.incrementLevel(),this.updateAmountToLevelUp(),this.streak=0,setTimeout(function(){return e.updateProgress()},400)):this.correctSound.play(),this.makeFade(400),setTimeout(function(){return e.createRiddle()},400)},badAnswer:function(){this.streak=0,this.wrongSound.play(),this.shakeCard(),this.updateProgress()},startGame:function(){this.gameStarted=!0,this.createRiddle()},initializeSounds:function(){this.wrongSound=new P({src:["./static/sounds/wrong.mp3","./static/sounds/wrong.ogg"],volume:.6}),this.correctSound=new P({src:["./static/sounds/correct.mp3","./static/sounds/correct.ogg"],volume:.4}),this.levelupSound=new P({src:["./static/sounds/levelup.mp3","./static/sounds/levelup.ogg"],volume:.6})},shakeCard:function(){this.animated=!0},makeFade:function(e){var t=this;this.faded=!0,setTimeout(function(){return t.faded=!1},e)}}},E=V,G=(n("034f"),Object(u["a"])(E,r,a,!1,null,null,null));G.options.__file="App.vue";var B=G.exports,U=n("ce5b"),q=n.n(U);n("bf40"),n("d5e8"),n("77ed");i["default"].use(q.a),i["default"].config.productionTip=!1,new i["default"]({render:function(e){return e(B)}}).$mount("#app"),i["default"].config.devtools=!0},"6c6f":function(e,t,n){},"77d8":function(e,t,n){"use strict";var i=n("49b5"),r=n.n(i);r.a},"8f46":function(e,t,n){},"8f47":function(e,t,n){"use strict";var i=n("8f46"),r=n.n(i);r.a},"9cec":function(e,t,n){},c21b:function(e,t,n){},fa65:function(e,t,n){"use strict";var i=n("9cec"),r=n.n(i);r.a}});
//# sourceMappingURL=app.041166fd.js.map