import { describe, it, expect } from '@jest/globals';
import { slugify } from '../slugify.js';

describe('slugify', () => {
  it('converts a simple string', () => {
    expect(slugify('Hello World!')).toBe('hello-world');
  });

  it('handles extra spaces', () => {
    expect(slugify('  Hello   World!  ')).toBe('hello-world');
  });

  it('removes special characters', () => {
    expect(slugify('Café & Cream')).toBe('caf-cream');
  });
});
