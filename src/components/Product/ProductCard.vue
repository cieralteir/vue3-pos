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
    class="flex flex-col justify-between w-64 h-36 p-2 bg-gray-50 rounded-md cursor-pointer select-none hover:bg-gray-200"
    @click="addItem(product)"
  >
    <p class="font-bold">{{ $filters.uppercase(product.name) }}</p>
    <div class="flex items-end justify-between">
      <p class="font-bold text-gray-400">
        {{ $filters.currency(product.price) }}
      </p>
      <img
        class="object-cover w-20 h-20 rounded-xl"
        src="http://placebacon.net/100/100"
      />
    </div>
  </div>
</template>
