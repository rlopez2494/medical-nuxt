<template>
  <div>
    <label for="patient-dropdown">{{ label }}</label>
    <input id="patient-dropdown" type="text" v-model="search" data-dropdown-toggle="dropdown"
      class="w-full border border-solid border-y-gray-300 p-2 rounded-md" placeholder="Search for a patient" />

    <ul v-if="search && customFilter(items, search).length"
      class="m-0 rounded-md overflow-hidden w-full absolute top-[70px] bg-white z-10" id="dropdown"
      aria-labelledby="patient-dropdown">
      <slot name="list-prepend" :clearSearch="clearSearch"></slot>

      <li v-for="item in customFilter(items, search)" :key="item[itemKey]"
        class="p-3 border border-solid border-y-gray-300">
        <button @click="setSelection(item)" class="h-full w-full m-auto">
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

const setSelection = (item) => {
  if (props.returnObject && !props.itemValue) {
    model.value = item;
  } else if (props.itemValue) {
    model.value = typeof props.itemValue === 'function'
      ? props.itemValue(item)
      : item[props.itemValue];
  }
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