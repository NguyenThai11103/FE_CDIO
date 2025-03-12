<template>
  <div class="container mt-2">
    <div class="card">
      <div class="card-header ">
        <h1 class="h3 mb-0">Lịch sử đặt món ăn</h1>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-hover">
            <thead >
              <tr>
                <th scope="col">Mã Đơn Hàng</th>
                <th scope="col">Tên Món</th>
                <th scope="col">Số Lượng</th>
                <th scope="col">Ngày Đặt</th>
                <th scope="col">Trạng Thái</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="order in orders" :key="order.id">
                <td>{{ order.id }}</td>
                <td>{{ order.name }}</td>
                <td>{{ order.quantity }}</td>
                <td>{{ order.date }}</td>
                <td>
                  <span :class="getStatusClass(order.status)">{{ order.status }}</span>
                </td>
              </tr>
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
      orders: [
        { id: 'ORD001', name: 'Bánh Mì', quantity: 2, date: '2025-01-05', status: 'Đã giao' },
        { id: 'ORD002', name: 'Phở', quantity: 1, date: '2025-01-06', status: 'Chưa giao' },
        { id: 'ORD003', name: 'Cơm Tấm', quantity: 3, date: '2025-01-07', status: 'Đang xử lý' }
      ]
    };
  },
  methods: {
    getStatusClass(status) {
      switch (status) {
        case 'Đã giao':
          return 'text-success';
        case 'Chưa giao':
          return 'text-warning';
        case 'Đang xử lý':
          return 'text-info';
        default:
          return 'text-secondary';
      }
    }
  }
};
</script>
