import '@testing-library/jest-dom/vitest'; // fix expect auxiliar functions (toHaveTextContent)
import React from 'react';
import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import QuoteGateway from '../src/gateway/QuoteGateway';
import App from '../src/App';

describe('Given the app component', () => {
  const spyQuoteGateway = vi.spyOn(QuoteGateway, 'get');

  describe('When the get gateway responde with success', () => {
    beforeEach(() => {
      vi.clearAllMocks();
      spyQuoteGateway.mockResolvedValueOnce({ id: 1, advice: 'test1' });
    });

    it('Then should validate the advice id text update', async () => {
      const { rerender } = await render(<App />);
      const headingTwo = screen.getByRole('heading', { level: 2 });
      expect(headingTwo).toHaveTextContent('ADVICE #0');
      rerender(<App />);
      expect(headingTwo).toHaveTextContent('ADVICE #1');
    });

    it('Then should validate the advice content text update', async () => {
      const { rerender } = await render(<App />);
      const headingTwo = screen.getByRole('heading', { level: 1 });
      expect(headingTwo).toHaveTextContent('""');
      rerender(<App />);
      expect(headingTwo).toHaveTextContent('test1');
    });

    describe('And the user click on the button', () => {
      it('Then should validate advice id text update', async () => {
        const { rerender } = await render(<App />);
        rerender(<App />);
        const headingTwo = screen.getByRole('heading', { level: 2 });
        expect(headingTwo).toHaveTextContent('ADVICE #1');
        spyQuoteGateway.mockResolvedValueOnce({ id: 2, advice: 'test2' });
        await userEvent.click(screen.getByRole('button'));
        expect(headingTwo).toHaveTextContent('ADVICE #2');
      });

      it('Then should validate advice content text update', async () => {
        const { rerender } = await render(<App />);
        rerender(<App />);
        const headingOne = screen.getByRole('heading', { level: 1 });
        expect(headingOne).toHaveTextContent('test1');
        spyQuoteGateway.mockResolvedValueOnce({ id: 2, advice: 'test2' });
        await userEvent.click(screen.getByRole('button'));
        expect(headingOne).toHaveTextContent('test2');
      });
    });
  });
});
