<template>
  <v-container class="main" style="height: 90%;"
               :style="{ backgroundImage: 'url(' + require('@/assets/train1.jpg') + ')' }"
  >
    <v-row>
      <v-col cols="4">
        <v-btn
          icon
          dark
          @click="goHome"
        >
          <v-icon>mdi-home</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="4">
        <v-btn
          icon
          dark
          to="Store"
        >
          <v-icon>mdi-bitcoin</v-icon>
          {{ coins }}
        </v-btn>
      </v-col>
      <v-col cols="4">
        <div style="margin-top: 5px; color:white;">Level {{ level }}</div>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="5"><span style="font-size: x-large; color: white;">{{ round }} of {{ total_rounds }}</span></v-col>
      <v-col cols="3"><span style="font-size: xx-large; color:red; font-weight: bold;">{{ minutes + ":" + seconds }}</span></v-col>
      <v-col cols="2"><v-btn color="red" dark @click="buyTime">Buy Time</v-btn></v-col>
    </v-row>

    <v-row style="margin-left: 2px; margin-bottom: 4px;">
      <v-col cols="2" v-for="(l,idx) in letter_list">
        <v-btn v-if="l != ' '" small style="height: 60px; font-size: x-large;" :letter="l" :ref="'btn'+idx" :btnidx="idx" @click="letterSelected"></v-btn>
        <v-btn v-if="l == ' '" small style="height: 60px; font-size: x-large;" dark></v-btn>
      </v-col>
    </v-row>

    <v-row style="margin-top: 30px;"></v-row>
    <v-row style="margin-left: 20px;">
      <v-btn x-small color="blue" dark style="width: 140px; margin-right: 10px;" @click="showLetters">Peek (500 coins)</v-btn>
      <v-btn x-small color="purple" dark style="width: 140px;" disabled>Shine (100 coins)</v-btn>
    </v-row>

    <v-row style="margin-top: 10px;"></v-row>
    <v-row style="margin-left: 10%;">
      <div style="font-size: xxx-large; text-transform: uppercase; color: white;" v-html="find_word"></div>
    </v-row>
    <v-row style="margin-left: 10%;" v-for="c in completed_list">
      <div style="font-size: x-large; text-transform: uppercase; color: white;" v-html="c"></div>
    </v-row>

    <v-row>
      <v-btn
        color="red"
        fab
        large
        dark
        bottom
        right
        fixed
        @click="pauseGame"
      >
        <v-icon>mdi-pause</v-icon>
      </v-btn>
    </v-row>


  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

/** About */
export default defineComponent({
  /** Components */
  components: {

  },

  mounted() {
    // set the letter list
    // get a new word

    this.showLetters();

    setTimeout(this.startTimer, 5000);
  },

  methods: {
    startTimer: function()
    {
      // @ts-ignore: Type 'Timer' is not assignable to type string.
      this.countdown_timer_handle = setInterval(()=>{
        this.countdown_time--;
        if (this.countdown_time > 60) {
          this.minutes = Math.floor(this.countdown_time/60).toString();
          this.seconds = (this.countdown_time % 60).toString();
        }
        else {
          this.minutes = "0";
          this.seconds = this.countdown_time.toString();
        }

        if (parseInt(this.seconds) < 10) {
          this.seconds = "0"+this.seconds;
        }

        if (this.countdown_time == 0) {
          // go to the lose window
          this.loseRound();
        }
      }, 1000);
    },

    pauseGame: function()
    {
      // because this switches windows, we lose the time
      clearInterval(this.countdown_timer_handle);
      this.$router.push('/pause');
    },

    goHome: function()
    {
      clearInterval(this.countdown_timer_handle);
      this.$router.push('/');
    },

    buyTime: function()
    {
      if (this.coins > 1000) {
        this.coins = this.coins - 1000;
      }

      this.coins = this.coins - 1000;

      this.countdown_time = this.countdown_time + 30;
    },

    letterSelected: function (event)
    {
      const btnidx = event.currentTarget.attributes.btnidx.value;

      this.button_target = 'btn' + btnidx;

      const selected = event.currentTarget.attributes.letter.value;

      const filled_word = this.find_word.replace("_", selected);
      if (this.alternate_list.indexOf(filled_word) == -1) {
        this.letterIncorrect(selected);
      } else {
        this.letterCorrect(selected, filled_word);
      }
    },

    winRound: function ()
    {
      clearInterval(this.countdown_timer_handle);
      this.$router.push('/win');
    },

    loseRound: function ()
    {
      clearInterval(this.countdown_timer_handle);
      this.$router.push('/lose');
    },

    letterCorrect: function (selected, filled_word)
    {
      if (this.round == this.total_rounds) {
        this.winRound();
      }

      this.round++;
      this.completed_list.unshift(filled_word.substring(0,this.letter_position)+"<u>"+filled_word.substring(this.letter_position, this.letter_position+1)+"</u>"+filled_word.substring(this.letter_position+1));
      const letter_index = this.letter_list.indexOf(selected);
      this.letter_list = this.letter_list.substring(0, letter_index) + " " + this.letter_list.substring(letter_index + 1);''

      this.find_word = this.getNewWord();

    },

    getNewWord: function ()
    {
      const letters_available = this.letter_list.replace(" ", "");

      let letter_position = Math.floor(Math.random() * 6); // max of 6 (7 letter words)

      letter_position = 1; // set specifically to 1 for testing

      let letter_selected = String.fromCharCode(97 + Math.floor(Math.random() * this.letter_list.length));

      letter_selected = "r";

      let found_word = '';

      // start at a random position
      let starting_position = Math.floor(Math.random() * this.word_list.length);
      for (let i = starting_position; i < this.word_list.length; i++) {

        const current_word = this.word_list[i];

        // make sure the word is long enough to use the position
        if (current_word.length > letter_position) {

          // make sure this word has the desired letter in the right position
          if (current_word.substring(letter_position,letter_position+1) == letter_selected) {
            found_word = current_word;
            break;
          }
        }
      }

      if (found_word == '') {
        found_word = this.getNewWord();
      }
      else {
        this.alternate_list = [];
        // look for words with available letters
        for (const letter of letters_available) {
          const test_word = found_word.substring(0, letter_position) + letter + found_word.substring(letter_position + 1);
          if (this.word_list.indexOf(test_word) != -1) {
            this.alternate_list.push(test_word);
          }
        }
      }

      this.letter_position = letter_position;
      return found_word.substring(0, letter_position) + '_' + found_word.substring(letter_position + 1);
    },

    letterIncorrect: function (selected)
    {
      setTimeout(()=>{
        if (this.button_target != null) {
          // @ts-ignore: Object is possibly 'null'.
          this.$refs[this.button_target][0].$el.innerText = "";
        }
        this.locked = false;
      }, 2000);

      // show selection
      if (this.button_target != null) {
        // @ts-ignore: Object is possibly 'null'.
        this.$refs[this.button_target][0].$el.innerText = selected;
      }

      this.locked = true;
    },

    showLetters: function()
    {
      if (this.coins > 500) {
        this.coins = this.coins - 500;
      }

      setTimeout(()=>{
        for (let i = 0; i < this.letter_list.length; i++) {
          // @ts-ignore: Object is possibly 'undefined'.
          this.$refs['btn'+i][0].$el.innerText = "";
        }
      }, 5000);

      // show selection
      for (let i = 0; i < this.letter_list.length; i++) {
        if (this.letter_list[i] != ' ') {
          // @ts-ignore: Object is possibly 'undefined'.
          this.$refs['btn'+i][0].$el.innerText = this.$refs['btn'+i][0].$el.attributes.letter.value;
        }
      }

    }
  },

  data: () => ({
    coins: 43223,
    level: 122,
    round: 1,
    total_rounds: 2,
    total_time: 120,
    countdown_time: 15,
    countdown_timer_handle: '',
    minutes: "0",
    seconds: "15",
    find_word: "_reat",
    locked: false,
    button_target: '',
    letter_position: 0,

    letter_list: "atruighpvqncwsflhy",
    completed_list: [ "ano<u>t</u>her", "word<u>y</u>", "thing<u>a</u>mabob" ],

    alternate_list: [ "great","treat" ],
    word_list: ["break","bleak",]
  }),
});
</script>

<style>
.letter-btn {
  margin: 2px;
  font-size: xx-large;
}
</style>
