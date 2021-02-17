<template>
  <div>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="8"
          xs="12"
          class="ma-auto justify-center"
        >
          <v-form v-model="valid" ref="form" validation>
            <div class="d-flex justify-space-between">
              <div class="col-6">
                <v-text-field
                  filled
                  v-model="title"
                  :rules="[rules.required]"
                  label="Имя"
                ></v-text-field>
                <v-text-field
                  filled
                  v-model="subtitle"
                  :rules="[rules.required]"
                  type="number"
                  label="Цена"
                  @click:append="show1 = !show1"
                ></v-text-field>
                <v-btn
                  color="blue-grey"
                  class="ma-2 white--text"
                  @click="fileUpload"
                >
                  Загрузить
                  <v-icon
                    right
                    dark
                  >
                    mdi-cloud-upload
                  </v-icon>
                </v-btn>
                <input
                  type="file"
                  name="fileUpload"
                  ref="fileUpload"
                  accept="image/*"
                  style="display: none"
                  @change="onFileChange"
                >
                <img src="" height="100px">
                <v-row>
                  <v-col
                    cols="12"
                    sm="8"
                    xs="12"
                    class="ma-auto justify-center"
                  >
                    <img :src="imgSrc" v-if="imgSrc" class="imageUpload">
                  </v-col>
                </v-row>
              </div>
              <div class="col-6">
                <v-textarea
                  filled
                  v-model="descriptions"
                  :rules="[rules.required]"
                  type="text"
                  name="input-10-1"
                  label="Описание"
                  @click:append="show1 = !show1"
                ></v-textarea>
              </div>
            </div>
            <v-btn
              class="d-block ml-auto"
              color="primary"
              :disabled="!valid"
              @click="createAd"
            >
              Добавить
            </v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show1: false,
      valid: false,
      title: '',
      show: false,
      img: null,
      imgSrc: '',
      subtitle: '',
      descriptions: '',
      rules: {
        required: value => !!value || 'Required.'
      }
    }
  },
  methods: {
    createAd () {
      if (this.$refs.form.validate() || this.img) {
        const ad = {
          title: this.title,
          subtitle: this.subtitle,
          descriptions: this.descriptions,
          show: this.show,
          img: this.img
        }
        console.log(ad)
      }
    },
    fileUpload () {
      return this.$refs.fileUpload.click()
    },
    onFileChange (event) {
      const file = event.target.files[0]
      const reader = new FileReader()
      reader.onload = ev => {
        this.imgSrc = reader.result
      }
      reader.readAsDataURL(file)
      this.img = file
    }
  }
}
</script>

<style scoped lang="scss">
  .v-textarea textarea{
    height: 192px;
  }
</style>
