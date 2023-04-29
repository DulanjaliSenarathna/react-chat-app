import React , { useState } from 'react';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import FormProvider from '../../components/hook-form/FormProvider'
import { yupResolver } from '@hookform/resolvers/yup';
import { Alert, Button, Stack } from '@mui/material';
import { RHFTextField } from '../../components/hook-form';

const ResetPasswordForm = () => {

  //validation rules 
  const ResetPasswordSchema = Yup.object().shape({
    email:Yup.string().required('Email is required').email('Email must be a valid email address'),
    
  });

  const defaultValues = {
    email:'dulanjali@gmail.com',
  };

  const methods = useForm({
    resolver: yupResolver(ResetPasswordForm),
    defaultValues
  });

  const {reset, setError, handleSubmit, formState:{errors, isSubmitting, isSubmitSuccessful}}
   = methods;

   const onSubmit = async (data) =>{
        try {
            //submit data to backend
        } catch (error) {
            console.log(error);
            reset();
            setError('afterSubmit',{
                ...error,
                message: error.message
            })
        }
   }

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
            {!!errors.afterSubmit && <Alert severity='error'>{errors.afterSubmit.message}</Alert>}
        
        <RHFTextField name='email' label='Email address'/>
        <Button fullWidth color='inherit' size='large' type='submit' variant='contained'
        sx={{bgcolor:'text.primary', color:(theme)=> theme.palette.mode === 'light' ?
         'common.white':'grey.800',
         '&:hover':{
            bgcolor:'text.primary',
            color:(theme)=> theme.palette.mode === 'light' ? 'common.white':'grey.800',
         }}}>Send Request</Button>
        </Stack>
    
       
    </FormProvider>
  )
}

export default ResetPasswordForm