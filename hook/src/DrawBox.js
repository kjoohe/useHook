// import { useEffect, useState } from "react"

// const DrawBox = ({boxSizer}) => {
//     const [sizes, setSizes] = useState([]);

//     useEffect(()=>{
//         setSizes(boxSizer())
//         console.log("box called")
//     }, [boxSizer])

//     if (sizes !== 0) {
//         return sizes.map(size=>
//             <div className="myBox" style={{width: size + "px", height: size + "px"}}
//            ></div>)
//     }
// }

// export default DrawBox;