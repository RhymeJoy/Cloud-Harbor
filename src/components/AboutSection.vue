<script setup lang="ts">
import { useI18n } from '../i18n';

const { t } = useI18n();
</script>

<template>
  <section id="about" class="info-section">
    <div>
      <p class="eyebrow">{{ t('about.eyebrow') }}</p>
      <h3>{{ t('about.title') }}</h3>
    </div>
    <p>
      {{ t('about.body') }}
    </p>
  </section>
</template>

<style scoped>
.info-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-top: 24px;
  padding: 24px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.05);
}

.eyebrow {
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: #ffb8de;
  margin: 0 0 8px;
}

h3,
p {
  margin: 0;
}

@media (max-width: 900px) {
  .info-section {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .info-section {
    padding: 18px;
  }
}
</style>
