
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as N,P as q,r as c,Q as V,z as B,a as n,o as T,k,e as t,w as u,g as C,F as K,R as p,x as O}from"./index-COvaATLK.js";const P=N({__name:"product_out",setup(F){const _=q.create({baseURL:"/",timeout:6e4,responseType:"json"}),r=c([]),d=c(!1),i=c(null),o=V({productNumber:"",quantity:0});async function b(){d.value=!0,i.value=null;try{const a=await _.get("/products");r.value=a.data}catch(a){i.value=a.message||"Failed to fetch data"}finally{d.value=!1}}B(()=>{b()});const s=c(0);function w(){const a=r.value.find(e=>e.productNumber===o.productNumber);return a?s.value=a.quantity:s.value=0,s.value}async function v(){if(o.quantity<=0||o.quantity>s.value){await p.alert("非法的出库数量，请检查输入的数量。","错误",{confirmButtonText:"OK",type:"error"});return}const a=r.value.find(e=>e.productNumber===o.productNumber);if(!a){await p.alert("未找到对应的产品编号，请检查后再试。","错误",{confirmButtonText:"OK",type:"error"});return}try{const e=await _.put(`/products/out/${a.productNumber}`,{...a,quantity:o.quantity});await p.alert("出库操作成功！","成功",{confirmButtonText:"OK",type:"success"}),b()}catch(e){i.value=e.message||"提交失败，请稍后再试！",await p.alert("错误",{confirmButtonText:"OK",type:"error"})}finally{d.value=!1}}return(a,e)=>{const l=n("el-table-column"),x=n("el-table"),y=n("el-input"),m=n("el-form-item"),g=n("el-button"),h=n("el-form");return T(),k(K,null,[t(x,{data:r.value,height:"250",style:{width:"100%"}},{default:u(()=>[t(l,{prop:"productNumber",label:"产品编号",width:"180"}),t(l,{prop:"name",label:"产品名称",width:"180"}),t(l,{prop:"grade",label:"产品等级",width:"180"}),t(l,{prop:"origin",label:"产地",width:"180"}),t(l,{prop:"costPrice",label:"进价",width:"180"}),t(l,{prop:"packaging",label:"包装物",width:"180"}),t(l,{prop:"quantity",label:"数量",width:"180"})]),_:1},8,["data"]),t(h,{model:o,"label-width":"100px",style:{"max-width":"600px"}},{default:u(()=>[t(m,{label:"产品编号"},{default:u(()=>[t(y,{modelValue:o.productNumber,"onUpdate:modelValue":e[0]||(e[0]=f=>o.productNumber=f),onInput:w},null,8,["modelValue"])]),_:1}),t(m,{label:"出库数量"},{default:u(()=>[t(y,{modelValue:o.quantity,"onUpdate:modelValue":e[1]||(e[1]=f=>o.quantity=f)},null,8,["modelValue"])]),_:1}),t(m,null,{default:u(()=>[t(g,{type:"primary",onClick:v},{default:u(()=>e[2]||(e[2]=[C(" 提交 ")])),_:1})]),_:1})]),_:1},8,["model"])],64)}}}),D=O(P,[["__scopeId","data-v-4d300482"]]);export{D as default};