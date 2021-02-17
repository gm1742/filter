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
          @click:append-outer="this.from = parseInt(this.foo, 10) + 1"
          @click:prepend="this.from = parseInt(this.from, 10) - 1">
        </v-text-field>
        <v-text-field
          class="ml-1"
          v-model="to"
          type="number"
          label="До"
          @click:append-outer="this.to = parseInt(this.to, 10) + 1"
          @click:prepend="this.to = parseInt(this.to, 10) - 1">
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
        ></v-radio>
        <v-radio
          :value="true"
          label="USD"
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
          label="По возрастанию цены"
        ></v-radio>
        <v-radio
          label="По убыванию цены"
        ></v-radio>
        <v-radio
          label="По алфавиту"
        ></v-radio>
      </v-radio-group>

      {{sort}}
    </div>
  </v-col>
</template>

<script>
export default {
  data () {
    return {
      from: 0,
      to: 1,
      radios: null,
      sort: 0
    }
  }
}
</script>

<style scoped>

</style>
