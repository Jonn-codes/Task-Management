import { useState } from "react";
import { useEffect } from "react";
// import IncompleteTasks from "./IncompleteTasks";


const checkbox = ({ item, setIncompletedArray, incompletedArray }) => {
   const [check, setCheck] = useState(false);
    useEffect(() => {
      // Update isChecked state based on incompletedArray changes
      setCheck(incompletedArray.some((ele) => ele.id === item.id));
    }, [incompletedArray, item]);
  

   const handlecheck = (item) => {
      // console.log(check)
      if (check) {
         const excluded = incompletedArray.filter(ele => ele.id !== item.id)
         setIncompletedArray(excluded)
      } else {
        setIncompletedArray([
         item,
         ...incompletedArray 
        ])
      }
      setCheck(!check)
   }

   return (
      <>
         <div>
            <input type="checkbox" value={check} checked={check} onChange={event => { setCheck(event.target.checked); handlecheck(item) }} />
         </div>
         
      </>
   )

}
export default checkbox