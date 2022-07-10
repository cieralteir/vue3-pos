<script setup>
import { useCart } from "@/composables/cart";

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});
const { addItem } = useCart();
const product = props.product;
</script>

<template>
  <div
    class="
      flex flex-col
      justify-between
      w-52
      h-28
      p-2
      bg-gray-50
      rounded-md
      cursor-pointer
      select-none
    "
    @click="addItem(product)"
  >
    <p class="font-bold">{{ $filters.uppercase(product.name) }}</p>
    <p class="font-bold text-gray-400">
      {{ $filters.currency(product.price) }}
    </p>
  </div>
</template>