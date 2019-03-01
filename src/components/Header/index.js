import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import { Link } from 'react-router-dom'

let HeaderTop = ({ title }) => (
    <div className="blog-header py-3">
        <div className="row flex-nowrap justify-content-between align-items-center">
            <div className="col-12 text-center">
                <Text tag="span" className="blog-header-logo text-dark" field={title} />
            </div>
        </div>
    </div>
);

let HeaderNavigation = ({ navLinks }) => (
    <div className="nav-scroller py-1 mb-2">
        <nav className="nav d-flex justify-content-between">
            {navLinks.map((listItem, index) => (
                <Link to={"/" + listItem.fields.title.value} className="p-2 text-muted" key={index}>{listItem.fields.title.value}</Link>
            ))}
        </nav>
    </div>
);

let Header = ({ fields }) => (
    <header>
        <HeaderTop title={fields.title} />
        <HeaderNavigation navLinks={fields.navLinks} />
    </header>
);

export default Header;