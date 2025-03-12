<template>
    <div class="profile-container">
        <div class="profile-wrapper">
            <!-- Header Section -->
            <div class="profile-header">
                <div class="user-info">
                    <div class="avatar-wrapper">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs3NATp_QrhVQoh8T0Z6lmyuQ8NwIz7hw_0w&s" 
                             alt="Profile" 
                             class="avatar">
                        <button class="edit-avatar">
                            <i class="fas fa-camera"></i>
                        </button>
                    </div>
                    <div class="user-details">
                        <h1>Nguyễn Văn A</h1>
                        <span class="user-role">Premium Member</span>
                    </div>
                </div>
            </div>

            <!-- Navigation -->
            <div class="nav-section">
                <button 
                    v-for="tab in tabs" 
                    :key="tab.id"
                    :class="['nav-button', { active: currentTab === tab.id }]"
                    @click="currentTab = tab.id">
                    <i :class="tab.icon"></i>
                    {{ tab.label }}
                </button>
            </div>

            <!-- Content Section -->
            <div class="content-section">
                <!-- Profile Info -->
                <div v-if="currentTab === 'profile'" class="form-section">
                    <h2>Thông tin cá nhân</h2>
                    <div class="form-grid">
                        <div class="input-field">
                            <label>Họ và tên</label>
                            <input type="text" v-model="profile.name" placeholder="Nhập họ và tên">
                        </div>
                        <div class="input-field">
                            <label>Email</label>
                            <input type="email" v-model="profile.email" placeholder="Nhập email">
                        </div>
                        <div class="input-field">
                            <label>Số điện thoại</label>
                            <input type="tel" v-model="profile.phone" placeholder="Nhập số điện thoại">
                        </div>
                        <div class="input-field">
                            <label>Ngày sinh</label>
                            <input type="date" v-model="profile.birthday">
                        </div>
                    </div>
                    <button class="primary-button">Lưu thay đổi</button>
                </div>

                <!-- Address Section -->
                <div v-if="currentTab === 'address'" class="address-section">
                    <div class="section-header">
                        <h2>Địa chỉ giao hàng</h2>
                        <button class="btn btn-primary mb-2">
                            <i class="fas fa-plus"></i> Thêm địa chỉ
                        </button>
                    </div>
                    <div class="address-list">
                        <div v-for="(address, index) in addresses" 
                             :key="index" 
                             class="address-card">
                            <div class="address-info">
                                <h3>{{ address.name }}</h3>
                                <p>{{ address.phone }}</p>
                                <p>{{ address.address }}</p>
                            </div>
                            <div class="card-actions">
                                <button class="icon-button edit">
                                    <i class="fas fa-edit"></i>
                                </button>
                                <button class="icon-button delete">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Security Section -->
                <div v-if="currentTab === 'security'" class="security-section">
                    <h2>Đổi mật khẩu</h2>
                    <div class="form-stack">
                        <div class="input-field">
                            <label>Mật khẩu hiện tại</label>
                            <input type="password" placeholder="Nhập mật khẩu hiện tại">
                        </div>
                        <div class="input-field">
                            <label>Mật khẩu mới</label>
                            <input type="password" placeholder="Nhập mật khẩu mới">
                        </div>
                        <div class="input-field">
                            <label>Xác nhận mật khẩu</label>
                            <input type="password" placeholder="Nhập lại mật khẩu mới">
                        </div>
                        <button class="primary-button">Cập nhật mật khẩu</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.profile-container {
    min-height: 100vh;
    background-color: #f5f5f5;
    padding: 2rem;
}

.profile-wrapper {
    max-width: 1000px;
    margin: 0 auto;
    background: white;
    border-radius: 12px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

.profile-header {
    padding: 2rem;
    border-bottom: 1px solid #eee;
}

.user-info {
    display: flex;
    align-items: center;
    gap: 2rem;
}

.avatar-wrapper {
    position: relative;
    width: 100px;
    height: 100px;
}

.avatar {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.edit-avatar {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: #007bff;
    color: white;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease;
}

.user-details h1 {
    margin: 0;
    font-size: 1.5rem;
    color: #333;
}

.user-role {
    color: #666;
    font-size: 0.9rem;
}

.nav-section {
    padding: 1rem;
    border-bottom: 1px solid #eee;
    display: flex;
    gap: 1rem;
}

.nav-button {
    padding: 0.75rem 1.5rem;
    border: none;
    background: none;
    color: #666;
    cursor: pointer;
    border-radius: 6px;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.nav-button.active {
    background: #007bff;
    color: white;
}

.nav-button:hover:not(.active) {
    background: #f5f5f5;
}

.content-section {
    padding: 2rem;
}

.form-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    margin-bottom: 2rem;
}

.input-field {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.input-field label {
    color: #666;
    font-size: 0.9rem;
}

.input-field input {
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 1rem;
    transition: all 0.2s ease;
}

.input-field input:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.1);
    outline: none;
}

.primary-button {
    padding: 0.75rem 1.5rem;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.2s ease;
}

.primary-button:hover {
    background: #0056b3;
}

.address-card {
    padding: 1.5rem;
    border: 1px solid #eee;
    border-radius: 8px;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.card-actions {
    display: flex;
    gap: 0.5rem;
}

.icon-button {
    width: 36px;
    height: 36px;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease;
}

.icon-button.edit {
    background: #e3f2fd;
    color: #007bff;
}

.icon-button.delete {
    background: #ffebee;
    color: #dc3545;
}

@media (max-width: 768px) {
    .profile-container {
        padding: 1rem;
    }

    .form-grid {
        grid-template-columns: 1fr;
    }

    .user-info {
        flex-direction: column;
        text-align: center;
    }
}
</style>

<script>
export default {
    data() {
        return {
            currentTab: 'profile',
            tabs: [
                { id: 'profile', label: 'Thông tin', icon: 'fas fa-user' },
                { id: 'address', label: 'Địa chỉ', icon: 'fas fa-map-marker-alt' },
                { id: 'security', label: 'Bảo mật', icon: 'fas fa-shield-alt' }
            ],
            profile: {
                name: '',
                email: '',
                phone: '',
                birthday: ''
            },
            addresses: [
                {
                    name: 'Nguyễn Văn A',
                    phone: '0123456789',
                    address: '32 xuân diệu'
                }
            ]
        }
    }
}
</script>