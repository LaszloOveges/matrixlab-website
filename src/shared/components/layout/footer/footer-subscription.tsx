import React, { Fragment, ReactElement, useState } from 'react';
import { ButtonBase, InputUnstyled } from '@mui/material';

import * as ga from '../../../lib/google-analytics';
import Translation from '../../../data/translation';
import { animSlideUp } from '../../../config/anim';

export interface MlFooterSubscriptionProps { }
export interface MlSubscriptionProps {
  contact : {
    email: string;
  };
}

const API_URL = `/api/subscribe`;
const API_METHOD = `POST`;

function MlFooterSubscription({
  ...props
}: MlFooterSubscriptionProps): ReactElement {

  const [ subscribed, setSubscribed ] = useState(false);
  const [ touched, setTouched ] = useState(false);
  const [ errors, setErrors ] = useState({
    emptyEmail: false,
    invalidEmail: false,
  });
  const [ data, setData ] = useState({
    contact: { 
      email: ``,
    },
  } as MlSubscriptionProps);

  React.useEffect(() => {
    if (touched) checkData();
  }, [data]);

  const checkData = (): boolean => {
    const emailPattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    const isEmailNotEmpty = !!data.contact.email && data.contact.email !== ``;
    const isEmailValid = emailPattern.test(data.contact.email);
    setErrors(prevState => ({
      ...prevState,
      emptyEmail: !isEmailNotEmpty,
      invalidEmail: !isEmailValid,
    }));
    return isEmailNotEmpty && isEmailValid;
  }
  const changeData = (email: string) => {
    setData({
      contact: {
        email,
      },
    });
  }
  const subscribe = () => {
    ga.event(`subscribe`, {event_category: `clicked`});
    setTouched(true);
    if (checkData()) {
      postData();
    }
  }
  const postData = async () => {
    ga.event(`subscribe`, {event_category: `sent`});
    fetch(API_URL, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: API_METHOD,
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          setSubscribed(true);
          ga.event(`subscribe`, {event_category: `success`});
        } else {
          console.info(response.status)
        }
      })
      .catch((err) => console.info(err));
  };
  
  return (
    <Fragment>
      <div className='ml-footer-subscription' {...animSlideUp()}>
        <h3 className='ml-footer-subscription__title'>
          {Translation.en.footer.joinCommunity}
        </h3>
        <div className='ml-footer-subscription__form'>
          {subscribed ?
            <Fragment>
              <span className='ml-footer-subscription__subscribed ml-typo--highlight'>
                {Translation.en.common.subscribed} - {data.contact?.email}
              </span>
            </Fragment>
          :
            <Fragment>
              <ul className='ml-footer-subscription__error'>
                {errors.emptyEmail ?
                  <li className='ml-footer-subscription__error__item'>{Translation.en.error.emptyEmail}</li>
                : errors.invalidEmail && 
                  <li className='ml-footer-subscription__error__item'>{Translation.en.error.invalidEmail}</li>
                }
              </ul>
              <InputUnstyled
                type='email' 
                className='ml-input ml-footer-subscription__input' 
                aria-label={Translation.en.footer.emailPlaceholder}
                placeholder={Translation.en.footer.emailPlaceholder}
                value={data.contact?.email}
                onChange={(e) => changeData(e.target.value)}
                required 
              />
              <ButtonBase 
                className='ml-button ml-button--alt ml-button--small ml-footer-subscription__action' 
                children={Translation.en.common.subscribe}
                onClick={subscribe}
              />
            </Fragment>
          }
        </div>
      </div>
    </Fragment>
  );
}

export default MlFooterSubscription;
