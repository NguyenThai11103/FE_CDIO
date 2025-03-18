<template>
    <div class="container">
        <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-2">
            <div class="col mx-auto">
                <div class="my-4 text-center">
                    <!-- <img src="https://dzfullstack.com/assets/images/logo-img.png" width="180" alt="" /> -->
                </div>
                <div class="card">
                    <div class="card-body">
                        <div class="border p-4 rounded">
                            <div class="text-center">
                                <h3 class="">ĐĂNG KÝ TRỞ THÀNH SHIPPER CÙNG DZFULLSTACK</h3>
                            </div>
                            <div class="login-separater text-center mb-4">
                                <hr />
                            </div>
                            <div class="form-body">
                                <div class="row g-3">
                                    <div class="col-sm-6">
                                        <label class="form-label">Họ Và Tên</label>
                                        <input type="text" class="form-control" />
                                    </div>
                                    <div class="col-sm-6">
                                        <label class="form-label">Email</label>
                                        <input type="email" class="form-control" />
                                    </div>
                                    <div class="col-6">
                                        <label class="form-label">Số Điện Thoại</label>
                                        <input type="text" class="form-control" />
                                    </div>
                                    <div class="col-6">
                                        <label class="form-label">Ngày Sinh</label>
                                        <input type="date" class="form-control" />
                                    </div>
                                    <div class="col-12">
                                        <label class="form-label">Mật Khẩu</label>
                                        <input type="password" class="form-control" />
                                    </div>
                                    <div class="col-12">
                                        <label class="form-label">Nhập Lại Mật Khẩu</label>
                                        <input type="password" class="form-control" />
                                    </div>
                                    <div class="col-6">
                                        <label class="form-label">Tỉnh Thành</label>
                                        <select class="form-select">
                                            <option>-- Chọn Tỉnh Thành --</option>
                                            <option value="0">Đà Nẵng</option>
                                            <option value="1">Hồ Chí Minh</option>
                                            <option value="2">Hà Nội</option>
                                        </select>
                                    </div>
                                    <div class="col-6">
                                        <label class="form-label">Quận Huyện</label>
                                        <select class="form-select">
                                            <option value="">-- Chọn Quận Huyện --</option>
                                            <template v-for="(value, index) in list_quan_huyen" :key="index">
                                                <option :value="value.id">{{ value . ten_quan_huyen }}</option>
                                            </template>
                                        </select>
                                    </div>
                                    <div class="col-6">
                                        <label class="form-label">Tọa Độ X</label>
                                        <input type="text" class="form-control" />
                                    </div>
                                    <div class="col-6">
                                        <label class="form-label">Tọa Độ Y</label>
                                        <input type="text" class="form-control" />
                                    </div>
                                    <div class="col-12">
                                        <label>Địa chỉ thường trú</label>
                                        <textarea class="form-control"></textarea>
                                    </div>
                                    <div class="col-12">
                                        <div class="d-grid">
                                          <router-link to="/shipper/dang-nhap">
                                              <button type="button" class="btn btn-primary w-100">
                                                  <i class="bx bx-user"></i>Đăng Ký
                                              </button>
                                            </router-link>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <router-link to="/shipper/dang-nhap">
                                            <button type="button" class="btn btn-secondary w-100">
                                                <i class="fa-solid fa-arrow-left"></i>Quay Lại Đăng Nhập
                                            </button>
                                        </router-link>
                                    </div>
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
export default {
    data() {
        return {
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
        }
    },
};
</script>
<style></style>
