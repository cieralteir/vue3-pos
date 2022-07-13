<script setup>
import { useCart } from "@/composables/cart";

const { items, removeItem, incrementItemQty, decrementItemQty } = useCart();
</script>

<template>
  <div class="flex flex-col gap-5">
    <div
      class="grid grid-cols-3 items-center w-full text-sm"
      v-for="item in items"
      :key="item.id"
    >
      <p class="font-bold">{{ $filters.uppercase(item.name) }}</p>
      <div class="flex gap-3 items-center justify-center">
        <button
          class="inline-flex items-center justify-center bg-gray-100 p-2 w-8 h-8 rounded-md"
          @click="removeItem(item)"
          v-if="item.quantity === 1"
        >
          <span class="fa fa-minus" />
        </button>
        <button
          class="inline-flex items-center justify-center bg-gray-100 p-2 w-8 h-8 rounded-md"
          @click="decrementItemQty(item)"
          v-else
        >
          <span class="fa fa-minus" />
        </button>
        <p>{{ item.quantity }}</p>
        <button
          class="inline-flex items-center justify-center bg-gray-100 p-2 w-8 h-8 rounded-md"
          @click="incrementItemQty(item)"
        >
          <span class="fa fa-plus" />
        </button>
      </div>
      <p class="font-bold text-gray-400 text-right">
        {{ $filters.currency(item.price * item.quantity) }}
      </p>
    </div>
  </div>
</template>
