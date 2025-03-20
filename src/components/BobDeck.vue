<script setup>
import { ref, defineEmits, computed, watch } from 'vue'
import { useStore } from '../store.js'
import { storeToRefs } from 'pinia'

const store = useStore()
const props = defineProps({
  isActive: Boolean,
  player: String
})
const emit = defineEmits(['turn'])

function play(card) {
  if (props.isActive & store.playerName == 'bob') {
    let id = hand.value.indexOf(card)
    hand.value.splice(id, 1)
    emit('turn', card)
  }

}
//show last played card after bob played
const bobPlayed = computed(() => {
  return store.bob
  // if (store.playerName == 'alice') {
  //   if (store.activePlayer == 'alice') {
  //     return store.bob
  //   } else {
  //     return store.bob
  //   }
  // } else {
  //   return store.bob
  // }
}
)
//watch game restart
// const { aliceHand } = storeToRefs(store)
watch(() => store.total, (val) => hand.value = ref(JSON.parse(JSON.stringify(store.bobHand))))
const hand = ref()
hand.value = JSON.parse(JSON.stringify(store.bobHand))
</script>

<template>
  <div class="flex bob" :class="store.playerName == 'bob' ? 'flex-col' : 'flex-col-reverse'">
    <div class="fcc gap-2 py-8 px-2">
      <div class="w-[calc(100%/12)] h-14 bg-white cursor-pointer fcc rounded shadow-lg" v-for="card in bobPlayed">
        <p class="font-bold">{{ card }}</p>
        <img src="" alt="">
      </div>
    </div>
    <div class="fcc gap-2 py-2 px-2 flex-wrap" :class="isActive ? 'active' : 'inactive'">
      <div class="w-[calc(100%/7)] h-14 bg-white cursor-pointer fcc rounded shadow-lg" v-for="card in hand"
        @click="play(card)">
        <p class="font-bold" v-if="store.playerName == 'bob'">{{ card }}</p>
        <img src="" alt="">
      </div>
    </div>
  </div>
</template>

<style scoped></style>
