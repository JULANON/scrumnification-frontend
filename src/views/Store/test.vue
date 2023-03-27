<div class="d-flex justify-content-between">

    <div class="p-2 flex-fill bd-highlight logo-index" >
      <img id="icon" src="../assets/icon/Pink_Elegant_Lash_Makeup_Brow_artist_Beauty_Logo__1_-removebg-preview.png">
    </div>

  <div class="p-2 flex-fill bd-highlight center">
    <div class="login-page">
      <div class="form">
        <!-- <button @click="login()">login</button> -->
        <!-- try this! -->
        <br>
        <!-- username: admin, password: root
        username:coachc0, password: root
        username: leaderc0, password: root -->
        <form class="register-form">
          <input type="text" placeholder="name"/>
          <input type="password" placeholder="password"/>
          <input type="text" placeholder="email address"/>

          <button>create</button>
        </form>
        <form class="login-form">
          <input type="text" placeholder="username" v-model="username"/>
          <input type="password" placeholder="password" v-model="password"/>

          <router-link to="/home">
            <!-- <button @click="loginAdmin()">login Admin</button>
            <button @click="loginLeader()">login Leader</button>
            <button @click="loginCoach()">login Coach</button> -->
            <button @click="login()">login</button>
          </router-link>
          <!-- <p class="message">ขี้เกียจ login? <router-link to="/home" >Click me</router-link></p> -->

        </form>
      </div>
    </div>
    </div>
  </div>