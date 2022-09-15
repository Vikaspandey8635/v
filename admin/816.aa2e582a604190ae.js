"use strict";(self.webpackChunkadminPanel=self.webpackChunkadminPanel||[]).push([[816],{13816:(u,s,t)=>{t.r(s),t.d(s,{PagesModule:()=>m});var a=t(69808),e=t(99826),n=t(5e3),c=t(85446);const P=[{path:"",redirectTo:"dashboard",pathMatch:"full"},{path:"dashboard",component:(()=>{class o{constructor(){}ngOnInit(){this.optionPie={renderer:"svg",width:600,height:400},this.initOpts={renderer:"svg",width:600,height:400},this.option={title:{text:""},tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{data:["Email","Union Ads","Video Ads","Direct","Search Engine"]},toolbox:{feature:{saveAsImage:{}}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]}],yAxis:[{type:"value"}],series:[{name:"Email",type:"line",stack:"Total",areaStyle:{},emphasis:{focus:"series"},data:[120,132,101,134,90,230,210]},{name:"Union Ads",type:"line",stack:"Total",areaStyle:{},emphasis:{focus:"series"},data:[220,182,191,234,290,330,310]},{name:"Video Ads",type:"line",stack:"Total",areaStyle:{},emphasis:{focus:"series"},data:[150,232,201,154,190,330,410]},{name:"Direct",type:"line",stack:"Total",areaStyle:{},emphasis:{focus:"series"},data:[320,332,301,334,390,330,320]},{name:"Search Engine",type:"line",stack:"Total",label:{show:!0,position:"top"},areaStyle:{},emphasis:{focus:"series"},data:[820,932,901,934,1290,1330,1320]}]},this.optionPie={legend:{top:"bottom"},toolbox:{show:!0,feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},restore:{show:!0},saveAsImage:{show:!0}}},series:[{name:"Nightingale Chart",type:"pie",radius:[50,250],center:["50%","50%"],roseType:"area",itemStyle:{borderRadius:8},data:[{value:40,name:"rose 1"},{value:38,name:"rose 2"},{value:32,name:"rose 3"},{value:30,name:"rose 4"},{value:28,name:"rose 5"},{value:26,name:"rose 6"},{value:22,name:"rose 7"},{value:18,name:"rose 8"}]}]}}}return o.\u0275fac=function(d){return new(d||o)},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-dashboard"]],decls:100,vars:4,consts:[["id","page-content-wrapper"],[1,"container-fluid"],[1,"dashboard-page"],[1,"title-bar"],[1,"dash-cards"],[1,"dash_end"],["routerLink","/pages/users/list",1,"report-box"],[1,"rb-left"],["aria-hidden","true",1,"fa","fa-user"],[1,"rb-right"],["routerLink","/pages/driver/list",1,"report-box"],["aria-hidden","true",1,"fa","fa-id-card-o"],["routerLink","/pages/booking/booking",1,"report-box"],["aria-hidden","true",1,"fa","fa-newspaper-o"],[1,"report-box"],["aria-hidden","true",1,"fa","fa-usd"],[1,"driver-customer"],[1,"user"],[1,"card"],[1,"card-body"],[1,"cd-header"],[1,"dropselect"],["name","","id",""],["value","Weekly"],["value","Monthly"],[1,"customer"],["echarts","",1,"demo-chart",3,"options","initOpts"]],template:function(d,M){1&d&&(n.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h2"),n._uU(5,"Dashboard"),n.qZA()(),n.TgZ(6,"div",4)(7,"ul",5)(8,"li")(9,"div",6)(10,"div",7),n._UZ(11,"i",8),n.qZA(),n.TgZ(12,"div",9)(13,"p"),n._uU(14,"Total Users "),n.TgZ(15,"span"),n._uU(16,"1000"),n.qZA()()()()(),n.TgZ(17,"li")(18,"div",10)(19,"div",9)(20,"div",7),n._UZ(21,"i",11),n.qZA(),n.TgZ(22,"p"),n._uU(23,"Total Gameplays "),n.TgZ(24,"span"),n._uU(25,"50"),n.qZA()()()()(),n.TgZ(26,"li")(27,"div",12)(28,"div",9)(29,"div",7),n._UZ(30,"i",13),n.qZA(),n.TgZ(31,"p"),n._uU(32,"Total Levels "),n.TgZ(33,"span"),n._uU(34,"500"),n.qZA()()()()(),n.TgZ(35,"li")(36,"div",14)(37,"div",9)(38,"div",7),n._UZ(39,"i",15),n.qZA(),n.TgZ(40,"p"),n._uU(41,"Total Assets "),n.TgZ(42,"span"),n._uU(43,"550"),n.qZA()()()()(),n.TgZ(44,"li")(45,"div",14)(46,"div",9)(47,"div",7),n._UZ(48,"i",15),n.qZA(),n.TgZ(49,"p"),n._uU(50,"Total Points "),n.TgZ(51,"span"),n._uU(52,"$500"),n.qZA()()()()(),n.TgZ(53,"li")(54,"div",14)(55,"div",9)(56,"div",7),n._UZ(57,"i",15),n.qZA(),n.TgZ(58,"p"),n._uU(59,"Total Cash Spent"),n.TgZ(60,"span"),n._uU(61,"$800"),n.qZA()()()()(),n.TgZ(62,"li")(63,"div",14)(64,"div",9)(65,"div",7),n._UZ(66,"i",15),n.qZA(),n.TgZ(67,"p"),n._uU(68,"Revenue Analytics "),n.TgZ(69,"span"),n._uU(70,"$5500"),n.qZA()()()()()()(),n.TgZ(71,"div",16)(72,"div",17)(73,"div",18)(74,"div",19)(75,"div",20)(76,"h5"),n._uU(77,"Total Bookings"),n.qZA(),n.TgZ(78,"div",21)(79,"select",22)(80,"option",23),n._uU(81,"Weekly"),n.qZA(),n.TgZ(82,"option",24),n._uU(83,"Monthly"),n.qZA()()()(),n.TgZ(84,"div",25),n._UZ(85,"div",26),n.qZA()()()(),n.TgZ(86,"div",17)(87,"div",18)(88,"div",19)(89,"div",20)(90,"h5"),n._uU(91,"Total Bookings"),n.qZA(),n.TgZ(92,"div",21)(93,"select",22)(94,"option",23),n._uU(95,"Weekly"),n.qZA(),n.TgZ(96,"option",24),n._uU(97,"Monthly"),n.qZA()()()(),n.TgZ(98,"div",25),n._UZ(99,"div",26),n.qZA()()()()()()()()),2&d&&(n.xp6(85),n.Q6J("options",M.option)("initOpts",M.initOpts),n.xp6(14),n.Q6J("options",M.optionPie)("initOpts",M.initOpts))},directives:[e.rH,c.w],styles:['.dashboard-page[_ngcontent-%COMP%]   .dash-cards[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:flex-start}@media (max-width: 991px){.dashboard-page[_ngcontent-%COMP%]   .dash-cards[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin-bottom:0}}.dashboard-page[_ngcontent-%COMP%]   .dash-cards[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:24%}@media (max-width: 991px){.dashboard-page[_ngcontent-%COMP%]   .dash-cards[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:49%;margin-bottom:14px}}@media (max-width: 767px){.dashboard-page[_ngcontent-%COMP%]   .dash-cards[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:100%}}.dashboard-page[_ngcontent-%COMP%]   .dash-cards[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dashboard-pag[_ngcontent-%COMP%]   .dash-cards[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]:nth-child(2){background:linear-gradient(316deg,#fc5286,#fbaaa2)}.dashboard-page[_ngcontent-%COMP%]   .dash-cards[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .report-box[_ngcontent-%COMP%]{border-radius:10px;box-shadow:0 2px 9px #00000024;background:#fff;padding:20px;display:flex;align-items:flex-start;justify-content:space-between;position:relative;overflow:hidden;cursor:pointer;background:linear-gradient(230deg,#759bff,#843cf6);margin-bottom:20px;margin-right:20px}.dashboard-page[_ngcontent-%COMP%]   .dash-cards[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .report-box[_ngcontent-%COMP%]:after{position:absolute;content:"";background:#ffffff2b;width:80px;height:80px;border-radius:100px;bottom:-20px;right:-30px}.dashboard-page[_ngcontent-%COMP%]   .dash-cards[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .report-box[_ngcontent-%COMP%]   .rb-left[_ngcontent-%COMP%]{margin-right:10px}.dashboard-page[_ngcontent-%COMP%]   .dash-cards[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .report-box[_ngcontent-%COMP%]   .rb-left[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#fff;background:#ffffff54;width:30px;height:30px;display:flex;justify-content:center;align-items:center;border-radius:6px;font-size:17px}.dashboard-page[_ngcontent-%COMP%]   .dash-cards[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .report-box[_ngcontent-%COMP%]   .rb-right[_ngcontent-%COMP%]{width:100%;display:flex;align-items:flex-start}.dashboard-page[_ngcontent-%COMP%]   .dash-cards[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .report-box[_ngcontent-%COMP%]   .rb-right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#fff;font-size:14px;font-weight:400}.dashboard-page[_ngcontent-%COMP%]   .dash-cards[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .report-box[_ngcontent-%COMP%]   .rb-right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;text-align:left;font-weight:700;font-size:21px}.dashboard-page[_ngcontent-%COMP%]   .dash-cards[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child   .report-box[_ngcontent-%COMP%]{background:linear-gradient(to right,#8ba539,#bcd278)}.dashboard-page[_ngcontent-%COMP%]   .dash-cards[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2)   .report-box[_ngcontent-%COMP%]{background:linear-gradient(to right,#8ba539,#bcd278)}.dashboard-page[_ngcontent-%COMP%]   .dash-cards[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3)   .report-box[_ngcontent-%COMP%]{background:linear-gradient(to right,#8ba539,#bcd278)}.dashboard-page[_ngcontent-%COMP%]   .dash-cards[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(4)   .report-box[_ngcontent-%COMP%]{background:linear-gradient(to right,#8ba539,#bcd278)}.dashboard-page[_ngcontent-%COMP%]   .dash-cards[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(5)   .report-box[_ngcontent-%COMP%]{background:linear-gradient(to right,#8ba539,#bcd278)}.dashboard-page[_ngcontent-%COMP%]   .dash-cards[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(6)   .report-box[_ngcontent-%COMP%]{background:linear-gradient(to right,#8ba539,#bcd278)}.dashboard-page[_ngcontent-%COMP%]   .dash-cards[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(7)   .report-box[_ngcontent-%COMP%]{background:linear-gradient(to right,#8ba539,#bcd278)}.dashboard-page[_ngcontent-%COMP%]   .transaction[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding-top:10px;padding-bottom:20px}@media (max-width: 991px){.dashboard-page[_ngcontent-%COMP%]   .transaction[_ngcontent-%COMP%]{gap:20px;flex-wrap:wrap}}.dashboard-page[_ngcontent-%COMP%]   .transaction[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{height:410px;overflow:hidden}.dashboard-page[_ngcontent-%COMP%]   .transaction[_ngcontent-%COMP%]   .trans-main[_ngcontent-%COMP%]{width:65%}@media (max-width: 991px){.dashboard-page[_ngcontent-%COMP%]   .transaction[_ngcontent-%COMP%]   .trans-main[_ngcontent-%COMP%]{width:100%}}.dashboard-page[_ngcontent-%COMP%]   .transaction[_ngcontent-%COMP%]   .trans-main[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{color:#000;font-size:18px;margin-bottom:30px;font-weight:600}.dashboard-page[_ngcontent-%COMP%]   .transaction[_ngcontent-%COMP%]   .trans-main[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding-bottom:20px}.dashboard-page[_ngcontent-%COMP%]   .transaction[_ngcontent-%COMP%]   .trans-main[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .lt-box[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-start}@media (max-width: 767px){.dashboard-page[_ngcontent-%COMP%]   .transaction[_ngcontent-%COMP%]   .trans-main[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .lt-box[_ngcontent-%COMP%]{flex-wrap:wrap}}.dashboard-page[_ngcontent-%COMP%]   .transaction[_ngcontent-%COMP%]   .trans-main[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .lt-box[_ngcontent-%COMP%]   .ltb-frst[_ngcontent-%COMP%]{display:flex;align-items:flex-start}.dashboard-page[_ngcontent-%COMP%]   .transaction[_ngcontent-%COMP%]   .trans-main[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .lt-box[_ngcontent-%COMP%]   .ltb-frst[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]{background:#ddd;width:30px;height:30px;border-radius:4px;margin-right:10px}.dashboard-page[_ngcontent-%COMP%]   .transaction[_ngcontent-%COMP%]   .trans-main[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .lt-box[_ngcontent-%COMP%]   .boxright[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;font-weight:600}.dashboard-page[_ngcontent-%COMP%]   .transaction[_ngcontent-%COMP%]   .trans-main[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .lt-box[_ngcontent-%COMP%]   .boxright[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block}.dashboard-page[_ngcontent-%COMP%]   .transaction[_ngcontent-%COMP%]   .trans-main[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .ltb-second[_ngcontent-%COMP%]{display:flex;align-items:flex-start}.dashboard-page[_ngcontent-%COMP%]   .transaction[_ngcontent-%COMP%]   .trans-main[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .ltb-second[_ngcontent-%COMP%]   .ltb-second-left[_ngcontent-%COMP%]{width:30px;height:30px;border-radius:4px;margin-right:4px;display:flex;justify-content:center;align-items:center}.dashboard-page[_ngcontent-%COMP%]   .transaction[_ngcontent-%COMP%]   .trans-main[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .ltb-second[_ngcontent-%COMP%]   .ltb-second-right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;font-weight:600}.dashboard-page[_ngcontent-%COMP%]   .transaction[_ngcontent-%COMP%]   .trans-main[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .ltb-second[_ngcontent-%COMP%]   .ltb-second-right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;color:#ada6a6;font-weight:400}.dashboard-page[_ngcontent-%COMP%]   .transaction[_ngcontent-%COMP%]   .trans-main[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .ltb-third[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{color:#ada6a6;font-size:15px}.dashboard-page[_ngcontent-%COMP%]   .transaction[_ngcontent-%COMP%]   .trans-main[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .ltb-forth[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#ada6a6}.dashboard-page[_ngcontent-%COMP%]   .transaction[_ngcontent-%COMP%]   .trans-main[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .ltb-forth[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{color:#ada6a6;font-size:15px}.dashboard-page[_ngcontent-%COMP%]   .transaction[_ngcontent-%COMP%]   .trans-right[_ngcontent-%COMP%]{width:34%}@media (max-width: 991px){.dashboard-page[_ngcontent-%COMP%]   .transaction[_ngcontent-%COMP%]   .trans-right[_ngcontent-%COMP%]{width:100%}}.dashboard-page[_ngcontent-%COMP%]   .transaction[_ngcontent-%COMP%]   .trans-right[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#000;font-size:18px;margin-bottom:30px;font-weight:600}.dashboard-page[_ngcontent-%COMP%]   .transaction[_ngcontent-%COMP%]   .trans-right[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%;object-fit:contain}.blue[_ngcontent-%COMP%]{color:#01beff}.green[_ngcontent-%COMP%]{color:#00c068}.yellow[_ngcontent-%COMP%]{color:#ffbf26}.orange[_ngcontent-%COMP%]{color:#ff684d}.driver-customer[_ngcontent-%COMP%]{display:flex;justify-content:space-between;gap:20px;margin-top:20px}@media (max-width: 767px){.driver-customer[_ngcontent-%COMP%]{flex-direction:column}}.driver-customer[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]{width:50%}@media (max-width: 767px){.driver-customer[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]{width:100%}}.cd-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:30px}.cd-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{color:#000;font-size:16px}.cd-header[_ngcontent-%COMP%]   .dropselect[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{width:120px;border:1px solid #ddd;padding:4px;font-size:14px;outline:none}']}),o})()},{path:"userList",component:t(99208).J},{path:"user",loadChildren:()=>t.e(86).then(t.bind(t,65086)).then(o=>o.UserModule)},{path:"manageShop",loadChildren:()=>t.e(174).then(t.bind(t,29174)).then(o=>o.ManageShopModule)},{path:"cms",loadChildren:()=>t.e(68).then(t.bind(t,5068)).then(o=>o.ManageCmsModule)},{path:"support",loadChildren:()=>t.e(546).then(t.bind(t,9546)).then(o=>o.CustomerSupportModule)},{path:"sub-admin",loadChildren:()=>t.e(469).then(t.bind(t,58469)).then(o=>o.SubAdminModule)},{path:"analytics",loadChildren:()=>t.e(791).then(t.bind(t,86791)).then(o=>o.AnalyticsModule)},{path:"leaderboard",loadChildren:()=>t.e(265).then(t.bind(t,28265)).then(o=>o.ManageLeaderbaordModule)},{path:"notification",loadChildren:()=>t.e(983).then(t.bind(t,30983)).then(o=>o.NotificationManagementModule)},{path:"level",loadChildren:()=>t.e(357).then(t.bind(t,91357)).then(o=>o.ManageLevelModule)},{path:"Gameplay",loadChildren:()=>t.e(426).then(t.bind(t,33426)).then(o=>o.GameEnvironmentModule)},{path:"Payment",loadChildren:()=>t.e(696).then(t.bind(t,12696)).then(o=>o.PaymentMethodModule)},{path:"referrals",loadChildren:()=>t.e(991).then(t.bind(t,88991)).then(o=>o.ReferralsModule)},{path:"manageAssets",loadChildren:()=>t.e(765).then(t.bind(t,26765)).then(o=>o.ManageAssetsModule)},{path:"myprofile",loadChildren:()=>t.e(338).then(t.bind(t,38338)).then(o=>o.ProfileModule)},{path:"changePass",loadChildren:()=>t.e(96).then(t.bind(t,96096)).then(o=>o.ChangePasswordModule)}];let O=(()=>{class o{}return o.\u0275fac=function(d){return new(d||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[[e.Bz.forChild(P)],e.Bz]}),o})();var i=t(93075),l=t(77531);let r=(()=>{class o{}return o.\u0275fac=function(d){return new(d||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[[a.ez,i.u5,i.UX,l.c]]}),o})();var h=t(40520);let m=(()=>{class o{}return o.\u0275fac=function(d){return new(d||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[[a.ez,O,c.N,r,h.JF]]}),o})()},99208:(u,s,t)=>{t.d(s,{J:()=>O});var a=t(93075),e=t(5e3),n=t(99826),c=t(67322),C=t(77531),p=t(74107),P=t(90508);let O=(()=>{class i{constructor(){this.adduser=new a.cw({firstName:new a.NI(""),lastName:new a.NI(""),ranking:new a.NI(""),earnings:new a.NI(""),image:new a.NI(""),levels:new a.NI(""),transactions:new a.NI(""),purchaseHistory:new a.NI("")})}ngOnInit(){}submit(){console.log(this.adduser.value)}}return i.\u0275fac=function(r){return new(r||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-add-user"]],decls:57,vars:1,consts:[["id","page-content-wrapper"],[1,"container-fluid"],[1,"dashboard-page"],[1,"title-bar"],[2,"text-align","right"],["routerLink","/user/userList",1,"btn","btn-primary",2,"margin-bottom","20px"],[1,"card"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"profile-upload"],[1,"upload-img"],["src","assets/images/profile.jpeg"],[1,"uploadfile"],["type","file","id","myfile","name","myfile"],[1,"hover-plus"],["aria-hidden","true",1,"fa","fa-pencil"],[1,"form_feilds"],[1,"form_grup"],["appearance","fill"],["matInput","","placeholder","Name","value","",1,"form_control"],["matInput","","placeholder","Email","value","",1,"form_control"],["matInput","","placeholder","Level","value","",1,"form_control"],["appearance","fill",1,"select"],["placeholder","Purchase History"],["placeholder","Transactions"],["matInput","","placeholder","Earnings","value","",1,"form_control"],["matInput","","placeholder","Wallets","value","",1,"form_control"],[1,"submit"],[1,"btn","btn-primary"]],template:function(r,h){1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h2"),e._uU(5,"Add User"),e.qZA()(),e.TgZ(6,"div",4)(7,"button",5),e._uU(8," Back "),e.qZA()(),e.TgZ(9,"div",6)(10,"div",7)(11,"form",8),e.NdJ("ngSubmit",function(){return h.submit()}),e.TgZ(12,"div",9)(13,"div",10)(14,"figure"),e._UZ(15,"img",11),e.qZA(),e.TgZ(16,"div",12),e._UZ(17,"input",13),e.qZA(),e.TgZ(18,"div",14),e._UZ(19,"i",15),e.qZA()()(),e.TgZ(20,"div",16)(21,"div",17)(22,"mat-form-field",18),e._UZ(23,"input",19),e.qZA()(),e.TgZ(24,"div",17)(25,"mat-form-field",18),e._UZ(26,"input",20),e.qZA()(),e.TgZ(27,"div",17)(28,"mat-form-field",18),e._UZ(29,"input",21),e.qZA()(),e.TgZ(30,"div",17)(31,"mat-form-field",22)(32,"mat-select",23)(33,"mat-option"),e._uU(34," User 1 "),e.qZA(),e.TgZ(35,"mat-option"),e._uU(36," User 2 "),e.qZA(),e.TgZ(37,"mat-option"),e._uU(38," User 3 "),e.qZA()()()(),e.TgZ(39,"div",17)(40,"mat-form-field",22)(41,"mat-select",24)(42,"mat-option"),e._uU(43," User 1 "),e.qZA(),e.TgZ(44,"mat-option"),e._uU(45," User 2 "),e.qZA(),e.TgZ(46,"mat-option"),e._uU(47," User 3 "),e.qZA()()()(),e.TgZ(48,"div",17)(49,"mat-form-field",18),e._UZ(50,"input",25),e.qZA()(),e.TgZ(51,"div",17)(52,"mat-form-field",18),e._UZ(53,"input",26),e.qZA()()()(),e.TgZ(54,"div",27)(55,"button",28),e._uU(56,"Submit"),e.qZA()()()()()()()),2&r&&(e.xp6(11),e.Q6J("formGroup",h.adduser))},directives:[n.rH,a._Y,a.JL,a.sg,c.KE,C.Nt,p.gD,P.ey],styles:[""]}),i})()}}]);