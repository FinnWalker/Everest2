(function(e){function t(t){for(var n,o,s=t[0],l=t[1],c=t[2],u=0,d=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);m&&m(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,s=1;s<a.length;s++){var l=a[s];0!==r[l]&&(n=!1)}n&&(i.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},r={app:0},i=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var m=l;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var n=a("64a9"),r=a.n(n);r.a},"079b":function(e,t,a){"use strict";var n=a("8cdd"),r=a.n(n);r.a},"239a":function(e,t,a){},"3c81":function(e,t,a){e.exports=a.p+"img/logos.2dcccd8c.png"},"518f":function(e,t,a){"use strict";var n=a("afcc"),r=a.n(n);r.a},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[0===e.state?a("PlayerList",{on:{"select-player":e.selectPlayer,"add-player":e.addPlayer}}):e._e(),1===e.state?a("Play",{attrs:{player:e.selected_player},on:{"to-select":e.toSelect}}):e._e(),2===e.state?a("Form",{on:{"to-select":e.toSelect,"select-player":e.selectPlayer}}):e._e()],1)},i=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"player-list"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],attrs:{type:"text",placeholder:"Search Name"},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}}),a("button",{attrs:{id:"add-button"},on:{click:e.addPlayer}},[e._v("+")]),e._l(e.filteredList,(function(t){return a("button",{key:t.id,on:{click:function(a){return e.selectPlayer(t)}}},[a("span",{attrs:{id:"name"}},[e._v(e._s(t.player_name))]),a("span",{attrs:{id:"steps"}},[e._v("Steps: "+e._s(t.steps))])])}))],2)},s=[],l=(a("386d"),a("6762"),a("2fdb"),a("7338")),c=a.n(l),m={name:"PlayerList",data:function(){return{search:"",players:[]}},methods:{selectPlayer:function(e){this.$emit("select-player",e)},addPlayer:function(){this.$emit("add-player")}},mounted:function(){var e=this;c.a.get("http://127.0.0.1:3000/players").then((function(t){return e.players=t.data.players}))},computed:{filteredList:function(){var e=this;return this.players.filter((function(t){return t.player_name.toLowerCase().includes(e.search.toLowerCase())}))}}},u=m,d=(a("079b"),a("2877")),p=Object(d["a"])(u,o,s,!1,null,"730f64e3",null),h=p.exports,f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"play"}},[a("div",{attrs:{id:"header"}},[e._v(e._s(e.player.player_name))]),a("button",{on:{click:function(t){return e.play(0)}}},[e._v("Treadmill 1")]),a("button",{on:{click:function(t){return e.play(1)}}},[e._v("Treadmill 2")]),a("button",{on:{click:function(t){return e.play(2)}}},[e._v("Treadmill 3")]),a("button",{on:{click:function(t){return e.play(3)}}},[e._v("Treadmill 4")]),a("button",{staticClass:"back",on:{click:e.toSelect}},[e._v("Back")])])},v=[],y=a("b383"),b={name:"Play",props:["player"],methods:{toSelect:function(){this.$emit("to-select")},play:function(e){var t=this,a={headers:{"Content-Type":"application/x-www-form-urlencoded"}},n="http://127.0.0.1:3000/play",r={treadmill:e,player:this.player.id};c.a.post(n,y.stringify(r),a).then((function(e){t.$emit("to-select")})).catch((function(e){console.log(e)}))}}},g=b,_=(a("8b18"),Object(d["a"])(g,f,v,!1,null,"5e767f56",null)),k=_.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"form"}},[n("div",{attrs:{id:"slogan"}},[e._v("CLIMB THE TAB EVEREST")]),n("img",{attrs:{src:a("3c81"),alt:""}}),n("div",{attrs:{id:"form-container"}},[n("div",{staticClass:"header"},[e._v("WARNING, ACKNOWLEDGEMENT, CONSENT AND WAIVER FORM - NSW")]),n("div",{staticClass:"normal-text"},[e._v("Between: Tab Limited (TAB), its subsidiaries and related entities and the undersigned person.")]),n("div",{staticClass:"header"},[e._v("Warning and Acknowlegement")]),e._m(0),n("div",{staticClass:"header"},[e._v("Release")]),e._m(1),n("div",{staticClass:"header"},[e._v("General")]),e._m(2),n("label",{staticClass:"checkbox-label"},[e._v("\n      I am over the age of 18\n      "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.eligible,expression:"eligible"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.eligible)?e._i(e.eligible,null)>-1:e.eligible},on:{change:function(t){var a=e.eligible,n=t.target,r=!!n.checked;if(Array.isArray(a)){var i=null,o=e._i(a,i);n.checked?o<0&&(e.eligible=a.concat([i])):o>-1&&(e.eligible=a.slice(0,o).concat(a.slice(o+1)))}else e.eligible=r}}})]),n("label",{staticClass:"checkbox-label"},[e._v("\n      I accept the terms and conditions of the Promotion\n      "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.terms,expression:"terms"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.terms)?e._i(e.terms,null)>-1:e.terms},on:{change:function(t){var a=e.terms,n=t.target,r=!!n.checked;if(Array.isArray(a)){var i=null,o=e._i(a,i);n.checked?o<0&&(e.terms=a.concat([i])):o>-1&&(e.terms=a.slice(0,o).concat(a.slice(o+1)))}else e.terms=r}}})]),n("br"),n("br"),n("label",[n("span",{staticClass:"form-label"},[e._v("First Name")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.first_name,expression:"first_name"}],attrs:{type:"text",placeholder:"First Name"},domProps:{value:e.first_name},on:{input:function(t){t.target.composing||(e.first_name=t.target.value)}}})]),n("br"),n("label",[n("span",{staticClass:"form-label"},[e._v("Last Name")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.last_name,expression:"last_name"}],attrs:{type:"text",placeholder:"Last Name"},domProps:{value:e.last_name},on:{input:function(t){t.target.composing||(e.last_name=t.target.value)}}})]),n("br"),n("label",[n("span",{staticClass:"form-label"},[e._v("Player Name")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.player_name,expression:"player_name"}],attrs:{type:"text",placeholder:"Player Name"},domProps:{value:e.player_name},on:{input:function(t){t.target.composing||(e.player_name=t.target.value)}}})]),n("br"),e._m(3),n("input",{directives:[{name:"model",rawName:"v-model",value:e.day,expression:"day"}],attrs:{type:"number",placeholder:"01"},domProps:{value:e.day},on:{input:function(t){t.target.composing||(e.day=t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.month,expression:"month"}],attrs:{type:"number",placeholder:"10"},domProps:{value:e.month},on:{input:function(t){t.target.composing||(e.month=t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.year,expression:"year"}],attrs:{type:"number",placeholder:"1980"},domProps:{value:e.year},on:{input:function(t){t.target.composing||(e.year=t.target.value)}}}),n("br"),n("label",[n("span",{staticClass:"form-label"},[e._v("Mobile")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.mobile,expression:"mobile"}],attrs:{type:"text",placeholder:"Mobile number"},domProps:{value:e.mobile},on:{input:function(t){t.target.composing||(e.mobile=t.target.value)}}})]),n("br"),n("label",[n("span",{staticClass:"form-label"},[e._v("Email")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text",placeholder:"Email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),n("br"),n("br"),n("label",{staticClass:"checkbox-label"},[e._v("\n      Are you a TAB customer?\n      "),n("span",{staticStyle:{position:"absolute",right:"-10vmin"}},[n("label",{staticClass:"radio-label"},[e._v("\n          Yes\n          "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.customer,expression:"customer"}],attrs:{type:"radio",value:"true"},domProps:{checked:e._q(e.customer,"true")},on:{change:function(t){e.customer="true"}}})]),n("label",{staticClass:"radio-label"},[e._v("\n          No\n          "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.customer,expression:"customer"}],attrs:{type:"radio",value:"false"},domProps:{checked:e._q(e.customer,"false")},on:{change:function(t){e.customer="false"}}})])])]),n("label",{staticClass:"checkbox-label"},[e._v("\n      I consent to receive marketing communications information on upcoming events from the Australian Turf Club\n      "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.marketing,expression:"marketing"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.marketing)?e._i(e.marketing,null)>-1:e.marketing},on:{change:function(t){var a=e.marketing,n=t.target,r=!!n.checked;if(Array.isArray(a)){var i=null,o=e._i(a,i);n.checked?o<0&&(e.marketing=a.concat([i])):o>-1&&(e.marketing=a.slice(0,o).concat(a.slice(o+1)))}else e.marketing=r}}})]),n("br"),n("br"),n("br"),n("label",{staticClass:"checkbox-label"},[e._v("\n      I consent to receive marketing communications information on upcoming events from TAB\n      "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.terms,expression:"terms"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.terms)?e._i(e.terms,null)>-1:e.terms},on:{change:function(t){var a=e.terms,n=t.target,r=!!n.checked;if(Array.isArray(a)){var i=null,o=e._i(a,i);n.checked?o<0&&(e.terms=a.concat([i])):o>-1&&(e.terms=a.slice(0,o).concat(a.slice(o+1)))}else e.terms=r}}})]),n("span",{attrs:{id:"signature"}},[e._v("Signature")]),n("canvas",{attrs:{id:"canvas",width:"500px",height:"250px"}}),n("button",{staticClass:"left",on:{click:e.toSelect}},[e._v("BACK")]),n("button",{staticClass:"right",on:{click:e.submitPlayer}},[e._v("FINISH")])])])},x=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"normal-text"},[e._v("\n      I acknowledge that my participation in The TAB Spring Carnival Live Site 'Climb the TAB Everest' promotion\n      (Promotion):\n      "),a("br"),e._v("contains inherent risks in all aspects of physical activity and may involve risk of personal injury\n      (including death) and/or possible property damage;\n      "),a("br"),e._v("may involve strenuous bodyweight exercises and other high exertion activities and that it is my right to\n      refuse such participation at any time during my allocation time; and I acknowledge that I understand the\n      possible strenuous nature of the activity and the potential for undesirable physiological results\n      including, but not limited to, abnormal blood pressure, muscle soreness, fainting, heart attack and/or\n      death.\n      "),a("br"),a("br"),e._v("I warrant that I do not suffer from any medical condition that may affect my ability to participate\n      safely in strenuous exercise and hereby acknowledge that my participation in the Promotion is voluntary\n      and I knowingly assume all the risks.\n    ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"normal-text"},[e._v("\n      I give consent to TAB, its employees, agents and its related entities taking and using (or permitting\n      authorised third parties to use) images (photographs or video) and/or sounds recordings of me that it\n      has obtained or produced and reference to my first name (the Content) in any public media (including\n      social media), radio, television, internet or print, or in a TAB publication, without any restriction on\n      use (time, geographic, number of times of use, or otherwise).\n      "),a("br"),a("br"),e._v("I understand and acknowledge that such Content may contain my personal information and that the intended\n      use of such Content is for TAB's advertising, marketing or promotional purposes, and without expectation\n      of compensation or other benefit to me.\n      "),a("br"),a("br"),e._v("I hereby waive the right to or interest in the Content disclosed to the public, as contemplated in this\n      release, and to the extent that any benefit accrues to TAB from the use of the Content, I hereby and\n      forever waive any interest in or claim to such benefits.\n      "),a("br"),a("br"),e._v("I hereby release and forever discharge TAB (including without limitaion all of its officers, employees,\n      contractors and agents) from any and all claims, liability, actions, suits, demands, costs, expenses or\n      indebtedness arising out of, related to, or in any way connected with the use of the Content, and I\n      hereby waive all rights and interest in and to such materials.\n    ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"normal-text"},[e._v("\n      I confirm that I am over 18 years of age and that I have full legal capacity to be bound by this\n      contract, and that I am signing this contract of my own free will and accord.\n      "),a("br"),a("br"),e._v("This form is governed by the laws of New South Wales. To the extend that a Court finds that any\n      provision of this form or part thereof is invalid or unenforceable, that provision or part thereof will\n      be severed and the remainder of this form will remain valid and enforceable.\n      "),a("br"),a("br"),e._v("I declare that I have read understood and agree with the above warning, acknowledgement, consent and\n      waiver and acknowledge that I fully understand the meaning and importance of its contents and I assume\n      with full knowledge of any and all dangers in my participation in the Prize and do so at my own risk.\n    ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",[a("span",{staticClass:"form-label"},[e._v("Date of Birth")])])}],P=a("65d2"),C=a("b383"),A={name:"Form",data:function(){return{eligible:!1,terms:!1,first_name:"",last_name:"",player_name:"",day:null,month:null,year:null,mobile:"",email:"",customer:!1,marketing:!1,signaturePad:null}},methods:{clearCanvas:function(){},toSelect:function(){this.$emit("to-select")},submitPlayer:function(){var e=this,t={headers:{"Content-Type":"application/x-www-form-urlencoded"}},a="http://127.0.0.1:3000/form",n={eligible:this.eligible,terms:this.terms,first_name:this.first_name,last_name:this.last_name,player_name:this.player_name,date_of_birth:this.day+"/"+this.month+"/"+this.year,mobile:this.mobile,email:this.email,customer:this.customer,marketing:this.marketing};c.a.post(a,C.stringify(n),t).then((function(t){e.$emit("select-player",t.data.player);var a=document.getElementById("canvas");c.a.post("http://127.0.0.1:3000/signature",C.stringify({img:a.toDataURL(),id:t.data.player.id}))})).catch((function(e){console.log(e)}))}},mounted:function(){var e=document.getElementById("canvas");this.signaturePad=new P["a"](e)}},N=A,I=(a("518f"),Object(d["a"])(N,w,x,!1,null,"23f67457",null)),T=I.exports,S={name:"app",data:function(){return{state:0,selected_player:null}},components:{PlayerList:h,Play:k,Form:T},methods:{selectPlayer:function(e){this.selected_player=e,this.state=1},toSelect:function(){this.state=0},addPlayer:function(){this.state=2}}},E=S,B=(a("034f"),Object(d["a"])(E,r,i,!1,null,null,null)),O=B.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(O)}}).$mount("#app")},"64a9":function(e,t,a){},"8b18":function(e,t,a){"use strict";var n=a("239a"),r=a.n(n);r.a},"8cdd":function(e,t,a){},afcc:function(e,t,a){}});
//# sourceMappingURL=app.8eaba2d0.js.map