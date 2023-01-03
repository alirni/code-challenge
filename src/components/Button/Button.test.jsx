import { render, screen } from '@testing-library/react';
import Button from '.';

describe('Button Component', () => {
  it('render Button without error', () => {
    const { container } = render(<Button title='test' onclick={() => {}} type='primary' />);
    expect(container).not.toBeNull();
  });

  it('render Button and check content', () => {
    render(<Button title='test' onclick={() => {}} type='primary' />);

    const element = screen.getByText('test');
    let classes = element.getAttribute('class');
    classes = classes.split(' ');

    expect(element).toBeInTheDocument();
    expect(classes.includes('bg-primary-default')).toBe(true);
  });

  it('render secondary Button', () => {
    render(<Button title='test' onclick={() => {}} type='secondary' />);

    const element = screen.getByText('test');
    let classes = element.getAttribute('class');
    classes = classes.split(' ');

    expect(element).toBeInTheDocument();
    expect(classes.includes('bg-secondary-default')).toBe(true);
  });

  it('render important Button', () => {
    render(<Button title='test' onclick={() => {}} type='important' />);

    const element = screen.getByText('test');
    let classes = element.getAttribute('class');
    classes = classes.split(' ');

    expect(element).toBeInTheDocument();
    expect(classes.includes('bg-important-default')).toBe(true);
  });
});
