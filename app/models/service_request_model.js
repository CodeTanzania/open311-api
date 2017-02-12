'use strict';


/**
 * @module ServiceRequest
 * @name ServiceRequest
 * @description An issue(or service request) reported by civilian 
 *              e.g Water Leakage occur at a particular area
 *              
 * @author lally elias <lallyelias87@mail.com>
 * @since 0.1.0
 * @version 0.1.0
 * @public
 */


//TODO make service request to support call log in a call center
//TODO migrate location to use GeoJSON schema
//TODO obtain geo-data from jurisdiction if not available(or set)


//dependencies
const path = require('path');
const _ = require('lodash');
const async = require('async');
const mongoose = require('mongoose');
const shortid = require('shortid');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const MediaSchema = require(path.join(__dirname, 'schemas', 'media_schema'));


/**
 * @name ServiceRequestSchema
 * @type {Schema}
 * @since 0.1.0
 * @version 0.1.0
 * @private
 */
const ServiceRequestSchema = new Schema({

  /**
   * @name jurisdiction
   * @description A jurisdiction responsible in handling service 
   *              request(issue)
   *               
   * @type {Object}
   * @see {@link Jurisdiction}
   * @private
   * @since 0.1.0
   * @version 0.1.0
   */
  jurisdiction: {
    type: ObjectId,
    ref: 'Jurisdiction',
    autoset: true,
    required: true,
    index: true,
    exists: true,
    autopopulate: {
      select: 'code name domain'
    }
  },


  /**
   * @name service
   * @description A service undewhich request(issue) belongs to
   * @type {Object}
   * @see {@link Service}
   * @private
   * @since 0.1.0
   * @version 0.1.0
   */
  service: {
    type: ObjectId,
    ref: 'Service',
    required: true,
    index: true,
    autoset: true,
    exists: true,
    autopopulate: {
      select: 'code name color group'
    }
  },


  /**
   * @name reporter
   * @description A party i.e civilian, customer etc which reported an 
   *              issue(service request)
   * @type {Object}
   * @see {@link Party}
   * @private
   * @since 0.1.0
   * @version 0.1.0
   */
  reporter: {
    /**
     * @name name
     * @description Full name name of the reporter.
     * @type {Object}
     * @private
     * @since 0.1.0
     * @version 0.1.0
     */
    name: {
      type: String,
      index: true,
      searchable: true
    },


    /**
     * @name phone
     * @description A mobile phone number of the reporter.
     * @type {Object}
     * @private
     * @since 0.1.0
     * @version 0.1.0
     */
    phone: {
      type: String,
      index: true,
      searchable: true
    },


    /**
     * @name email
     * @description An email address of the reporter.
     * @type {Object}
     * @private
     * @since 0.1.0
     * @version 0.1.0
     */
    email: {
      type: String,
      index: true,
      searchable: true
    },


    /**
     * @name account
     * @description A jurisdiction internal associated account id of the 
     *              party submitting the request(issue).
     *
     *              This help a jurisdiction to link a reporter with the 
     *              internal CRM.
     *
     *              When account id is available a reporter will be treated as
     *              a customer and not a normal civilian.
     *              
     * @type {Object}
     * @private
     * @since 0.1.0
     * @version 0.1.0
     */
    account: {
      type: String,
      index: true,
      searchable: true
    }
  },


  /**
   * @name operator
   * @description A party oversee the work on the service request(issue). 
   *              
   *              It also a party that is answerable for the progress and 
   *              status of the service request(issue) to a reporter.
   *              
   * @type {Object}
   * @see {@link Party}
   * @private
   * @since 0.1.0
   * @version 0.1.0
   */
  operator: {
    type: ObjectId,
    ref: 'Party',
    index: true,
    autoset: true,
    exists: true,
    autopopulate: {
      select: 'name email phone'
    }
  },


  /**
   * @name assignee
   * @description A party assigned to work on the service request(issue). 
   *              
   *              It also a party that is answerable for the progress and 
   *              status of the service request(issue).
   *              
   * @type {Object}
   * @see {@link Party}
   * @private
   * @since 0.1.0
   * @version 0.1.0
   */
  assignee: {
    type: ObjectId,
    ref: 'Party',
    index: true,
    autoset: true,
    exists: true,
    autopopulate: {
      select: 'name email phone'
    }
  },


  /**
   * @name code
   * @description A unique human readable identifier of the 
   *              service request(issue). 
   *              
   *              It mainly used by reporter to query for status and 
   *              progress of the reported issue
   *              
   * @type {Object}
   * @private
   * @since 0.1.0
   * @version 0.1.0
   */
  code: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    uppercase: true,
    searchable: true
  },


  /**
   * @name description
   * @description A detailed human readable explanation about the 
   *              service request(issue)
   *               
   * @type {Object}
   * @private
   * @since 0.1.0
   * @version 0.1.0
   */
  description: {
    type: String,
    index: true,
    trim: true,
    required: true,
    searchable: true
  },


  /**
   * @name address
   * @description A human entered address or description of location 
   *              where service request(issue) happened.
   *              
   * @type {Object}
   * @private
   * @since 0.1.0
   * @version 0.1.0
   */
  address: {
    type: String,
    trim: true,
    index: true,
    searchable: true
  },


  /**
   * @name location
   * @description A longitude and latitude pair of the location of a 
   *              service request(issue).
   *
   *             The order of adding longitude and latitude in the array must 
   *             be <longitude> , <latitude> and not otherwise.
   *
   *              
   * @type {Object}
   * @see  {@link https://docs.mongodb.com/manual/applications/geospatial-indexes/}
   * @see {@link https://docs.mongodb.com/manual/reference/operator/query-geospatial/}
   * @private
   * @since 0.1.0
   * @version 0.1.0
   */
  location: {
    type: [Number],
    index: '2dsphere'
  },


  /**
   * @name status
   * @description A current status of the service request(issue)
   * @type {Object}
   * @private
   * @since 0.1.0
   * @version 0.1.0
   */
  status: {
    type: ObjectId,
    ref: 'Status',
    autoset: true,
    exists: true,
    index: true,
    autopopulate: true
  },


  /**
   * @name priority
   * @description A priority of the service request(issue). 
   *              
   *              It used to weight a service request(issue) relative 
   *              to other(s).
   *              
   * @type {Object}
   * @private
   * @since 0.1.0
   * @version 0.1.0
   */
  priority: {
    type: ObjectId,
    ref: 'Priority',
    autoset: true,
    exists: true,
    index: true,
    autopopulate: true
  },


  /**
   * @name attachments
   * @description Associated file(s) with service request(issue)
   * @type {Array}
   * @see {@link Media}
   * @private
   * @since 0.1.0
   * @version 0.1.0
   */
  attachments: {
    type: [MediaSchema],
    index: true
  },


  /**
   * @name comments
   * @description Associated comment(s) with service request(issue)
   * @type {Array}
   * @see {@link Comment}
   * @private
   * @since 0.1.0
   * @version 0.1.0
   */


  /**
   * @name resolvedAt
   * @description A time when the issue was resolved
   * @type {Object}
   * @private
   * @since 0.1.0
   * @version 0.1.0
   */
  resolvedAt: {
    type: Date,
    index: true
  }

}, { timestamps: true });


//-----------------------------------------------------------------------------
// ServiceRequestSchema Virtuals
//-----------------------------------------------------------------------------


/**
 * @name longitude
 * @description obtain service request(issue) longitude
 * @type {Number}
 * @since 0.1.0
 * @version 0.1.0
 */
ServiceRequestSchema.virtual('longitude').get(function () {
  return this.location ? this.location[0] : null;
});


/**
 * @name latitude
 * @description obtain service request(issue) latitude
 * @type {Number}
 * @since 0.1.0
 * @version 0.1.0
 */
ServiceRequestSchema.virtual('latitude').get(function () {
  return this.location ? this.location[1] : null;
});


//-----------------------------------------------------------------------------
// ServiceRequestSchema Hooks
//-----------------------------------------------------------------------------

ServiceRequestSchema.pre('validate', function (next) {

  //set service request code
  //TODO update code algorithm to use daily rotate increments
  if (_.isEmpty(this.code)) {
    this.code = [
        shortid.generate(),
        shortid.generate()
      ].join('')
      .replace(/-|_/g, '')
      .substr(0, 8)
      .toUpperCase();
  }

  //ensure jurisdiction from service
  const jurisdiction = _.get(this.service, 'jurisdiction');
  if (!this.jurisdiction && _.get(this.service, 'jurisdiction')) {
    this.jurisdiction = jurisdiction;
  }

  //set default status & priority if not set
  if (!this.status || !this.priority) {
    async.parallel({
      status: function findDefaultStatus(then) {
        const Status = mongoose.model('Status');
        Status.findDefault(then);
      },
      priority: function findDefaultPriority(then) {
        const Priority = mongoose.model('Priority');
        Priority.findDefault(then);
      }
    }, function (error, result) {
      if (error) {
        next(error);
      } else {
        this.status = (this.status || result.status || undefined);
        this.priority = (this.priority || result.priority || undefined);
        next();
      }
    }.bind(this));

  }

  //continue
  else {
    next();
  }

});


ServiceRequestSchema.post('save', function (doc, next) {
  //TODO notify CRM to update details based on the account id
  //TODO send(queue) notification
  //TODO send service request code to reporte(sms or email)
  next();
});


//-----------------------------------------------------------------------------
// ServiceRequestSchema Static Properties & Methods
//-----------------------------------------------------------------------------


//TODO use aggregation
//TODO use status and priority model
ServiceRequestSchema.statics.summary = function (done) {
  // count by services
  const Service = mongoose.model('Service');
  const ServiceRequest = mongoose.model('ServiceRequest');
  async.parallel({
    services: function (next) {
      Service
        .find({})
        .exec(function (error, services) {
          if (error) {
            done(null, {});
          } else {
            const works = {};
            _.forEach(services, function (service) {
              works[service._id] = function (then) {
                ServiceRequest.count({ service: service._id },
                  then);
              };
            });
            async.parallel(works, next);
          }
        });
    },

    statuses: function (next) {
      const statuses = [{
        name: 'Open',
        weight: -5,
        color: '#0D47A1'
      }, {
        name: 'In Progress',
        weight: 0,
        color: '#F9A825'
      }, {
        name: 'Pending',
        weight: 5,
        color: '#9C27B0'
      }, {
        name: 'Closed',
        weight: 10,
        color: '#1B5E20'
      }];

      const works = {};
      _.forEach(statuses, function (status) {
        works[status.name] = function (then) {
          ServiceRequest
            .count({ 'status.name': status.name }, then);
        };
      });
      async.parallel(works, next);
    }
  }, done);
  // count by status
};


/**
 * @name ServiceRequest
 * @description register ServiceRequestSchema and initialize ServiceRequest
 *              model
 * @type {Model}
 * @since 0.1.0
 * @version 0.1.0
 * @public
 */
module.exports = mongoose.model('ServiceRequest', ServiceRequestSchema);
