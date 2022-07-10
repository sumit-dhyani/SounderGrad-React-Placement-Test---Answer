import { useEffect, useState } from "react";
export default function Slides({data}) {
  const [item,setitem]=useState(0)
  const [len,setlen]=useState(1)
  const [filtered,setfiltered]=useState({})
  useEffect(()=>{
    setlen(data.length)
  },[])
  useEffect(()=>{

    setfiltered(data[item]);
  },[item])
  const changeSlide=(para="")=>{
    if(para=="next" && item<len-1){
    setitem(item+1)}
    else if(para=="reset" ){
      setitem(0)
    }
    else if(para=="previous"&& item>0){
      setitem(item-1)
    }
  }
  return (
    <div >
      <nav>
        <h1>Slideshow App </h1>
      </nav>
      <div className="space"></div>
      <div id="navigation" className="text-center">
        <button disabled={item===0} onClick={()=>changeSlide("reset")} data-testid="button-restart" className="small outlined">
          Restart
        </button>
        <button disabled={item===0} onClick={()=>changeSlide("previous")} data-testid="button-prev" className="small">
          Prev
        </button>{" "}
        <button disabled={item===len-1} onClick={()=>changeSlide("next")} data-testid="button-next" className="small">
          Next
        </button>{" "}
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{filtered.title}</h1>
        <p data-testid="text">{filtered.text}</p>
      </div>
    </div>
  );
}
