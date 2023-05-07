import React  from 'react';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import FormProvider from '../../components/hook-form/FormProvider'
import { yupResolver } from '@hookform/resolvers/yup';
import { Alert, Button, Stack } from '@mui/material';
import { RHFTextField } from '../../components/hook-form';

const ProfileForm = () => {

  //validation rules 
  const loginSchema = Yup.object().shape({
    name:Yup.string().required('Name is required'),
    about:Yup.string().required('About is required'),
    avatarUrl:Yup.string().required('Avatar is required').nullable(true),
  });

  const defaultValues = {
    name:'',
    about:''
  };

  const methods = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues
  });

  const {reset, setError, handleSubmit, formState:{errors}}
   = methods;

   const onSubmit = async (data) =>{
        try {
            //submit data to backend
            console.log('Data', data)
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
        <Stack spacing={3}>
            {!!errors.afterSubmit && <Alert severity='error'>{errors.afterSubmit.message}</Alert>}
        
        <RHFTextField name='name' label='Name' helperText={'This name is visible to your contacts'}/>
        <RHFTextField multiline rows={3} maxRow={5} name='about' label='About'/>
        </Stack>
        <Stack direction={'row'} justifyContent='end'>
            <Button color='primary' size='large' type='submit' variant='outlined'>Save</Button>
        </Stack>
        </Stack>
       
    </FormProvider>
  )
}

export default ProfileForm