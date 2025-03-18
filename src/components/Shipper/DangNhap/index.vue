<template>
    <div class="login-container">
        <div class="login-box">
            <div class="login-header">
                <div class="bee-logo">
                    <div class="bee-body">
                        <div class="bee-stripe"></div>
                        <div class="bee-stripe"></div>
                        <div class="bee-stripe"></div>
                    </div>
                    <div class="bee-wing left"></div>
                    <div class="bee-wing right"></div>
                    <div class="bee-stinger"></div>
                    <div class="bee-face">
                        <div class="bee-eye left"></div>
                        <div class="bee-eye right"></div>
                    </div>
                </div>
                <h2>Đăng Nhập Shipper</h2>
                <p>Chào mừng bạn quay trở lại!</p>
            </div>

            <form class="login-form">
                <div class="form-group">
                    <label>Email</label>
                    <div class="input-field">
                        <i class="fas fa-envelope"></i>
                        <input type="email" placeholder="Nhập email của bạn">
                    </div>
                </div>

                <div class="form-group">
                    <label>Mật khẩu</label>
                    <div class="input-field">
                        <i class="fas fa-lock"></i>
                        <input type="password" placeholder="Nhập mật khẩu">
                    </div>
                </div>

                <div class="form-options">
                    <label class="remember">
                        <input type="checkbox">
                        <span>Ghi nhớ đăng nhập</span>
                    </label>
                    <a href="#" class="forgot-link">Quên mật khẩu?</a>
                </div>

                <button type="submit" class="login-btn">
                    Đăng Nhập
                </button>
            </form>

            <!-- Thêm phần đăng ký ở cuối form -->
            <div class="register-section">
                <div class="divider">
                    <span>Chưa có tài khoản?</span>
                </div>
                <router-link to="/shipper/dang-ky" class="register-btn">
                    <span>Đăng Ký Tài Khoản</span>
                    <i class="fas fa-arrow-right"></i>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    methods: {

    },
}
</script>

<style scoped>
.login-container {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
    padding: 20px;
}

.login-box {
    width: 100%;
    max-width: 420px;
    background: rgba(255, 255, 255, 0.95);
    border-radius: 24px;
    padding: 40px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.login-header {
    text-align: center;
    margin-bottom: 40px;
}

.bee-logo {
    width: 100px;
    height: 100px;
    position: relative;
    margin: 0 auto 20px;
    transform-style: preserve-3d;
    animation: floatBee 3s ease-in-out infinite;
}

.bee-body {
    width: 80px;
    height: 60px;
    background: #ffd700;
    border-radius: 40px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow:
        0 5px 15px rgba(0, 0, 0, 0.2),
        inset 0 -8px 12px rgba(0, 0, 0, 0.1);
}

.bee-stripe {
    position: absolute;
    width: 100%;
    height: 12px;
    background: #000;
    left: 0;
}

.bee-stripe:nth-child(1) {
    top: 25%;
}

.bee-stripe:nth-child(2) {
    top: 50%;
}

.bee-stripe:nth-child(3) {
    top: 75%;
}

.bee-wing {
    position: absolute;
    width: 40px;
    height: 30px;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    top: 10px;
    transform-origin: bottom center;
    animation: flapWings 0.2s ease-in-out infinite alternate;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}

.bee-wing.left {
    left: 0;
    transform: rotate(-30deg);
}

.bee-wing.right {
    right: 0;
    transform: rotate(30deg);
}

.bee-stinger {
    position: absolute;
    width: 10px;
    height: 10px;
    background: #000;
    right: -5px;
    top: 50%;
    transform: translateY(-50%);
    clip-path: polygon(0 50%, 100% 0, 100% 100%);
}

.bee-face {
    position: absolute;
    width: 30px;
    height: 20px;
    left: -10px;
    top: 50%;
    transform: translateY(-50%);
}

.bee-eye {
    position: absolute;
    width: 8px;
    height: 8px;
    background: #000;
    border-radius: 50%;
    animation: blinkEyes 3s infinite;
}

.bee-eye.left {
    top: 0;
}

.bee-eye.right {
    bottom: 0;
}

@keyframes floatBee {

    0%,
    100% {
        transform: translateY(0) rotate(2deg);
    }

    50% {
        transform: translateY(-10px) rotate(-2deg);
    }
}

@keyframes flapWings {
    0% {
        transform: rotate(-30deg) scaleY(1);
        opacity: 0.8;
    }

    100% {
        transform: rotate(-20deg) scaleY(0.9);
        opacity: 1;
    }
}

@keyframes blinkEyes {

    0%,
    95%,
    100% {
        transform: scaleY(1);
    }

    97% {
        transform: scaleY(0);
    }
}

.login-header h2 {
    color: #2c3e50;
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 10px;
}

.login-header p {
    color: #7f8c8d;
    font-size: 16px;
}

.form-group {
    margin-bottom: 24px;
}

.form-group label {
    display: block;
    color: #2c3e50;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 8px;
}

.input-field {
    position: relative;
    background: #f8f9fa;
    border-radius: 12px;
    overflow: hidden;
    transition: all 0.3s ease;
}

.input-field:focus-within {
    background: white;
    box-shadow: 0 0 0 2px #84fab0;
}

.input-field i {
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    color: #95a5a6;
    font-size: 18px;
}

.input-field input {
    width: 100%;
    padding: 16px 16px 16px 50px;
    border: none;
    background: transparent;
    color: #2c3e50;
    font-size: 15px;
}

.input-field input::placeholder {
    color: #95a5a6;
}

.form-options {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
}

.remember {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
}

.remember input[type="checkbox"] {
    width: 18px;
    height: 18px;
    border-radius: 4px;
    border: 2px solid #84fab0;
    cursor: pointer;
}

.remember span {
    color: #7f8c8d;
    font-size: 14px;
}

.forgot-link {
    color: #84fab0;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    transition: color 0.3s ease;
}

.forgot-link:hover {
    color: #2c3e50;
}

.login-btn {
    width: 100%;
    padding: 16px;
    background: linear-gradient(120deg, #84fab0, #8fd3f4);
    border: none;
    border-radius: 12px;
    color: white;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.login-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(132, 250, 176, 0.3);
}

@media (max-width: 480px) {
    .login-box {
        padding: 30px 20px;
    }

    .login-header h2 {
        font-size: 24px;
    }

    .input-field input {
        padding: 14px 14px 14px 45px;
    }

    .login-btn {
        padding: 14px;
    }

    .bee-logo {
        width: 80px;
        height: 80px;
    }

    .bee-body {
        width: 60px;
        height: 45px;
    }

    .bee-wing {
        width: 30px;
        height: 22px;
    }
}

.input-field:hover {
    background: white;
}

.login-btn.loading {
    position: relative;
    overflow: hidden;
}

.login-btn.loading::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    background: rgba(255, 255, 255, 0.3);
    bottom: 0;
    left: -100%;
    animation: loading 1s infinite linear;
}

@keyframes loading {
    0% {
        left: -100%;
    }

    100% {
        left: 100%;
    }
}

.input-field.error {
    background: #fff5f5;
    box-shadow: 0 0 0 2px #ff6b6b;
}

.input-field.error i {
    color: #ff6b6b;
}

.bee-logo:hover {
    animation: buzzBee 0.5s ease-in-out;
}

@keyframes buzzBee {

    0%,
    100% {
        transform: rotate(0);
    }

    25% {
        transform: rotate(10deg);
    }

    75% {
        transform: rotate(-10deg);
    }
}

.bee-body::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background: linear-gradient(45deg,
            rgba(255, 255, 255, 0.2),
            transparent 60%);
    top: 0;
    left: 0;
}

.register-section {
    margin-top: 30px;
    text-align: center;
}

.divider {
    position: relative;
    margin-bottom: 20px;
}

.divider span {
    background: white;
    padding: 0 15px;
    color: #7f8c8d;
    font-size: 14px;
    position: relative;
    z-index: 1;
}

.divider::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
        to right,
        transparent,
        rgba(127, 140, 141, 0.2),
        rgba(127, 140, 141, 0.2),
        transparent
    );
}

.register-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;
    padding: 14px;
    background: white;
    border: 2px solid #84fab0;
    border-radius: 12px;
    color: #2c3e50;
    font-size: 16px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.register-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(120deg, #84fab0, #8fd3f4);
    opacity: 0;
    transition: opacity 0.3s ease;
}

.register-btn:hover {
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(132, 250, 176, 0.2);
}

.register-btn:hover::before {
    opacity: 1;
}

.register-btn span,
.register-btn i {
    position: relative;
    z-index: 1;
    transition: all 0.3s ease;
}

.register-btn:hover i {
    transform: translateX(5px);
}

/* Animation cho hover effect */
@keyframes buttonGlow {
    0% {
        box-shadow: 0 0 5px rgba(132, 250, 176, 0.3);
    }
    50% {
        box-shadow: 0 0 20px rgba(132, 250, 176, 0.5);
    }
    100% {
        box-shadow: 0 0 5px rgba(132, 250, 176, 0.3);
    }
}

.register-btn:hover {
    animation: buttonGlow 2s infinite;
}

/* Responsive adjustments */
@media (max-width: 480px) {
    .register-section {
        margin-top: 25px;
    }

    .register-btn {
        padding: 12px;
        font-size: 15px;
    }

    .divider span {
        font-size: 13px;
    }
}
</style>
