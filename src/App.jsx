// export default function App() {
//     return (
//       <div className="bg-zinc-100">
//         {/* <Header  />
//         <TodoScreen />
//         <Footer /> */}
//       </div>
//     ) 

import { useState } from "react"
import CompletedTasks from "./components/CompletedTasks"
import Header from "./components/Header"
import IncompleteTasks from "./components/IncompleteTasks"
import Home from "./assets/Home"
import Footer from "./Footer"


//   }
const App = () => {
    const [Completed, setComplete] = useState([])
    const [Incomplete, setIncomplete] = useState([])
    const [completedArray , setCompletedArray] = useState([])
    const [incompletedArray, setIncompletedArray] = useState([])
    const [checkButton, setCheckButton] = useState(false)
    const [error, setError] = useState({
        name:''
    })
    const [form, setForm] = useState({
        name: "",
    })
    const [check, setCheck] = useState(false)
    console.log(incompletedArray)
    console.log(checkButton)

   


    const handlechange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
        // setSingledata(form)
    }
 
//   const DisplayButton = form.length >0

    const handlesubmit = () => {
        setTimeout(() => {
            setError({name:''})
        }, 2000)
        setCheckButton(false)
        if (!form.name) return setError({ ...error, name: 'Title is required' })
        // setCheckButton(true)
        if (check === false) {
            const date = new Date()
            const formdatas = {
                ...form,
                id: date.getTime()
            }
            setIncomplete([
                formdatas,
                ...Incomplete
            ])
            setForm({
                name: ''
            })
           
          
        }else {
            const date = new Date()
            const formdatas = {
                ...form,
                id: date.getTime()
            }
            setComplete([
                formdatas,
                ...Completed
            ])
            setForm({
                name: ''
            })
            setCheck(false)
        }
    }
    // console.log(Tasks)
    const tranferbtn = () => {
            setComplete([...incompletedArray , ...Completed])
            
            // setIncomplete([Incomplete.filter(ele=>)])
            const pushArray = []
            Incomplete.map(item=>{
                if(!incompletedArray.includes(item)){
                     pushArray.push(item)
                }
            })
            setIncomplete(pushArray)
            setIncompletedArray([])
            console.log(pushArray)

          
            // console.log(completedArray)
      
    }
   

  const movebtn =()=>{
    // setCompletedArray([])
    setIncomplete([...completedArray,...Incomplete])
    console.log(completedArray)
    const pushArray = []
    Completed.map(ele =>{
        if(!completedArray.includes(ele)){
             pushArray.push(ele)
        }
    })
    setComplete(pushArray)
    console.log(completedArray)
    setCompletedArray([])
  }
       
 const deletebtn =()=>{
    Incomplete.map(ele=>{
        const Filter = Incomplete.filter(element=>element.id !== ele.id)
        setIncomplete(Filter) 
        console.log(Filter)                                                                                                                              
    })
 }
 const deletebtn2 =()=>{
    Completed.map(ele=>{
        const Filter = Completed.filter(element=>element.id !== ele.id)
        setComplete(Filter) 
        console.log(Filter)                                                                                                                              
    })
 }
 const editbtn =(ele)=>{
        setForm({   
            name : ele.name,
            id:ele.id
        })
        // setSingledata(ele)
        // setCheckButton()
        setCheckButton(true)
        
   
        }
 const editbtn2 =(item)=>{
        setForm({   
            name : item.name,
            id:item.id
        })
        // setSingledata(ele)
        // setCheckButton()
        setCheckButton(true)
        
   
        }
        
        // console.log(singledata)
        const handleupdate =()=>{
          
            //   setSingledata(form)
            const info =  Incomplete.map(ele=>{
                if(ele.id===form.id){
                    return {
                      ...ele,
                      name: form.name
                    }
                
                }
                return ele
            })
            setIncomplete(info) 
           
        console.log(form)
        setForm({name:'', id:''})
        setCheckButton(false)
        }
        // const   Button = form.length>0
    return (
        <div className="w-full h-screen py-3 bg-white">
            <div className="w-11/12 mx-auto flex items-center justify-center flex-col border p-7 ">
                <Header />

                <div className="p-3">
                    <div className="flex item-center gap-5">
                        <input type="text" placeholder="name" name="name" onChange={handlechange} className=" outline-none pl-2 border border-black rounded " value={form.name} />
                        <div className=" flex gap-5">
                            <div className = "">
                            <input type="checkbox" value={check} checked={check} onChange={event => { setCheck(event.target.checked); console.log(check) }} /> Move To Completed Tasks?</div>

                            {!checkButton &&  (<button onClick={handlesubmit} className=" bg-red-900 px-4 rounded-md py-1.5 text-white">submit</button>)}
                            {checkButton &&(<button onClick={handleupdate} className=" bg-red-900 px-4 rounded-md py-1.5 text-white">update</button>)}
                        </div>

                    </div>

                </div>
                <div className="flex w-full items-center gap-2 justify-between mt-[3rem]">
                    <div className="w-1/3 shadow-xl">
                        <IncompleteTasks
                            Incomplete={Incomplete}
                            incompletedArray={incompletedArray}
                            setIncompletedArray={setIncompletedArray}
                            setIncomplete={setIncomplete}
                            // ele={ele}
                            deletebtn={deletebtn}
                            editbtn={editbtn}
                            // ele={ele}
                        />
                    </div>
                  
                    { incompletedArray.length > 0 && <button onClick={tranferbtn} className="bg-red-900 rounded-md p-2 px-5 text-white"> Move To Completed Tasks?</button>}
                    { completedArray.length > 0 && <button onClick={movebtn} className="bg-red-900 rounded-md p-2 px-5 text-white"> Move To Incompleted Tasks?</button>}
                    <div className="w-1/3 shadow-xl mt-[-1.rem]">
                        <CompletedTasks
                            Completed={Completed}
                            completedArray={completedArray}
                            setCompletedArray={setCompletedArray}
                            deletebtn2={deletebtn2}
                            editbtn2={editbtn2}
                        />
                    </div>
                </div>
                {/* <Footer/> */}
            </div>


        </div>

    )
}

export default App