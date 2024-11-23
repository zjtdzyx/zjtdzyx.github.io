
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as k,r as V,D as B,z as J,E as m,o as y,k as U,e as l,w as s,b as _,f as a,G as o,H as S,h as C,I as d,J as p,g as f,K as L,L as v,N as M,t as O,M as x,m as T,x as q}from"./index-COvaATLK.js";const $={class:"container"},h={class:"search-container"},j={class:"table-container"},G={key:0,class:"edit-container"},K=k({__name:"SystemSettings",setup(E){const g=[{user_id:"U001",username:"admin",created_at:"2023-01-01",last_login_time:"2023-01-10",status:"启用"},{user_id:"U002",username:"user",created_at:"2023-02-01",last_login_time:"2023-02-10",status:"禁用"},{user_id:"U003",username:"guest",created_at:"2023-03-01",last_login_time:"2023-03-10",status:"启用"},{user_id:"U004",username:"manager",created_at:"2023-04-01",last_login_time:"2023-04-10",status:"禁用"},{user_id:"U005",username:"developer",created_at:"2023-05-01",last_login_time:"2023-05-10",status:"启用"}],n=V(JSON.parse(localStorage.getItem("userInfo")||JSON.stringify(g))),b=V(""),D=B(()=>{const i=b.value.trim().toLowerCase();return i?n.value.filter(e=>Object.values(e).some(t=>String(t).toLowerCase().includes(i))):n.value}),r=V({user_id:"",username:"",created_at:"",last_login_time:"",status:""}),u=V(null);J(()=>{m.success("User info loaded successfully")});function w(){try{n.value.push({...r.value}),r.value={user_id:"",username:"",created_at:"",last_login_time:"",status:""},c(),m.success("User added successfully")}catch{m.error("Failed to add user")}}function N(i){u.value={...i}}function I(){try{const i=n.value.findIndex(e=>e.user_id===u.value.user_id);i!==-1&&(n.value[i]={...u.value},c()),u.value=null,m.success("User updated successfully")}catch{m.error("Failed to update user")}}function z(i){try{n.value=n.value.filter(e=>e.user_id!==i),c(),m.success("User removed successfully")}catch{m.error("Failed to remove user")}}function c(){localStorage.setItem("userInfo",JSON.stringify(n.value))}function F(){n.value=[...g],c()}return(i,e)=>(y(),U("div",$,[l(a(x),{class:"box-card"},{default:s(()=>[e[16]||(e[16]=_("div",{class:"card-header"},[_("h1",null,"用户权限管理")],-1)),_("div",h,[l(a(o),{modelValue:b.value,"onUpdate:modelValue":e[0]||(e[0]=t=>b.value=t),placeholder:"输入关键词搜索用户...",clearable:""},null,8,["modelValue"])]),l(a(S),{"label-width":"120px",onSubmit:C(w,["prevent"])},{default:s(()=>[l(a(d),{label:"用户ID"},{default:s(()=>[l(a(o),{modelValue:r.value.user_id,"onUpdate:modelValue":e[1]||(e[1]=t=>r.value.user_id=t),placeholder:"用户ID",required:""},null,8,["modelValue"])]),_:1}),l(a(d),{label:"用户名"},{default:s(()=>[l(a(o),{modelValue:r.value.username,"onUpdate:modelValue":e[2]||(e[2]=t=>r.value.username=t),placeholder:"用户名",required:""},null,8,["modelValue"])]),_:1}),l(a(d),{label:"创建时间"},{default:s(()=>[l(a(o),{modelValue:r.value.created_at,"onUpdate:modelValue":e[3]||(e[3]=t=>r.value.created_at=t),placeholder:"创建时间",required:""},null,8,["modelValue"])]),_:1}),l(a(d),{label:"最后登录时间"},{default:s(()=>[l(a(o),{modelValue:r.value.last_login_time,"onUpdate:modelValue":e[4]||(e[4]=t=>r.value.last_login_time=t),placeholder:"最后登录时间",required:""},null,8,["modelValue"])]),_:1}),l(a(d),{label:"状态"},{default:s(()=>[l(a(o),{modelValue:r.value.status,"onUpdate:modelValue":e[5]||(e[5]=t=>r.value.status=t),placeholder:"状态",required:""},null,8,["modelValue"])]),_:1}),l(a(d),{class:"form-actions"},{default:s(()=>[l(a(p),{type:"primary",onClick:w},{default:s(()=>e[12]||(e[12]=[f(" 添加用户 ")])),_:1})]),_:1})]),_:1}),_("div",j,[l(a(L),{data:D.value,style:{width:"auto",margin:"0 auto"},height:"400",border:""},{default:s(()=>[l(a(v),{prop:"user_id",label:"用户ID",width:"150"}),l(a(v),{prop:"username",label:"用户名",width:"150"}),l(a(v),{prop:"created_at",label:"创建时间",width:"150"}),l(a(v),{prop:"last_login_time",label:"最后登录时间",width:"150"}),l(a(v),{prop:"status",label:"状态",width:"150"},{default:s(t=>[_("span",{style:M({color:t.row.status==="启用"?"green":"red",fontWeight:"bold",fontSize:"16px"})},O(t.row.status),5)]),_:1}),l(a(v),{label:"操作",width:"150"},{default:s(t=>[l(a(p),{type:"primary",size:"small",onClick:H=>N(t.row)},{default:s(()=>e[13]||(e[13]=[f(" 编辑 ")])),_:2},1032,["onClick"]),l(a(p),{type:"danger",size:"small",onClick:H=>z(t.row.user_id)},{default:s(()=>e[14]||(e[14]=[f(" 删除 ")])),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),l(a(p),{type:"warning",onClick:F},{default:s(()=>e[15]||(e[15]=[f("还原数据")])),_:1})]),_:1}),u.value?(y(),U("div",G,[l(a(x),{class:"box-card"},{default:s(()=>[e[19]||(e[19]=_("div",{class:"card-header"},[_("h2",null,"编辑用户")],-1)),l(a(S),{"label-width":"120px",onSubmit:C(I,["prevent"])},{default:s(()=>[l(a(d),{label:"用户ID"},{default:s(()=>[l(a(o),{modelValue:u.value.user_id,"onUpdate:modelValue":e[6]||(e[6]=t=>u.value.user_id=t),placeholder:"用户ID",required:""},null,8,["modelValue"])]),_:1}),l(a(d),{label:"用户名"},{default:s(()=>[l(a(o),{modelValue:u.value.username,"onUpdate:modelValue":e[7]||(e[7]=t=>u.value.username=t),placeholder:"用户名",required:""},null,8,["modelValue"])]),_:1}),l(a(d),{label:"创建时间"},{default:s(()=>[l(a(o),{modelValue:u.value.created_at,"onUpdate:modelValue":e[8]||(e[8]=t=>u.value.created_at=t),placeholder:"创建时间",required:""},null,8,["modelValue"])]),_:1}),l(a(d),{label:"最后登录时间"},{default:s(()=>[l(a(o),{modelValue:u.value.last_login_time,"onUpdate:modelValue":e[9]||(e[9]=t=>u.value.last_login_time=t),placeholder:"最后登录时间",required:""},null,8,["modelValue"])]),_:1}),l(a(d),{label:"状态"},{default:s(()=>[l(a(o),{modelValue:u.value.status,"onUpdate:modelValue":e[10]||(e[10]=t=>u.value.status=t),placeholder:"状态",required:""},null,8,["modelValue"])]),_:1}),l(a(d),{class:"form-actions"},{default:s(()=>[l(a(p),{type:"primary",onClick:I},{default:s(()=>e[17]||(e[17]=[f(" 更新用户 ")])),_:1}),l(a(p),{onClick:e[11]||(e[11]=t=>u.value=null)},{default:s(()=>e[18]||(e[18]=[f(" 取消 ")])),_:1})]),_:1})]),_:1})]),_:1})])):T("",!0)]))}}),Q=q(K,[["__scopeId","data-v-f72692d9"]]),W=k({name:"SystemSettingsView",__name:"system_settings",setup(E){return(g,n)=>(y(),U("div",null,[l(Q)]))}}),P=q(W,[["__scopeId","data-v-7a24085c"]]);export{P as default};
