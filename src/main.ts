import { createApp } from 'vue';
import App from './App.vue';
import { installI18nHead } from './i18n';
import './style.css';

installI18nHead();

const mountTarget = document.createElement('div');
mountTarget.className = 'vue-root';
document.body.appendChild(mountTarget);

createApp(App).mount(mountTarget);
