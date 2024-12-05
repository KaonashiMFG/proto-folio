import tools from "../data/json/Tools.json"



export default function Skills() {
  console.log(tools)
  
  return <>
    <div className="flex flex-col justify-center items-center gap-60 border border-regularText">
        <h1>TOOLS</h1>

        

      <div>
        {tools.map(el => <div>
          <img src={el.img} alt=""/>
          <span>{el.name}</span>

        </div>)}
      </div>
    </div>
  </>;
}
