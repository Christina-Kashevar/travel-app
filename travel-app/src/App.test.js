import { render, screen } from '@testing-library/react';
import App from './App';
import Footer from './App';
import RatingBlock from './components/partials/Rating';


test('render RatingBlock', () => {;
  const { container } = render(<RatingBlock />);
  expect(container.firstChild).toHaveAttribute('class');
});

test('length App`s children', () => {;
  const { container } = render(<App />);
  expect(container.children.length).toEqual(2)
});

test('App is an object', () => {;
  expect(App()).toBeInstanceOf(Object)
});

test('Footer defined', () => {;
  expect(Footer()).toBeDefined()
});

test('Footer exists', () => {;
  expect(Footer()).toBeTruthy();
});
