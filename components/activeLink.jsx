import React, { Children } from 'react';
import { withRouter } from 'next/router';
import { Link } from '../routes';

const ActiveLink = ({ children, router, ...props }) => {
  const child = Children.only(children); // verify that tere is only one children ibnside component, as Link does
  let className = child.props.className || '';

  if (router.asPath === props.href && props.activeClassName) {
    className = `${className} ${props.activeClassName}`;
  }

  // eslint-disable-next-line no-param-reassign
  delete props.activeClassName;

  return <Link {...props}>{React.cloneElement(child, { className })}</Link>;
};

export default withRouter(ActiveLink);
