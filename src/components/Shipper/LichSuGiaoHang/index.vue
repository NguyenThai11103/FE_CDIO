<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card radius-10 border-top border-0 border-3 border-info">
                <div class="card-header">
                    <h5 class="mt-2">LỊCH SỬ GIAO HÀNG</h5>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th class="align-middle text-nowrap text-center">#</th>
                                    <th class="align-middle text-nowrap text-center">Mã Đơn Hàng</th>
                                    <th class="align-middle text-nowrap text-center">Quán Ăn - Địa Chỉ</th>
                                    <th class="align-middle text-nowrap text-center">Món Ăn</th>
                                    <th class="align-middle text-nowrap text-center">Đơn Giá</th>
                                    <th class="align-middle text-nowrap text-center">Số Lượng</th>
                                    <th class="align-middle text-nowrap text-center">Thành Tiền</th>
                                    <th class="align-middle text-nowrap text-center">Thông Tin Khách Hàng</th>
                                    <th class="align-middle text-nowrap text-center">Tình Trạng</th>
                                </tr>
                            </thead>
                            <tbody>
                                <template v-for="(value, index) in orders" :key="index">
                                    <tr>
                                        <td class="align-middle text-nowrap text-center">{{ index + 1 }}</td>
                                        <td class="align-middle text-nowrap text-center">{{ value.id_don_hang }}</td>
                                        <td class="align-middle text-nowrap">{{ value.id_quan_an }} - {{ value.dia_chi_quan
                                            }}</td>
                                        <td class="align-middle text-nowrap">{{ value.id_mon_an }}</td>
                                        <td class="align-middle text-nowrap text-end">{{ formatToVND(value.don_gia) }}
                                        </td>
                                        <td class="align-middle text-nowrap text-center">{{ value.so_luong }}</td>
                                        <td class="align-middle text-nowrap text-end">{{ formatToVND(value.thanh_tien)
                                            }}</td>
                                        <td class="align-middle text-nowrap text-center">
                                            <button class="btn btn-success" v-on:click="xem_thong_tin_kh = value"
                                                data-bs-toggle="modal" data-bs-target="#xemThongTinModal">
                                                <i class="fa-solid fa-circle-info text-white ms-1"></i>
                                            </button>
                                        </td>
                                        <td class="align-middle text-nowrap text-center">
                                            <button v-if="value.tinh_trang == 3" class="btn btn-primary w-100">Giao
                                                Thành Công</button>
                                            <button v-if="value.tinh_trang == 4" class="btn btn-danger w-100">Đã
                                                Hủy</button>
                                        </td>
                                    </tr>

                                </template>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal xem thông tin khách hàng -->
    <div class="modal fade" id="xemThongTinModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header bg-primary">
                    <h1 class="modal-title fs-5 text-white" id="exampleModalLabel">Xem thông tin khách hàng của đơn hàng <span
                            class="">{{
                                xem_thong_tin_kh.id_don_hang }}</span></h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class='table-responsive'>
                        <table class='table table-bordered table-hover'>
                            <thead>
                                <tr>
                                    <th class='align-middle text-nowrap text-center'>Tên Người Nhận</th>
                                    <th class='align-middle text-nowrap text-center'>Số Điện Thoại</th>
                                    <th class='align-middle text-nowrap text-center'>Địa Chỉ</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class='align-middle text-nowrap'>{{ xem_thong_tin_kh.id_khach_hang }}</td>
                                    <td class='align-middle text-nowrap text-center'>{{ xem_thong_tin_kh.sdt }}</td>
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
</template>
<script>
export default {
    data() {
        return {
            orders: [
                {
                    id: 1,
                    id_don_hang: "DH004",
                    id_quan_an: "Quán Ăn D",
                    id_mon_an: "Bánh Canh",
                    don_gia: 55000,
                    so_luong: 2,
                    dia_chi_quan: "15 Nguyễn Thị Minh Khai, Hải Châu, Đà Nẵng",
                    thanh_tien: 110000,
                    tinh_trang: 3, // giao thành công
                    id_khach_hang: "Nguyễn Thị D",
                    sdt: "0912345678",
                    dia_chi: "15 Lê Lợi, Hải Châu, Đà Nẵng",
                },
                {
                    id: 2,
                    id_don_hang: "DH005",
                    id_quan_an: "Quán Ăn E",
                    id_mon_an: "Bánh Tráng Cuốn Thịt Heo",
                    don_gia: 70000,
                    so_luong: 1,
                    dia_chi_quan: "25 Lê Đình Dương, Hải Châu, Đà Nẵng",
                    thanh_tien: 70000,
                    tinh_trang: 3, // giao thành công
                    id_khach_hang: "Lê Thị E",
                    sdt: "0923456789",
                    dia_chi: "25 Nguyễn Du, Sơn Trà, Đà Nẵng",
                },
                {
                    id: 3,
                    id_don_hang: "DH006",
                    id_quan_an: "Quán Ăn F",
                    id_mon_an: "Cơm Gà",
                    don_gia: 60000,
                    so_luong: 3,
                    dia_chi_quan: "35 Trần Phú, Hải Châu, Đà Nẵng",
                    thanh_tien: 180000,
                    tinh_trang: 4, // đã hủy
                    id_khach_hang: "Trần Văn F",
                    sdt: "0934567890",
                    dia_chi: "35 Phan Châu Trinh, Hải Châu, Đà Nẵng",
                },
            ],
            xem_thong_tin_kh: {},
            trang_thai: {},
        }
    },
    methods: {
        formatToVND(number) {
            number = parseInt(number);
            return number.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
        },
    },
};
</script>
<style></style>
