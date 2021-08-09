/**
 * Redirect of old search traffic
 *
 * @author Dapeng Zhang
 * @version 1.0.0
 */
import React, { useEffect } from 'react';
import { PageBodyRedirect } from '../../../components/Styles';

export default () => {
  useEffect(() => {
    const root = window.location.origin;
    window.location.href = `${root}/services/internet-of-things`;
  }, [])
  return (
    <PageBodyRedirect>Redirecting...</PageBodyRedirect>
  );
}