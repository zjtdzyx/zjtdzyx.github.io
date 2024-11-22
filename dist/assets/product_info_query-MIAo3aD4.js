
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{O as w,x as M,r as p,z as q,a as d,o as N,k as S,b as _,e as t,w as a,g as i,t as h}from"./index-B_i3AGOe.js";async function T(){return(await w.get("/products")).data}async function P(m,l){return(await w.put(`/products/${m}`,l)).data}async function A(m){return(await w.delete(`/products/${m}`)).data}const I={class:"container"},L={class:"product-info"},O={class:"mb-4"},R={class:"dialog-footer"},j={class:"dialog-footer"},F={__name:"product_info_query",setup(m){const l=p({inboundQuantity:0,inbound_date:""}),y=p([]),V=p(0),f=p(!1),b=p(!1),u=p(null);function g(){const o=window.innerHeight;V.value=o-200}window.addEventListener("resize",g),q(g);async function v(){y.value=await T()}async function U(){u.value&&(await P(u.value.product_number,l.value),await v(),b.value=!1)}async function $(o){await A(o),await v()}q(v);function z(o){u.value=o,l.value.inboundQuantity=o.quantity||0,l.value.inbound_date=o.last_inbound_date||"",b.value=!0}async function D(o){await $(o.product_number)}async function H(){if(u.value&&l.value.inboundQuantity>0&&l.value.inbound_date)try{const o=u.value.quantity+l.value.inboundQuantity;await P(u.value.product_number,{quantity:o,last_inbound_date:l.value.inbound_date}),u.value.quantity=o,u.value.last_inbound_date=l.value.inbound_date,v(),f.value=!1}catch(o){console.error(o)}}return(o,e)=>{const s=d("el-button"),r=d("el-table-column"),B=d("el-table"),k=d("el-input"),c=d("el-form-item"),C=d("el-date-picker"),x=d("el-form"),Q=d("el-dialog");return N(),S("div",I,[_("div",L,[e[10]||(e[10]=_("h2",null,"产品信息管理",-1)),_("div",O,[t(s,{type:"primary",plain:"",disabled:!u.value,onClick:o.handleAddStock},{default:a(()=>e[9]||(e[9]=[i(" 入库（先点击勾选产品） ")])),_:1},8,["disabled","onClick"])])]),t(B,{data:y.value,height:V.value,border:"",style:{width:"100%"},onRowClick:e[0]||(e[0]=n=>u.value=n)},{default:a(()=>[t(r,{type:"selection",width:"55"}),t(r,{label:"产品编号",width:"100",align:"center"},{default:a(n=>[i(h(n.row.product_number),1)]),_:1}),t(r,{property:"name",label:"产品名称",width:"120",align:"center"}),t(r,{property:"quantity",label:"总量",width:"100",align:"center"}),t(r,{property:"last_inbound_date",label:"最后入库日期",width:"180",align:"center"}),t(r,{label:"操作",width:"180",align:"center"},{default:a(n=>[t(s,{size:"mini",onClick:E=>z(n.row)},{default:a(()=>e[11]||(e[11]=[i("编辑")])),_:2},1032,["onClick"]),t(s,{size:"mini",type:"danger",onClick:E=>D(n.row)},{default:a(()=>e[12]||(e[12]=[i("删除")])),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data","height"]),t(Q,{modelValue:f.value,"onUpdate:modelValue":e[4]||(e[4]=n=>f.value=n),title:"入库操作",width:"400px"},{footer:a(()=>[_("div",R,[t(s,{onClick:e[3]||(e[3]=n=>f.value=!1)},{default:a(()=>e[13]||(e[13]=[i(" 取消 ")])),_:1}),t(s,{type:"primary",onClick:H},{default:a(()=>e[14]||(e[14]=[i(" 确认 ")])),_:1})])]),default:a(()=>[t(x,{model:l.value,"label-width":"100px"},{default:a(()=>[t(c,{label:"入库数量"},{default:a(()=>[t(k,{modelValue:l.value.inboundQuantity,"onUpdate:modelValue":e[1]||(e[1]=n=>l.value.inboundQuantity=n),modelModifiers:{number:!0},type:"number",min:"1"},null,8,["modelValue"])]),_:1}),t(c,{label:"入库日期"},{default:a(()=>[t(C,{modelValue:l.value.inbound_date,"onUpdate:modelValue":e[2]||(e[2]=n=>l.value.inbound_date=n),type:"date",placeholder:"选择日期",style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"]),t(Q,{modelValue:b.value,"onUpdate:modelValue":e[8]||(e[8]=n=>b.value=n),title:"编辑产品",width:"400px"},{footer:a(()=>[_("div",j,[t(s,{onClick:e[7]||(e[7]=n=>b.value=!1)},{default:a(()=>e[15]||(e[15]=[i("取消")])),_:1}),t(s,{type:"primary",onClick:U},{default:a(()=>e[16]||(e[16]=[i("保存")])),_:1})])]),default:a(()=>[t(x,{model:l.value,"label-width":"100px"},{default:a(()=>[t(c,{label:"产品数量"},{default:a(()=>[t(k,{modelValue:l.value.inboundQuantity,"onUpdate:modelValue":e[5]||(e[5]=n=>l.value.inboundQuantity=n),modelModifiers:{number:!0},type:"number",min:"0"},null,8,["modelValue"])]),_:1}),t(c,{label:"入库日期"},{default:a(()=>[t(C,{modelValue:l.value.inbound_date,"onUpdate:modelValue":e[6]||(e[6]=n=>l.value.inbound_date=n),type:"date",placeholder:"选择日期",style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])])}}},J=M(F,[["__scopeId","data-v-28b62ba2"]]);export{J as default};
