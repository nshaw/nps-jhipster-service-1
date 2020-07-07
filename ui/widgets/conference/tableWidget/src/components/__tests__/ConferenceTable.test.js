import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import 'components/__mocks__/i18n';
import conferenceMocks from 'components/__mocks__/conferenceMocks';
import ConferenceTable from 'components/ConferenceTable';

describe('ConferenceTable', () => {
  it('shows conferences', () => {
    const { getByText } = render(<ConferenceTable items={conferenceMocks} />);
    expect(
      getByText(
        'Et veritatis quod laboriosam incidunt vitae tenetur numquam. Nemo qui maxime praesentium a voluptatem veritatis eligendi corrupti. Repudiandae omnis ad quae accusamus rem qui.'
      )
    ).toBeInTheDocument();
    expect(
      getByText(
        'Id fuga aspernatur magnam voluptate voluptatem consequatur quisquam impedit voluptatem. Nam et dignissimos facilis voluptas. Amet deleniti optio dolorem blanditiis accusantium quis iste. Et et quis iste adipisci id adipisci. Quia temporibus sunt quam explicabo cupiditate.'
      )
    ).toBeInTheDocument();
  });

  it('shows no conferences message', () => {
    const { queryByText } = render(<ConferenceTable items={[]} />);
    expect(
      queryByText(
        'Et veritatis quod laboriosam incidunt vitae tenetur numquam. Nemo qui maxime praesentium a voluptatem veritatis eligendi corrupti. Repudiandae omnis ad quae accusamus rem qui.'
      )
    ).not.toBeInTheDocument();
    expect(
      queryByText(
        'Id fuga aspernatur magnam voluptate voluptatem consequatur quisquam impedit voluptatem. Nam et dignissimos facilis voluptas. Amet deleniti optio dolorem blanditiis accusantium quis iste. Et et quis iste adipisci id adipisci. Quia temporibus sunt quam explicabo cupiditate.'
      )
    ).not.toBeInTheDocument();

    expect(queryByText('entities.conference.noItems')).toBeInTheDocument();
  });

  it('calls onSelect when the user clicks a table row', () => {
    const onSelectMock = jest.fn();
    const { getByText } = render(
      <ConferenceTable items={conferenceMocks} onSelect={onSelectMock} />
    );
    fireEvent.click(
      getByText(
        'Et veritatis quod laboriosam incidunt vitae tenetur numquam. Nemo qui maxime praesentium a voluptatem veritatis eligendi corrupti. Repudiandae omnis ad quae accusamus rem qui.'
      )
    );
    expect(onSelectMock).toHaveBeenCalledTimes(1);
  });
});
