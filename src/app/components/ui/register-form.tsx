import React from 'react'
import Asterisk from '@/app/components/ui/asterisk'
import FormGroup from '@/app/components/ui/form-group'
import { Input } from '@/app/components/ui/input'
import { InputError } from '@/app/components/ui/inpt-error'
import Label from '@/app/components/ui/label'
import type { IRegisterFormImperativeHandle } from '@/types/component'

const RegisterForm = React.forwardRef<
  IRegisterFormImperativeHandle,
  React.ComponentProps<'form'>
>(
  (props, ref) => {
  // Vars
  const initialState: Record<string, string> = {
    first_name: '',
    last_name: '',
    email: ''
  }
  const formRef = React.useRef<HTMLFormElement>(null)
  const [data, setData] = React.useState({...initialState})
  const [errors, setErrors] = React.useState({...initialState})
  // Hooks
  const idFirstName = React.useId()
  const idLastName = React.useId()
  const idEmail = React.useId()
  // Functions
  const handleChange = (event: React.ChangeEvent<HTMLInputElement|HTMLSelectElement>) => {
    const name = event.target.getAttribute('name')?.toString() ?? ''
    setData({
      ...data,
      [name]: event.target.value
    })
  }
  const error = (name: keyof typeof errors): string | null => {
    return errors[name] ?? null
  }
  const resetData = (): void => {
    setData({...initialState})
  }
  const resetErrors = (): void => {
    setErrors({...initialState})
  }
  // Expose
  React.useImperativeHandle(ref, () => {
    return {
      reset: () => {
        resetData()
        resetErrors()
        formRef.current?.reset()
      },
      store: async () => {
        const formData = new FormData(formRef.current ?? undefined)
        try {
          const response = await fetch('http://localhost:3000/api/users', {
            method: 'POST',
            body: formData
          })
          const data = await response.json()
          if (data.errors) {
            setErrors(data.errors)
            return false
          } else if (response.status === 200) {
            return formData
          }
        } catch (error) {}
        return false
      }
    }
  })
  // Return
  return (
    <form ref={formRef} {...props}>
      <FormGroup>
        <Label htmlFor={idFirstName}>First Name</Label>
        <Asterisk />
        <Input
          id={idFirstName}
          name="first_name"
          maxLength={100}
          onChange={handleChange}
        />
        {error('first_name') !== null && <InputError>{error('first_name')}</InputError>}
      </FormGroup>
      <FormGroup>
        <Label htmlFor={idLastName}>Last Name</Label>
        <Asterisk />
        <Input
          id={idLastName}
          name="last_name"
          maxLength={100}
          onChange={handleChange}
        />
        {error('last_name') !== null && <InputError>{error('last_name')}</InputError>}
      </FormGroup>
      <FormGroup>
        <Label htmlFor={idEmail}>Email</Label>
        <Asterisk />
        <Input
          type="email"
          id={idEmail}
          name="email"
          maxLength={255}
          onChange={handleChange}
        />
        {error('email') !== null && <InputError>{error('email')}</InputError>}
      </FormGroup>
    </form>
  )
})

export { RegisterForm }