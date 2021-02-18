<template>
  <v-col
    cols="12"
    class="ma-auto justify-center"
  >
    <div class="mb-5">
      <h3>Цена</h3>
      <div class="d-flex">
        <v-text-field
          class="mr-1"
          v-model="from"
          type="number"
          label="От"
          @keyup="sortTo"
        >
        </v-text-field>
        <v-text-field
          class="ml-1"
          v-model="to"
          type="number"
          max="100"
          label="До"
          @keyup="sortTo"
        >
        </v-text-field>
      </div>
    </div>
    <div class="mb-5">
      <h3>Валюта</h3>

      <v-radio-group
        v-model="radios"
        mandatory
      >
        <v-radio
          :value="false"
          label="UAN"
          @change="sortUan"
        ></v-radio>
        <v-radio
          :value="true"
          label="USD"
          @change="sortUsd"
        ></v-radio>
      </v-radio-group>
    </div>
    <div>
      <h3>Сортировка</h3>

      <v-radio-group
        v-model="sort"
        mandatory
      >
        <v-radio
          @change="sortAscending"
          label="По возрастанию цены"
        ></v-radio>
        <v-radio
          @change="sortDescending"
          label="По убыванию цены"
        ></v-radio>
        <v-radio
          @change="sortAlphabet"
          label="По алфавиту"
        ></v-radio>
      </v-radio-group>
    </div>
  </v-col>
</template>

<script>
export default {
  data () {
    return {
      from: 0,
      to: 29999,
      radios: null,
      sort: 0
    }
  },
  methods: {
    sortTo () {
      const result = {
        to: this.to,
        from: this.from
      }
      this.$store.dispatch('to', result)
    },
    sortUsd () {
      if (!this.radios) {
        const currency = 'USD '
        this.$store.dispatch('usd', currency)
      }
    },
    sortUan () {
      if (this.radios) {
        const currency = 'UAN'
        this.$store.dispatch('uan', currency)
      }
    },
    sortAscending () {
      this.$store.dispatch('ascending')
    },
    sortDescending () {
      this.$store.dispatch('descending')
    },
    sortAlphabet () {
      this.$store.dispatch('alphabet')
    }
  },
  created () {
    if (this.sort === 0) {
      this.$store.dispatch('ascending')
    } else if (this.sort === 1) {
      this.$store.dispatch('descending')
    } else if (this.sort === 2) {
      this.$store.dispatch('alphabet')
    }
  }
}
</script>

<style scoped>

</style>
