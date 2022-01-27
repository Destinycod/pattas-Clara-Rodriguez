import { useForm } from "../../hooks/useForm";

const initialForm = {
    name:"",
    email:"",
    comments:"",
};
const validationsForm = (form) =>{
    let errors={};
    let regexName=/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail=/^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexComments=/^.{1,255}$/;

    if(!form.name.trim()){
        errors.name='El campo "Nombre" es obligatorio'
    }
    else if(!regexName.test(form.name.trim())){
        errors.name="Solo se permiten letras y espacios"
    }

    if(!form.email.trim()){
        errors.email="El campo 'Email' es obligatorio"
    }
    else if(!regexEmail.test(form.email.trim())){
        errors.email="Usted está usando caracteres válidos"
    }

    if(!form.comments.trim()){
        errors.comments='El campo "Comentarios" es obligatorio'
    }
    else if(!regexComments.test(form.coments.trim())){
        errors.comments="El límite de caracteres es de 255"
    }

    return errors;
};

const ContactForm = () =>{

    const{
        form, errors, handleChange, handleBlur, handleSubmit
    } = useForm(initialForm, validationsForm);

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                name="name"
                placeholder="Escriba su nombre"
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.name}
                required
                />
                {errors.name && <p>{errors.name}</p>}
                <input
                type="email"
                name="email"
                placeholder="Escriba su email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.email}
                required
                />
                {errors.email && <p>{errors.email}</p>}
                <textarea 
                name="comments" 
                cols="30" rows="10" 
                placeholder="Escriba su comentario"
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.comments}
                required></textarea>
                {errors.comments && <p>{errors.comments}</p>}
                <input type="submit" value="Enviar"/>
            </form>
        </div>
    )
}

export default ContactForm;