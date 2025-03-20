import { defineStore } from "pinia"
import { db } from './firebase.js';
import {
  update,
  ref,
  onValue
} from 'firebase/database';

export const useStore = defineStore('store', {
  state: () => ({ room: "1", playerName: "", game: {} }),
  getters: {
    alice(state) {
      return state.alicePlayed.split(",").slice(0, -1)
    },
    bob(state) {
      return state.bobPlayed.split(",").slice(0, -1)
    },
    aliceLastPlayed(state) {
      return state.alice.at(-1)
    },
    bobLastPlayed(state) {
      return state.bob.at(-1)
    },
    activePlayer(state) {
      return state.game.active
    },
    alicePlayed(state) {
      return state.game.alice.played
    },
    bobPlayed(state) {
      return state.game.bob.played
    },
    score(state) {
      return state.game.score
    },
    aliceHand(state) {
      return state.game.alice.hand.split(",")
    },
    bobHand(state) {
      return state.game.bob.hand.split(",")
    },
    total(state) {
      return state.game.total
    }
  },
  actions: {
    initGame() {
      update(ref(db, "room" + "/" + this.room),
        {
          score: 0,
          active: "alice",
          alice: { played: "", hand: "1,2,3,4,5,6,7,8,9,10,11" },
          bob: { played: "", hand: "1,2,3,4,5,6,7,8,9,10,11" },
          total: this.total + 1
        })
    },
    getRoom(room = this.room) {
      onValue(ref(db, "room" + "/" + room), (snapshot) => {
        this.game = snapshot.val();
      })
    },
    updatePlayed(player, played, room = this.room) {
      update(ref(db, "room" + "/" + room + "/" + player),
        { played: played });
    },
    changeActive(player) {
      update(ref(db, "room" + "/" + this.room),
        { active: player });
    },
    changeScore(score) {
      update(ref(db, "room" + "/" + this.room),
        { score: score });
    },
    turn(player, card) {
      if (player == 'alice') {
        this.updatePlayed("alice", this.alicePlayed + card + ",")
        this.changeActive('bob')
      }
      if (player == 'bob') {
        this.updatePlayed("bob", this.bobPlayed + card + ",")
        this.changeActive('alice')
        if (this.aliceLastPlayed !== this.bobLastPlayed) {
          if (+this.aliceLastPlayed > +this.bobLastPlayed) {
            this.changeScore(this.score + 1)
          } else {
            this.changeScore(this.score - 1)
          }
        }
      }
    }
  },
})