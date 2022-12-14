export const intialState={

    basket:[],
    user:null

};
export const getBasketTotal = (basket) => basket?.reduce((amount,item)=> item.price+amount,0);
const reducer = (state,action) =>{
     switch(action.type) {
        case 'ADD_TO_BASKET':
            return {
                 ...state,
                 basket:[...state.basket,action.item]
             };
            default:
                return state;
        case 'REMOVE_FROM_BASKET':
            const index= state.basket.findIndex(
            (basketItem)=>basketItem.id===action.id
            );
            let newBasket=[...state.basket];
            if(index>=0){
                  newBasket.splice(index,1);
            }else{
                console.warn('Cannot Remove Item with id :',action.id)
            }
            return {
                ...state,basket:newBasket
            }
        case "SET_USER":
            return{
                ...state,
                user:action.user
            }
     }
}
export default reducer;