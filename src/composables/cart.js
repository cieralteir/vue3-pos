import { computed, reactive, readonly } from "vue";

const items = reactive([]);
const total = computed(() =>
  items.reduce((acc, v) => {
    acc += v.price * v.quantity;
    return acc;
  }, 0)
);

export function useCart() {
  const addItem = (item) => {
    const _item = items.find((v) => v.id == item.id);
    if (_item) {
      incrementItemQty(_item);
    } else {
      items.push({
        ...item,
        quantity: 1,
      });
    }
  };
  const removeItem = (item) => {
    const index = items.findIndex((v) => v.id == item.id);
    if (index > -1) {
      items.splice(index, 1);
    }
  };
  const incrementItemQty = (item) => {
    const _item = items.find((v) => v.id == item.id);
    if (_item) _item.quantity++;
  };
  const decrementItemQty = (item) => {
    const _item = items.find((v) => v.id == item.id);
    if (_item) _item.quantity--;
  };
  const updateItemQty = (item, quantity) => {
    const _item = items.find((v) => v.id == item.id);
    if (_item) _item.quantity = quantity;
  };
  return {
    items: readonly(items),
    total: readonly(total),
    addItem,
    removeItem,
    incrementItemQty,
    decrementItemQty,
    updateItemQty,
  };
}
