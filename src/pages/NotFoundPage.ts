import React from 'react';

const NotFoundPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.errorCode}>404</h1>
      <p style={styles.message}>Página não encontrada</p>
      <p style={styles.description}>
        Desculpe, a página que você está tentando acessar não existe ou ocorreu um erro ao carregar os dados.
      </p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
    backgroundColor: '#f4f4f4',
    color: '#333',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorCode: {
    fontSize: '6rem',
    fontWeight: 'bold',
    margin: '0',
    color: '#ff4a4a',
  },
  message: {
    fontSize: '2rem',
    margin: '20px 0',
  },
  description: {
    fontSize: '1.2rem',
    color: '#777',
    maxWidth: '600px',
    margin: '0 auto',
  }
};

export default NotFoundPage;
