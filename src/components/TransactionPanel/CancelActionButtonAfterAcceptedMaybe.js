import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { SecondaryButton } from '../../components';
import { bool, func } from 'prop-types';

import css from './TransactionPanel.css';

// Functional component as a helper to build ActionButtons for
// provider when state is preauthorized
const CancelActionButtonAfterAcceptedMaybe = props => {
  const {
    className,
    rootClassName,
    showButtons,
    cancelInProgress,
    cancelSaleError,
    onCancelSaleAfterAcceptedByCustomer,
    onCancelSaleAfterAcceptedByProvider,
    isCustomerOrProvider,
  } = props;

  const buttonsDisabled = cancelInProgress;

  const cancelErrorMessage = cancelSaleError ? (
    <p className={css.actionError}>
      <FormattedMessage id="TransactionPanel.cancelSaleFailed" />
    </p>
  ) : null;

  const classes = classNames(rootClassName || css.actionButtons, className);

  return showButtons ? (
    <div className={classes}>
      <div className={css.actionErrors}>
        {cancelErrorMessage}
      </div>
      <div className={css.actionButtonWrapper}>
        <SecondaryButton
          inProgress={cancelInProgress}
          disabled={buttonsDisabled}
          onClick={isCustomerOrProvider ? onCancelSaleAfterAcceptedByCustomer : onCancelSaleAfterAcceptedByProvider}
        >
          <FormattedMessage id="TransactionPanel.cancelButton" />
        </SecondaryButton>
      </div>
    </div>
  ) : null;
};

CancelActionButtonAfterAcceptedMaybe.defaultProps = {
  showButtons: null,
  cancelInProgress: null,
  cancelSaleError: null,
  onCancelSaleAfterAcceptedByCustomer: null,
  onCancelSaleAfterAcceptedByProvider: null,
  isCustomerOrProvider: null,
};

CancelActionButtonAfterAcceptedMaybe.propTypes = {
  showButtons: bool.isRequired,
  cancelInProgress: bool,
  cancelSaleError: bool,
  onCancelSaleAfterAcceptedByCustomer: func.isRequired,
  onCancelSaleAfterAcceptedByProvider: func.isRequired,
  isCustomerOrProvider: bool.isRequired,
};


export default CancelActionButtonAfterAcceptedMaybe;
