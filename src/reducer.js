export const initialState={
    basket:[{
        id:"12345",
        title : "Echo Dot (3rd Gen) – New and improved smart speaker with Alexa (White)",
        price:22,
        rating:4,
        image:"https://m.media-amazon.com/images/I/61fAoBkYQ1L._AC_UY327_FMwebp_QL65_.jpg"
    }],
    user:null
}

export function reducer(state,action){
    switch (action.type) {
        case "ADD_TO_BASKET":
            return{
                ...state,
                basket: [...state.basket,action.item]
            }
        case "REMOVE_FROM_BASKET":
            let newBasket = [...state.basket]
            const index = state.basket.findIndex((basketItem)=>basketItem.id === action.id)
            if(index>=0){
                newBasket.splice(index,1)
            }else{
                console.warn("Cant remove product")
            }
            return{
                ...state,
                basket:newBasket
            }
        default:
            return state
    }
}