import colors from "../../shared/colors";

var bsObj = {
  token: "063aa4c383a5955345ff4e2223d4611f4b95420f7f06ba8f81a8d9853c94baf4_",
  onFieldEventHandler: {
    onFocus: function (tagId: string) {},
    onBlur: function (tagId: string) {},
    onError: function (tagId: string, errorCode: string) {
      console.error('error', errorCode)
    },

    onType: function (tagId: string, cardType: string) {},
    onEnter: function(tagId: string) {},

    onValid: function (tagId: string) {}
  },
  style: {
    input: {
      'font-family': 'sans-serif',
      'font-style': 'normal',
      'font-weight': 500,
      'font-size': '16px',
      'line-height': '20px',
      color: colors.textPrimaryLight
    }
  },
  ccnPlaceHolder: "Card Number: 1234 5678 9012 3456",
  cvvPlaceHolder: "Security Code: 123",
  expPlaceHolder: "Expiration Date: MM/YY",
}

const initiateHostedFields = () => {
  // @ts-ignore
  bluesnap.hostedPaymentFieldsCreate(bsObj);
}
export default initiateHostedFields