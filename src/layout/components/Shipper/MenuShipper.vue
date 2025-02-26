<template>
	<div class="nav-container primary-menu">
		<div class="mobile-topbar-header">
			<div>
				<img src="../../../assets/assets_Rocker/images/logo-icon.png" class="logo-icon" alt="logo icon" />
			</div>
			<div>
				<h4 class="logo-text">Rukada</h4>
			</div>
			<div class="toggle-icon ms-auto"><i class="bx bx-arrow-to-left"></i></div>
		</div>
		<nav class="navbar navbar-expand-xl w-100">
			<ul class="navbar-nav justify-content-start flex-grow-1 gap-1">
				<li class="nav-item dropdown">
					<a href="javascript:;" class="nav-link dropdown-toggle dropdown-toggle-nocaret"
						data-bs-toggle="dropdown">
						<div class="parent-icon"><i class="bx bx-home-circle"></i></div>
						<div class="menu-title">Dashboard</div>
					</a>
					<ul class="dropdown-menu">
						<li>
							<a class="dropdown-item" href="index.html"><i class="bx bx-right-arrow-alt"></i>Default</a>
						</li>
						<li>
							<a class="dropdown-item" href="index.html"><i
									class="bx bx-right-arrow-alt"></i>Alternate</a>
						</li>
						<li>
							<a class="dropdown-item" href="index.html"><i
									class="bx bx-right-arrow-alt"></i>Graphical</a>
						</li>
					</ul>
				</li>
				<li class="nav-item">
					<router-link to="/shipper/don-dat-hang">
						<a class="nav-link" href="/shipper/don-dat-hang">
							<div class="parent-icon">
								<i class="fa-regular fa-rectangle-list"></i>
							</div>
							<div class="menu-title">Đơn Đặt Hàng</div>
						</a>
					</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/shipper/lich-su-giao-hang">
						<a class="nav-link" href="/shipper/lich-su-giao-hang">
							<div class="parent-icon">
								<i class="fa-solid fa-clock-rotate-left"></i>
							</div>
							<div class="menu-title">Lịch Sử Giao Hàng</div>
						</a>
					</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/shipper/thong-ke">
						<a class="nav-link" href="/shipper/thong-ke">
							<div class="parent-icon">
								<i class="fa-solid fa-square-poll-vertical"></i>
							</div>
							<div class="menu-title">Thống Kê</div>
						</a>
					</router-link>
				</li>
			</ul>
		</nav>
	</div>
</template>
<script>
export default {};
</script>
<style></style>
