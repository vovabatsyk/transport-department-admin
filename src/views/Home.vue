<template>
    <v-app id="inspire">
        <v-main>
            <v-container class="fill-height" fluid>
                <v-row align="center" justify="center">
                    <v-col cols="12" sm="8" md="4">
                        <v-card class="elevation-12">
                            <v-toolbar color="primary" dark flat>
                                <v-toolbar-title>Вхід</v-toolbar-title>
                            </v-toolbar>
                            <v-card-text>
                                <v-form ref="form" v-model="valid">

                                    <v-text-field
                                            label="Логін"
                                            name="login"
                                            prepend-icon="mdi-account"
                                            type="text"
                                            :rules="[v => !!v || 'Введіть ім\'я']"
                                    ></v-text-field>

                                    <v-text-field
                                            id="password"
                                            label="Пароль"
                                            name="password"
                                            prepend-icon="mdi-lock"
                                            type="password"
                                            :rules="[v => !!v || 'Введіть пароль']"
                                    ></v-text-field>

                                </v-form>
                            </v-card-text>

                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                        :disabled="!valid"
                                        color="primary"
                                        @click="login">Ввійти
                                </v-btn>
                            </v-card-actions>

                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
  export default {
    data() {
      return {
        valid: false
      }
    },
    methods: {
      login() {
        if (this.$refs.form.validate()) {
          this.valid = true
          this.$router.push('admin')
        }
      }
    }
  }
</script>
