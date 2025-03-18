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
      // quán ăn
      {
        path: "/quan-an/dang-ky",
        component: () => import("../components/QuanAn/DangKy/index.vue"),
        meta: { layout: "blank" },
      },
      {
        path: "/quan-an/dang-nhap",
        component: () => import("../components/QuanAn/DangNhap/index.vue"),
        meta: { layout: "blank" },
      },
      {
        path: "/quan-an/profile",
        component: () => import("../components/QuanAn/Profile/index.vue"),
        meta: { layout: "quan_an" },
      },
      {
        path: "/quan-an/loai-mon-an",
        component: () => import("../components/QuanAn/LoaiMonAn/index.vue"),
        meta: { layout: "quan_an" },
      },
      {
        path: "/quan-an/thong-ke/doanh-thu",
        component: () => import("../components/QuanAn/ThongKe/DoanhThu/index.vue"),
        meta: { layout: "quan_an" },
      },
      {
        path: "/quan-an/danh-muc",
        component: () => import("../components/QuanAn/DanhMuc/index.vue"),
        meta: { layout: "quan_an" },
      },
      {
        path: "/quan-an/mon-an",
        component: () => import("../components/QuanAn/MonAn/index.vue"),
        meta: { layout: "quan_an" },
      },
      {
        path: "/quan-an/voucher",
        component: () => import("../components/QuanAn/Voucher/index.vue"),
        meta: { layout: "quan_an" },
      },
      // shipper
      {
        path: "/shipper/dang-ky",
        component: () => import("../components/Shipper/DangKy/index.vue"),
        meta: { layout: "auth" },
      },
    
      {
        path: "/shipper/dang-nhap",
        component: () => import("../components/Shipper/DangNhap/index.vue"),
        meta: { layout: "auth" },
      },
      {
        path: "/shipper/don-dat-hang",
        component: () => import("../components/Shipper/DonDatHang/index.vue"),
        meta: { layout: "shipper" },
      },
      {
        path: "/shipper/lich-su-giao-hang",
        component: () => import("../components/Shipper/LichSuGiaoHang/index.vue"),
        meta: { layout: "shipper" },
      },
      {
        path: "/shipper/profile",
        component: () => import("../components/Shipper/Profile/index.vue"),
        meta: { layout: "shipper" },
      },
      {
        path: "/shipper/thong-ke",
        component: () => import("../components/Shipper/ThongKe/index.vue"),
        meta: { layout: "shipper" },
      },
      
      
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router