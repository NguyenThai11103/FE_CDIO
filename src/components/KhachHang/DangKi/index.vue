<template>
    <div class="register-container">
        <div class="background-animations">
            <div class="food-icon" v-for="n in 8" :key="n"></div>
        </div>

        <div class="register-box">
            <div class="glass-effect"></div>
            <div class="register-content">
                <div class="register-header">
                    <div class="logo-wrapper">
                        <div class="logo-circle">
                            <div class="logo-inner-circle">
                                <span class="logo-text">F</span>
                            </div>
                            <div class="logo-ring"></div>
                            <div class="logo-ring"></div>
                        </div>
                    </div>
                    <h2 class="welcome-text">Tham Gia <span class="brand-text">FoodZone</span></h2>
                    <p class="subtitle">Khám phá thế giới ẩm thực tuyệt vời cùng chúng tôi</p>
                </div>

                <form class="register-form">
                    <div class="form-group">
                        <div class="input-wrapper">
                            <i class="fas fa-user"></i>
                            <input v-model="dang_ki.ho_va_ten" type="text" placeholder="Họ và tên" required>
                            <span class="input-line"></span>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="input-wrapper">
                            <i class="fas fa-envelope"></i>
                            <input v-model="dang_ki.email" type="email" placeholder="Email" required>
                            <span class="input-line"></span>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="input-wrapper">
                            <i class="fas fa-phone"></i>
                            <input v-model="dang_ki.so_dien_thoai" type="number" placeholder="Số điện thoại" required>
                            <span class="input-line"></span>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="input-wrapper">
                            <i class="fas fa-calendar"></i>
                            <input v-model="dang_ki.ngay_sinh" type="date" required>
                            <span class="input-line"></span>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="input-wrapper">
                            <i class="fas fa-lock"></i>
                            <input v-model="dang_ki.password" type="password" placeholder="Mật khẩu" required>
                            <span class="input-line"></span>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="input-wrapper">
                            <i class="fas fa-key"></i>
                            <input v-model="dang_ki.re_password" type="password" placeholder="Xác nhận mật khẩu" required>
                            <span class="input-line"></span>
                        </div>
                    </div>

                    <button @click.prevent="dangKi" class="register-btn">
                        <span>Đăng Ký Ngay</span>
                        <div class="btn-overlay"></div>
                        <i class="fas fa-arrow-right"></i>
                    </button>

                    <div class="form-footer">
                        <router-link to="/khach-hang/dang-nhap" class="login-link">
                            <i class="fas fa-sign-in-alt"></i>
                            <span>Đã có tài khoản? Đăng nhập</span>
                        </router-link>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
.register-container {
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

.register-box {
    width: 100%;
    max-width: 500px;
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

.register-box:hover {
    transform: translateY(-10px);
    box-shadow: 0 35px 60px rgba(0, 0, 0, 0.3);
}

.register-content {
    position: relative;
    padding: 40px;
    z-index: 1;
}

.logo-circle {
    width: 80px;
    height: 80px;
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

.welcome-text {
    font-size: 2rem;
    font-weight: 700;
    color: white;
    text-align: center;
    margin-bottom: 15px;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
}

.input-wrapper {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 5px 15px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
}

.input-wrapper i {
    color: white;
    font-size: 1.2rem;
    margin-right: 15px;
}

.input-wrapper input {
    background: transparent;
    border: none;
    padding: 15px 10px;
    color: white;
    font-size: 1rem;
    width: 100%;
}

.input-wrapper input::placeholder {
    color: rgba(255, 255, 255, 0.6);
}

.input-wrapper input[type="date"] {
    color: rgba(255, 255, 255, 0.6);
}

.register-btn {
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
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.register-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(255, 107, 107, 0.4);
}

.form-footer {
    margin-top: 30px;
    text-align: center;
}

.login-link {
    color: white;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 0.9rem;
    transition: all 0.3s ease;
}

.login-link:hover {
    transform: translateY(-2px);
    text-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

/* Animation keyframes từ component đăng nhập */
@keyframes gradientBG {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

@keyframes pulse {
    0% { transform: scale(0.95); }
    50% { transform: scale(1.05); }
    100% { transform: scale(0.95); }
}

/* Responsive */
@media (max-width: 576px) {
    .register-content {
        padding: 30px 20px;
    }

    .welcome-text {
        font-size: 1.5rem;
    }

    .input-wrapper {
        padding: 5px 10px;
    }

    .input-wrapper input {
        padding: 12px 8px;
    }
}
</style>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            dang_ki: {
                'email': "",
                'so_dien_thoai': "",
                'ho_va_ten': "",
                'password': "",
                're_password': "",
                'ngay_sinh': "",
            }
        }
    },

    methods: {
        dangKi() {
            axios
                .post('http://127.0.0.1:8000/api/khach-hang/register', this.dang_ki)
                .then((res) => {
                    if (res.data.status) {
                        this.$toast.success(res.data.message);
                        this.dang_ki = {
                            'email': "",
                            'so_dien_thoai': "",
                            'ho_va_ten': "",
                            'password': "",
                            're_password': "",
                            'ngay_sinh': "",
                        }
                    } else {
                        this.$toast.error(res.data.message);
                    }
                })
                .catch(error => {
                    var obj = error.response.data.errors;
                    var result = Object.keys(obj).map((key) => [key, obj[key]]);
                    result.forEach((value_1, key_1) => {
                        var xxx = value_1[1];
                        xxx.forEach((value, key) => {
                            this.$toast.error(value);
                        });
                    });
                });
        }
    },
}
</script>