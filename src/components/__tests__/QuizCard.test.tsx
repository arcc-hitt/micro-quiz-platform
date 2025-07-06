import { render, screen } from '@testing-library/react';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import { QuizCard } from '../QuizCard';
import { createMockRouter } from '@/test-utils/createMockRouter';

describe('QuizCard', () => {
  it('renders the quiz title and links correctly', () => {
    const router = createMockRouter({});
    render(
      <RouterContext.Provider value={router}>
        <QuizCard id="q1" title="Test Quiz" />
      </RouterContext.Provider>
    );

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/quiz/q1');
    expect(screen.getByText('Test Quiz')).toBeInTheDocument();
  });
});

