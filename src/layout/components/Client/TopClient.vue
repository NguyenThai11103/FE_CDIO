<template>

	<div class="topbar d-flex align-items-center">
		<nav class="navbar navbar-expand">
			<div class="topbar-logo-header">
				<div class="">
					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Qs5Fh70n2MpVMZYjJy5R3DuZusdWCzAckA&s" class="logo-icon" alt="logo icon">
				</div>
				<div class="">
					<h4 class="logo-text text-danger">FOODCDIO</h4>
				</div>
			</div>
			<div class="mobile-toggle-menu"><i class='bx bx-menu'></i></div>
			<div class="search-bar flex-grow-1">
				<div class="position-relative search-bar-box">
					<input type="text" class="form-control search-control" placeholder="Tìm Kiếm?">
					<span class="position-absolute top-50 search-show translate-middle-y"><i
							class='bx bx-search'></i></span>
					<span class="position-absolute top-50 search-close translate-middle-y"><i
							class='bx bx-x'></i></span>
				</div>
			</div>
			
			<div class="user-box dropdown">
				<a class="d-flex align-items-center nav-link dropdown-toggle dropdown-toggle-nocaret" href="#"
					role="button" data-bs-toggle="dropdown" aria-expanded="false">
					<img src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/461281440_1242835037037746_2779086611324562668_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=qnX-0YialvUQ7kNvgHsIFNZ&_nc_oc=Adg-dhCWvtoVd-5U1_WfYjhU8HhJk4b-FtDL0RwkFGVqKGztk3JmAGcqB3hKXY9p3RA&_nc_zt=23&_nc_ht=scontent.fsgn2-9.fna&_nc_gid=ALZ4sBrvObJ8oL0lELP5Aab&oh=00_AYAflE1nA7V217EtfcRv6_kTGds56LLBGpcuJ0l8r9QtCQ&oe=678D0975" class="user-img" alt="user avatar">
					<div class="user-info ps-3">
						<p class="user-name mb-0">Khách Hàng</p>
						<p class="designattion mb-0">Khách Hàng</p>
					</div>
				</a>
				<ul class="dropdown-menu dropdown-menu-end">
					<li>
						<router-link to="/khach-hang/profile">
							<a class="dropdown-item" href="/khach-hang/profile"><i class="bx bx-user"></i><span>Profile</span></a>
						</router-link>
					</li>
					<li>
						<router-link to="/khach-hang/lich-su-dat">
							<a class="dropdown-item" href="/khach-hang/lich-su-dat"><i class="bx bx-user"></i><span>Lịch Sử Đặt</span></a>
						</router-link>
					</li>
					<li>
						<router-link to="/khach-hang/dang-nhap">
							<a class="dropdown-item" href="javascript:;"><i
								class='bx bx-log-out-circle'></i><span>Logout</span></a>
						</router-link>
						
					</li>
				</ul>
			</div>
		</nav>
	</div>
</template>
<script>
export default {

}
</script>
<style></style>