<template>
    <div class="row">
        <div class="card">
            <div class="card-body">
                <ul class="nav nav-tabs nav-primary" role="tablist">
                    <li class="nav-item" role="presentation">
                        <a class="nav-link active" data-bs-toggle="tab" href="#primaryhome" role="tab"
                            aria-selected="true">
                            <div class="d-flex align-items-center">
                                <div class="tab-icon"><i class="fa-solid fa-user font-18 me-1"></i>
                                </div>
                                <div class="tab-title">Profile</div>
                            </div>
                        </a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" data-bs-toggle="tab" href="#primarycontact" role="tab" aria-selected="false"
                            tabindex="-1">
                            <div class="d-flex align-items-center">
                                <div class="tab-icon"><i class="fa-solid fa-lock font-18 me-1"></i>
                                </div>
                                <div class="tab-title">Đổi mật khẩu</div>
                            </div>
                        </a>
                    </li>
                </ul>
                <div class="tab-content py-3">
                    <div class="tab-pane fade show active" id="primaryhome" role="tabpanel">
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="d-flex flex-column align-items-center text-center">
                                            <img src="../../../assets/assets_Rocker/images/avatars/avatar-1.png" alt=""
                                                class="rounded-circle p-1 bg-primary" width="110" data-bs-toggle='modal'
                                                data-bs-target='#capNhatImage'>
                                            <div class="mt-3">
                                                <h4>NGUYỄN VĂN Nhân</h4>
                                                <p class="text-secondary mb-1">nguyenvana@gmail.com</p>
                                            </div>
                                        </div>
                                        <hr class="my-4">
                                        <ul class="list-group list-group-flush">
                                            <li
                                                class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                                <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                        height="24" viewBox="0 0 24 24" fill="none"
                                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        class="feather feather-instagram me-2 icon-inline text-danger">
                                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z">
                                                        </path>
                                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                                    </svg>Instagram</h6>
                                                <span class="text-secondary">DZFULLSTACK</span>
                                            </li>
                                            <li
                                                class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                                <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                        height="24" viewBox="0 0 24 24" fill="none"
                                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        class="feather feather-facebook me-2 icon-inline text-primary">
                                                        <path
                                                            d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z">
                                                        </path>
                                                    </svg>Facebook</h6>
                                                <span class="text-secondary">DZFULLSTACK</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-8">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="row mb-3">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0">Full Name</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                                <input type="text" class="form-control" placeholder="Enter Name"
                                                    :value="list_dia_chi[0].ten_nguoi_nhan">
                                            </div>
                                        </div>
                                        <div class="row mb-3">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0">Email</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                                <input type="text" class="form-control" placeholder="Enter Email"
                                                    :value="list_dia_chi[0].email">
                                            </div>
                                        </div>
                                        <div class="row mb-3">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0">Phone</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                                <input type="text" class="form-control" placeholder="Phone"
                                                    :value="list_dia_chi[0].so_dien_thoai">
                                            </div>
                                        </div>
                                        <div class="row mb-3">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0">Địa chỉ</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                                <input type="text" class="form-control" placeholder="Phone"
                                                    :value="list_dia_chi[0].dia_chi">
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-3"></div>
                                            <div class="col-sm-9 text-secondary">
                                                <input type="button" class="btn btn-primary px-4" value="Save">
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="primarycontact" role="tabpanel">
                        <div class="col">
                            <h4>Thay đổi mật khẩu</h4>
                        </div>
                        <div class="col">Quản lý mật khẩu để bảo mật tài khoản</div>
                        <hr>
                        <div class="row gy-3">
                            <div class="col-lg-6">
                                <div class="row">
                                    <div class="col-12">
                                <label for="old-password" class="mb-2 mt-2">Mật khẩu cũ</label>
                                <input type="password" id="old-password" placeholder="Nhập mật khẩu cũ"
                                    class="form-control">
                            </div>

                            <div class="col-12">
                                <label for="new-password" class="mb-2 mt-2">Mật khẩu mới</label>
                                <input type="password" id="new-password" placeholder="Nhập mật khẩu mới"
                                    class="form-control">
                            </div>

                            <div class="col-12">
                                <label for="confirm-password" class="mb-2 mt-2">Nhập lại mật khẩu mới</label>
                                <input type="password" id="confirm-password" placeholder="Nhập lại mật khẩu mới"
                                    class="form-control">
                            </div>

                            <div class="col-12 text-center">
                                <button class="btn btn-primary w-100 mt-2">Lưu</button>
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
            list_dia_chi: [
                {
                    id: 1,
                    ten_nguoi_nhan: "Nguyễn Văn Nhân",
                    email: 'nguyenvanb@gmail.com',
                    so_dien_thoai: "0901234567",
                    dia_chi: "15 Nguyễn Văn Linh, Hải Châu, Đà Nẵng",
                },
            ]
        }
    },
}
</script>
<style>
</style>