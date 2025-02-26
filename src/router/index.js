import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save
import checkLoginNhanVien from "./checkLoginNhanVien";

const routes = [
    {
        path : '/',
        component: ()=>import('../layout/wrapper/Admin/index.vue')
    },
    {
        path : '/admin/quan-an',
        component: ()=>import('../components/Admin/QuanAn/index.vue'),
        beforeEnter: checkLoginNhanVien

    },
    {
        path : '/admin/shipper',
        component: ()=>import('../components/Admin/Shipper/index.vue'),
        beforeEnter: checkLoginNhanVien
    },
    {
        path : '/admin/voucher',
        component: ()=>import('../components/Admin/Voucher/index.vue'),
        beforeEnter: checkLoginNhanVien

    },
    {
        path : '/admin/don-hang',
        component: ()=>import('../components/Admin/Donhang/index.vue'),
        beforeEnter: checkLoginNhanVien

    },
    {
        path : '/admin/dang-nhap',
        component: ()=>import('../components/Admin/DangNhap/index.vue'),
        meta : {layout : 'blank' }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router