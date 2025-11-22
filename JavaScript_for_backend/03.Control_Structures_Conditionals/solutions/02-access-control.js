/**
 * Exercise 2: Access Control System
 *
 * Role-based access control (RBAC) implementation
 */

/**
 * Permission matrix defining role capabilities
 */
const PERMISSIONS = {
  admin: {
    users: ['create', 'read', 'update', 'delete'],
    posts: ['create', 'read', 'update', 'delete'],
    comments: ['create', 'read', 'update', 'delete'],
    settings: ['create', 'read', 'update', 'delete'],
  },
  editor: {
    users: ['read'],
    posts: ['create', 'read', 'update', 'delete'],
    comments: ['create', 'read', 'update', 'delete'],
    settings: [],
  },
  viewer: {
    users: ['read'],
    posts: ['read'],
    comments: ['read'],
    settings: ['read'],
  },
  guest: {
    users: [],
    posts: ['read'],
    comments: ['read'],
    settings: [],
  },
};

/**
 * Checks if a role has permission to perform action on resource
 * @param {string} role - User role (admin, editor, viewer, guest)
 * @param {string} resource - Resource name (users, posts, comments, settings)
 * @param {string} action - Action to perform (create, read, update, delete)
 * @returns {boolean} True if access is allowed
 */
const canAccess = (role, resource, action) => {
  // Validation
  if (!role || !resource || !action) {
    return false;
  }

  // Normalize to lowercase
  role = role.toLowerCase();
  resource = resource.toLowerCase();
  action = action.toLowerCase();

  // Check if role exists
  if (!PERMISSIONS[role]) {
    return false;
  }

  // Check if resource exists for role
  if (!PERMISSIONS[role][resource]) {
    return false;
  }

  // Check if action is permitted
  return PERMISSIONS[role][resource].includes(action);
};

/**
 * Gets all permissions for a role
 * @param {string} role - User role
 * @returns {Object} Permission matrix for role
 */
const getRolePermissions = (role) => {
  if (!role) {
    return null;
  }

  role = role.toLowerCase();

  if (!PERMISSIONS[role]) {
    return null;
  }

  return { ...PERMISSIONS[role] };
};

/**
 * Checks if role has any access to resource
 * @param {string} role - User role
 * @param {string} resource - Resource name
 * @returns {boolean} True if any access is allowed
 */
const hasResourceAccess = (role, resource) => {
  if (!role || !resource) {
    return false;
  }

  role = role.toLowerCase();
  resource = resource.toLowerCase();

  if (!PERMISSIONS[role] || !PERMISSIONS[role][resource]) {
    return false;
  }

  return PERMISSIONS[role][resource].length > 0;
};

// --- Tests ---
import { describe, it, expect } from 'vitest';

describe('Access Control System', () => {
  describe('canAccess()', () => {
    describe('Admin permissions', () => {
      it('should allow all actions on all resources', () => {
        expect(canAccess('admin', 'users', 'create')).toBe(true);
        expect(canAccess('admin', 'users', 'delete')).toBe(true);
        expect(canAccess('admin', 'posts', 'update')).toBe(true);
        expect(canAccess('admin', 'settings', 'read')).toBe(true);
      });
    });

    describe('Editor permissions', () => {
      it('should allow CRUD on posts and comments', () => {
        expect(canAccess('editor', 'posts', 'create')).toBe(true);
        expect(canAccess('editor', 'posts', 'delete')).toBe(true);
        expect(canAccess('editor', 'comments', 'update')).toBe(true);
      });

      it('should allow read on users', () => {
        expect(canAccess('editor', 'users', 'read')).toBe(true);
      });

      it('should deny write on users', () => {
        expect(canAccess('editor', 'users', 'create')).toBe(false);
        expect(canAccess('editor', 'users', 'delete')).toBe(false);
      });

      it('should deny all access to settings', () => {
        expect(canAccess('editor', 'settings', 'read')).toBe(false);
        expect(canAccess('editor', 'settings', 'update')).toBe(false);
      });
    });

    describe('Viewer permissions', () => {
      it('should allow read on all resources', () => {
        expect(canAccess('viewer', 'users', 'read')).toBe(true);
        expect(canAccess('viewer', 'posts', 'read')).toBe(true);
        expect(canAccess('viewer', 'comments', 'read')).toBe(true);
        expect(canAccess('viewer', 'settings', 'read')).toBe(true);
      });

      it('should deny all write operations', () => {
        expect(canAccess('viewer', 'posts', 'create')).toBe(false);
        expect(canAccess('viewer', 'users', 'update')).toBe(false);
        expect(canAccess('viewer', 'comments', 'delete')).toBe(false);
      });
    });

    describe('Guest permissions', () => {
      it('should allow read on posts and comments only', () => {
        expect(canAccess('guest', 'posts', 'read')).toBe(true);
        expect(canAccess('guest', 'comments', 'read')).toBe(true);
      });

      it('should deny access to users', () => {
        expect(canAccess('guest', 'users', 'read')).toBe(false);
      });

      it('should deny all write operations', () => {
        expect(canAccess('guest', 'posts', 'create')).toBe(false);
        expect(canAccess('guest', 'comments', 'update')).toBe(false);
      });
    });

    describe('Edge cases', () => {
      it('should handle case-insensitive inputs', () => {
        expect(canAccess('ADMIN', 'USERS', 'DELETE')).toBe(true);
        expect(canAccess('Editor', 'Posts', 'Create')).toBe(true);
      });

      it('should deny unknown roles', () => {
        expect(canAccess('superuser', 'users', 'read')).toBe(false);
        expect(canAccess('moderator', 'posts', 'delete')).toBe(false);
      });

      it('should deny unknown resources', () => {
        expect(canAccess('admin', 'database', 'read')).toBe(false);
      });

      it('should deny unknown actions', () => {
        expect(canAccess('admin', 'users', 'execute')).toBe(false);
      });

      it('should handle null/undefined inputs', () => {
        expect(canAccess(null, 'users', 'read')).toBe(false);
        expect(canAccess('admin', null, 'read')).toBe(false);
        expect(canAccess('admin', 'users', null)).toBe(false);
      });
    });
  });

  describe('getRolePermissions()', () => {
    it('should return all permissions for admin', () => {
      const perms = getRolePermissions('admin');
      expect(perms.users).toContain('delete');
      expect(perms.settings).toContain('create');
    });

    it('should return limited permissions for guest', () => {
      const perms = getRolePermissions('guest');
      expect(perms.posts).toEqual(['read']);
      expect(perms.users).toEqual([]);
    });

    it('should return null for unknown role', () => {
      expect(getRolePermissions('unknown')).toBeNull();
    });
  });

  describe('hasResourceAccess()', () => {
    it('should return true if role has any access', () => {
      expect(hasResourceAccess('guest', 'posts')).toBe(true);
      expect(hasResourceAccess('editor', 'users')).toBe(true);
    });

    it('should return false if role has no access', () => {
      expect(hasResourceAccess('guest', 'users')).toBe(false);
      expect(hasResourceAccess('editor', 'settings')).toBe(false);
    });
  });
});

export { canAccess, getRolePermissions, hasResourceAccess };
