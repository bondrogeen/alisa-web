"use strict";(self["webpackChunkclient2"]=self["webpackChunkclient2"]||[]).push([[35],{7035:function(e,a,l){l.r(a),l.d(a,{default:function(){return f}});var u=l(3396),n=l(7139),t=l(4870),o=l(2483);const m={class:"page-info container"},v=(0,u._)("div",{class:"page-home__title text-h4 my-6"},"TTS",-1),d={class:"page-info__body"},s={class:"page-info__form"},i={class:"page-info__body"},r={class:"page-info__view"},p={class:"page-info__footer"};var c={__name:"TextToSpeachView",props:{data:{type:Object,default:()=>({})},devices:{type:Array,default:()=>[]},onSend:{type:Function,default:null}},setup(e){const a=e,l=(0,t.iH)("Привет я Алиса"),c=(0,t.iH)(!1),_=(0,t.iH)({name:"Нет",value:""}),f=(0,t.iH)({name:"Алиса",value:""}),y=[{name:"Нет",value:""},{name:"Хомяка",value:"hamster"},{name:"Мегафон",value:"megaphone"},{name:"Низкий голос",value:"pitch_down"},{name:"Психоделический голос",value:"psychodelic"},{name:"Голос с прерываниями",value:"pulse"},{name:"Громкоговоритель",value:"train_announce"}],w=[{name:"Алиса",value:""},{name:"Оксана",value:"oksana"},{name:"Джейн",value:"jane"},{name:"Захар",value:"zahar"},{name:"Эрмил",value:"ermil"},{name:"Эркан Явас",value:"erkanyavas"},{name:"Костя",value:"kostya"}],h=(0,o.yj)(),k=h.params.id,V=(0,u.Fl)((()=>a.data[k]?.data||{})),b=e=>a.onSend(k,e),W=e=>_.value=e,g=e=>{c.value=!1,f.value=e},x=(0,u.Fl)((()=>f.value.value?`voice='${f.value.value}'`:"")),T=(0,u.Fl)((()=>c.value?'is_whisper="true"':"")),U=(0,u.Fl)((()=>_.value.value?`effect='${_.value.value}'`:"")),F=(0,u.Fl)((()=>`<speaker ${T.value} ${x.value} ${U.value}>${l.value}`)),S=()=>{console.log(V),b({command:"serverAction",serverActionEventPayload:{type:"server_action",name:"update_form",payload:{form_update:{name:"personal_assistant.scenarios.repeat_after_me",slots:[{type:"string",name:"request",value:F.value}]},resubmit:!0}}})};return(e,a)=>{const o=(0,u.up)("a-textarea"),h=(0,u.up)("a-field"),k=(0,u.up)("a-checkbox"),V=(0,u.up)("a-input"),b=(0,u.up)("a-list"),x=(0,u.up)("a-dropdown"),T=(0,u.up)("a-button");return(0,u.wg)(),(0,u.iD)("div",m,[v,(0,u._)("div",d,[(0,u._)("div",s,[(0,u.Wm)(h,{label:"Text"},{default:(0,u.w5)((()=>[(0,u.Wm)(o,{modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=e=>l.value=e),type:"text",placeholder:"TTS"},null,8,["modelValue"])])),_:1}),(0,u.Wm)(k,{modelValue:c.value,"onUpdate:modelValue":a[1]||(a[1]=e=>c.value=e),class:"mb-6"},{default:(0,u.w5)((()=>[(0,u.Uk)("whisper")])),_:1},8,["modelValue"]),(0,u._)("div",i,[(0,u.Wm)(x,null,{activator:(0,u.w5)((({on:e})=>[(0,u.Wm)(h,(0,u.dG)({label:"Effects"},(0,u.mx)(e)),{default:(0,u.w5)((()=>[(0,u.Wm)(V,{modelValue:_.value.name,"onUpdate:modelValue":a[2]||(a[2]=e=>_.value.name=e),readonly:"",type:"text"},null,8,["modelValue"])])),_:2},1040)])),default:(0,u.w5)((()=>[(0,u.Wm)(b,{list:y,onClick:W})])),_:1}),(0,u.Wm)(x,null,{activator:(0,u.w5)((({on:e})=>[(0,u.Wm)(h,(0,u.dG)({label:"Voice"},(0,u.mx)(e)),{default:(0,u.w5)((()=>[(0,u.Wm)(V,{modelValue:f.value.name,"onUpdate:modelValue":a[3]||(a[3]=e=>f.value.name=e),readonly:"",type:"text"},null,8,["modelValue"])])),_:2},1040)])),default:(0,u.w5)((()=>[(0,u.Wm)(b,{list:w,onClick:g})])),_:1})])]),(0,u._)("div",r,(0,n.zw)((0,t.SU)(F)),1)]),(0,u._)("div",p,[(0,u.Wm)(T,{color:"primary",onClick:S},{default:(0,u.w5)((()=>[(0,u.Uk)(" Отправить ")])),_:1})])])}}};const _=c;var f=_}}]);