<template>
	<div class="topbar d-flex align-items-center">
		<nav class="navbar navbar-expand">
			<div class="topbar-logo-header">
				<div class="logo-container">
					<div class="logo-wrapper">
						<img src="../../../assets/assets_Rocker/images/logo-icon.png" class="logo-icon" alt="logo icon">
						<div class="logo-glow"></div>
					</div>
				</div>
				<div class="text-container">
					<h4 class="logo-text">Izoo<span>Shop</span></h4>
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
			<div class="top-menu ms-auto">
				<ul class="navbar-nav align-items-center">
					<li class="nav-item mobile-search-icon">
						<a class="nav-link" href="#"> <i class='bx bx-search'></i>
						</a>
					</li>
					<li class="nav-item dropdown dropdown-large">
						<a class="nav-link dropdown-toggle dropdown-toggle-nocaret" href="#" role="button"
							data-bs-toggle="dropdown" aria-expanded="false"> <i class='bx bx-category'></i>
						</a>
						<div class="dropdown-menu dropdown-menu-end">
							<div class="row row-cols-3 g-3 p-3">
								<div class="col text-center">
									<div class="app-box mx-auto bg-gradient-cosmic text-white"><i
											class='bx bx-group'></i>
									</div>
									<div class="app-title">Teams</div>
								</div>
								<div class="col text-center">
									<div class="app-box mx-auto bg-gradient-burning text-white"><i
											class='bx bx-atom'></i>
									</div>
									<div class="app-title">Projects</div>
								</div>
								<div class="col text-center">
									<div class="app-box mx-auto bg-gradient-lush text-white"><i
											class='bx bx-shield'></i>
									</div>
									<div class="app-title">Tasks</div>
								</div>
								<div class="col text-center">
									<div class="app-box mx-auto bg-gradient-kyoto text-dark"><i
											class='bx bx-notification'></i>
									</div>
									<div class="app-title">Feeds</div>
								</div>
								<div class="col text-center">
									<div class="app-box mx-auto bg-gradient-blues text-dark"><i class='bx bx-file'></i>
									</div>
									<div class="app-title">Files</div>
								</div>
								<div class="col text-center">
									<div class="app-box mx-auto bg-gradient-moonlit text-white"><i
											class='bx bx-filter-alt'></i>
									</div>
									<div class="app-title">Alerts</div>
								</div>
							</div>
						</div>
					</li>
					<li class="nav-item dropdown dropdown-large">
						<a class="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative" href="#"
							role="button" data-bs-toggle="dropdown" aria-expanded="false"> <span
								class="alert-count">7</span>
							<i class='bx bx-bell'></i>
						</a>
						<div class="dropdown-menu dropdown-menu-end">
							<a href="javascript:;">
								<div class="msg-header">
									<p class="msg-header-title">Notifications</p>
									<p class="msg-header-clear ms-auto">Marks all as read</p>
								</div>
							</a>
							<div class="header-notifications-list">
								<a class="dropdown-item" href="javascript:;">
									<div class="d-flex align-items-center">
										<div class="notify bg-light-primary text-primary"><i class="bx bx-group"></i>
										</div>
										<div class="flex-grow-1">
											<h6 class="msg-name">New Customers<span class="msg-time float-end">14 Sec
													ago</span></h6>
											<p class="msg-info">5 new user registered</p>
										</div>
									</div>
								</a>
								<a class="dropdown-item" href="javascript:;">
									<div class="d-flex align-items-center">
										<div class="notify bg-light-danger text-danger"><i class="bx bx-cart-alt"></i>
										</div>
										<div class="flex-grow-1">
											<h6 class="msg-name">New Orders <span class="msg-time float-end">2 min
													ago</span></h6>
											<p class="msg-info">You have recived new orders</p>
										</div>
									</div>
								</a>
								<a class="dropdown-item" href="javascript:;">
									<div class="d-flex align-items-center">
										<div class="notify bg-light-success text-success"><i class="bx bx-file"></i>
										</div>
										<div class="flex-grow-1">
											<h6 class="msg-name">24 PDF File<span class="msg-time float-end">19 min
													ago</span></h6>
											<p class="msg-info">The pdf files generated</p>
										</div>
									</div>
								</a>
								<a class="dropdown-item" href="javascript:;">
									<div class="d-flex align-items-center">
										<div class="notify bg-light-warning text-warning"><i class="bx bx-send"></i>
										</div>
										<div class="flex-grow-1">
											<h6 class="msg-name">Time Response <span class="msg-time float-end">28 min
													ago</span></h6>
											<p class="msg-info">5.1 min avarage time response</p>
										</div>
									</div>
								</a>
								<a class="dropdown-item" href="javascript:;">
									<div class="d-flex align-items-center">
										<div class="notify bg-light-info text-info"><i class="bx bx-home-circle"></i>
										</div>
										<div class="flex-grow-1">
											<h6 class="msg-name">New Product Approved <span class="msg-time float-end">2
													hrs ago</span></h6>
											<p class="msg-info">Your new product has approved</p>
										</div>
									</div>
								</a>
								<a class="dropdown-item" href="javascript:;">
									<div class="d-flex align-items-center">
										<div class="notify bg-light-danger text-danger"><i
												class="bx bx-message-detail"></i>
										</div>
										<div class="flex-grow-1">
											<h6 class="msg-name">New Comments <span class="msg-time float-end">4 hrs
													ago</span></h6>
											<p class="msg-info">New customer comments recived</p>
										</div>
									</div>
								</a>
								<a class="dropdown-item" href="javascript:;">
									<div class="d-flex align-items-center">
										<div class="notify bg-light-success text-success"><i
												class='bx bx-check-square'></i>
										</div>
										<div class="flex-grow-1">
											<h6 class="msg-name">Your item is shipped <span class="msg-time float-end">5
													hrs
													ago</span></h6>
											<p class="msg-info">Successfully shipped your item</p>
										</div>
									</div>
								</a>
								<a class="dropdown-item" href="javascript:;">
									<div class="d-flex align-items-center">
										<div class="notify bg-light-primary text-primary"><i class='bx bx-user-pin'></i>
										</div>
										<div class="flex-grow-1">
											<h6 class="msg-name">New 24 authors<span class="msg-time float-end">1 day
													ago</span></h6>
											<p class="msg-info">24 new authors joined last week</p>
										</div>
									</div>
								</a>
								<a class="dropdown-item" href="javascript:;">
									<div class="d-flex align-items-center">
										<div class="notify bg-light-warning text-warning"><i
												class='bx bx-door-open'></i>
										</div>
										<div class="flex-grow-1">
											<h6 class="msg-name">Defense Alerts <span class="msg-time float-end">2 weeks
													ago</span></h6>
											<p class="msg-info">45% less alerts last 4 weeks</p>
										</div>
									</div>
								</a>
							</div>
							<a href="javascript:;">
								<div class="text-center msg-footer">View All Notifications</div>
							</a>
						</div>
					</li>
					<li class="nav-item dropdown dropdown-large">
						<a class="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative" href="#"
							role="button" data-bs-toggle="dropdown" aria-expanded="false"> <span
								class="alert-count">8</span>
							<i class='bx bx-comment'></i>
						</a>
						<div class="dropdown-menu dropdown-menu-end">
							<a href="javascript:;">
								<div class="msg-header">
									<p class="msg-header-title">Messages</p>
									<p class="msg-header-clear ms-auto">Marks all as read</p>
								</div>
							</a>
							<div class="header-message-list">
								<a class="dropdown-item" href="javascript:;">
									<div class="d-flex align-items-center">
										<div class="user-online">
											<img src="../../../assets/assets_Rocker/images/avatars/avatar-1.png" class="msg-avatar"
												alt="user avatar">
										</div>
										<div class="flex-grow-1">
											<h6 class="msg-name">Daisy Anderson <span class="msg-time float-end">5 sec
													ago</span></h6>
											<p class="msg-info">The standard chunk of lorem</p>
										</div>
									</div>
								</a>
								<a class="dropdown-item" href="javascript:;">
									<div class="d-flex align-items-center">
										<div class="user-online">
											<img src="../../../assets/assets_Rocker/images/avatars/avatar-2.png" class="msg-avatar"
												alt="user avatar">
										</div>
										<div class="flex-grow-1">
											<h6 class="msg-name">Althea Cabardo <span class="msg-time float-end">14
													sec ago</span></h6>
											<p class="msg-info">Many desktop publishing packages</p>
										</div>
									</div>
								</a>
								<a class="dropdown-item" href="javascript:;">
									<div class="d-flex align-items-center">
										<div class="user-online">
											<img src="../../../assets/assets_Rocker/images/avatars/avatar-3.png" class="msg-avatar"
												alt="user avatar">
										</div>
										<div class="flex-grow-1">
											<h6 class="msg-name">Oscar Garner <span class="msg-time float-end">8 min
													ago</span></h6>
											<p class="msg-info">Various versions have evolved over</p>
										</div>
									</div>
								</a>
								<a class="dropdown-item" href="javascript:;">
									<div class="d-flex align-items-center">
										<div class="user-online">
											<img src="../../../assets/assets_Rocker/images/avatars/avatar-4.png" class="msg-avatar"
												alt="user avatar">
										</div>
										<div class="flex-grow-1">
											<h6 class="msg-name">Katherine Pechon <span class="msg-time float-end">15
													min ago</span></h6>
											<p class="msg-info">Making this the first true generator</p>
										</div>
									</div>
								</a>
								<a class="dropdown-item" href="javascript:;">
									<div class="d-flex align-items-center">
										<div class="user-online">
											<img src="../../../assets/assets_Rocker/images/avatars/avatar-5.png" class="msg-avatar"
												alt="user avatar">
										</div>
										<div class="flex-grow-1">
											<h6 class="msg-name">Amelia Doe <span class="msg-time float-end">22 min
													ago</span></h6>
											<p class="msg-info">Duis aute irure dolor in reprehenderit</p>
										</div>
									</div>
								</a>
								<a class="dropdown-item" href="javascript:;">
									<div class="d-flex align-items-center">
										<div class="user-online">
											<img src="../../../assets/assets_Rocker/images/avatars/avatar-6.png" class="msg-avatar"
												alt="user avatar">
										</div>
										<div class="flex-grow-1">
											<h6 class="msg-name">Cristina Jhons <span class="msg-time float-end">2 hrs
													ago</span></h6>
											<p class="msg-info">The passage is attributed to an unknown</p>
										</div>
									</div>
								</a>
								<a class="dropdown-item" href="javascript:;">
									<div class="d-flex align-items-center">
										<div class="user-online">
											<img src="../../../assets/assets_Rocker/images/avatars/avatar-7.png" class="msg-avatar"
												alt="user avatar">
										</div>
										<div class="flex-grow-1">
											<h6 class="msg-name">James Caviness <span class="msg-time float-end">4 hrs
													ago</span></h6>
											<p class="msg-info">The point of using Lorem</p>
										</div>
									</div>
								</a>
								<a class="dropdown-item" href="javascript:;">
									<div class="d-flex align-items-center">
										<div class="user-online">
											<img src="../../../assets/assets_Rocker/images/avatars/avatar-8.png" class="msg-avatar"
												alt="user avatar">
										</div>
										<div class="flex-grow-1">
											<h6 class="msg-name">Peter Costanzo <span class="msg-time float-end">6 hrs
													ago</span></h6>
											<p class="msg-info">It was popularised in the 1960s</p>
										</div>
									</div>
								</a>
								<a class="dropdown-item" href="javascript:;">
									<div class="d-flex align-items-center">
										<div class="user-online">
											<img src="../../../assets/assets_Rocker/images/avatars/avatar-9.png" class="msg-avatar"
												alt="user avatar">
										</div>
										<div class="flex-grow-1">
											<h6 class="msg-name">David Buckley <span class="msg-time float-end">2 hrs
													ago</span></h6>
											<p class="msg-info">Various versions have evolved over</p>
										</div>
									</div>
								</a>
								<a class="dropdown-item" href="javascript:;">
									<div class="d-flex align-items-center">
										<div class="user-online">
											<img src="../../../assets/assets_Rocker/images/avatars/avatar-10.png" class="msg-avatar"
												alt="user avatar">
										</div>
										<div class="flex-grow-1">
											<h6 class="msg-name">Thomas Wheeler <span class="msg-time float-end">2 days
													ago</span></h6>
											<p class="msg-info">If you are going to use a passage</p>
										</div>
									</div>
								</a>
								<a class="dropdown-item" href="javascript:;">
									<div class="d-flex align-items-center">
										<div class="user-online">
											<img src="../../../assets/assets_Rocker/images/avatars/avatar-11.png" class="msg-avatar"
												alt="user avatar">
										</div>
										<div class="flex-grow-1">
											<h6 class="msg-name">Johnny Seitz <span class="msg-time float-end">5 days
													ago</span></h6>
											<p class="msg-info">All the Lorem Ipsum generators</p>
										</div>
									</div>
								</a>
							</div>
							<a href="javascript:;">
								<div class="text-center msg-footer">View All Messages</div>
							</a>
						</div>
					</li>
				</ul>
			</div>
			<div class="user-box dropdown">
				<a class="d-flex align-items-center nav-link dropdown-toggle dropdown-toggle-nocaret" href="#"
					role="button" data-bs-toggle="dropdown" aria-expanded="false">
					<div class="user-info ps-3">
						<p class="user-name mb-0">Nguyễn Văn Nhân</p>
						<p class="designattion mb-0">Khách Hàng</p>
					</div>
				</a>
				<ul class="dropdown-menu dropdown-menu-end">
					<li>
						<router-link to="/khach-hang/profile">
							<a class="dropdown-item" href="/khach-hang/profile"><i class="bx bx-user"></i><span>Profile</span></a>
						</router-link>
					</li>
					<li><a v-on:click="logout()" class="dropdown-item" href="javascript:;"><i
								class='bx bx-log-out-circle'></i><span>Logout</span></a>
					</li>
					<li><a v-on:click="logoutAll()" class="dropdown-item" href="javascript:;"><i
									class='bx bx-log-out-circle'></i><span>Đăng Xuất Tất Cả</span></a>
						</li>
				</ul>
			</div>
		</nav>
	</div>
</template>
<script>
import axios from 'axios';

export default {
	data() {
		return {
			user: {},
		}
	},
	methods: {
		logout(){
			axios
				.get('http://127.0.0.1:8000/api/khach-hang/dang-xuat', {
                    headers : {
                        Authorization: 'Bearer ' + localStorage.getItem("khach_hang_login")
                    }
                })
				.then((res)=>{
					if(res.data.status){
						localStorage.removeItem('khach_hang_login');
						this.$toast.success(res.data.message);
						this.$router.push('/khach-hang/dang-nhap')
					}
					else{
						this.$toast.error('Có lỗi xảy ra')
					}
				})
		},
		logoutAll(){
			axios
				.get('http://127.0.0.1:8000/api/khach-hang/dang-xuat-all', {
                    headers : {
                        Authorization: 'Bearer ' + localStorage.getItem("khach_hang_login")
                    }
                })
				.then((res)=>{
					if(res.data.status){
						localStorage.removeItem('khach_hang_login');
						this.$toast.success(res.data.message);
						this.$router.push('/khach-hang/dang-nhap')
					}else{
						this.$toast.error(res.data.message)
					}
				})
				.catch((res) =>{
					this.$toast.error('Đã xảy ra lỗi')
				})
		}	
	},
}
</script>
<style scoped>
.topbar-logo-header {
	display: flex;
	align-items: center;
	gap: 15px;
	padding: 10px;
}

.logo-container {
	position: relative;
	width: 45px;
	height: 45px;
}

.logo-wrapper {
	position: relative;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	animation: logoFloat 3s ease-in-out infinite;
}

.logo-icon {
	width: 100%;
	height: 100%;
	object-fit: contain;
	position: relative;
	z-index: 2;
	filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.3));
	transition: transform 0.3s ease;
}

.logo-wrapper:hover .logo-icon {
	transform: scale(1.1) rotate(5deg);
}

.logo-glow {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 100%;
	height: 100%;
	background: radial-gradient(
		circle,
		rgba(255, 255, 255, 0.8) 0%,
		rgba(255, 255, 255, 0) 70%
	);
	filter: blur(8px);
	opacity: 0;
	z-index: 1;
	animation: glowPulse 2s ease-in-out infinite;
}

.text-container {
	overflow: hidden;
}

.logo-text {
	font-size: 1.5rem;
	font-weight: 700;
	margin: 0;
	background: linear-gradient(135deg, #ff6b6b, #4ecdc4);
	-webkit-background-clip: text;
	background-clip: text;
	-webkit-text-fill-color: transparent;
	animation: colorFlow 8s linear infinite;
}

.logo-text span {
	background: linear-gradient(135deg, #4ecdc4, #ff6b6b);
	-webkit-background-clip: text;
	background-clip: text;
	-webkit-text-fill-color: transparent;
	animation: colorFlow 8s linear infinite reverse;
}

@keyframes logoFloat {
	0%, 100% {
		transform: translateY(0);
	}
	50% {
		transform: translateY(-5px);
	}
}

@keyframes glowPulse {
	0%, 100% {
		opacity: 0;
		transform: translate(-50%, -50%) scale(0.8);
	}
	50% {
		opacity: 0.5;
		transform: translate(-50%, -50%) scale(1.2);
	}
}

@keyframes colorFlow {
	0% {
		filter: hue-rotate(0deg);
	}
	100% {
		filter: hue-rotate(360deg);
	}
}

/* Thêm hiệu ứng shine */
.logo-wrapper::after {
	content: '';
	position: absolute;
	top: -50%;
	left: -50%;
	width: 200%;
	height: 200%;
	background: linear-gradient(
		45deg,
		transparent,
		rgba(255, 255, 255, 0.3),
		transparent
	);
	transform: rotate(45deg);
	animation: shine 3s infinite;
}

@keyframes shine {
	0% {
		transform: rotate(45deg) translateX(-150%);
	}
	100% {
		transform: rotate(45deg) translateX(150%);
	}
}

/* Responsive */
@media (max-width: 768px) {
	.logo-container {
		width: 35px;
		height: 35px;
	}
	
	.logo-text {
		font-size: 1.2rem;
	}
}
</style>