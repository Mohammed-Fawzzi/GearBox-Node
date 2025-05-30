import{a as b,r as t,j as e,y as i}from"./index-DoYqLEuC.js";import{a as d}from"./api-BDs2Ot40.js";import{u as y}from"./formik.esm-DO93-7Li.js";import{H as w}from"./Helmet-lAKtP1rb.js";function S(){let p=b();const[m,c]=t.useState(!1),[r,x]=t.useState([]),[o,g]=t.useState([]);async function u(){try{c(!0);const{data:a}=await d.get("/api/v1/spaces");x(a.data.spaces),c(!1)}catch{c(!1),i.error("Failed to fetch spaces")}}async function f(){try{c(!0);const{data:a}=await d.get("/api/v1/technology");g(a.data.technology),c(!1)}catch{c(!1),i.error("Failed to fetch technology data")}}async function j(a){try{const n=localStorage.getItem("adminToken");c(!0);const l=new FormData;l.append("name",a.name),l.append("description",a.description),l.append("price",a.price),l.append("space",a.space),l.append("imageCover",a.imageCover),a.Technology.forEach(v=>l.append("Technology",v));const{data:h}=await d.post("/api/v1/packages",l,{headers:{Authorization:`Bearer ${n}`,"Content-Type":"multipart/form-data"}});i.success("Package created successfully!"),p("/admin-dashboard"),c(!1)}catch{c(!1),i.error("Failed to create package, please try again!")}}t.useEffect(()=>{u(),f()},[]);const s=y({initialValues:{name:"",description:"",price:"",space:"",Technology:[]},onSubmit:j}),N=a=>{const{value:n,checked:l}=a.target;l?s.setFieldValue("Technology",[...s.values.Technology,n]):s.setFieldValue("Technology",s.values.Technology.filter(h=>h!==n))};return e.jsxs(e.Fragment,{children:[e.jsx(w,{children:e.jsx("title",{children:"Packages"})}),e.jsx("section",{className:"admin-packages my-5 pt-5",children:e.jsx("div",{className:"container mt-5 pt-3",children:e.jsx("div",{className:"row",children:e.jsxs("div",{className:"col-md-12",children:[e.jsx("h4",{className:"fw-semibold text-danger text-center pb-3",children:"Create New Package"}),e.jsxs("form",{onSubmit:s.handleSubmit,className:"p-4 bg-white shadow-sm rounded",children:[e.jsxs("div",{className:"form-floating mb-3",children:[e.jsx("input",{type:"text",id:"name",placeholder:"Enter package name",className:"form-control",value:s.values.name,onChange:s.handleChange}),e.jsx("label",{htmlFor:"name",children:"Package Name"})]}),e.jsxs("div",{className:"form-floating mb-3",children:[e.jsx("textarea",{id:"description",placeholder:"Enter description",className:"form-control",value:s.values.description,onChange:s.handleChange}),e.jsx("label",{htmlFor:"description",children:"Description"})]}),e.jsxs("div",{className:"form-floating mb-3",children:[e.jsx("input",{type:"number",id:"price",placeholder:"Enter price",className:"form-control",value:s.values.price,onChange:s.handleChange}),e.jsx("label",{htmlFor:"price",children:"Price"})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{htmlFor:"imageCover",className:"form-label fw-medium",children:"Upload Image"}),e.jsx("input",{type:"file",id:"imageCover",name:"imageCover",accept:"image/*",className:"form-control",onChange:a=>s.setFieldValue("imageCover",a.currentTarget.files[0])})]}),e.jsxs("div",{className:"form-floating mb-3",children:[e.jsxs("select",{id:"space",className:"form-control",value:s.values.space,onChange:s.handleChange,children:[e.jsx("option",{value:"",children:"Select Space"}),r.map(a=>e.jsx("option",{value:a._id,children:a.name},a._id))]}),e.jsx("label",{htmlFor:"space",children:"Space"})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{htmlFor:"Technology",className:"form-label fw-medium mb-2",children:"Select Technologies"}),e.jsx("div",{className:"d-flex flex-wrap gap-3",children:o.map(a=>e.jsxs("div",{className:"form-check",children:[e.jsx("input",{className:"form-check-input",type:"checkbox",id:`tech-${a._id}`,value:a._id,checked:s.values.Technology.includes(a._id),onChange:N}),e.jsx("label",{className:"form-check-label",htmlFor:`tech-${a._id}`,children:a.name})]},a._id))})]}),e.jsx("button",{type:"submit",className:"btn btn-danger rounded-0 text-center mx-auto w-100",children:m?"Creating...":"Create Package"})]})]})})})}),e.jsx("section",{className:"admin-packages",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-md-12",children:[e.jsx("h4",{className:"fw-semibold text-danger text-center pb-3",children:"Spaces"}),m?e.jsx("div",{className:"text-center",children:e.jsx("div",{className:"spinner-border text-danger",role:"status",children:e.jsx("span",{className:"visually-hidden",children:"Loading..."})})}):r.length===0?e.jsx("p",{className:"text-center text-muted",children:"No spaces found"}):e.jsx("div",{className:"row g-4",children:r.map(a=>e.jsx("div",{className:"col-12 col-md-4",children:e.jsxs("div",{className:"space-card p-4 bg-white shadow-sm rounded",children:[e.jsxs("h5",{className:"fw-semibold text-danger text-center pb-2",children:["[ ",a.name," ]"]}),e.jsxs("p",{className:"mb-4 text-muted",children:[e.jsx("strong",{children:"📝 Description:"})," ",a.description]})]})},a._id))})]}),e.jsxs("div",{className:"col-md-12 mt-5",children:[e.jsx("h4",{className:"fw-semibold text-danger text-center pb-3",children:"Technologies"}),o.length===0?e.jsx("p",{className:"text-center text-muted",children:"No technologies found"}):e.jsx("div",{className:"row g-4",children:o.map(a=>e.jsx("div",{className:"col-12 col-md-4",children:e.jsxs("div",{className:"space-card p-4 bg-white shadow-sm rounded",children:[e.jsx("h5",{className:"fw-semibold text-danger text-center pb-2",children:a.name}),e.jsxs("p",{className:"mb-4 text-muted",children:[e.jsx("strong",{children:"🔧 Description:"})," ",a.description]})]})},a._id))})]})]})})})]})}export{S as default};
