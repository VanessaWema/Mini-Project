const state = {
        stockDetails : [
            {
                itemNumber: 1,
                itemName : "Pizza",
                itemPrice : 5,
                itemQuantity : 30,
                itemImage: '../images/pablo-pacheco-D3Mag4BKqns-unsplash.jpg',
                description: "Our food is made to your liking"
            },
            {
                itemNumber: 27466,
                itemName : "French Fries",
                itemPrice : 10,
                itemQuantity : 4,
                itemImage: '../images/louis-hansel-vi0kZuoe0-8-unsplash.jpg',
                description: "Our food is made to your liking"

            }
            ,
            {
                itemNumber: 27466,
                itemName : "Pie",
                itemPrice : 10,
                itemQuantity : 4,
                itemImage: '../images/jed-owen-tZwcwRw6x1c-unsplash.jpg',
                description: "Our food is made to your liking"

            }
            ,
            {
                itemNumber: 27466,
                itemName : "Steak",
                itemPrice : 10,
                itemQuantity : 4,
                itemImage: '../images/jose-ignacio-pompe-s-Z-h0fEiBM-unsplash.jpg',
                description: "Our food is made to your liking"
            }
            ,
            {
                itemNumber: 27466,
                itemName : "Pasta",
                itemPe5rrice : 10,
                itemQuantity : 4,
                itemImage: '../images/bruna-branco-t8hTmte4O_g-unsplash.jpg',
                description: "Our food is made to your liking"

            }
            ,
            {
                itemNumber: 27466,
                itemName : "Fried Chicken",
                itemPrice : 10,
                itemQuantity : 4,
                itemImage: '../images/nizar-zulmi-UgckYUoc0tM-unsplash.jpg',
                description: "Our food is made to your liking" 

            }
            ,
            {
                itemNumber: 27466,
                itemName : "Onion Rings",
                itemPrice : 10,
                itemQuantity : 4,
                itemImage: '../images/farhad-ibrahimzade-HU_ubYnwElc-unsplash.jpg',
                description: "Our food is made to your liking"

            },
            {
                itemNumber: 27466,
                itemName : "Milkshake",
                itemPrice : 10,
                itemQuantity : 4,
                itemImage: '../images/knight-duong-U0_cV29xqp8-unsplash.jpg',
                description:  "Our food is made to your liking"

            }
        ],
        
}
const getters= {
    stock: (state) => state.stockdetails,
}
const actions = {

}
const mutations = {

}
export default {
    state,
    getters,
    actions,
    mutations
}