<template>
    <div class="row">
        <div class="col-lg-12 col-md-12">
            <div class="card">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h5 class="mt-1"><b>DANH SÁCH QUÁN ĂN</b></h5>
                    <div>
                        <button class="btn btn-primary btn-sm text-end" data-bs-toggle="modal"
                            data-bs-target="#themmMoiModal">
                            <i class="fa-solid fa-plus me-1"></i> Thêm mới
                        </button>
                        <!-- Modal Thêm Mới -->
                        <div class="modal fade" id="themmMoiModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Thêm Mới Quán Ăn</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="row">
                                            <div class="form-group mb-3 col-lg-6">
                                                <label>Tên Quán Ăn</label>
                                                <input v-model="quan_an_create.ten_quan_an" type="text"
                                                    class="form-control" placeholder="Nhập Tên Quán Ăn">
                                            </div>
                                            <div class="form-group mb-3 col-lg-6">
                                                <label>Mật khẩu</label>
                                                <input v-model="quan_an_create.password" type="text"
                                                    class="form-control" placeholder="Mật khẩu">
                                            </div>
                                            <div class="form-group mb-3 col-lg-6">
                                                <label>Email</label>
                                                <input v-model="quan_an_create.email" type="text" class="form-control"
                                                    placeholder="Nhập Email">
                                            </div>
                                            <div class="form-group mb-3 col-lg-6">
                                                <label>Mã Số Thuế</label>
                                                <input v-model="quan_an_create.ma_so_thue" type="number"
                                                    class="form-control" placeholder="Nhập mã số thuế">
                                            </div>
                                            <div class="form-group mb-3 col-lg-12">
                                                <label>Địa Chỉ</label>
                                                <input v-model="quan_an_create.dia_chi" type="text" class="form-control"
                                                    placeholder="Nhập Địa Chỉ">
                                            </div>
                                            <div class="form-group mb-3 col-lg-6">
                                                <label>Số Điện Thoại</label>
                                                <input v-model="quan_an_create.so_dien_thoai" type="text"
                                                    class="form-control" placeholder="Nhập Số điện thoại">
                                            </div>
                                            <div class="form-group mb-3 col-lg-6">
                                                <label>Giờ mở cửa</label>
                                                <input v-model="quan_an_create.gio_mo_cua" type="text"
                                                    class="form-control" placeholder="Nhập giờ mở cửa">
                                            </div>
                                            <div class="form-group mb-3 col-lg-6">
                                                <label>Giờ đóng cửa</label>
                                                <input v-model="quan_an_create.gio_dong_cua" type="text"
                                                    class="form-control" placeholder="Nhập giờ đóng cửa">
                                            </div>
                                            <div class="form-group mb-3 col-lg-6">
                                                <label>Tình trạng</label>
                                                <select v-model="quan_an_create.tinh_trang" class="form-control">
                                                    <option value="">--Chọn tình trạng--</option>
                                                    <option value="1">Hoạt động</option>
                                                    <option value="0">Tạm tắt</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-bs-dismiss="modal">Đóng</button>
                                        <button type="button" class="btn btn-primary" v-on:click="themQuanAn()"
                                            data-bs-dismiss="modal">Thêm mới</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead>
                                <tr class="align-middle text-center text-nowrap bg-info text-white">
                                    <th>#</th>
                                    <th>Tên Quán Ăn</th>
                                    <th>Email</th>
                                    <th>Mã Số Thuế</th>
                                    <th>Địa Chỉ</th>
                                    <th>Số Điện Thoại</th>
                                    <th>Giờ mở cửa</th>
                                    <th>Giờ đóng cửa</th>
                                    <th>Tình Trạng</th>
                                    <th>Kích Hoạt</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <template v-for="(value, index) in list_quan" :key="index">
                                    <tr class="align-middle text-center text-nowrap">
                                        <td>{{ index + 1 }}</td>
                                        <td>{{ value.ten_quan_an }}</td>
                                        <td>{{ value.email }}</td>
                                        <td>{{ value.ma_so_thue }}</td>
                                        <td>{{ value.dia_chi }}</td>
                                        <td>{{ value.so_dien_thoai }}</td>
                                        <td>{{ value.gio_mo_cua }}</td>
                                        <td>{{ value.gio_dong_cua }}</td>
                                        <td>
                                            <button v-if="value.tinh_trang == 1" class="btn btn-success w-100">Hoạt
                                                động</button>
                                            <button v-else class="btn btn-warning w-100">Tạm tắt</button>
                                        </td>
                                        <td>
                                            <button v-if="value.is_active == 1" class="btn btn-success w-100">Đã kích
                                                hoạt</button>
                                            <button v-else class="btn btn-secondary w-100">Chưa kích hoạt</button>
                                        </td>
                                        <td>
                                            <button v-on:click="Object.assign(quan_an_edit, value)"
                                                class="btn btn-info me-2" data-bs-toggle="modal"
                                                data-bs-target="#updateModal">Cập nhật</button>
                                            <button v-on:click="Object.assign(quan_an_delete, value)"
                                                class="btn btn-danger" data-bs-toggle="modal"
                                                data-bs-target="#deleteModal">Xoá</button>
                                        </td>
                                    </tr>
                                </template>
                            </tbody>
                        </table>
                    </div>
                    <!-- Update Modal -->
                    <div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Cập Nhật Tài Khoản</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="row">
                                        <div class="form-group mb-3 col-lg-6">
                                            <label>Tên Quán Ăn</label>
                                            <input v-model="quan_an_edit.ten_quan_an" type="text" class="form-control"
                                                placeholder="Nhập Tên Quán Ăn">
                                        </div>
                                        <div class="form-group mb-3 col-lg-6">
                                            <label>Mật khẩu</label>
                                            <input v-model="quan_an_edit.password" type="text" class="form-control"
                                                placeholder="Mật khẩu">
                                        </div>
                                        <div class="form-group mb-3 col-lg-6">
                                            <label>Email</label>
                                            <input v-model="quan_an_edit.email" type="text" class="form-control"
                                                placeholder="Nhập Email">
                                        </div>
                                        <div class="form-group mb-3 col-lg-6">
                                            <label>Mã Số Thuế</label>
                                            <input v-model="quan_an_edit.ma_so_thue" type="number" class="form-control"
                                                placeholder="Nhập mã số thuế">
                                        </div>
                                        <div class="form-group mb-3 col-lg-12">
                                            <label>Địa Chỉ</label>
                                            <input v-model="quan_an_edit.dia_chi" type="text" class="form-control"
                                                placeholder="Nhập Địa Chỉ">
                                        </div>
                                        <div class="form-group mb-3 col-lg-6">
                                            <label>Số Điện Thoại</label>
                                            <input v-model="quan_an_edit.so_dien_thoai" type="text" class="form-control"
                                                placeholder="Nhập Số điện thoại">
                                        </div>
                                        <div class="form-group mb-3 col-lg-6">
                                            <label>Giờ mở cửa</label>
                                            <input v-model="quan_an_edit.gio_mo_cua" type="text" class="form-control"
                                                placeholder="Nhập giờ mở cửa">
                                        </div>
                                        <div class="form-group mb-3 col-lg-6">
                                            <label>Giờ đóng cửa</label>
                                            <input v-model="quan_an_edit.gio_dong_cua" type="text" class="form-control"
                                                placeholder="Nhập giờ đóng cửa">
                                        </div>
                                        <div class="form-group mb-3 col-lg-6">
                                            <label>Tình trạng</label>
                                            <select v-model="quan_an_edit.tinh_trang" class="form-control">
                                                <option value="">--Chọn tình trạng--</option>
                                                <option value="1">Hoạt động</option>
                                                <option value="0">Tạm tắt</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary"
                                        data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary" v-on:click="capNhatQuanAn()"
                                        data-bs-dismiss="modal">Xác
                                        Nhận</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Delete Modal -->
                    <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Xóa Tài Khoản</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="alert alert-danger" role="alert">
                                        Bạn có chắc chắn muốn xóa quán ăn <b>{{ quan_an_delete.ten_quan_an }}</b>
                                        này chứ
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary"
                                        data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary" v-on:click="xoaQuanAn()"
                                        data-bs-dismiss="modal">Xác
                                        Nhận</button>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    data() {
        return {
            quan_an_create: {},
            quan_an_edit: {},
            quan_an_delete: {},
            list_quan: [],
        }
    },
    mounted() {
        this.layDataQuanAn();
    },
    methods: {
        layDataQuanAn() {
            axios
                .get('http://127.0.0.1:8000/api/admin/quan-an/data', {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("nhan_vien_login"),
                    },
                })
                .then(res => {
                    this.list_quan = res.data.data;
                })
        },
        themQuanAn() {
            axios
                .post('http://127.0.0.1:8000/api/admin/quan-an/create', this.quan_an_create, {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("nhan_vien_login"),
                    },
                })
                .then((res) => {
                    this.quan_an_create = {};
                    this.$toast.success(res.data.message);
                    this.layDataQuanAn();

                })
                .catch(error => {
                    console.error(error);
                });

        },
        xoaQuanAn() {
            axios
                .post('http://127.0.0.1:8000/api/admin/quan-an/delete', this.quan_an_delete, {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("nhan_vien_login"),
                    },
                })
                .then((res) => {
                    this.$toast.success(res.data.message);
                    this.layDataQuanAn();
                })
                .catch(error => {
                    console.error(error);
                });

        },
        capNhatQuanAn() {
            axios
                .post('http://127.0.0.1:8000/api/admin/quan-an/update', this.quan_an_edit, {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("nhan_vien_login"),
                    },
                })
                .then(res => {
                    this.$toast.success(res.data.message);
                    this.layDataQuanAn();
                })
                .catch(error => {
                    console.error(error);
                });
        }


    },
}
</script>
<style></style>