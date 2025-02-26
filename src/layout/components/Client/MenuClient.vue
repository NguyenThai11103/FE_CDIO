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
				<li class="nav-item">
					<router-link to="/">
						<a class="nav-link" href="/">
							<div class="parent-icon"><i class="fa-solid fa-home"></i>
							</div>
							<div class="menu-title">Trang Chủ</div>
						</a>
					</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/mon-an">
						<a class="nav-link" href="/mon-an">
							<div class="parent-icon"><i class="fa-solid fa-utensils"></i>
							</div>
							<div class="menu-title">Món Ăn</div>
						</a>
					</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/quan-an">
						<a class="nav-link" href="/quan-an">
							<div class="parent-icon"><i class="fa-solid fa-shop"></i>
							</div>
							<div class="menu-title">Quán Ăn</div>
						</a>
					</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/khach-hang/tao-don-hang">
						<a class="nav-link" href="/khach-hang/tao-don-hang">
							<div class="parent-icon"><i class="fa-solid fa-bookmark"></i>
							</div>
							<div class="menu-title">Tạo Đơn Hàng</div>
						</a>
					</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/khach-hang/don-hang">
						<a class="nav-link" href="/khach-hang/don-hang">
							<div class="parent-icon"><i class="fa-solid fa-bookmark"></i>
							</div>
							<div class="menu-title">Đơn Hàng</div>
						</a>
					</router-link>
				</li>
				
			</ul>
		</nav>
	</div>
</template>
<script>
export default {

}
</script>
<style></style>