<template>
  <nav>
    <v-app-bar
      color="white"
      dark
      app
      class="line"
    >
      <v-toolbar-title class="text-uppercase red--text">
        <span class="font-weight-light">Cloud</span>
        <span>Inventory</span>
      </v-toolbar-title>
      <template>
        <v-btn
          color="secondary"
          dark
          small
          absolute
          bottom
          right
          fab
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      mini-variant-width="80px"
      dark
      app
      mini-variant
      class="primary"
      width="auto"
    >
      <v-list flat>
        <!-- icon item -->
        <v-list-item class="mb-12">
          <v-list-item-action>
            <v-icon>fas fa-cloud-download-alt</v-icon>
          </v-list-item-action>
        </v-list-item>

        <v-list-item
          link
          to="/home"
        >
          <v-list-item-action>
            <v-icon>fas fa-desktop</v-icon>
          </v-list-item-action>
        </v-list-item>

        <v-list-item
          link
          to="/about"
        >
          <v-list-item-action>
            <v-badge color="pink">
              <template v-slot:badge>
                1
              </template>
              <v-icon>fas fa-shopping-cart</v-icon>
            </v-badge>
          </v-list-item-action>
        </v-list-item>

        <v-list-item
          link
          to="/video"
        >
          <v-list-item-action>
            <v-icon>fas fa-city</v-icon>
          </v-list-item-action>
        </v-list-item>

        <v-list-item
          link
          to="/home"
        >
          <v-list-item-action>
            <v-icon>fas fa-cog</v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  // eslint-disable-next-line no-mixed-spaces-and-tabs
  data: () => ({
    drawer: true
  })
};
</script>
