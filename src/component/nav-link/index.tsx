import { NavLinkProps, NavLink } from 'react-router-dom';
import React from 'react';
interface Props extends NavLinkProps {
    className?: string;
}
const NavLinkBase = (
    props: Props,
    ref?: React.Ref<HTMLAnchorElement> | undefined,
) => {
    return (
        <NavLink
            ref={ref}
            {...props}
            className={({ isActive }) =>
                isActive ? props.className : 'not-active '
            }
        />
    );
};
export default React.forwardRef(NavLinkBase);
