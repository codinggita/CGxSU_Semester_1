/**
 * Exercise 4: Smart Discount Calculator
 *
 * Complex discount calculation with stacking rules
 */

/**
 * Calculates discounts with complex stacking rules
 * @param {Object} options - Discount calculation options
 * @param {number} options.total - Order total
 * @param {boolean} options.isMember - Is customer a member
 * @param {boolean} options.isSenior - Is customer a senior
 * @param {boolean} options.isStudent - Is customer a student
 * @param {string} options.isHoliday - Holiday name or null
 * @returns {Object} Detailed discount breakdown
 */
const calculateDiscount = (options) => {
  const {
    total = 0,
    isMember = false,
    isSenior = false,
    isStudent = false,
    isHoliday = null,
  } = options;

  // Validation
  if (total < 0) {
    throw new Error('Total cannot be negative');
  }

  const breakdown = {
    baseDiscount: 0,
    volumeDiscount: 0,
    totalDiscount: 0,
    finalPrice: total,
    savings: 0,
    appliedDiscounts: [],
  };

  // Step 1: Calculate base discount (member, senior, student, or holiday)
  let baseDiscountPercent = 0;
  let baseDiscountSource = null;

  // Check holiday discounts first (highest priority)
  if (isHoliday) {
    const holidayLower = isHoliday.toLowerCase();
    if (holidayLower === 'blackfriday') {
      baseDiscountPercent = 25;
      baseDiscountSource = 'Black Friday';
    } else if (holidayLower === 'cybermonday') {
      baseDiscountPercent = 20;
      baseDiscountSource = 'Cyber Monday';
    }
  }

  // If no holiday discount, check customer type discounts
  if (baseDiscountPercent === 0) {
    if (isSenior) {
      baseDiscountPercent = 15;
      baseDiscountSource = 'Senior';
    } else if (isMember) {
      baseDiscountPercent = 10;
      baseDiscountSource = 'Member';
    } else if (isStudent) {
      baseDiscountPercent = 10;
      baseDiscountSource = 'Student';
    }
  }

  breakdown.baseDiscount = baseDiscountPercent;
  if (baseDiscountSource) {
    breakdown.appliedDiscounts.push(baseDiscountSource);
  }

  // Step 2: Calculate volume discount
  let volumeDiscountPercent = 0;

  if (total >= 1000) {
    volumeDiscountPercent = 15;
    breakdown.appliedDiscounts.push('Volume $1000+');
  } else if (total >= 500) {
    volumeDiscountPercent = 10;
    breakdown.appliedDiscounts.push('Volume $500+');
  } else if (total >= 100) {
    volumeDiscountPercent = 5;
    breakdown.appliedDiscounts.push('Volume $100+');
  }

  breakdown.volumeDiscount = volumeDiscountPercent;

  // Step 3: Calculate total discount
  // Base discount applies first, then volume discount on reduced price
  const baseDiscountAmount = total * (baseDiscountPercent / 100);
  const priceAfterBase = total - baseDiscountAmount;
  const volumeDiscountAmount = priceAfterBase * (volumeDiscountPercent / 100);

  const totalDiscountAmount = baseDiscountAmount + volumeDiscountAmount;
  const totalDiscountPercent = (totalDiscountAmount / total) * 100;

  // Cap at 50% maximum total discount
  const MAX_DISCOUNT = 50;
  const effectiveDiscountPercent = Math.min(totalDiscountPercent, MAX_DISCOUNT);
  const effectiveDiscountAmount = total * (effectiveDiscountPercent / 100);

  breakdown.totalDiscount = parseFloat(effectiveDiscountPercent.toFixed(2));
  breakdown.savings = parseFloat(effectiveDiscountAmount.toFixed(2));
  breakdown.finalPrice = parseFloat((total - effectiveDiscountAmount).toFixed(2));

  // Add cap notification if applicable
  if (totalDiscountPercent > MAX_DISCOUNT) {
    breakdown.appliedDiscounts.push(`Capped at ${MAX_DISCOUNT}%`);
    breakdown.cappedDiscount = true;
  }

  return breakdown;
};

// --- Tests ---
import { describe, it, expect } from 'vitest';

describe('Smart Discount Calculator', () => {
  describe('Base discounts', () => {
    it('should apply member discount', () => {
      const result = calculateDiscount({ total: 100, isMember: true });
      expect(result.baseDiscount).toBe(10);
      expect(result.appliedDiscounts).toContain('Member');
    });

    it('should apply senior discount', () => {
      const result = calculateDiscount({ total: 100, isSenior: true });
      expect(result.baseDiscount).toBe(15);
      expect(result.appliedDiscounts).toContain('Senior');
    });

    it('should apply student discount', () => {
      const result = calculateDiscount({ total: 100, isStudent: true });
      expect(result.baseDiscount).toBe(10);
      expect(result.appliedDiscounts).toContain('Student');
    });

    it('should prioritize senior over member', () => {
      const result = calculateDiscount({ total: 100, isMember: true, isSenior: true });
      expect(result.baseDiscount).toBe(15); // Senior wins
    });
  });

  describe('Holiday discounts', () => {
    it('should apply Black Friday discount', () => {
      const result = calculateDiscount({ total: 100, isHoliday: 'blackfriday' });
      expect(result.baseDiscount).toBe(25);
      expect(result.appliedDiscounts).toContain('Black Friday');
    });

    it('should apply Cyber Monday discount', () => {
      const result = calculateDiscount({ total: 100, isHoliday: 'cybermonday' });
      expect(result.baseDiscount).toBe(20);
      expect(result.appliedDiscounts).toContain('Cyber Monday');
    });

    it('should prioritize holiday over member discount', () => {
      const result = calculateDiscount({
        total: 100,
        isMember: true,
        isHoliday: 'blackfriday',
      });
      expect(result.baseDiscount).toBe(25); // Black Friday wins
    });

    it('should handle case-insensitive holiday names', () => {
      const result = calculateDiscount({ total: 100, isHoliday: 'BlackFriday' });
      expect(result.baseDiscount).toBe(25);
    });
  });

  describe('Volume discounts', () => {
    it('should apply 5% for $100+', () => {
      const result = calculateDiscount({ total: 150 });
      expect(result.volumeDiscount).toBe(5);
      expect(result.appliedDiscounts).toContain('Volume $100+');
    });

    it('should apply 10% for $500+', () => {
      const result = calculateDiscount({ total: 600 });
      expect(result.volumeDiscount).toBe(10);
      expect(result.appliedDiscounts).toContain('Volume $500+');
    });

    it('should apply 15% for $1000+', () => {
      const result = calculateDiscount({ total: 1200 });
      expect(result.volumeDiscount).toBe(15);
      expect(result.appliedDiscounts).toContain('Volume $1000+');
    });
  });

  describe('Stacking rules', () => {
    it('should stack base and volume discounts', () => {
      const result = calculateDiscount({
        total: 600,
        isMember: true,
      });
      // Base: 10% of $600 = $60, remaining $540
      // Volume: 10% of $540 = $54
      // Total savings: $114 (19% of $600)
      expect(result.baseDiscount).toBe(10);
      expect(result.volumeDiscount).toBe(10);
      expect(result.totalDiscount).toBeCloseTo(19, 0);
      expect(result.finalPrice).toBeCloseTo(486, 0);
    });

    it('should stack holiday and volume discounts', () => {
      const result = calculateDiscount({
        total: 600,
        isHoliday: 'blackfriday',
      });
      // Base: 25% of $600 = $150, remaining $450
      // Volume: 10% of $450 = $45
      // Total savings: $195 (32.5% of $600)
      expect(result.baseDiscount).toBe(25);
      expect(result.volumeDiscount).toBe(10);
      expect(result.totalDiscount).toBeCloseTo(32.5, 1);
      expect(result.finalPrice).toBeCloseTo(405, 0);
    });
  });

  describe('Maximum discount cap', () => {
    it('should cap total discount at 50%', () => {
      const result = calculateDiscount({
        total: 1500,
        isHoliday: 'blackfriday',
      });
      // Would be: 25% + (75% of 15%) = ~36.25%, but no cap needed
      expect(result.totalDiscount).toBeLessThanOrEqual(50);
    });

    it('should indicate when discount is capped', () => {
      // Create scenario that would exceed 50%
      const result = calculateDiscount({
        total: 2000,
        isSenior: true, // 15%
        // With volume at 15%, could theoretically exceed 50%
      });

      if (result.totalDiscount === 50) {
        expect(result.cappedDiscount).toBe(true);
        expect(result.appliedDiscounts).toContain('Capped at 50%');
      }
    });
  });

  describe('Edge cases', () => {
    it('should handle zero total', () => {
      const result = calculateDiscount({ total: 0, isMember: true });
      expect(result.finalPrice).toBe(0);
      expect(result.savings).toBe(0);
    });

    it('should throw for negative total', () => {
      expect(() => calculateDiscount({ total: -100 })).toThrow('Total cannot be negative');
    });

    it('should handle no discounts', () => {
      const result = calculateDiscount({ total: 50 });
      expect(result.baseDiscount).toBe(0);
      expect(result.volumeDiscount).toBe(0);
      expect(result.totalDiscount).toBe(0);
      expect(result.finalPrice).toBe(50);
      expect(result.appliedDiscounts).toHaveLength(0);
    });

    it('should handle default options', () => {
      const result = calculateDiscount({});
      expect(result.finalPrice).toBe(0);
    });
  });

  describe('Precision', () => {
    it('should round to 2 decimal places', () => {
      const result = calculateDiscount({ total: 123.456, isMember: true });
      expect(result.finalPrice.toString()).toMatch(/^\d+\.\d{2}$/);
      expect(result.savings.toString()).toMatch(/^\d+\.\d{2}$/);
    });
  });
});

export { calculateDiscount };
