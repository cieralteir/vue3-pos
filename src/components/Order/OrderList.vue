<script setup>
import { useCart } from "@/composables/cart";
import OrderListItem from "@/components/Order/OrderListItem.vue";

const { items, total } = useCart();
</script>

<template>
  <div class="flex flex-col h-full">
    <h2 class="font-bold text-2xl mb-5">ORDERS</h2>
    <div class="grow flex">
      <div class="flex flex-col gap-5 w-full" v-if="items.length">
        <OrderListItem :item="item" v-for="item in items" :key="item.id" />
      </div>
      <div class="flex flex-col items-center justify-center w-full" v-else>
        <i class="fa fa-basket-shopping text-gray-300 text-7xl mb-2" />
        <span class="text-gray-300 font-extralight">No Orders Yet</span>
      </div>
    </div>
    <button class="w-full bg-gray-800 text-white p-3 rounded-md">
      CHARGE <span class="font-thin">{{ $filters.currency(total) }}</span>
    </button>
  </div>
</template>
