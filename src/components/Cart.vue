<template>
    <h1>Cart</h1>
    <v-card
        class="mx-auto"
        width="800"
        >
            <v-card-title>Cart
                {{ total }}
                <v-btn
                color="deep_purple-lighten-2"
                text="Checkout"
                ></v-btn>
                </v-card-title>
        <v-card-text class="bg-surface-light pt-4">

                <v-row>
        <v-col cols="12" md="4"  v-for="product in cartItems" :key=product>     
            <v-card
                class="mx-auto my-12"
                max-width="374"
            >
                <v-img
                    height="250"
                    :src="product.itemImage"
                    cover
                ></v-img>

                <v-card-item>
                    <v-card-title>{{product.itemName}}</v-card-title>
                </v-card-item>

                <v-card-text>
                    <div class="my-4 text-subtitle-1">{{product.itemPrice}}</div>
                    <div>{{ product.description }}</div>
                </v-card-text>

                <v-divider class="mx-4 mb-1"></v-divider>
                <v-card-actions>
                    <v-btn
                        color="deep-purple-lighten-2"
                        text="Remove"
                        block
                        border
                        @click="removeFromCart(product)"
                    ></v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
        </v-row>
                
    </v-card-text>
        
    </v-card>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    data(){
        return{
            products: [1,2,3,4,5,6,7,8,9,10],
            stockDetails : [
            {
            itemNumber: 1,
                itemName : "Pizza",
                itemPrice : 5,
                itemQuantity : 30,
                itemImage: '../images/pablo-pacheco-D3Mag4BKqns-unsplash.jpg',
                description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"
            },
            {
                itemNumber: 27466,
                itemName : "French Fries",
                itemPrice : 10,
                itemQuantity : 4,
                itemImage: '../images/louis-hansel-vi0kZuoe0-8-unsplash.jpg',
                description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"

            }
            ,
            {
                itemNumber: 27466,
                itemName : "Pie",
                itemPrice : 10,
                itemQuantity : 4,
                itemImage: '../images/jed-owen-tZwcwRw6x1c-unsplash.jpg',
                description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"

            }
            ,
            {
                itemNumber: 27466,
                itemName : "Steak",
                itemPrice : 10,
                itemQuantity : 4,
                itemImage: '../images/jose-ignacio-pompe-s-Z-h0fEiBM-unsplash.jpg',
                description: "Our sweets are wonderfully crafted by the best ingredients to bring deliciousness to your parties"

            }
            ,
            {
                itemNumber: 27466,
                itemName : "Pasta",
                itemPe5rrice : 10,
                itemQuantity : 4,
                itemImage: '../images/bruna-branco-t8hTmte4O_g-unsplash.jpg',
                description: "Our food are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"

            }
            ,
            {
                itemNumber: 27466,
                itemName : "Fried Chicken",
                itemPrice : 10,
                itemQuantity : 4,
                itemImage: '../images/nizar-zulmi-UgckYUoc0tM-unsplash.jpg',
                description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"

            }
            ,
            {
                itemNumber: 27466,
                itemName : "Onion Rings",
                itemPrice : 10,
                itemQuantity : 4,
                itemImage: '../images/farhad-ibrahimzade-HU_ubYnwElc-unsplash.jpg',
                description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"

            },
            {
                itemNumber: 27466,
                itemName : "Milkshake",
                itemPrice : 10,
                itemQuantity : 4,
                itemImage: '../images/knight-duong-U0_cV29xqp8-unsplash.jpg',
                description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"

            }
            ,
        

            
        ],
        total:0,

        cartItems:[],
        }
    },
    methods: {
        ...mapActions([
            "removeFromCart"
        ])
        
        
},
computed: {
    ...mapGetters({
        cartItems: 'cart',
        total: 'totalCartAmount'

    })
}
}
</script>

            