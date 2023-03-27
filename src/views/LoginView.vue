<script setup lang="ts">

import { ref } from "vue";
import { useAccount } from "@/stores/accounts";
import { onMounted } from "vue";
import router from "@/router";

onMounted(() => {
  let authen = localStorage.getItem('isAuthen');
  if(authen === "true"){
    router.push('/home');
  }
});


let username = ref("");
let password = ref("");
let email = ref("");





// import { useUser } from "@/stores/user";

// let username = ref("");
// let password = ref("");
// let checkRememberMe = ref(false);

// const user = useUser;
// function check() {
//   user.state.username = username.value;
//   user.state.password = password.value;

//   user.dispatch('login');
// }

function loginAdmin(){
  localStorage.setItem("role", "admin");
}
function loginCoach(){
  localStorage.setItem("role", "coach");
}
function loginLeader(){
  localStorage.setItem("role", "leader");
}
function login(){
  useAccount.state.username = username.value;
  useAccount.state.password = password.value;

  console.log(username.value);
  console.log(password.value);
  useAccount.dispatch("login");
}
</script>



<template>

<div>
  <div class="split left">
  <div class="centered">
      <img id="icon" src="../assets/icon/Pink_Elegant_Lash_Makeup_Brow_artist_Beauty_Logo__1_-removebg-preview.png">
  </div>
</div>

<div class="split2 right">
  <div class="centered2">
    <div>
        <form class="login-form">
          <div class="fontColor" style="font-size: 600%; text-align: center;">Login</div>
          <div style="font-weight: bold; margin-top: 10%;">Username:</div>
          <input type="text" class="boxInputText" placeholder="username" v-model="username"/><br>
          <div style="font-weight: bold; margin-top: 20%;">Password:</div>
          <input type="password" class="boxInputText" placeholder="password" v-model="password"/><br>
          <router-link to="/home">
              <!-- <button @click="loginAdmin()">login Admin</button>
              <button @click="loginLeader()">login Leader</button>
              <button @click="loginCoach()">login Coach</button> -->
            <button class="buttomColorLogin" style="margin-top: 20%;" @click="login()"><div style="color: white;">login</div></button>
          </router-link>
              <!-- <p class="message">ขี้เกียจ login? <router-link to="/home" >Click me</router-link></p> -->
        </form>
    </div>
  </div>
</div>
</div>





  <!-- <div class="login-page">
  <div class="form">
    <img class="mb-4" src="@/assets/logo.svg" alt="" width="72" height="57" />
      <h1 class="h3 mb-3 fw-normal">Please login</h1>
    <form class="register-form">
      <button>create</button>
    </form>
    <form class="login-form">
      <input  type="text"
          class="form-control"
          id="floatingInput"
          
          placeholder="name@example.com"/>
      <input  type="password"
          class="form-control"
          id="floatingPassword"
          placeholder="Password"/>
      <button type="button">login</button>
    </form>
  </div>
</div> -->
</template>

<style scoped>

.split {
  height: 100%;
  width: 45%;
  position: fixed;
  z-index: 1;
  top: 0;
  overflow-x: hidden;
  padding-top: 20px;
}

.split2 {
  height: 100%;
  width: 55%;
  position: fixed;
  z-index: 1;
  top: 0;
  overflow-x: hidden;
  padding-top: 20px;
}

.left {
  left: 0;
  background: rgb(62,128,233);
  background: linear-gradient(45deg, rgba(62,128,233,1) 0%, rgba(156,236,251,1) 100%);
}

.right {
  right: 0;
  background-color: rgb(255, 255, 255);
}

.centered {
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
.centered2 {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
}

.centered img {
  width: 150px;
  border-radius: 50%;
}
.center{
  display: block;
  margin-left: auto;
  margin-right: auto;
}

#icon{
  display: block;
  width: 140%;
  margin-left: -20%;
  margin-right: auto;
  margin-top: 80%;
  /* width: 50%; */
}
.logo-index{
  /* Rectangle 5 */
min-height: 100vh;
width: 663px;
height: 100%;
left: 0px;
top: 0px;

/* LoginPage */

background: linear-gradient(201.34deg, rgba(156, 236, 251, 0.712) 0%, rgba(0, 82, 212, 0.68) 100%);
backdrop-filter: blur(150px);
/* Note: backdrop-filter has minimal browser support */
}

.fontColor{
  font-size: 72px;
  background: -webkit-linear-gradient(rgba(156,236,251,1) 0%,rgb(0,82,212) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.boxInputText{
  border-radius: 10px; 
  width: 100%;
  border-color: #5151F2;
}

.buttomColorLogin{
  font-size: 30px;
  width: 100%;
  border-radius: 10px;
  border-color: rgb(145,234,228);
  border-color: linear-gradient(90deg, rgba(145,234,228,1) 0%, rgba(101,199,247,1) 50%, rgba(0,82,212,1) 100%);
  background: rgb(145,234,228);
  background: linear-gradient(90deg, rgba(145,234,228,1) 0%, rgba(101,199,247,1) 50%, rgba(0,82,212,1) 100%);
}

@import url(https://fonts.googleapis.com/css?family=Roboto:300);

.login-page {
  width: 360px;
  padding: 8% 0 0;
  margin: auto;
}
.form {
  position: relative;
  z-index: 1;
  background: #FFFFFF;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
.form input {
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}
.form button {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #4CAF50;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #FFFFFF;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}
.form button:hover,.form button:active,.form button:focus {
  background: #43A047;
}
.form .message {
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 12px;
}
.form .message a {
  color: #4CAF50;
  text-decoration: none;
}
.form .register-form {
  display: none;
}
.container {
  position: relative;
  z-index: 1;
  max-width: 300px;
  margin: 0 auto;
}
.container:before, .container:after {
  content: "";
  display: block;
  clear: both;
}
.container .info {
  margin: 50px auto;
  text-align: center;
}
.container .info h1 {
  margin: 0 0 15px;
  padding: 0;
  font-size: 36px;
  font-weight: 300;
  color: #1a1a1a;
}
.container .info span {
  color: #4d4d4d;
  font-size: 12px;
}
.container .info span a {
  color: #000000;
  text-decoration: none;
}
.container .info span .fa {
  color: #EF3B3A;
}
body {
  background: #76b852; /* fallback for old browsers */
  background: rgb(141,194,111);
  background: linear-gradient(90deg, rgba(141,194,111,1) 0%, rgba(118,184,82,1) 50%);
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;      
}
</style>
