<template>
    <div class="row">
        <div class="col-lg-12 col-md-12">
            <div class="card radius-10 border-top border-0 border-3 border-info">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h5 class="mt-2"><b>Danh Sách Shipper</b></h5>
                    <button data-bs-toggle="modal" data-bs-target="#themMoiModal" class="btn btn-primary">
                        <i class="fa-solid fa-plus"></i> Thêm Mới Shipper
                    </button>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th class="align-middle text-center">STT</th>
                                    <th class="align-middle text-center">Họ Và Tên</th>
                                    <th class="align-middle text-center">Số Điện Thoại</th>
                                    <th class="align-middle text-center">Email</th>
                                    <th class="align-middle text-center">CMMD</th>
                                    <th class="align-middle text-center">Địa Chỉ Thường Trú</th>
                                    <th class="align-middle text-center">Tỉnh Thành</th>
                                    <th class="align-middle text-center">Quận Huyện</th>
                                    <th class="align-middle text-center">Tọa Độ X</th>
                                    <th class="align-middle text-center">Tọa Độ X</th>
                                    <th class="align-middle text-center">Trạng Thái</th>
                                    <th class="align-middle text-center">Tình Trạng</th>
                                    <th class="align-middle text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <template v-for="(value, index) in list_shipper" :key="index">
                                    <tr>
                                        <th class="align-middle text-center">{{ index + 1 }}</th>
                                        <td class="align-middle text-center">
                                            {{ value.ho_va_ten }}
                                        </td>
                                        <td class="align-middle text-center">
                                            {{ value.so_dien_thoai }}
                                        </td>
                                        <td class="align-middle text-center">{{ value.email }}</td>
                                        <td class="align-middle text-center">{{ value.cmnd }}</td>
                                        <td class="align-middle text-center">
                                            {{ value.dia_chi }}
                                        </td>
                                        <td class="align-middle text-center">
                                            {{ value.tinh_thanh }}
                                        </td>
                                        <td class="align-middle text-center">
                                            {{ value.quan_huyen }}
                                        </td>
                                        <td class="align-middle text-center">
                                            {{ value.toa_do_x }}
                                        </td>
                                        <td class="align-middle text-center">
                                            {{ value.toa_do_y }}
                                        </td>
                                        <td class="align-middle text-center">
                                            <button v-if="value.tinh_trang == 1" class="btn btn-success w-100">
                                                Hoạt Động
                                            </button>
                                            <button v-else class="btn btn-danger w-100">
                                                Đã Chặn
                                            </button>
                                        </td>
                                        <td class="align-middle text-center">
                                            <button v-if="value.trang_thai == 1" class="btn btn-success w-100">
                                                Đã Kích Hoạt
                                            </button>
                                            <button v-else class="btn btn-warning w-100">
                                                Chưa Kích Hoạt
                                            </button>
                                        </td>

                                        <td class="align-middle text-center">
                                            <button v-on:click="Object.assign(update, value)" data-bs-toggle="modal"
                                                data-bs-target="#capNhatModal" class="btn btn-primary text-center me-2">
                                                Cập Nhật
                                            </button>
                                            <button v-on:click="Object.assign(del, value)" data-bs-toggle="modal"
                                                data-bs-target="#xoaModal" class="btn btn-danger text-center">
                                                Xóa
                                            </button>
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
    <!-- Modal Thêm Mới-->
    <div class="modal fade" id="themMoiModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header bg-primary">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                        Thêm Mới Shipper
                    </h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="mb-2">
                                <label class="mb-1">Họ Và Tên</label>
                                <input v-model="newShipper.ho_va_ten" type="text" class="form-control" />
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="mb-2">
                                <label class="mb-1">Số Điện Thoại</label>
                                <input v-model="newShipper.so_dien_thoai" type="text" class="form-control" />
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="mb-2">
                                <label class="mb-1">Email</label>
                                <input v-model="newShipper.email" type="text" class="form-control" />
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="mb-2">
                                <label class="mb-1">Chứng Minh Nhân Dân/Căn Cước Công Dân</label>
                                <input v-model="newShipper.cmnd" type="text" class="form-control" />
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="mb-2">
                                <label class="mb-1">Nhập Mật Khẩu</label>
                                <input v-model="newShipper.password" type="password" class="form-control" />
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="mb-2">
                                <label class="mb-1">Nhập Lại Mật Khẩu</label>
                                <input v-model="newShipper.confirm_password" type="password" class="form-control" />
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="mb-2">
                                <label class="mb-1">Địa Chỉ Thường Trú</label>
                                <input v-model="newShipper.dia_chi" type="text" class="form-control" />
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="mb-2">
                                <label class="mb-1">Tỉnh Thành</label>
                                <select v-model="newShipper.tinh_thanh" class="form-select">
                                    <option value="0">Đà Nẵng</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="mb-2">
                                <label class="mb-1">Quận Huyện</label>
                                <select v-model="newShipper.quan_huyen" class="form-select">
                                    <template v-for="(value, index) in list_quan_huyen" :key="index">
                                        <option :value="value.id">
                                            {{ value.ten_quan_huyen }}
                                        </option>
                                    </template>
                                </select>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="mb-2">
                                <label class="mb-1">Tọa Độ X</label>
                                <input v-model="newShipper.toa_do_x" type="number" class="form-control" />
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="mb-2">
                                <label class="mb-1">Tọa Độ Y</label>
                                <input v-model="newShipper.toa_do_y" type="number" class="form-control" />
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="mb-2">
                                <label class="mb-1">Trạng Thái</label>
                                <select v-model="newShipper.trang_thai" class="form-select">
                                    <option value="1">Hoạt Động</option>
                                    <option value="0">Đã Chặn</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Đóng
                    </button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="addShipper()">
                        Xác Nhận
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal Cập Nhật-->
    <div class="modal fade" id="capNhatModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header bg-primary">
                    <h1 class="modal-title fs-5 text-white" id="exampleModalLabel">
                        Cập Nhật Shipper
                        <span class="">{{ update.ho_va_ten }}</span>
                    </h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="mb-2">
                                <label class="mb-1">Họ Và Tên</label>
                                <input v-model="update.ho_va_ten" type="text" class="form-control" />
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="mb-2">
                                <label class="mb-1">Số Điện Thoại</label>
                                <input v-model="update.so_dien_thoai" type="text" class="form-control" />
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="mb-2">
                                <label class="mb-1">Email</label>
                                <input v-model="update.email" type="text" class="form-control" />
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="mb-2">
                                <label class="mb-1">Chứng Minh Nhân Dân/Căn Cước Công Dân</label>
                                <input v-model="update.cmnd" type="text" class="form-control" />
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="mb-2">
                                <label class="mb-1">Địa Chỉ Thường Trú</label>
                                <input v-model="update.dia_chi" type="text" class="form-control" />
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="mb-2">
                                <label class="mb-1">Tỉnh Thành</label>
                                <input v-model="update.tinh_thanh" type="text" class="form-control" />
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="mb-2">
                                <label class="mb-1">Quận Huyện</label>
                                <input v-model="update.quan_huyen" type="text" class="form-control" />
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="mb-2">
                                <label class="mb-1">Tọa Độ X</label>
                                <input v-model="update.toa_do_x" type="number" class="form-control" />
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="mb-2">
                                <label class="mb-1">Tọa Độ Y</label>
                                <input v-model="update.toa_do_y" type="number" class="form-control" />
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="mb-2">
                                <label class="mb-1">Trạng Thái</label>
                                <select v-model="update.trang_thai" class="form-select">
                                    <option value="1">Hoạt Động</option>
                                    <option value="0">Đã Chặn</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Close
                    </button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="updateShipper()">
                        Xác Nhận
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal Xóa-->
    <div class="modal fade" id="xoaModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                        Xóa Shipper <span class="text-danger">{{ del.ho_va_ten }}</span>
                    </h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-danger border-0 bg-danger alert-dismissible fade show py-2">
                        <div class="d-flex align-items-center">
                            <div class="font-35 text-white">
                                <i class="bx bxs-message-square-x"></i>
                            </div>
                            <div class="ms-3">
                                <h6 class="mb-0 text-white">
                                    Xác Nhận xóa Shipper {{ del.ho_va_ten }}
                                </h6>
                                <div class="text-white">
                                    LƯU Ý: Không thể khôi phục khi đã ấn xác nhận xóa!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Close
                    </button>
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal" @click="deleteShipper()">
                        Xác Nhận Xóa
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list_shipper: [
                {
                    id: 1,
                    ho_va_ten: "Nguyễn Văn An",
                    so_dien_thoai: "0901234567",
                    email: "nguyenvanan@gmail.com",
                    cmnd: "123456789012",
                    dia_chi: "123 Nguyễn Văn Linh",
                    toa_do_x: "10.762622",
                    toa_do_y: "106.660172",
                    tinh_thanh: "Đà Nẵng",
                    quan_huyen: "Khuê Trung",
                    trang_thai: 1,
                    tinh_trang: 1,
                },
                {
                    id: 2,
                    ho_va_ten: "Trần Thị Bình",
                    so_dien_thoai: "0912345678",
                    email: "tranthibinh@gmail.com",
                    cmnd: "123456789013",
                    dia_chi: "456 Điện Biên Phủ",
                    toa_do_x: "10.775345",
                    toa_do_y: "106.684172",
                    tinh_thanh: "Đà Nẵng",
                    quan_huyen: "Ngũ Hành Sơn",
                    trang_thai: 0,
                    tinh_trang: 1,
                },
                {
                    id: 3,
                    ho_va_ten: "Lê Văn Cường",
                    so_dien_thoai: "0923456789",
                    email: "levancuong@gmail.com",
                    cmnd: "123456789014",
                    dia_chi: "789 Lê Văn Việt",
                    toa_do_x: "10.841622",
                    toa_do_y: "106.790172",
                    tinh_thanh: "Đà Nẵng",
                    quan_huyen: "Hòa Vang",
                    trang_thai: 1,
                    tinh_trang: 0,
                },
            ],
            list_tinh_thanh: [
                {
                    id: 1,
                    ten_tinh_thanh: "Đà Nẵng",
                },
            ],
            list_quan_huyen: [
                {
                    id: 1,
                    ten_quan_huyen: "Hải Châu",
                },
                {
                    id: 2,
                    ten_quan_huyen: "Thanh Khê",
                },
                {
                    id: 3,
                    ten_quan_huyen: "Sơn Trà",
                },
                {
                    id: 4,
                    ten_quan_huyen: "Ngũ Hành Sơn",
                },
                {
                    id: 5,
                    ten_quan_huyen: "Liên Chiểu",
                },
                {
                    id: 6,
                    ten_quan_huyen: "Cẩm Lệ",
                },
                {
                    id: 7,
                    ten_quan_huyen: "Hòa Vang",
                },
                {
                    id: 8,
                    ten_quan_huyen: "Hoàng Sa",
                },
            ],
            newShipper: {},
            del: {},
            update: {},
        };
    },
    methods: {
        addShipper() {
            this.list_shipper.push({ ...this.newShipper, id: this.list_shipper.length + 1 });
            this.resetNewShipper();
        },
        updateShipper() {
            const index = this.list_shipper.findIndex(shipper => shipper.id === this.update.id);
            if (index !== -1) {
                this.list_shipper.splice(index, 1, this.update);
            }
        },
        deleteShipper() {
            const index = this.list_shipper.findIndex(shipper => shipper.id === this.del.id);
            if (index !== -1) {
                this.list_shipper.splice(index, 1);
            }
        },
        resetNewShipper() {
            this.newShipper = {
                ho_va_ten: '',
                so_dien_thoai: '',
                email: '',
                cmnd: '',
                dia_chi: '',
                toa_do_x: '',
                toa_do_y: '',
                tinh_thanh: '',
                quan_huyen: '',
                trang_thai: 1,
            };
        }
    },
};
</script>
<style></style>