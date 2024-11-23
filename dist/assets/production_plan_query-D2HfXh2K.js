
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as P,r as f,z as I,E as _,o as b,k as q,e as l,w as u,b as v,f as e,H as U,h as k,I as o,G as r,J as s,g as V,K as h,L as p,M as F,m as H,x as g}from"./index-COvaATLK.js";const M={class:"container"},N={class:"table-container"},$={key:0},z=P({__name:"ProductionPlanQuery",setup(x){const i=f([{plan_id:"P001",plan_name:"计划A",product_name:"产品A",product_id:"PR001",plan_type:"常规计划",planned_start_date:"2023-01-01",planned_end_date:"2023-01-10",actual_start_date:"2023-01-02",actual_end_date:"2023-01-09",planned_quantity:1e3,actual_quantity:950,unit:"件",workshop:"车间1",person_in_charge:"张三",equipment:"设备A",plan_status:"进行中",priority:"高",remarks:"无"},{plan_id:"P002",plan_name:"计划B",product_name:"产品B",product_id:"PR002",plan_type:"紧急计划",planned_start_date:"2023-02-01",planned_end_date:"2023-02-10",actual_start_date:"2023-02-02",actual_end_date:"2023-02-09",planned_quantity:2e3,actual_quantity:1900,unit:"件",workshop:"车间2",person_in_charge:"李四",equipment:"设备B",plan_status:"已完成",priority:"中",remarks:"无"}]),n=f({plan_id:"",plan_name:"",product_name:"",product_id:"",plan_type:"",planned_start_date:"",planned_end_date:"",actual_start_date:"",actual_end_date:"",planned_quantity:"",actual_quantity:"",unit:"",workshop:"",person_in_charge:"",equipment:"",plan_status:"",priority:"",remarks:""}),t=f(null);I(()=>{_.success("Production plans loaded successfully")});function y(){try{i.value.push({...n.value}),n.value={plan_id:"",plan_name:"",product_name:"",product_id:"",plan_type:"",planned_start_date:"",planned_end_date:"",actual_start_date:"",actual_end_date:"",planned_quantity:"",actual_quantity:"",unit:"",workshop:"",person_in_charge:"",equipment:"",plan_status:"",priority:"",remarks:""},_.success("Plan added successfully")}catch{_.error("Failed to add plan")}}function C(m){t.value={...m}}function w(){try{const m=i.value.findIndex(a=>a.plan_id===t.value.plan_id);m!==-1&&(i.value[m]={...t.value}),t.value=null,_.success("Plan updated successfully")}catch{_.error("Failed to update plan")}}function E(m){try{i.value=i.value.filter(a=>a.plan_id!==m),_.success("Plan removed successfully")}catch{_.error("Failed to remove plan")}}return(m,a)=>(b(),q("div",M,[l(e(F),{class:"box-card"},{default:u(()=>[a[40]||(a[40]=v("div",{class:"card-header"},[v("h1",null,"生产计划管理")],-1)),l(e(U),{"label-width":"120px",onSubmit:k(y,["prevent"])},{default:u(()=>[l(e(o),{label:"计划编号"},{default:u(()=>[l(e(r),{modelValue:n.value.plan_id,"onUpdate:modelValue":a[0]||(a[0]=d=>n.value.plan_id=d),placeholder:"计划编号",required:""},null,8,["modelValue"])]),_:1}),l(e(o),{label:"计划名称"},{default:u(()=>[l(e(r),{modelValue:n.value.plan_name,"onUpdate:modelValue":a[1]||(a[1]=d=>n.value.plan_name=d),placeholder:"计划名称",required:""},null,8,["modelValue"])]),_:1}),l(e(o),{label:"产品名称"},{default:u(()=>[l(e(r),{modelValue:n.value.product_name,"onUpdate:modelValue":a[2]||(a[2]=d=>n.value.product_name=d),placeholder:"产品名称",required:""},null,8,["modelValue"])]),_:1}),l(e(o),{label:"产品编号"},{default:u(()=>[l(e(r),{modelValue:n.value.product_id,"onUpdate:modelValue":a[3]||(a[3]=d=>n.value.product_id=d),placeholder:"产品编号",required:""},null,8,["modelValue"])]),_:1}),l(e(o),{label:"计划类型"},{default:u(()=>[l(e(r),{modelValue:n.value.plan_type,"onUpdate:modelValue":a[4]||(a[4]=d=>n.value.plan_type=d),placeholder:"计划类型",required:""},null,8,["modelValue"])]),_:1}),l(e(o),{label:"计划开始时间"},{default:u(()=>[l(e(r),{modelValue:n.value.planned_start_date,"onUpdate:modelValue":a[5]||(a[5]=d=>n.value.planned_start_date=d),placeholder:"计划开始时间",required:""},null,8,["modelValue"])]),_:1}),l(e(o),{label:"计划结束时间"},{default:u(()=>[l(e(r),{modelValue:n.value.planned_end_date,"onUpdate:modelValue":a[6]||(a[6]=d=>n.value.planned_end_date=d),placeholder:"计划结束时间",required:""},null,8,["modelValue"])]),_:1}),l(e(o),{label:"实际开始时间"},{default:u(()=>[l(e(r),{modelValue:n.value.actual_start_date,"onUpdate:modelValue":a[7]||(a[7]=d=>n.value.actual_start_date=d),placeholder:"实际开始时间",required:""},null,8,["modelValue"])]),_:1}),l(e(o),{label:"实际结束时间"},{default:u(()=>[l(e(r),{modelValue:n.value.actual_end_date,"onUpdate:modelValue":a[8]||(a[8]=d=>n.value.actual_end_date=d),placeholder:"实际结束时间",required:""},null,8,["modelValue"])]),_:1}),l(e(o),{label:"计划产量"},{default:u(()=>[l(e(r),{modelValue:n.value.planned_quantity,"onUpdate:modelValue":a[9]||(a[9]=d=>n.value.planned_quantity=d),placeholder:"计划产量",required:""},null,8,["modelValue"])]),_:1}),l(e(o),{label:"实际产量"},{default:u(()=>[l(e(r),{modelValue:n.value.actual_quantity,"onUpdate:modelValue":a[10]||(a[10]=d=>n.value.actual_quantity=d),placeholder:"实际产量",required:""},null,8,["modelValue"])]),_:1}),l(e(o),{label:"单位"},{default:u(()=>[l(e(r),{modelValue:n.value.unit,"onUpdate:modelValue":a[11]||(a[11]=d=>n.value.unit=d),placeholder:"单位",required:""},null,8,["modelValue"])]),_:1}),l(e(o),{label:"生产车间"},{default:u(()=>[l(e(r),{modelValue:n.value.workshop,"onUpdate:modelValue":a[12]||(a[12]=d=>n.value.workshop=d),placeholder:"生产车间",required:""},null,8,["modelValue"])]),_:1}),l(e(o),{label:"负责人"},{default:u(()=>[l(e(r),{modelValue:n.value.person_in_charge,"onUpdate:modelValue":a[13]||(a[13]=d=>n.value.person_in_charge=d),placeholder:"负责人",required:""},null,8,["modelValue"])]),_:1}),l(e(o),{label:"设备"},{default:u(()=>[l(e(r),{modelValue:n.value.equipment,"onUpdate:modelValue":a[14]||(a[14]=d=>n.value.equipment=d),placeholder:"设备",required:""},null,8,["modelValue"])]),_:1}),l(e(o),{label:"计划状态"},{default:u(()=>[l(e(r),{modelValue:n.value.plan_status,"onUpdate:modelValue":a[15]||(a[15]=d=>n.value.plan_status=d),placeholder:"计划状态",required:""},null,8,["modelValue"])]),_:1}),l(e(o),{label:"优先级"},{default:u(()=>[l(e(r),{modelValue:n.value.priority,"onUpdate:modelValue":a[16]||(a[16]=d=>n.value.priority=d),placeholder:"优先级",required:""},null,8,["modelValue"])]),_:1}),l(e(o),{label:"备注"},{default:u(()=>[l(e(r),{modelValue:n.value.remarks,"onUpdate:modelValue":a[17]||(a[17]=d=>n.value.remarks=d),placeholder:"备注",required:""},null,8,["modelValue"])]),_:1}),l(e(o),{class:"form-actions"},{default:u(()=>[l(e(s),{type:"primary",onClick:y},{default:u(()=>a[37]||(a[37]=[V(" 添加计划 ")])),_:1})]),_:1})]),_:1}),v("div",N,[l(e(h),{data:i.value,style:{width:"auto",margin:"0 auto"},height:"400",border:""},{default:u(()=>[l(e(p),{prop:"plan_id",label:"计划编号",width:"150"}),l(e(p),{prop:"plan_name",label:"计划名称",width:"150"}),l(e(p),{prop:"product_name",label:"产品名称",width:"150"}),l(e(p),{prop:"product_id",label:"产品编号",width:"150"}),l(e(p),{prop:"plan_type",label:"计划类型",width:"150"}),l(e(p),{prop:"planned_start_date",label:"计划开始时间",width:"150"}),l(e(p),{prop:"planned_end_date",label:"计划结束时间",width:"150"}),l(e(p),{prop:"actual_start_date",label:"实际开始时间",width:"150"}),l(e(p),{prop:"actual_end_date",label:"实际结束时间",width:"150"}),l(e(p),{prop:"planned_quantity",label:"计划产量",width:"150"}),l(e(p),{prop:"actual_quantity",label:"实际产量",width:"150"}),l(e(p),{prop:"unit",label:"单位",width:"150"}),l(e(p),{prop:"workshop",label:"生产车间",width:"150"}),l(e(p),{prop:"person_in_charge",label:"负责人",width:"150"}),l(e(p),{prop:"equipment",label:"设备",width:"150"}),l(e(p),{prop:"plan_status",label:"计划状态",width:"150"}),l(e(p),{prop:"priority",label:"优先级",width:"150"}),l(e(p),{prop:"remarks",label:"备注",width:"150"}),l(e(p),{label:"操作",width:"150"},{default:u(d=>[l(e(s),{type:"primary",size:"small",onClick:B=>C(d.row)},{default:u(()=>a[38]||(a[38]=[V(" 编辑 ")])),_:2},1032,["onClick"]),l(e(s),{type:"danger",size:"small",onClick:B=>E(d.row.plan_id)},{default:u(()=>a[39]||(a[39]=[V(" 删除 ")])),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])])]),_:1}),t.value?(b(),q("div",$,[a[43]||(a[43]=v("h2",null,"编辑计划",-1)),l(e(U),{"label-width":"120px",onSubmit:k(w,["prevent"])},{default:u(()=>[l(e(o),{label:"计划编号"},{default:u(()=>[l(e(r),{modelValue:t.value.plan_id,"onUpdate:modelValue":a[18]||(a[18]=d=>t.value.plan_id=d),placeholder:"计划编号",required:""},null,8,["modelValue"])]),_:1}),l(e(o),{label:"计划名称"},{default:u(()=>[l(e(r),{modelValue:t.value.plan_name,"onUpdate:modelValue":a[19]||(a[19]=d=>t.value.plan_name=d),placeholder:"计划名称",required:""},null,8,["modelValue"])]),_:1}),l(e(o),{label:"产品名称"},{default:u(()=>[l(e(r),{modelValue:t.value.product_name,"onUpdate:modelValue":a[20]||(a[20]=d=>t.value.product_name=d),placeholder:"产品名称",required:""},null,8,["modelValue"])]),_:1}),l(e(o),{label:"产品编号"},{default:u(()=>[l(e(r),{modelValue:t.value.product_id,"onUpdate:modelValue":a[21]||(a[21]=d=>t.value.product_id=d),placeholder:"产品编号",required:""},null,8,["modelValue"])]),_:1}),l(e(o),{label:"计划类型"},{default:u(()=>[l(e(r),{modelValue:t.value.plan_type,"onUpdate:modelValue":a[22]||(a[22]=d=>t.value.plan_type=d),placeholder:"计划类型",required:""},null,8,["modelValue"])]),_:1}),l(e(o),{label:"计划开始时间"},{default:u(()=>[l(e(r),{modelValue:t.value.planned_start_date,"onUpdate:modelValue":a[23]||(a[23]=d=>t.value.planned_start_date=d),placeholder:"计划开始时间",required:""},null,8,["modelValue"])]),_:1}),l(e(o),{label:"计划结束时间"},{default:u(()=>[l(e(r),{modelValue:t.value.planned_end_date,"onUpdate:modelValue":a[24]||(a[24]=d=>t.value.planned_end_date=d),placeholder:"计划结束时间",required:""},null,8,["modelValue"])]),_:1}),l(e(o),{label:"实际开始时间"},{default:u(()=>[l(e(r),{modelValue:t.value.actual_start_date,"onUpdate:modelValue":a[25]||(a[25]=d=>t.value.actual_start_date=d),placeholder:"实际开始时间",required:""},null,8,["modelValue"])]),_:1}),l(e(o),{label:"实际结束时间"},{default:u(()=>[l(e(r),{modelValue:t.value.actual_end_date,"onUpdate:modelValue":a[26]||(a[26]=d=>t.value.actual_end_date=d),placeholder:"实际结束时间",required:""},null,8,["modelValue"])]),_:1}),l(e(o),{label:"计划产量"},{default:u(()=>[l(e(r),{modelValue:t.value.planned_quantity,"onUpdate:modelValue":a[27]||(a[27]=d=>t.value.planned_quantity=d),placeholder:"计划产量",required:""},null,8,["modelValue"])]),_:1}),l(e(o),{label:"实际产量"},{default:u(()=>[l(e(r),{modelValue:t.value.actual_quantity,"onUpdate:modelValue":a[28]||(a[28]=d=>t.value.actual_quantity=d),placeholder:"实际产量",required:""},null,8,["modelValue"])]),_:1}),l(e(o),{label:"单位"},{default:u(()=>[l(e(r),{modelValue:t.value.unit,"onUpdate:modelValue":a[29]||(a[29]=d=>t.value.unit=d),placeholder:"单位",required:""},null,8,["modelValue"])]),_:1}),l(e(o),{label:"生产车间"},{default:u(()=>[l(e(r),{modelValue:t.value.workshop,"onUpdate:modelValue":a[30]||(a[30]=d=>t.value.workshop=d),placeholder:"生产车间",required:""},null,8,["modelValue"])]),_:1}),l(e(o),{label:"负责人"},{default:u(()=>[l(e(r),{modelValue:t.value.person_in_charge,"onUpdate:modelValue":a[31]||(a[31]=d=>t.value.person_in_charge=d),placeholder:"负责人",required:""},null,8,["modelValue"])]),_:1}),l(e(o),{label:"设备"},{default:u(()=>[l(e(r),{modelValue:t.value.equipment,"onUpdate:modelValue":a[32]||(a[32]=d=>t.value.equipment=d),placeholder:"设备",required:""},null,8,["modelValue"])]),_:1}),l(e(o),{label:"计划状态"},{default:u(()=>[l(e(r),{modelValue:t.value.plan_status,"onUpdate:modelValue":a[33]||(a[33]=d=>t.value.plan_status=d),placeholder:"计划状态",required:""},null,8,["modelValue"])]),_:1}),l(e(o),{label:"优先级"},{default:u(()=>[l(e(r),{modelValue:t.value.priority,"onUpdate:modelValue":a[34]||(a[34]=d=>t.value.priority=d),placeholder:"优先级",required:""},null,8,["modelValue"])]),_:1}),l(e(o),{label:"备注"},{default:u(()=>[l(e(r),{modelValue:t.value.remarks,"onUpdate:modelValue":a[35]||(a[35]=d=>t.value.remarks=d),placeholder:"备注",required:""},null,8,["modelValue"])]),_:1}),l(e(o),{class:"form-actions"},{default:u(()=>[l(e(s),{type:"primary",onClick:w},{default:u(()=>a[41]||(a[41]=[V(" 更新计划 ")])),_:1}),l(e(s),{onClick:a[36]||(a[36]=d=>t.value=null)},{default:u(()=>a[42]||(a[42]=[V(" 取消 ")])),_:1})]),_:1})]),_:1})])):H("",!0)]))}}),A=g(z,[["__scopeId","data-v-08149d57"]]),Q=P({name:"ProductionPlanQueryView",__name:"production_plan_query",setup(x){return(i,n)=>(b(),q("div",null,[l(A)]))}}),R=g(Q,[["__scopeId","data-v-df729486"]]);export{R as default};
