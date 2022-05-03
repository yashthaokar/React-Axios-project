import axios from "axios"
import { useEffect, useState } from "react"
import Heading from "../components/Heading/Heading"
import Input from "../components/Input/Input"
import Output from "../components/Output/Output"
import style from "./Home.module.css"

const Home = ()=>{
    const [fName, setfName]=useState("")
    const [apiData, setApiDAta] = useState([])
    const [flag, setFlag] = useState(false)
    
    const inputHandeler = (e)=>{
            setfName(e.target.value)
    }
    const apiCall = () =>{
        axios.get(`https://625f9fb853a42eaa07f7c314.mockapi.io/Axios-Project`).then(response=>{
            setApiDAta(response.data)
    }).catch(err=>(
            console.log(err)
        ))
    }
    const submitData = ()=>{
        axios.post(`https://625f9fb853a42eaa07f7c314.mockapi.io/Axios-Project`,{fName}).then(response=>{
            console.log(response.data)
            alert("Data is Saved")
            setFlag(!flag)
        }).catch(err=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        apiCall()
    },[flag])



    return (
        <>
        <div className={style.container}>
            <Heading/>
            <Input value={fName} input={inputHandeler} onClick={submitData}/>
            <Output res={apiData}/>
        </div>
        </>
    )
} 
export default Home;