import{j as e,r as c,d as h}from"./app-CMYoofco.js";function f({campaigns:s}){return e.jsx("section",{className:"m-3",children:e.jsx("section",{className:"",style:{overflowH:"auto",width:"100%"},children:e.jsx("div",{children:s.map(t=>e.jsx(j,{campaign:t},t.id))})})})}function j({campaign:s}){const[t,o]=c.useState(""),[a,i]=c.useState(""),d=Number(s.collected).toLocaleString("id-ID");return c.useEffect(()=>{(()=>{const l=new Date(s.time),n=new Date,r=l.getTime()-n.getTime(),u=Math.ceil(r/(1e3*60*60*24));o(u)})()},[s]),c.useEffect(()=>{(()=>{const l=s.collected,n=s.price,r=l/n*100;i(r)})()},[s]),e.jsx(h,{href:`/donasi/campaign/${s.id}/detail`,children:e.jsxs("div",{className:"verCampaign flex mb-3",style:{flex:"0 0 auto"},children:[e.jsx("img",{src:s.img,style:{width:"200px",height:"100px",objectFit:"cover"}}),e.jsxs("div",{style:{width:"100%"},children:[e.jsx("p",{children:s.title}),e.jsx("progress",{className:"progress progress-info",style:{width:"100%"},value:a,max:"100"}),e.jsxs("div",{className:"flex justify-between",children:[e.jsxs("p",{children:["Terkumpul"," ",e.jsx("span",{className:"",children:d})]}),e.jsxs("p",{children:[t>0?t:0," ",e.jsx("span",{className:"",children:t===1?"hari":"hari lagi"})]})]})]})]})})}export{f as V};