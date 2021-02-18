<template>
  <div>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          xs="12"
          class="ma-auto justify-center"
        >
          <v-form v-model="valid" ref="form" validation>
            <div class="d-flex justify-space-between">
              <div class="col-6">
                <v-text-field
                  filled
                  v-model="name"
                  :rules="[rules.required]"
                  label="Имя"
                ></v-text-field>
                <v-text-field
                  filled
                  v-model="price"
                  :rules="[rules.required]"
                  type="number"
                  label="Цена"
                  @click:append="show1 = !show1"
                ></v-text-field>
                <div class="d-flex justify-space-between">
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
                  <img :src="imgSrc" v-if="imgSrc" class="imageUpload">
                </div>
              </div>
              <div class="col-6">
                <v-textarea
                  filled
                  v-model="description"
                  :rules="[rules.required]"
                  type="text"
                  name="input-10-1"
                  label="Описание"
                  @click:append="show1 = !show1"
                ></v-textarea>
                <v-btn
                  class="d-block ml-auto"
                  color="primary"
                  :disabled="!valid || !img"
                  @click="createAd"
                >
                  Добавить
                </v-btn>
              </div>
            </div>
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
      name: '',
      img: null,
      imgSrc: '',
      price: '',
      description: '',
      rules: {
        required: value => !!value || 'Обязательное поле.'
      }
    }
  },
  methods: {
    createAd () {
      if (this.$refs.form.validate() || this.img) {
        const product = {
          name: this.name,
          price: this.price,
          description: this.description,
          image: '1.jpg',
          id: Date.now().toString()
        }
        this.$store.dispatch('createProduct', product)
        this.name = this.price = this.description = ''
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
  .imageUpload {
    width: 90px;
    height: 60px;
    object-fit: contain;
  }
</style>
