import React, {useState} from "react";

const AddNewPost = (props) => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [date, setDate] = useState('');

  function handleSubmit(event){
    event.preventDefault();
    let newPost ={
        name: name, 
        text: text, 
        date: date,
    };
    console.log("newPost :",newPost)
   

  }

    return (<form onSubmit={handleSubmit}>
        <div>
            <label> Name </label>
            <input type='text' value={name} onChange={(event)=> setName(event.target.value)} />
        </div>
        <div>
            <label> Text </label>
            <input type='text' value={text} onChange={(event)=> setText(event.target.value)} />

        </div>
        <div>
            <label> Date </label>
            <input type='date' value={date} onChange={(event)=> setDate(event.target.value)} />
        </div>
        <div>
            <button type="submit"> Post! </button>
        </div>
    </form>
    );
}
 
export default AddNewPost;
