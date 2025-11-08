/**
 * Event Model Tests
 * @format
 */

import { Event, EventCreation, ParticipationStatus } from '../../src/models/Event';

describe('Event Model', () => {
  describe('Event Interface', () => {
    it('validates complete event object structure', () => {
      const event: Event = {
        id: 'event123',
        title: 'Tokyo Tech Conference 2024',
        description: 'Annual technology conference in Tokyo',
        photos: [
          'https://example.com/photo1.jpg',
          'https://example.com/photo2.jpg',
        ],
        location: {
          latitude: 35.6812,
          longitude: 139.7671,
          address: 'Tokyo International Forum, Tokyo, Japan',
        },
        startDateTime: new Date('2024-06-01T10:00:00'),
        endDateTime: new Date('2024-06-01T18:00:00'),
        createdBy: 'user1',
        circle: 'circle123',
        participants: [
          { userId: 'user1', status: 'attending' },
          { userId: 'user2', status: 'maybe' },
          { userId: 'user3', status: 'declined' },
        ],
        maxParticipants: 100,
        createdAt: new Date('2024-01-01T00:00:00'),
        updatedAt: new Date('2024-01-15T12:00:00'),
      };

      expect(event.id).toBe('event123');
      expect(event.title).toBe('Tokyo Tech Conference 2024');
      expect(event.participants).toHaveLength(3);
      expect(event.maxParticipants).toBe(100);
      expect(event.circle).toBe('circle123');
    });

    it('validates minimal event object', () => {
      const event: Event = {
        id: 'event123',
        title: 'Simple Event',
        description: 'A simple event',
        photos: [],
        location: {
          latitude: 35.6812,
          longitude: 139.7671,
          address: 'Tokyo, Japan',
        },
        startDateTime: new Date('2024-06-01T10:00:00'),
        endDateTime: new Date('2024-06-01T12:00:00'),
        createdBy: 'user1',
        participants: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      expect(event.id).toBe('event123');
      expect(event.photos).toHaveLength(0);
      expect(event.participants).toHaveLength(0);
      expect(event.circle).toBeUndefined();
      expect(event.maxParticipants).toBeUndefined();
    });

    it('validates participant status types', () => {
      const statuses: ParticipationStatus[] = ['attending', 'maybe', 'declined'];

      statuses.forEach(status => {
        const event: Event = {
          id: 'event123',
          title: 'Test Event',
          description: 'Testing statuses',
          photos: [],
          location: {
            latitude: 35.6812,
            longitude: 139.7671,
            address: 'Tokyo, Japan',
          },
          startDateTime: new Date(),
          endDateTime: new Date(),
          createdBy: 'user1',
          participants: [{ userId: 'user1', status }],
          createdAt: new Date(),
          updatedAt: new Date(),
        };

        expect(event.participants[0].status).toBe(status);
      });
    });

    it('validates event without circle association', () => {
      const event: Event = {
        id: 'event123',
        title: 'Independent Event',
        description: 'Event not associated with any circle',
        photos: [],
        location: {
          latitude: 35.6812,
          longitude: 139.7671,
          address: 'Tokyo, Japan',
        },
        startDateTime: new Date(),
        endDateTime: new Date(),
        createdBy: 'user1',
        participants: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      expect(event.circle).toBeUndefined();
    });

    it('validates event with circle association', () => {
      const event: Event = {
        id: 'event123',
        title: 'Circle Event',
        description: 'Event associated with a circle',
        photos: [],
        location: {
          latitude: 35.6812,
          longitude: 139.7671,
          address: 'Tokyo, Japan',
        },
        startDateTime: new Date(),
        endDateTime: new Date(),
        createdBy: 'user1',
        circle: 'circle123',
        participants: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      expect(event.circle).toBe('circle123');
    });

    it('validates date ranges', () => {
      const startDate = new Date('2024-06-01T10:00:00');
      const endDate = new Date('2024-06-01T18:00:00');

      const event: Event = {
        id: 'event123',
        title: 'Timed Event',
        description: 'Event with specific start and end times',
        photos: [],
        location: {
          latitude: 35.6812,
          longitude: 139.7671,
          address: 'Tokyo, Japan',
        },
        startDateTime: startDate,
        endDateTime: endDate,
        createdBy: 'user1',
        participants: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      expect(event.endDateTime.getTime()).toBeGreaterThan(
        event.startDateTime.getTime()
      );
    });
  });

  describe('EventCreation Interface', () => {
    it('validates event creation structure', () => {
      const eventCreation: EventCreation = {
        title: 'New Event',
        description: 'Creating a new event',
        photos: ['https://example.com/photo.jpg'],
        location: {
          latitude: 35.6812,
          longitude: 139.7671,
          address: 'Tokyo, Japan',
        },
        startDateTime: new Date('2024-06-01T10:00:00'),
        endDateTime: new Date('2024-06-01T18:00:00'),
        circle: 'circle123',
        maxParticipants: 50,
      };

      expect(eventCreation.title).toBe('New Event');
      expect(eventCreation.circle).toBe('circle123');
      expect(eventCreation.maxParticipants).toBe(50);
    });

    it('validates minimal event creation', () => {
      const eventCreation: EventCreation = {
        title: 'Minimal Event',
        description: 'Minimal event info',
        photos: [],
        location: {
          latitude: 35.6812,
          longitude: 139.7671,
          address: 'Tokyo, Japan',
        },
        startDateTime: new Date(),
        endDateTime: new Date(),
      };

      expect(eventCreation.title).toBe('Minimal Event');
      expect(eventCreation.circle).toBeUndefined();
      expect(eventCreation.maxParticipants).toBeUndefined();
    });
  });

  describe('ParticipationStatus Type', () => {
    it('validates all participation status values', () => {
      const statuses: ParticipationStatus[] = ['attending', 'maybe', 'declined'];

      statuses.forEach(status => {
        expect(['attending', 'maybe', 'declined']).toContain(status);
      });
    });
  });
});
