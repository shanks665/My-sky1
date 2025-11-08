/**
 * User Model Tests
 * @format
 */

import { User, UserCredentials, UserRegistration, UserDistance } from '../../src/models/User';

describe('User Model', () => {
  describe('User Interface', () => {
    it('validates complete user object structure', () => {
      const user: User = {
        id: 'user123',
        nickname: 'Test User',
        email: 'test@example.com',
        phoneNumber: '090-1234-5678',
        gender: 'male',
        prefecture: 'tokyo',
        city: 'shibuya',
        location: {
          latitude: 35.6812,
          longitude: 139.7671,
          address: 'Tokyo, Japan',
          privacyLevel: 'public',
        },
        profilePhoto: 'https://example.com/photo.jpg',
        coverPhoto: 'https://example.com/cover.jpg',
        bio: 'Test bio',
        createdAt: new Date(),
        lastActive: new Date(),
        following: ['user1', 'user2'],
        followers: ['user3', 'user4'],
        circles: ['circle1', 'circle2'],
        blockedUsers: ['blocked1'],
        accountPrivacy: 'public',
        pendingFollowers: ['pending1'],
      };

      expect(user.id).toBe('user123');
      expect(user.nickname).toBe('Test User');
      expect(user.location.privacyLevel).toBe('public');
      expect(user.accountPrivacy).toBe('public');
    });

    it('validates minimal user object', () => {
      const minimalUser: User = {
        id: 'user123',
        nickname: 'Test User',
        email: 'test@example.com',
        location: {
          latitude: 35.6812,
          longitude: 139.7671,
          privacyLevel: 'private',
        },
        profilePhoto: '',
        createdAt: new Date(),
        lastActive: new Date(),
        following: [],
        followers: [],
        circles: [],
        blockedUsers: [],
        accountPrivacy: 'private',
      };

      expect(minimalUser.id).toBeDefined();
      expect(minimalUser.location.privacyLevel).toBe('private');
    });

    it('validates privacy level options', () => {
      const privacyLevels: Array<'public' | 'followers' | 'private'> = [
        'public',
        'followers',
        'private',
      ];

      privacyLevels.forEach(level => {
        const user: User = {
          id: 'user123',
          nickname: 'Test',
          email: 'test@example.com',
          location: {
            latitude: 35.6812,
            longitude: 139.7671,
            privacyLevel: level,
          },
          profilePhoto: '',
          createdAt: new Date(),
          lastActive: new Date(),
          following: [],
          followers: [],
          circles: [],
          blockedUsers: [],
          accountPrivacy: 'public',
        };

        expect(user.location.privacyLevel).toBe(level);
      });
    });

    it('validates account privacy options', () => {
      const accountPrivacyOptions: Array<'public' | 'private'> = ['public', 'private'];

      accountPrivacyOptions.forEach(privacy => {
        const user: User = {
          id: 'user123',
          nickname: 'Test',
          email: 'test@example.com',
          location: {
            latitude: 35.6812,
            longitude: 139.7671,
            privacyLevel: 'private',
          },
          profilePhoto: '',
          createdAt: new Date(),
          lastActive: new Date(),
          following: [],
          followers: [],
          circles: [],
          blockedUsers: [],
          accountPrivacy: privacy,
        };

        expect(user.accountPrivacy).toBe(privacy);
      });
    });
  });

  describe('UserCredentials Interface', () => {
    it('validates user credentials structure', () => {
      const credentials: UserCredentials = {
        email: 'test@example.com',
        password: 'password123',
      };

      expect(credentials.email).toBe('test@example.com');
      expect(credentials.password).toBe('password123');
    });
  });

  describe('UserRegistration Interface', () => {
    it('validates user registration structure', () => {
      const registration: UserRegistration = {
        email: 'test@example.com',
        password: 'password123',
        nickname: 'Test User',
        phoneNumber: '090-1234-5678',
        gender: 'male',
        prefecture: 'tokyo',
      };

      expect(registration.email).toBe('test@example.com');
      expect(registration.nickname).toBe('Test User');
      expect(registration.phoneNumber).toBe('090-1234-5678');
    });

    it('validates minimal registration structure', () => {
      const registration: UserRegistration = {
        email: 'test@example.com',
        password: 'password123',
        nickname: 'Test User',
      };

      expect(registration.email).toBe('test@example.com');
      expect(registration.nickname).toBe('Test User');
    });
  });

  describe('UserDistance Interface', () => {
    it('validates user distance structure', () => {
      const userDistance: UserDistance = {
        userId: 'user123',
        distance: '1.2km',
        numericDistance: 1200,
      };

      expect(userDistance.userId).toBe('user123');
      expect(userDistance.distance).toBe('1.2km');
      expect(userDistance.numericDistance).toBe(1200);
    });

    it('handles different distance formats', () => {
      const distances: UserDistance[] = [
        { userId: 'user1', distance: '500m', numericDistance: 500 },
        { userId: 'user2', distance: '1.5km', numericDistance: 1500 },
        { userId: 'user3', distance: '10km', numericDistance: 10000 },
      ];

      distances.forEach(dist => {
        expect(dist.numericDistance).toBeGreaterThan(0);
        expect(dist.distance).toBeDefined();
      });
    });
  });
});
