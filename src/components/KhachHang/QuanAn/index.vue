<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <div class="row align-items-center">
                        <div class="col-lg-3 col-xl-2">
                            <div class="position-relative">
                                <input type="text" class="form-control ps-5" placeholder="Tìm kiếm quán ăn..."> <span
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
        <template v-for="(v, k) in quanAn" :key="k">
            <div class="col-lg-2 d-flex">
                <div class="card flex-fill">
                    <img :src="v.hinh_anh"
                        class="card-img-top" style="height: 150px;" alt="...">
                    <div class="card-body">
                        <h6 class="card-title cursor-pointer">{{ v.ten_quan }}</h6>
                        <div class="clearfix mt-auto">
                            <p class="mb-0 float-start">{{ v.dia_chi_quan }}</p>
                        </div>
                        <p class="mt-2"><i class="fa-solid fa-tags me-1"></i> Tối thiểu {{ v.toi_thieu }} <i
                                class="fa-solid fa-circle-dollar-to-slot ms-3 me-1"></i> Giá
                            {{ v.gia }}</p>
                        <div class="d-flex align-items-center mt-auto">
                            <i class="fa-solid fa-tag text-danger me-2"></i> <span class="text-primary"><b>Giảm hết
                                    {{ v.giam_gia }}</b></span>
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
            quanAn: [
                {
                    ten_quan: 'Bún Bò Huế Ngon',
                    dia_chi_quan: '123 Đường Lê Lợi, Quận 1, TP.HCM',
                    hinh_anh: 'https://down-bs-vn.img.susercontent.com/vn-11134513-7r98o-lsv4kujdxehl63@resize_ss280x175!@crop_w280_h175_cT',
                    toi_thieu: '30k',
                    gia: '50k',
                    giam_gia: '30%'
                },
                {
                    ten_quan: 'Phở Thìn Hà Nội',
                    dia_chi_quan: '456 Đường Nguyễn Văn Trỗi, Quận 3, TP.HCM',
                    hinh_anh: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiRd5rlVktjl029OJYgVUqNBKHiKWPJH0ZeA&s',
                    toi_thieu: '30k',
                    gia: '50k',
                    giam_gia: '30%'
                },
                {
                    ten_quan: 'Bánh Mì Thịt Nướng',
                    dia_chi_quan: '789 Đường Trần Hưng Đạo, Quận 5, TP.HCM',
                    hinh_anh: 'https://blog.onelife.vn/wp-content/uploads/2021/11/cach-lam-banh-mi-thit-nuong-mon-an-sang-227560043900.jpg',
                    toi_thieu: '30k',
                    gia: '50k',
                    giam_gia: '30%'
                },
                {
                    ten_quan: 'Hủ Tiếu Nam Vang',
                    dia_chi_quan: '1010 Đường Lý Thường Kiệt, Quận 10, TP.HCM',
                    hinh_anh: 'https://i-giadinh.vnecdn.net/2023/05/15/Buoc-8-Thanh-pham-1-8-8366-1684125654.jpg',
                    toi_thieu: '30k',
                    gia: '50k',
                    giam_gia: '30%'
                },
                {
                    ten_quan: 'Cơm Tấm Sài Gòn',
                    dia_chi_quan: '1111 Đường Nguyễn Tri Phương, Quận 10, TP.HCM',
                    hinh_anh: 'https://sakos.vn/wp-content/uploads/2024/09/bia.jpg',
                    toi_thieu: '30k',
                    gia: '50k',
                    giam_gia: '30%'
                },
                {
                    ten_quan: 'Bún Riêu Cua',
                    dia_chi_quan: '1212 Đường Bạch Đằng, Bình Thạnh, TP.HCM',
                    hinh_anh: 'https://static.vinwonders.com/production/bun-rieu-cua-da-nang-16_optimized.jpeg',
                    toi_thieu: '30k',
                    gia: '50k',
                    giam_gia: '30%'
                },
                {
                    ten_quan: 'Gỏi Cuốn Tôm Thịt',
                    dia_chi_quan: '1313 Đường Phan Văn Trị, Gò Vấp, TP.HCM',
                    hinh_anh: 'https://heyyofoods.com/wp-content/uploads/2024/03/4-4.jpg',
                    toi_thieu: '30k',
                    gia: '50k',
                    giam_gia: '30%'
                },
                {
                    ten_quan: 'Lẩu Thái Tom Yum',
                    dia_chi_quan: '1414 Đường Nguyễn Đình Chiểu, Quận 3, TP.HCM',
                    hinh_anh: 'https://file.hstatic.net/1000115147/article/tom-yum12_0e693e4c58e34765bd1386b10a0ffdb2.png',
                    toi_thieu: '30k',
                    gia: '50k',
                    giam_gia: '30%'
                },
                {
                    ten_quan: 'Cháo Sườn Hàng Xanh',
                    dia_chi_quan: '1515 Đường Xô Viết Nghệ Tĩnh, Bình Thạnh, TP.HCM',
                    hinh_anh: 'https://cdn.tgdd.vn/2021/05/CookProduct/axresdefault(1)-1200x676.jpg',
                    toi_thieu: '30k',
                    gia: '50k',
                    giam_gia: '30%'
                },
                {
                    ten_quan: 'Bánh Xèo Miền Trung',
                    dia_chi_quan: '1616 Đường Điện Biên Phủ, Quận 3, TP.HCM',
                    hinh_anh: 'https://bizweb.dktcdn.net/100/514/078/products/banh-xeo-3-mien-day-nghe-rosa-bien-hoa-dong-nai-2.jpg?v=1716438613080',
                    toi_thieu: '30k',
                    gia: '50k',
                    giam_gia: '30%'
                },

                {
                    ten_quan: 'Phúc Long Coffee & Tea Express',
                    dia_chi_quan: 'Địa điểm không xác định',
                    hinh_anh: 'https://dtex.vn/Image/Picture/New/Quan-Cafe/logo-Phuc-Long.jpg',
                    toi_thieu: '30k',
                    gia: '50k',
                    giam_gia: '30%' // Đồ uống
                },
                {
                    ten_quan: 'Burger House - Cơm Mì Mã Lai',
                    dia_chi_quan: 'Địa điểm không xác định',
                    hinh_anh: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdPoIfe0PzE7z4o-98U7Yyy_xPJQJFFyeGcw&s',
                    toi_thieu: '30k',
                    gia: '50k',
                    giam_gia: '30%' // Cơm hộp
                },
                {
                    ten_quan: 'FA - Bánh Tráng Trứng Muối Mỡ Hành',
                    dia_chi_quan: '55 Nguyễn Phúc Chu, Tân Bình, TP. HCM',
                    hinh_anh: 'https://i.ytimg.com/vi/ETbQbKEwglo/maxresdefault.jpg',
                    toi_thieu: '30k',
                    gia: '50k',
                    giam_gia: '30%' // Đồ ăn
                },
                {
                    ten_quan: 'KOI Thé - Việt Nam',
                    dia_chi_quan: 'Địa điểm không xác định',
                    hinh_anh: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbaZ1PIi2BBS9RIboyhMHQxjmtp8i9egoHag&s',
                    toi_thieu: '30k',
                    gia: '50k',
                    giam_gia: '30%' // Đồ uống
                },
                {
                    ten_quan: 'Khoai Bistro - Bánh Mì Chảo, Beefsteak & Mì Ý',
                    dia_chi_quan: '405/9 Thống Nhất, P. 11, Gò Vấp, TP. HCM',
                    hinh_anh: 'https://media.be.com.vn/bizops/image/018b9ad7-47d2-11ef-a271-b60dedd57ab8/resized_thumbnail_w480_h480',
                    toi_thieu: '30k',
                    gia: '50k',
                    giam_gia: '30%' // Đồ ăn
                },
                {
                    ten_quan: 'Gà Cơ Bắp - Chuyên Các Món Gà',
                    dia_chi_quan: 'Địa điểm không xác định',
                    hinh_anh: 'https://gacobap.com/wp-content/uploads/2018/01/ga-co-bap.png',
                    toi_thieu: '30k',
                    gia: '50k',
                    giam_gia: '30%' // Đồ ăn
                },
                {
                    ten_quan: 'Khoai Lang Lắc Xí Muội - Nguyễn Thượng Hiền',
                    dia_chi_quan: '7 Nguyễn Thượng Hiền, Quận 3, TP. HCM',
                    hinh_anh: 'https://i.ytimg.com/vi/9aXdX2uvd9s/maxresdefault.jpg',
                    toi_thieu: '30k',
                    gia: '50k',
                    giam_gia: '30%' // Đồ ăn
                }
            ],
        }
    },
}
</script>
<style></style>