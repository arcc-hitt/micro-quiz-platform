import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Question } from '../Question';

const sample = {
  text: 'What is 2+2?',
  options: [
    { id: 'a', text: '3' },
    { id: 'b', text: '4' },
  ],
  onSubmit: jest.fn(),
  selectedAnswer: null,
  disabled: false,
};

describe('Question', () => {
  it('lets user select an option and submit', async () => {
    render(
      <Question
        text={sample.text}
        options={sample.options}
        onSubmit={sample.onSubmit}
        selectedAnswer={null}
        disabled={false}
      />
    );

    // radio buttons not selected
    const option4 = screen.getByLabelText('4');
    expect(option4).not.toBeChecked();

    // select and submit
    await userEvent.click(option4);
    expect(option4).toBeChecked();

    const btn = screen.getByRole('button', { name: /submit/i });
    await userEvent.click(btn);
    expect(sample.onSubmit).toHaveBeenCalledWith('b');
  });

  it('disables inputs when disabled=true', () => {
    render(
      <Question
        text={sample.text}
        options={sample.options}
        onSubmit={sample.onSubmit}
        selectedAnswer="a"
        disabled={true}
      />
    );
    expect(screen.getByLabelText('3')).toBeDisabled();
    expect(screen.getByRole('button', { name: /submit/i })).toBeDisabled();
  });
});
