<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import router from "@/router";
import { useShop } from "@/stores/shop";
let role = ref("");

let shopStore = useShop;

onMounted(() => {
    role = localStorage.getItem('role');
    shopStore.dispatch('getShops');
})

let shop_id = ref("");
let clusters_id = ref("");


function save(){
    console.log(role);
    if(role == "admin"){
        router.push('/admin/store/add');
    }else{
        router.push('/store/add');
    }
}
function buyItem(o_id: string){
    
    useShop.state.shop_id = o_id;
    useShop.state.clusters_id = "64189a3d9979072da0be5249";
    // shopStore.dispatch('buyItem', o_id);
    console.log(o_id);
    useShop.dispatch("addNotification");
}
</script>

<template>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">

    <div class="box">
    <div class="font">Store</div>
    <div class="box-table">
        <table class="row">
            <tr class="row" style="background-color: #0052D4; color: rgb(255, 255, 255); " >
                <th class="col-3">No.</th>
                <th class="col-4">Name</th>
                <th class="col-3">Price</th>
                <th class="col-2">Action</th>
            </tr>
            <tr class="row" v-for="(item, index) in shopStore.state.shopList" :key="item._id">
                <!-- @click="save()" -->
                <td class="col-3" >{{ index+1 }}</td>
                <td class="col-4">{{ item.name }}</td>
                <td class="col-3">{{ item.point }}</td>
                <td  class="btn-grad col-2" type="button"><i class="bi bi-cart3 icon-shop" @click="buyItem(item._id)"></i>Buy</td>
            </tr>
        </table>
    </div>
    </div>

</template>

<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css");
.invi-box{
    height: 60px;
    
}
.box{
    height: auto;
    padding-top: 30px;
    padding-left: 50px;
    margin: 20px;
    padding-bottom: 60px;
    min-height: 100px;
    max-height: 1000px;
    overflow: auto;
    border-style: solid;
    border-width: 2px;
    background-clip: padding-box;
    border-color: #0052D4;
    background-color: rgb(255, 255, 255);
    border-radius: 15px;
    flex-direction: column-reverse;
    /* display: flex; */
    justify-content: center;
    padding-right: 50px;
    min-height: 600px;
            
    }
.font{
    color: #0052D4;
    font-size: 50px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 40%;
    font-family: 'Kanit';
    font-style: normal;
    font-weight: 700;
    line-height: 60px;
}
table {
  border-collapse: collapse;
  width: 100%;
  padding: center;
}

th {
  padding: 8px;
  text-align: left ;
  border-bottom: 1px solid #ddd;
  
  align-content: center;

  }
td {
  padding: 8px;
  text-align: left ;
  border-bottom: 1px solid #ddd;
  /* border-radius:10px ; */
  align-content: center;
  margin-top: 10px;
  }
  tr{
    border: 1px solid #ddd;
    border-radius:5px ;
  }
  .box-table{
    padding-left: 50px;
    padding-right: 50px;
    padding-top:50px ;
  }


.store-box{
    position: relative;
    text-align: center;
    padding: 48px 24px;
    width: 1100px;
    min-height: 1000px;

    /* white */

    background: #FFFFFF;
    box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
}
         
.btn-grad {
    background-image: linear-gradient(to right, #0052D4 0%, #6ECEF3  100%);
    margin: 10px;
    /* padding: 15px 45px; */
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;            
    box-shadow: 0 0 20px #eee;
    border-radius: 25px;
    width: 100px;
    height: 40px;
    display: flex;
    justify-self: left;
    align-items: center;
        
    }

.btn-grad:hover {
            background-position: right center; /* change the direction of the change here */
            color: #fff;
            text-decoration: none;
        
}
.icon-shop{
    font-size: 24px;
    padding-right: 10px;
    margin-left: 5px;
    margin-bottom: 10px;

}
         
</style>