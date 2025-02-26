<template>
    <div class="wrapper">
		<div class="header-wrapper">
            <TopShipper></TopShipper>
            <MenuShipper></MenuShipper>
		</div>
		<div class="page-wrapper">
			<div class="page-content">
                <router-view> </router-view>
            </div>
		</div>
        <BotShipper></BotShipper>
	</div>
</template>
<script>
import TopShipper from "../../components/Shipper/TopShipper.vue";
import BotShipper from "../../components/Shipper/BotShipper.vue";
import MenuShipper from "../../components/Shipper/MenuShipper.vue";
import "../../../assets/assets_Rocker/js/bootstrap.bundle.min.js";
import "../../../assets/assets_Rocker/js/jquery.min.js";
import "../../../assets/assets_Rocker/plugins/simplebar/js/simplebar.min.js";
import "../../../assets/assets_Rocker/plugins/metismenu/js/metisMenu.min.js";
import "../../../assets/assets_Rocker/plugins/perfect-scrollbar/js/perfect-scrollbar.js";
import "../../../assets/assets_Rocker/js/index.js";
import "../../../assets/assets_Rocker/js/app.js";
import "../../../assets/assets_Rocker/js/pace.min.js";
export default {
    name        :   "app",
    components  :   {
        TopShipper, MenuShipper, BotShipper
    }
}
</script>
<style>
@import "../../../assets/assets_Rocker/plugins/simplebar/css/simplebar.css";
@import "../../../assets/assets_Rocker/plugins/perfect-scrollbar/css/perfect-scrollbar.css";
@import "../../../assets/assets_Rocker/plugins/metismenu/css/metisMenu.min.css";
@import "../../../assets/assets_Rocker/css/pace.min.css";
@import "../../../assets/assets_Rocker/css/bootstrap.min.css";
@import "../../../assets/assets_Rocker/css/bootstrap-extended.css";
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap");
@import "../../../assets/assets_Rocker/css/app.css";
@import "../../../assets/assets_Rocker/css/icons.css";
@import "../../../assets/assets_Rocker/css/dark-theme.css";
@import "../../../assets/assets_Rocker/css/semi-dark.css";
@import "../../../assets/assets_Rocker/css/header-colors.css";
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css");
</style>