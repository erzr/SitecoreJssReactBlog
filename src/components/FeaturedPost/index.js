import React from 'react';
import { Text, Link, DateField, Image } from '@sitecore-jss/sitecore-jss-react';

const FeaturedPost = ({ fields }) => (
  <div className="card flex-md-row mb-4 shadow-sm h-md-250">
    <div className="card-body d-flex flex-column align-items-start">
      <strong className="d-inline-block mb-2 text-primary"><Text field={fields.eyebrow} /></strong>
      <h3 className="mb-0">
        <Link field={fields.title} className="text-dark" />
      </h3>
      <div className="mb-1 text-muted">
        <DateField field={fields.date} 
                   render={(date) => date.toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })} />
      </div>
      <p className="card-text mb-auto">
        <Text field={fields.description} />
      </p>
      <Link field={fields.readMore} />
    </div>
    <Image className="bd-placeholder-img card-img-right flex-auto d-none d-lg-block" media={fields.image} />
  </div>
);

export default FeaturedPost;
