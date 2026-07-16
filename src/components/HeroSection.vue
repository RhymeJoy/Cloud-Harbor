<script setup lang="ts">
import { useI18n } from '../i18n';
import { routeHref } from '../composables/useAppRoute';
import { publicAsset } from '../composables/usePublicAssets';

const avatarSrc = publicAsset('avatar.avif');
const productsHref = routeHref('products/');
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
        <NuxtLink :to="productsHref" class="primary-btn">
          <span>{{ t('hero.productsCta') }}</span>
          <span class="btn-arrow" aria-hidden="true">></span>
        </NuxtLink>
      </div>
    </div>

    <div class="profile-card">
      <div class="avatar-frame">
        <img
          class="avatar"
          :src="avatarSrc"
          :alt="t('hero.avatarAlt')"
          loading="eager"
          fetchpriority="high"
          decoding="async"
        />
      </div>
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
  margin-top: 28px;
}

.primary-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 60px;
  padding: 10px 45px 10px 50px;
  border: 2px solid rgba(255, 255, 255, 0.86);
  border-radius: 999px;
  background: linear-gradient(135deg, #ad458e, #38289c);
  box-shadow:
    0 0 0 7px rgba(255, 184, 222, 0.13),
    0 20px 38px rgba(127, 108, 255, 0.32);
  color: #fff;
  font-size: 1.08rem;
  font-weight: 900;
  letter-spacing: 0;
  transition: transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease;
}

.primary-btn:hover,
.primary-btn:focus-visible {
  transform: translateY(-2px);
  box-shadow:
    0 0 0 9px rgba(255, 184, 222, 0.16),
    0 24px 44px rgba(127, 108, 255, 0.42);
  filter: saturate(1.08);
}

.primary-btn:focus-visible {
  outline: 3px solid #ffe0f1;
  outline-offset: 5px;
}

.btn-arrow {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.18);
  font-size: 1rem;
  line-height: 1;
  transition: transform 0.2s ease, background 0.2s ease;
}

.primary-btn:hover .btn-arrow,
.primary-btn:focus-visible .btn-arrow {
  transform: translateX(3px);
  background: rgba(255, 255, 255, 0.24);
}

.profile-card {
  padding: 24px;
  border-radius: 24px;
  background: linear-gradient(160deg, rgba(255, 137, 200, 0.2), rgba(101, 111, 255, 0.2));
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.avatar-frame {
  width: 112px;
  height: 112px;
  overflow: hidden;
  margin-bottom: 18px;
  border-radius: 50%;
  border: 3px solid rgba(255, 255, 255, 0.72);
  box-shadow: 0 18px 36px rgba(6, 8, 26, 0.28);
}

.avatar {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  object-position: 50% 20%;
  transform: scale(1.25);
  transform-origin: center;
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

  .primary-btn {
    width: 100%;
    padding-inline: 22px;
  }
}
</style>
