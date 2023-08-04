import axios from 'axios';
import { vi } from 'vitest';

import { productsMocks } from '@/app/mocks/products';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import CreateCategoryForm, { CreateCategoryFormProps } from '..';

vi.mock(`axios`);
const mockedAxios = axios as jest.Mocked<typeof axios>;

const mockProps = { companyId: `123` } as CreateCategoryFormProps;

describe(`CreateCategoryForm`, () => {
  afterAll(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
    vi.resetAllMocks();
  });

  it(`When trying to send form without filling the category name input should render error`, async () => {
    render(<CreateCategoryForm {...mockProps} />);

    const submitButton = screen.getByRole(`button`, {
      name: `Criar categoria`,
    });

    userEvent.click(submitButton);

    expect(
      await screen.findByText(
        `É preciso preencher este campo com o nome da categoria.`
      )
    ).toBeInTheDocument();
  });

  it(`When trying to sending form filling the category name input shouldn't render error`, async () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: { products: productsMocks },
    });
    render(<CreateCategoryForm {...mockProps} />);

    const submitButton = screen.getByRole(`button`, {
      name: `Criar categoria`,
    });

    const categoryNameInput = screen.getByPlaceholderText(`Mais vendidos`);

    await userEvent.type(categoryNameInput, `Mais vendidos`);

    await userEvent.click(submitButton);

    expect(
      screen.queryByText(
        `É preciso preencher este campo com o nome da categoria.`
      )
    ).not.toBeInTheDocument();
  });
});