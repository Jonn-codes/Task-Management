// import { useState } from "reac

import Checkbox2 from "./Checkbox2"

// import Checkbox2 from "./Checkbox2"



const CompletedTasks = ({ Completed,completedArray,setCompletedArray , deletebtn2, editbtn2}) => {
    // const [complete,setComplete] = useState([])
    return (
        <div className="w-full h-[50dvh] border-2 rounded-md overflow-auto">
            <h1 className="text-center py-3 text-[grey] text-xl">Compeleted Tasks</h1>
            {Completed.map((ele, i) => (
                <div key={i} className=" flex gap-2 flex-col border border-black-200 p-1 px-2 py-3 mb-3">
                    <div className="flex gap-2 items-center">
                        <Checkbox2 
                        ele={ele}
                        setCompletedArray={setCompletedArray}
                        completedArray={completedArray}
                        />
                        <div className="capitalize">{ele.name}</div>

                    </div>
                    <div className=" flex justify-between">
                        <div>{ele.id}</div>
                        <div className="flex gap-2">

                            <button className="bg-red-900 p-2 px-4 rounded-md text-[white]" onClick={() => editbtn2(ele)}>edit</button>
                            <button className="bg-red-900 p-2 px-4 rounded-md text-[white]"  onClick={()=> deletebtn2() }>delete</button>
                        </div>
                    </div>
                </div>

            ))}
        </div>
    )
}
export default CompletedTasks