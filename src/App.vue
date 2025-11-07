<script setup lang="ts">
import { ref } from "vue";
import FlipBook from "../lib/FlipBook.vue";
import IconArrow from "./components/IconArrow.vue";

// Usar la base del build (import.meta.env.BASE_URL) para que las rutas funcionen en GitHub Pages
const base = import.meta.env.BASE_URL as string;

// Array of image paths (prefijadas con la base correcta)
const pages = ref([
  `${base}images/1.png`,
  `${base}images/2.png`,
  `${base}images/3.png`,
  `${base}images/4.png`,
  `${base}images/5.png`,
  `${base}images/6.png`,
  `${base}images/7.png`,
  `${base}images/8.png`,
  `${base}images/9.png`,
  `${base}images/10.png`,
]);
</script>

<template>
  <div class="slider-wrap">
    <FlipBook
      v-slot="flipbook"
      class="flipbook"
      :pages="pages"
      :gloss="0"
      :click-to-zoom="true"
      alt="Book"
    >
      
      <button
        aria-label="Left"
        class="flipbook-button button-prev"
        :class="{ disabled: !flipbook.canFlipLeft }"
        @click="flipbook.flipLeft"
      >
        <IconArrow />
      </button>
      <button
        aria-label="Right"
        class="flipbook-button button-next"
        :class="{ disabled: !flipbook.canFlipRight }"
        @click="flipbook.flipRight"
      >
        <IconArrow />
      </button>
    </FlipBook>
  </div>
</template>

<style scoped>
.slider-wrap {
  position: relative;
  width: 100%;
  /* Duplicamos el máximo ancho para mostrar la revista al doble de tamaño */
  max-width: 2240px;
  margin: 0 auto;
  overflow: hidden;
}

.slider-wrap .flipbook {
  display: block;
  position: relative;
  /* Aumentamos el ancho disponible (teniendo en cuenta los botones) */
  width: calc(100% - 256px);
  /* Doblamos la altura para hacer la revista al doble de tamaño */
  height: 820px;
  margin: 0 auto;
}

.slider-wrap .flipbook img {
  max-width: 100%;
}

.slider-wrap .flipbook-button {
  position: absolute;
  top: 50%;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  outline: none;
}

.slider-wrap .flipbook-button.button-prev {
  /* Reposicionamos los botones acorde al nuevo tamaño */
  left: -128px;
  transform: translateY(-50%);
}
.slider-wrap .flipbook-button.button-next {
  right: -128px;
  transform: rotate(180deg) translateY(50%);
}

/* Indicador de página */
.slider-wrap .page-indicator {
  position: absolute;
  left: 50%;
  bottom: 8px;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  padding: 6px 12px;
  border-radius: 12px;
  font-size: 14px;
  z-index: 30;
}
.slider-wrap .flipbook-button.disabled {
  opacity: 0.35;
  cursor: auto;
  pointer-events: none;
}
</style>
