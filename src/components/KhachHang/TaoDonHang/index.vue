<template>
  <div class="card">
    <div class="row g-0">
      <div class="col-md-4 ">
        <img
          src="https://down-bs-vn.img.susercontent.com/vn-11134513-7r98o-lsv21q8k90uxa6@resize_ss640x400!@crop_w640_h400_cT"
          style="width: 100%; height: 300px;" class="img-fluid" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h4 class="card-title">Yumi Fruit - Trái Cây Sạch & Đồ Ăn Vặt - Shop Online</h4>
          <div>
            123 Lê Thị Bạch Cát, P. 13, Quận 11, TP. HCM
          </div>
          <div class="d-flex gap-3 py-3">
            <div class="cursor-pointer">
              <i class="bx bxs-star text-warning"></i>
              <i class="bx bxs-star text-warning"></i>
              <i class="bx bxs-star text-warning"></i>
              <i class="bx bxs-star text-warning"></i>
              <i class="bx bxs-star text-secondary"></i>
            </div>
            <div>999+ đánh giá</div>
            <div class="text-success"><i class="fa-solid fa-circle fa-2xs"></i> Mở cửa</div>
          </div>
          <div class="mb-3">
            <p>
              <i class="fa-regular fa-clock"></i> 00:00 - 23:59
            </p>
            <p><i class="fa-solid fa-circle-dollar-to-slot"></i> 20.000 - 100.000</p>
          </div>
          <hr>
          <div class="row row-cols-auto row-cols-1 row-cols-md-3 align-items-center">

            <div class="col">
              <div class="row">
                <div class="col-lg-5">
                  <label class="form-label">PHÍ DỊCH VỤ </label>
                  <p class="text-danger">0.0% Phí dịch Vụ</p>
                </div>
                |
                <div class="col-lg-5">
                  <label class="form-label">DỊCH VỤ BỞI </label>
                  <p class="text-danger">FOODZONE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container mt-5">
    <h3><b class="text-danger">THỰC ĐƠN</b></h3>
    <div class="row mt-4">
      <div class="col-lg-3">
        <div class="card">
          <div class="card-body">
            <h5 class="text-secondary ms-2"> Món Đang Giảm Giá</h5>
            <button class="btn btn-light w-100 text-start">Coca-Cola giảm 55K - Deal Gắn</button>
            <button class="btn btn-light w-100 text-start">Coca-Cola giảm 40K - Deal Diệu</button>
            <button class="btn btn-light w-100 text-start">Coca-Cola giảm 25K - Deal Tâm </button>
            <button class="btn btn-light w-100 text-start">Giảm 10% - Ăn ngon cùng Coca-</button>
            <button class="btn btn-light w-100 text-start">Giảm 20% - Ăn ngon cùng Coca</button>
            <button class="btn btn-light w-100 text-start">Menu</button>
            <button class="btn btn-light w-100 text-start">Bò né</button>
            <button class="btn btn-light w-100 text-start">Ăn Vặt</button>
            <button class="btn btn-light w-100 text-start">Món Thêm</button>
            <button class="btn btn-light w-100 text-start">Nước Ép</button>
            <button class="btn btn-light w-100 text-start">Giải Khát</button>
          </div>

        </div>
      </div>

      <div class="col-md-6">
        <div class="row ">
          <div class="card">
            <div class="col-12 mb-4 mt-2">
              <div class="alert alert-warning">
                <div class="d-flex align-items-center">
                  <div class="font-35 text-dark"><i class="fa-solid fa-ticket text-danger"></i></div>
                  <div class="ms-3">
                    <span class="fs-5">HOME CREDIT giảm 50k cho đơn từ 100k</span>
                  </div>
                </div>
              </div>
              <div class="position-relative" bis_skin_checked="1"><input type="text" class="form-control ps-5"
                  placeholder="Tìm kiếm quán ăn..."> <span
                  class="position-absolute top-50 product-show translate-middle-y"><i class="bx bx-search"></i></span>
              </div>
            </div>
            <b class="mt-2"> Món Đang Giảm Giá</b>
            <template v-for="(v, k) in monAnData" :key="k">
              <div class="col-12 mb-3 mt-2">
                <div class="d-flex align-items-center border p-3">
                  <img :src="v.hinh_anh" alt="Combo 1"
                    class="me-3" style="width: 100px; height: auto;">
                  <div class="flex-grow-1">
                    <h5 class="mb-1">{{ v.ten_mon_an }}</h5>
                    <p class="mb-1">{{ v.ten_quan_an }}</p>
                    <p><del>{{ v.gia_ban }}đ</del> <strong>{{ v.gia_khuyen_mai }}đ</strong></p>
                  </div>
                  <button class="btn btn-outline-primary">+</button>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>

      <div class="col-md-3">
        <div class="card mb-3">
          <div class="card-header bg-success text-white">
            <h5 class="mt-2 text-white">Đơn Hàng</h5>
          </div>
          <div class="card-body">
            <table class="table">
              <thead>
                <tr>
                  <th>Tên món</th>
                  <th>Số lượng</th>
                  <th>Đơn giá</th>
                  <th>Tổng</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mì trộn tê cay</td>
                  <td>1</td>
                  <td>50k</td>
                  <td>50k</td>
                </tr>
                <tr>
                  <td>Cơm</td>
                  <td>2</td>
                  <td>30k</td>
                  <td>60k</td>
                </tr>
              </tbody>
            </table>
            <div class="d-flex justify-content-between">
              <h5>Tổng tiền:</h5>
              <h5>110k</h5>
            </div>
            <router-link to="/khach-hang/don-hang">
              <button class="btn btn-success w-100 mt-3">Tạo Đơn Hàng</button>
            </router-link>
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
      monAnData: [
        { ten_mon_an: 'Phở Bò', id_quan_an: 1, ten_quan_an: 'Quán Phở Gia Truyền', gia_ban: 50000, gia_khuyen_mai: 45000, hinh_anh: "https://hongphatfood.com/wp-content/uploads/2020/05/vifon-beef-pho-6.jpg" },
        { ten_mon_an: 'Bún Chả', id_quan_an: 1, ten_quan_an: 'Quán Phở Gia Truyền', gia_ban: 40000, gia_khuyen_mai: 35000, hinh_anh: "https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:quality(100)/2024_1_12_638406880045931692_cach-lam-bun-cha-ha-noi-0.jpg" },
        { ten_mon_an: 'Bánh Canh', id_quan_an: 1, ten_quan_an: 'Quán Phở Gia Truyền', gia_ban: 30000, gia_khuyen_mai: 25000, hinh_anh: "https://drt.danang.vn/content/images/2024/06/quan-banh-canh-da-nang-7.png" },
        { ten_mon_an: 'Chả Cá', id_quan_an: 1, ten_quan_an: 'Quán Phở Gia Truyền', gia_ban: 60000, gia_khuyen_mai: 55000, hinh_anh: "https://i.ytimg.com/vi/ZLwCwyIDJJ4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC28T49o72JuvhoihtNNUQvmAyCWA" },

        { ten_mon_an: 'Bánh Mì Thịt', id_quan_an: 2, ten_quan_an: 'Tiệm Bánh Mì Ngon', gia_ban: 20000, gia_khuyen_mai: 18000, hinh_anh: "https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:quality(100)/2024_1_11_638406025402324906_banh-mi-thit_.jpg" },
        { ten_mon_an: 'Gỏi Cuốn', id_quan_an: 2, ten_quan_an: 'Tiệm Bánh Mì Ngon', gia_ban: 15000, gia_khuyen_mai: 12000, hinh_anh: "https://heyyofoods.com/wp-content/uploads/2024/03/3-4.jpg" },
        { ten_mon_an: 'Mì Quảng', id_quan_an: 2, ten_quan_an: 'Tiệm Bánh Mì Ngon', gia_ban: 35000, gia_khuyen_mai: 30000, hinh_anh: "https://duonggiahotel.vn/wp-content/uploads/2023/09/mi-quang-da-nang-AB.jpg" },
        { ten_mon_an: 'Bánh Bèo', id_quan_an: 2, ten_quan_an: 'Tiệm Bánh Mì Ngon', gia_ban: 15000, gia_khuyen_mai: 13000, hinh_anh: "https://vietfood.org.vn/wp-content/uploads/2021/05/BanhBeo2.jpg" },

        { ten_mon_an: 'Cơm Gà', id_quan_an: 3, ten_quan_an: 'Cơm Gà Hải Nam', gia_ban: 35000, gia_khuyen_mai: 30000, hinh_anh: "https://danangfantasticity.com/wp-content/uploads/2024/10/com-ga-da-nang-com-ga-xoi-mo-09.jpg" },
        { ten_mon_an: 'Bánh Xèo', id_quan_an: 3, ten_quan_an: 'Cơm Gà Hải Nam', gia_ban: 45000, gia_khuyen_mai: 40000, hinh_anh: "https://daotaobeptruong.vn/wp-content/uploads/2020/01/cach-do-banh-xeo-ngon-gion-lau.jpg" },
        { ten_mon_an: 'Cơm Tấm', id_quan_an: 3, ten_quan_an: 'Cơm Gà Hải Nam', gia_ban: 40000, gia_khuyen_mai: 37000, hinh_anh: "https://i-giadinh.vnecdn.net/2024/03/07/7-Hoan-thien-thanh-pham-1-6244-1709800134.jpg" },
        { ten_mon_an: 'Gà Rán', id_quan_an: 3, ten_quan_an: 'Cơm Gà Hải Nam', gia_ban: 70000, gia_khuyen_mai: 65000, hinh_anh: "https://cokhiviendong.com/wp-content/uploads/2019/01/kinnh-nghi%E1%BB%87m-m%E1%BB%9F-qu%C3%A1n-g%C3%A0-r%C3%A1n-7.jpg" },
        { ten_mon_an: 'Hủ Tiếu', id_quan_an: 4, ten_quan_an: 'Hủ Tiếu Mỹ Tho', gia_ban: 30000, gia_khuyen_mai: 25000, hinh_anh: "https://i-giadinh.vnecdn.net/2023/05/15/Bc8Thnhphm18-1684125639-9811-1684125654.jpg" },
        { ten_mon_an: 'Lẩu Thái', id_quan_an: 4, ten_quan_an: 'Hủ Tiếu Mỹ Tho', gia_ban: 120000, gia_khuyen_mai: 100000, hinh_anh: "https://i-giadinh.vnecdn.net/2022/12/17/Thanh-pham-1-1-5372-1671269525.jpg" },
        { ten_mon_an: 'Bún Mắm', id_quan_an: 4, ten_quan_an: 'Hủ Tiếu Mỹ Tho', gia_ban: 50000, gia_khuyen_mai: 45000, hinh_anh: "https://www.cet.edu.vn/wp-content/uploads/2018/04/bun-mam-nem-da-nang.jpg" },
        { ten_mon_an: 'Súp Cua', id_quan_an: 4, ten_quan_an: 'Hủ Tiếu Mỹ Tho', gia_ban: 40000, gia_khuyen_mai: 35000, hinh_anh: "https://mevacon.giaoduc.edu.vn/wp-content/uploads/2023/02/cach-nau-sup-cua-1.jpeg" },

        { ten_mon_an: 'Cháo Lòng', id_quan_an: 5, ten_quan_an: 'Quán Cháo Lòng Ngon', gia_ban: 25000, gia_khuyen_mai: 22000, hinh_anh: "https://static.vinwonders.com/production/chao-long-da-nang-4-1.jpg" },
        { ten_mon_an: 'Nem Nướng', id_quan_an: 5, ten_quan_an: 'Quán Cháo Lòng Ngon', gia_ban: 40000, gia_khuyen_mai: 35000, hinh_anh: "https://cdn.tgdd.vn/2021/09/CookDish/cach-lam-nem-nuong-nha-trang-bang-noi-chien-khong-dau-thom-avt-1200x676.jpg" },
        { ten_mon_an: 'Bánh Đúc', id_quan_an: 5, ten_quan_an: 'Quán Cháo Lòng Ngon', gia_ban: 20000, gia_khuyen_mai: 18000, hinh_anh: "https://i-giadinh.vnecdn.net/2021/05/17/1-1621220538-7560-1621220858.jpg" },
        { ten_mon_an: 'Bánh Cuốn', id_quan_an: 5, ten_quan_an: 'Quán Cháo Lòng Ngon', gia_ban: 30000, gia_khuyen_mai: 27000, hinh_anh: "https://img-global.cpcdn.com/recipes/b235f5db0142062d/400x400cq70/photo.jpg" }
      ],
    }
  },
}
</script>