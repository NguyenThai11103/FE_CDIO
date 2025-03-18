<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-lg-4 mt-2 mb-2">
                            <input type="text" class="form-control" placeholder="Tìm kiếm quán ăn..."
                                v-model="searchQuery" />
                        </div>
                        <div class="col-lg-4 mt-2 mb-2">
                            <select class="form-select" v-model="sortOption" @change="sortOrders">
                                <option value="oldest">Sắp xếp: Đơn cũ</option>
                                <option value="newest">Sắp xếp: Đơn mới</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <template v-for="(value, index) in filteredOrders" :key="index">
            <div class="col-lg-3 col-md-6 d-flex">
                <div class="card border-info flex-fill">
                    <img :src="value.image" class="card-img-top" style="width: 100%; max-height: 280px; object-fit: cover;" alt="Hình ảnh quán ăn" />
                    <div class="card-header bg-primary text-white">
                        <h5 class="mb-0 text-white">ĐH: {{ value.id_don_hang }}</h5>
                    </div>
                    <div class="card-body">
                        <p><strong>Quán:</strong> {{ value.id_quan_an }}</p>
                        <p><strong>Địa chỉ:</strong> {{ value.dia_chi_quan }}</p>
                        <p>
                            <strong>Món:</strong> {{ value.id_mon_an }} -
                            <strong>Số lượng:</strong> {{ value.so_luong }}
                        </p>
                        <span>
                            <strong>Thành tiền:</strong> {{ formatToVND(value.thanh_tien) }}
                        </span>
                    </div>
                    <div class="card-footer d-flex justify-content-between align-items-center">
                        <button class="btn btn-info" v-on:click="xem_thong_tin_kh = value" data-bs-toggle="modal"
                            data-bs-target="#xemThongTinModal">
                            <i class="fa-solid fa-circle-info text-white"></i> <span class="text-white">Thông Tin</span>
                        </button>
                        <button v-on:click="trang_thai = value" data-bs-toggle="modal"
                            data-bs-target="#trangThaiDonHangModal" :class="{
                                'btn btn-primary ms-2': value.tinh_trang == 1,
                                'btn btn-success ms-2': value.tinh_trang == 2,
                            }">
                            {{ value.tinh_trang == 1 ? "Đang lấy đơn" : "Đang giao" }}
                        </button>
                    </div>
                </div>
            </div>
        </template>
    </div>
    <!-- Modal xem thông tin khách hàng -->
    <div class="modal fade" id="xemThongTinModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header bg-primary">
                    <h1 class="modal-title fs-5 text-white" id="exampleModalLabel">Xem thông tin khách hàng của đơn hàng
                        <span class="">{{
                            xem_thong_tin_kh.id_don_hang }}</span>
                    </h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class='table-responsive'>
                        <table class='table table-bordered table-hover'>
                            <tbody>
                                <tr>
                                    <th class='align-middle text-nowrap'>Tên Người Nhận</th>
                                    <td class='align-middle text-nowrap'>{{ xem_thong_tin_kh.id_khach_hang }}</td>
                                </tr>
                                <tr>
                                    <th class='align-middle text-nowrap'>Số Điện Thoại</th>
                                    <td class='align-middle text-nowrap'>{{ xem_thong_tin_kh.sdt }}</td>
                                </tr>
                                <tr>
                                    <th class='align-middle text-nowrap'>Địa Chỉ</th>
                                    <td class='align-middle text-nowrap'>{{ xem_thong_tin_kh.dia_chi }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal cập nhật trạng thái đơn hàng -->
    <div class="modal fade" id="trangThaiDonHangModal" tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg-primary">
                    <h1 class="modal-title fs-5 text-white" id="exampleModalLabel">Cập nhật trạng thái đơn hàng <span
                            class="">{{ trang_thai.id_don_hang }}</span></h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1"
                            value="option1" checked>
                        <label class="form-check-label" for="exampleRadios1">
                            Đang lấy đơn
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2"
                            value="option2">
                        <label class="form-check-label" for="exampleRadios2">
                            Đang giao
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios4"
                            value="option2">
                        <label class="form-check-label" for="exampleRadios4">
                            Đã giao
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3"
                            value="option3" checked>
                        <label class="form-check-label" for="exampleRadios3">
                            Hủy đơn ( chỉ được hủy khi chưa lấy đơn )
                        </label>
                        <input type="text" class="form-control mt-2" placeholder="Lý do hủy đơn">
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Xác Nhận</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            orders: [
                {
                    id: 1,
                    id_don_hang: "DH001",
                    id_quan_an: "Hải Sản Bé Biển",
                    id_mon_an: "Cua Rang Me",
                    don_gia: 50000,
                    so_luong: 2,
                    thanh_tien: 100000,
                    dia_chi_quan: "202 Võ Nguyên Giáp, Phước Mỹ, Sơn Trà, Đà Nẵng",
                    tinh_trang: 1,
                    id_khach_hang: "Nguyễn Văn A",
                    sdt: "0123456789",
                    dia_chi: "K280/23 Hoàng Diệu, Hải Châu, Đà Nẵng",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdal1nGCXTQzcRED4nJ_qfHtjul5sLOruORQ&s",
                },
                {
                    id: 2,
                    id_don_hang: "DH002",
                    id_quan_an: "Cơm Gà Xối Mỡ Chú Mập",
                    id_mon_an: "Cơm Gà Xối Mỡ",
                    don_gia: 45000,
                    so_luong: 3,
                    dia_chi_quan: "120 Hoàng Diệu, Hải Châu, Đà Nẵng",
                    thanh_tien: 135000,
                    tinh_trang: 2,
                    id_khach_hang: "Trần Thị B",
                    sdt: "0987654321",
                    dia_chi: "36 Ông Ích Khiêm, Hải Châu, Đà Nẵng",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWJy4OjM2CL3pRWe--NpMQclo6TDHkx0jM7A&s",
                },
                {
                    id: 3,
                    id_don_hang: "DH003",
                    id_quan_an: "Bánh Xèo Bà Dưỡng",
                    id_mon_an: "Bánh Xèo",
                    don_gia: 60000,
                    so_luong: 8,
                    thanh_tien: 60000,
                    dia_chi_quan: "80 Phan Châu Trinh, Hải Châu, Đà Nẵng",
                    tinh_trang: 2,
                    id_khach_hang: "Lê Văn C",
                    sdt: "0901234567",
                    dia_chi: "20 Hà Thị Thân, Sơn Trà, Đà Nẵng",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7BR4stdJLmNSPtaBzWsg4aqhMHKGhB7qGsQ&s",
                },
                {
                    id: 4,
                    id_don_hang: "DH004",
                    id_quan_an: "Bánh Tráng Cuốn Thịt Heo Dì Thương",
                    id_mon_an: "Bánh Tráng Cuốn Thịt",
                    don_gia: 60000,
                    so_luong: 1,
                    thanh_tien: 60000,
                    dia_chi_quan: "80 Phan Châu Trinh, Hải Châu, Đà Nẵng",
                    tinh_trang: 2,
                    id_khach_hang: "Lê Văn C",
                    sdt: "0901234567",
                    dia_chi: "20 Hà Thị Thân, Sơn Trà, Đà Nẵng",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBQA9tClvTQP1m7xUKyy-fUScxiTkEEP8EGw&s",
                },
            ],
            searchQuery: "",
            sortOption: "newest",
            xem_thong_tin_kh: {},
            trang_thai: {},
        };
    },
    computed: {
        filteredOrders() {
            return this.orders.filter((order) =>
                order.id_quan_an.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
        },
    },
    methods: {
        formatToVND(number) {
            number = parseInt(number);
            return number.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
            });
        },
        sortOrders() {
            if (this.sortOption === "newest") {
                this.orders.sort((a, b) => b.id - a.id);
            } else if (this.sortOption === "oldest") {
                this.orders.sort((a, b) => a.id - b.id);
            }
        },
    },
};
</script>

<style></style>
