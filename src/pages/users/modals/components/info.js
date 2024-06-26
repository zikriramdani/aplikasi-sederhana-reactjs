import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function Info(props) {
  const {
    isDisabledUsername,
    isDisabled,
    valImages,
    valUsername = '',
    valName = '',
    valEmail = '',
    valPhone = '',
    valWebsite = '',
    onChange,
    errors = {}
  } = props;

  return (
    <Fragment>
      <div className="d-flex justify-content-center">
        <div>
          <img
            src={valImages}
            className="rounded-circle"
            style={{ width: '100px' }}
            alt={valName}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-4">
          <div className="mb-3">
            <label className="col-form-label">
              Username<span className="text-danger">*</span>
            </label>
            <input
              onChange={onChange}
              type="text"
              className="form-control"
              name="username"
              value={valUsername}
              disabled={isDisabledUsername}
              required
            />
            {errors.username && (
              <div className="invalid-feedback" style={{ display: 'block' }}>
                {errors.username}
              </div>
            )}
          </div>
        </div>
        <div className="col-12 col-sm-4">
          <div className="mb-3">
            <label className="col-form-label">
              Name<span className="text-danger">*</span>
            </label>
            <input
              onChange={onChange}
              type="text"
              className="form-control"
              name="name"
              value={valName}
              disabled={isDisabled}
              required
            />
            {errors.name && (
              <div className="invalid-feedback" style={{ display: 'block' }}>
                {errors.name}
              </div>
            )}
          </div>
        </div>
        <div className="col-12 col-sm-4">
          <div className="mb-3">
            <label className="col-form-label">
              Email<span className="text-danger">*</span>
            </label>
            <input
              onChange={onChange}
              type="email"
              className="form-control"
              name="email"
              value={valEmail}
              disabled={isDisabled}
              required
            />
            {errors.email && (
              <div className="invalid-feedback" style={{ display: 'block' }}>
                {errors.email}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-4">
          <div className="mb-3">
            <label className="col-form-label">Phone</label>
            <input
              onChange={onChange}
              type="tel"
              className="form-control"
              name="phone"
              value={valPhone}
              disabled={isDisabled}
            />
          </div>
        </div>
        <div className="col-12 col-sm-4">
          <div className="mb-3">
            <label className="col-form-label">Website</label>
            <input
              onChange={onChange}
              type="url"
              className="form-control"
              name="website"
              value={valWebsite}
              disabled={isDisabled}
            />
            {errors.website && (
              <div className="invalid-feedback" style={{ display: 'block' }}>
                {errors.website}
              </div>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

// Define prop types
Info.propTypes = {
  isDisabledUsername: PropTypes.any,
  isDisabled: PropTypes.any,
  valImages: PropTypes.any,
  valUsername: PropTypes.any,
  valName: PropTypes.any,
  valEmail: PropTypes.any,
  valPhone: PropTypes.any,
  valWebsite: PropTypes.any,
  onChange: PropTypes.any,
  errors: PropTypes.any
};

export default Info;
