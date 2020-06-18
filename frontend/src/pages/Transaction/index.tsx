import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
// import formatValue from '../../utils/formatValue';

import Header from '../../components/Header';

import { Container, Title, FormContainer, Input } from './styles';

// import alertImg from '../../assets/alert.svg';
import api from '../../services/api';

interface Transaction {
  title: string;
  value: number;
  category: string;
  type: 'income' | 'outcome' | string;
}

const Transaction: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [value, setValue] = useState<number>(0);
  const [type, setType] = useState<'income' | 'outcome' | string>('income');
  const [transaction, setTransaction] = useState<Transaction | null>(null);
  const history = useHistory();

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    setTransaction({
      title,
      category,
      value,
      type,
    });
    console.log(transaction);

    try {
      await api.post('/transactions', transaction);

      history.push('/');
    } catch (err) {
      console.log(err.response.error);
    }
  }

  return (
    <>
      <Header size="small" />
      <Container>
        <Title>Cadastrar uma transação</Title>
        <FormContainer onSubmit={handleSubmit}>
          <label htmlFor="title">Título</label>
          <Input
            hasError={false}
            value={title}
            onChange={e => setTitle(e.target.value)}
            name="title"
            placeholder="Título de sua transação"
            type="text"
            id="title"
          />

          <label htmlFor="category">Categoria</label>
          <Input
            hasError={false}
            value={category}
            onChange={e => setCategory(e.target.value)}
            name="category"
            placeholder="Categoria da transação"
            type="text"
            id="category"
          />

          <label htmlFor="value">Valor</label>
          <Input
            hasError={false}
            value={value}
            onChange={e => setValue(parseInt(e.target.value, 10))}
            name="value"
            placeholder="Valor da transação"
            type="number"
            id="value"
          />

          <label htmlFor="type">Tipo</label>
          <select onChange={e => setType(e.target.value)} name="type">
            <option value="">Selecione</option>
            <option value="income">Entrada</option>
            <option value="outcome">Saída</option>
          </select>
          <button type="submit">Enviar</button>
          {/* <Upload onUpload={submitFile} />
          {!!uploadedFiles.length && <FileList files={uploadedFiles} />}

          <Footer>
            <p>
              <img src={alertImg} alt="Alert" />
              Permitido apenas arquivos CSV
            </p>
            <button onClick={handleUpload} type="button">
              Enviar
            </button>
          </Footer> */}
        </FormContainer>
      </Container>
    </>
  );
};

export default Transaction;
