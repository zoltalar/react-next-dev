import React from 'react'

export interface IBreadcrumbItem {
  label: string,
  href?: string
}

export interface IBreadcrumbProps {
  items: IBreadcrumbItem[],
  separator?: string
}

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode,
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark',
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
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
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl',
  weight?: 'thin' | 'extralight' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold'
  margin?: string,
  children: React.ReactNode
}

export interface IModalProps extends React.DialogHTMLAttributes<HTMLDialogElement> {
  title: string,
  size?: 'sm' | 'md' | 'lg' | 'xl'
  footer?: React.ReactNode,
  onClose: () => void,
  children: React.ReactNode
}