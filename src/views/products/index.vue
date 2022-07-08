<script setup>
import ProductCards from "@/components/Product/ProductCards.vue";
</script>

<template>
  <div class="flex">
    <div class="h-screen w-3/4 bg-gray-100">
      <div class="h-1/4"></div>
      <div class="h-3/4 p-5 overflow-auto">
        <ProductCards />
      </div>
    </div>
    <div class="h-screen w-1/4 bg-gray-50"></div>
  </div>
</template>