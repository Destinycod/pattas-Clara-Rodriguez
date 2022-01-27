import { useState } from "react";

export const useForm = (initialValue, validateForm) =>{

    const [form, setForm]=useState(initialValue);
    const [errors, setErrors]=useState({});

    const handleChange = (event) => {
        const {name,value}=event.target;
        setForm({
            ...form,
            [name]:value
        });
    };
    const handleBlur = (event) => {
        handleChange(event);
        setErrors(validateForm(form));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validateForm(form));

        if(Object.keys(errors).length === 0){
            alert("El Formulario se envió con éxito");
        }
        else{
            return;
        }
    }

    return(
        form, errors, handleChange, handleBlur, handleSubmit
    );
}