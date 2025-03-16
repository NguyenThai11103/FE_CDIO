<template>
    <div class="modal fade" id="themSP" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header bg-primary text-white">
                    <h1 class="modal-title fs-5 text-white" id="exampleModalLabel">Thêm Mới Loại Món Ăn</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="mb-2">
                                <label>Tên Loại Món Ăn</label>
                                <input type="text" class="form-control mt-2" v-model="new_loai_mon_an.ten_loai_mon_an">
                            </div>
                            <div class="mb-2">
                                <label>Tên Danh Mục</label>
                                <input type="text" class="form-control mt-2" v-model="new_loai_mon_an.id_danh_muc">
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="mb-2">
                                <label>Tên Quán Ăn</label>
                                <input type="text" class="form-control mt-2" v-model="new_loai_mon_an.id_quan_an">
                            </div>
                            <div class="mb-2">
                                <label>Tình Trạng</label>
                                <select class="form-select mt-2" v-model="new_loai_mon_an.tinh_trang">
                                    <option value="1">Hoạt động</option>
                                    <option value="0">Tạm tắt</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="addLoaiMonAn()">Thêm Mới</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="suaSP" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header bg-primary text-white">
                    <h1 class="modal-title fs-5 text-white" id="exampleModalLabel">Cập Nhật Loại Món Ăn</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="mb-2">
                                <label>Tên Loại Món Ăn</label>
                                <input type="text" class="form-control mt-2" v-model="edit_loai_mon_an.ten_loai_mon_an">
                            </div>
                            <div class="mb-2">
                                <label>Tên Danh Mục</label>
                                <input type="text" class="form-control mt-2" v-model="edit_loai_mon_an.id_danh_muc">
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="mb-2">
                                <label>Tên Quán Ăn</label>
                                <input type="text" class="form-control mt-2" v-model="edit_loai_mon_an.id_quan_an">
                            </div>
                            <div class="mb-2">
                                <label>Tình Trạng</label>
                                <select class="form-select mt-2" v-model="edit_loai_mon_an.tinh_trang">
                                    <option value="1">Hoạt động</option>
                                    <option value="0">Tạm tắt</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="updateLoaiMonAn()">Cập Nhật</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="delSP" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg-danger text-white">
                    <h1 class="modal-title fs-5 text-white" id="exampleModalLabel">Xóa Loại Món Ăn</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    Bạn có chắc chắn muốn xóa loại món ăn:
                    <b class="text-danger">{{ delete_loai_mon_an.ten_loai_mon_an }}</b> không?
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal" @click="deleteLoaiMonAn()">Xóa</button>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-header ">
                    <div class="d-flex justify-content-between align-items-center">
                        <h6 class="mt-2"><b>DANH SÁCH LOẠI MÓN ĂN</b></h6>
                        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#themSP">Thêm Mới Loại Món Ăn</button>
                    </div>
                </div>
                <div class="card-body table-responsive">
                    <table class="table table-bordered table-hover ">
                        <thead>
                            <tr>
                                <th class="text-center">#</th>
                                <th class="text-center">Tên Loại Món Ăn</th>
                                <th class="text-center">Tên Danh Mục</th>
                                <th class="text-center">Tên Quán Ăn</th>
                                <th class="text-center">Tình Trạng</th>
                                <th class="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-for="(value, index) in loai_mon_ans" :key="index">
                                <tr>
                                    <th class="align-middle">{{ index + 1 }}</th>
                                    <td class="align-middle text-wrap">{{ value.ten_loai_mon_an }}</td>
                                    <td class="align-middle text-wrap">{{ value.id_danh_muc }}</td>
                                    <td class="align-middle text-center">{{ value.id_quan_an }}</td>
                                    <td class="align-middle text-center">
                                            <button v-if="value.tinh_trang === 1" class="btn btn-success"
                                                style="width: 100px;">Hoạt động</button>
                                            <button v-else class="btn btn-secondary" style="width: 100px;">Tạm
                                                tắt</button>
                                        </td>
                                    <td class="align-middle text-center">
                                        <button v-on:click="Object.assign(edit_loai_mon_an, value)"
                                            class="btn btn-primary me-2" data-bs-toggle="modal"
                                            data-bs-target="#suaSP" style="width: 100px;">Cập nhật</button>
                                        <button v-on:click="Object.assign(delete_loai_mon_an, value)" class="btn btn-danger"
                                            data-bs-toggle="modal" data-bs-target="#delSP" style="width: 100px;">Xóa</button>
                                    </td>
                                </tr>
                            </template>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                loai_mon_ans: [
                    {
                        id: 1,
                        ten_loai_mon_an: "Cơm",
                        id_quan_an: 'Quán A',
                        tinh_trang: 1,
                        id_danh_muc: 'Cơm', 
                    },
                    {
                        id: 2,
                        ten_loai_mon_an: "Bún",
                        id_quan_an: 'Quán A',
                        tinh_trang: 1,
                        id_danh_muc: 'Bún/phở', 
                    },
                    {
                        id: 3,
                        ten_loai_mon_an: "Kem",
                        id_quan_an: 'Quán A',
                        tinh_trang: 0, 
                        id_danh_muc: 'Kem',
                    },
                    {
                        id: 4,
                        ten_loai_mon_an: "Gỏi",
                        id_quan_an: 'Quán A',
                        tinh_trang: 1,
                        id_danh_muc: 'Gỏi', 
                    },
                    {
                        id: 5,
                        ten_loai_mon_an: "Súp",
                        id_quan_an: 'Quán A',
                        tinh_trang: 1,
                        id_danh_muc: 'Súp',
                    },
                ],
                new_loai_mon_an: {
                    ten_loai_mon_an: '',
                    id_danh_muc: '',
                    id_quan_an: '',
                    tinh_trang: 1
                },
                edit_loai_mon_an: {},
                delete_loai_mon_an: {}
            };
        },
        methods: {
            addLoaiMonAn() {
                const newId = this.loai_mon_ans.length + 1;
                this.loai_mon_ans.push({ ...this.new_loai_mon_an, id: newId });
                this.new_loai_mon_an = {
                    ten_loai_mon_an: '',
                    id_danh_muc: '',
                    id_quan_an: '',
                    tinh_trang: 1
                };
            },
            updateLoaiMonAn() {
                const index = this.loai_mon_ans.findIndex(item => item.id === this.edit_loai_mon_an.id);
                if (index !== -1) {
                    this.$set(this.loai_mon_ans, index, this.edit_loai_mon_an);
                }
            },
            deleteLoaiMonAn() {
                this.loai_mon_ans = this.loai_mon_ans.filter(item => item.id !== this.delete_loai_mon_an.id);
            }
        }
    }
</script>
<style></style>