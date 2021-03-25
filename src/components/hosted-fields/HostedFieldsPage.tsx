import './hosted-fields-page.scss'
import { Form } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import initiateHostedFields from './inititateHostedFields'
import React, { useEffect } from 'react';
import HostedField from './HostedField';
import { ReactComponent as CardIcon } from '../../shared/assets/card.svg';
import { ReactComponent as LockIcon } from '../../shared/assets/lock.svg';
import { Button } from '../../shared/components/Buttons';
import styled from 'styled-components';
import colors from '../../shared/colors';
import * as typography from '../../shared/typography';


const Header = styled.h2`
  ${typography.headline2}
  color: ${colors.textPrimaryLight};
  margin-bottom: 32px;
  text-transform: capitalize;
`;

const PayButton = styled(Button)`
  background: linear-gradient(90deg, #397BFB 0%, #D171FE 100%);
  border: none;
  outline: none;
  color: ${colors.textPrimaryLight};
  width: 100%;
`;

export const HostedFieldsPage = () => {
  useEffect(() => {
    initiateHostedFields()
  }, [])


  function submitFields(){
    // @ts-ignore
    bluesnap.hostedPaymentFieldsSubmitData( (callback: any) => {
        if (null != callback.cardData) {
          var fraudSessionId = callback.transactionFraudInfo.fraudSessionId;

          console.log('card type: ' + callback.cardData.ccType +
            ', last 4 digits: ' + callback.cardData.last4Digits +
            ', exp: ' + callback.cardData.exp +
            ', issuing Country: ' + callback.cardData.issuingCountry +
            ', isRegulatedCard: ' + callback.cardData.isRegulatedCard +
            ', cardSubType: ' + callback.cardData.cardSubType +
            ', binCategory: ' + callback.cardData.binCategory +
            ', ccBin: ' + callback.cardData.ccBin +
            ' and fraudSessionId: ' + fraudSessionId +
            ', after that I can call final submit');
          // submit the form 
        } else {
            var errorArray: {tagId: string, errorCode: string, errorDescription: string}[] = callback.error;
            for (let i in errorArray) {
                console.log("Received error: tagId= " +
                errorArray[i].tagId + ", errorCode= " +
                errorArray[i].errorCode + ", errorDescription= " +
                errorArray[i].errorDescription);
            }
        }
    });
  }

  return (
    <>
      <Header> product to buy... </Header>
      <Form className="hosted-fields-page">
        <FormItem>
          <HostedField id="card-number" dataBluesnap="ccn" icon={CardIcon}/>
        </FormItem>
        <FormItem>
          <HostedField id="expiration-date" dataBluesnap="exp" icon={CardIcon}/>
        </FormItem>
        <FormItem>
          <HostedField id="security-code" dataBluesnap="cvv" icon={LockIcon}/>
        </FormItem>
        <PayButton onClick={submitFields}> Pay Now </PayButton>
      </Form>
    </>
  )
}
