'use client';

import { useState } from "react";
import Heading from "../components/Heading";
import Input from "../components/inputs/input";
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Button from "../components/Button";

const RegisterForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const {register, handleSubmit, formState: 
        {errors}} = useForm<FieldValues>({
            defaultValues: {
                name:"",
                email:"",
                password:"",
            },
        });
    const onsubmit : SubmitHandler<FieldValues> = (data) =>{
        setIsLoading(true);
        console.log(data);
    }
    return (
        <>
        <Heading title="Sun up for E-Shop"/>
        <hr className="bg-slate-300 w-full h-px"/>
        <Input
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required/>
        <hr className="bg-slate-300 w-full h-px"/>
        <Input
        id="email"
        label="email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required/>
        <hr className="bg-slate-300 w-full h-px"/>
        <Input
        id="password"
        label="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        type="password"
        />
        <Button label={isLoading ? "Loading" : 'Sign Up'} onClick={handleSubmit(onsubmit)}/>
        </>
        
    );
}
 
export default RegisterForm;