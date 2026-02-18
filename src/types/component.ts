import React from 'react'

export interface IBreadcrumbItem {
  label: string,
  href?: string
}

export interface IBreadcrumbProps {
  items: IBreadcrumbItem[],
  separator?: string
}

export interface IComponent {
  id: number,
  name: string,
  slug: string,
  description: string
}

export interface IComponentProps {
  component: IComponent
}

export interface IHeadingProps {
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl',
  weight?: 'thin' | 'extralight' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold'
  margin?: string,  
  children: React.ReactNode
}

export interface IModalProps {
  id: string,
  title: string,
  backdrop?: string | boolean,
  size?: 'sm' | 'md' | 'lg' | 'xl'
  footer?: React.ReactNode,
  children: React.ReactNode
}