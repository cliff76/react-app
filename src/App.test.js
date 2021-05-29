import { render, screen } from '@testing-library/react';
import App from './App';
import {Todos} from './Todos';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

describe('Our application',() => {
  it('Should render our Todos component', () => {
    const app = shallow(<App />);
    expect(app.find(Todos).length).toBeGreaterThanOrEqual(1)
  });
});
