<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  appointments: {
    type: Array,
    required: true,
    default: () => [
      
    ]
  }
})
</script>