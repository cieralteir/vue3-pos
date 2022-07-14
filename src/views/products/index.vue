<script setup>
import OrderList from "@/components/Order/OrderList.vue";
import ProductList from "@/components/Product/ProductList.vue";
import TheHeader from "@/components/TheHeader.vue";
</script>

<template>
  <div class="flex">
    <div class="h-screen w-4/6 bg-gray-100">
      <TheHeader />
      <div class="p-5">
        <ProductList />
      </div>
    </div>
    <div class="h-screen w-2/6 bg-gray-50 p-5">
      <OrderList />
    </div>
  </div>
</template>
