import React from 'react';
import ContentLoader from 'react-content-loader';

const SkeletonCard = (props) => (
  <ContentLoader
    speed={2}
    width={420}
    height={700}
    viewBox="0 0 420 700"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="126" y="76" rx="0" ry="0" width="2" height="2" />
    <rect x="106" y="55" rx="0" ry="0" width="3" height="3" />
    <rect x="98" y="112" rx="0" ry="0" width="2" height="1" />
    <rect x="100" y="112" rx="0" ry="0" width="0" height="1" />
    <rect x="12" y="6" rx="10" ry="10" width="379" height="682" />
  </ContentLoader>
);

export default SkeletonCard;
