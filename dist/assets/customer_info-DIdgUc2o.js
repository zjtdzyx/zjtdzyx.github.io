
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as T,P as z,r as u,z as L,S as M,a as r,o as R,k as j,b as p,e as t,w as a,g as s,t as O,E as c,x as P}from"./index-COvaATLK.js";const q={class:"container"},A={class:"customer-info"},F={class:"mb-4"},G={class:"dialog-footer"},J={class:"mb-4 flex gap-4"},K={class:"button-container mb-4"},Q=T({name:"CustomerInfo",__name:"customer_info",setup(W){const f=z.create({baseURL:"/",timeout:6e4,responseType:"json"}),n=u({name:"",contact:"",address:"",isEnterprise:!1,remark:"",date:new Date().toISOString()}),C=u([]),_=u(0),m=u(!1);function y(){const o=window.innerHeight;_.value=o-200}L(()=>{y(),window.addEventListener("resize",y),V()}),M(()=>{window.removeEventListener("resize",y)});async function V(){try{const o=await f.get("/customers");C.value=o.data}catch(o){console.error("获取数据失败:",o)}}async function x(){try{n.value.id?await f.put(`/customers/${n.value.id}`,n.value):await f.post("/customers",n.value),V(),m.value=!1}catch(o){console.error("保存数据失败:",o)}}function D(o){n.value={...o},m.value=!0}async function $(o){try{await f.delete(`/customers/${o}`),V()}catch(e){console.error("删除客户失败:",e)}}const v=u(!1),b=u(""),k=u([]);async function S(){if(!b.value.trim()){c.error("请输入客户姓名");return}try{const o=await f.get("/customers",{params:{name:b.value}});k.value=o.data,k.value.length||c.warning("未找到匹配的客户信息"),v.value=!1}catch(o){console.error(o),c.error("查询失败，请稍后再试")}}function B(){v.value=!1,b.value=""}return(o,e)=>{const i=r("el-button"),d=r("el-table-column"),H=r("el-table"),w=r("el-input"),g=r("el-form-item"),E=r("el-radio"),I=r("el-radio-group"),N=r("el-form"),U=r("el-dialog");return R(),j("div",q,[p("div",A,[e[18]||(e[18]=p("h2",null,"客户信息管理",-1)),p("div",F,[t(i,{type:"primary",plain:"",onClick:e[0]||(e[0]=l=>m.value=!0)},{default:a(()=>e[14]||(e[14]=[s(" 添加客户 ")])),_:1}),t(i,{type:"success",plain:"",disabled:!o.selectedCustomer,onClick:e[1]||(e[1]=l=>D(o.selectedCustomer))},{default:a(()=>e[15]||(e[15]=[s(" 编辑客户 ")])),_:1},8,["disabled"]),t(i,{type:"warning",plain:"",disabled:!o.selectedCustomer,onClick:e[2]||(e[2]=l=>$(o.selectedCustomer.id))},{default:a(()=>e[16]||(e[16]=[s(" 删除客户 ")])),_:1},8,["disabled"]),t(i,{type:"danger",plain:"",onClick:e[3]||(e[3]=l=>v.value=!0)},{default:a(()=>e[17]||(e[17]=[s(" 查询客户 ")])),_:1})])]),t(H,{data:C.value,height:_.value,border:"",style:{width:"100%"},onRowClick:e[4]||(e[4]=l=>o.selectedCustomer=l)},{default:a(()=>[t(d,{type:"selection",width:"55"}),t(d,{label:"客户编号",width:"100",align:"center"},{default:a(l=>[s(O(l.$index+1),1)]),_:1}),t(d,{property:"name",label:"客户姓名",width:"120",align:"center"}),t(d,{property:"contact",label:"联系方式",width:"150",align:"center"}),t(d,{property:"address",label:"客户地址",width:"200",align:"center","show-overflow-tooltip":""}),t(d,{property:"isEnterprise",label:"客户类型",width:"120",align:"center",formatter:l=>l.isEnterprise?"个人":"企业"},null,8,["formatter"]),t(d,{property:"remark",label:"备注",width:"150",align:"center","show-overflow-tooltip":""})]),_:1},8,["data","height"]),t(U,{modelValue:m.value,"onUpdate:modelValue":e[11]||(e[11]=l=>m.value=l),title:"客户信息",width:600},{footer:a(()=>[p("div",G,[t(i,{onClick:e[10]||(e[10]=l=>m.value=!1)},{default:a(()=>e[21]||(e[21]=[s(" 取消 ")])),_:1}),t(i,{type:"primary",onClick:x},{default:a(()=>e[22]||(e[22]=[s(" 保存 ")])),_:1})])]),default:a(()=>[t(N,{model:n.value,"label-width":"100px"},{default:a(()=>[t(g,{label:"客户姓名"},{default:a(()=>[t(w,{modelValue:n.value.name,"onUpdate:modelValue":e[5]||(e[5]=l=>n.value.name=l)},null,8,["modelValue"])]),_:1}),t(g,{label:"联系方式"},{default:a(()=>[t(w,{modelValue:n.value.contact,"onUpdate:modelValue":e[6]||(e[6]=l=>n.value.contact=l)},null,8,["modelValue"])]),_:1}),t(g,{label:"客户地址"},{default:a(()=>[t(w,{modelValue:n.value.address,"onUpdate:modelValue":e[7]||(e[7]=l=>n.value.address=l)},null,8,["modelValue"])]),_:1}),t(g,{label:"客户类型"},{default:a(()=>[t(I,{modelValue:n.value.isEnterprise,"onUpdate:modelValue":e[8]||(e[8]=l=>n.value.isEnterprise=l)},{default:a(()=>[t(E,{label:!0},{default:a(()=>e[19]||(e[19]=[s(" 企业 ")])),_:1}),t(E,{label:!1},{default:a(()=>e[20]||(e[20]=[s(" 个人 ")])),_:1})]),_:1},8,["modelValue"])]),_:1}),t(g,{label:"备注"},{default:a(()=>[t(w,{modelValue:n.value.remark,"onUpdate:modelValue":e[9]||(e[9]=l=>n.value.remark=l),type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"]),t(U,{modelValue:v.value,"onUpdate:modelValue":e[13]||(e[13]=l=>v.value=l),title:"查询客户信息",width:"400px","close-on-click-modal":!1},{default:a(()=>[p("div",J,[t(w,{modelValue:b.value,"onUpdate:modelValue":e[12]||(e[12]=l=>b.value=l),style:{width:"240px"},placeholder:"请输入客户姓名","prefix-icon":o.Search},null,8,["modelValue","prefix-icon"])]),p("div",K,[t(i,{type:"success",plain:"",onClick:S},{default:a(()=>e[23]||(e[23]=[s(" 确定 ")])),_:1}),t(i,{type:"danger",plain:"",onClick:B},{default:a(()=>e[24]||(e[24]=[s(" 取消 ")])),_:1})])]),_:1},8,["modelValue"])])}}}),Y=P(Q,[["__scopeId","data-v-81424d62"]]);export{Y as default};
