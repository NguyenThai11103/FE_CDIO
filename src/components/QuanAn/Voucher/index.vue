<template>
    <!-- edit -->
    <div class="modal fade" id="suaVoucher" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header bg-primary text-white">
                    <h1 class="modal-title fs-5 text-white" id="exampleModalLabel">Cập Nhật Mã Voucher</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-2">
                        <label>Mã Voucher</label>
                        <input v-model="Edit_voucher.ma_voucher" type="text" class="form-control mt-2">
                    </div>
                    <div class="mb-2">
                        <label>Thời Gian Bắt Đầu</label>
                        <input v-model="Edit_voucher.tu_ngay" type="date" class="form-control mt-2">
                    </div>
                    <div class="mb-2">
                        <label>Thời Gian Kết Thúc</label>
                        <input v-model="Edit_voucher.den_ngay" type="date" class="form-control mt-2">
                    </div>
                    <div class="mb-2">
                        <label>Số Tiền Giảm</label>
                        <input v-model="Edit_voucher.so_tien_giam" type="text" class="form-control mt-2">
                    </div>
                    <div class="mb-2">
                        <label>Phần Trăm Giảm</label>
                        <input v-model="Edit_voucher.phan_tram_giam" type="number" class="form-control mt-2">
                    </div>
                    <div class="mb-2">
                        <label>Tên Quán</label>
                        <input v-model="Edit_voucher.ten_quan" type="text" class="form-control mt-2">
                        <div class="mb-2">
                            <label>Mô Tả</label>
                            <textarea v-model="Edit_voucher.mo_ta" name="" id="" class="form-control mt-2"
                                rows="5"></textarea>
                            <div class="mb-2">
                                <label>Tình trạng</label>
                                <select class="form-select mt-2">
                                    <option value="0">Tạm Tắt</option>
                                    <option value="1">Hiển Thị</option>
                                </select>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Cập
                                nhật</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- xoa -->
    <div class="modal fade" id="delVoucher" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg-danger text-white">
                    <h1 class="modal-title fs-5 text-white" id="staticBackdropLabel">Xóa Voucher</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    Bạn có chắc muốn xóa voucher <b class="text-danger">{{ del_voucher.ma_voucher }}</b> này
                    không?
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Xóa</button>
                </div>
            </div>
        </div>
    </div>
    <div class="row">

        <div class="col-lg-12">
            <div class="card">
                <div class="card-header d-flex justify-content-between">
                    <h6 class="mt-2"><b>DANH SÁCH MÃ VOUCHER</b></h6>
                    <div>
                        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#themMoi">Thêm
                            Mới</button>
                    </div>
                    <div class="modal fade" id="themMoi" data-bs-backdrop="static" data-bs-keyboard="false"
                        tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-header ">
                                    <h1 class="modal-title fs-5 " id="staticBackdropLabel">Thêm Mới Voucher</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="mb-2">
                                                <label for="maVoucher">Mã Voucher</label>
                                                <input id="maVoucher" type="text" class="form-control mt-2">
                                            </div>
                                            <div class="mb-2">
                                                <label for="thoiGianBatDau">Thời Gian Bắt Đầu</label>
                                                <input id="thoiGianBatDau" type="date" class="form-control mt-2">
                                            </div>
                                            <div class="mb-2">
                                                <label for="thoiGianKetThuc">Thời Gian Kết Thúc</label>
                                                <input id="thoiGianKetThuc" type="date" class="form-control mt-2">
                                            </div>
                                            <div class="mb-2">
                                                <label for="soTienGiam">Số Tiền Giảm</label>
                                                <input id="soTienGiam" type="numer" class="form-control mt-2">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-2">
                                                <label for="phanTramGiam">Phần Trăm Giảm</label>
                                                <input id="phanTramGiam" type="number" class="form-control mt-2">
                                            </div>
                                            <div class="mb-2">
                                                <label for="tinhTrang">Tình trạng</label>
                                                <select id="tinhTrang" class="form-select mt-2">
                                                    <option value="0">Tạm Tắt</option>
                                                    <option value="1">Hiển Thị</option>
                                                </select>
                                            </div>
                                            <div class="mb-2">
                                                <label for="moTa">Mô Tả</label>
                                                <textarea id="moTa" class="form-control mt-2" rows="4"></textarea>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary"
                                        data-bs-dismiss="modal">Đóng</button>
                                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="themMoi()">Thêm
                                        Mới</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="tbale table-responsive">
                        <table class="table table-bordered table-hover ">
                            <thead>
                                <tr>
                                    <th class="align-middle text-center">#</th>
                                    <th class="align-middle text-center">Mã Voucher</th>
                                    <th class="align-middle text-center">Thời Gian Bắt Đầu</th>
                                    <th class="align-middle text-center">Thời Gian Kết Thúc</th>
                                    <th class="align-middle text-center">Số Tiền Giảm</th>
                                    <th class="align-middle text-center">Phần Trăm Giảm</th>
                                    <th class="align-middle text-center">Mô Tả</th>
                                    <th class="align-middle text-center">Tên Quán</th>
                                    <th class="align-middle text-center">Tình Trạng</th>
                                    <th class="align-middle text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <template v-for="(value, index) in vouchers" :key="index">
                                    <tr>
                                        <th class="align-middle text-center">{{ index + 1 }}</th>
                                        <td class="align-middle text-center">{{ value.ma_voucher }}</td>
                                        <td class="align-middle text-center">{{ value.tu_ngay }}</td>
                                        <td class="align-middle text-center">{{ value.den_ngay }}</td>
                                        <td class="align-middle text-end">{{ formatToVND(value.so_tien_giam) }}</td>
                                        <td class="align-middle text-center">{{ value.phan_tram_giam }}%</td>
                                        <td class="align-middle">{{ value.mo_ta }}</td>
                                        <td class="align-middle text-center">{{ value.ten_quan }}</td>
                                        <td class="align-middle text-center">
                                            <button v-if="value.trang_thai === 'hoạt động'" class="btn btn-success"
                                                style="width: 100px;">Hoạt động</button>
                                            <button v-else class="btn btn-secondary" style="width: 100px;">Tạm
                                                tắt</button>
                                        </td>
                                        <td class="align-middle text-center">
                                            <button v-on:click="Object.assign(Edit_voucher, value)"
                                                class="btn btn-primary me-1" style='width: 100px' data-bs-toggle="modal"
                                                data-bs-target="#suaVoucher">Cập Nhật</button>
                                            <button v-on:click="Object.assign(del_voucher, value)"
                                                class="btn btn-danger" style='width: 100px' data-bs-toggle="modal"
                                                data-bs-target="#delVoucher">Xóa</button>
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
</template>
<script>
export default {
    data() {
        return {
            voucher: {},
            vouchers: [
                {
                    id: 1,
                    ma_voucher: "DISCOUNT10",
                    phan_tram_giam: 10,
                    so_tien_giam: 0,
                    tu_ngay: "2025-01-01",
                    den_ngay: "2025-01-31",
                    ten_quan: "Quán A",
                    mo_ta: "Giảm 10% cho tất cả các sản phẩm",
                    trang_thai: "hoạt động",
                },
                {
                    id: 2,
                    ma_voucher: "SAVE50",
                    phan_tram_giam: 0,
                    so_tien_giam: 50000,
                    tu_ngay: "2025-02-01",
                    den_ngay: "2025-02-28",
                    ten_quan: "Quán A",
                    mo_ta: "Giảm 50,000 VNĐ cho đơn hàng trên 200,000 VNĐ",
                    trang_thai: "tạm tắt",
                },
            ],
            Edit_voucher: [
                {
                    id: 1,
                    ma_voucher: "DISCOUNT10",
                    phan_tram_giam: 10,
                    so_tien_giam: 0,
                    tu_ngay: "2025-01-01",
                    den_ngay: "2025-01-31",
                    ten_quan: "Quán A",
                    mo_ta: "Giảm 10% cho tất cả các sản phẩm",
                    trang_thai: "hoạt động",
                },
                {
                    id: 2,
                    ma_voucher: "SAVE50",
                    phan_tram_giam: 0,
                    so_tien_giam: 50000,
                    tu_ngay: "2025-02-01",
                    den_ngay: "2025-02-28",
                    ten_quan: "Quán A",
                    mo_ta: "Giảm 50,000 VNĐ cho đơn hàng trên 200,000 VNĐ",
                    trang_thai: "tạm tắt",
                },
            ],
            del_voucher: {}
        }
    },
    methods: {
        themMoi() {
            this.vouchers.push({ ...this.voucher, id: this.vouchers.length + 1 });
            this.voucher = {};
        },
        formatToVND(number) {
            number = parseInt(number);
            return number.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
            });
        },
    },
}
</script>
<style></style>
