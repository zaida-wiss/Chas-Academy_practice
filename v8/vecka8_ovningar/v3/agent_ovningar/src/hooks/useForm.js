import {useState} from "react";

export function useForm(initialValues = {}, validate) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const {name, value} = e.target;
    setValues({...values, [name]: value });
  }

  function handleSubmit(callback){
    return (e) => {
      if (validate) {
        const validationErrors = 
      }
    }
  }


}