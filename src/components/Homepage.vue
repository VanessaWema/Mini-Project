<script>

  export default {
    data() {
      return {
          image: '../images/tyson-UmkODKl4E1M-unsplash.jpg',
          url: 'https://www.vuejs.org/',
          stockDetails : [
              {
                  itemNumber: 1,
                  itemName : "Pizza",
                  itemPrice : 5,
                  itemQuantity : 30,
                  itemImage: '../images/pablo-pacheco-D3Mag4BKqns-unsplash.jpg'
              },
              {
                  itemNumber: 27466,
                  itemName : "French Fries",
                  itemPrice : 10,
                  itemQuantity : 4,
                  itemImage: '../images/louis-hansel-vi0kZuoe0-8-unsplash.jpg'
              }
          ],
        }
    },

    methods() {
      // we shall add our functions here
    },

    computed(){
      //we use this when working with forms
    }
  }
</script>

<template>

<v-card
    class="mx-auto"
    width="1000"
  >

    <v-carousel>
        <v-carousel-item
            src="../images/tyson-UmkODKl4E1M-unsplash.jpg"
            cover
        ></v-carousel-item>

  <v-carousel-item
    src="../images/pablo-pacheco-D3Mag4BKqns-unsplash.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="../images/louis-hansel-vi0kZuoe0-8-unsplash.jpg"
    cover
  ></v-carousel-item>
</v-carousel>
  </v-card>
  <v-spacer></v-spacer>

  <v-card align="center">
        <v-card-item>
          <v-card-title>WELCOME TO RECIFOOD!</v-card-title>

          <v-card-subtitle>Fuel your Hunger with Flavour! </v-card-subtitle>
        </v-card-item>

        <v-card-text>
          We serve mouth-watering, freshly prepared fast food that satisfies your cravings and fits your busy lifestyle. Our diverse menu features everything from crispy fries to refreshing milkshakes, all crafted with quality ingredients. We promise a delicious experience that keeps you coming back for more!
        </v-card-text>
      </v-card>

      <v-divider></v-divider>
      <v-divider></v-divider>
      <v-divider></v-divider>
      <h3 class="text-center">What our customers say:</h3>
      <v-divider></v-divider>
      
      <v-row>
    <v-col cols="12" md="4">
      <v-card
        subtitle="Vanessa Wema"
        text="I loved interacting with the kind staff!"
        title="Good customer service"
      ></v-card>

    </v-col>

    <v-col cols="12" md="4">
      <v-card>
        <template v-slot:title>
          Fast delivery!
        </template>

        <template v-slot:subtitle>
          Sim Jaeyun
        </template>

        <template v-slot:text>
          My food arrived on time, and in good condition. I appreciate that.
        </template>
      </v-card>

    </v-col>

    <v-col cols="12" md="4">
      <v-card>
        <v-card-item>
          <v-card-title>Delicious Food</v-card-title>

          <v-card-subtitle>Ethan Lee</v-card-subtitle>
        </v-card-item>

        <v-card-text>
          The food is really tasty. The onion rings are to die for!
        </v-card-text>
      </v-card>

    </v-col>
  </v-row>
</template>
 