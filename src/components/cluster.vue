<script setup lang="ts">

import { onMounted } from "@vue/runtime-core";
import { useCluster } from "@/stores/clusters";
const cluster = useCluster

// Get the current URL path
const path = window.location.pathname;
// Split the path into an array of segments
const segments = path.split('/');
// Find the index of the "cluster" segment
const clusterIndex = segments.findIndex(segment => segment === 'cluster');
// Get the clusterId parameter from the next segment
const clusterId = segments[clusterIndex + 1];
// Log the value of the clusterId parameter to the console
console.log(clusterId);

onMounted(() => {
    cluster.dispatch("getClusterById", {clusterId: clusterId});
});



</script>
<template>
    <div class="box-cluster">
        <img class="icon-cluster" v-bind:src="'http://localhost:3000/' + cluster.state.picture" alt="">
            <div class="text">
                <div class="name-cluster-coop">{{ cluster.state.clusterName }} x {{ cluster.state.coop }}</div>
                <div class="name-system">ระบบ: {{ cluster.state.systemName }}</div>
            </div>
    </div>
</template>



<style scoped>

.text{
    position: absolute;
    left: 50%;
    top: 30%;
}
.name-cluster-coop{
    /* Cluster 7 x IV Soft */
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 39px;
    /* identical to box height */


    color: #000000;
}

.name-system{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 39px;
    /* identical to box height */
    /* purple2 */
    color: #7B4397;
}

.icon-cluster{
    width: 180px;
    height: 180px;
    left: 20%;
    position: absolute;
    top: 15%;
}
.box-cluster{
    /* Rectangle 7 */
    position: relative;
    width: 1100px;
    height: 250px;
    /* left: 392px;
    top: 56px; */

    /* white */

    background: #FFFFFF;
    box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    overflow: hidden;
}
</style>