import{W as u,r as p,j as e,a as x,d as f}from"./app-Cur83iP_.js";import{T as m,I as o}from"./TextInput-BsR0hivy.js";import{I as i}from"./InputLabel-CxfyiUNL.js";import{P as j}from"./PrimaryButton-BgNxTXZ4.js";import{N as g}from"./NavbarComponent-DQl9UAq6.js";import{B as w}from"./BottomNavbar-BZRr9pYN.js";function _(){const{data:a,setData:r,post:n,processing:l,errors:t,reset:d}=u({name:"",email:"",password:"",password_confirmation:""});p.useEffect(()=>()=>{d("password","password_confirmation")},[]);const c=s=>{s.preventDefault(),n(route("register"))};return e.jsx("section",{className:"my-0 mx-auto min-h-full max-w-screen-sm",children:e.jsxs("div",{className:"my-0 mx-auto min-h-screen max-w-480 overflow-x-hidden bg-white pb-[66px]",children:[e.jsx("div",{children:e.jsx(g,{})}),e.jsxs("div",{children:[e.jsx(x,{title:"Register"}),e.jsx("div",{className:"heading mt-14 flex align-middle items-center justify-center",children:e.jsx("img",{src:"https://donasi-nusantara.my.id/img/logo.jpg",alt:"logo"})}),e.jsxs("form",{onSubmit:c,className:"m-8 mt-16",children:[e.jsxs("div",{children:[e.jsx(i,{htmlFor:"name",value:"Name"}),e.jsx(m,{id:"name",name:"name",value:a.name,className:"mt-1 block w-full",autoComplete:"name",isFocused:!0,onChange:s=>r("name",s.target.value),required:!0}),e.jsx(o,{message:t.name,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(i,{htmlFor:"email",value:"Email"}),e.jsx(m,{id:"email",type:"email",name:"email",value:a.email,className:"mt-1 block w-full",autoComplete:"username",onChange:s=>r("email",s.target.value),required:!0}),e.jsx(o,{message:t.email,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(i,{htmlFor:"password",value:"Password"}),e.jsx(m,{id:"password",type:"password",name:"password",value:a.password,className:"mt-1 block w-full",autoComplete:"new-password",onChange:s=>r("password",s.target.value),required:!0}),e.jsx(o,{message:t.password,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(i,{htmlFor:"password_confirmation",value:"Confirm Password"}),e.jsx(m,{id:"password_confirmation",type:"password",name:"password_confirmation",value:a.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",onChange:s=>r("password_confirmation",s.target.value),required:!0}),e.jsx(o,{message:t.password_confirmation,className:"mt-2"})]}),e.jsxs("div",{className:"flex items-center justify-center mt-4",children:[e.jsx(f,{href:route("login"),className:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Already registered?"}),e.jsx(j,{className:"ms-4",disabled:l,children:"Register"})]})]})]}),e.jsx("div",{className:"btm-center",children:e.jsx(w,{})})]})})}export{_ as default};
