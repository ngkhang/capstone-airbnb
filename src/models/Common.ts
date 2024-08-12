import React from 'react';

export interface Component {
  children?: React.ReactNode,
  params?: string,
  className?: string,
}
