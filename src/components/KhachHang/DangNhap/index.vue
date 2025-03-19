<template>
    <div class="login-container">
        <!-- Background Animation -->
        <div class="background-animations">
            <div class="food-icon" v-for="n in 8" :key="n"></div>
        </div>

        <div class="login-box">
            <div class="glass-effect"></div>
            <div class="login-content">
                <div class="login-header">
                    <div class="logo-wrapper">
                        <div class="logo-circle">
                            <div class="logo-inner-circle">
                                <span class="logo-text">F</span>
                            </div>
                            <div class="logo-ring"></div>
                            <div class="logo-ring"></div>
                            <div class="logo-ring"></div>
                        </div>
                    </div>
                    <h2 class="welcome-text">Welcome to <span class="brand-text">FoodZone</span></h2>
                    <p class="subtitle">Khám phá thế giới ẩm thực tuyệt vời</p>
                </div>

                <form @submit.prevent="Login" class="login-form">
                    <div class="form-group">
                        <div class="input-wrapper">
                            <i class="fas fa-envelope"></i>
                            <input 
                                v-model="user_R1.email" 
                                type="email" 
                                placeholder="Email của bạn"
                                required
                            >
                            <span class="input-line"></span>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="input-wrapper">
                            <i class="fas fa-lock"></i>
                            <input 
                                v-model="user_R1.password" 
                                type="password" 
                                placeholder="Mật khẩu"
                                required
                            >
                            <span class="input-line"></span>
                        </div>
                    </div>

                    <button type="submit" class="login-btn">
                        <span>Đăng Nhập</span>
                        <div class="btn-overlay"></div>
                        <i class="fas fa-arrow-right"></i>
                    </button>
                    <div class="col-12 mt-2">
                            <GoogleLogin :callback="callback" style="width: 100%;" />
                    </div>

                    <div class="form-footer">
                        <a href="#" class="forgot-link">
                            <i class="fas fa-key"></i>
                            <span>Quên mật khẩu?</span>
                        </a>
                        <div class="divider">
                            <span>hoặc đăng nhập với</span>
                        </div>
                        <router-link to="/khach-hang/dang-ky" class="register-link">
                            <i class="fas fa-user-plus"></i>
                            <span>Tạo tài khoản mới</span>
                        </router-link>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>


<script>
import axios from 'axios';
import { decodeCredential } from 'vue3-google-login'

export default {
    data() {
        return {
            user_R1: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        Login() {
            axios
                .post("http://127.0.0.1:8000/api/khach-hang/dang-nhap", this.user_R1)
                .then((res) => {
                    if (res.data.status) {
                        this.$toast.success(res.data.message);
                        localStorage.setItem("khach_hang_login", res.data.key);
						this.$router.push('/');
                    } else {
                        this.$toast.error(res.data.message);
                    }
                })
                .catch((res) => {
                    const list = Object.values(res.response.data.errors);
                    list.forEach((v, i) => {
                        this.$toast.error(v[0]);
                    });
                })
        },
        callback(res) {
            var user = {
                "credential" : res.credential
            }
            axios
                .post("http://127.0.0.1:8000/api/khach-hang/dang-nhap-google", user)
                .then((res) => {
                    if (res.data.status == 1) {
                        this.$toast.success(res.data.message);
                        localStorage.setItem("khach_hang_login", res.data.key);
                        this.$router.push('/')
                    }
                    else {
                        this.$toast.error(res.data.message);
                    }
                })
        }
    },
}
</script>

<style scoped>
.login-container {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(45deg, #FF6B6B, #4ECDC4, #45B649);
    background-size: 300% 300%;
    animation: gradientBG 20s ease infinite;
    padding: 20px;
    position: relative;
    overflow: hidden;
}

.background-animations {
    position: absolute;
    width: 100%;
    height: 100%;
}

.food-icon {
    position: absolute;
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    border-radius: 50%;
    animation: floatIcon 10s infinite linear;
}

.food-icon:nth-child(1) { top: 10%; left: 10%; animation-delay: 0s; }
.food-icon:nth-child(2) { top: 20%; right: 20%; animation-delay: 2s; }
.food-icon:nth-child(3) { bottom: 30%; left: 30%; animation-delay: 4s; }
.food-icon:nth-child(4) { bottom: 40%; right: 40%; animation-delay: 6s; }
.food-icon:nth-child(5) { top: 50%; left: 50%; animation-delay: 8s; }
.food-icon:nth-child(6) { bottom: 60%; right: 60%; animation-delay: 10s; }
.food-icon:nth-child(7) { top: 70%; left: 70%; animation-delay: 12s; }
.food-icon:nth-child(8) { bottom: 80%; right: 80%; animation-delay: 14s; }

.login-box {
    width: 100%;
    max-width: 450px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    border-radius: 30px;
    box-shadow: 0 25px 45px rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.2);
    position: relative;
    overflow: hidden;
    transform: translateY(0);
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.login-box:hover {
    transform: translateY(-10px);
    box-shadow: 0 35px 60px rgba(0, 0, 0, 0.3);
}

.glass-effect {
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
        circle at center,
        rgba(255, 255, 255, 0.2) 0%,
        rgba(255, 255, 255, 0.1) 20%,
        transparent 100%
    );
    animation: rotateGlass 10s linear infinite;
}

.login-content {
    position: relative;
    padding: 40px;
    z-index: 1;
}

.logo-circle {
    width: 90px;
    height: 90px;
    position: relative;
    margin: 0 auto 30px;
}

.logo-inner-circle {
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, #FF6B6B, #4ECDC4);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: pulse 2s infinite;
}

.logo-ring {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    animation: expandRing 2s infinite;
}

.logo-ring:nth-child(2) { width: 100%; height: 100%; animation-delay: 0.5s; }
.logo-ring:nth-child(3) { width: 120%; height: 120%; animation-delay: 1s; }
.logo-ring:nth-child(4) { width: 140%; height: 140%; animation-delay: 1.5s; }

.logo-text {
    font-size: 3rem;
    font-weight: 800;
    color: white;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
}

.welcome-text {
    font-size: 2rem;
    font-weight: 700;
    color: white;
    margin-bottom: 15px;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
}

.brand-text {
    background: linear-gradient(45deg, #FF6B6B, #4ECDC4);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 800;
}

.subtitle {
    color: rgba(255, 255, 255, 0.8);
    font-size: 1rem;
    margin-bottom: 40px;
}

.input-wrapper {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 5px;
    margin-bottom: 20px;
    position: relative;
    overflow: hidden;
}

.input-wrapper i {
    color: white;
    font-size: 1.2rem;
    margin: 0 15px;
}

.input-wrapper input {
    background: transparent;
    border: none;
    padding: 15px;
    color: white;
    font-size: 1rem;
    width: calc(100% - 50px);
}

.input-wrapper input::placeholder {
    color: rgba(255, 255, 255, 0.6);
}

.input-line {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, #FF6B6B, #4ECDC4);
    transform: scaleX(0);
    transition: transform 0.3s ease;
}

.input-wrapper:focus-within .input-line {
    transform: scaleX(1);
}

.login-btn {
    width: 100%;
    padding: 15px;
    background: linear-gradient(45deg, #FF6B6B, #4ECDC4);
    border: none;
    border-radius: 15px;
    color: white;
    font-size: 1.1rem;
    font-weight: 600;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.3s ease;
}

.btn-overlay {
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: 0.5s;
}

.login-btn:hover .btn-overlay {
    left: 100%;
}

.form-footer {
    margin-top: 30px;
    text-align: center;
}

.forgot-link, .register-link {
    color: white;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 0.9rem;
    transition: all 0.3s ease;
}

.forgot-link:hover, .register-link:hover {
    transform: translateY(-2px);
    text-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

.divider {
    text-align: center;
    margin: 20px 0;
    position: relative;
}

.divider::before,
.divider::after {
    content: '';
    position: absolute;
    top: 50%;
    width: calc(50% - 70px);
    height: 1px;
    background: rgba(255, 255, 255, 0.2);
}

.divider::before { left: 0; }
.divider::after { right: 0; }

.divider span {
    background: rgba(255, 255, 255, 0.1);
    padding: 8px 15px;
    border-radius: 20px;
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.9rem;
}

.social-login-container {
    margin: 20px 0;
}

:deep(.google-login-button) {
    width: 100% !important;
    height: auto !important;
    padding: 12px !important;
    border-radius: 12px !important;
    background: white !important;
    transition: all 0.3s ease !important;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1) !important;
    overflow: hidden !important;
}

:deep(.google-login-button:hover) {
    transform: translateY(-2px) !important;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2) !important;
}

:deep(.google-btn-content) {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 10px !important;
    font-size: 1rem !important;
    color: #333 !important;
}

:deep(.google-btn-content i) {
    font-size: 1.2rem !important;
    color: #4285f4 !important;
}

/* Dark mode styles */
@media (prefers-color-scheme: dark) {
    :deep(.google-login-button) {
        background: rgba(255, 255, 255, 0.1) !important;
        border: 1px solid rgba(255, 255, 255, 0.2) !important;
    }

    :deep(.google-btn-content) {
        color: white !important;
    }
}

/* Responsive styles */
@media (max-width: 480px) {
    :deep(.google-login-button) {
        padding: 10px !important;
    }

    :deep(.google-btn-content) {
        font-size: 0.9rem !important;
    }
}

@keyframes gradientBG {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

@keyframes floatIcon {
    0% {
        transform: translate(0, 0) rotate(0deg);
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        transform: translate(100px, -100px) rotate(360deg);
        opacity: 0;
    }
}

@keyframes expandRing {
    0% {
        transform: translate(-50%, -50%) scale(0.8);
        opacity: 0.5;
    }
    50% {
        opacity: 0.2;
    }
    100% {
        transform: translate(-50%, -50%) scale(1.2);
        opacity: 0;
    }
}

@keyframes rotateGlass {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

@keyframes pulse {
    0% { transform: scale(0.95); }
    50% { transform: scale(1.05); }
    100% { transform: scale(0.95); }
}

@media (max-width: 480px) {
    .login-content {
        padding: 30px 20px;
    }
    
    .welcome-text {
        font-size: 1.5rem;
    }
    
    .logo-circle {
        width: 70px;
        height: 70px;
    }
    
    .logo-text {
        font-size: 2.5rem;
    }
}
</style>