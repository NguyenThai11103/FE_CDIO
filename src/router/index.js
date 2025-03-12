import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save
import checkLoginNhanVien from "./checkLoginNhanVien";

const routes = [
    {
        path : '/',
        component: ()=>import('../components/KhachHang/TrangChu/index.vue'),
        meta : {layout : 'client'}
    },
    {
        path : '/admin/quan-an',
        component: ()=>import('../components/Admin/QuanAn/index.vue'),
        beforeEnter: checkLoginNhanVien

    },
    {
      path: "/admin/profile",
      component: () => import("../components/Admin/Profile/index.vue"),
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
    // khach hang
    {
        path : '/khach-hang/dang-nhap',
        component: ()=>import('../components/KhachHang/DangNhap/index.vue'),
        meta : {layout : 'blank' }
    },
    {
      path: "/khach-hang/dang-ky",
      component: () => import("../components/KhachHang/DangKi/index.vue"),
      meta: { layout: "blank" },
    },
    {
        path: "/mon-an",
        component: () => import("../components/KhachHang/MonAn/index.vue"),
        meta : {layout : 'client'}
      },
      {
        path: "/quan-an",
        component: () => import("../components/KhachHang/QuanAn/index.vue"),
        meta: { layout: "client" },
      },
      {
        path: "/khach-hang/tao-don-hang",
        component: () => import("../components/KhachHang/TaoDonHang/index.vue"),
        meta: { layout: "client" },
      },
      {
        path: "/khach-hang/lich-su-dat",
        component: () => import("../components/KhachHang/LichSuDat/index.vue"),
        meta: { layout: "client" },
      },
      {
        path: "/khach-hang/profile",
        component: () => import("../components/KhachHang/Profile/index.vue"),
        meta: { layout: "client" },
      },
      {
        path: "/khach-hang/don-hang",
        component: () => import("../components/KhachHang/DonHang/index.vue"),
        meta: { layout: "client" },
      },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router