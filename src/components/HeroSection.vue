<script setup lang="ts">
import { useI18n } from '../i18n';
import { publicAsset } from '../composables/usePublicAssets';

const avatarSrc = publicAsset('avatar.svg');
const { t } = useI18n();
</script>

<template>
  <header class="hero">
    <div class="hero-copy">
      <p class="eyebrow">{{ t('hero.eyebrow') }}</p>
      <h1>{{ t('hero.title') }}</h1>
      <p class="hero-text">
        {{ t('hero.intro') }}
      </p>
      <div class="hero-actions">
        <a href="#products" class="primary-btn">{{ t('hero.productsCta') }}</a>
        <a href="#about" class="ghost-btn">{{ t('hero.aboutCta') }}</a>
      </div>
    </div>

    <div class="profile-card">
      <img class="avatar" :src="avatarSrc" :alt="t('hero.avatarAlt')" />
      <p class="card-label">{{ t('hero.profileLabel') }}</p>
      <h2>{{ t('hero.profileTitle') }}</h2>
      <p class="profile-role">{{ t('hero.profileRole') }}</p>
      <p class="card-text">
        {{ t('hero.profileText') }}
      </p>
    </div>
  </header>
</template>

<style scoped>
.hero {
  display: grid;
  grid-template-columns: 1.4fr 0.9fr;
  gap: 24px;
  align-items: center;
  padding: 32px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 28px;
  background: rgba(8, 12, 35, 0.78);
  box-shadow: 0 22px 55px rgba(2, 4, 14, 0.35);
  backdrop-filter: blur(18px);
}

.eyebrow {
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: #ffb8de;
  margin: 0 0 8px;
}

h1,
h2,
p {
  margin: 0;
}

h1 {
  font-size: clamp(2rem, 3vw, 3rem);
  line-height: 1.15;
  margin-bottom: 12px;
}

.hero-text {
  color: #d8d6f7;
  max-width: 580px;
  margin-bottom: 20px;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.primary-btn,
.ghost-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 18px;
  border-radius: 999px;
  transition: transform 0.2s ease, background 0.2s ease;
}

.primary-btn:hover,
.ghost-btn:hover {
  transform: translateY(-1px);
}

.primary-btn {
  background: linear-gradient(135deg, #ff7fd8, #7f6cff);
  color: #fff;
}

.ghost-btn {
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.06);
}

.profile-card {
  padding: 24px;
  border-radius: 24px;
  background: linear-gradient(160deg, rgba(255, 137, 200, 0.2), rgba(101, 111, 255, 0.2));
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.avatar {
  width: 112px;
  height: 112px;
  display: block;
  margin-bottom: 18px;
  border-radius: 50%;
  border: 3px solid rgba(255, 255, 255, 0.72);
  box-shadow: 0 18px 36px rgba(6, 8, 26, 0.28);
  object-fit: cover;
}

.card-label {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: #ffe0f1;
  margin-bottom: 8px;
}

.profile-role {
  color: #ffd8ee;
  font-weight: 700;
  margin-top: 8px;
}

.card-text {
  color: #ece9ff;
  margin-top: 8px;
  margin-bottom: 12px;
}

@media (max-width: 900px) {
  .hero {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .hero {
    padding: 18px;
  }
}
</style>
