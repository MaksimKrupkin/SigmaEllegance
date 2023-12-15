import React from 'react';
import ContentLoader from 'react-content-loader';

const SkeletonCard = (props) => (
  <ContentLoader
    speed={2}
    width={420}
    height={600}
    viewBox="0 0 420 600"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="126" y="76" rx="0" ry="0" width="2" height="2" />
    <rect x="106" y="55" rx="0" ry="0" width="3" height="3" />
    <rect x="98" y="112" rx="0" ry="0" width="2" height="1" />
    <rect x="100" y="112" rx="0" ry="0" width="0" height="1" />
    <rect x="19" y="-2" rx="10" ry="10" width="380" height="550" />
  </ContentLoader>
);

export default SkeletonCard;
