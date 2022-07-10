<script setup>
import ProductCards from "@/components/Product/ProductCards.vue";
import OrderList from "@/components/Order/OrderList.vue";
</script>

<template>
  <div class="flex">
    <div class="flex flex-col h-screen w-3/4 bg-gray-100">
      <div class="p-5">
        <div class="flex gap-2">
          <div class="bg-gray-800 text-gray-50 rounded-full p-2 min-w-[100px] max-w-full text-center text-sm">
            ALL
          </div>
          <div class="p-2 min-w-[100px] max-w-full text-center text-sm">
            NOODLES
          </div>
          <div class="p-2 min-w-[100px] max-w-full text-center text-sm">
            SNACKS
          </div>
          <div class="p-2 min-w-[100px] max-w-full text-center text-sm">
            DRINKS
          </div>
        </div>
      </div>
      <div class="grow p-5 overflow-auto">
        <ProductCards />
      </div>
    </div>
    <div class="flex flex-col h-screen w-1/4 bg-gray-50 p-5">
      <h2 class="font-bold text-2xl mb-5">ORDERS</h2>
      <div class="grow">
        <OrderList />
      </div>
      <button class="w-full bg-gray-800 text-white p-3 rounded-md">CHECKOUT</button>
    </div>
  </div>
</template>