<template>
    <div class="card">
        <div class="card-header ">
            <div class="d-flex justify-content-between align-items-center">
                <h6 class="mt-2"><b>DANH SÁCH MÓN ĂN</b></h6>
                <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#themmoi">Thêm Mới Món
                    Ăn</button>
            </div>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-bordered table-hover ">
                    <thead>
                        <tr>
                            <th class="text-center align-middle">#</th>
                            <th class="text-center align-middle">Tên Món Ăn</th>
                            <th class="text-center align-middle">Slug Món Ăn</th>
                            <th class="text-center align-middle">Giá Bán</th>
                            <th class="text-center align-middle">Giá Khuyến Mãi</th>
                            <th class="text-center align-middle">Mô Tả</th>
                            <th class="text-center align-middle">Tên Quán</th>
                            <th class="text-center align-middle">Hình Ảnh</th>
                            <th class="text-center align-middle">Tình Trạng</th>
                            <th class="text-center align-middle">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(value, index) in danhSachMonAn" :key="index">
                            <td class="text-center align-middle">{{ index + 1 }}</td>
                            <td class="text-center align-middle">{{ value.ten_mon_an }}</td>
                            <td class="text-center align-middle">{{ value.slug_mon_an }}</td>
                            <td class="text-end align-middle">{{ formatVND(value.gia_ban) }}</td>
                            <td class="text-end align-middle">{{ formatVND(value.gia_khuyen_mai) }}</td>
                            <td class="align-middle">{{ value.mo_ta }}</td>
                            <td class="text-center align-middle">{{ value.ten_quan }}</td>
                            <td class="text-center align-middle">
                                <img :src="value.hinhAnh" alt="Hình ảnh món ăn" style="width: 50px; height: 50px;" />
                            </td>
                            <td class="text-center align-middle">
                                <button :class="value.tinh_trang ? 'btn btn-success' : 'btn btn-danger'">
                                    {{ value.tinh_trang ? 'Còn hàng' : 'Hết hàng' }}
                                </button>
                            </td>
                            <td class="text-center align-middle">
                                <button v-on:click="Object.assign(edit_mon_an, value)" data-bs-toggle="modal"
                                    data-bs-target="#capnhat" class="btn btn-primary me-1 " style="width: 100px ;">Cập
                                    Nhật</button>
                                <button v-on:click="Object.assign(delete_mon_an, value)" data-bs-toggle="modal"
                                    data-bs-target="#xoa" class="btn btn-danger" style="width: 100px;">Xóa</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <div class="modal fade" id="themmoi" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header bg-primary text-white">
                    <h1 class="modal-title fs-5 text-white" id="exampleModalLabel">Thêm Mới Món Ăn</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="mb-2">
                                <label>Tên Món Ăn</label>
                                <input type="text" class="form-control mt-2" v-model="create_mon_an.ten_mon_an">
                            </div>
                            <div class="mb-2">
                                <label>Slug Món Ăn</label>
                                <input type="text" class="form-control mt-2" v-model="create_mon_an.slug_mon_an">
                            </div>
                            <div class="mb-2">
                                <label>Giá Bán</label>
                                <input type="number" class="form-control mt-2" v-model="create_mon_an.gia_ban">
                            </div>
                            <div class="mb-2">
                                <label>Giá Khuyến Mãi</label>
                                <input type="number" class="form-control mt-2" v-model="create_mon_an.gia_khuyen_mai">
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="mb-2">
                                <label>Mô Tả</label>
                                <input type="text" class="form-control mt-2" v-model="create_mon_an.mo_ta">
                            </div>
                            <div class="mb-2">
                                <label>Tên Quán</label>
                                <input type="text" class="form-control mt-2" v-model="create_mon_an.ten_quan">
                            </div>
                            <div class="mb-2">
                                <label>Hình Ảnh</label>
                                <input type="text" class="form-control mt-2" v-model="create_mon_an.hinhAnh">
                            </div>
                            <div class="mb-2">
                                <label>Tình Trạng</label>
                                <select class="form-select mt-2" v-model="create_mon_an.tinh_trang">
                                    <option value="1">Còn hàng</option>
                                    <option value="0">Hết hàng</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="addMonAn()">Thêm Mới</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="capnhat" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header bg-primary text-white">
                    <h1 class="modal-title fs-5 text-white" id="exampleModalLabel">Cập Nhật Món Ăn</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="mb-2">
                                <label>Tên Món Ăn</label>
                                <input type="text" class="form-control mt-2" v-model="edit_mon_an.ten_mon_an">
                            </div>
                            <div class="mb-2">
                                <label>Slug Món Ăn</label>
                                <input type="text" class="form-control mt-2" v-model="edit_mon_an.slug_mon_an">
                            </div>
                            <div class="mb-2">
                                <label>Giá Bán</label>
                                <input type="number" class="form-control mt-2" v-model="edit_mon_an.gia_ban">
                            </div>
                            <div class="mb-2">
                                <label>Giá Khuyến Mãi</label>
                                <input type="number" class="form-control mt-2" v-model="edit_mon_an.gia_khuyen_mai">
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="mb-2">
                                <label>Mô Tả</label>
                                <input type="text" class="form-control mt-2" v-model="edit_mon_an.mo_ta">
                            </div>
                            <div class="mb-2">
                                <label>Tên Quán</label>
                                <input type="text" class="form-control mt-2" v-model="edit_mon_an.ten_quan">
                            </div>
                            <div class="mb-2">
                                <label>Hình Ảnh</label>
                                <input type="text" class="form-control mt-2" v-model="edit_mon_an.hinhAnh">
                            </div>
                            <div class="mb-2">
                                <label>Tình Trạng</label>
                                <select class="form-select mt-2" v-model="edit_mon_an.tinh_trang">
                                    <option value="1">Còn hàng</option>
                                    <option value="0">Hết hàng</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="updateMonAn()">Cập Nhật</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="xoa" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg-danger text-white">
                    <h1 class="modal-title fs-5 text-white" id="exampleModalLabel">Xóa Món Ăn</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    Bạn có chắc chắn muốn xóa món ăn:
                    <b class="text-danger">{{ delete_mon_an.ten_mon_an }}</b> không?
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal" @click="deleteMonAn()">Xóa</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            danhSachMonAn: [
                {
                    ten_mon_an: "Phở Bò",
                    slug_mon_an: "pho-bo",
                    gia_ban: 50000,
                    gia_khuyen_mai: 45000,
                    mo_ta: "Phở bò thơm ngon truyền thống.",
                    ten_quan: "Quán A",
                    hinhAnh: "https://hidafoods.vn/wp-content/uploads/2024/01/nau-pho-bo-nam-dinh-1.jpg",
                    tinh_trang: 1,
                },
                {
                    ten_mon_an: "Bánh Mì",
                    slug_mon_an: "banh-mi",
                    gia_ban: 20000,
                    gia_khuyen_mai: 18000,
                    mo_ta: "Bánh mì kẹp thịt đầy đặn.",
                    ten_quan: "Quán A",
                    hinhAnh: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFjLZcRo9cohDLSjAe6zuslM5ipk5CDQqgWA&s",
                    tinh_trang: 1,
                },
                {
                    ten_mon_an: "Bún Chả",
                    slug_mon_an: "bun-cha",
                    gia_ban: 60000,
                    gia_khuyen_mai: 55000,
                    mo_ta: "Bún chả Hà Nội đặc trưng.",
                    ten_quan: "Quán A",
                    hinhAnh: "https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:quality(100)/2024_1_12_638406880045931692_cach-lam-bun-cha-ha-noi-0.jpg",
                    tinh_trang: 0,
                },
            ],
            create_mon_an: {
                ten_mon_an: '',
                slug_mon_an: '',
                gia_ban: 0,
                gia_khuyen_mai: 0,
                mo_ta: '',
                ten_quan: '',
                hinhAnh: '',
                tinh_trang: 1
            },
            edit_mon_an: {},
            delete_mon_an: {}
        };
    },
    methods: {
        formatVND(value) {
            return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
        },
        addMonAn() {
            this.danhSachMonAn.push({ ...this.create_mon_an });
            this.resetCreateMonAn();
        },
        updateMonAn() {
            const index = this.danhSachMonAn.findIndex(monAn => monAn.slug_mon_an === this.edit_mon_an.slug_mon_an);
            if (index !== -1) {
                this.$set(this.danhSachMonAn, index, { ...this.edit_mon_an });
            }
        },
        deleteMonAn() {
            this.danhSachMonAn = this.danhSachMonAn.filter(monAn => monAn.slug_mon_an !== this.delete_mon_an.slug_mon_an);
        },
        resetCreateMonAn() {
            this.create_mon_an = {
                ten_mon_an: '',
                slug_mon_an: '',
                gia_ban: 0,
                gia_khuyen_mai: 0,
                mo_ta: '',
                ten_quan: '',
                hinhAnh: '',
                tinh_trang: 1
            };
        }
    }
};
</script>
