<template>
    <v-app id="inspire">

        <v-app-bar
                app
                color="indigo"
                dark
        >
            <v-toolbar-title>Інспектор</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn color="error" @click="exit">Вихід</v-btn>
        </v-app-bar>

        <v-app id="inspire">
            <v-main>
                <v-container class="fill-height" fluid>
                    <v-row justify="center">
                        <v-col cols="12" sm="10" md="8">

                            <v-card class="elevation-12" v-if="!alert">

                                <v-toolbar color="indigo" dark flat>
                                    <v-toolbar-title>Загрузка фотографій</v-toolbar-title>
                                </v-toolbar>
                                <v-card-text>
                                    <v-form ref="form" v-model="valid" lazy-validation>
                                        <v-text-field
                                                v-model="numberCar"
                                                :rules="[v => !!v || 'Заповніть поле',  v => (v && v.length >= 4) || 'Введіть не менше 4 символа']"
                                                label="Номерний знак авто"
                                                required>
                                        </v-text-field>

                                        <v-checkbox
                                                v-model="evacuation"
                                                label="Евакуація?"
                                                required
                                        ></v-checkbox>

                                        <v-text-field
                                                v-if="!evacuation"
                                                v-model="numberDecree"
                                                :counter="6"
                                                :rules="[v => !!v || 'Заповніть поле', v => (v && v.length === 6) || 'Номер постанови складається з 6 символів']"
                                                label="Номер постанови"
                                                required
                                        ></v-text-field>

                                        <v-file-input
                                                v-model="files"
                                                multiple
                                                placeholder="Додати фотографії"
                                                accept="image/png, image/jpeg, image/bmp"
                                                prepend-icon="mdi-camera"
                                        >
                                            <template v-slot:selection="{ text }">
                                                <v-chip small label color="primary">
                                                    {{ text }}
                                                </v-chip>
                                            </template>
                                        </v-file-input>

                                        <div class="d-flex justify-center">
                                            <v-spacer></v-spacer>
                                            <v-btn
                                                    :disabled="!valid"
                                                    color="success"
                                                    class="mr-4"
                                                    @click="saveData"
                                            >
                                                Зберегти
                                            </v-btn>
                                        </div>

                                    </v-form>

                                </v-card-text>
                            </v-card>
                            <v-alert
                                    v-model="alert"
                                    dismissible
                                    close-icon="mdi-delete"
                                    color="success"
                                    class="ma-2"
                            >
                                Завантажено успішно!
                            </v-alert>
                        </v-col>
                    </v-row>
                </v-container>
            </v-main>
        </v-app>

        <v-footer color="indigo" app>
            <v-spacer></v-spacer>
            <span class="white--text">Львів &copy; {{ new Date().getFullYear() }}</span>
        </v-footer>

    </v-app>
</template>

<script>
  export default {
    data: () => ({
      valid: false,
      numberDecree: '',
      numberCar: '',
      evacuation: false,
      files: [],
      alert: false
    }),

    methods: {
      saveData() {
        if (this.$refs.form.validate()) {
          const data = {
            carNumber: this.numberCar,
            numberDecree: this.numberDecree,
            evacuation: this.evacuation,
            img: this.files
          }
          this.alert = true
          console.log('Data', data)

          this.numberCar = ''
          this.numberDecree = ''
          this.evacuation = false
          this.files = []

          setTimeout(() => {
            this.alert = false
          }, 2000)
        }
      },
      exit() {
        this.$router.push('/')
      }
    }
  }
</script>

