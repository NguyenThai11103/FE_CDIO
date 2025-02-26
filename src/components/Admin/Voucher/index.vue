<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-header d-flex justify-content-between">
                    <h4 class="mt-2"><b>DANH SÁCH MÃ GIẢM GIÁ</b></h4>
                    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addModal"><i class="fa-solid fa-plus me-1"></i>Thêm mã giảm
                    </button>
                </div>
                <div class="card-body table-responsive">
                    <table class="table table-bordered table-hover ">
                        <thead>
                            <tr class="bg-primary text-light">
                                <th class="text-center">#</th>
                                <th class="text-center">Mã Code</th>
                                <th class="text-center">Thời Gian Bắt Đầu</th>
                                <th class="text-center">Thời Gian Kết Thúc</th>
                                <th class="text-center">Loại Giảm</th>
                                <th class="text-center">Số Giảm Giá</th>
                                <th class="text-center">Số Tiền Tối Đa</th>
                                <th class="text-center">Đơn Hàng Tối Thiểu</th>
                                <th class="text-center">Tình Trạng</th>
                                <th class="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-for="(value, index) in list_ma_giam_gia" :key="index">
                                <tr> 
                                    <th class="align-middle">{{ index + 1 }}</th>
                                    <td class="align-middle">{{ value.code }}</td>
                                    <td class="align-middle text-center">{{ value.ngay_bat_dau }}</td>
                                    <td class="align-middle text-center">{{ value.ngay_ket_thuc }}</td>
                                    <td class="align-middle">
                                        <template v-if="value.loai_giam_gia == 0">
                                            Giảm %
                                        </template>
                                        <template v-else>
                                            Tiền Mặt
                                        </template>
                                    </td>
                                    <td class="align-middle text-end">{{ value.so_giam_gia }}</td>
                                    <td class="align-middle text-end">{{ value.so_tien_toi_da }}</td>
                                    <td class="align-middle text-end">{{ value.don_hang_toi_thieu }}</td>
                                    <td class="align-middle text-center">
                                        <button v-if="value.tinh_trang == 1"
                                            class="btn btn-info">Hiển thị</button>
                                        <button v-else class="btn btn-secondary">Tạm
                                            tắt</button>
                                    </td>
                                    <td class="align-middle text-center">
                                        <button v-on:click="Object.assign(edit_ma_giam_gia, value)"
                                            class="btn btn-success me-2" data-bs-toggle="modal"
                                            data-bs-target="#updateModal">Cập nhật</button>
                                        <button v-on:click="del_ma_giam_gia = value" class="btn btn-danger"
                                            data-bs-toggle="modal" data-bs-target="#delModal">Xóa</button>
                                    </td>
                                </tr>
                            </template>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="addModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Thêm Mã Giảm Giá</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="mb-2 col-6">
                            <label>Mã Code</label>
                            <input type="text" class="form-control mt-2">
                        </div>
                        <div class="mb-2 col-6">
                            <label>Thời Gian Bắt Đầu</label>
                            <input type="date" class="form-control mt-2">
                        </div>
                        <div class="mb-2 col-6">
                            <label>Thời Gian Kết Thúc</label>
                            <input type="date" class="form-control mt-2">
                        </div>
                        <div class="mb-2 col-6">
                            <label>Loại Giảm</label>
                            <select class="form-control mt-2">
                                <option value="0">Giảm %</option>
                                <option value="1">Tiền Mặt</option>
                            </select>
                        </div>
                        <div class="mb-2 col-6">
                            <label>Số Giảm Giá</label>
                            <input type="number" class="form-control mt-2">
                        </div>
                        <div class="mb-2 col-6">
                            <label>Số Tiền Tối Đa</label>
                            <input type="number" class="form-control mt-2">
                        </div>
                        <div class="mb-2 col-6">
                            <label>Đơn Hàng Tối Thiểu</label>
                            <input type="number" class="form-control mt-2">
                        </div>
                        <div class="mb-2 col-6">
                            <label>Tình trạng</label>
                            <select class="form-control mt-2">
                                <option value="0">Tạm Tắt</option>
                                <option value="1">Hiển Thị</option>
                            </select>
                        </div>
                    </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Cập
                        nhật</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Cập Nhật Mã Giảm Giá</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="mb-2 col-6">
                            <label>Mã Code</label>
                            <input v-model="edit_ma_giam_gia.code" type="text" class="form-control mt-2">
                        </div>
                        <div class="mb-2 col-6">
                            <label>Thời Gian Bắt Đầu</label>
                            <input v-model="edit_ma_giam_gia.ngay_bat_dau" type="date" class="form-control mt-2">
                        </div>
                        <div class="mb-2 col-6">
                            <label>Thời Gian Kết Thúc</label>
                            <input v-model="edit_ma_giam_gia.ngay_ket_thuc" type="date" class="form-control mt-2">
                        </div>
                        <div class="mb-2 col-6">
                            <label>Loại Giảm</label>
                            <select v-model="edit_ma_giam_gia.loai_giam_gia" class="form-control mt-2">
                                <option value="0">Giảm %</option>
                                <option value="1">Tiền Mặt</option>
                            </select>
                        </div>
                        <div class="mb-2 col-6">
                            <label>Số Giảm Giá</label>
                            <input v-model="edit_ma_giam_gia.so_giam_gia" type="number" class="form-control mt-2">
                        </div>
                        <div class="mb-2 col-6">
                            <label>Số Tiền Tối Đa</label>
                            <input v-model="edit_ma_giam_gia.so_tien_toi_da" type="number" class="form-control mt-2">
                        </div>
                        <div class="mb-2 col-6">
                            <label>Đơn Hàng Tối Thiểu</label>
                            <input v-model="edit_ma_giam_gia.don_hang_toi_thieu" type="number" class="form-control mt-2">
                        </div>
                        <div class="mb-2 col-6">
                            <label>Tình trạng</label>
                            <select v-model="edit_ma_giam_gia.tinh_trang" class="form-control mt-2">
                                <option value="0">Tạm Tắt</option>
                                <option value="1">Hiển Thị</option>
                            </select>
                        </div>
                    </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Cập
                        nhật</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="delModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
             <div class="modal-content">
                <div class="modal-header">
                   <h1 class="modal-title fs-5" id="exampleModalLabel">Xóa Mã Giảm Giá</h1>
                   <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                   <div class="alert alert-danger" role="alert">
                      Bạn có chắc muốn xóa <b class="text-danger">{{ del_ma_giam_gia.code }}</b> này không?
                   </div>
                </div>
                <div class="modal-footer">
                   <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                   <button  type="button" class="btn btn-primary" data-bs-dismiss="modal">Xác
                      nhận</button>
                </div>
             </div>
          </div>
       </div>
</template>
<script>
export default {
    data() {
        return {
            edit_ma_giam_gia: {},
            del_ma_giam_gia: {},
            them_ma_giam_gia: {},
            list_ma_giam_gia: [
    {
        "code": "DISCOUNT04",
        "tinh_trang": 1,
        "ngay_bat_dau": "2024-01-01",
        "ngay_ket_thuc": "2024-01-31",
        "loai_giam_gia": 0,
        "so_giam_gia": 15,
        "so_tien_toi_da": 50000,
        "don_hang_toi_thieu": 200000
    },
    {
        "code": "SALE2024",
        "tinh_trang": 1,
        "ngay_bat_dau": "2024-02-01",
        "ngay_ket_thuc": "2024-02-29",
        "loai_giam_gia": 1,
        "so_giam_gia": 30000,
        "so_tien_toi_da": 30000,
        "don_hang_toi_thieu": 150000
    },
    {
        "code": "TET2024",
        "tinh_trang":0,
        "ngay_bat_dau": "2024-02-08",
        "ngay_ket_thuc": "2024-02-14",
        "loai_giam_gia": 0,
        "so_giam_gia": 25,
        "so_tien_toi_da": 100000,
        "don_hang_toi_thieu": 300000
    },
    {
        "code": "SPRING50",
        "tinh_trang": 0,
        "ngay_bat_dau": "2024-03-01",
        "ngay_ket_thuc": "2024-03-31",
        "loai_giam_gia": 1,
        "so_giam_gia": 50000,
        "so_tien_toi_da": 50000,
        "don_hang_toi_thieu": 250000
    },
    {
        "code": "SUMMER30",
        "tinh_trang": 1,
        "ngay_bat_dau": "2024-06-01",
        "ngay_ket_thuc": "2024-08-31",
        "loai_giam_gia": 0,
        "so_giam_gia": 30,
        "so_tien_toi_da": 200000,
        "don_hang_toi_thieu": 500000
    },
    {
        "code": "FLASH20",
        "tinh_trang": 1,
        "ngay_bat_dau": "2024-04-15",
        "ngay_ket_thuc": "2024-04-16",
        "loai_giam_gia": 0,
        "so_giam_gia": 20,
        "so_tien_toi_da": 80000,
        "don_hang_toi_thieu": 300000
    },
    {
        "code": "WEEKEND",
        "tinh_trang": 0,
        "ngay_bat_dau": "2024-03-09",
        "ngay_ket_thuc": "2024-03-10",
        "loai_giam_gia": 1,
        "so_giam_gia": 40000,
        "so_tien_toi_da": 40000,
        "don_hang_toi_thieu": 200000
    },
    {
        "code": "NEWMEMBER",
        "tinh_trang": 1,
        "ngay_bat_dau": "2024-01-01",
        "ngay_ket_thuc": "2024-12-31",
        "loai_giam_gia": 0,
        "so_giam_gia": 10,
        "so_tien_toi_da": 30000,
        "don_hang_toi_thieu": 100000
    },
    {
        "code": "HOLIDAY",
        "tinh_trang": 1,
        "ngay_bat_dau": "2024-04-30",
        "ngay_ket_thuc": "2024-05-01",
        "loai_giam_gia": 1,
        "so_giam_gia": 100000,
        "so_tien_toi_da": 100000,
        "don_hang_toi_thieu": 500000
    },
    {
        "code": "AUTUMN25",
        "tinh_trang": 0,
        "ngay_bat_dau": "2024-09-01",
        "ngay_ket_thuc": "2024-11-30",
        "loai_giam_gia": 0,
        "so_giam_gia": 25,
        "so_tien_toi_da": 150000,
        "don_hang_toi_thieu": 400000
    },
    {
        "code": "WINTER40",
        "tinh_trang": 1,
        "ngay_bat_dau": "2024-12-01",
        "ngay_ket_thuc": "2024-12-31",
        "loai_giam_gia": 0,
        "so_giam_gia": 40,
        "so_tien_toi_da": 300000,
        "don_hang_toi_thieu": 600000
    },
    {
        "code": "SPECIAL100",
        "tinh_trang": 0,
        "ngay_bat_dau": "2024-07-07",
        "ngay_ket_thuc": "2024-07-07",
        "loai_giam_gia": 1,
        "so_giam_gia": 100000,
        "so_tien_toi_da": 100000,
        "don_hang_toi_thieu": 300000
    },
    {
        "code": "BIRTHDAY",
        "tinh_trang": 0,
        "ngay_bat_dau": "2024-01-01",
        "ngay_ket_thuc": "2024-12-31",
        "loai_giam_gia": 0,
        "so_giam_gia": 20,
        "so_tien_toi_da": 100000,
        "don_hang_toi_thieu": 300000
    },
    {
        "code": "BLACKFRIDAY",
        "tinh_trang": 1,
        "ngay_bat_dau": "2024-11-24",
        "ngay_ket_thuc": "2024-11-24",
        "loai_giam_gia": 0,
        "so_giam_gia": 50,
        "so_tien_toi_da": 500000,
        "don_hang_toi_thieu": 1000000
    },
    {
        "code": "CYBER50",
        "tinh_trang": 1,
        "ngay_bat_dau": "2024-11-27",
        "ngay_ket_thuc": "2024-11-27",
        "loai_giam_gia": 1,
        "so_giam_gia": 50000,
        "so_tien_toi_da": 50000,
        "don_hang_toi_thieu": 200000
    },
    {
        "code": "FREESHIP",
        "tinh_trang": 1,
        "ngay_bat_dau": "2024-01-01",
        "ngay_ket_thuc": "2024-12-31",
        "loai_giam_gia": 1,
        "so_giam_gia": 20000,
        "so_tien_toi_da": 20000,
        "don_hang_toi_thieu": 100000
    },
    {
        "code": "MIDNIGHT",
        "tinh_trang": 0,
        "ngay_bat_dau": "2024-05-15",
        "ngay_ket_thuc": "2024-05-15",
        "loai_giam_gia": 0,
        "so_giam_gia": 35,
        "so_tien_toi_da": 200000,
        "don_hang_toi_thieu": 400000
    },
    {
        "code": "PAYDAY",
        "tinh_trang": 0,
        "ngay_bat_dau": "2024-05-25",
        "ngay_ket_thuc": "2024-05-28",
        "loai_giam_gia": 1,
        "so_giam_gia": 80000,
        "so_tien_toi_da": 80000,
        "don_hang_toi_thieu": 300000
    },
    {
        "code": "VIP2024",
        "tinh_trang": 1,
        "ngay_bat_dau": "2024-01-01",
        "ngay_ket_thuc": "2024-12-31",
        "loai_giam_gia": 0,
        "so_giam_gia": 30,
        "so_tien_toi_da": 1000000,
        "don_hang_toi_thieu": 2000000
    },
    {
        "code": "LUCKY888",
        "tinh_trang": 0,
        "ngay_bat_dau": "2024-08-08",
        "ngay_ket_thuc": "2024-08-08",
        "loai_giam_gia": 1,
        "so_giam_gia": 88000,
        "so_tien_toi_da": 88000,
        "don_hang_toi_thieu": 500000
    }
]



        }
    },
}
</script>
<style></style>