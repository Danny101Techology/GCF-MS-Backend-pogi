'use strict';

/**
 * room-code service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::room-code.room-code');
