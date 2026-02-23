import React from 'react'
import Asterisk from '@/app/components/ui/asterisk'
import { FormGroup } from '@/app/components/ui/form-group'
import { Input } from '@/app/components/ui/input'
import { InputHelpText } from '@/app/components/ui/inpt-help-text'
import { Label } from '@/app/components/ui/label'
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
    if (errors[name] && errors[name] !== '') {
      return errors[name]
    }
    return null
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
          className={error('first_name') !== null ? 'border-red-500' : ''}
          maxLength={100}
          onChange={handleChange}
        />
        <InputHelpText defaultText="Please specify your first name">
          {error('first_name')}
        </InputHelpText>
      </FormGroup>
      <FormGroup>
        <Label htmlFor={idLastName}>Last Name</Label>
        <Asterisk />
        <Input
          id={idLastName}
          name="last_name"
          className={error('last_name') !== null ? 'border-red-500' : ''}
          maxLength={100}
          onChange={handleChange}
        />
        <InputHelpText defaultText="Please specify your last name">
          {error('last_name')}
        </InputHelpText>
      </FormGroup>
      <FormGroup>
        <Label htmlFor={idEmail}>Email</Label>
        <Asterisk />
        <Input
          type="email"
          id={idEmail}
          name="email"
          className={error('email') !== null ? 'border-red-500' : ''}
          maxLength={255}
          onChange={handleChange}
        />
        {error('email') !== null && <InputHelpText>{error('email')}</InputHelpText>}
      </FormGroup>
    </form>
  )
})

export { RegisterForm }