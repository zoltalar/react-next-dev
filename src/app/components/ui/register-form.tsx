import React from 'react'
import Asterisk from '@/app/components/ui/asterisk'
import FormGroup from '@/app/components/ui/form-group'
import { Input } from '@/app/components/ui/input'
import Label from '@/app/components/ui/label'
import type { IRegisterFormImperativeHandle } from '@/types/component'

const RegisterForm = React.forwardRef<
  IRegisterFormImperativeHandle,
  React.ComponentProps<'form'>
>(
  (props, ref) => {
  // Vars
  const formRef = React.useRef<HTMLFormElement>(null)
  const [data, setData] = React.useState({
    first_name: '',
    last_name: '',
    email: ''
  })
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
  // Expose
  React.useImperativeHandle(ref, () => {
    return {
      getFormData: () => {
        return new FormData(formRef.current ?? undefined)
      },
      reset: () => {
        setData({
          first_name: '',
          last_name: '',
          email: ''
        })
        formRef.current?.reset()
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
      </FormGroup>
    </form>
  )
})

export { RegisterForm }