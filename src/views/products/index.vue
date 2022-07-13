<script setup>
import ProductList from "@/components/Product/ProductList.vue";
import OrderList from "@/components/Order/OrderList.vue";
</script>

<template>
  <div class="flex">
    <div class="h-screen w-4/6 bg-gray-100 p-5">
      <ProductList />
    </div>
    <div class="flex flex-col h-screen w-2/6 bg-gray-50 p-5">
      <h2 class="font-bold text-2xl mb-5">ORDERS</h2>
      <div class="grow">
        <OrderList />
      </div>
      <button class="w-full bg-gray-800 text-white p-3 rounded-md">
        CHECKOUT
      </button>
    </div>
  </div>
</template>
