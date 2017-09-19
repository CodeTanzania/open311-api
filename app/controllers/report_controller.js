'use strict';

/**
 * Report Controller
 *
 * @description :: Server-side logic for managing report controller.
 */

//dependencies
const _ = require('lodash');
const csv = require('csv');
const moment = require('moment');
const mongoose = require('mongoose');
const ServiceRequest = mongoose.model('ServiceRequest');

module.exports = {

  /**
   * @name standings
   * @description handle standings request
   * @param  {HttpRequest} request  http request
   * @param  {HttpResponse} response http response
   * @since 0.1.0
   * @version 0.1.0
   * @public
   */
  standings: function (request, response, next) {
    //TODO pass request options(i.e query params to extras)
    //TODO support mongodb aggregation pipelines from request(express-mquery)
    const criteria = _.merge({}, (request.mquery || {}).query);

    ServiceRequest
      .standings(criteria, function (error, standings) {
        if (error) {
          error.status = 500;
          next(error);
        } else {
          response.ok(standings);
        }
      });
  },

  /**
   * @name overviews
   * @description handle overviews request
   * @param  {HttpRequest} request  http request
   * @param  {HttpResponse} response http response
   * @since 0.1.0
   * @version 0.1.0
   * @public
   */
  overviews: function (request, response, next) {
    //TODO pass request options(i.e query params to extras)
    //TODO support mongodb aggregation pipelines from request(express-mquery)
    const criteria = _.merge({}, (request.mquery || {}).query);

    ServiceRequest
      .overview(criteria, function (error, overviews) {
        if (error) {
          error.status = 500;
          next(error);
        } else {
          response.ok(overviews);
        }
      });
  },

  /**
   * @name exports
   * @description handle exports request
   * @param  {HttpRequest} request  http request
   * @param  {HttpResponse} response http response
   * @since 0.1.0
   * @version 0.1.0
   * @public
   */
  export: function (request, response /*, next*/ ) {

    //prepare criteria
    const criteria = _.merge({}, (request.mquery || {}).query);

    //prepare query cursor/stream
    const serviceRequests =
      ServiceRequest.find(criteria).sort({ createdAt: -1 }).cursor();

    //prepare file name
    const fileName = 'service_requests_exports_' + Date.now() + '.csv';

    // Set approrpiate download headers
    response.attachment(fileName);
    response.status(200);


    //stream service requests as csv
    serviceRequests
      .pipe(csv.transform(function (serviceRequest) {
        //TODO
        // Call Start Time Call End Time Call Duration(Minutes)  Call Duration(Seconds)  
        // Time Taken(days)  Time Taken(hrs) Time Taken(mins)  Time Taken(secs)
        return {
          'Ticket Number': serviceRequest.code,
          'Reported Date': moment(serviceRequest.createdAt).toISOString(),
          'Reporter Name': serviceRequest.reporter.name,
          'Reporter Phone': serviceRequest.reporter.phone,
          'Reporter Account': serviceRequest.reporter.account,
          'Operator': serviceRequest.operator.name,
          'Area': serviceRequest.jurisdiction.name,
          'Service Group': serviceRequest.group.name,
          'Service': serviceRequest.service.name,
          'Description': serviceRequest.description,
          'Address': serviceRequest.address,
          'Status': serviceRequest.status.name,
          'Priority': serviceRequest.priority.name,
          'Assignee': _.get(serviceRequest, 'assignee.name', ''),
          'Resolved Date': serviceRequest.resolvedAt ? moment(
            serviceRequest.resolvedAt).toISOString() : ''
        };

      }))
      .pipe(csv.stringify({ header: true }))
      .pipe(response);

  }

};
