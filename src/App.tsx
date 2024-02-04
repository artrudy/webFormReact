import React, {useState, ChangeEvent, FormEvent} from "react"

interface formData{
  userName: string;
  password: string;
}

function App() {

  const [formData, setFormData] = useState<formData>({
    userName: '',
    password: '',
  });

  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  }

  const handleSubmit = (e:FormEvent) => {
    e.preventDefault();
    console.log(formData);

  }
  
  return (
    <form onSubmit={handleSubmit}> 
      <label>
        Username:
        <input type='text' name="userName" value={formData.userName} onChange={handleChange}/>
      </label>
      <label>
        <input type="password" name="password" value={formData.password} onChange={handleChange}/>
      </label>
      <input type="submit" value='Submit' />
    </form>
  )
}

export default App
