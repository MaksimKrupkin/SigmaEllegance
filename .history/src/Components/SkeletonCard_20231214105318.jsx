import React from 'react';
import ContentLoader from 'react-content-loader';

const SkeletonCard = (props) => (
  <ContentLoader
    speed={2}
    width={420}
    height={730}
    viewBox="0 0 420 730"
    backgroundColor="#f3f3f3"
    foregroundColor="#f9f6f6"
    {...props}>
    <rect x="126" y="76" rx="0" ry="0" width="2" height="2" />
    <rect x="106" y="55" rx="0" ry="0" width="3" height="3" />
    <rect x="98" y="112" rx="0" ry="0" width="2" height="1" />
    <rect x="100" y="112" rx="0" ry="0" width="0" height="1" />
    <rect x="14" y="1" rx="8" ry="8" width="381" height="720" />
  </ContentLoader>
);

export default SkeletonCard;
