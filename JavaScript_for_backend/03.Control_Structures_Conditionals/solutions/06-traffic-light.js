/**
 * Exercise 6: Traffic Light Controller
 *
 * Simulates a traffic light system with multiple features
 */

/**
 * Traffic light states
 */
const LIGHT_STATES = {
  GREEN: 'green',
  YELLOW: 'yellow',
  RED: 'red',
};

/**
 * Timing configuration (in seconds)
 */
const TIMING = {
  GREEN: 30,
  YELLOW: 5,
  RED: 35,
};

/**
 * Traffic Light Controller Class
 */
class TrafficController {
  constructor() {
    this.directions = {
      north: { state: LIGHT_STATES.RED, timer: 0 },
      south: { state: LIGHT_STATES.RED, timer: 0 },
      east: { state: LIGHT_STATES.RED, timer: 0 },
      west: { state: LIGHT_STATES.RED, timer: 0 },
    };

    this.activeDirection = 'north';
    this.pedestrianRequest = null;
    this.emergencyDirection = null;
    this.elapsedTime = 0;

    // Initialize first light
    this.directions[this.activeDirection].state = LIGHT_STATES.GREEN;
    this.directions[this.activeDirection].timer = TIMING.GREEN;
  }

  /**
   * Simulates time passing
   * @param {number} seconds - Number of seconds to simulate
   */
  tick(seconds = 1) {
    if (seconds <= 0) return;

    for (let i = 0; i < seconds; i++) {
      this.elapsedTime++;
      this.updateTimers();
      this.checkTransitions();
      this.handleEmergency();
    }
  }

  /**
   * Updates all timers
   */
  updateTimers() {
    for (const direction in this.directions) {
      if (this.directions[direction].timer > 0) {
        this.directions[direction].timer--;
      }
    }
  }

  /**
   * Checks and handles state transitions
   */
  checkTransitions() {
    const activeLight = this.directions[this.activeDirection];

    // Check if current state timer expired
    if (activeLight.timer === 0) {
      this.transitionLight();
    }
  }

  /**
   * Transitions lights to next state
   */
  transitionLight() {
    const currentState = this.directions[this.activeDirection].state;

    if (currentState === LIGHT_STATES.GREEN) {
      // Green → Yellow
      this.directions[this.activeDirection].state = LIGHT_STATES.YELLOW;
      this.directions[this.activeDirection].timer = TIMING.YELLOW;
    } else if (currentState === LIGHT_STATES.YELLOW) {
      // Yellow → Red, activate next direction
      this.directions[this.activeDirection].state = LIGHT_STATES.RED;
      this.directions[this.activeDirection].timer = TIMING.RED;

      // Move to next direction
      this.activeDirection = this.getNextDirection();
      this.directions[this.activeDirection].state = LIGHT_STATES.GREEN;
      this.directions[this.activeDirection].timer = TIMING.GREEN;

      // Handle pedestrian request if any
      if (this.pedestrianRequest) {
        this.handlePedestrianCrossing();
      }
    }
  }

  /**
   * Gets next direction in rotation
   * @returns {string} Next direction
   */
  getNextDirection() {
    const directions = ['north', 'south', 'east', 'west'];
    const currentIndex = directions.indexOf(this.activeDirection);
    return directions[(currentIndex + 1) % directions.length];
  }

  /**
   * Requests pedestrian crossing
   * @param {string} direction - Direction for crossing
   */
  requestPedestrian(direction) {
    if (!this.directions[direction]) {
      throw new Error(`Invalid direction: ${direction}`);
    }

    this.pedestrianRequest = direction;
  }

  /**
   * Handles pedestrian crossing
   */
  handlePedestrianCrossing() {
    // Extend green time for pedestrian crossing
    if (this.pedestrianRequest === this.activeDirection) {
      this.directions[this.activeDirection].timer += 10; // Add 10 seconds
      this.pedestrianRequest = null;
    }
  }

  /**
   * Signals emergency vehicle
   * @param {string} direction - Direction of emergency vehicle
   */
  emergencyVehicle(direction) {
    if (!this.directions[direction]) {
      throw new Error(`Invalid direction: ${direction}`);
    }

    this.emergencyDirection = direction;
  }

  /**
   * Handles emergency vehicle priority
   */
  handleEmergency() {
    if (!this.emergencyDirection) return;

    // If emergency direction is not active, transition immediately
    if (this.emergencyDirection !== this.activeDirection) {
      // Set current to yellow (transition state)
      this.directions[this.activeDirection].state = LIGHT_STATES.YELLOW;
      this.directions[this.activeDirection].timer = TIMING.YELLOW;

      // Prepare emergency direction
      this.activeDirection = this.emergencyDirection;
      this.emergencyDirection = null;

      // Will turn green on next transition
    }
  }

  /**
   * Gets current state of all lights
   * @returns {Object} Current state
   */
  getState() {
    const state = {
      north: this.directions.north.state,
      south: this.directions.south.state,
      east: this.directions.east.state,
      west: this.directions.west.state,
      activeDirection: this.activeDirection,
      nextChange: this.directions[this.activeDirection].timer,
      pedestrianActive: this.pedestrianRequest !== null,
      emergencyActive: this.emergencyDirection !== null,
      elapsedTime: this.elapsedTime,
    };

    return state;
  }

  /**
   * Resets controller to initial state
   */
  reset() {
    for (const direction in this.directions) {
      this.directions[direction].state = LIGHT_STATES.RED;
      this.directions[direction].timer = 0;
    }

    this.activeDirection = 'north';
    this.directions[this.activeDirection].state = LIGHT_STATES.GREEN;
    this.directions[this.activeDirection].timer = TIMING.GREEN;
    this.pedestrianRequest = null;
    this.emergencyDirection = null;
    this.elapsedTime = 0;
  }
}

// --- Tests ---
import { describe, it, expect, beforeEach } from 'vitest';

describe('Traffic Light Controller', () => {
  let controller;

  beforeEach(() => {
    controller = new TrafficController();
  });

  describe('Initialization', () => {
    it('should start with north green, others red', () => {
      const state = controller.getState();
      expect(state.north).toBe('green');
      expect(state.south).toBe('red');
      expect(state.east).toBe('red');
      expect(state.west).toBe('red');
    });

    it('should set correct initial timer', () => {
      const state = controller.getState();
      expect(state.nextChange).toBe(TIMING.GREEN);
    });
  });

  describe('Normal operation', () => {
    it('should transition green to yellow after 30 seconds', () => {
      controller.tick(30);
      const state = controller.getState();
      expect(state.north).toBe('yellow');
    });

    it('should transition yellow to red after 5 seconds', () => {
      controller.tick(35); // 30 green + 5 yellow
      const state = controller.getState();
      expect(state.north).toBe('red');
    });

    it('should activate next direction after full cycle', () => {
      controller.tick(35); // Complete north cycle
      const state = controller.getState();
      expect(state.south).toBe('green');
      expect(state.activeDirection).toBe('south');
    });

    it('should rotate through all directions', () => {
      controller.tick(35); // North done
      expect(controller.getState().activeDirection).toBe('south');

      controller.tick(35); // South done
      expect(controller.getState().activeDirection).toBe('east');

      controller.tick(35); // East done
      expect(controller.getState().activeDirection).toBe('west');

      controller.tick(35); // West done
      expect(controller.getState().activeDirection).toBe('north');
    });
  });

  describe('Pedestrian crossing', () => {
    it('should accept pedestrian request', () => {
      controller.requestPedestrian('north');
      const state = controller.getState();
      expect(state.pedestrianActive).toBe(true);
    });

    it('should extend green time for pedestrian crossing', () => {
      controller.requestPedestrian('north');
      controller.tick(30); // End of normal green time

      const state = controller.getState();
      // Should still be green (extended for pedestrian)
      expect(state.north).toBe('green');
      expect(state.nextChange).toBeGreaterThan(0);
    });

    it('should throw error for invalid direction', () => {
      expect(() => controller.requestPedestrian('invalid')).toThrow('Invalid direction');
    });
  });

  describe('Emergency vehicle', () => {
    it('should accept emergency vehicle signal', () => {
      controller.emergencyVehicle('south');
      const state = controller.getState();
      expect(state.emergencyActive).toBe(true);
    });

    it('should prioritize emergency vehicle direction', () => {
      controller.emergencyVehicle('south');
      controller.tick(1); // Trigger emergency handling

      // Current should transition to yellow
      const state = controller.getState();
      expect(state.north).toBe('yellow');
    });

    it('should throw error for invalid direction', () => {
      expect(() => controller.emergencyVehicle('invalid')).toThrow('Invalid direction');
    });
  });

  describe('Timer tracking', () => {
    it('should track elapsed time', () => {
      controller.tick(10);
      expect(controller.getState().elapsedTime).toBe(10);

      controller.tick(25);
      expect(controller.getState().elapsedTime).toBe(35);
    });

    it('should count down to next change', () => {
      const initial = controller.getState().nextChange;
      controller.tick(5);
      const after = controller.getState().nextChange;

      expect(after).toBe(initial - 5);
    });
  });

  describe('Reset functionality', () => {
    it('should reset to initial state', () => {
      controller.tick(50);
      controller.requestPedestrian('east');
      controller.emergencyVehicle('west');

      controller.reset();

      const state = controller.getState();
      expect(state.north).toBe('green');
      expect(state.activeDirection).toBe('north');
      expect(state.elapsedTime).toBe(0);
      expect(state.pedestrianActive).toBe(false);
      expect(state.emergencyActive).toBe(false);
    });
  });
});

export { TrafficController };
