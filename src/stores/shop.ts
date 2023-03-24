import { defineStore } from "pinia";
import axios from "axios";
import qs from "qs";
import router from "@/router";
import Swal from "sweetalert2";
import Vuex from 'vuex';


export const useShop =  new Vuex.Store({
  state: {
    shopList: [],
    notificationList: [],
    shop_id: "",
    clusters_id: "",
  },
  mutations: {
    updateShopList(state, payload) {
        state.shopList = payload
      }
  },
  actions: {
    async getShops() {
      try {

        let task = await axios.get("http://localhost:3000/shop/", {
          headers: {
            "Content-Type": "application/json",
            // Authorization: this.state.access_token,
          },
        });
        if(task.status === 200){
            this.state.shopList = task.data.shops;
            console.log(this.state.shopList);
        }
      } catch (e) {
        // this.state.isAuthen = false;
        // Swal.fire("Failed", "Failed to get tasks again later.", "error");
      }
    },
    async getNotification() {
      try {

        let task = await axios.get("http://localhost:3000/shop/notification", {
          headers: {
            "Content-Type": "application/json",
            // Authorization: this.state.access_token,
          },
        });
        if(task.status === 200){
            // console.log("asdasd");
            this.state.notificationList = task.data.notification;
            console.log(this.state.notificationList);
        }
      } catch (e) {
        // this.state.isAuthen = false;
        // Swal.fire("Failed", "Failed to get tasks again later.", "error");
      }
    },
    async addNotification() {
      try {
        // console.log(shopId);
        let task = await axios.post('http://localhost:3000/shop/buy',JSON.stringify({
          shop_id: this.state.shop_id,
          cluster_id: this.state.clusters_id,
        }), {
          headers: {
            "Content-Type": "application/json",
            // Authorization: this.state.access_token,
          },
        });
        if(task.status === 200){
            this.state.shopList = task.data.shops;
            console.log(this.state.shopList);
        }
      } catch (e) {
        // this.state.isAuthen = false;
        // Swal.fire("Failed", "Failed to get tasks again later.", "error");
      }
    },
    

}
})