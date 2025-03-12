<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <div class="row align-items-center">
                        <div class="col-lg-3 col-xl-2">
                            <div class="position-relative">
                                <input type="text" class="form-control ps-5" placeholder="Tìm kiếm món ăn..."> <span
                                    class="position-absolute top-50 product-show translate-middle-y"><i
                                        class="bx bx-search"></i></span>
                            </div>
                        </div>
                        <div class="col-lg-9 col-xl-10">
                            <form class="float-lg-end">
                                <div class="row row-cols-lg-2 row-cols-xl-auto g-2">
                                    <div class="col">
                                        <div class="btn-group" role="group">
                                            <button type="button" class="btn btn-white">159 Kết quả</button>
                                            <div class="btn-group" role="group">
                                                <button id="btnGroupDrop1" type="button"
                                                    class="btn btn-white dropdown-toggle dropdown-toggle-nocaret px-1"
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="bx bx-slider"></i>
                                                </button>
                                                <ul class="dropdown-menu dropdown-menu-start"
                                                    aria-labelledby="btnGroupDrop1">
                                                    <li><a class="dropdown-item" href="#">Đúng nhất</a></li>
                                                    <li><a class="dropdown-item" href="#">Gần tôi</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row product-grid">
        <template v-for="(v, k) in monAnData" :key="k">
            <div class="col-lg-2 d-flex">
                <div class="card flex-fill">
                    <img :src="v.hinh_anh" class="card-img-top" style="height: 150px;" alt="...">
                    <div class="card-body">
                        <h6 class="card-title cursor-pointer">{{ v.ten_mon_an }}</h6>
                        <div class="clearfix">
                            <p class="mb-0 float-start">{{ v.ten_quan_an }}</p>
                        </div>
                        <p class="mt-2"><del>{{ v.gia_ban }}đ</del> <strong>{{ v.gia_khuyen_mai
                                }}đ</strong></p>
                        <div class="d-flex align-items-center mt-auto">
                            <i class="fa-solid fa-tag text-danger me-2"></i> <span class="text-primary"><b>Giảm hết
                                    30%</b></span>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>
<script>
export default {
    data() {
        return {
            monAnData: [
                { ten_mon_an: 'Phở Bò', id_quan_an: 1, ten_quan_an: 'Quán Phở Gia Truyền', gia_ban: 50000, gia_khuyen_mai: 45000, hinh_anh: "https://hongphatfood.com/wp-content/uploads/2020/05/vifon-beef-pho-6.jpg" },
                { ten_mon_an: 'Bún Chả', id_quan_an: 1, ten_quan_an: 'Quán Phở Gia Truyền', gia_ban: 40000, gia_khuyen_mai: 35000, hinh_anh: "https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:quality(100)/2024_1_12_638406880045931692_cach-lam-bun-cha-ha-noi-0.jpg" },
                { ten_mon_an: 'Bánh Canh', id_quan_an: 1, ten_quan_an: 'Quán Phở Gia Truyền', gia_ban: 30000, gia_khuyen_mai: 25000, hinh_anh: "https://drt.danang.vn/content/images/2024/06/quan-banh-canh-da-nang-7.png" },
                { ten_mon_an: 'Chả Cá', id_quan_an: 1, ten_quan_an: 'Quán Phở Gia Truyền', gia_ban: 60000, gia_khuyen_mai: 55000, hinh_anh: "https://i.ytimg.com/vi/ZLwCwyIDJJ4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC28T49o72JuvhoihtNNUQvmAyCWA" },

                { ten_mon_an: 'Bánh Mì Thịt', id_quan_an: 2, ten_quan_an: 'Tiệm Bánh Mì Ngon', gia_ban: 20000, gia_khuyen_mai: 18000, hinh_anh: "https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:quality(100)/2024_1_11_638406025402324906_banh-mi-thit_.jpg" },
                { ten_mon_an: 'Gỏi Cuốn', id_quan_an: 2, ten_quan_an: 'Tiệm Bánh Mì Ngon', gia_ban: 15000, gia_khuyen_mai: 12000, hinh_anh: "https://heyyofoods.com/wp-content/uploads/2024/03/3-4.jpg" },
                { ten_mon_an: 'Mì Quảng', id_quan_an: 2, ten_quan_an: 'Tiệm Bánh Mì Ngon', gia_ban: 35000, gia_khuyen_mai: 30000, hinh_anh: "https://duonggiahotel.vn/wp-content/uploads/2023/09/mi-quang-da-nang-AB.jpg" },
                { ten_mon_an: 'Bánh Bèo', id_quan_an: 2, ten_quan_an: 'Tiệm Bánh Mì Ngon', gia_ban: 15000, gia_khuyen_mai: 13000, hinh_anh: "https://vietfood.org.vn/wp-content/uploads/2021/05/BanhBeo2.jpg" },

                { ten_mon_an: 'Cơm Gà', id_quan_an: 3, ten_quan_an: 'Cơm Gà Hải Nam', gia_ban: 35000, gia_khuyen_mai: 30000, hinh_anh: "https://danangfantasticity.com/wp-content/uploads/2024/10/com-ga-da-nang-com-ga-xoi-mo-09.jpg" },
                { ten_mon_an: 'Bánh Xèo', id_quan_an: 3, ten_quan_an: 'Cơm Gà Hải Nam', gia_ban: 45000, gia_khuyen_mai: 40000, hinh_anh: "https://daotaobeptruong.vn/wp-content/uploads/2020/01/cach-do-banh-xeo-ngon-gion-lau.jpg" },
                { ten_mon_an: 'Cơm Tấm', id_quan_an: 3, ten_quan_an: 'Cơm Gà Hải Nam', gia_ban: 40000, gia_khuyen_mai: 37000, hinh_anh: "https://i-giadinh.vnecdn.net/2024/03/07/7-Hoan-thien-thanh-pham-1-6244-1709800134.jpg" },
                { ten_mon_an: 'Gà Rán', id_quan_an: 3, ten_quan_an: 'Cơm Gà Hải Nam', gia_ban: 70000, gia_khuyen_mai: 65000, hinh_anh: "https://cokhiviendong.com/wp-content/uploads/2019/01/kinnh-nghi%E1%BB%87m-m%E1%BB%9F-qu%C3%A1n-g%C3%A0-r%C3%A1n-7.jpg" },
                { ten_mon_an: 'Hủ Tiếu', id_quan_an: 4, ten_quan_an: 'Hủ Tiếu Mỹ Tho', gia_ban: 30000, gia_khuyen_mai: 25000, hinh_anh: "https://i-giadinh.vnecdn.net/2023/05/15/Bc8Thnhphm18-1684125639-9811-1684125654.jpg" },
                { ten_mon_an: 'Lẩu Thái', id_quan_an: 4, ten_quan_an: 'Hủ Tiếu Mỹ Tho', gia_ban: 120000, gia_khuyen_mai: 100000, hinh_anh: "https://i-giadinh.vnecdn.net/2022/12/17/Thanh-pham-1-1-5372-1671269525.jpg" },
                { ten_mon_an: 'Bún Mắm', id_quan_an: 4, ten_quan_an: 'Hủ Tiếu Mỹ Tho', gia_ban: 50000, gia_khuyen_mai: 45000, hinh_anh: "https://www.cet.edu.vn/wp-content/uploads/2018/04/bun-mam-nem-da-nang.jpg" },
                { ten_mon_an: 'Súp Cua', id_quan_an: 4, ten_quan_an: 'Hủ Tiếu Mỹ Tho', gia_ban: 40000, gia_khuyen_mai: 35000, hinh_anh: "https://mevacon.giaoduc.edu.vn/wp-content/uploads/2023/02/cach-nau-sup-cua-1.jpeg" },

                { ten_mon_an: 'Cháo Lòng', id_quan_an: 5, ten_quan_an: 'Quán Cháo Lòng Ngon', gia_ban: 25000, gia_khuyen_mai: 22000, hinh_anh: "https://static.vinwonders.com/production/chao-long-da-nang-4-1.jpg" },
                { ten_mon_an: 'Nem Nướng', id_quan_an: 5, ten_quan_an: 'Quán Cháo Lòng Ngon', gia_ban: 40000, gia_khuyen_mai: 35000, hinh_anh: "https://cdn.tgdd.vn/2021/09/CookDish/cach-lam-nem-nuong-nha-trang-bang-noi-chien-khong-dau-thom-avt-1200x676.jpg" },
                { ten_mon_an: 'Bánh Đúc', id_quan_an: 5, ten_quan_an: 'Quán Cháo Lòng Ngon', gia_ban: 20000, gia_khuyen_mai: 18000, hinh_anh: "https://i-giadinh.vnecdn.net/2021/05/17/1-1621220538-7560-1621220858.jpg" },
                { ten_mon_an: 'Bánh Cuốn', id_quan_an: 5, ten_quan_an: 'Quán Cháo Lòng Ngon', gia_ban: 30000, gia_khuyen_mai: 27000, hinh_anh: "https://img-global.cpcdn.com/recipes/b235f5db0142062d/400x400cq70/photo.jpg" }
            ],
        }
    },
}
</script>
<style></style>