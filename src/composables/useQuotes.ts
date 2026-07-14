import { onMounted, onUnmounted, ref, toValue, watch, type MaybeRefOrGetter } from 'vue';

export const useQuotes = (quotesList: MaybeRefOrGetter<string[]>, intervalMs = 10000, initialValue = '') => {
  const currentQuote = ref(initialValue);
  const isQuoteFadingOut = ref(false);
  let quoteInterval: number | null = null;
  let remainingQuotes: string[] = [];

  const getRandomQuote = () => {
    const list = toValue(quotesList);

    if (!list || list.length === 0) {
      return '';
    }

    if (remainingQuotes.length === 0) {
      remainingQuotes = [...list];
    }

    const index = Math.floor(Math.random() * remainingQuotes.length);
    return remainingQuotes.splice(index, 1)[0] ?? '';
  };

  const updateQuote = (immediate = false) => {
    const nextQuote = getRandomQuote();

    if (!nextQuote) {
      return;
    }

    if (immediate || currentQuote.value === initialValue) {
      currentQuote.value = nextQuote;
      isQuoteFadingOut.value = false;
      return;
    }

    isQuoteFadingOut.value = true;
    window.setTimeout(() => {
      currentQuote.value = nextQuote;
      isQuoteFadingOut.value = false;
    }, 300);
  };

  watch(
    () => toValue(quotesList),
    (nextQuotes) => {
      if (nextQuotes && nextQuotes.length > 0) {
        remainingQuotes = [...nextQuotes];
        updateQuote(true);
      }
    },
    { immediate: true, deep: true }
  );

  onMounted(() => {
    if (currentQuote.value === initialValue) {
      updateQuote(true);
    }

    quoteInterval = window.setInterval(() => updateQuote(false), intervalMs);
  });

  onUnmounted(() => {
    if (quoteInterval) {
      window.clearInterval(quoteInterval);
    }
  });

  return {
    currentQuote,
    isQuoteFadingOut
  };
};
