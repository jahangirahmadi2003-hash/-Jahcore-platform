import { auth } from "./firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

/* 🔐 SECURITY GUARD */
export function protectPage(){

onAuthStateChanged(auth,(user)=>{

if(!user){
window.location.href="login.html";
}

});

}
