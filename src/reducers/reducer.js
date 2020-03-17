const initialState ={
        additionalPrice: 0,
        car: {
          price: 26395,
          name: '2019 Ford Mustang',
          image:
            'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
          features: []
        },
        additionalFeatures: [
          { id: 1, name: 'V-6 engine', price: 1500 },
          { id: 2, name: 'Racing detail package', price: 1500 },
          { id: 3, name: 'Premium sound system', price: 500 },
          { id: 4, name: 'Rear spoiler', price: 250 }
        ]
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
      case "BUY_ITEM":
        const selectedItem = payload => {
          const addItem = {
            id: payload.id,
            name: payload.name,
            price: payload.price
          }
          return addItem
        }
        const priceCalcAdd = (current, addedItemPrice) => {
          const newPrice = current + addedItemPrice 
          return newPrice
        }
        return {
          ...state,
          car: {
            ...state.car,
            features: [...state.car.features, selectedItem(action.payload)],
            price: priceCalcAdd(state.car.price, action.payload.price)
        },
        additionalFeatures: state.additionalFeatures.filter(feature => {
          if(feature.id !== action.payload.id){
            return feature
          }else{
            return null
          }
        })
      }
      case "REMOVE_FEATURE":
        const priceCalcSub = (current, subprice) =>{
          const subtract = current - subprice;
          return subtract
        }
        const selectedItemForAdditionalFeatures = payload => {
          const addItem = {
            id: payload.id,
            name: payload.name,
            price: payload.price
          }
          return addItem 
        }
        return {
          ...state, 
          car: {
            ...state.car,
            features: state.car.features.filter(feature => {
              if(feature.id !== action.payload.id){
                return feature
              }else {
                return null;
              }
            }),
            price: priceCalcSub(state.car.price, action.payload.price)
          },
          additionalFeatures: [...state.additionalFeatures, selectedItemForAdditionalFeatures(action.payload) ]

        }
        default: 
        return state
    }
}


// export const removeFeature = item => {
//   return{type: "REMOVE_FEATURE", payload: item }
// };

// export const buyItem = item => {
//   return {type: "BUY_ITEM", payload: item}
// };