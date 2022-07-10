import { reactive, readonly } from "vue";

const items = reactive([]);

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
    addItem,
    removeItem,
    incrementItemQty,
    decrementItemQty,
    updateItemQty,
  };
}
