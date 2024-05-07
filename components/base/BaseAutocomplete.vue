<template>
  <div>
    <label for="patient-dropdown">{{ label }}</label>
    <input :value="search" id="patient-dropdown" type="text" @input="setSearch($event)" data-dropdown-toggle="dropdown"
      class="w-full border border-solid border-y-gray-300 p-2 rounded-md" placeholder="Search for a patient" />

    <ul v-if="search && customFilter(items, search).length"
      class="m-0 rounded-md overflow-hidden w-full absolute top-[70px] bg-white z-10" id="dropdown"
      aria-labelledby="patient-dropdown">
      <slot name="list-prepend" :clearSearch="clearSearch"></slot>

      <li :class="buttonClass({ isSelected: item[itemValue] == model })" v-for="item in customFilter(items, search)"
        :key="item[itemKey]" class="p-3 border border-solid border-y-gray-300">
        <button @click.stop="setSelection(item)" :class="buttonClass({ isSelected: item[itemValue] == model })">
          <slot name="item-content" :item="item">
            <p class="text-start">
              {{ typeof itemText == 'function' ? itemText(item) : item[itemText] || 'Undefined' }}
            </p>
          </slot>
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
const model = defineModel()
const search = ref('');

const buttonClass = ({ isSelected = false }) => ({
  "h-full": true,
  "w-full": true,
  "m-auto": true,
  "bg-teal-500": isSelected
});

const setSearch = ({ target: { value } }) => {
  search.value = value
}

const setSelection = (item) => {
  if (props.returnObject && !props.itemValue) {
    model.value = item;
  } else if (props.itemValue) {
    model.value = typeof props.itemValue === 'function'
      ? props.itemValue(item)
      : item[props.itemValue];
  }

  console.log("the search value: ", typeof props.itemText == "function" ? props.itemText(item) : item[props.itemText])
  search.value = typeof props.itemText == "function" ? props.itemText(item) : item[props.itemText]
}

const clearSearch = () => {
  search.value = null;
}

const props = defineProps({
  label: {
    type: String,
    required: true
  },
  items: {
    type: Array,
    required: true,
    default: () => []
  },
  returnObject: {
    type: Boolean,
    default: false
  },
  itemText: {
    type: [Function, String],
    default: (item) => item
  },
  itemValue: {
    type: [Function, String],
    default: (item) => item
  },
  itemKey: {
    type: String,
    default: 'id'
  },
  customFilter: {
    type: Function,
    default: (items, search) => {
      return items.filter((item) => {
        return JSON.stringify(item).toLowerCase().includes(search.toLowerCase());
      });
    }
  }
})
</script>