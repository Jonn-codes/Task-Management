import { useState } from "react"
import Checkbox from "./Checkbox"


const InompletedTasks = ({ Incomplete, setIncompletedArray, incompletedArray,deletebtn,editbtn}) => {


    return (
        <>
            <div className="w-full h-[50dvh] border-2 rounded-md overflow-auto">
                <h1 className="text-center py-3 text-[grey] text-xl">Incompeleted Tasks</h1>
                {Incomplete.length > 0 && Incomplete.map((item, i) => (
                    <div key={i} className="flex gap-2 flex-col border border-black-200 p-1 px-2 py-3 mb-3">
                        <div className="flex gap-2 items-center  ">
                            <Checkbox
                                item={item}
                                incompletedArray={incompletedArray}
                                setIncompletedArray={setIncompletedArray}
                            />
                            <div className="capitalize">{item.name}</div>
                            <div className="border border-black-700"></div>
                        </div>
                       

                        <div className=" flex justify-between">
                             <div>{item.id}</div>
                            <div className="flex gap-2">
                           
                            <button className="bg-red-900 p-2 px-4 rounded-md text-[white]" onClick={() => editbtn(item)}>edit</button>
                            <button className="bg-red-900 p-2 px-4 rounded-md text-[white] " onClick={()=> deletebtn() } >delete</button>
                            </div>
                           


                        </div>
                    </div>
                ))}
            </div>
        </>
    )

}

export default InompletedTasks