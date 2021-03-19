import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';

import CertificationsPage from './CertificationsPage';

describe('CertificationsPage tests', () => {
  afterEach(cleanup);

  it('Test CertificationsPage rendering', async () => {
    const { container } = render(<CertificationsPage/>);
    expect(screen.getByText('Certifications')).toBeTruthy();
    expect(container.getElementsByClassName('cert-img').length).toBe(container.getElementsByTagName('img').length);
    expect(container.getElementsByClassName('work').length).toBe(1);
  })
});