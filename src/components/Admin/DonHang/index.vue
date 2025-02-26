<template>
    <div class="card">
      <div class="card-body">
        <div class="d-flex justify-content-between align-items-center mb-4">
          <div class="col-5">
            <div class="input-group">
              <span class="input-group-text">
                <i class="fas fa-search"></i>
              </span>
              <input
                type="text"
                class="form-control"
                placeholder="Tìm kiếm đơn đặt..."
                v-model="searchQuery"
                @input="filterOrders"
              />
            </div>
          </div>
  
          <div class="d-flex gap-2">
            <div class="dropdown">
              <button
                class="btn btn-outline-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
              >
                Sắp xếp theo
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#" @click="sortOrders('newest')">Mới nhất</a></li>
                <li><a class="dropdown-item" href="#" @click="sortOrders('oldest')">Cũ nhất</a></li>
                <li><a class="dropdown-item" href="#" @click="sortOrders('priceHighToLow')">Giá cao - thấp</a></li>
                <li><a class="dropdown-item" href="#" @click="sortOrders('priceLowToHigh')">Giá thấp - cao</a></li>
              </ul>
            </div>
  
            <div class="dropdown">
              <button
                class="btn btn-outline-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
              >
                Trạng thái
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#" @click="filterByStatus('all')">Tất cả</a></li>
                <li><a class="dropdown-item" href="#" @click="filterByStatus('pending')">Chờ xác nhận</a></li>
                <li><a class="dropdown-item" href="#" @click="filterByStatus('shipping')">Đang giao</a></li>
                <li><a class="dropdown-item" href="#" @click="filterByStatus('delivered')">Đã giao</a></li>
                <li><a class="dropdown-item" href="#" @click="filterByStatus('cancelled')">Đã hủy</a></li>
              </ul>
            </div>
  
            <div class="dropdown">
              <button
                class="btn btn-outline-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
              >
                Khoảng giá
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#" @click="filterByPrice('all')">Tất cả</a></li>
                <li><a class="dropdown-item" href="#" @click="filterByPrice('0-100000')">0đ - 100.000đ</a></li>
                <li><a class="dropdown-item" href="#" @click="filterByPrice('100000-200000')">100.000đ - 200.000đ</a></li>
                <li><a class="dropdown-item" href="#" @click="filterByPrice('200000-500000')">200.000đ - 500.000đ</a></li>
                <li><a class="dropdown-item" href="#" @click="filterByPrice('500000+')">Trên 500.000đ</a></li>
              </ul>
            </div>
          </div>
        </div>
  
        <div class="table-responsive">
          <table class="table table-bordered table-hover">
            <thead class="table-light">
              <tr class="align-middle text-center">
                <th>Mã đơn</th>
                <th>Khách hàng</th>
                <th>Tổng tiền</th>
                <th>Ngày đặt</th>
                <th>Trạng thái</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="order in filteredOrders" :key="order.id" class="align-middle text-center">
                <td>{{ order.id }}</td>
                <td>{{ order.customer }}</td>
                <td>{{ order.total }}</td>
                <td>{{ order.date }}</td>
                <td>
                  <button :class="getStatusBadge(order.status)">{{ order.statusText }}</button>
                </td>
                <td>
                  <button class="btn btn-info btn-sm me-2">
                    <i class="fas fa-eye"></i> Chi tiết
                  </button>
                  <button v-if="order.status === 'pending'" class="btn btn-success btn-sm me-2">
                    <i class="fas fa-check"></i> Xác nhận
                  </button>
                  <button v-if="order.status !== 'cancelled'" class="btn btn-danger btn-sm">
                    <i class="fas fa-times"></i> Hủy
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
  
        <div class="d-flex justify-content-between align-items-center mt-4">
          <div>Hiển thị 1-10 trong tổng số 100 đơn hàng</div>
          <nav>
            <ul class="pagination mb-0">
              <li class="page-item disabled">
                <a class="page-link" href="#"><i class="fas fa-chevron-left"></i></a>
              </li>
              <li class="page-item active">
                <a class="page-link" href="#">1</a>
              </li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item">
                <a class="page-link" href="#"><i class="fas fa-chevron-right"></i></a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchQuery: '',
        orders: [
          { id: '#ORD001', customer: 'Nguyễn Văn A', total: '185.000đ', date: '20/03/2024', status: 'pending', statusText: 'Chờ xác nhận' },
          { id: '#ORD002', customer: 'Trần Thị B', total: '320.000đ', date: '20/03/2024', status: 'shipping', statusText: 'Đang giao' },
          // Add more orders as needed
        ],
        filteredOrders: []
      };
    },
    methods: {
      filterOrders() {
        this.filteredOrders = this.orders.filter(order => order.customer.toLowerCase().includes(this.searchQuery.toLowerCase()));
      },
      sortOrders(criteria) {
        if (criteria === 'newest') {
          this.filteredOrders.sort((a, b) => new Date(b.date) - new Date(a.date));
        } else if (criteria === 'oldest') {
          this.filteredOrders.sort((a, b) => new Date(a.date) - new Date(b.date));
        } else if (criteria === 'priceHighToLow') {
          this.filteredOrders.sort((a, b) => parseFloat(b.total.replace('đ', '').replace('.', '')) - parseFloat(a.total.replace('đ', '').replace('.', '')));
        } else if (criteria === 'priceLowToHigh') {
          this.filteredOrders.sort((a, b) => parseFloat(a.total.replace('đ', '').replace('.', '')) - parseFloat(b.total.replace('đ', '').replace('.', '')));
        }
      },
      filterByStatus(status) {
        if (status === 'all') {
          this.filteredOrders = this.orders;
        } else {
          this.filteredOrders = this.orders.filter(order => order.status === status);
        }
      },
      filterByPrice(range) {
        if (range === 'all') {
          this.filteredOrders = this.orders;
        } else {
          const [min, max] = range.split('-').map(price => parseFloat(price.replace('đ', '').replace('.', '')));
          this.filteredOrders = this.orders.filter(order => {
            const total = parseFloat(order.total.replace('đ', '').replace('.', ''));
            return total >= min && (max ? total <= max : true);
          });
        }
      },
      getStatusBadge(status) {
        switch (status) {
          case 'pending':
            return 'badge bg-warning';
          case 'shipping':
            return 'badge bg-primary';
          case 'delivered':
            return 'badge bg-success';
          case 'cancelled':
            return 'badge bg-danger';
          default:
            return 'badge bg-secondary';
        }
      }
    },
    mounted() {
      this.filteredOrders = this.orders;
    }
  };
  </script>
  
  <style scoped>
  /* Add any custom styles here */
  </style>