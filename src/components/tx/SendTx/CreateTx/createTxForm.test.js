import React from 'react';
import { shallow } from 'enzyme';
import BigNumber from 'bignumber.js';
import TokenUnits from 'lib/tokenUnits';
import { Currency } from 'lib/currency';
import { CreateTxForm } from './createTxForm';

const mockMuiTheme = {
  palette: {},
};

test('It shows tx value in fiat', () => {
  const tokenValue = new TokenUnits(new BigNumber(123456789), 8);
  const fiatRate = 1.5;
  const fiatValue = tokenValue.convert(fiatRate, 8);
  const fiatText = Currency.format(fiatValue, 'usd');
  const balance = {
    symbol: 'WEB',
    value: tokenValue,
  };

  const component = shallow(<CreateTxForm
    muiTheme={mockMuiTheme}
    showFiat={ true }
    fiatRate={ fiatRate }
    fiatCurrency="usd"
    balance={ balance }
    value='1.23456789'
    accounts={ [] }
    addressBook={ [] }
    tokens={ [] }
  />);

  expect(component.findWhere((n) => n.text() === fiatText)).toHaveLength(2);
});
