import React , { useState }from "react";

function CreateArea(props) {
  const [element,setelement] =  useState(
    {
      title:"",
      content:"",
    }
  );

  function handlechange(event){
    const {name,value} = event.target;

    setelement(prev=>({ 
        ...prev,
        [name]:value
      
    }));
  }

  return (
    <div>
      <form>
        <input onChange={handlechange} name="title" placeholder="Title" />
        <textarea onChange={handlechange} name="content" placeholder="Take a note..." rows="3" />
        <button onClick={(event)=>
          { 
            event.preventDefault();
            props.click(element);
            setelement(
              {
                title:"",
                content:""
              }
            )
          }
        }>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
