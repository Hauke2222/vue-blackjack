(function(){"use strict";var e={7703:function(e,r,t){var a=t(144),n=function(){var e=this,r=e._self._c;return r("div",{attrs:{id:"app"}},[r("h1",[e._v("Blackjack")]),r("Score"),r("DealCard"),r("Outcome")],1)},s=[],c=function(){var e=this,r=e._self._c;return r("div",[r("button",{attrs:{disabled:e.hitButtonDisabled},on:{click:function(r){return e.$store.dispatch("hit","player")}}},[e._v(" Hit ")]),r("button",{attrs:{disabled:e.passButtonDisabled},on:{click:function(r){return e.pass()}}},[e._v(" Pass ")])])},o=[],i={computed:{hitButtonDisabled(){return this.$store.getters.scorePlayer>=21||""!=this.$store.getters.winner},passButtonDisabled(){return this.$store.getters.scoreDealer>=17&&1==this.$store.getters.pass||""!=this.$store.getters.winner}},methods:{pass(){this.$store.dispatch("pass");while(this.$store.getters.scoreDealer<17)this.$store.dispatch("hit","dealer")}}},l=i,u=t(1001),d=(0,u.Z)(l,c,o,!1,null,null,null),f=d.exports,h=function(){var e=this,r=e._self._c;return r("h2",[e._v("Winner: "+e._s(e.winner))])},p=[],v=t(629),k={computed:{...(0,v.Se)(["winner"])}},D=k,_=(0,u.Z)(D,h,p,!1,null,null,null),P=_.exports,O=function(){var e=this,r=e._self._c;return r("div",[r("ul",{attrs:{id:"horizontal-list"}},[r("p",[e._v("Score dealer: "+e._s(e.scoreDealer))]),e._l(e.cardsDealer,(function(t,a){return r("li",{key:a,staticClass:"bigFontSize",domProps:{innerHTML:e._s(t.unicode)}})}))],2),r("ul",{attrs:{id:"horizontal-list"}},[r("p",[e._v("Score player: "+e._s(e.scorePlayer))]),e._l(e.cardsPlayer,(function(t,a){return r("li",{key:a,staticClass:"bigFontSize",domProps:{innerHTML:e._s(t.unicode)}})}))],2)])},y=[],C={computed:{...(0,v.Se)(["scoreDealer","scorePlayer"]),...(0,v.rn)(["deckOfCards","cardsPlayer","cardsDealer"])},data(){return{}}},S=C,m=(0,u.Z)(S,O,y,!1,null,null,null),b=m.exports,g={name:"App",components:{DealCard:f,Score:b,Outcome:P},methods:{}},E=g,A=(0,u.Z)(E,n,s,!1,null,null,null),w=A.exports;t(7658);class R{constructor(e,r,t,a){this.suit=e,this.rank=r,this.unicode=t,this.value=a}}class T{static checkForCardOf11Score(e){for(let r=0;r<e.length;r++)if(11===e[r].value)return e[r];return!1}static calculateScore(e){let r;while((r=e.reduce(((e,r)=>e+r.value),0))>21&&T.checkForCardOf11Score(e))T.checkForCardOf11Score(e).value=1;return r}}a.ZP.use(v.ZP);var F=new v.ZP.Store({state:{deckOfCards:[],cardsPlayer:[],cardsDealer:[],pass:!1,cardRanks:[{rank:"Ace",value:11,unicodePart:"1"},{rank:"2",value:2,unicodePart:"2"},{rank:"3",value:3,unicodePart:"3"},{rank:"4",value:4,unicodePart:"4"},{rank:"5",value:5,unicodePart:"5"},{rank:"6",value:6,unicodePart:"6"},{rank:"7",value:7,unicodePart:"7"},{rank:"8",value:8,unicodePart:"8"},{rank:"9",value:9,unicodePart:"9"},{rank:"10",value:10,unicodePart:"A"},{rank:"Jack",value:10,unicodePart:"B"},{rank:"Queen",value:10,unicodePart:"D"},{rank:"King",value:10,unicodePart:"E"}],cardSuits:[{suit:"Clubs",unicode:"1F0D"},{suit:"Diamonds",unicode:"1F0C"},{suit:"Hearts",unicode:"1F0B"},{suit:"Spades",unicode:"1F0A"}]},mutations:{GENERATE_DECK_OF_CARDS(e){e.deckOfCards=[];for(let r=0;r<e.cardSuits.length;r++)for(let t=0;t<e.cardRanks.length;t++)e.deckOfCards.push(new R(e.cardSuits[r].suit,e.cardRanks[t].rank,"&#x"+e.cardSuits[r].unicode+e.cardRanks[t].unicodePart,e.cardRanks[t].value))},ADD_CARD_TO_HAND(e,{player:r,card:t}){"player"==r?e.cardsPlayer.push(t):e.cardsDealer.push(t)},DELETE_CARD_FROM_DECK(e,r){e.deckOfCards.splice([r],1)},SET_PASS_BOOLEAN_TRUE(e){e.pass=!0}},actions:{generateDeckOfCards({commit:e}){e("GENERATE_DECK_OF_CARDS")},hit({commit:e},r){let t=Math.floor(Math.random()*this.state.deckOfCards.length),a=this.state.deckOfCards[t];e("DELETE_CARD_FROM_DECK",a),e("ADD_CARD_TO_HAND",{player:r,card:a})},pass({commit:e}){e("SET_PASS_BOOLEAN_TRUE")},initGame({dispatch:e}){e("generateDeckOfCards"),e("hit","player"),e("hit","dealer"),e("hit","player"),e("hit","dealer")}},getters:{deckOfCards:e=>e.deckOfCards,scoreDealer:e=>T.calculateScore(e.cardsDealer),scorePlayer:e=>T.calculateScore(e.cardsPlayer),cardsDealer:e=>e.cardsDealer,cardsPlayer:e=>e.cardsPlayer,pass:e=>e.pass,winner:(e,r)=>21===r.scoreDealer&&21===r.scorePlayer?"Draw":21===r.scorePlayer?"Player":21===r.scoreDealer||r.scorePlayer>21?"Dealer":r.scoreDealer>21||e.pass&&r.scorePlayer>r.scoreDealer?"Player":e.pass&&r.scoreDealer>r.scorePlayer?"Dealer":""}});a.ZP.config.productionTip=!1,new a.ZP({store:F,created(){this.$store.dispatch("initGame")},render:e=>e(w)}).$mount("#app")}},r={};function t(a){var n=r[a];if(void 0!==n)return n.exports;var s=r[a]={exports:{}};return e[a](s,s.exports,t),s.exports}t.m=e,function(){var e=[];t.O=function(r,a,n,s){if(!a){var c=1/0;for(u=0;u<e.length;u++){a=e[u][0],n=e[u][1],s=e[u][2];for(var o=!0,i=0;i<a.length;i++)(!1&s||c>=s)&&Object.keys(t.O).every((function(e){return t.O[e](a[i])}))?a.splice(i--,1):(o=!1,s<c&&(c=s));if(o){e.splice(u--,1);var l=n();void 0!==l&&(r=l)}}return r}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[a,n,s]}}(),function(){t.d=function(e,r){for(var a in r)t.o(r,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:r[a]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)}}(),function(){var e={143:0};t.O.j=function(r){return 0===e[r]};var r=function(r,a){var n,s,c=a[0],o=a[1],i=a[2],l=0;if(c.some((function(r){return 0!==e[r]}))){for(n in o)t.o(o,n)&&(t.m[n]=o[n]);if(i)var u=i(t)}for(r&&r(a);l<c.length;l++)s=c[l],t.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return t.O(u)},a=self["webpackChunkvue_blackjack"]=self["webpackChunkvue_blackjack"]||[];a.forEach(r.bind(null,0)),a.push=r.bind(null,a.push.bind(a))}();var a=t.O(void 0,[998],(function(){return t(7703)}));a=t.O(a)})();
//# sourceMappingURL=app.550c98de.js.map