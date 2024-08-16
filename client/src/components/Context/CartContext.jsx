import { createContext, useEffect, useState } from "react";
export const CartContext = createContext();
export const CartContextProvider = ({ children }) => {
  const [arr, setArr] = useState([]);
  const [qty, setqty] = useState(0);
  function changeArr(obj) {
    setArr([...arr, obj]);
    
  }
  let prev;
  let prevTotal;
  let prevF;

  useEffect(() => {
     setfinalPrice(arr.reduce((acc, el) => {
        return acc + el.discountedPrice;
      }, 0))
    
    setToalMRP(arr.reduce((acc, el) => {
        return acc + el.mainPrice;
      }, 0))
    
    settotalDiscount(arr.reduce((acc, el) => {
        return acc + el.off;
      }, 0))
    
  }, [arr]);
 
  const [ToalMRP, setToalMRP] = useState(prevTotal);
  const [totalDiscount, settotalDiscount] = useState(prevF);
  const [finalPrice, setfinalPrice] = useState(prev);

//   console.log(finalPrice, totalDiscount, ToalMRP);

  
//   console.log(arr);
  function removeItem(id) {
    setArr(arr.filter((el) => el.id != id));
    
  }
  function updateAmounts(e,updatedFinal, updatedMRP, updatedDis) {
    //2 149 219 70
    // console.log(updatedFinal, updatedMRP, updatedDis,"updated values")

console.log(qty,"qty",e,"e")
    if(e>qty){

        setToalMRP(ToalMRP+updatedMRP);
        setfinalPrice(finalPrice+updatedFinal);
        settotalDiscount(totalDiscount+updatedDis);

    }
    else{
        setToalMRP(previous=>previous-updatedMRP);
        setfinalPrice(previous=>previous-updatedFinal);
        settotalDiscount(previous=>previous-updatedDis);   
    }
  
  }

  return (
    <CartContext.Provider
      value={{
        changeArr,
        arr,
        setqty,
        removeItem,
        finalPrice,
        totalDiscount,
        ToalMRP,
        updateAmounts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

//   useEffect(() => {
//    setToalMRP(arr.reduce((acc, el) => {
//     return acc + el.mainPrice;
//   }, 0))
//   setfinalPrice(arr.reduce((acc, el) => {
//     return acc + el.discountedPrice;
//   }, 0) )
//   settotalDiscount( arr.reduce((acc, el) => {
//     return acc + el.off;
//   }, 0) )
//   }, [arr]);
