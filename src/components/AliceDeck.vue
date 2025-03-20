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
    if (props.isActive & store.playerName == 'alice') {
        let id = hand.value.indexOf(card)
        hand.value.splice(id, 1)
        emit('turn', card)
    }

}
//show last played card after bob played
const alicePlayed = computed(() => {
    if (store.playerName == 'bob') {
        if (store.activePlayer == 'alice') {
            return store.alice
        } else {

            return store.alice.slice(0, -1)
        }
    } else {
        return store.alice
    }
}
)
//watch game restart
// const { aliceHand } = storeToRefs(store.aliceHand)
watch(() => store.total, (val) => {
    hand = ref(JSON.parse(JSON.stringify(store.aliceHand)))
})
let hand = ref(JSON.parse(JSON.stringify(store.aliceHand)))

</script>

<template>
    <div class="flex alice" :class="store.playerName == 'alice' ? 'flex-col' : 'flex-col-reverse'">
        <div class="fcc gap-2 py-8 px-2">
            <div class="w-[calc(100%/12)] h-14 bg-white cursor-pointer fcc rounded shadow-lg"
                v-for="card in alicePlayed">
                <p class="font-bold">{{ card }}</p>
                <img src="" alt="">
            </div>
        </div>
        <div class="fcc gap-2 py-2 px-2 flex-wrap" :class="isActive ? 'active' : 'inactive'">
            <div class="w-[calc(100%/7)] h-14 bg-white cursor-pointer fcc rounded shadow-lg" v-for="card in hand"
                @click="play(card)">
                <p class="font-bold" v-if="store.playerName == 'alice'">{{ card }}</p>
                <img src="" alt="">
            </div>
        </div>
    </div>
</template>

<style scoped></style>
