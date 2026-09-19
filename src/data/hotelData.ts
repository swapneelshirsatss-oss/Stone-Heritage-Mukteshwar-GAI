/**
 * Stone Heritage Mukteshwar — Centralized Property Data Hub
 * 
 * Source of truth for property identity, room inventory, operational policies,
 * contact channels, amenities, and sister property networks.
 * Adheres strictly to .agents/AGENTS.md rules & hospitality-direct-booking-cro standards.
 * Synchronized with src/types.ts and src/data.ts.
 */

import type {
  Room,
  RoomOption,
  AmenityFeature,
  SisterProperty,
  Attraction,
  LocalExperience,
  PropertyDetails,
  ContactDetails,
  OperationalPolicies,
  FeaturedRoom
} from '../types';

export type {
  Room,
  RoomOption,
  AmenityFeature,
  SisterProperty,
  Attraction,
  LocalExperience,
  PropertyDetails,
  ContactDetails,
  OperationalPolicies,
  FeaturedRoom
};

import {
  propertyDetails,
  contactDetails,
  operationalPolicies,
  rooms,
  featuredRooms,
  propertyAmenities,
  sisterProperties,
  nearbyAttractions,
  getWhatsAppBookingUrl,
  getRoomBySlug,
  getRoomByName,
  RESORT_CONTACT,
  PROPERTY_CONTACT,
  ROOMS_INVENTORY,
  ROOM_OPTIONS,
  FEATURED_ROOMS,
  GENERAL_AMENITIES,
  AMENITY_CATEGORIES,
  PROPERTY_SERVICES,
  RESORT_SERVICES,
  LOCAL_EXPERIENCES,
  NEARBY_ATTRACTIONS,
  TESTIMONIALS,
  testimonials,
  FAQS,
  CONTACT_FAQS,
  generateWhatsAppLink
} from '../data';

export {
  propertyDetails,
  contactDetails,
  operationalPolicies,
  rooms,
  featuredRooms,
  propertyAmenities,
  sisterProperties,
  nearbyAttractions,
  getWhatsAppBookingUrl,
  getRoomBySlug,
  getRoomByName,
  RESORT_CONTACT,
  PROPERTY_CONTACT,
  ROOMS_INVENTORY,
  ROOM_OPTIONS,
  FEATURED_ROOMS,
  GENERAL_AMENITIES,
  AMENITY_CATEGORIES,
  PROPERTY_SERVICES,
  RESORT_SERVICES,
  LOCAL_EXPERIENCES,
  NEARBY_ATTRACTIONS,
  TESTIMONIALS,
  testimonials,
  FAQS,
  CONTACT_FAQS,
  generateWhatsAppLink
};

export default {
  propertyDetails,
  contactDetails,
  operationalPolicies,
  rooms,
  featuredRooms,
  propertyAmenities,
  sisterProperties,
  nearbyAttractions,
  getWhatsAppBookingUrl,
  getRoomBySlug,
  getRoomByName
};
