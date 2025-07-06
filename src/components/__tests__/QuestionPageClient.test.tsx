import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import QuizPageClient from '../QuizPageClient';

const mockQuiz = {
  id: 'q1',
  category: 'Sample',
  title: 'Sample Quiz',
  questions: [
    {
      id: '1',
      text: 'One plus one?',
      options: [
        { id: 'a', text: '1' },
        { id: 'b', text: '2' },
      ],
      correct: 'b',
    },
  ],
};

describe('QuizPageClient', () => {
  it('shows question, feedback, and finish button', async () => {
    render(<QuizPageClient quiz={mockQuiz} />);

    // question visible
    expect(screen.getByText(/One plus one/i)).toBeInTheDocument();

    // select correct answer
    await userEvent.click(screen.getByLabelText('2'));
    await userEvent.click(screen.getByRole('button', { name: /submit/i }));

    // feedback shown
    expect(screen.getByText(/✅ Correct/i)).toBeInTheDocument();

    // finish button appears
    const finishBtn = screen.getByRole('button', { name: /finish/i });
    expect(finishBtn).toBeEnabled();

    // click finish -> score
    await userEvent.click(finishBtn);
    expect(screen.getByText(/You scored 1 \/ 1/i)).toBeInTheDocument();
  });
});
