<template>
    <div class="row">
        <div class="col-lg-6 col-md-12">
            <div class="card">
                <div class="card-header">
                    <h5 class="mt-2">THỐNG KÊ TỔNG ĐƠN HÀNG ĐÃ GIAO</h5>
                </div>
                <div class="card-body">
                    <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
                </div>
            </div>
        </div>
        <div class="col-lg-6 col-md-12">
            <div class="card">
                <div class="card-header">
                    <h5 class="mt-2">THỐNG KÊ TỔNG DOANH THU</h5>
                </div>
                <div class="card-body">
                    <Pie id="my-pie-chart-id" :options="pieChartOptions" :data="pieChartData" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { Bar, Pie } from 'vue-chartjs';
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    BarElement,
    CategoryScale,
    LinearScale,
} from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement, BarElement, CategoryScale, LinearScale);

export default {
    name: 'BarChart',
    components: { Bar, Pie },
    data() {
        return {
            // Biểu đồ cột: Tổng đơn hàng đã giao
            chartData: {
                labels: [
                    'Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6',
                    'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12',
                ],
                datasets: [
                    {
                        label: 'Số lượng đơn hàng đã giao',
                        data: [40, 35, 50, 45, 60, 55, 70, 65, 80, 75, 85, 90], // Dữ liệu mẫu
                        backgroundColor: [
                            '#FF6384',
                            '#36A2EB',
                            '#FFCE56',
                            '#4BC0C0',
                            '#9966FF',
                            '#FF9F40',
                            '#FF6384',
                            '#36A2EB',
                            '#FFCE56',
                            '#4BC0C0',
                            '#9966FF',
                            '#FF9F40',
                        ],
                    },
                ],
            },
            chartOptions: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Thống kê tổng đơn hàng đã giao (Tháng)',
                    },
                },
                scales: {
                    // x: {
                    //     title: {
                    //         display: true,
                    //         text: 'Tháng',
                    //     },
                    // },
                    // hiển thị title ở trục y
                },
            },
            // Biểu đồ tròn: Tổng doanh thu
            pieChartData: {
                labels: [
                    'Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6',
                    'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12',
                ],
                datasets: [
                    {
                        label: 'Tổng doanh thu (triệu đồng)',
                        data: [10, 12, 15, 14, 18, 17, 22, 20, 24, 23, 28, 30], // Dữ liệu doanh thu
                        backgroundColor: [
                            '#FF6384',
                            '#36A2EB',
                            '#FFCE56',
                            '#4BC0C0',
                            '#9966FF',
                            '#FF9F40',
                            '#FF6384',
                            '#36A2EB',
                            '#FFCE56',
                            '#4BC0C0',
                            '#9966FF',
                            '#FF9F40',
                        ],
                    },
                ],
            },
            pieChartOptions: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Thống kê tổng doanh thu (Tháng)',
                    },
                },
            },
        };
    },
};
</script>
<style></style>
