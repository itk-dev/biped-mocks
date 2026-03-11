<template>
  <div class="register-page">
    <header class="register-header">
      <router-link to="/" class="register-brand">
        <img
          class="register-logo"
          src="https://bi-ped.civora.org/config/bip/assets/images/bip-logo.png"
          alt="BIPED"
        />
        <span class="register-title">BIPED</span>
      </router-link>
    </header>

    <main class="register-main">
      <div class="register-card">
        <h1 class="register-heading">Register</h1>

        <form class="register-form" @submit.prevent>
          <div class="form-group">
            <label for="firstName">First name <span class="required">*</span></label>
            <input id="firstName" v-model="form.firstName" type="text" required />
          </div>

          <div class="form-group">
            <label for="lastName">Last name <span class="required">*</span></label>
            <input id="lastName" v-model="form.lastName" type="text" required />
          </div>

          <div class="form-group">
            <label for="email">Email <span class="required">*</span></label>
            <input id="email" v-model="form.email" type="email" required />
          </div>

          <div class="form-group">
            <label for="password">Password <span class="required">*</span></label>
            <input id="password" v-model="form.password" type="password" required />
          </div>

          <div class="form-group">
            <label for="confirmPassword">Confirm password <span class="required">*</span></label>
            <input id="confirmPassword" v-model="form.confirmPassword" type="password" required />
          </div>

          <h2 class="section-heading">Profile (optional)</h2>

          <div class="form-group">
            <label for="category">Primary category of interest</label>
            <select id="category" v-model="form.category">
              <option value="" disabled selected>Select a category</option>
              <option value="solar">Solar</option>
              <option value="noise">Noise</option>
              <option value="traffic">Traffic</option>
            </select>
          </div>

          <div class="form-group">
            <label for="role">I am</label>
            <select id="role" v-model="form.role">
              <option value="" disabled selected>Select a role</option>
              <option value="individual">Individual</option>
              <option value="organisation">Organisation</option>
              <option value="company">Company</option>
            </select>
          </div>

          <div class="form-group">
            <label for="orgName">Organisation / Company name</label>
            <input id="orgName" v-model="form.orgName" type="text" />
          </div>

          <button type="submit" class="btn-primary register-btn">Register</button>
        </form>

        <p class="back-link">
          <router-link to="/">Back to Login</router-link>
        </p>
      </div>
    </main>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  category: '',
  role: '',
  orgName: '',
})
</script>

<style scoped>
.register-page {
  min-height: 100vh;
  background: var(--color-bg);
  display: flex;
  flex-direction: column;
  padding-top: var(--banner-height);
}

.register-header {
  display: flex;
  align-items: center;
  height: var(--header-height);
  padding: 0 var(--space-xl);
  background: var(--color-white);
  border-bottom: 1px solid var(--color-border);
}

.register-brand {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
}

.register-logo {
  height: 40px;
  object-fit: contain;
}

.register-title {
  font-size: 16px;
  color: var(--color-darkest);
  font-weight: 500;
}

.register-title::before {
  content: "|";
  font-weight: 600;
  font-size: 18px;
  padding-right: var(--space-sm);
  color: var(--color-border);
}

.register-main {
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: var(--space-2xl) var(--space-md);
}

.register-card {
  background: var(--color-white);
  border-radius: var(--radius-lg);
  padding: var(--space-xl);
  box-shadow: var(--shadow-card);
  width: 100%;
  max-width: 480px;
}

.register-heading {
  font-size: 22px;
  font-weight: 700;
  color: var(--color-darkest);
  margin-bottom: var(--space-lg);
}

.section-heading {
  font-size: 14px;
  font-weight: 600;
  color: var(--color-text);
  margin-top: var(--space-lg);
  margin-bottom: var(--space-md);
  padding-top: var(--space-md);
  border-top: 1px solid var(--color-border-lighter);
}

.form-group {
  margin-bottom: var(--space-md);
}

.form-group label {
  display: block;
  font-size: 13px;
  font-weight: 600;
  color: var(--color-darkest);
  margin-bottom: var(--space-xs);
}

.required {
  color: #c0392b;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 10px 12px;
  font-size: 14px;
  font-family: var(--font-primary);
  color: var(--color-darkest);
  background: var(--color-white);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  transition: border-color 0.15s;
}

.form-group input:focus,
.form-group select:focus {
  outline: none;
  border-color: var(--color-teal);
}

.register-btn {
  width: 100%;
  margin-top: var(--space-lg);
}

.back-link {
  text-align: center;
  margin-top: var(--space-md);
  font-size: 14px;
}

.back-link a {
  color: var(--color-teal);
  font-weight: 500;
}

.back-link a:hover {
  text-decoration: underline;
}

@media (max-width: 767px) {
  .register-main {
    padding: var(--space-md);
  }

  .register-card {
    max-width: 100%;
    padding: var(--space-lg);
  }

  .register-header {
    padding: 0 var(--space-md);
  }
}
</style>
