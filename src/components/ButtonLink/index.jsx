import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

export const ButtonLink = ({to, children, ...props }) => {
  return (
    <Link className='button-link-wrapper' to={to} {...props}>
      {children}
    </Link>
  )
}
