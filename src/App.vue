<script setup>
import { onMounted, ref } from 'vue'
import AliceDeck from './components/AliceDeck.vue'
import BobDeck from './components/BobDeck.vue'
import { useStore } from './store.js'

const store = useStore()
function createGame(p) {
  store.playerName = p
  if (p == 'alice') store.initGame()
}
onMounted(() => {
  store.getRoom()
})
</script>

<template>
  <div class="h-screen w-screen bg-white">
    <div class="fcc flex-col h-full" v-if="!store.playerName">
      <p class="font-bold mb-4">Player:</p>
      <button class="block bg-blue-200 rounded min-w-20 py-1 cursor-pointer mb-2" @click="createGame('alice')">Alice</button>
      <button class="block bg-blue-200 rounded min-w-20 py-1 cursor-pointer" @click="createGame('bob')">Bob</button>
    </div>
    <div class="flex h-full w-full" :class="store.playerName == 'alice' ? 'flex-col-reverse' : 'flex-col'" v-else>
      <AliceDeck :isActive="store.activePlayer == 'alice'" @turn="(card) => store.turn('alice', card)" />
      <div class="grow fcc flex-col">
        <div class="score">{{ store.playerName == 'alice' ? store.score : store.score * (-1) }}</div>
        <button @click="store.initGame()" v-if="store.playerName == 'alice' & store.bob.length == 11"
          class="rounded bg-purple-400 px-4 py-2 cursor-pointer font-bold text-white shadow-xl">Заново</button>
      </div>
      <BobDeck :isActive="store.activePlayer == 'bob'" @turn="(card) => store.turn('bob', card)" />
    </div>
  </div>
</template>

<style scoped>
.score {
  font-size: 32px;
  font-weight: 800;
}
</style>
