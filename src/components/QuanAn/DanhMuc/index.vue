<template>
    <!-- them moi -->
    <div class="modal fade" id="themmoi" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header ">
                    <h1 class="modal-title fs-5 " id="exampleModalLabel">Thêm Mới Danh Mục</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-2">
                        <label>Tên Danh Mục</label>
                        <input v-model="create_danh_muc.ten_danh_muc" type="text" class="form-control mt-2">
                    </div>
                    <div class="mb-2">
                        <label>Slug</label>
                        <input v-model="create_danh_muc.slug_danh_muc" type="text" class="form-control mt-2">
                    </div>
                    <div class="mb-2">
                        <label>Hình Ảnh</label>
                        <input v-model="create_danh_muc.hinh_anh" type="text" class="form-control mt-2">
                    </div>
                    <div class="mb-2">
                        <label>Dạnh Mục Cha</label>
                        <select v-model="create_danh_muc.id_danh_muc_cha" class="form-control mt-2">
                            <option value="">Không Có</option>
                            <template v-for="(value, index) in list_danh_muc" :key="index">
                                <option v-if="value.id_danh_muc_cha == null" :value="value.id">{{ value.ten_danh_muc }}
                                </option>
                            </template>
                        </select>
                    </div>
                    <div class="mb-2">
                        <label>Trạng Thái</label>
                        <select v-model="create_danh_muc.trang_thai" class="form-select mt-2">
                            <option value="0">Tạm Tắt</option>
                            <option value="1">Hoạt Động</option>
                        </select>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                        <button type="button" class="btn btn-primary" @click="themDanhMuc()" data-bs-dismiss="modal">Thêm Mới</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal Cập Nhật -->
    <div class="modal fade" id="capnhat" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header ">
                    <h5 class="modal-title " id="editModalLabel">Cập Nhật Danh Mục</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-2">
                        <label>Tên Danh Mục</label>
                        <input v-model="cap_nhat_danh_muc.ten_danh_muc" type="text" class="form-control mt-2">
                    </div>
                    <div class="mb-2">
                        <label>Slug</label>
                        <input v-model="cap_nhat_danh_muc.slug_danh_muc" type="text" class="form-control mt-2">
                    </div>
                    <div class="mb-2">
                        <label>Hình Ảnh</label>
                        <input v-model="cap_nhat_danh_muc.hinh_anh" type="text" class="form-control mt-2">
                    </div>
                    <div class="mb-2">
                        <label>Dạnh Mục Cha</label>
                        <select v-model="cap_nhat_danh_muc.id_danh_muc_cha" class="form-control mt-2">
                            <option value="">Không Có</option>
                            <template v-for="(value, index) in list_danh_muc" :key="index">
                                <option v-if="value.id_danh_muc_cha == null" :value="value.id">{{ value.ten_danh_muc }}
                                </option>
                            </template>
                        </select>
                    </div>
                    <div class="mb-2">
                        <label>Trạng Thái</label>
                        <select v-model="cap_nhat_danh_muc.trang_thai" class="form-control mt-2">
                            <option value="0">Tạm Tắt</option>
                            <option value="1">Hoạt Động</option>
                        </select>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Lưu Thay Đổi</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal Xóa -->
    <div class="modal fade" id="xoa" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg-danger text-white">
                    <h5 class="modal-title text-white" id="deleteModalLabel">Xóa Danh Mục</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    Bạn có chắc muốn xóa danh mục <b class="text-danger">{{ del_danh_muc.ten_danh_muc }}</b> này
                    không?
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Xóa</button>
                </div>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-header">
            <div class="d-flex justify-content-between align-items-center">
                <h6 class="mt-2"><b>DANH SÁCH DANH MỤC</b></h6>
                <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#themmoi">Thêm Mới</button>
            </div>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th class="align-middle text-center">#</th>
                            <th class="align-middle text-center">Tên Danh Mục</th>
                            <th class="align-middle text-center">Slug</th>
                            <th class="align-middle text-center">Hình Ảnh</th>
                            <th class="align-middle text-center">Danh Mục Cha</th>
                            <th class="align-middle text-center">Trạng Thái</th>
                            <th class="align-middle text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <template v-for="(value, index) in list_danh_muc" :key="index">
                            <tr>
                                <td class="align-middle text-center">{{ index + 1 }}</td>
                                <td class="align-middle">{{ value.ten_danh_muc }}</td>
                                <td class="align-middle">{{ value.slug_danh_muc }}</td>
                                <td class="align-middle text-center">
                                    <img :src="value.hinh_anh" alt="Hình ảnh" width="50">
                                </td>
                                <td class="align-middle text-center">
                                    {{ value.id_danh_muc_cha ? `${value.id_danh_muc_cha}` : "Không Có" }}
                                </td>
                                <td class="align-middle text-center text-nowrap">
                                    <button :class="value.trang_thai === 1 ? 'btn btn-success' : 'btn btn-secondary'"
                                        style="width: 100px;">
                                        {{ value.trang_thai === 1 ? "Hoạt Động" : "Tạm Tắt" }}
                                    </button>
                                </td>
                                <td class="align-middle text-center text-nowrap">
                                    <button v-on:click="Object.assign(cap_nhat_danh_muc, value)"
                                        class="btn btn-primary me-1" style="width: 100px;" data-bs-toggle="modal"
                                        data-bs-target="#capnhat">Cập Nhật</button>
                                    <button v-on:click="Object.assign(del_danh_muc, value)" data-bs-toggle="modal"
                                        data-bs-target="#xoa" class="btn btn-danger" style="width: 100px;">Xóa</button>
                                </td>
                            </tr>
                        </template>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            create_danh_muc: {
                ten_danh_muc: '',
                slug_danh_muc: '',
                hinh_anh: '',
                id_danh_muc_cha: '',
                trang_thai: 0
            },
            del_danh_muc: {
                ten_danh_muc: '',
                slug_danh_muc: '',
                hinh_anh: '',
                id_danh_muc_cha: '',
                trang_thai: 0
            },
            cap_nhat_danh_muc: {
                ten_danh_muc: '',
                slug_danh_muc: '',
                hinh_anh: '',
                id_danh_muc_cha: '',
                trang_thai: 0
            },
            list_danh_muc: [
                {
                    id: 1,
                    ten_danh_muc: "Cơm",
                    slug_danh_muc: "com",
                    hinh_anh: "https://baothainguyen.vn/file/e7837c027f6ecd14017ffa4e5f2a0e34/052023/quan-com-tam-o-ha-noi-_20230524102142.jpg",
                    id_danh_muc_cha: null,
                    trang_thai: 1,
                },
                {
                    id: 2,
                    ten_danh_muc: "Bún/Phở",
                    slug_danh_muc: "bun-pho",
                    hinh_anh: "https://image.tienphong.vn/w890/Uploaded/2025/rkznae/2016_05_10/pho_bo_tai_nam_FQJO.jpg",
                    id_danh_muc_cha: null,
                    trang_thai: 1,
                },
                {
                    id: 3,
                    ten_danh_muc: "Súp",
                    slug_danh_muc: "sup",
                    hinh_anh: "https://media.loveitopcdn.com/30784/193037-8.jpg",
                    id_danh_muc_cha: null,
                    trang_thai: 1,
                },
                {
                    id: 4,
                    ten_danh_muc: "Gỏi",
                    slug_danh_muc: "goi",
                    hinh_anh: "https://cdn.tgdd.vn/2021/09/CookRecipe/GalleryStep/goi-buoi-tom-thit-23.jpg",
                    id_danh_muc_cha: null,
                    trang_thai: 0,
                },
                {
                    id: 5,
                    ten_danh_muc: "Kem",
                    slug_danh_muc: "kem",
                    hinh_anh: "https://static.hotdeal.vn/images/695/694824/500x500/146677-ngay-hoi-kem-tuoi-an-kem-thoa-thich-tai-halloween-ice-cream.jpg",
                    id_danh_muc_cha: null,
                    trang_thai: 1,
                },
                {
                    id: 6,
                    ten_danh_muc: "Kem Socola",
                    slug_danh_muc: "kem-socola",
                    hinh_anh: "https://static.hotdeal.vn/images/695/694824/500x500/146677-ngay-hoi-kem-tuoi-an-kem-thoa-thich-tai-halloween-ice-cream.jpg",
                    id_danh_muc_cha: 'Kem',
                    trang_thai: 1,
                },
                {
                    id: 7,
                    ten_danh_muc: "Cơm Chiên",
                    slug_danh_muc: "com-chien",
                    hinh_anh: "https://cdn.eva.vn/upload/3-2023/images/2023-07-28/com-chien-hai-san-ngon-hap-dan-cach-lam-don-gian-nhat-5-1690517403-179-width605height416.jpg",
                    id_danh_muc_cha: 'Cơm',
                    trang_thai: 1,
                }
            ],
        };
    },
    methods: {
        themDanhMuc() {
            this.list_danh_muc.push(this.create_danh_muc);
        },
        // Xóa Danh Mục
        xoaDanhMuc() {
            const index = this.list_danh_muc.findIndex((value) => value.id === this.del_danh_muc.id);
            this.list_danh_muc.splice(index, 1);
        },

    },

};
</script>
