import { render, screen } from '@testing-library/react';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import { CategoryCard } from '../CategoryCard';
import { createMockRouter } from '@/test-utils/createMockRouter';

describe('CategoryCard', () => {
  it('renders the category name and links correctly', () => {
    const router = createMockRouter({});
    render(
      <RouterContext.Provider value={router}>
        <CategoryCard name="History" />
      </RouterContext.Provider>
    );

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/quizzes/History');
    expect(screen.getByText('History')).toBeInTheDocument();
  });
});

