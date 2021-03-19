import React from 'react';
import { render, cleanup, act, screen } from '@testing-library/react';

import HomePage from './HomePage';

describe('HomePage tests', () => {
  afterEach(cleanup);

  it('Test HomePage rendering', async () => {
    const { container } = render(<HomePage/>);
    expect(container.getElementsByClassName('skills-info')).toBeTruthy();
    expect(container.getElementsByClassName('iconify').length).toBe(container.getElementsByClassName('skills__name').length + 2);
  })

  it('Test HomePage Sections rendering', async () => {
    render(<HomePage/>);
    expect(screen.getByText('About')).toBeTruthy();
    expect(screen.getByText('Who am I')).toBeTruthy();
    expect(screen.getByText('Skills')).toBeTruthy();
    expect(screen.getByText('Work')).toBeTruthy();
    expect(screen.getByText('Contact')).toBeTruthy();
  })
});