<template>
  <v-app
    :style="{background : $vuetify.theme.themes.light.background }"
  >
    <v-container>
      <v-row class="d-flex justify-center align-center">
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            label="search items"
            prepend-icon="search"
            error
          />
        </v-col>
        <v-spacer />
        <span class="red--text center">29 items</span>
        <v-btn
          class="center"
          plain
        >
          <v-icon
            color="red"
            class=""
          >
            menu
          </v-icon>
        </v-btn>
        <v-btn
          class="center"
          plain
        >
          <v-icon
            color="red"
            class=""
          >
            dashboard
          </v-icon>
        </v-btn>
      </v-row>
     
      <v-row>
        <v-col
          cols="12"
          class="mb-4"
          md="3"
        >
          <v-hover #default="{ hover }">
            <v-card
              max-height="250"
              max-width="250"
              class="center"
            >
              <v-card-actions>
                <v-spacer />
                <v-btn>
                  <v-icon>edit</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
// @ is an alias to /src
/* eslint-disable */


export default {
  name: 'Home',
  components: {

  },
  data: ()=>{
    return {}
  }
}
</script>
