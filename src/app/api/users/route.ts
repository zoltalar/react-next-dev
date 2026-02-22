import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const firstName = formData.get('first_name') as string | null
    const lastName = formData.get('last_name') as string | null
    const email = formData.get('email') as string | null
    const errors: Record<string, string> = {}
    if ( ! firstName || firstName.trim() === '') {
      errors.first_name = 'The first name attribute is required'
    }
    if ( ! lastName || lastName.trim() === '') {
      errors.last_name = 'The last name attribute is required'
    }
    if ( ! email || email.trim() === '') {
      errors.email = 'The email attribute is required'
    }
    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { message: 'Invalid form data', errors },
        { status: 422 }
      )
    }
    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}