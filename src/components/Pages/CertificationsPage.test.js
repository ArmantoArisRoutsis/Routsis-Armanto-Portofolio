import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';

import CertificationsPage from './CertificationsPage';

describe('NotificationsCard tests', () => {
  afterEach(cleanup);

  it('Test ProfileCard rendering', async () => {
    const { container } = render(<CertificationsPage/>);
    expect(screen.getByText('Certifications')).toBeTruthy();
    expect(container.getElementsByClassName('cert-img').length).toBe(container.getElementsByTagName('img').length);
    expect(container.getElementsByClassName('work').length).toBe(1);
  })
});