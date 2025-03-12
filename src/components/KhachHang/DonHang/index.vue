<template>
    <div class="container mt-5">
        <div class="card shadow-lg mb-4">
            <div class="card-header bg-primary text-white">
                <h4 class="text-white">Đơn hàng #123456</h4>
                <p class="mb-0">Khách hàng: Nguyễn Văn A</p>
                <p class="mb-0">Ngày đặt: 05/01/2025</p>
                <p class="mb-0">Trạng thái: <span class="badge bg-warning">Đang xử lý</span></p>
            </div>
            <div class="card-body">
                <div class="d-flex justify-content-between">
                    <div>
                        <h5>Địa chỉ giao hàng</h5>
                        <p>123 Đường, Đà Nẵng, Việt Nam</p>
                    </div>
                    <div class="text-end">
                        <h5>Tổng giá trị</h5>
                        <h3 class="text-success">250.000đ</h3>
                    </div>
                </div>

                <div class="my-4">
                    <label for="voucher" class="form-label">Nhập mã giảm giá</label>
                    <div class="input-group">
                        <input type="text" class="form-control" id="voucher" placeholder="Nhập mã giảm giá">
                        <button class="btn btn-success">Áp dụng</button>
                    </div>
                    <div class="mt-3">
                        <p><strong>Mã giảm giá đã áp dụng:</strong> <span class="text-success">Giảm 10%</span></p>
                        <p><strong>Giảm giá:</strong> 25.000đ</p>
                        <p><strong>Tổng mới:</strong> 225.000đ</p>
                    </div>
                </div>

                <div class="table-responsive">
                    <table class="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>Sản phẩm</th>
                                <th>Số lượng</th>
                                <th>Đơn giá</th>
                                <th>Tổng</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Burger</td>
                                <td>2</td>
                                <td>50.000đ</td>
                                <td>100.000đ</td>
                            </tr>
                            <tr>
                                <td>Pizza</td>
                                <td>1</td>
                                <td>150.000</td>
                                <td>150.000đ</td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="text-end">
                        <button class="btn btn-danger"> Đặt Đơn</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>