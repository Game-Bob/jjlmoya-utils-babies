import { describe, it, expect } from 'vitest';
import { ALL_TOOLS } from '../tools';
import { babiesCategory } from '../data';

describe('Tool Validation Suite', () => {
  describe('Library Registration', () => {
    it('should have 7 tools in ALL_TOOLS', () => {
      expect(ALL_TOOLS.length).toBe(7);
    });

    it('babiesCategory should be defined', () => {
      expect(babiesCategory).toBeDefined();
      expect(babiesCategory.i18n).toBeDefined();
    });
  });
});

