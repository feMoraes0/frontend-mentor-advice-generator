import React from 'react';
import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import App from '../src/App';

describe('App validation', () => {
  it('then should validate if the config is right', () => {
    render(<App />);
    screen.debug();
  });
});
