<template>
    <div class="container mt-3">
        <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-2">
            <div class="col mx-auto">
                <div class="card">
                    <div class="card-body">
                        <div class="border p-4 rounded">
                            <div class="text-center">
                                <h3 class="">ĐĂNG KÝ QUÁN ĂN</h3>
                            </div>
                            <div class="login-separater text-center mb-4">
                                <hr>
                            </div>
                            <div class="form-body">
                                <form class="row g-3">
                                    <div class="row">
                                        <div class="row g-3">
                                            <div class="col-lg-6">
                                                <label for="inputEmailAddress" class="form-label">Tên Quán Ăn</label>
                                                <div class="ms-auto position-relative">
                                                    <input type="text" class="form-control"
                                                        placeholder="Nhập tên quán ăn">
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <label for="inputEmailAddress" class="form-label">Email</label>
                                                <div class="ms-auto position-relative">
                                                    <input type="email" class="form-control"
                                                        placeholder="Nhập email của bạn">
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <label for="inputEmailAddress" class="form-label">Password</label>
                                                <div class="ms-auto position-relative">
                                                    <input type="password" class="form-control"
                                                        placeholder="Nhập mật khẩu">
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <label for="inputEmailAddress" class="form-label">Re Password</label>
                                                <div class="ms-auto position-relative">
                                                    <input type="password" class="form-control"
                                                        placeholder="Nhập lại mật khẩu">
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <label for="inputEmailAddress" class="form-label">Số Điện Thoại</label>
                                                <div class="ms-auto position-relative">
                                                    <input type="text" class="form-control"
                                                        placeholder="Nhập số điện thoại">
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <label for="inputEmailAddress" class="form-label">Mã Số Thuế</label>
                                                <div class="ms-auto position-relative">
                                                    <input type="text" class="form-control"
                                                        placeholder="Nhập mã số thuế">
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <label for="inputEmailAddress" class="form-label">Tỉnh Thành</label>
                                                <div class="ms-auto position-relative">
                                                    <select class="form-select">
                                                        <template v-for="(value, index) in list_tinh_thanh"
                                                            :key="index">
                                                            <option v-bind:value="value.id">{{ value.ten_tinh_thanh }}
                                                            </option>
                                                        </template>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <label for="inputEmailAddress" class="form-label">Quận Huyện</label>
                                                <div class="ms-auto position-relative">
                                                    <select class="form-select">
                                                        <template v-for="(value, index) in list_quan_huyen"
                                                            :key="index">
                                                            <option v-bind:value="value.id">{{ value.ten_quan_huyen }}
                                                            </option>
                                                        </template>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-lg-12">
                                                <label for="inputEmailAddress" class="form-label">Địa Chỉ</label>
                                                <div class="ms-auto position-relative">
                                                    <input type="text" class="form-control" placeholder="Nhập địa chỉ">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 mt-4">
                                            <div class="col-12">
                                                <div class="d-grid">
                                                    <router-link to="/quan-an/dang-nhap">
                                                        <button type="button" class="btn btn-primary radius-30 w-100">Đăng
                                                        Kí</button>
                                                    </router-link>
                                                </div>
                                            </div>
                                            <div class="col-12 mt-4">
                                                <p class="mb-0">Bạn đã có tài khoản?
                                                    <router-link to="/quan-an/dang-nhap">
                                                        <a href="">Đăng Nhập</a>
                                                    </router-link>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </form>
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
            list_tinh_thanh: [
                { id: 1, ten_tinh_thanh: 'Hà Nội' },
                { id: 2, ten_tinh_thanh: 'Hồ Chí Minh' },
                { id: 3, ten_tinh_thanh: 'Đà Nẵng' }
            ],
            list_quan_huyen: [
                { id: 1, ten_quan_huyen: 'Quận 1', id_tinh_thanh: 2 },
                { id: 2, ten_quan_huyen: 'Quận 3', id_tinh_thanh: 2 },
                { id: 3, ten_quan_huyen: 'Quận Hải Châu', id_tinh_thanh: 3 }
            ]
        }

    },
    mounted() {
    },
    methods: {
        
    },
}
</script>
<style></style>