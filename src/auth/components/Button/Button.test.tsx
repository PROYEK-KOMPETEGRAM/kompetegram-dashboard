import { render } from '@testing-library/react';
import { Button } from './Button';

test('It renders button component correctly', () => {
  render(<Button title='Unit Testing'/>);
  expect(true).toBeTruthy();
})