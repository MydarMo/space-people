import {
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import { getPeople } from '../../../services/api';
import { Person } from '../../../interfaces/person';
import Overview from '../overview';

jest.mock('../../../services/api');

it('should render a list of Star Wars characters', async () => {
  const mockResults: Person[] = [{ name: 'Foo' }];

  (getPeople as jest.Mock).mockResolvedValue({
    results: mockResults,
  });

  render(<Overview />);

  await waitFor(() => {
    expect(
      screen.getByText(mockResults[0].name),
    ).toBeInTheDocument();
  });
});