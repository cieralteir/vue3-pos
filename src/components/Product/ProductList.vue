<script setup>
import { computed, reactive, ref } from "vue";
import ProductCard from "@/components/Product/ProductCard.vue";

const products = reactive([
  { id: 1, name: "Jin Ramen", price: 40, category: "noodles" },
  { id: 2, name: "Pepero", price: 50, category: "snacks" },
  { id: 3, name: "Binggrae Banana Milk", price: 60, category: "drinks" },
]);
const productsFiltered = computed(() =>
  products.filter((v) =>
    categorySelected.value ? v.category === categorySelected.value : true
  )
);
const categories = computed(() => products.map((v) => v.category));
let categorySelected = ref("");
</script>

<template>
  <div class="flex gap-2 mb-5">
    <div
      class="p-2 min-w-[100px] max-w-full text-center text-sm cursor-pointer select-none rounded-full hover:bg-gray-400 hover:text-gray-50"
      :class="{
        'bg-gray-800 text-gray-50': categorySelected === '',
      }"
      @click="() => (categorySelected = '')"
    >
      ALL
    </div>
    <div
      class="p-2 min-w-[100px] max-w-full text-center text-sm cursor-pointer select-none rounded-full hover:bg-gray-400 hover:text-gray-50"
      :class="{
        'bg-gray-800 text-gray-50': categorySelected === category,
      }"
      @click="() => (categorySelected = category)"
      v-for="(category, i) in categories"
      :key="i"
    >
      {{ $filters.uppercase(category) }}
    </div>
  </div>
  <div class="grow overflow-auto">
    <div class="flex flex-wrap gap-5">
      <ProductCard
        :product="product"
        v-for="product in productsFiltered"
        :key="product.id"
      />
    </div>
  </div>
</template>
