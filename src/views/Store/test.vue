<script setup lang="ts" src = "http://cdn.datatables.net/1.13.4/js/jquery.dataTables.min.js">
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import router from "@/router";
import { useShop } from "@/stores/shop";
let role = ref("");

let notification = useShop;

onMounted(() => {
    role = localStorage.getItem('role');
    notification.dispatch('getNotification');
})

</script>
<!-- <link rel="stylesheet" href="http://cdn.datatables.net/1.13.4/css/jquery.dataTables.min.css"></link> -->
<!-- <script src = "http://cdn.datatables.net/1.13.4/js/jquery.dataTables.min.js"></script> -->
<template>
    
    <div class="box">
        <div class="titel" >Purchase History</div>
        <div class="box-table">
            <table class="row">
                <tr class="row header">
                    <th class="col-2">No.</th>
                    <th class="col-2">Cluster</th>
                    <th class="col-3">Item name</th>
                    <th class="col-2">Price</th>
                    <th class="col-3">Date</th>
                </tr>
                <tr class="row content" v-for="(item, index) in notification.state.notificationList" :key="item._id">
                    <!-- @click="save()" -->
                    <td class="col-2" >{{ index+1 }}</td>
                    <td class="col-2">{{ item.cluster }}</td>
                    <td class="col-3">{{ item.item_name}}</td>
                    <td class="col-2">{{ item.point }}</td>
                    <td class="col-3">{{ item.date }}</td>
                    <!-- <td  class="btn-grad col-2" type="button"><i class="bi bi-cart3 icon-shop" @click="buyItem(item._id)"></i>Buy</td> -->
                </tr>
                <!-- <tr class="row content">
                    <td class="col-2">1</td>
                    <td class="col-3">Cluster 8</td>
                    <td class="col-3" style="text-align:left;">Music</td>
                    <td class="col-2">50</td>
                    <td class="col-2">11/04/2023</td>
                </tr>
                <tr class="row content">
                    <td class="col-2">2</td>
                    <td class="col-3">Cluster 2</td>
                    <td class="col-3" style="text-align:left;">Forcing different cluster</td>
                    <td class="col-2">300</td>
                    <td class="col-2">11/04/2023</td>
                </tr> -->
                
            </table>
        </div>
    </div>
</template>

<style scoped>
.box{
    border: 2px solid #0052D4;
    background-color: #ffff;
    border-radius: 25px;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 4rem;
    padding-bottom: 4rem;
    position: relative;
    align-items: center;
}

.titel{
    color: #0052D4;
    font-size: 50px;
    font-family: 'Kanit';
    display: flex;
    justify-content: center;
    font-weight: bold;
}

.box-table{
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    position: relative;
}
.header{
    background: #0052D4;
    color: #ffff;
    height: 40px;
    align-content: center;
    /* padding-left: 3rem; */
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    font-size: 18px;
    font-family: 'Kanit';
    font-weight: bold;
    text-align: center;
    position: relative;
}

table {
  width: 100%;
}

.content{
    /* padding-left: 3rem; */
    border: 2px solid #D1D1D6;
    height: 64px;
    align-content: center;
    text-align: center;
    font-size: 16px;
    font-family: 'Kanit';
    position: relative;
}

</style>