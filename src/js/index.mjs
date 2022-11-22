import { regFormListener } from "./handlers/register.mjs";
import { loginFormListener } from "./handlers/login.mjs";



const path = location.pathname;

if (path === '/pages/profile/register/') {
    regFormListener();
} else if (path === '/index.html') {
    loginFormListener();
}