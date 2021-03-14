import { render, screen } from '@testing-library/react';
import App from './App';
import Footer from './App';
import Date from './components/widgets/Date';
import RatingBlock from './components/partials/Rating';

const loadingString = 'Loading...';
const loadingSnapshot = `
<p>
  Loading...
</p>`;

// test('renders footer', () => {
//   render(<Footer />);
//   const appFooter = screen.getByText(/ 2021/i);
//   expect(appFooter).toBeInTheDocument();
// });

// test('render date', () => {
//   const { container, getByText } = render(<App />);
//   // expect(getByText(loadingString)).toBeInTheDocument();
//   expect(container.firstChild).toMatchSnapshot(loadingSnapshot);
// });

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
