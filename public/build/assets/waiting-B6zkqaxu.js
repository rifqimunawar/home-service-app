import{j as e,a as s}from"./app-BEtzUP9J.js";import{B as r}from"./BottomNavbar-DLGDIbdl.js";import{N as t}from"./NavbarComponent-CzayJzYa.js";function m({withdraw:a,campaign:n}){return e.jsx("section",{className:"my-0 mx-auto min-h-full max-w-screen-sm",children:e.jsxs("div",{className:"my-0 mx-auto min-h-screen max-w-480 overflow-x-hidden  pb-[66px]",children:[e.jsx(s,{title:"Galang Dana"}),e.jsx("div",{children:e.jsx(t,{})}),e.jsxs("div",{className:"p-4 sm:p-8 shadow lg:rounded-lg m-3",children:[e.jsx("img",{src:"https://static.vecteezy.com/system/resources/previews/021/286/391/non_2x/24-hours-sign-on-transparent-background-free-png.png"}),e.jsxs("p",{children:["Anda telah melakukan penarikan hasil donasi dari kampanye ",e.jsx("strong",{children:n.title})," sebesar"," ",e.jsx("strong",{children:Number(a.nominal).toLocaleString()})," ","pada"," ",e.jsx("strong",{children:new Date(a.created_at).toLocaleString()}),"."]}),e.jsxs("p",{children:["Kami akan mengirimkan dana ke rekening"," ",e.jsx("strong",{children:a.norek})," di bank"," ",e.jsx("strong",{children:a.bank}),"."]}),e.jsxs("p",{children:["Pengiriman akan dilakukan paling lambat 24 jam setelah tanggal"," ",e.jsx("strong",{children:new Date(new Date(a.created_at).getTime()+24*60*60*1e3).toLocaleString()}),"."]})]}),e.jsx("div",{className:"btm-center",children:e.jsx(r,{})})]})})}export{m as default};
