<template>
	<div class="nav-container primary-menu">
		<div class="mobile-topbar-header">
			<div>
				<img src="../../../assets/assets_Rocker/images/logo-icon.png" class="logo-icon" alt="logo icon">
			</div>
			<div>
				<h4 class="logo-text">Rukada</h4>
			</div>
			<div class="toggle-icon ms-auto"><i class='bx bx-arrow-to-left'></i>
			</div>
		</div>
		<nav class="navbar navbar-expand-xl w-100">
			<ul class="navbar-nav justify-content-start flex-grow-1 gap-1">
				<li class="nav-item dropdown">
					<a href="javascript:;" class="nav-link dropdown-toggle dropdown-toggle-nocaret"
						data-bs-toggle="dropdown">
						<div class="parent-icon"><i class="bx bx-home-circle"></i>
						</div>
						<div class="menu-title">Dashboard</div>
					</a>
					<ul class="dropdown-menu">
						<li> <a class="dropdown-item" href="index.html"><i class="bx bx-right-arrow-alt"></i>Default</a>
						</li>
						<li> <a class="dropdown-item" href="index.html"><i
									class="bx bx-right-arrow-alt"></i>Alternate</a>
						</li>
						<li> <a class="dropdown-item" href="index.html"><i
									class="bx bx-right-arrow-alt"></i>Graphical</a>
						</li>
					</ul>
				</li>

				<li class="nav-item">
					<router-link to="/admin/quan-an">
						<a class="nav-link" href="/admin/quan-an">
							<div class="parent-icon"><i class="fa-solid fa-burger"></i>
							</div>
							<div class="menu-title">Quán Ăn</div>
						</a>
					</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/admin/shipper">
						<a class="nav-link" href="/admin/shipper">
							<div class="parent-icon"><i class="fa-solid fa-motorcycle"></i>
							</div>
							<div class="menu-title">Shipper</div>
						</a>
					</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/admin/voucher">
						<a class="nav-link" href="/admin/voucher">
							<div class="parent-icon"><i class="fa-solid fa-ticket"></i>
							</div>
							<div class="menu-title">Voucher</div>
						</a>
					</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/admin/don-hang">
						<a class="nav-link" href="/admin/don-hang">
							<div class="parent-icon"><i class="fa-solid fa-ticket"></i>
							</div>
							<div class="menu-title">Đơn hàng</div>
						</a>
					</router-link>
				</li>
				<!-- <li class="nav-item">
					<router-link to="/admin/danh-sach-don-dat">
						<a class="nav-link" href="/admin/danh-sach-don-dat">
							<div class="parent-icon"><i class="fa-solid fa-bookmark"></i>
							</div>
							<div class="menu-title">Danh sách đơn đặt</div>
						</a>
					</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/admin/phan-quyen">
						<a class="nav-link" href="/admin/phan-quyen">
							<div class="parent-icon"><i class="fa-solid fa-bars"></i>
							</div>
							<div class="menu-title">Phân Quyền</div>
						</a>
					</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/admin/nhan-vien">
						<a class="nav-link" href="/admin/nhan-vien">
							<div class="parent-icon"><i class="fa-solid fa-user-lock"></i>
							</div>
							<div class="menu-title">Nhân Viên</div>
						</a>
					</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/admin/thong-ke">
						<a class="nav-link" href="/admin/thong-ke">
							<div class="parent-icon"><i class="fa-solid fa-chart-simple"></i>
							</div>
							<div class="menu-title">Thống kê</div>
						</a>
					</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/admin/profile">
						<a class="nav-link" href="/admin/profile">
							<div class="parent-icon"><i class="fa-solid fa-address-card"></i>
							</div>
							<div class="menu-title">Profile</div>
						</a>
					</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/admin/shipper">
						<a class="nav-link" href="/admin/shipper">
							<div class="parent-icon"><i class="fa-solid fa-user-ninja"></i>
							</div>
							<div class="menu-title">Shipper</div>
						</a>
					</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/admin/quan-an">
						<a class="nav-link" href="/admin/quan-an">
							<div class="parent-icon"><i class="fa-solid fa-utensils"></i>
							</div>
							<div class="menu-title">Quán ăn</div>
						</a>
					</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/admin/khach-hang">
						<a class="nav-link" href="/admin/khach-hang">
							<div class="parent-icon"><i class="fa-solid fa-bookmark"></i>
							</div>
							<div class="menu-title">Khách Hàng</div>
						</a>
					</router-link>
				</li> -->
			</ul>
		</nav>
	</div>
</template>
<script>
export default {

}
</script>
<style></style>