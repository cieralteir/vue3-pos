<script setup>
import ProductCard from "@/components/Product/ProductCard.vue";

const products = [
  { id: 1, name: "Jin Ramen", price: 40 },
  { id: 2, name: "Pepero", price: 50 },
  { id: 3, name: "Binggrae Banana Milk", price: 60 },
];
</script>

<template>
  <div class="flex flex-wrap gap-5">
    <ProductCard
      :product="product"
      v-for="product in products"
      :key="product.id"
    />
  </div>
</template>