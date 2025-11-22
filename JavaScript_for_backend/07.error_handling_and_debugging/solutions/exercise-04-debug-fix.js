/**
 * Exercise 4: Debugging Challenge - Fix the Broken Code
 *
 * This file contains the FIXED version with explanations
 */

// ============================================================
// ORIGINAL BROKEN CODE (commented out)
// ============================================================

/*
const calculateDiscount = (price, discountPercent) => {
  const discount = price * discountPercent / 100;
  const finalPrice = price - discount;
  return finalPrice;
};

const processOrder = async (orderId) => {
  const order = await fetchOrder(orderId);
  const items = order.items;

  let total = 0;
  for (let i = 0; i <= items.length; i++) {  // BUG 1: Off-by-one error
    const item = items[i];                     // BUG 2: Will access undefined
    const discountedPrice = calculateDiscount(item.price, item.discount); // BUG 3: No null checks
    total += discountedPrice * item.quantity;  // BUG 4: No validation
  }

  return {
    orderId: order.id,
    total: total.toFixed(2),
    itemCount: items.length,
  };
};
*/

// ============================================================
// ISSUES FOUND:
// ============================================================
// 1. Loop boundary error: i <= items.length should be i < items.length
// 2. Missing null/undefined checks for order and items
// 3. No validation for price, discount, quantity
// 4. No error handling for fetchOrder failure
// 5. Missing input validation for orderId
// 6. Potential NaN values not handled

// ============================================================
// FIXED CODE
// ============================================================

class OrderError extends Error {
  constructor(message, code, details = {}) {
    super(message);
    this.name = 'OrderError';
    this.code = code;
    this.details = details;
  }
}

/**
 * Calculate discounted price with validation
 * @param {number} price - Original price
 * @param {number} discountPercent - Discount percentage (0-100)
 * @returns {number} Final price after discount
 * @throws {OrderError} If inputs are invalid
 */
const calculateDiscount = (price, discountPercent) => {
  // Validate price
  if (typeof price !== 'number' || !isFinite(price)) {
    throw new OrderError(
      'Invalid price',
      'INVALID_PRICE',
      { price }
    );
  }

  if (price < 0) {
    throw new OrderError(
      'Price cannot be negative',
      'NEGATIVE_PRICE',
      { price }
    );
  }

  // Validate discount
  if (typeof discountPercent !== 'number' || !isFinite(discountPercent)) {
    throw new OrderError(
      'Invalid discount',
      'INVALID_DISCOUNT',
      { discountPercent }
    );
  }

  if (discountPercent < 0 || discountPercent > 100) {
    throw new OrderError(
      'Discount must be between 0 and 100',
      'DISCOUNT_OUT_OF_RANGE',
      { discountPercent }
    );
  }

  const discount = (price * discountPercent) / 100;
  const finalPrice = price - discount;

  return Math.max(0, finalPrice); // Ensure non-negative result
};

/**
 * Mock function to simulate fetching order from database
 * @param {string} orderId - Order ID
 * @returns {Promise<Object>} Order object
 */
const fetchOrder = async orderId => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 100));

  // Mock data
  const orders = {
    'ORDER-123': {
      id: 'ORDER-123',
      items: [
        { name: 'Widget', price: 100, discount: 10, quantity: 2 },
        { name: 'Gadget', price: 50, discount: 5, quantity: 1 },
      ],
    },
    'ORDER-456': {
      id: 'ORDER-456',
      items: [],
    },
  };

  return orders[orderId] || null;
};

/**
 * Process an order and calculate total with proper error handling
 * @param {string} orderId - Order ID to process
 * @returns {Promise<Object>} Order summary with total
 * @throws {OrderError} If order is invalid or processing fails
 */
const processOrder = async orderId => {
  try {
    // Validate input
    if (!orderId || typeof orderId !== 'string') {
      throw new OrderError(
        'Order ID must be a non-empty string',
        'INVALID_ORDER_ID',
        { orderId }
      );
    }

    // Fetch order with error handling
    const order = await fetchOrder(orderId);

    if (!order) {
      throw new OrderError(
        `Order not found: ${orderId}`,
        'ORDER_NOT_FOUND',
        { orderId }
      );
    }

    // Validate order structure
    if (!order.items || !Array.isArray(order.items)) {
      throw new OrderError(
        'Order items must be an array',
        'INVALID_ORDER_STRUCTURE',
        { order }
      );
    }

    // Handle empty order
    if (order.items.length === 0) {
      return {
        orderId: order.id,
        total: '0.00',
        itemCount: 0,
        items: [],
      };
    }

    let total = 0;
    const processedItems = [];

    // FIX 1: Correct loop boundary (i < items.length, not <=)
    for (let i = 0; i < order.items.length; i++) {
      const item = order.items[i];

      // FIX 2: Validate item structure
      if (!item || typeof item !== 'object') {
        throw new OrderError(
          `Invalid item at index ${i}`,
          'INVALID_ITEM',
          { index: i, item }
        );
      }

      // FIX 3: Validate required fields
      const { price, discount = 0, quantity } = item;

      if (typeof quantity !== 'number' || quantity <= 0) {
        throw new OrderError(
          `Invalid quantity for item at index ${i}`,
          'INVALID_QUANTITY',
          { index: i, quantity }
        );
      }

      try {
        // Calculate with validation
        const discountedPrice = calculateDiscount(price, discount);
        const itemTotal = discountedPrice * quantity;

        // FIX 4: Validate result
        if (!isFinite(itemTotal)) {
          throw new OrderError(
            `Invalid calculation for item at index ${i}`,
            'INVALID_CALCULATION',
            { index: i, price, discount, quantity }
          );
        }

        total += itemTotal;

        processedItems.push({
          ...item,
          discountedPrice,
          itemTotal,
        });
      } catch (error) {
        // Re-throw with more context
        if (error instanceof OrderError) {
          error.details.itemIndex = i;
          throw error;
        }
        throw new OrderError(
          `Failed to process item at index ${i}: ${error.message}`,
          'ITEM_PROCESSING_ERROR',
          { index: i, item, originalError: error.message }
        );
      }
    }

    // FIX 5: Validate final total
    if (!isFinite(total) || total < 0) {
      throw new OrderError(
        'Invalid order total',
        'INVALID_TOTAL',
        { total }
      );
    }

    return {
      orderId: order.id,
      total: total.toFixed(2),
      itemCount: order.items.length,
      items: processedItems,
    };
  } catch (error) {
    // Enhance error with context
    if (error instanceof OrderError) {
      throw error;
    }

    // Wrap unexpected errors
    throw new OrderError(
      `Unexpected error processing order: ${error.message}`,
      'PROCESSING_ERROR',
      { orderId, originalError: error.message, stack: error.stack }
    );
  }
};

// ============================================================
// TESTS
// ============================================================

import { describe, it, expect } from 'vitest';

describe('calculateDiscount', () => {
  it('should calculate discount correctly', () => {
    expect(calculateDiscount(100, 10)).toBe(90);
    expect(calculateDiscount(50, 20)).toBe(40);
    expect(calculateDiscount(75, 0)).toBe(75);
  });

  it('should throw on invalid price', () => {
    expect(() => calculateDiscount('100', 10)).toThrow(OrderError);
    expect(() => calculateDiscount(-50, 10)).toThrow('Price cannot be negative');
    expect(() => calculateDiscount(NaN, 10)).toThrow('Invalid price');
  });

  it('should throw on invalid discount', () => {
    expect(() => calculateDiscount(100, -10)).toThrow('Discount must be between 0 and 100');
    expect(() => calculateDiscount(100, 150)).toThrow('Discount must be between 0 and 100');
    expect(() => calculateDiscount(100, 'ten')).toThrow('Invalid discount');
  });

  it('should handle edge cases', () => {
    expect(calculateDiscount(100, 100)).toBe(0); // 100% discount
    expect(calculateDiscount(0, 50)).toBe(0); // Zero price
  });
});

describe('processOrder', () => {
  it('should process valid order correctly', async () => {
    const result = await processOrder('ORDER-123');

    expect(result).toHaveProperty('orderId', 'ORDER-123');
    expect(result).toHaveProperty('total');
    expect(result).toHaveProperty('itemCount', 2);
    expect(result.items).toHaveLength(2);

    // First item: 100 - 10% = 90, * 2 = 180
    // Second item: 50 - 5% = 47.5, * 1 = 47.5
    // Total: 227.5
    expect(parseFloat(result.total)).toBe(227.5);
  });

  it('should handle empty order', async () => {
    const result = await processOrder('ORDER-456');

    expect(result.total).toBe('0.00');
    expect(result.itemCount).toBe(0);
  });

  it('should throw on invalid order ID', async () => {
    await expect(processOrder(null)).rejects.toThrow('Order ID must be a non-empty string');
    await expect(processOrder('')).rejects.toThrow('Order ID must be a non-empty string');
    await expect(processOrder(123)).rejects.toThrow('Order ID must be a non-empty string');
  });

  it('should throw on non-existent order', async () => {
    await expect(processOrder('ORDER-999')).rejects.toThrow('Order not found');
  });

  it('should provide detailed error information', async () => {
    try {
      await processOrder('ORDER-999');
    } catch (error) {
      expect(error).toBeInstanceOf(OrderError);
      expect(error.code).toBe('ORDER_NOT_FOUND');
      expect(error.details).toHaveProperty('orderId', 'ORDER-999');
    }
  });
});

// ============================================================
// USAGE EXAMPLE
// ============================================================

const demonstrateFixedCode = async () => {
  console.log('=== Demonstrating Fixed Code ===\n');

  // Success case
  try {
    console.log('Processing ORDER-123...');
    const result = await processOrder('ORDER-123');
    console.log('Success:', JSON.stringify(result, null, 2));
  } catch (error) {
    console.error('Error:', error.message);
  }

  console.log('\n---\n');

  // Empty order case
  try {
    console.log('Processing ORDER-456 (empty)...');
    const result = await processOrder('ORDER-456');
    console.log('Success:', JSON.stringify(result, null, 2));
  } catch (error) {
    console.error('Error:', error.message);
  }

  console.log('\n---\n');

  // Error case
  try {
    console.log('Processing invalid order...');
    await processOrder('ORDER-999');
  } catch (error) {
    console.error('Error:', error.message);
    console.error('Code:', error.code);
    console.error('Details:', error.details);
  }
};

export {
  calculateDiscount,
  processOrder,
  fetchOrder,
  OrderError,
  demonstrateFixedCode,
};
